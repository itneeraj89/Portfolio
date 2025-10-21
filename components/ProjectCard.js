{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // components/ProjectCard.js\
export default function ProjectCard(\{ title, description, tech, link, image \}) \{\
  return (\
    <div style=\{\{\
      border: "1px solid #ccc",\
      padding: "15px",\
      borderRadius: "8px",\
      margin: "10px",\
      maxWidth: "400px"\
    \}\}>\
      <img src=\{image\} alt=\{title\} style=\{\{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" \}\} />\
      <h3>\{title\}</h3>\
      <p>\{description\}</p>\
      <p><strong>Tech:</strong> \{tech.join(", ")\}</p>\
      <a href=\{link\} target="_blank" rel="noopener noreferrer">View Case Study</a>\
    </div>\
  )\
\}\
}