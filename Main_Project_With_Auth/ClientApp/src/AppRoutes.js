import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Calculator from './components/Calculator';
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/calculator',
    element: <Calculator />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
