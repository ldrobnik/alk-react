import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThemeProvider from "./shared/contexts/themeProvider";
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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
