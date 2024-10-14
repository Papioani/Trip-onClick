import { useParams } from "react-router-dom";
import ManiPage from "./ManiPage";
import SpainPage from "./SpainPage";
import NorwayPage from "./NorwayPage";

const predefinedRoutePages = {
  mani: <ManiPage />,
  spain: <SpainPage />,
  norway: <NorwayPage />,
};

export default function predefinedRoutePage() {
  const { predefinedRoute } = useParams(); // Get the dynamic route parameter

  // Render the correct page based on the route parameter
  const predefinedRoutePage =
    predefinedRoutePages[predefinedRoute.toLowerCase()];

  return predefinedRoutePage ? predefinedRoutePage : <div>Route not found</div>;
}
