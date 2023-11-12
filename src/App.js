import  Home  from "./pages/home";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";


function App() {
  return (



    <div className="App">
          <Routes>
          {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
          ))}
          </Routes>
        {/* <Home /> */}
    </div>
  );
}

export default App;
