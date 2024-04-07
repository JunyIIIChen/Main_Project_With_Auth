import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Calculator from './components/Calculator';
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

import QuestionOne from './components/Questions/QuestionOne';
import QuestionTwo from './components/Questions/QuestionTwo';
//import QuestionThree from './components/Questions/QuestionThree';
//import QuestionFour from './components/Questions/QuestionFour';
//import QuestionFive from './components/Questions/QuestionFive';
//import QuestionSix from './components/Questions/QuestionSix';
//import QuestionSeven from './components/Questions/QuestionSeven';
//import QuestionEight from './components/Questions/QuestionEight';
//import QuestionNine from './components/Questions/QuestionNine';
//import QuestionTen from './components/Questions/QuestionTen';

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

    // questions routes
    {
        path: '/questionOne',
        element: <QuestionOne />
    },
    {
        path: '/questionTwo',
        element: <QuestionTwo />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
