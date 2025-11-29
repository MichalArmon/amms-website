import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingSocialBar from "./components/FloatingSocialBar";
import Footer from "./components/Footer";

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
        <FloatingSocialBar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
