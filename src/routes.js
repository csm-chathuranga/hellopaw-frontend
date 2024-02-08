import Home from "./pages/home";
import DoctorHome from "./pages/doctor/home";
import OwnerHome from "./pages/owner/home";
import RegisterPet from "./pages/owner/registerPet";
import MyPets from "./pages/owner/MyPets";
import ViewPet from "./pages/owner/ViewPet";

const routes = [
  { path: "/home", element: <Home />, label: "home" },
  { path: "/doctor", element: <DoctorHome />, label: "doctor" },
  { path: "/Owner", element: <OwnerHome />, label: "Owner" },
  { path: "/pet", element: <MyPets />, label: "pet" },
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
