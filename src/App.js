import NavBar from "./containers/NavBar";
import appRoute from "./routes/app.route";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes(appRoute);

  return (
    <>
      <NavBar />
      <main>{routes}</main>
    </>
  );
}

export default App;
