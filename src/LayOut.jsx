import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
