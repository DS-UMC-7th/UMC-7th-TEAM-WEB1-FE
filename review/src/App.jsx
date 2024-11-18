import {createBrowserRouter, RouterProvider} from "react-router-dom";

import MainPage from "./pages/Main.jsx";
import NotFound from "./pages/not-found.jsx";
import RootLayout from "./layout/root-layout.jsx";
import Recent from "./pages/RecentReview.jsx"
import Popularity from "./pages/PopularityReview.jsx";
import WriteReview from "./pages/WriteReview.jsx";
import ReviewDetail from "./pages/ReviewDetail.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'review',
        children: [
          {
            path: 'recent',
            element: <Recent />,
          },
          {
            path: 'popularity',
            element: <Popularity />,
          },
          {
            path: 'write',
            element: <WriteReview />,
          },
          {
            path: 'detail',
            element: <ReviewDetail />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
}


export default App;