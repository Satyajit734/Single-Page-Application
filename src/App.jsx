import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Root from "./Components/Root";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },   
      { path: "about", element: <About /> },  
      { path: "contact", element: <Contact /> } 
    ]
  }
]);


function App(){
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
