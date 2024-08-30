/* eslint-disable no-unused-vars */
import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";

import MasterPage from "./layout/MasterPage";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import MasterDashboard from "./layout/MasterDashboard";
import Chat from "./pages/chat";

function App() {
  //<Route path="/dashboard" element={<Dashboard />}></Route>
  //<Route path="/contact" element={<Contact />}></Route>
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MasterPage />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
        <Route element={<MasterDashboard />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Route>
    )
  );

  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
