import { Box, Typography } from "@mui/material";
import ProjectsGallery from "../../components/ProjectsGallery";
import ImageLightbox from "../../components/ImageLightbox";
import { useState } from "react";

export default function Exterior() {
  const exteriorGallery = [
    {
      src: "/exterior/private-villa-holon-3d-exterior-rendering-spector-sinai-architect.png",
      col: 4,
      row: 3,
      alt: "High-quality 3D exterior rendering showcasing a private villa in Holon, Israel, designed by Spector–Sinai Architects. The visualization highlights the modern façade concept, combining wood and Corten steel materials, as well as the detailed design of the backyard pool area surrounded by a landscaped garden.",
      architect: "VisualWorks Studio",
      year: "2021",
      location: " Holon|Israel",
      description:
        "High-quality 3D exterior rendering showcasing a private villa in Holon, Israel, designed by Spector–Sinai Architects. The visualization highlights the modern façade concept, combining wood and Corten steel materials, as well as the detailed design of the backyard pool area surrounded by a landscaped garden.",
    },

    {
      src: "/exterior/baga-al-jarbia-urban-planning-3d-visualization-mirel-shelach.jpg",
      col: 3,
      row: 3,
      alt: "3D exterior visualization for an urban planning project in Baga al-Jarbia by student Mirel Shelach",

      architect: "Mirel Shelach",
      year: "2020",
      location: "Baga al-Jarbia|Israel",
      description: "Architectural drawing showcasing early massing iterations.",
    },

    {
      src: "/exterior/baga-al-jarbia-urban-planning-3d-exterior-rendering-mirel-shelach.jpg",
      col: 7,
      row: 4,
      alt: "3D exterior rendering for an urban planning academic project in Baga al-Jarbia by student Mirel Shelach",
      architect: "Mirel Shelach",
      year: "2019",
      location: "Baga al-Jarbia|Israel",
      description:
        "High-quality 3D exterior rendering created as part of an academic urban planning project in Baga al-Jarbia. The visualization presents the design concept by student Mirel Shelach from the Department of Urban Planning, showcasing environmental development strategies, community-focused planning, and an architectural vision inspired by the cultural and natural landscape of the region.",
    },

    {
      src: "/exterior/baga-al-jarbia-urban-planning-final-project-3d-rendering.jpg",
      col: 3,
      row: 3,
      alt: "3D exterior rendering for an urban planning project in Baga al-Jarbia by student Mirel Shelach",
      architect: "Mirel Shelach",
      year: "2019",
      location: "Baga al-Jarbia|Israel",
      description:
        "A detailed 3D exterior rendering created as part of an urban planning final project in Baga al-Jarbia. Designed by Mirel Shelach from the Department of Urban Planning, this visualization presents an environmental and community-oriented approach, blending landscape elements, residential patterns, and regional identity. The rendering highlights the conceptual development of the area through advanced modeling, thoughtful spatial design, and atmospheric presentation.",
    },

    {
      src: "/exterior/azrieli-school-architecture-competition-lothan-architects-3d-night-rendering.jpg",
      col: 4,
      row: 4,
      alt: "3D night rendering for the Azrieli School of Architecture competition by Lothan Architects at Tel Aviv University",
      architect: "Lothan Architects",
      year: "2019",
      location: "Tel Aviv|Israel",
      description:
        "High-quality 3D night rendering created for the architectural competition to design the Azrieli School of Architecture at Tel Aviv University. The visualization presents Lothan Architects’ concept, produced in collaboration with Sabra Studio, highlighting the project’s innovative architectural vision and nighttime atmosphere.",
    },

    {
      src: "/exterior/mograbi-square-tel-aviv-public-building-3d-exterior-rendering.png",
      col: 1,
      row: 1,
      alt: "3D exterior daylight rendering of a public building at Mograbi Square in Tel Aviv, designed by Spector–Sinai Architects",
      architect: "Spector–Sinai Architects.",
      year: "2021",
      location: "Tel Aviv|Israel",
      description:
        "High-quality 3D exterior daylight rendering of a public building designed for a theoretical project by Spector–Sinai Architects. Located at Mograbi Square at the intersection of Allenby and Ben Yehuda streets in Tel Aviv, the visualization highlights the urban significance of the historic 'Mograbi Cinema' site and its cultural influence on the local community. The rendering presents refined façade elements, modern materials, and a vibrant urban atmosphere that reflects the architectural vision behind the project.",
    },

    {
      src: "/exterior/mograbi-square-tel-aviv-architectural-3d-visualization-public-building.png",
      col: 2,
      row: 1,
      alt: "Architectural 3D visualization of a public building at Mograbi Square in Tel Aviv by Spector–Sinai Architects",
      architect: "Spector–Sinai Architects.",
      year: "2021",
      location: "Tel Aviv|Israel",
      description:
        "Architectural 3D visualization created for a conceptual public building project located in Mograbi Square, Tel Aviv. Designed by Spector–Sinai Architects, this rendering emphasizes the cultural and historical importance of the former Mograbi Cinema and its role within the urban fabric. The visualization showcases contemporary structural elements, façade treatments, and a detailed interpretation of the site's civic character.",
    },

    {
      src: "/exterior/azrieli-school-architecture-competition-lothan-architects-3d-exterior-rendering.jpg",
      col: 7,
      row: 4,
      alt: "3D exterior rendering for the architectural competition proposal by Lothan Architects at the Azrieli School of Architecture, Tel Aviv University",
      architect: "Lothan Architects",
      year: "2019",
      location: "Tel Aviv|Israel",
      description:
        "High-quality 3D exterior rendering created for an architectural competition proposal designed by Lothan Architects, in collaboration with Sabra Studio. Produced as part of a series of visualizations for the Azrieli School of Architecture at Tel Aviv University, this rendering highlights the project's concept through precise modeling, detailed material work, and refined presentation techniques.",
    },

    {
      src: "/exterior/azrieli-school-architecture-competition-kisselov-kaye-3d-rendering.jpg",
      col: 4,
      row: 3,
      alt: "3D exterior rendering of the modular architectural concept by Kisselov-Kaye Architects for the Azrieli School of Architecture competition",
      architect: "Kisselov-Kaye Architects",
      year: "2019",
      location: "Tel Aviv|Israel",
      description:
        "A detailed 3D exterior rendering showcasing the modular and colorful architectural concept developed by Kisselov-Kaye Architects. Created for the architectural competition to design the Azrieli School of Architecture at Tel Aviv University, the visualization highlights the project's approach to modularity, program distribution, and vibrant visual identity. The rendering emphasizes advanced modeling, layered façade treatments, and dynamic public spaces within the proposed campus compound.",
    },

    {
      src: "/exterior/PreservationProjecHanina8TelAviv.jpg",
      col: 3,
      row: 3,
      alt: "Preservation Projec | Hanina 8 |Tel Aviv",
      architect: "Kisselov Kaye Architects",
      year: "2012",
      location: "Tel Aviv | Israel",
      description:
        "High-quality 3D visualization and architectural rendering of a residential preservation building located at 9 Hanina Street, Jaffa, Tel Aviv. This preservation project was created for the historic structure designed by Kisselov Kaye Architects, one of Israel’s leading architectural firms.",
    },
    {
      src: "/exterior/Conceptual3DVisualization.jpg",
      col: 3,
      row: 3,
      alt: "Conceptual 3D Visualization",
      architect: "Odia Polnaor",
      year: "2009",
      location: "Negev, Israel",
      description:
        "Conceptual 3D visualization for a complex project that combines a residential building with a community center. In this project, it was important for both us and the client to create a warm and inviting atmosphere. By using a refined monochromatic color palette that blends seamlessly with the wooden structural elements surrounding the building, we were able to achieve this warmth—drawing inspiration from the project's desert location and from real environmental imagery of the Negev landscape. We truly love this project!",
    },
    {
      src: "/exterior/exterior-architectural-visualization-rokach-tel-aviv-3d-rendering.jpg",

      col: 4,
      row: 3,
      alt: "3D exterior rendering of a conceptual architectural project near Rokach train station in Tel Aviv",
      architect: "Sapir",
      year: "2021",
      location: "Tel Aviv|Israel",
      description:
        "High-quality exterior architectural 3D visualization created for a conceptual academic project located near the Rokach Tel Aviv train station. This visualization explores the connection between the university campus and the surrounding residential fabric, combining contemporary forms with cinematic lighting and atmospheric perspective. The rendering presents an imaginative vision that reflects advanced modeling techniques, careful material selection, and refined compositional design.",
    },
    {
      src: "/exterior/ramat-aviv-community-center-tel-aviv-3d-exterior-visualization.jpg",
      col: 4,
      row: 3,
      alt: "3D exterior visualization of the Ramat Aviv Community Center in Tel Aviv",
      architect: "Kisselov Kaye Architects",

      year: "2022",
      location: "Tel Aviv|Israel",
      description:
        "High-quality 3D exterior visualization of the Ramat Aviv Community Center in Tel Aviv. The architectural design features layered façades, integrated greenery, and open public spaces that promote community interaction. The visualization highlights the building’s modern materials, shading systems, and the seamless connection between the interior and the surrounding landscape, presenting a clear and engaging view of the project's urban and environmental vision.",
    },
    {
      src: "/exterior/rokach-tel-aviv-3d-exterior-rendering-architectural-concept.jpg",
      col: 3,
      row: 3,
      alt: "3D exterior rendering of a conceptual architectural project near Rokach train station in Tel Aviv",
      architect: "Sapir",
      year: "2019",
      location: "Tel Aviv|Israel",
      description:
        "Atmospheric 3D exterior rendering created for a conceptual academic project located near the Rokach train station in Tel Aviv. This visualization explores the relationship between transportation infrastructure, the university campus, and the surrounding residential environment. The rendering highlights modern architectural elements, dynamic lighting, and carefully crafted spatial composition to present an imaginative and forward-looking urban concept.",
    },
    {
      src: "/exterior/bat-yam_UrbanRenewal.jpg",
      col: 5,
      row: 3,
      alt: "TAMA 38/2 project in Merkaz HaTechiya, Bat Yam – residential renovation",
      architect: "SkylineGraphics",
      year: "2022",
      location: "UAE",
      description:
        "Realistic exterior 3D rendering of an experimental design by Kisselov Kaye Architects. This modular design is based on a historical prototype invented by the founder of the dynasty, architect Teddy Kisselov.",
    },
    {
      src: "/exterior/performing-visual-arts-center-yehuda-halevy-tel-aviv-3d-exterior-rendering.jpg",
      col: 2,
      row: 3,
      alt: "Exterior 3D rendering of a performing and visual arts center on Yehuda Halevy Street, Tel Aviv",
      architect: "Shira Martziano",
      year: "2022",
      location: "Tel Aviv|Israel",
      description:
        "High-quality exterior 3D rendering of a unique performing and visual arts center located on Yehuda Halevy Street, corner of Lincoln, Tel Aviv. The architectural visualization integrates multiple construction methods, materials, and textures, combining precise modeling, detailed material mapping, and advanced Photoshop post-production to present the building’s complex design and modern character.",
    },
    {
      src: "/exterior/old-city-market-lod-3d-architectural-visualization-urban-design.jpg",
      col: 3,
      row: 3,
      alt: "3D architectural visualization of the Old City Market in Lod, created for an award-winning urban design project",
      architect: "Shira Martziano",
      year: "2010",
      location: "Lod|Israel",
      description:
        "Detailed 3D architectural visualization of the Old City Market in Lod, showcasing the project's urban design concept through refined modeling and advanced Photoshop post-production. Created as part of an award-winning final academic project that received the Hans Davidson Prize for Excellence in Urban Design, in collaboration with architect Elad Geffen.",
    },
    {
      src: "/exterior/old-city-market-lod-3d-exterior-rendering-urban-design-award.jpg",
      col: 4,
      row: 3,
      alt: "High-quality realistic exterior 3D rendering of the Old City Market in Lod, produced with advanced Photoshop post-production techniques. This visualization was created as part of a final academic project that won the Hans Davidson Prize for Excellence in Urban Design. Developed in collaboration with architect Elad Geffen, the project presents a refined urban renewal concept with strong cultural and architectural identity.",
      architect: "Shira Martziano ",
      year: "2010",
      location: "Lod|Israel",
      description: "Large-scale sectional rendering of mixed-use building.",
    },
    {
      src: "/exterior/old-city-market-lod-night-3d-rendering-urban-design.jpg",
      col: 7,
      row: 3,
      alt: "Nighttime 3D rendering of the Old City Market in Lod for an award-winning urban design project",

      architect: "Shira Martziano ",
      year: "2010",
      location: "Lod|Israel",
      description:
        "Atmospheric nighttime 3D rendering of the Old City Market in Lod, highlighting the project’s lighting strategy, urban character, and renovated public spaces. This night visualization was created for a final urban design project that won the Hans Davidson Prize for Excellence, developed in collaboration with architect Elad Geffen. The rendering emphasizes the vibrant evening ambiance and architectural details of the redesigned market area.",
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
        items={exteriorGallery}
        onImageClick={handleImageClick}
      />
      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        items={exteriorGallery}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}
