import { createBrowserRouter } from 'react-router-dom'
import Layout from './App'
import Landing from './screens/Landing'
import SignUp from './auth/SignUp'
import Login from './auth/Login'
import Onboarding from './auth/Onboarding'
import Support from './screens/Support'
import PaymentSuccess from './screens/PaymentSuccess'
import Dashboard from './dashboard/Dashboard'
import DashboardLayout from './dashboard/DashboardLayout'
import ShareTools from './screens/ShareTools'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'onboarding', element: <Onboarding /> },
      { path: 'creator', element: <Support /> },
      { path: 'success', element: <PaymentSuccess /> },
      { path: 'share', element: <ShareTools /> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
])

export default router
