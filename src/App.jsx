import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ViewRegisteredDeals from "./pages/ViewRegisteredDeals";
import RegisterDeal from "./pages/RegisterDeal";
import HomePage from "./pages/HomePage";
import DealDetails from "./pages/DealDetails";
import WhyChooseUs from "./pages/WhyChooseUs";
import ProductsServices from "./pages/ProductsServices";
import Technology from "./pages/Technology";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home/opps/register" element={<RegisterDeal />} />
      <Route path="/home/opps/registered" element={<ViewRegisteredDeals />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/deals" element={<ViewRegisteredDeals />} />
      <Route path="/deals/:id" element={<DealDetails />} />
      <Route path="/whychooseus" element={<WhyChooseUs />} />
      <Route path="/productsServices" element={<ProductsServices />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
}

export default App;
