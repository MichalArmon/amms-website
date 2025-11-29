import { Box } from "@mui/material";
import YouTubeVideoGrid from "../components/YouTubeVideoGrid";
import AnimationTitle from "../components/AnimationTitle";

function Animation() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, mt: 10 }}>
      <AnimationTitle text={"ANIMATION & INTERACTIVE "} />
      <YouTubeVideoGrid />
    </Box>
  );
}

export default Animation;
