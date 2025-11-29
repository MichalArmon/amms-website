import { Box, Typography } from "@mui/material";
import ProjectsGallery from "../../components/ProjectsGallery";
import ImageLightbox from "../../components/ImageLightbox";
import { useState } from "react";

function Interior() {
  const InteriorGallery = [
    {
      src: "/Interior/int1.jpg",
      col: 3,
      row: 3,
      alt: "Modern Interior",
      architect: "VisualWorks Studio",
      year: "2021",
      location: "Israel",
      description: "High-end graphic visualization for an interior study.",
    },

    {
      src: "/Interior/INT_Kitchen22.jpg",
      col: 4,
      row: 3,
      alt: "Rabbi Hanina Street",
      architect: "ConceptLine",
      year: "2020",
      location: "Israel",
      description: "Architectural drawing showcasing early massing iterations.",
    },

    {
      src: "/Interior/BEDROOM.jpg",
      col: 4,
      row: 3,
      alt: "Luxury Kitchen",
      architect: "PlanLab",
      year: "2022",
      location: "USA",
      description: "Detailed floor plan layout for a residential project.",
    },

    {
      src: "/Interior/INT_LivingroomNL.jpg",
      col: 3,
      row: 3,
      alt: "Exterior Concept",
      architect: "DraftVision",
      year: "2019",
      location: "Germany",
      description: "Diagrammatic typology illustrating façade variations.",
    },

    {
      src: "/Interior/IN-2_2.jpg",
      col: 2,
      row: 2,
      alt: "Cozy Living Room",
      architect: "PlanStudio",
      year: "2021",
      location: "Netherlands",
      description: "Technical drawing of a multi-room residential concept.",
    },

    {
      src: "/Interior/int-2.jpg",
      col: 3,
      row: 2,
      alt: "Modern Exterior",
      architect: "GraphicBuild",
      year: "2020",
      location: "France",
      description: "Graphic section exploring mass distribution and zoning.",
    },

    {
      src: "/Interior/TOR-FP.jpg",
      col: 2,
      row: 2,
      alt: "Building Concept",
      architect: "SectionLab",
      year: "2022",
      location: "UK",
      description: "Rendered section cut showing spatial hierarchy.",
    },

    {
      src: "/Interior/IN333.jpg",
      col: 3,
      row: 2,
      alt: "Urban Planning",
      architect: "UrbanDrafts",
      year: "2018",
      location: "Italy",
      description: "Architectural section illustrating city block relations.",
    },

    {
      src: "/Interior/INT111.jpg",
      col: 2,
      row: 2,
      alt: "Residential Block",
      architect: "LineSketch Studio",
      year: "2021",
      location: "Spain",
      description: "Graphic drawing for residential massing typologies.",
    },

    {
      src: "/Interior/INT_80_40.jpg",
      col: 2,
      row: 2,
      alt: "Facade Study",
      architect: "MuseumLab",
      year: "2020",
      location: "Israel",
      description: "Museum section illustrating structural and spatial flow.",
    },

    {
      src: "/Interior/INT_FINAL_N.jpg",
      col: 7,
      row: 4,
      alt: "Large Architectural Render",
      architect: "SkylineGraphics",
      year: "2022",
      location: "UAE",
      description: "Large-scale sectional rendering of mixed-use building.",
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
        items={InteriorGallery}
        onImageClick={handleImageClick}
      />
      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        items={InteriorGallery}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}

export default Interior;
