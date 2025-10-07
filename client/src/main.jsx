import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login';
import App from './App';
import Home from './Components/Home';
import Contact from './Components/Contact';
import MainAbout from './Components/pages/MainAbout';
import OtherService from './Components/pages/OtherService';
import CartPage from './Components/pages/CartPage';
import CheckoutPage from './Components/pages/Checkout';
import SubscriptionPage from './Components/pages/SubcriptionPage';
import CardForm from './Components/pages/CardForm';
import PlanPage from './Components/pages/PlanPages';
import AppointmentPage from './Components/pages/AppointmentPage';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Cart from './Components/pages/Cart';
import CreditCard from './Components/pages/CreditCard';
import Paypal from './Components/pages/PayPal';
import Receipt from './Components/pages/Recipt';
import AppointmentSuccess from './Components/pages/AppointmentSuccess';
import AboutPage from './Components/pages/AboutPage';




const router = createBrowserRouter([
    { path: '/', element: <Register /> },
    { path: '/login', element: <Login /> },

    { path: '/profile', element: <App />,
    children: [
      {path: '/profile', element: <Profile/>}
    ]
  },
  { path: '/home', element: <App />,
    children: [
      {path: '/home', element: <Home />}
    ]
  },
  { path: '/', element: <App />,
    children: [
      {path: '/contact', element: <Contact />}
    ]
  },
  { path: '/', element: <App />,
    children: [
      {path: '/about', element: <MainAbout />}
    ]
  },
  { path: '/', element: <App />,
    children: [
      {path: '/card', element: <CreditCard />}
    ]
  },
   { path: '/', element: <App />,
    children: [
      {path: '/paypal', element: <Paypal />}
    ]
  },
  { path: '/', element: <App />,
    children: [
      {path: '/appointment-success', element: <AppointmentSuccess />}
    ]
  },
   { path: '/', element: <App />,
    children: [
      {path: '/services', element: <OtherService />}
    ]
  },
   { path: '/', element: <App />,
    children: [
      {path: '/shop', element: <CartPage />}
    ]
  },
  { path: '/', element: <App />,
    children: [
      {path: '/cart', element: <Cart />}
    ]
  },
   { path: '/', element: <App />,
    children: [
      {path: '/checkout', element: <CheckoutPage />}
    ]
  },
  { path: '/', element: <App />,
    children: [
      {path: '/receipt', element: <Receipt />}
    ]
  },
   { path: '/', element: <App />,
    children: [
      {path: '/subscribe', element: <SubscriptionPage />}
    ]
  },
  { path: '/', element: <App />,
    children: [
      {path: '/plan', element: <PlanPage />}
    ]
  },
     { path: '/', element: <App />,
    children: [
      {path: '/cardID', element: <CardForm />}
    ]
  },
   { path: '/', element: <App />,
    children: [
      {path: '/aboutpage', element: <AboutPage />}
    ]
  },
   { path: '/', element: <App />,
    children: [
      {path: '/appointment', element: <AppointmentPage/>}
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
