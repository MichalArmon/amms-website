import React, { useEffect, useState } from "react";

export default function LogoLoader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // מתחיל fade-out אחרי 2.5 שניות
    const t = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
        position: "fixed",
        inset: 0,

        // ✨ כאן קורה הפייד
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease-out",
      }}
    >
      <video
        src="/ANIMATION_LOGO2.mp4"
        autoPlay
        muted
        playsInline
        style={{
          width: "90vw",
          maxWidth: "850px",
          minWidth: "140px",
          height: "auto",
        }}
      />
    </div>
  );
}
