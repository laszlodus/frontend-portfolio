import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <h2>Contact Me</h2>
        <p>
          I am currently looking for a junior frontend developer opportunity.
          Feel free to contact me by email or connect with me on LinkedIn.
        </p>
        <a href="mailto:duslaszlo@gmail.com">Email Me</a>
        <a
          href="https://www.linkedin.com/in/laszlo-dus-6b625035b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
        <a
          href="https://github.com/laszlodus"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My GitHub
        </a>
      </div>
    </section>
  );
}
