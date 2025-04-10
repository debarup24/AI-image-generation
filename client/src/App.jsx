import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-100 via-purple-50 to-orange-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credits" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// https://logo-suggestion.renderforest.com/suggestions-images/ea51/a095/ea51a0959450d52606c1505ced884ab3.png
