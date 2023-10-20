import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SelectLogin from "./pages/SelectLogin";
import AdminPage from "./pages/AdminPage";
import EmployeePage from "./pages/EmployeePage";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<SelectLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/employee/*" element={<EmployeePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
