import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export { Routes };
