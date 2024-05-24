import App from './App';
import ContactPage from './components/ContactPage/ContactPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import ResumePage from './components/ResumePage/ResumePage';

const routes = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
    ],
  },
];

export default routes;
