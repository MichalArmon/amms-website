import { Box } from "@mui/material";
import ContactForm from "../components/ContactForm";
import AnimationTitle from "../components/AnimationTitle";

function Contact() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, mt: 10 }}>
      <AnimationTitle text={"Get In Touch "} />
      <ContactForm />
    </Box>
  );
}

export default Contact;
