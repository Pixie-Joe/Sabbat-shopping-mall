// src/pages/Receipt.js
import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Receipt = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const receiptRef = useRef();

  // 🔒 Protect page - check login
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (!storedUser) {
      navigate("/login"); // redirect if not logged in
    }
  }, [navigate]);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No receipt available. Please make a payment first.</p>
      </div>
    );
  }

  let {
    customerName,
    cardNumber,
    price,
    paymentDate,
    deliveryDate,
    products = [],
  } = state;

  // 💳 Mask card number
  const maskedCard = cardNumber
    ? "**** **** **** " + cardNumber.slice(-4)
    : "N/A";

  // 📅 Format dates
  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString() : "N/A";

  // Save as PDF
  const saveAsPDF = () => {
    const input = receiptRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("receipt.pdf");
    });
  };

  // Save or Share as Image
  const saveAsImage = () => {
    const input = receiptRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      canvas.toBlob((blob) => {
        if (navigator.share && blob) {
          const file = new File([blob], "receipt.png", { type: "image/png" });
          navigator
            .share({
              title: "Payment Receipt",
              text: "Here’s your payment receipt",
              files: [file],
            })
            .catch(() => {
              const link = document.createElement("a");
              link.download = "receipt.png";
              link.href = canvas.toDataURL("image/png");
              link.click();
            });
        } else {
          const link = document.createElement("a");
          link.download = "receipt.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        }
      }, "image/png");
    });
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div
        ref={receiptRef}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg border border-gray-200"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🧾 Receipt</h1>
          <p className="text-gray-500 text-sm">Thank you for your purchase!</p>
        </div>

        {/* Products Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Purchased Items</h2>
          <ul className="divide-y divide-gray-200">
            {products.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold mt-3 text-lg">
            Total: ${price.toFixed(2)}
          </div>
        </div>

        {/* Receipt Details */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Customer Name:</span>
            <span>{customerName}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Card:</span>
            <span>{maskedCard}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Payment Date:</span>
            <span>{formatDate(paymentDate)}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Estimated Delivery:</span>
            <span>{formatDate(deliveryDate)}</span>
          </div>
        </div>
      </div>

      {/* Save Options */}
      <div className="mt-6 flex gap-4 w-full max-w-lg">
        {isMobile ? (
          <button
            onClick={saveAsImage}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md"
          >
            Save / Share Receipt
          </button>
        ) : (
          <button
            onClick={saveAsPDF}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow-md"
          >
            Save as PDF
          </button>
        )}
        <button
          onClick={() => navigate("/home")}
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-md"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Receipt;
0