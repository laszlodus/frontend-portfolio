import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          I am a junior frontend developer who enjoys building responsive web
          applications with React and TypeScript.
        </p>
        <p>
          I improv my skills through personal projects, and I like writing clean
          and easy-to-understand code.
        </p>
        <ul className={styles.skills}>
          <li>React</li>
          <li>TypeScript</li>
          <li>Responsive design</li>
          <li>API integration</li>
        </ul>
      </div>
    </section>
  );
}
