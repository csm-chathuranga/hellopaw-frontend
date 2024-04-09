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
import Gig from "./pages/user/Gig";
import PetConsultation from "./pages/appointment/StartSession";

// import ZoomMeeting from "./pages/zoom/ZoomMeeting";

import PostForm from "./pages/post/Addpost";
import PostList from "./pages/post/PostList";

import AddBank from "./pages/Bank/AddBank";
import BankList from "./pages/Bank/BankList";


import DoctorList from "./pages/DoctorConfirm/DoctorList";

import NewList from "./pages/newList/NewList";
import AddNew from "./pages/newList/AddNew";

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

  { path: "/myService", element: <Gig />, label: "my service" },
  { path: "/session/:id", element: <PetConsultation />, label: "my service" },

  { path: "/post/add", element: <PostForm />, label: "Add Post" },
  { path: "/post/add/:id", element: <PostForm />, label: "Edit Post" },
  { path: "/posts", element: <PostList />, label: "Add Post" },

  { path: "/bank/add", element: <AddBank />, label: "Add bank" },
  { path: "/bank/add/:id", element: <AddBank />, label: "Edit bank" },
  { path: "/banks", element: <BankList />, label: "bank list" },


  { path: "/doctorList", element: <DoctorList />, label: "Doctor list" },

  { path: "/newSection", element: <NewList />, label: "New section" },
  { path: "/newSection/add", element: <AddNew />, label: "Add New Section" },

  // { path: "/zoom", element: <ZoomMeeting />, label: "zoom" },


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
