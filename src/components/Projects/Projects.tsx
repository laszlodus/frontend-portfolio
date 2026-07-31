import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Rick and Morty Character Explorer",
    description:
      "A responsive React application for searching, browsing and saving Rick and Morty characters using the official API.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Vite",
      "CSS Modules",
      "Local Storage",
      "REST API",
    ],
    image: "/Images/rick_morty.webp",
    liveUrl: "https://rick-and-morty-character-explorer-ld.netlify.app",
    githubUrl:
      "https://github.com/laszlodus/rick-and-morty-character-explorer",
    featured: true,
  },
  {
    title: "Book Finder App",
    description:
      "A React application for searching books, viewing details and managing favorites with a clean and responsive interface.",
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "Vite",
      "Context API",
      "CSS Modules",
      "Open Library API",
    ],
    image: "/Images/Book_Finder_2026.webp",
    liveUrl: "https://book-finder-ld.netlify.app/",
    githubUrl: "https://github.com/laszlodus/book-finder-react",
    featured: false,
  },
  {
    title: "To The Point Tattoos",
    description:
      "A modern business website built for a real tattoo studio with a focus on responsive design and user experience.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "SEO Optimization",
    ],
    image: "/Images/shop_new.webp",
    liveUrl: "https://tothepointtattoos.com/",
    githubUrl: "https://github.com/laszlodus/tothepointtattoos",
    featured: false,
  },
];
export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <h2>Projects</h2>

        <div className={styles.cards}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
