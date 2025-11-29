import { Box, Typography } from "@mui/material";
import ProjectsGallery from "../../components/ProjectsGallery";
import ImageLightbox from "../../components/ImageLightbox";
import { useState } from "react";

export default function Creative() {
  const creativeGallery = [
    {
      src: "/creative/1.jpg",
      col: 3,
      row: 4,
      alt: "Modern Interior",
      architect: "VisualWorks Studio",
      year: "2021",
      location: "Israel",
      description: "High-end graphic visualization for an interior study.",
    },

    {
      src: "/creative/2.png",
      col: 2,
      row: 2,
      alt: "Rabbi Hanina Street",
      architect: "ConceptLine",
      year: "2020",
      location: "Israel",
      description: "Architectural drawing showcasing early massing iterations.",
    },

    {
      src: "/creative/3.png",
      col: 2,
      row: 2,
      alt: "Luxury Kitchen",
      architect: "PlanLab",
      year: "2022",
      location: "USA",
      description: "Detailed floor plan layout for a residential project.",
    },
    {
      src: "/creative/6.png",
      col: 4,
      row: 3,
      alt: "Modern Exterior",
      architect: "GraphicBuild",
      year: "2020",
      location: "France",
      description: "Graphic section exploring mass distribution and zoning.",
    },

    {
      src: "/creative/4.png",
      col: 1,
      row: 1,
      alt: "Exterior Concept",
      architect: "DraftVision",
      year: "2019",
      location: "Germany",
      description: "Diagrammatic typology illustrating façade variations.",
    },

    {
      src: "/creative/5.png",
      col: 2,
      row: 1,
      alt: "Cozy Living Room",
      architect: "PlanStudio",
      year: "2021",
      location: "Netherlands",
      description: "Technical drawing of a multi-room residential concept.",
    },

    {
      src: "/creative/7.png",
      col: 3,
      row: 2,
      alt: "Building Concept",
      architect: "SectionLab",
      year: "2022",
      location: "UK",
      description: "Rendered section cut showing spatial hierarchy.",
    },

    {
      src: "/creative/8.png",
      col: 3,
      row: 2,
      alt: "Urban Planning",
      architect: "UrbanDrafts",
      year: "2018",
      location: "Italy",
      description: "Architectural section illustrating city block relations.",
    },

    {
      src: "/creative/9.gif",
      col: 1,
      row: 2,
      alt: "Residential Block",
      architect: "LineSketch Studio",
      year: "2021",
      location: "Spain",
      description: "Graphic drawing for residential massing typologies.",
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
        items={creativeGallery}
        onImageClick={handleImageClick}
      />
      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        items={creativeGallery}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}
