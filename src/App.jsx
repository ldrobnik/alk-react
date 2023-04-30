import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeProvider from "./shared/contexts/themeProvider";
import IntlProvider from "./shared/contexts/intlProvider";
import NewsFeed from "./pages/NewsFeed";
import Explore from "./pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsFeed />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
]);

function App() {
  return (
    <IntlProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
