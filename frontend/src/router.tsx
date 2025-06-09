import {
  createBrowserRouter,
  RouterProvider as RouterProviderD,
} from "react-router-dom";
import HomeWithGreeting from "./pages/greeting"; 
import ContactPage from "./pages/contact"
import {AboutPage} from "./pages/about"
import Projects from "./pages/project"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWithGreeting />,
  },
    {
    path: "/contact",
    element: <ContactPage />,
  },
    {
    path: "/about",
    element: <AboutPage />,
  },
      {
    path: "/projects",
    element: <Projects />,
  },
]);

export function RouterProvider () {
  return <RouterProviderD router={router} />;
}