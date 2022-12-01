import { RouterProvider } from "react-router-dom";
import rootRoutes from "./routes/rootRoutes";

function App() {
  return <RouterProvider router={rootRoutes} />;
}

export default App;
