import styles from "./About.module.css";
import { FaReact, FaMobileAlt, FaPlug } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          I am a junior frontend developer who moved into tech after nearly 15
          years in a different industry. I build responsive web applications
          with React and TypeScript.
        </p>
        <p>
          I have contributed merged pull requests to open source projects, and I
          enjoy improving my skills through personal projects, writing clean,
          easy-to-understand code.
        </p>
        <ul className={styles.skills}>
          <li>
            <FaReact />
            <span>React</span>
          </li>

          <li>
            <SiTypescript />
            <span>TypeScript</span>
          </li>

          <li>
            <FaMobileAlt />
            <span>Responsive Design</span>
          </li>

          <li>
            <FaPlug />
            <span>REST APIs</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
