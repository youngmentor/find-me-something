import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './App'
import Landing from './screens/Landing'
import SignUp from './screens/SignUp'
import Onboarding from './screens/Onboarding'
import Support from './screens/Support'
import PaymentSuccess from './screens/PaymentSuccess'
import Dashboard from './screens/Dashboard'
import ShareTools from './screens/ShareTools'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="creator" element={<Support />} />
          <Route path="success" element={<PaymentSuccess />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="share" element={<ShareTools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
