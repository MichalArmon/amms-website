import { Box, Typography } from "@mui/material";
import ProjectsGallery from "../../components/ProjectsGallery";
import ImageLightbox from "../../components/ImageLightbox";
import { useState } from "react";

function Graphics() {
  const graphicsGallery = [
    {
      src: "/graphics/led-tzur-marketing-floor-plan-type-a.jpg",
      col: 2,
      row: 2,
      alt: "2D architectural marketing floor plan rendering of apartment type A, presenting residential layout, room distribution, and color-coded spaces with clear spatial hierarchy",
      architect: "Led Tzur",
      year: "2021",
      location: "Israel",
      description:
        "2D architectural marketing floor plan rendering designed to present apartment type A with clarity and precision. The plan highlights the internal layout, room distribution, and functional zoning of the residential unit. Color-coded areas enhance readability and help communicate scale, proportions, and spatial relationships. Created for real estate marketing and architectural presentation, the floor plan allows clients and developers to quickly understand the apartment design in a visually engaging and accurate manner.",
    },

    {
      src: "/graphics/led-tzur-marketing-floor-plan-type-b.jpg",
      col: 2,
      row: 2,
      alt: "2D architectural marketing floor plan rendering showing residential apartment layout, shared areas, balconies, and furniture arrangement in a clean and accurate graphic style",
      architect: "ConceptLine",
      year: "2020",
      location: "Israel",
      description:
        "High-end 2D architectural marketing floor plan rendering designed to clearly showcase residential apartment layouts in a refined and professional visual language. The drawing presents private units, shared spaces, balconies, and furniture arrangements with a strong emphasis on architectural accuracy and spatial clarity. Created for marketing and presentation purposes, the floor plan allows developers, architects, and clients to easily understand the apartment distribution and functional flow. The graphic style combines detailed AutoCAD-based linework with clean composition and soft, elegant coloring, resulting in a precise, visually compelling architectural representation optimized for digital and print use.",
    },

    {
      src: "/graphics/marketing-floor-plan-render.png",
      col: 3,
      row: 2,
      alt: "2D architectural marketing floor plan rendering showing residential apartment layout, shared areas, balconies, and furniture arrangement in a clean and accurate graphic style",
      architect: "PlanLab",
      year: "2022",
      location: "USA",
      description:
        "High-end 2D architectural marketing floor plan rendering designed to clearly showcase residential apartment layouts in a refined and professional visual language. The drawing presents private units, shared spaces, balconies, and furniture arrangements with a strong emphasis on architectural accuracy and spatial clarity. Created for marketing and presentation purposes, the floor plan allows developers, architects, and clients to easily understand the apartment distribution and functional flow. The graphic style combines detailed AutoCAD-based linework with clean composition and soft, elegant coloring, resulting in a precise, visually compelling architectural representation optimized for digital and print use.",
    },

    {
      src: "/graphics/floor-plan.jpg",
      col: 3,
      row: 2,
      alt: "Cozy Living Room",
      architect: "PlanStudio",
      year: "2021",
      location: "Netherlands",
      description: "Technical drawing of a multi-room residential concept.",
    },

    {
      src: "/graphics/led-tzur-marketing-floor-plan-type-c.jpg",
      col: 2,
      row: 2,
      alt: "Architectural 2D floor plan marketing render of apartment type C, showing residential space planning, furniture layout, and color-based zoning for real estate presentation",
      architect: "Led Tzur",
      year: "2020",
      location: "France",
      description:
        "Architectural 2D floor plan marketing render presenting apartment type C with a focus on space planning and usability. The plan includes furniture layout and clearly defined zones, helping potential buyers understand room sizes and living flow. Developed for real estate marketing, this floor plan balances technical accuracy with a clean, approachable graphic style suitable for digital and print materials.",
    },
    {
      src: "/graphics/led-tzur-marketing-floor-plan-type-d.jpg",
      col: 2,
      row: 2,
      alt: "2D architectural marketing floor plan of apartment type D, emphasizing residential layout, functional zoning, and vivid color presentation for real estate marketing",
      architect: "Led Tzur",
      year: "2019",
      location: "Germany",
      description:
        "2D architectural marketing floor plan created to showcase apartment type D in a vivid and easy-to-read visual language. The rendering emphasizes functional zoning, spatial balance, and overall apartment organization. Through the use of color and precise linework, the floor plan supports effective real estate marketing by making complex architectural information accessible to clients, investors, and sales teams.",
    },
    {
      src: "/graphics/sem2.jpg",
      col: 4,
      row: 2,
      alt: "Building Concept",
      architect: "SectionLab",
      year: "2022",
      location: "UK",
      description: "Rendered section cut showing spatial hierarchy.",
    },

    {
      src: "/graphics/section-4.jpg",
      col: 3,
      row: 2,
      alt: "Urban Planning",
      architect: "UrbanDrafts",
      year: "2018",
      location: "Italy",
      description: "Architectural section illustrating city block relations.",
    },

    {
      src: "/graphics/sem3.jpg",
      col: 2,
      row: 2,
      alt: "Residential Block",
      architect: "LineSketch Studio",
      year: "2021",
      location: "Spain",
      description: "Graphic drawing for residential massing typologies.",
    },

    {
      src: "/graphics/SECTION-MUSEUM.jpg",
      col: 2,
      row: 2,
      alt: "Facade Study",
      architect: "MuseumLab",
      year: "2020",
      location: "Israel",
      description: "Museum section illustrating structural and spatial flow.",
    },
    {
      src: "/graphics/plang.jpg",
      col: 3,
      row: 2,
      alt: "Facade Study",
      architect: "MuseumLab",
      year: "2020",
      location: "Israel",
      description: "Museum section illustrating structural and spatial flow.",
    },

    {
      src: "/graphics/section-4.jpg",
      col: 7,
      row: 3,
      alt: "Large Architectural Render",
      architect: "SkylineGraphics",
      year: "2022",
      location: "UAE",
      description: "Large-scale sectional rendering of mixed-use building.",
    },

    {
      src: "/graphics/big_se2.jpg",
      col: 3,
      row: 2,
      alt: "Student Dorm Concept",
      architect: "EduDraft Studio",
      year: "2019",
      location: "Germany",
      description: "Conceptual section of student housing building.",
    },

    {
      src: "/graphics/big_se.jpg",
      col: 4,
      row: 2,
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
