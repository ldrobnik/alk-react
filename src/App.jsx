import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ApiProvider from "./shared/contexts/apiProvider";
import IntlProvider from "./shared/contexts/intlProvider";
import ThemeProvider from "./shared/contexts/themeProvider";
import Home from "./pages/Home";
import Explore from "./pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);

export default function App() {
  return (
    <ApiProvider>
      <IntlProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </IntlProvider>
    </ApiProvider>
  );
}
