import styles from "../ProjectCard/ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  featured,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {featured && <span className={styles.featured}>Featured</span>}

      {image && (
        <img
          className={styles.image}
          src={image}
          alt={`${title} project preview`}
        />
      )}

      <h3>{title}</h3>
      <p>{description}</p>

      <ul className={styles.technologies}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className={styles.links}>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}

        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
