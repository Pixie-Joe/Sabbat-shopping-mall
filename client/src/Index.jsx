import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Components/pages/Navbar';
const Index = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
     <main className='relative'>

            <div className="content">
              <div className="mt-6 overflow-auto flex flex-1 flex-col" onClick={() => setShowMenu(false) }>
                  <Outlet />
              </div>
                
            </div>  
      
    </main>
  )
}

export default Index