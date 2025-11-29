import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import AnimationTitle from "../components/AnimationTitle";

export default function About() {
  const isDesktop = useMediaQuery("(min-width:900px)");

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        {/* 🖼️ שכבת רקע — תמונה במובייל */}
        {!isDesktop && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              backgroundImage: {
                xs: `url("/about/ABOUT_M.jpg")`,
                md: `url("/about/ABOUT.png")`,
              },
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              zIndex: 1,
            }}
          />
        )}

        {/* 🎥 וידאו — רק בדסקטופ */}
        {isDesktop && (
          <video
            src="/7_6.mp4" // <<--- שימי פה את הקובץ שלך
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        )}
      </Box>

      {/* שאר הדף — נשאר כמו שהוא */}
      <AnimationTitle text={"our studio "} />
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          color: "#444",
          lineHeight: 1.8,
        }}
      >
        {/* Our Philosophy */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#FF006E",
            mb: 1,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          Our Philosophy
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          We believe in making your design speak by communicating your
          architectural vision to your client. In today’s fast-paced
          environment, we believe your process should be accessible,
          approachable, and at the click of a button. We believe in efficiency
          and excellence. With solid architectural backgrounds, we never
          compromise on your quality. Having been clients once ourselves, we
          believe in an easy, efficient process. We have the knowledge to map
          our clients’ precise needs and create a killer image! We learned to
          tell a visual story employing the latest most powerful graphics tools
          available today. We are constantly growing, learning, and gaining
          inspiration from the world’s latest innovations. We know that an image
          which provokes emotion will always deliver the best results. This is
          what AMMS studio knows to do best.
        </Typography>

        {/* The Foundation */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#FF006E",
            mb: 1,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          The Foundation
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          Integrity, Reliability, Efficiency, Accessibility and Excellence.
          These are pillars of our company, creating a thoughtful creation space
          allowing us to bring forth our passion to your project. Give us the
          opportunity to channel our passion into your next project by doing
          what we do best.
        </Typography>

        {/* Our Mission */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#FF006E",
            mb: 1,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          Our Mission
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          We, at Studio AMMS, specialize in 3D modeling, rendering, and
          architectural visualization. We help each client bring their personal
          vision to life through tailored guidance and conceptual consolidation.
          We strongly believe in providing value for money – offering
          competitive pricing and uncompromising quality.
        </Typography>

        {/* So…How do we do it? */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#FF006E",
            mb: 1,
            fontSize: { xs: "1.1rem", md: "1.3rem" },
          }}
        >
          So…How do we do it?
        </Typography>

        <Typography
          sx={{
            mb: 4,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          We do it by bringing our expertise in specialized 3D rendering and
          offering total graphics packages to a wide range of clientele, from
          architectural offices and real estate entrepreneurs to marketing
          illustrations and more. Run by two senior architects, Architect Michal
          Armon and Architect Shira Martziano.
        </Typography>
      </Box>
    </Box>
  );
}
