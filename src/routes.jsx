import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';

const routes = [
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
];

export default routes;
