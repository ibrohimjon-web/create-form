import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AllUsers from "./pages/AllUsers/AllUsers";
import CreateUser from "./pages/CreateUser/CreateUser";
import Services from "./pages/Services/Services";
import { ToastContainer, toast } from "react-toastify";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
