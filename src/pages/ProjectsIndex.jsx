import React, { useState } from "react";
import ProjectsGallery from "../components/ProjectsGallery";
import ImageLightbox from "../components/ImageLightbox";

function ProjectsIndex() {
  const galleryOriginal = [
    {
      src: "/projects/int1.jpg",
      col: 3,
      row: 2,
      alt: "Modern Interior",
      architect: "Studio Armon",
      year: "2022",
      location: "Israel",
      description: "A modern interior designed with warm materials.",
    },
    {
      src: "/projects/ramat-aviv-03.jpg",
      col: 4,
      row: 2,
      alt: "Ramat Aviv Towers",
      architect: "UrbanVision",
      year: "2021",
      location: "Israel",
      description: "High-rise residential design with luxury finishes.",
    },
    {
      src: "/projects/RABBI_HANNINA-9_02.jpg",
      col: 2,
      row: 2,
      alt: "Rabbi Hanina Street",
      architect: "Line Studio",
      year: "2019",
      location: "Israel",
      description: "Boutique apartment renovation on a historic street.",
    },
    {
      src: "/projects/INT_Kitchen22.jpg",
      col: 3,
      row: 2,
      alt: "Luxury Kitchen",
      architect: "Studio Armon",
      year: "2023",
      location: "Netherlands",
      description: "Minimalist luxury kitchen designed with natural tones.",
    },
    {
      src: "/projects/EXTR_MTCTY_HER83_VIEW_01.jpg",
      col: 2,
      row: 2,
      alt: "Exterior Concept",
      architect: "ConceptLab",
      year: "2020",
      location: "Germany",
      description: "3D concept visualization for a modern residence.",
    },
    {
      src: "/projects/BEDROOM_01no-logo.jpg",
      col: 3,
      row: 2,
      alt: "Warm Bedroom",
      architect: "Studio Armon",
      year: "2021",
      location: "Israel",
      description: "Warm-toned bedroom with soft ambient lighting.",
    },
    {
      src: "/projects/INT_80_40.jpg",
      col: 4,
      row: 2,
      alt: "Cozy Living Room",
      architect: "InteriorLab",
      year: "2020",
      location: "France",
      description: "A cozy Scandinavian-style living room.",
    },
    {
      src: "/projects/EXTR-02_60_40.jpg",
      col: 4,
      row: 2,
      alt: "Modern Exterior",
      architect: "Klein Architects",
      year: "2022",
      location: "Sweden",
      description: "Concept exterior for a hillside home.",
    },
    {
      src: "/projects/EXTR-01-80_40-FC.jpg",
      col: 3,
      row: 2,
      alt: "Building Concept",
      architect: "PrimeVision Studio",
      year: "2020",
      location: "USA",
      description: "Mass planning and material study for a new building.",
    },
    {
      src: "/projects/EXTR2_02.jpg",
      col: 2,
      row: 2,
      alt: "Urban Planning",
      architect: "UrbanLine",
      year: "2018",
      location: "Israel",
      description: "Planning concept for an urban redevelopment project.",
    },
    {
      src: "/projects/EXTR2_01_gv001.jpg",
      col: 1,
      row: 2,
      alt: "Residential Block",
      architect: "Kraft Architects",
      year: "2021",
      location: "Spain",
      description: "3D visualization for a residential block.",
    },
    {
      src: "/projects/F-R115-2-.jpg",
      col: 4,
      row: 2,
      alt: "Facade Study",
      architect: "ArchitectLab",
      year: "2019",
      location: "Italy",
      description: "Study of facade materials and shadow behavior.",
    },
    {
      src: "/projects/TOR-FP.jpg",
      col: 7,
      row: 3,
      alt: "Large Architectural Render",
      architect: "Skyline Studio",
      year: "2022",
      location: "UAE",
      description: "Large-scale architectural visualization.",
    },
    {
      src: "/projects/UNI1.jpg",
      col: 3,
      row: 2,
      alt: "Student Dorm Concept",
      architect: "EduBuild",
      year: "2020",
      location: "Germany",
      description: "Concept visualization for student dormitories.",
    },
    {
      src: "/projects/UNI2.jpg",
      col: 4,
      row: 2,
      alt: "University Masterplan",
      architect: "CampusVision",
      year: "2021",
      location: "Netherlands",
      description: "Masterplan for university campus developments.",
    },
    {
      src: "/projects/INT_LivingroomNL.jpg",
      col: 4,
      row: 2,
      alt: "Dutch Living Room",
      architect: "Studio Armon",
      year: "2023",
      location: "Netherlands",
      description: "Dutch style living room interior with warm tones.",
    },
    {
      src: "/projects/Hshok_1_2.jpg",
      col: 3,
      row: 2,
      alt: "Private House Interior",
      architect: "HomeLab",
      year: "2022",
      location: "Israel",
      description: "Modern private residence interior with natural materials.",
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
        items={galleryOriginal}
        onImageClick={handleImageClick}
      />

      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        items={galleryOriginal}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}

export default ProjectsIndex;
