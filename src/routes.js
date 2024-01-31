import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Login from "./pages/login";
import Broading from "./pages/services/broading";
import DoctorHome from "./pages/doctor/home";
import OwnerHome from "./pages/owner/home";
import RegisterPet from "./pages/owner/registerPet";
import MyPets from "./pages/owner/MyPets";

const routes = [
  { path: "/", element: <Home />, label: "Dashboard" },
  { path: "/doctor", element: <DoctorHome />, label: "DoctorDashboard" },
  { path: "/owner", element: <OwnerHome />, label: "OwnerDashboard" },
  { path: "/owner/pet", element: <MyPets />, label: "pets" },
  { path: "/owner/pet/register", element: <RegisterPet />, label: "petRegister" },
  { path: "/owner/pet/register/:id", element: <RegisterPet />, label: "petRegister" },
  // { path: "/contact", element: <Contact />, label: "contact" },
  // { path: "/login", element: <Login />, label: "Login" },
  // { path: "/about", element: <About />, label: "About" },
  // { path: "/service-broading", element: <Broading />, label: "About" },
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
