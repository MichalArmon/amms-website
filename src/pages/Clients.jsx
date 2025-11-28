import TestimonialCarousel from "../components/TestimonialCarousel";
import { Box, Typography } from "@mui/material";
import TitleWithHighlight from "../components/TitleWithHighlight";
import ClientsLogos from "../components/ClientsLogos";

export default function Clients() {
  return (
    <Box sx={{ mt: 12 }}>
      <TitleWithHighlight first="AMONG OUR" last="CLIENTS" />
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: 4,
        }}
      >
        <TestimonialCarousel />
        <ClientsLogos />
      </Box>
    </Box>
  );
}
