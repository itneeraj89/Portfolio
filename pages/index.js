import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AlphaTrak App",
    description: "UX/UI case study redesigning a mobile app for tracking pets.",
    tech: ["Figma", "User Research", "Prototyping"],
    link: "https://medium.com/@itneeraj/case-study-designing-a-mobile-app-for-pets-d4d775b5887a",
    image: "/images/pet-app-1.png"
  },
  {
    title: "Medela App",
    description: "UX/UI case study on breastfeeding and pumping products.",
    tech: ["User Research", "Wireframing", "Prototyping"],
    link: "https://medium.com/@itneeraj/a-case-study-on-breastfeeding-pumping-products-app-21e5caa9dcb4",
    image: "/images/breastfeeding-app-1.png"
  }
];

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>

      {/* Header with your photo and bio */}
      <div style={{ display:"flex", alignItems:"center", gap:"20px", marginBottom:"30px" }}>
        <img 
          src="/images/your-photo.png" 
          alt="Neeraj" 
          style={{ width:"150px", borderRadius:"50%", objectFit:"cover" }} 
        />
        <div>
          <h1>Neeraj  UX/UI Designer</h1>
          <p>Hi! I'm a UX/UI designer focused on creating intuitive and engaging digital experiences. Skilled in Figma, user research, prototyping, and wireframing. I craft designs that delight users and solve real-world problems.</p>
        </div>
      </div>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {projects.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      </section>

    </div>
  )
}
