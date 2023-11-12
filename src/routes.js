import Home from "./pages/home";
import Contact from "./pages/contact";

const routes = [
  { path: "/", element: <Home />, label: "Dashboard" },
  { path: "/contact", element: <Contact />, label: "contact" },
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
