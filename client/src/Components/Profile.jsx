import React, { useEffect, useState } from "react";
import { FaUserTie, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({ fullname: "", email: "", role: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    setProfilePic(parsedUser.photo || null);

    if (parsedUser.role === "admin") fetchAllUsers();
  }, [navigate]);

  const fetchAllUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/users");
      const data = await res.json();
      if (data.success) setAllUsers(data.users);
      else toast.error("Failed to fetch users");
    } catch (err) {
      console.error(err);
      toast.error("Error fetching users");
    }
  };

  const handleLogout = () => {
  // Remove user from localStorage
  localStorage.removeItem("currentUser");

  // Show a message using plain JS
  alert("Logout was successful!");

  // Redirect to login page
  navigate("/login");
};

  const handleProfilePicChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("profilePic", file);

    try {
      setLoading(true);
      const res = await fetch(`http://localhost:8080/api/users/uploadProfilePic/${user._id}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Profile picture updated!");
        const photoUrl = data.user.photo.startsWith("http")
          ? data.user.photo
          : `http://localhost:8080/uploads/${data.user.photo}`;
        setProfilePic(photoUrl);

        const updatedUser = { ...user, photo: photoUrl };
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      } else {
        toast.error(data.message || "Failed to upload picture");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error uploading picture");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (u) => {
    setEditUserId(u._id);
    setEditUserData({ fullname: u.fullname, email: u.email, role: u.role });
  };

  const cancelEdit = () => {
    setEditUserId(null);
    setEditUserData({ fullname: "", email: "", role: "" });
  };

  const saveEdit = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUserData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("User updated!");
        fetchAllUsers();
        cancelEdit();
      } else {
        toast.error(data.message || "Failed to update user");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating user");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`http://localhost:8080/api/users/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("User deleted!");
        fetchAllUsers();
      } else {
        toast.error(data.message || "Failed to delete user");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error deleting user");
    }
  };

  if (!user) return <div className="text-center py-10">Loading profile...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          {user.role === "admin" ? "Admin Dashboard" : "User Profile"}
        </h2>

        {user.role !== "admin" && (
          <>
            <div className="relative">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
              ) : (
                <FaUserTie className="w-24 h-24 text-gray-400" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-24 h-24 rounded-full"
                title="Click to change profile picture"
              />
            </div>

            <div className="flex flex-col gap-3 w-full text-gray-700 mt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Full Name:</span>
                <span>{user.fullname || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{user.email || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Address:</span>
                <span>{user.address || "N/A"}</span>
              </div>
            </div>
          </>
        )}

        {user.role === "admin" && (
          <div className="w-full mt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">All Users:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-3 py-2 border">Name</th>
                    <th className="px-3 py-2 border">Email</th>
                    <th className="px-3 py-2 border">Role</th>
                    <th className="px-3 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((u) => (
                    <tr key={u._id} className="hover:bg-gray-100">
                      <td className="px-3 py-2 border">
                        {editUserId === u._id ? (
                          <input
                            type="text"
                            value={editUserData.fullname}
                            onChange={(e) => setEditUserData({ ...editUserData, fullname: e.target.value })}
                            className="border px-1 rounded"
                          />
                        ) : (
                          u.fullname
                        )}
                      </td>
                      <td className="px-3 py-2 border">
                        {editUserId === u._id ? (
                          <input
                            type="email"
                            value={editUserData.email}
                            onChange={(e) => setEditUserData({ ...editUserData, email: e.target.value })}
                            className="border px-1 rounded"
                          />
                        ) : (
                          u.email
                        )}
                      </td>
                      <td className="px-3 py-2 border">
                        {editUserId === u._id ? (
                          <select
                            value={editUserData.role}
                            onChange={(e) => setEditUserData({ ...editUserData, role: e.target.value })}
                            className="border px-1 rounded"
                          >
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>
                        ) : (
                          u.role
                        )}
                      </td>
                      <td className="px-3 py-2 border flex gap-2">
                        {editUserId === u._id ? (
                          <>
                            <button
                              onClick={() => saveEdit(u._id)}
                              className="bg-green-500 text-white px-2 py-1 rounded"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="bg-gray-500 text-white px-2 py-1 rounded"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEdit(u)}
                              className="bg-yellow-500 text-white px-2 py-1 rounded flex items-center gap-1"
                            >
                              <FaEdit /> Edit
                            </button>
                            <button
                              onClick={() => deleteUser(u._id)}
                              className="bg-red-500 text-white px-2 py-1 rounded flex items-center gap-1"
                            >
                              <FaTrash /> Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      <div className="flex justify-center mt-6 gap-4">
  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
  >
    Logout
  </button>
</div>

      </div>
    </div>
  );
};

export default Profile;
