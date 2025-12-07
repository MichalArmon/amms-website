import { Box, Typography } from "@mui/material";
import ProjectsGallery from "../../components/ProjectsGallery";
import ImageLightbox from "../../components/ImageLightbox";
import { useState } from "react";

function Interior() {
  const InteriorGallery = [
    {
      src: "/Interior/luxury-beach-house-3d-interior-rendering.jpg",
      col: 3,
      row: 3,
      alt: "3D interior rendering of a luxury beach house designed for a private client",
      architect: "AMMS Studio",
      year: "2021",
      location: "Privet|Israel",
      description:
        "High-quality 3D interior rendering of a luxury beach house, created as part of a full design, modeling, and visualization process for a private client. The project features refined coastal materials, warm lighting, and an elegant atmosphere that blends comfort with premium beachfront aesthetics.",
    },

    {
      src: "/Interior/danish-kitchen-3d-interior-rendering-meir-alon-engineering.jpg",
      col: 4,
      row: 3,
      alt: "3D interior rendering of a Danish-style kitchen designed for Meir Alon Engineering and Construction",
      architect: "Meir Alon Engineering and Construction Ltd",
      year: "2022",
      location: "Netivot|Israel",
      description:
        "High-quality 3D interior rendering of a Danish-style kitchen created as part of a series of architectural visualizations for Meir Alon Engineering and Construction Ltd. The design features warm, natural tones and Scandinavian minimalism to create a cozy and elegant atmosphere. This visualization highlights refined material selection, precise detailing, and thoughtful spatial composition tailored to the clients' vision.",
    },

    {
      src: "/Interior/master-bedroom-3d-interior-rendering-meir-alon-engineering.jpg",
      col: 4,
      row: 3,
      alt: "3D interior rendering of a luxurious master bedroom designed for Meir Alon Engineering and Construction",
      architect: "Meir Alon Engineering and Construction Ltd",
      year: "2022",
      location: "Netivot|Israel",
      description:
        "High-quality 3D interior rendering of a luxurious master bedroom created as part of a series of architectural visualizations for Meir Alon Engineering and Construction Ltd. The design showcases a warm, elegant atmosphere tailored for a couple, featuring refined materials, sophisticated detailing, and soft ambient lighting to emphasize comfort and intimacy.",
    },

    {
      src: "/Interior/living-room-3d-interior-rendering-meir-alon-engineering.jpg",
      col: 3,
      row: 3,
      alt: "3D interior rendering of a luxurious modern living room designed for Meir Alon Engineering and Construction",
      architect: "Meir Alon Engineering and Construction Ltd",
      year: "2022",
      location: "Netivot|Israel",
      description:
        "High-end 3D interior rendering of a luxurious living room created as part of a series of architectural visualizations for Meir Alon Engineering and Construction Ltd. The design blends modern and classic elements to create a warm, sophisticated atmosphere for a couple, featuring elegant materials, refined detailing, and thoughtful spatial composition that reflects the clients' personal vision.",
    },

    {
      src: "/Interior/hebrew-language-academy-museum-3d-interior-rendering-jerusalem.jpg",
      col: 2,
      row: 2,
      alt: "3D interior rendering for the Hebrew Language Academy Museum competition proposal in Jerusalem",
      architect: "AMMS Studio & Sabra Studio",
      year: "2021",
      location: "Jerusalem|Israel",
      description:
        "High-quality 3D interior rendering created for a competition proposal to design the Hebrew Language Academy Museum in Jerusalem. Developed in collaboration with Sabra Studio, this visualization highlights an innovative construction strategy inspired by natural daylight, climatic considerations, and the cultural narrative of the Hebrew language. The design explores modular elements, material contrasts, and flexible spatial solutions to support future exhibitions and educational experiences.",
    },

    {
      src: "/Interior/azrieli-school-architecture-lothan-architects-3d-interior-visualization.jpg",
      col: 3,
      row: 2,
      alt: "3D interior visualization for the Azrieli School of Architecture competition by Lothan Architects",
      architect: "Lothan Architects",
      year: "2020",
      location: "Tel Aviv|Israel",
      description:
        "Detailed 3D interior visualization created for the architectural competition proposal by Lothan Architects for the Azrieli School of Architecture at Tel Aviv University. Produced in collaboration with Sabra Studio, the rendering highlights interior spatial organization, material contrasts, natural lighting, and the conceptual design approach behind the project. This visualization forms part of a broader set of images developed to communicate the project’s architectural vision.",
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
      src: "/Interior/hebrew-language-academy-museum-3d-visualization-interior-jerusalem..jpg",
      col: 3,
      row: 2,
      alt: "Architectural 3D interior visualization for the Hebrew Language Academy Museum design competition in Jerusalem",
      architect: "AMMS Studio & Sabra Studio",
      year: "2021",
      location: "Jerusalem|Israel",
      description:
        "A detailed architectural 3D interior visualization created for the design competition of the Hebrew Language Academy Museum in Jerusalem. Produced in collaboration with Sabra Studio, the rendering explores spatial composition, natural light behavior, and a conceptual design approach rooted in the cultural heritage of the Hebrew language. The visualization highlights refined material choices, modular interior elements, and flexible exhibition spaces that support the museum’s future programming.",
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
      src: "/Interior/tel-aviv-central-station-theoretical-project-3d-interior-visualization.jpg",
      col: 2,
      row: 2,
      alt: "Interior 3D architectural visualization for a theoretical project near Tel Aviv Central Station",
      architect: "Sapir",
      year: "2020",
      location: "Tel Aviv|Israel",
      description:
        "High-quality 3D interior architectural visualization created for a theoretical project located near Tel Aviv Central Station. The design explores the connection between the station and the university through a sequence of commercial and residential elements. This rendering presents one of the interior commercial passages, highlighting circulation flow, escalator accessibility, refined material choices, and a contemporary spatial atmosphere.",
    },

    {
      src: "/Interior/levada-secondary-school-jerusalem-3d-interior-rendering-powsner-architects.jpg",
      col: 7,
      row: 4,
      alt: "3D interior rendering of Levada – The Hebrew University Secondary School in Jerusalem, designed by Powsner Architects",
      architect: "Powsner Architects",
      year: "2022",
      location: "UAE",
      description:
        "High-quality 3D interior rendering of Levada – The Hebrew University Secondary School in Jerusalem, designed by Powsner Architects. The visualization highlights the modern learning environment through precise material selection, warm natural lighting, and contemporary spatial organization. As one of Israel’s most established architectural firms, Powsner Architects bring extensive experience to educational design, creating functional, inspiring spaces that support student engagement and academic excellence.",
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
