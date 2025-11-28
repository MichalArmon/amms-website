import { Box, Typography } from "@mui/material";
import ProjectsGallery from "../../components/ProjectsGallery";
import ImageLightbox from "../../components/ImageLightbox";
import { useState } from "react";

function Graphics() {
  const graphicsGallery = [
    {
      src: "/graphics/TYP-N.jpg",
      col: 2,
      row: 3,
      alt: "Modern Interior",
      architect: "VisualWorks Studio",
      year: "2021",
      location: "Israel",
      description: "High-end graphic visualization for an interior study.",
    },

    {
      src: "/graphics/TYP--B-.jpg",
      col: 2,
      row: 3,
      alt: "Rabbi Hanina Street",
      architect: "ConceptLine",
      year: "2020",
      location: "Israel",
      description: "Architectural drawing showcasing early massing iterations.",
    },

    {
      src: "/graphics/floor-plan.png",
      col: 3,
      row: 3,
      alt: "Luxury Kitchen",
      architect: "PlanLab",
      year: "2022",
      location: "USA",
      description: "Detailed floor plan layout for a residential project.",
    },

    {
      src: "/graphics/TYP-B1.jpg",
      col: 3,
      row: 3,
      alt: "Exterior Concept",
      architect: "DraftVision",
      year: "2019",
      location: "Germany",
      description: "Diagrammatic typology illustrating façade variations.",
    },

    {
      src: "/graphics/floor-plan.jpg",
      col: 4,
      row: 3,
      alt: "Cozy Living Room",
      architect: "PlanStudio",
      year: "2021",
      location: "Netherlands",
      description: "Technical drawing of a multi-room residential concept.",
    },

    {
      src: "/graphics/TYP-E.jpg",
      col: 3,
      row: 3,
      alt: "Modern Exterior",
      architect: "GraphicBuild",
      year: "2020",
      location: "France",
      description: "Graphic section exploring mass distribution and zoning.",
    },

    {
      src: "/graphics/sem2.jpg",
      col: 4,
      row: 3,
      alt: "Building Concept",
      architect: "SectionLab",
      year: "2022",
      location: "UK",
      description: "Rendered section cut showing spatial hierarchy.",
    },

    {
      src: "/graphics/section-4.jpg",
      col: 3,
      row: 3,
      alt: "Urban Planning",
      architect: "UrbanDrafts",
      year: "2018",
      location: "Italy",
      description: "Architectural section illustrating city block relations.",
    },

    {
      src: "/graphics/sem3.jpg",
      col: 2,
      row: 3,
      alt: "Residential Block",
      architect: "LineSketch Studio",
      year: "2021",
      location: "Spain",
      description: "Graphic drawing for residential massing typologies.",
    },

    {
      src: "/graphics/SECTION-MUSEUM.jpg",
      col: 2,
      row: 3,
      alt: "Facade Study",
      architect: "MuseumLab",
      year: "2020",
      location: "Israel",
      description: "Museum section illustrating structural and spatial flow.",
    },

    {
      src: "/graphics/section-4.jpg",
      col: 7,
      row: 4,
      alt: "Large Architectural Render",
      architect: "SkylineGraphics",
      year: "2022",
      location: "UAE",
      description: "Large-scale sectional rendering of mixed-use building.",
    },

    {
      src: "/graphics/big_se2.jpg",
      col: 3,
      row: 3,
      alt: "Student Dorm Concept",
      architect: "EduDraft Studio",
      year: "2019",
      location: "Germany",
      description: "Conceptual section of student housing building.",
    },

    {
      src: "/graphics/big_se.jpg",
      col: 4,
      row: 3,
      alt: "University Masterplan",
      architect: "CampusVision",
      year: "2021",
      location: "Netherlands",
      description: "Masterplan section of large academic complex.",
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
        items={graphicsGallery}
        onImageClick={handleImageClick}
      />
      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        items={graphicsGallery}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}

export default Graphics;
