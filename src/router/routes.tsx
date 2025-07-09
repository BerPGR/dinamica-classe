import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Selected from "../screens/Selected";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Selected />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
