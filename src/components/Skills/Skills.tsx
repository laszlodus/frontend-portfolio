import styles from "./Skills.module.css";
import { VscCode } from "react-icons/vsc";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
  FaPlug,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import { SiTypescript, SiJavascript, SiVite, SiNetlify } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.content}>
        <h2>Skills</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Frontend</h3>
            <ul className={styles.skillsList}>
              <li>
                <FaReact />
                <span>React</span>
              </li>
              <li>
                <SiTypescript />
                <span>TypeScript</span>
              </li>
              <li>
                <SiJavascript />
                <span>JavaScript (ES6+)</span>
              </li>
              <li>
                <FaHtml5 />
                <span>HTML5</span>
              </li>
              <li>
                <FaCss3Alt />
                <span>CSS3</span>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Tools</h3>
            <ul className={styles.skillsList}>
              <li>
                <FaGitAlt />
                <span>Git</span>
              </li>
              <li>
                <FaGithub />
                <span>GitHub</span>
              </li>
              <li>
                <SiVite />
                <span>Vite</span>
              </li>
              <li>
                <VscCode />
                <span>VS Code</span>
              </li>
              <li>
                <SiNetlify />
                <span>Netlify</span>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Other</h3>
            <ul className={styles.skillsList}>
              <li>
                <FaMobileAlt />
                <span>Responsive Design</span>
              </li>
              <li>
                <FaPlug />
                <span>REST APIs</span>
              </li>
              <li>
                <FaDatabase />
                <span>Local Storage</span>
              </li>
              <li>
                <FaCode />
                <span>JSON</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
