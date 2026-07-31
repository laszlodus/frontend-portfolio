import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Hi, I'm Laszlo Dus</p>
        <h1 className={styles.title}>Frontend Developer</h1>
        <p className={styles.description}>
          I build responsive web applications with React and TypeScript. I enjoy
          learning new technologies and creating clean user interfaces.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#projects">
            View Projects
          </a>
          <a className={styles.secondaryButton} href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className={styles.avatarWrap} aria-hidden="true">
        <div className={styles.avatar}>LD</div>
      </div>
    </section>
  );
}
