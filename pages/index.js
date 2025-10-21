{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // pages/index.js\
import ProjectCard from "../components/ProjectCard";\
\
const projects = [\
  \{\
    title: "AlphaTrak App",\
    description: "UX/UI case study redesigning a mobile app for tracking pets.",\
    tech: ["Figma", "User Research", "Prototyping"],\
    link: "https://medium.com/@itneeraj/alphatrak-case-study-xxxx",\
    image: "/images/pet-app-1.png"  // main image for AlphaTrak\
  \},\
  \{\
    title: "Medela App",\
    description: "UX/UI case study on breastfeeding and pumping products.",\
    tech: ["User Research", "Wireframing", "Prototyping"],\
    link: "https://medium.com/@itneeraj/medela-case-study-xxxx",\
    image: "/images/breastfeeding-app-1.png"  // main image for Medela\
  \}\
];\
\
export default function Home() \{\
  return (\
    <div style=\{\{ fontFamily: "Arial, sans-serif", padding: "20px" \}\}>\
      \
      \{/* Header with your photo and bio */\}\
      <div style=\{\{ display:"flex", alignItems:"center", gap:"20px", marginBottom:"30px" \}\}>\
        <img \
          src="/images/your-photo.png" \
          alt="Neeraj" \
          style=\{\{ width:"150px", borderRadius:"50%", objectFit:"cover" \}\} \
        />\
        <div>\
          <h1>Neeraj \'96 UX/UI Designer</h1>\
          <p>Hi! I\'92m a UX/UI designer focused on creating intuitive and engaging digital experiences. Skilled in Figma, user research, prototyping, and wireframing. I craft designs that delight users and solve real-world problems.</p>\
        </div>\
      </div>\
      \
      \{/* Projects Section */\}\
      <section>\
        <h2>Projects</h2>\
        <div style=\{\{\
          display: "grid",\
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",\
          gap: "20px"\
        \}\}>\
          \{projects.map((proj) => (\
            <ProjectCard key=\{proj.title\} \{...proj\} />\
          ))\}\
        </div>\
      </section>\
\
    </div>\
  )\
\}\
}