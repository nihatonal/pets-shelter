import {
  BrowserRouter,
  Routes,
  Route,
 // useLocation,
} from "react-router-dom";

//import { useLayoutEffect } from "react";

import MainNavigation from "./shared/Navigation/MainNavigation";
import MainPage from "./MainPage/Page/MainPage";
import Footer from "./shared/Footer/Page/Footer";
import "./App.css";

function App() {
  // const Wrapper = ({ children }) => {
  //   const location = useLocation();
  //   useLayoutEffect(() => {
  //     document.documentElement.scrollTo(0, 0);
  //   }, [location.pathname]);

  //   return children;
  // };

  return (
    <BrowserRouter>
      <MainNavigation />

      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
