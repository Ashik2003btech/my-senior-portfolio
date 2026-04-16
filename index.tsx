import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

export default function Home() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        } else {
          entry.target.classList.remove(styles.active);
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>ASHIK<span>.</span></div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="mailto:ashik09siraj@gmail.com">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Full Stack & Gen AI Developer</div>
          <h1>Hi, I'm <span>Mohamed Ashik</span></h1>
          <h2>Engineering Future-Ready <br/>Digital Solutions.</h2>
          <p>
            Specializing in end-to-end applications. Currently mastering 
            <strong> Full Stack Development</strong> and <strong>Generative AI</strong> at 
            <strong> Workiy Technologies</strong>.
          </p>
          <a href="mailto:ashik09siraj@gmail.com" className={styles.contactBtn}>Contact Me</a>
          
          <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/mohamed-ashik-s-485226320/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Ashik2003btech" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        
        <div className={styles.heroImage} ref={imageRef}>
          <div className={styles.imageClip}>
            <Image 
              src="/images/me.jpg" 
              alt="Mohamed Ashik" 
              layout="fill" 
              objectFit="cover" 
              priority 
            />
          </div>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <h2>About Me</h2>
          <div className={styles.line}></div>
        </div>
        <p>
          I am a passionate Software Developer with expertise in building 
          complex, results-driven applications. I specialize in bridging 
          backend efficiency with aesthetic frontend experiences.
        </p>
      </section>

      {/* Experience Section - Updated with Workiy & HAL */}
      <section id="experience" className={styles.experience}>
        <div className={styles.sectionHeader}>
          <h2>Professional Experience</h2>
          <div className={styles.line}></div>
        </div>
        
        {/* Workiy Technologies */}
        <div className={styles.expCard}>
          <div className={styles.expHeader}>
            <h3>Full Stack & Gen AI Intern</h3>
            <span>MARCH 2026 - PRESENT</span>
          </div>
          <h4>Workiy Technologies</h4>
          <ul>
            <li>Intensive training and application of Generative AI in Full Stack ecosystems.</li>
            <li>Developing multiple end-to-end projects integrating modern AI frameworks.</li>
          </ul>
        </div>

        {/* HAL Internship */}
        <div className={styles.expCard}>
          <div className={styles.expHeader}>
            <h3>Student Intern</h3>
            <span>NOV 2023 - DEC 2023 </span>
          </div>
          <h4>Hindustan Aeronautics Limited (HAL), Bangalore </h4>
          <ul>
            <li>Gained hands-on experience in microcontrollers and embedded systems.</li>
            <li>Focused on sensor integration, signal processing, and real-time data acquisition.</li>
            <li>Designed, simulated, and tested electronic circuits using LTspice and MATLAB.</li>
          </ul>
        </div>
      </section>

      {/* Certifications Section - New */}
      <section className={styles.certifications}>
        <div className={styles.sectionHeader}>
          <h2>Certifications</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.certCard}>
          <h3>Full Stack Development Training</h3>
          <p>360 Ripple </p>
          <div className={styles.techStack}>
            <span>Java</span><span>MySQL</span><span>JDBC</span><span>Spring Boot</span><span>ReactJS</span>
          </div>
          <ul className={styles.certList}>
            <li>Built multiple end-to-end projects integrating database and UI layers.</li>
            <li>Mastered RESTful APIs and full-stack architectural concepts.</li>
            <li>Implemented CRUD, authentication, and data visualization.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionHeader}>
          <h2>Selected Projects</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{p.category}</span>
                <small className={styles.role}>{p.role}</small>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className={styles.techStack}>
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Mohamed Ashik | ashik09siraj@gmail.com </p>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/mohamed-ashik-s-485226320/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Ashik2003btech" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  );
}