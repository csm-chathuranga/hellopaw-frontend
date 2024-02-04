import Home from "./pages/home";
import DoctorHome from "./pages/doctor/home";
import OwnerHome from "./pages/owner/home";
import RegisterPet from "./pages/owner/registerPet";
import MyPets from "./pages/owner/MyPets";
import ViewPet from "./pages/owner/ViewPet";

const routes = [
  { path: "/home", element: <Home />, label: "Dashboard" },
  { path: "/doctor", element: <DoctorHome />, label: "DoctorDashboard" },
  { path: "/owner", element: <OwnerHome />, label: "OwnerDashboard" },
  { path: "/pet", element: <MyPets />, label: "pets" },
  { path: "/ViewPet/:id", element: <ViewPet />, label: "ViewPet" },
  { path: "/petRegister", element: <RegisterPet />, label: "petRegister" },
  { path: "/petRegister/:id", element: <RegisterPet />, label: "petRegister" },
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
