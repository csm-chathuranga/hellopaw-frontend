import Home from "./pages/home";
import DoctorHome from "./pages/doctor/home";
import OwnerHome from "./pages/owner/home";
import RegisterPet from "./pages/owner/registerPet";
import MyPets from "./pages/owner/MyPets";
import ViewPet from "./pages/owner/ViewPet";
import Vets from "./pages/services/vets";
import Appointment from "./pages/appointment/Appointment";
import Service from "./pages/services/Service";
import MyAppointment from "./pages/appointment/MyAppointment";
import MakeAppointment from "./pages/appointment/MakeAppointment";

import ZoomMeeting from "./pages/zoom/ZoomMeeting";


const routes = [
  { path: "/", element: <Home />, label: "home" },
  { path: "/doctor", element: <DoctorHome />, label: "doctor" },
  { path: "/owner", element: <OwnerHome />, label: "owner" },
  { path: "/pet", element: <MyPets />, label: "pet" },
  { path: "/ViewPet/:id", element: <ViewPet />, label: "ViewPet" },
  { path: "/petRegister", element: <RegisterPet />, label: "petRegister" },
  { path: "/petRegister/:id", element: <RegisterPet />, label: "petRegister" },
  
  { path: "/appointment", element: <Appointment />, label: "appointment" },
  { path: "/myAppointment", element: <MyAppointment />, label: "My Appointment" },
  { path: "/appointment/:id", element: <MakeAppointment />, label: "MakeAppointment" },

  { path: "/vets", element: <Vets />, label: "vets" },
  { path: "/service/:type", element: <Service />, label: "grooming" },


  { path: "/zoom", element: <ZoomMeeting />, label: "zoom" },


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
