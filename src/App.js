import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import DashBoard from './components/pages/DashBoard'
import FullPolicy from './components/pages/fullpolicy'
import CreatePolicies from './components/pages/CreatePolicies'
import Orglogin from './components/pages/orglogin'
import Orgregister from './components/pages/orgregister'
import OrgNavbar from './components/pages/OrgNavbar'
import Home2 from './components/pages/home2'
import UserProfile from './components/pages/UserProfile'






export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    
                    <Route exact path="/" element={<LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={<RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } /> 
                    <Route path="/dashboard" element={ <DashBoard/> } /> 
                    <Route path="/fullpolicy" element={ <FullPolicy/> } />
                    <Route path="/CreatePolicies" element={ <CreatePolicies/> } /> 
                    <Route path="/orglogin" element={ <Orglogin/> } />
                    <Route path="/orgregister" element={ <Orgregister/> } />
                    <Route path="/OrgNavbar" element={ <OrgNavbar/> } />
                    <Route path="/home2" element={ <Home2/> } /> 
                <Route path="/UserProfile" element={ <UserProfile/> } /> 
                    
                    

                </Routes>
                
            </div>
        </Router>
    )
}



