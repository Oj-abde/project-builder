import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ClaimsList = lazy(() => import("../containers/claims-list/ClaimsList"));
const ClaimDetails = lazy(
  () => import("../containers/claim-details/ClaimDetails"),
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <ClaimsList />,
      },
      {
        path: "/:claimId",
        element: <ClaimDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
