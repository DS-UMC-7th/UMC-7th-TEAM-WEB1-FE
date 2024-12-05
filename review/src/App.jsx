import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/Main.jsx";
import NotFound from "./pages/not-found.jsx";
import RootLayout from "./layout/root-layout.jsx";
import WriteReview from "./pages/ReviewWrite/WriteReview.jsx"
import ReviewDetail from "./pages/ReviewDetail.jsx";
import Reviews from "./pages/Reviews.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "review",
        children: [
          {
            path: "list",
            element: <Reviews />,
          },
          {
            path: "detail/1",
            element: <ReviewDetail />,
          },
          {
            path: "write",
            element: <WriteReview />,
          },
        ],
      },

      {
        path: "search", // 검색 경로 추가
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
