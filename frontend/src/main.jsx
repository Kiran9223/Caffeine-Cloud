import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ItemDetails from "./ItemDetails";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_u31HcAzEx",
  client_id: "6d08gf3q1c817vhnrqaahem40f",
  redirect_uri: "https://d2nqewy99tmlia.cloudfront.net",
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details/:id" element={<ItemDetails />} />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
)