import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginAdmin from "./pages/LoginAdmin";
import LoginEmployee from "./pages/LoginEmployee";
import RegisterAdmin from "./pages/RegisterAdmin";
import RegisterEmployee from "./pages/RegisterEmployee";
import SelectLogin from "./pages/SelectLogin";
import AdminPage from "./pages/AdminPage";
import EmployeePage from "./pages/EmployeePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectLogin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-employee" element={<LoginEmployee />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/register-employee" element={<RegisterEmployee />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
