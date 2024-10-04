import { Suspense, lazy } from "react";
import { useState } from "react";
import "./styles/globals.css";
import Layout from "./pages/dashboard/Layout.jsx";
import { Navigate, useRouteError } from "react-router-dom";
import LazyLoad from "./utils/LazyLoad.jsx";
import Error404 from "./components/404Error.jsx";
function dashboardLoading(path, fallback) {
  const Component = lazy(
    () => import(/* @vite-ignore */ `./pages/dashboard/${path}`),
  );
  return LazyLoad(Component, fallback);
}

const Overview = dashboardLoading(
  "Overview.jsx",
  <div className="main">Loading....</div>,
);
const Orders = dashboardLoading(
  "Orders.jsx",
  <div className="main">Loading....</div>,
);
const Products = dashboardLoading(
  "Products.jsx",
  <div className="main">Loading....</div>,
);
const AddProduct = dashboardLoading(
  "Addproduct.jsx",
  <div className="main">Loading....</div>,
);
const Inventory = dashboardLoading(
  "Inventory.jsx",
  <div className="main">Loading....</div>,
);
const Users = dashboardLoading(
  "Users.jsx",
  <div className="main">Loading....</div>,
);
const Analytics = dashboardLoading(
  "Analytics.jsx",
  <div className="main">Loading....</div>,
);
const Settings = dashboardLoading(
  "Settings.jsx",
  <div className="main">Loading....</div>,
);
const SupportAndHelp = dashboardLoading(
  "Supportandhelp.jsx",
  <div className="main">Loading....</div>,
);

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SingleProduct from "./components/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/addProduct",
        element: <AddProduct />,
      },
      {
        path: "products/singleproduct",
        element: <SingleProduct />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "supportandhelp",
        element: <SupportAndHelp />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
