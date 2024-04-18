import { Suspense } from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = ({ authUser }) => {
  return (
    <>
      <Header authUser={authUser} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
