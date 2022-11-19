import { useState } from "react";
import { BrowserRouter, Routes, Route } from
 "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Product from "./pages/Products";
import SingleProduct from './pages/SingleProduct'

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:productId" element={<SingleProduct/>} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="dashboard" element={<Dashboard user={user}></Dashboard>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
