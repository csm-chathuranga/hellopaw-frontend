import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Login from "./pages/login";
import Broading from "./pages/services/broading";

const routes = [
  { path: "/", element: <Home />, label: "Dashboard" },
  { path: "/contact", element: <Contact />, label: "contact" },
  { path: "/login", element: <Login />, label: "Login" },
  { path: "/about", element: <About />, label: "About" },
  { path: "/service-broading", element: <Broading />, label: "About" },
  // {
  //   path: "/ingestion-status",
  //   element: <IngestionStatus />,
  //   label: "ingestion status",
  // },

];

const labels = {
  "/": "dashboard",
};

export { labels };

export default routes;
