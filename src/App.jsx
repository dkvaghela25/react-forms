import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import PureReact from './pages/PureReact';
import Formik from './pages/Formik';
import ReactHookForm from './pages/ReactHookForm';
import { sendData } from './utils/sendData';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: "/pure-react",
          element: <PureReact />,
          action: sendData
        },
        {
          path: "/formik",
          element: <Formik />,
          action: sendData
        },
        {
          path: "/react-hook-form",
          element: <ReactHookForm />,
          action: sendData
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
