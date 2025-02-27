import './App.css'
import HomePage from './HomePage'
import Headder from './Headder'
import Footter from './Footter'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import FertRecPage from './FertRecPage'
import News from './News'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Headder/> <HomePage /> <Footter/> </>,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/sign_up",
      element: <SignupPage />,
    },
    {
      path: "/fert_rec",
      element: <> <Headder/> <FertRecPage /> <Footter/> </>,
    },
    {
      path: "/news",
      element: <> <Headder/> <News /> <Footter/> </>,
    },
  ])

  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;