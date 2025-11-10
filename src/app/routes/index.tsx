import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export { Routes };
