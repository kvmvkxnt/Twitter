import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './Components/Login/Login';
import Sign from "./Components/Sign/Sign";

function Unauth() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Sign />} />
        </Routes>
    )
}

export default Unauth;