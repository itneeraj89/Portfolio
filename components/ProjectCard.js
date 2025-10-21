// components/ProjectCard.js
export default function ProjectCard({ title, description, tech, link, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "8px",
      margin: "10px",
      maxWidth: "400px"
    }}>
      <img src={image} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech.join(", ")}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Case Study</a>
    </div>
  )
}
