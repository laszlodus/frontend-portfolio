import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.content}>
        <h2>Skills</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Frontend</h3>
            <ul className={styles.skillsList}>
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Tools</h3>
            <ul className={styles.skillsList}>
              <li>Git</li>
              <li>GitHub</li>
              <li>Vite</li>
              <li>VS Code</li>
              <li>Netlify</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Other</h3>
            <ul className={styles.skillsList}>
              <li>Responsive Design</li>
              <li>REST APIs</li>
              <li>Local Storage</li>
              <li>JSON</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
