import { Provider } from "react-redux";
import { Layout } from "../Layout/Layout";
import "./App.css";
import { store } from "../../redux/store";
import { UserContextProvider } from "../../contexts/user-context/user-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { RestaurantsPage } from "../Restaurants/RestaurantsPage";
import { RestaurantPage } from "../RestaurantPage/RestaurantPage";
import { MenuPage } from "../MenuPage/MenuPage";
import { ReviewPage } from "../ReviewPage/ReviewPage";
import { DishPage } from "../DishPage/DishPage";
import { DishesPage } from "../DishesPage/DishesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/restaurants",
    element: <RestaurantsPage />,
    children: [
      {
        path: ":id",
        element: <RestaurantPage />,
        children: [
          {
            path: "menu",
            element: <MenuPage />,
          },
          {
            path: "reviews",
            element: <ReviewPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/dish",
    element: <DishesPage />,
    children: [{ path: ":id", element: <DishPage /> }],
  },
  { path: "/home", element: <HomePage /> },
]);

export function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <Layout>
          <RouterProvider router={router}></RouterProvider>
        </Layout>
      </UserContextProvider>
    </Provider>
  );
}
