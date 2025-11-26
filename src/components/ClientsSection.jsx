import React from "react";
import { Box, Grid, Typography, Avatar, Divider } from "@mui/material";
import { motion } from "framer-motion";

// כאן תחליפי את הנתיבים ללוגואים שלך
import logo1 from "/clients/AK.svg";
import logo2 from "/clients/LOTAN.svg";
import logo3 from "/clients/NIZA_1.svg";

const clients = [
  {
    name: "Kisselov Kaye Architects",
    logo: logo1,
    quote:
      "Working with AMMS is always very pleasant, and especially does not compromise on quality. We warmly recommend anyone looking for creative, caring and uncompromising work!",
  },
  {
    name: "Lothan Architects",
    logo: logo2,
    quote:
      "The architectural background of the studio is reflected in all stages of the work. They know how to capture the essence and experience that I wish to present in all of my projects and help me to best reflect my architectural vision.",
  },
  {
    name: "Nitza Szmuk Architects",
    logo: logo3,
    quote:
      "I knew that my vision was in good hands — professionalism, accuracy, high-end aesthetics and attention to details.",
  },
];

export default function ClientsSection() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* כותרת עליונה */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            letterSpacing: "0.25rem",
            color: "#212121",
            mb: 1,
          }}
        >
          OUR CLIENTS
        </Typography>
        <Divider
          sx={{
            width: "50px",
            height: "3px",
            backgroundColor: "#E91E63",
            mx: "auto",
            mb: 6,
          }}
        />
      </motion.div>

      {/* גריד הכרטיסים */}
      <Grid container spacing={6} justifyContent="center">
        {clients.map((client, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              {/* לוגו עגול */}
              <Avatar
                src={client.logo}
                alt={client.name}
                sx={{
                  width: 160,
                  height: 160,
                  mx: "auto",
                  mb: 2,
                  backgroundColor: "#f0f0f0",
                  p: 3,
                  objectFit: "contain",
                  "& img": {
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  },
                }}
                variant="circular"
              />

              {/* שם המשרד */}
              <Typography
                sx={{
                  color: "#E91E63",
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  mb: 2,
                }}
              >
                {client.name}
              </Typography>

              {/* הציטוט */}
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  color: "#333",
                  lineHeight: 1.8,
                  maxWidth: 400,
                  mx: "auto",
                }}
              >
                “{client.quote}”
              </Typography>

              {/* מרכאות תחתונות */}
              <Typography
                sx={{
                  fontSize: "2rem",
                  color: "#E91E63",
                  mt: 2,
                  fontWeight: 500,
                }}
              >
                ”
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
