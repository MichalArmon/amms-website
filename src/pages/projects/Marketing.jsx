import { Box, Typography } from "@mui/material";
import ProjectsGallery from "../../components/ProjectsGallery";
import ImageLightbox from "../../components/ImageLightbox";
import { useState } from "react";

function Marketing() {
  const MarketingGallery = [
    {
      src: "/marketing/bnei-brak-7-story-residential-building-3d-exterior-visualization-mtcty.jpg",
      col: 2,
      row: 2,
      alt: "3D exterior visualization of a seven-story residential building in Bnei Brak, Israel, created for MTCity Architects.",

      architect: "MTCity Architects",
      year: "2022",
      location: "Bnei Brak|Israel",
      description:
        "High-quality 3D exterior rendering of a seven-story residential building located in Bnei Brak, Israel. Produced for MTCity Architects, this visualization highlights the architectural vision for future tenants, combining realistic lighting, material detailing, and environmental elements to create a compelling and accurate representation of the project.",
    },

    {
      src: "/marketing/bnei-brak-residential-project-exterior-3d-rendering-mtcty-architect.jpg",
      col: 2,
      row: 2,
      alt: "Photorealistic 3D exterior rendering of a residential development in Bnei Brak, Israel, created for MTCity Architects.",

      architect: "MTCity Architects",
      year: "2022",
      location: "Bnei Brak|Israel",
      description:
        "A photorealistic 3D exterior render showcasing a residential project in Bnei Brak, Israel. Designed for MTCity Architects, this visualization presents the building’s architectural form, façade materials, and urban surroundings with high-level precision, helping communicate the project’s concept and atmosphere to planners, clients, and future residents.",
    },

    {
      src: "/marketing/netivot-private-villa-3d-exterior-rendering-daylight-israel.jpg",
      col: 3,
      row: 2,
      alt: "3D exterior daylight rendering of a modern private villa in Netivot, Israel.",
      architect: "Meir Alon Engineering and Construction Ltd",
      year: "2022",
      location: "Netivot|Israel",
      description:
        "Photorealistic 3D exterior daylight rendering of a modern private villa located in a new residential neighborhood in Netivot, Israel. The visualization highlights clean architectural lines, contemporary facade materials, natural lighting, and landscaped surroundings, created to deliver an accurate and inviting representation of the residential design.",
    },

    {
      src: "/marketing/netivot-modern-private-house-exterior-3d-visualization-daylight.jpg",
      col: 3,
      row: 2,
      alt: "Modern private house exterior 3D visualization in daylight, Netivot, Israel.",

      architect: "Meir Alon Engineering and Construction Ltd",
      year: "2022",
      location: "Netivot|Israel",
      description:
        "High-end 3D exterior visualization of a modern private house in a newly developed residential area in Netivot, Israel. This daylight render emphasizes architectural proportions, material textures, driveway integration, and natural outdoor lighting to present a realistic and refined residential environment.",
    },

    {
      src: "/marketing/urban-renewal-modular-residential-exterior-3d-rendering-kisselov-kaye-israel.jpg",
      col: 2,
      row: 2,
      alt: "Realistic 3D exterior rendering of a modular residential urban renewal project by Kisselov Kaye Architects in Israel.",

      architect: "Kisselov Kaye Architects",
      year: "2020",
      location: "Tel Aviv|Israel",
      description:
        "Realistic exterior 3D rendering of an experimental modular urban renewal project designed by Kisselov Kaye Architects in Israel. The architectural concept is based on a historic modular prototype developed by architect Teddy Kisselov, featuring dynamic stacked volumes, integrated greenery, and a contemporary residential vision adapted to dense urban environments.",
    },
    {
      src: "/marketing/bat-yam-urban-renewal-3d-exterior-visualization-kisselov-kaye.jpg",
      col: 2,
      row: 2,
      alt: "3D exterior visualization of an urban renewal project in Bat Yam, Israel, created for Kisselov Kaye Architects.",
      architect: "Kisselov Kaye Architects",
      year: "2018",
      location: "PBat Yam|Israel",
      description:
        "High-end 3D exterior rendering of an urban renewal development in Bat Yam, Israel. The visualization was produced for Kisselov Kaye Architects and showcases architectural massing, updated urban facade design, and improved public space planning. The render highlights modern residential architecture and realistic environmental lighting to support planning and marketing processes.",
    },
  ];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <ProjectsGallery
        items={MarketingGallery}
        onImageClick={handleImageClick}
      />
      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        items={MarketingGallery}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}

export default Marketing;
