<script>
import { RouterLink } from "vue-router";
import squashImage from "../assets/squash/play.jpg";
import bcbmImage from "../assets/brains.png";
import yarnImage from "../assets/ys-banner.png";
import blueTapeImage from "../assets/blueTape.png";
import nof1Image from "../assets/sleep_report.png";
import freshcheckImage from "../assets/SS_login.png";
import weillImage from "../assets/weill.png";
import tottiImage from "../assets/TottiLabs.png";
import birdImage from "../assets/OrnithologyLab.png";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      projectCards: [
        {
          title: "SquashScore",
          subtitle: "Real-time match analysis",
          route: "squashscore",
          image: squashImage,
          size: "project-feature-left",
        },
        {
          title: "BCBM Prediction",
          subtitle: "ML for breast cancer subtype classification",
          route: "bcbm-prediction",
          image: bcbmImage,
          size: "project-small-a",
        },
        {
          title: "N of 1",
          subtitle: "Personal health tracking and sensor-driven sleep insights",
          route: "nof1",
          image: nof1Image,
          size: "project-small-b",
        },
        {
          title: "FreshCheck",
          subtitle: "Designing clearer reporting around health and sleep data",
          route: "freshcheck",
          image: freshcheckImage,
          size: "project-small-c",
        },
        {
          title: "BlueTape",
          subtitle: "AgTech concept for pesticide drift",
          route: "bluetape",
          image: blueTapeImage,
          size: "project-small-d",
        },
        {
          title: "Yarn Social",
          subtitle: "Community platform for fiber artists",
          route: "yarnsocial",
          image: yarnImage,
          size: "project-feature-right",
        },
      ],
      experienceImages: [
        { title: "Weill Cornell", image: weillImage },
        { title: "TOTTI Labs", image: tottiImage },
        { title: "BirdCast", image: birdImage },
      ],
      skillGroups: [
        {
          title: "Languages",
          skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
        },
        {
          title: "Full Stack",
          skills: ["React", "Vue", "Next.js", "Node.js", "Postgres", "Firebase"],
        },
        {
          title: "ML / Data",
          skills: ["PyTorch", "NumPy", "Jupyter", "Fine-tuning", "NLP"],
        },
      ],
    };
  },
  methods: {
    scrollToWork() {
      const element = document.getElementById("home-projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>

<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="section-inner hero-layout">
        <div class="hero-copy">
          <p class="hero-kicker">Nicole Liao</p>
          <h1>Hello, I'm Nicole</h1>
          <p class="hero-summary">
            I build thoughtful technology across health, research, and creative projects.
            I care about work that feels useful, human, and carefully made.
          </p>
          <!-- <div class="hero-actions">
            <button class="primary-button" @click="scrollToWork">View work</button>
            <RouterLink class="ghost-button" to="/about-me">About me</RouterLink>
          </div> -->
        </div>

        <div class="hero-doodle-wrap" aria-hidden="true">
          <div class="hero-doodle-shadow"></div>
          <p class="hero-doodle-note">hello</p>
          <svg class="hero-doodle" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g class="doodle-ink">
              <path d="M125 44L96 16L66 45L77 102" />
              <path d="M182 44L209 16L240 47L222 101" />
              <path d="M147 48V28" />
              <path d="M170 48V28" />
              <path d="M94 92C97 58 124 46 159 46C194 46 223 59 223 95L217 151C215 176 193 196 166 199H149C123 196 102 175 100 151L94 92Z" />
              <path d="M124 110V135" />
              <path d="M168 110V135" />
              <path d="M90 168C91 145 114 136 160 136C206 136 228 147 230 168C232 187 216 201 194 204H126C103 201 89 187 90 168Z" />
              <path d="M146 176C154 170 161 171 169 177" />
              <path d="M153 200V294" />
              <path d="M177 201V294" />
              <path d="M122 305C125 272 143 253 164 253C188 253 206 271 209 304L214 343C216 368 199 389 174 392H144C119 389 102 369 104 343L122 305Z" />
              <path d="M117 307L71 336L46 314" />
              <g class="wave-arm">
                <path d="M208 307L243 272L273 229" />
                <path d="M273 229L296 202" />
                <path d="M273 229L301 241" />
                <path d="M301 241L289 260" />
              </g>
              <path d="M72 336L46 360" />
              <path d="M46 360L63 375" />
              <path d="M63 375L85 356" />
              <path d="M147 392L143 415H113L115 392" />
              <path d="M179 392L184 415H214L210 392" />
            </g>
            <g fill="#17130d">
              <ellipse cx="123" cy="113" rx="5" ry="8" />
              <ellipse cx="168" cy="113" rx="5" ry="8" />
              <ellipse cx="131" cy="165" rx="4.5" ry="4.5" />
              <ellipse cx="172" cy="165" rx="4.5" ry="4.5" />
            </g>
          </svg>
        </div>

        <div class="hero-contact">
          <p class="contact-label">Contact</p>
          <a href="mailto:nyl6@cornell.edu">nyl6@cornell.edu</a>
          <a href="https://www.linkedin.com/in/liao-nicole/">LinkedIn</a>
        </div>
      </div>

      <button class="scroll-cue" @click="scrollToWork" aria-label="Scroll to content">
        <span></span>
      </button>
    </section>

    <section id="home-projects" class="section-band projects-band">
      <div class="section-inner project-section-inner">
        <div class="section-header">
          <div class="section-copy">
            <h2>Projects</h2>
            <!-- <p class="section-kicker">Projects</p> -->
          </div>
          <!-- <RouterLink class="more-button project-section-link" to="/projects">See more</RouterLink> -->
        </div>

        <div class="projects-grid" aria-label="Project links">
          <RouterLink
            v-for="project in projectCards"
            :key="project.title"
            :to="{ name: project.route }"
            :class="['project-card', project.size]"
          >
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="project-overlay">
              <p>{{ project.title }}</p>
              <span>{{ project.subtitle }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section-band skills-band">
      <div class="section-inner">
        <div class="section-copy">
          <!-- <p class="section-kicker">Skills & Technologies</p> -->
          <h2>Skills & Technologies</h2>
        </div>

        <div class="skills-groups">
          <section v-for="group in skillGroups" :key="group.title" class="skills-group">
            <p class="skills-group-title">{{ group.title }}</p>
            <div class="skills-list">
              <span v-for="skill in group.skills" :key="skill" class="skill-pill">{{ skill }}</span>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="section-band experience-band">
      <div class="section-inner">
        <div class="experience-layout">
          <div class="experience-copy">
            <div class="section-copy summary-copy">
              <!-- <p class="section-kicker">Experience</p> -->
              <h2>Experience</h2>
            </div>
            <p class="experience-mini-summary">
              My background encompasses full stack engineering at an early stage startup, data and machine learning research, as well as teaching. I enjoy taking ownership of features or projects and teaching others how to take on projects of their own.
            </p>
            <RouterLink class="primary-button inline-link-button" to="/about-me">More about me</RouterLink>

            <!-- <div class="experience-summary">
            
              <p>
                I like work that sits between design, engineering, and explanation. Across internships,
                research collaborations, and teaching roles, I’ve learned to build carefully and communicate clearly.
              </p>
            </div> -->
            
            

          </div>

          

            <div class="experience-glance">
              <div class="experience-pill">
                <span>Work</span>
                <p>Full stack app development at an early stage music event startup. Took ownership of building out the notifications feature and worked on a small team to deploy in tight sprints for music events</p>
              </div>
              <div class="experience-pill">
                <span>Research</span>
                <p>Health focused data and machine learning research. Research areas include medical school education, personal informatics, and bird migration.</p>
              </div>
              <div class="experience-pill">
                <span>Teaching</span>
                <p>Course support and instruction for computer science courses at the highschool through masters levels. Courses include object-oriented programming and applied machine learning.</p>
              </div>
            </div>

          <!-- <div class="experience-side-note">
            <p>Past work has included lab collaborations, course support, and product-facing software development.</p>
          </div> -->
        </div>

        <div class="experience-images">
          <RouterLink
            v-for="item in experienceImages"
            :key="item.title"
            to="/about-me"
            class="experience-image-link"
          >
            <img :src="item.image" :alt="item.title" class="experience-image" />
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section-band contact-band">
      <div class="section-inner contact-strip">
        <a href="mailto:nyl6@cornell.edu">nyl6@cornell.edu</a>
        <a href="https://www.linkedin.com/in/liao-nicole/">LinkedIn</a>
        <a href="https://github.com/nyl20">GitHub</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

.section-band {
  width: 75%;
  align-self: center;
}

.section-inner {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 24%, rgba(239, 217, 133, 0.18), transparent 24%),
    radial-gradient(circle at 78% 62%, rgba(143, 157, 109, 0.1), transparent 20%),
    linear-gradient(180deg, rgba(255, 252, 245, 0.54) 0%, rgba(251, 248, 238, 0.22) 100%);
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(220px, 340px) auto;
  align-items: end;
  gap: 2rem;
}

.hero-copy {
  padding: 0 0 0 3%;
  text-align: left;
  animation: fadeUp 0.9s ease both;
}

.hero-kicker,
.section-kicker,
.contact-label {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text);
}

.hero-copy h1 {
  margin-top: 1rem;
  max-width: 8ch;
  font-size: clamp(3.3rem, 7vw, 6.1rem);
  line-height: 0.96;
  font-weight: 600;
  color: var(--color-heading);
}

.hero-summary {
  margin-top: 1.35rem;
  max-width: 32rem;
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  line-height: 1.7;
  color: var(--color-text);
}

.hero-doodle-wrap {
  position: relative;
  justify-self: center;
  align-self: center;
  width: min(30vw, 300px);
  min-width: 220px;
  animation: fadeUp 1s ease both;
}

.hero-doodle-note {
  position: absolute;
  top: 0.25rem;
  right: -0.5rem;
  z-index: 2;
  color: var(--color-text);
  font-size: clamp(1.3rem, 2vw, 1.65rem);
  line-height: 1;
  font-family: "Bradley Hand", "Segoe Print", "Comic Sans MS", cursive;
  transform: rotate(7deg);
  letter-spacing: 0.03em;
}

.hero-doodle-note::after {
  content: "";
  position: absolute;
  left: -0.8rem;
  top: 1.05rem;
  width: 1rem;
  height: 1px;
  background: var(--color-text);
  transform: rotate(20deg);
}

.hero-doodle {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: auto;
  transform-origin: 56% 70%;
  animation: doodleBob 3.6s ease-in-out infinite;
  filter: drop-shadow(0 20px 24px rgba(43, 34, 19, 0.08));
}

.doodle-ink {
  stroke: var(--color-heading);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wave-arm {
  transform-box: fill-box;
  transform-origin: 12% 84%;
  animation: doodleWave 1.8s ease-in-out infinite;
}

.hero-doodle-shadow {
  position: absolute;
  inset: auto 16% 10px;
  height: 20px;
  border-radius: 999px;
  background: rgba(43, 34, 19, 0.1);
  filter: blur(8px);
}

.hero-doodle::after {
  content: "";
}

.hero-actions {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.hero-contact {
  justify-self: end;
  align-self: end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;
  margin: 0 3% 2rem 0;
  padding: 1rem 1.1rem;
  border-radius: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 34px var(--color-shadow);
}

.hero-contact a {
  padding: 0;
  color: var(--color-heading);
  font-size: 0.98rem;
}

.primary-button,
.ghost-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.85rem 1.3rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 0.98rem;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.more-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* min-height: 48px; */
  padding: 0.5rem 1.0rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-size: 0.98rem;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.primary-button {
  background: var(--accent-gold);
  color: #fffaf0;
  box-shadow: 0 12px 26px rgba(104, 81, 33, 0.2);
}

.ghost-button {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.inline-link-button {
  width: fit-content;
  margin-top: 1.4rem;
}

.scroll-cue {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  width: 42px;
  height: 68px;
  margin-left: -21px;
  border: 1px solid var(--color-border-hover);
  border-radius: 999px;
  background: var(--color-surface);
  cursor: pointer;
}

.scroll-cue span {
  display: block;
  width: 8px;
  height: 8px;
  margin: 14px auto 0;
  border-radius: 50%;
  background: var(--color-heading);
  animation: scrollDot 1.8s infinite;
}

.section-copy {
  margin-bottom: 1.2rem;
}

.section-copy h2 {
  margin-top: 0.45rem;
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  color: var(--color-heading);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.section-header .section-copy {
  margin-bottom: 0;
}

.projects-band {
  padding: 3rem 0 4.75rem;
  padding-top: 6%;
  background: linear-gradient(180deg, rgba(255, 249, 231, 0.14) 0%, rgba(255, 255, 255, 0) 100%);
}

.project-section-inner {
  width: min(900px, calc(100% - 64px));
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 92px;
  gap: 0.65rem;
  align-items: stretch;
}

.project-card {
  position: relative;
  min-height: 184px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 18px 42px var(--color-shadow);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;
  grid-row: span 2;
}

.project-feature-left,
.project-feature-right {
  grid-row: span 3;
}

.project-feature-left {
  grid-column: 1;
  grid-row: 1 / span 3;
}

.project-feature-right {
  grid-column: 4;
  grid-row: 2 / span 3;
}

.project-small-a {
  grid-column: 2;
  grid-row: 1;
}

.project-small-b {
  grid-column: 2;
  grid-row: 3;
}

.project-small-c {
  grid-column: 3;
  grid-row: 1;
}

.project-small-d {
  grid-column: 3;
  grid-row: 3;
}

.project-image,
.experience-image {
  width: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.project-image {
  display: block;
  height: 100%;
  filter: saturate(0.95) contrast(0.96);
}

.project-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.1rem 1.1rem 0.38rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.16) 68%, rgba(0, 0, 0, 0.92) 100%);
  color: #ffffff;
  z-index: 2;
  transition:
    background 0.28s ease,
    padding 0.28s ease;
}

.project-overlay p {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  transform: translateY(30px);
  transition: transform 0.28s ease;
}

.project-overlay span {
  display: block;
  max-width: 18ch;
  margin-top: 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 0.22s ease,
    transform 0.28s ease;
}

.project-card:hover .project-overlay {
  justify-content: center;
  padding: 1.35rem;
  background: rgba(12, 10, 8, 0.56);
  backdrop-filter: blur(1.5px);
}

.project-card:hover .project-overlay p {
  transform: translateY(-2px);
}

.project-card:hover .project-overlay span {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover .project-image,
.experience-image-link:hover .experience-image {
  transform: scale(1.02);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 50px rgba(43, 34, 19, 0.18);
}

.project-section-link {
  flex-shrink: 0;
}

.skills-band {
  padding: 4rem 0;
  /* background: linear-gradient(180deg, rgba(246, 235, 190, 0.12) 0%, rgba(255, 255, 255, 0) 100%); */
}

.skills-groups {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.skills-group {
  padding: 1.2rem 1.15rem 1.3rem;
  border-radius: 22px;
  background: rgba(255, 251, 241, 0.76);
  border: 1px solid var(--color-border);
  box-shadow: 0 16px 34px var(--color-shadow);
}

.skills-group-title {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.skill-pill {
  padding: 0.72rem 0.98rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  box-shadow: 0 8px 20px rgba(43, 34, 19, 0.06);
}

.experience-band {
  padding: 4rem 0 5rem;
  /* background: linear-gradient(180deg, rgba(217, 227, 237, 0.18) 0%, rgba(255, 255, 255, 0) 100%); */
}

.experience-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 2rem;
  /* align-items: center; */
}

.experience-copy {
  display: flex;
  flex-direction: column;
}

.experience-side-note {
  align-self: center;
  padding: 1.4rem 1.5rem;
  border-radius: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-soft);
}

.summary-copy {
  margin-bottom: 0;
}

.experience-mini-summary {
  max-width: 34rem;
  margin-top: 1rem;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.experience-glance {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.25rem;
}

.experience-pill {
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: rgba(248, 251, 254, 0.9);
  border: 1px solid rgba(118, 138, 156, 0.14);
}

.experience-pill span {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text);
}

.experience-pill p {
  margin-top: 0.45rem;
  color: var(--color-text-soft);
  line-height: 1.55;
}

.experience-summary {
  padding: 1.6rem 1.8rem;
  border-radius: 28px;
  background: rgba(247, 250, 252, 0.88);
  border: 1px solid rgba(118, 138, 156, 0.16);
  box-shadow: 0 18px 40px rgba(46, 58, 72, 0.08);
}

.experience-summary p {
  color: var(--color-text-soft);
  font-size: 1.02rem;
}

.experience-images {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 180px));
  justify-content: center;
  gap: 1rem;
  align-items: start;
  margin-top: 2.5rem;
}

.experience-image-link {
  display: block;
}

.experience-image {
  display: block;
  width: 100%;
  height: 150px;
  object-fit: contain;
  object-position: center;
}

.contact-band {
  padding: 0 0 4rem;
  background: transparent;
}

.contact-strip {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.contact-strip a {
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.primary-button:hover,
.ghost-button:hover {
  transform: translateY(-2px);
}

@keyframes scrollDot {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }

  50% {
    transform: translateY(26px);
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes doodleBob {
  0%,
  100% {
    transform: translateY(0) rotate(-1deg);
  }

  50% {
    transform: translateY(-6px) rotate(1deg);
  }
}

@keyframes doodleWave {
  0%,
  100% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(14deg);
  }
}

@media (max-width: 960px) {
  .hero-layout,
  .experience-layout {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 110px;
  }

  .project-feature-left,
  .project-feature-right {
    grid-column: span 2;
    grid-row: span 2;
  }

  .project-small-a,
  .project-small-b,
  .project-small-c,
  .project-small-d {
    grid-column: span 1;
    grid-row: span 1;
  }

  .hero-copy {
    padding-left: 0;
  }

  .hero-contact {
    justify-self: start;
    margin: 0;
  }

  .hero-doodle-wrap {
    width: min(52vw, 260px);
    justify-self: start;
    margin-top: -0.5rem;
  }

  .hero-doodle-note {
    right: 0.2rem;
  }

  .skills-groups {
    grid-template-columns: 1fr;
  }

  .section-header {
    align-items: flex-start;
  }
}

@media (max-width: 720px) {
  .section-inner {
    width: min(100% - 32px, 1180px);
  }

  .project-section-inner {
    width: min(100% - 32px, 900px);
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  .project-card {
    aspect-ratio: 1 / 1;
    min-height: 250px;
    transform: none;
    grid-row: span 1;
  }

  .project-feature-left,
  .project-feature-right,
  .project-small-a,
  .project-small-b,
  .project-small-c,
  .project-small-d {
    grid-column: span 1;
    grid-row: span 1;
  }

  .project-overlay {
    background: rgba(12, 10, 8, 0.44);
  }

  .project-overlay span {
    opacity: 1;
    transform: translateY(0);
  }

  .experience-images {
    grid-template-columns: 1fr;
  }

  .experience-image {
    height: 120px;
  }
}
</style>
