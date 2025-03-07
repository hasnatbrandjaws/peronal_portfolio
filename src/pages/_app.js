import React, { useEffect, useState, createContext } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Head from "next/head";
import Layout from "./layout";
import "../styles/globals.css";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 150,
      width: 150,
      backgroundColor: "#def31c",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <CursorContext.Provider value={{ textEnter, textLeave }}>
      {children}
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="cursor w-4 h-4 bg-red-500 rounded-full fixed pointer-events-none"
      />
    </CursorContext.Provider>
  );
};

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on("scroll", () => {});
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <CursorProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CursorProvider>
    </>
  );
};

export default MyApp;
