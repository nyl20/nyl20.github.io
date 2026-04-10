<script>
import { RouterLink } from "vue-router";
import squashImage from "../assets/squash/play.jpg";
import bcbmImage from "../assets/brains.png";
import yarnImage from "../assets/ys-banner.png";
import blueTapeImage from "../assets/blueTape.png";
import weillImage from "../assets/weill.png";
import tottiImage from "../assets/TottiLabs.png";
import birdImage from "../assets/OrnithologyLab.png";

export default {
  components: {
    RouterLink,
  },
  data() {
    const projects = [
      {
        title: "SquashScore",
        subtitle: "Real-time match analysis",
        route: "squashscore",
        image: squashImage,
      },
      {
        title: "BCBM Prediction",
        subtitle: "ML for breast cancer subtype classification",
        route: "bcbm-prediction",
        image: bcbmImage,
      },
      {
        title: "Yarn Social",
        subtitle: "Community platform for fiber artists",
        route: "yarnsocial",
        image: yarnImage,
      },
      {
        title: "BlueTape",
        subtitle: "AgTech concept for pesticide drift",
        route: "bluetape",
        image: blueTapeImage,
      },
    ];

    return {
      projectCards: [...projects, ...projects],
      researchLabs: [
        { title: "Weill Cornell", image: weillImage },
        { title: "TOTTI Labs", image: tottiImage },
        { title: "BirdCast", image: birdImage },
      ],
      skillRows: [
        ["Python", "Java", "JavaScript", "SQL"],
        ["Vue", "React Native", "Next.js", "PrimeVue"],
        ["Machine Learning", "Data Visualization", "Jupyter", "Figma"],
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
          <h1>Health tech, applied ML, and product-minded engineering.</h1>
          <div class="hero-actions">
            <button class="primary-button" @click="scrollToWork">View work</button>
            <RouterLink class="ghost-button" to="/about-me">About me</RouterLink>
          </div>
        </div>

        <div class="hero-contact">
          <p class="contact-label">Contact</p>
          <a class="contact-label" href="mailto:nyl6@cornell.edu">nyl6@cornell.edu</a>
          <a class="contact-label" href="https://www.linkedin.com/in/liao-nicole/">LinkedIn</a>
        </div>
      </div>

      <button class="scroll-cue" @click="scrollToWork" aria-label="Scroll to content">
        <span></span>
      </button>
    </section>

    <section id="home-projects" class="section-band projects-band">
      <div class="section-inner">
        <div class="section-copy">
          <p class="section-kicker">Projects</p>
        </div>

        <div class="project-marquee">
          <div class="project-track">
            <RouterLink
              v-for="(project, index) in projectCards"
              :key="`${project.title}-${index}`"
              :to="{ name: project.route }"
              class="project-card"
            >
              <img :src="project.image" :alt="project.title" class="project-image" />
              <div class="project-overlay">
                <p>{{ project.title }}</p>
                <span>{{ project.subtitle }}</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-band skills-band">
      <div class="section-inner">
        <div class="section-copy">
          <p class="section-kicker">Skills</p>
          <h2>Tools I like working with</h2>
        </div>

        <div class="skills-rows">
          <div v-for="(row, rowIndex) in skillRows" :key="rowIndex" :class="['skills-row', `row-${rowIndex}`]">
            <span v-for="skill in row" :key="skill" class="skill-pill">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-band experience-band">
      <div class="section-inner experience-layout">
        <div class="section-copy summary-copy">
          <p class="section-kicker">Experience</p>
          <h2>Research, teaching, and technical problem-solving</h2>
        </div>
        <div class="experience-summary">
          <p>
            My experience spans health tech and data science research, full stack development, and teaching.
            I enjoy building features across the stack and helping others learn how to do the same.
          </p>
          <RouterLink class="primary-button inline-link-button" to="/experience">View experience</RouterLink>
        </div>
      </div>
    </section>

    <section class="section-band research-band">
      <div class="section-inner">
        <div class="section-copy">
          <p class="section-kicker">Research</p>
          <h2>Labs and collaborations</h2>
        </div>

        <div class="research-gallery">
          <RouterLink v-for="lab in researchLabs" :key="lab.title" to="/research" class="research-image-link">
            <img :src="lab.image" :alt="lab.title" class="research-image" />
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
  width: 100%;
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
    radial-gradient(circle at 18% 24%, rgba(184, 219, 217, 0.95), transparent 28%),
    radial-gradient(circle at 78% 62%, rgba(244, 211, 94, 0.22), transparent 20%),
    linear-gradient(180deg, #f7fbfb 0%, #fef8ee 100%);
}

.hero-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
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
  color: #2f4550;
}

.hero-copy h1 {
  margin-top: 1rem;
  max-width: 11ch;
  font-size: clamp(3.3rem, 7vw, 6.1rem);
  line-height: 0.96;
  font-weight: 700;
  color: #16303b;
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
  /* background: rgba(255, 255, 255, 0.72); */
  /* backdrop-filter: blur(12px); */
  /* box-shadow: 0 16px 34px rgba(47, 69, 80, 0.08); */
}

.hero-contact a {
  padding: 0;
  color: #16303b;
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

.primary-button {
  background: #2f4550;
  color: #f7fbfb;
  box-shadow: 0 12px 26px rgba(47, 69, 80, 0.18);
}

.ghost-button {
  background: rgba(255, 255, 255, 0.88);
  color: #2f4550;
  border: 1px solid rgba(47, 69, 80, 0.14);
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
  border: 1px solid rgba(47, 69, 80, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  cursor: pointer;
}

.scroll-cue span {
  display: block;
  width: 8px;
  height: 8px;
  margin: 14px auto 0;
  border-radius: 50%;
  background: #2f4550;
  animation: scrollDot 1.8s infinite;
}

.section-copy {
  margin-bottom: 1.2rem;
}

.section-copy h2 {
  margin-top: 0.45rem;
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  color: #16303b;
}

.projects-band {
  padding: 4.5rem 0 4rem;
  background: linear-gradient(180deg, #fffaf2 0%, #ffffff 100%);
}

.project-marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.project-track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.project-marquee:hover .project-track {
  animation-play-state: paused;
}

.project-card {
  position: relative;
  width: 320px;
  height: 390px;
  flex-shrink: 0;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 18px 42px rgba(47, 69, 80, 0.12);
}

.project-image,
.research-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.project-overlay {
  position: absolute;
  inset: auto 0 0;
  padding: 1rem 1.1rem 1.15rem;
  background: linear-gradient(180deg, transparent, rgba(17, 31, 38, 0.86));
  color: #ffffff;
  transform: translateY(58%);
  transition: transform 0.28s ease;
}

.project-overlay p {
  font-size: 1.08rem;
  font-weight: 700;
}

.project-overlay span {
  color: rgba(255, 255, 255, 0.86);
}

.project-card:hover .project-overlay {
  transform: translateY(0);
}

.project-card:hover .project-image,
.research-image-link:hover .research-image {
  transform: scale(1.03);
}

.skills-band {
  padding: 4rem 0;
  background: linear-gradient(180deg, #f3f8fb 0%, #eef8f6 100%);
}

.skills-rows {
  display: grid;
  gap: 0.95rem;
}

.skills-row {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.row-0 {
  justify-content: flex-start;
}

.row-1 {
  justify-content: center;
}

.row-2 {
  justify-content: flex-end;
}

.skill-pill {
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(47, 69, 80, 0.08);
  color: #2f4550;
  box-shadow: 0 12px 30px rgba(47, 69, 80, 0.05);
}

.experience-band {
  padding: 4rem 0;
  background: linear-gradient(90deg, #ffffff 0%, #fff5ea 100%);
}

.experience-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 2rem;
  align-items: center;
}

.summary-copy {
  margin-bottom: 0;
}

.experience-summary {
  padding: 1.6rem 1.8rem;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(47, 69, 80, 0.08);
  box-shadow: 0 18px 40px rgba(47, 69, 80, 0.08);
}

.experience-summary p {
  color: #4d6772;
  font-size: 1.02rem;
}

.research-band {
  padding: 4rem 0 4.5rem;
  background: linear-gradient(180deg, #edf8ef 0%, #e5f3ea 100%);
}

.research-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
  align-items: start;
}

.research-image-link {
  display: block;
}

.research-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0;
  box-shadow: none;
}

.contact-band {
  padding: 0 0 4rem;
  background: #e5f3ea;
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
  background: #ffffff;
  border: 1px solid rgba(47, 69, 80, 0.1);
  color: #2f4550;
}

.primary-button:hover,
.ghost-button:hover {
  transform: translateY(-2px);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
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

@media (max-width: 960px) {
  .hero-layout,
  .experience-layout,
  .research-gallery {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    padding-left: 0;
  }

  .hero-contact {
    justify-self: start;
    margin: 0;
  }

  .row-1,
  .row-2 {
    justify-content: flex-start;
  }
}

@media (max-width: 720px) {
  .section-inner {
    width: min(100% - 32px, 1180px);
  }

  .project-card {
    width: 280px;
    height: 340px;
  }
}
</style>
