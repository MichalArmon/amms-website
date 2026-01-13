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
      src: "/graphics/residential-apartment-marketing-floor-plan-render..jpg",
      col: 3,
      row: 2,
      alt: "2D architectural marketing floor plan rendering of a residential apartment showing detailed room layout, furniture arrangement, bathrooms, kitchen, living area, and outdoor terrace",
      architect: "PlanStudio",
      year: "2021",
      location: "Netherlands",
      description:
        "High-end 2D architectural marketing floor plan rendering of a residential apartment, designed to clearly present spatial layout and functional organization. The plan illustrates bedrooms, bathrooms, kitchen, dining and living areas, along with detailed furniture arrangements and an outdoor terrace. Emphasis is placed on clarity, proportions, and usability, allowing potential buyers and clients to easily understand the apartment’s flow and lifestyle qualities. The clean graphic style combines precise architectural linework with subtle shading and color accents, making the floor plan ideal for real estate marketing, sales presentations, and digital portfolios.",
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
      src: "/graphics/conceptual-section-alternative-housing-urban.jpg",
      col: 4,
      row: 2,
      alt: "Conceptual architectural section illustrating alternative housing in an urban environment, combining theoretical design, spatial analysis, and architectural visualization techniques",
      architect: "SectionLab",
      year: "2022",
      location: "Urban context",
      description:
        "Conceptual architectural section developed for a theoretical project exploring alternative housing models in the urban environment. The section demonstrates a design methodology that combines precise AutoCAD-based modeling with spatial definition, internal and natural lighting studies, and three-dimensional visualization. The representation integrates architectural section drawing, lighting analysis, 3D rendering, and graphic illustration to convey spatial depth, atmosphere, and conceptual intent. This project reflects an interdisciplinary approach to architectural thinking, merging technical accuracy with visual storytelling for academic research and conceptual architectural exploration.",
    },

    {
      src: "/graphics/architectural-section-theoretical-complex-building.jpg",
      col: 3,
      row: 2,
      alt: "Architectural section of a complex building combining residential structure with an underground museum, illustrating spatial relationships and urban integration",
      architect: "UrbanDrafts",
      year: "2018",
      location: "Yarkon River Park | Tel Aviv, Israel",
      description:
        "Architectural section developed for a theoretical project presenting a complex building that integrates residential spaces with an underground museum. The section explores the relationship between above-ground living areas and subterranean public functions, emphasizing spatial hierarchy and circulation. Created for an urban context along the Yarkon River in Tel Aviv, the drawing combines precise AutoCAD-based modeling with photorealistic coloring and architectural detailing. The project highlights a layered architectural approach that merges housing, culture, and public space within a single complex structure.",
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
      src: "/graphics/architectural-section-complex-building-yarkon.jpg",
      col: 7,
      row: 3,
      alt: "Conceptual architectural section of a complex urban building, featuring residential areas above an underground museum in a theoretical design context",
      architect: "SkylineGraphics",
      year: "2022",
      location: "Tel Aviv | Israel",
      description:
        "Conceptual architectural section created as part of a theoretical design project, depicting a complex urban building composed of residential functions above an underground museum. The section focuses on architectural layering, interior-exterior relationships, and the integration of public and private programs. Generated from a detailed AutoCAD 2D file and enhanced with photorealistic coloring, the drawing communicates architectural intent, material depth, and spatial complexity. The project demonstrates an academic approach to urban architecture and mixed-use design representation.",
    },

    {
      src: "/graphics/prospective-section-final-project-architecture..jpg",
      col: 3,
      row: 2,
      alt: "Prospective architectural section rendering of a final project, illustrating interior spaces, natural lighting, and layered architectural composition",
      architect: "EduDraft Studio",
      year: "Final Project",
      location: "Tel Aviv | Israel",
      description:
        "Prospective architectural section created as part of a final project, presenting a refined balance between interior spaces and natural lighting. The rendering emphasizes spatial depth, architectural layering, and the relationship between built form and light. Developed using vector-based workflows and high-level graphic filtering, the section delivers a clear and visually compelling representation suitable for architectural presentation, portfolio display, and academic evaluation.",
    },

    {
      src: "/graphics/prospective-section-final-project-rendering.jpg",
      col: 4,
      row: 2,
      alt: "Architectural prospective section of a final project, combining precise rendering, interior-exterior relationships, and controlled natural lighting",
      architect: "CampusVision",
      year: "Final Project",
      location: "Tel Aviv | Israel",
      description:
        "Architectural prospective section developed for a final academic project, focusing on accurate rendering techniques and spatial clarity. The section explores the interaction between interior architecture and natural lighting through controlled composition and precise detailing. Produced using vector layers and advanced filtering methods, the drawing reflects a high level of architectural resolution and serves as a comprehensive representation of design intent within a professional academic context.",
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
