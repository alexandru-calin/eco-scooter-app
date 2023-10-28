import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import Locations from "./routes/locations";

const center = [45.760696, 21.226788];
const points = [
  {
    lat: 45.74807260622888,
    lng: 21.23212516357711,
    title: "Universitatea de Vest",
  },
  {
    lat: 45.75519952575813,
    lng: 21.22620284624511,
    title: "Centru Timisoara",
  },
  {
    lat: 45.76747485777342,
    lng: 21.22817695243303,
    title: "Iulius Town",
  },
  {
    lat: 45.758732703143394,
    lng: 21.22869193616293,
    title: "Piata Unirii",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/locations",
    element: <Locations center={center} points={points} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
