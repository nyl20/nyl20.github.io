<script>
import squashImage from "../assets/squash/play.jpg";
import bcbmImage from "../assets/brains.png";
import yarnImage from "../assets/ys-banner.png";
import blueTapeImage from "../assets/blueTape.png";
import weillImage from "../assets/weill.png";
import tottiImage from "../assets/TottiLabs.png";
import birdImage from "../assets/OrnithologyLab.png";

export default {
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
      experienceItems: [
        { label: "Health tech research", detail: "Cornell Tech x Weill Cornell" },
        { label: "Wearable data interfaces", detail: "TOTTI Labs" },
        { label: "Bioacoustics analysis", detail: "BirdCast" },
      ],
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "SQL",
        "Vue",
        "React Native",
        "Next.js",
        "Machine Learning",
        "Data Visualization",
        "Git",
        "Figma",
        "Jupyter",
      ],
    };
  },
  methods: {
    routerpush(resourceName) {
      this.$router.push(`/${resourceName}`);
    },
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
      <div class="hero-inner">
        <p class="hero-kicker">Nicole Liao</p>
        <h1>Applied ML, health tech, and product-minded engineering.</h1>
        <p class="hero-brief">Building thoughtful software across research, interfaces, and data.</p>
        <div class="hero-actions">
          <button class="primary-button" @click="scrollToWork">View work</button>
          <button class="ghost-button" @click="routerpush('about-me')">About me</button>
        </div>
      </div>
      <button class="scroll-cue" @click="scrollToWork" aria-label="Scroll to content">
        <span></span>
      </button>
    </section>

    <section id="home-projects" class="section-block projects-section">
      <div class="section-copy">
        <p class="section-kicker">Projects</p>
        <h2>Selected builds</h2>
      </div>

      <div class="project-marquee">
        <div class="project-track">
          <article
            v-for="(project, index) in projectCards"
            :key="`${project.title}-${index}`"
            class="project-card"
            @click="routerpush(project.route)"
          >
            <img :src="project.image" :alt="project.title" class="project-image" />
            <div class="project-overlay">
              <p>{{ project.title }}</p>
              <span>{{ project.subtitle }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-block research-section">
      <div class="section-copy">
        <p class="section-kicker">Research</p>
        <h2>Labs and collaborations</h2>
      </div>

      <div class="research-gallery">
        <article v-for="lab in researchLabs" :key="lab.title" class="research-tile" @click="routerpush('research')">
          <img :src="lab.image" :alt="lab.title" class="research-image" />
          <div class="research-label">{{ lab.title }}</div>
        </article>
      </div>
    </section>

    <section class="section-block experience-section">
      <div class="section-copy">
        <p class="section-kicker">Experience</p>
        <h2>Focused, but cross-disciplinary</h2>
      </div>

      <div class="experience-row">
        <article v-for="item in experienceItems" :key="item.label" class="experience-chip" @click="routerpush('experience')">
          <p>{{ item.label }}</p>
          <span>{{ item.detail }}</span>
        </article>
      </div>
    </section>

    <section class="section-block skills-section">
      <div class="section-copy">
        <p class="section-kicker">Skills</p>
        <h2>Tools I like working with</h2>
      </div>

      <div class="skills-cloud">
        <span v-for="skill in skills" :key="skill" class="skill-pill">{{ skill }}</span>
      </div>
    </section>

    <section class="contact-strip">
      <a href="mailto:nyl6@cornell.edu">nyl6@cornell.edu</a>
      <a href="https://www.linkedin.com/in/liao-nicole/">LinkedIn</a>
      <a href="https://github.com/nyl20">GitHub</a>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 4rem;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 7%;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 24%, rgba(184, 219, 217, 0.95), transparent 28%),
    radial-gradient(circle at 84% 78%, rgba(88, 111, 124, 0.12), transparent 24%),
    linear-gradient(180deg, #f8fbfb 0%, #ffffff 100%);
}

.hero-section::before {
  content: "";
  position: absolute;
  inset: 8% 7%;
  border: 1px solid rgba(47, 69, 80, 0.08);
  border-radius: 32px;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 840px;
  text-align: center;
  animation: fadeUp 0.9s ease both;
}

.hero-kicker,
.section-kicker {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #2f4550;
}

.hero-inner h1 {
  margin-top: 1rem;
  font-size: clamp(3rem, 7vw, 5.8rem);
  line-height: 0.98;
  font-weight: 700;
  color: #16303b;
}

.hero-brief {
  margin: 1rem auto 0;
  max-width: 34rem;
  font-size: 1.05rem;
  color: #4d6772;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.primary-button,
.ghost-button {
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
  background: rgba(255, 255, 255, 0.86);
  color: #2f4550;
  border: 1px solid rgba(47, 69, 80, 0.14);
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
  background: rgba(255, 255, 255, 0.78);
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

.section-block {
  margin: 0 7%;
  padding: 1.5rem 0;
}

.section-copy {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-copy h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: #16303b;
}

.projects-section {
  border-top: 1px solid rgba(47, 69, 80, 0.1);
}

.project-marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
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
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 18px 42px rgba(47, 69, 80, 0.1);
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
  background: linear-gradient(180deg, transparent, rgba(17, 31, 38, 0.82));
  color: #ffffff;
  transform: translateY(56%);
  transition: transform 0.28s ease;
}

.project-overlay p,
.experience-chip p {
  font-size: 1.08rem;
  font-weight: 700;
}

.project-overlay span,
.experience-chip span,
.research-label {
  color: rgba(255, 255, 255, 0.86);
}

.project-card:hover .project-overlay {
  transform: translateY(0);
}

.project-card:hover .project-image,
.research-tile:hover .research-image {
  transform: scale(1.05);
}

.research-section {
  background: linear-gradient(180deg, rgba(244, 248, 249, 0.9), rgba(255, 255, 255, 0.95));
  border-radius: 30px;
  padding: 1.75rem;
}

.research-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.research-tile {
  position: relative;
  min-height: 260px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
}

.research-label {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  background: rgba(22, 48, 59, 0.62);
  backdrop-filter: blur(10px);
}

.experience-section {
  padding-top: 2rem;
}

.experience-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.experience-chip {
  padding: 1.25rem;
  border-radius: 24px;
  background:
    linear-gradient(135deg, rgba(232, 242, 241, 0.95), rgba(255, 255, 255, 0.98));
  border: 1px solid rgba(47, 69, 80, 0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.experience-chip span {
  display: block;
  margin-top: 0.45rem;
  color: #4d6772;
}

.skills-section {
  border-radius: 30px;
  border: 1px solid rgba(47, 69, 80, 0.08);
  padding: 1.75rem;
  background:
    radial-gradient(circle at top right, rgba(184, 219, 217, 0.55), transparent 28%),
    #ffffff;
}

.skills-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-pill {
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: #f3f8f8;
  color: #2f4550;
  border: 1px solid rgba(47, 69, 80, 0.08);
}

.contact-strip {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 0 7%;
  padding-top: 0.5rem;
}

.contact-strip a {
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid rgba(47, 69, 80, 0.1);
  color: #2f4550;
}

.primary-button:hover,
.ghost-button:hover,
.experience-chip:hover {
  transform: translateY(-2px);
}

.experience-chip:hover {
  box-shadow: 0 14px 36px rgba(47, 69, 80, 0.08);
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

@media (max-width: 900px) {
  .research-gallery,
  .experience-row {
    grid-template-columns: 1fr;
  }

  .project-card {
    width: 280px;
    height: 340px;
  }

  .section-copy {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
