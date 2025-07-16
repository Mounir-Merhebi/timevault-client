import { useState } from "react";

import{Routes, Route} from "react-router-dom";

import Landing from "../Pages/LandingPage";
import Profile from "../Pages/Profile"; 
import PublicWall from "../Pages/PublicWall";
import Dashboard from "../Pages/Dashboard";
import CreateCapsule from "../Pages/CreateCapsule";
import ViewCapsule from "../Pages/ViewCapsule";
import Auth from "../Pages/Auth";



const MyRoutes = () => {
  return (
    <Routes>
       <Route path="/auth" element={<Auth/>} />
      <Route path="/" element={<Landing/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/PublicWall" element={<PublicWall/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/ViewCapsule" element={<ViewCapsule/>} />
      <Route path="/CreateCapsule" element={<CreateCapsule/>} />
    </Routes>
  );
};

export default MyRoutes;