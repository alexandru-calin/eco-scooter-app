import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Locations from "./routes/locations";

const center = [45.760696, 21.226788];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/locations",
    element: <Locations center={center} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
