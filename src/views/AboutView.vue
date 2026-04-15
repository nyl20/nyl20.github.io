<script>
import image from "../assets/headshot.jpg";

export default {
  data() {
    return {
      image,
      details: [
        "Cornell Tech master's student in applied information systems",
        "Cornell University computer science graduate",
        "Interested in health tech, machine learning, and thoughtful product design",
      ],
      experienceAreas: [
        {
          title: "Work",
          summary: "I enjoy product-minded engineering work where technical decisions connect directly to how people experience a tool.",
          points: [
            "Built across the stack in startup-style environments.",
            "Drawn to features that improve clarity, communication, and usability.",
          ],
        },
        {
          title: "Research",
          summary: "My research experience has ranged from health tech to machine learning and bioacoustics, often centered on turning messy information into something meaningful.",
          points: [
            "Worked on projects involving advising systems, data analysis, and ML evaluation.",
            "Interested in using technical methods for questions that have real human impact.",
          ],
        },
        {
          title: "Teaching",
          summary: "Teaching has made me a more thoughtful engineer because it pushes me to explain ideas clearly and meet people where they are.",
          points: [
            "Supported students in machine learning and core computer science topics.",
            "Care a lot about making technical work feel approachable and understandable.",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="about-copy">
        <p class="about-kicker">About Me</p>
        <h2>Technical work shaped by curiosity, research, and design.</h2>
        <p class="about-summary">
          I enjoy building things that are useful, carefully designed, and grounded in real questions.
          Outside of class and projects, I love music, crocheting, running, and learning new skills.
        </p>

        <div class="detail-list">
          <p v-for="detail in details" :key="detail">{{ detail }}</p>
        </div>

        <div class="contact-panel">
          <a href="mailto:nyl6@cornell.edu">nyl6@cornell.edu</a>
          <a href="https://www.linkedin.com/in/liao-nicole/">LinkedIn</a>
          <a href="https://github.com/nyl20">GitHub</a>
          <span>New York, NY</span>
        </div>
      </div>

      <div class="portrait-panel">
        <img :src="image" alt="Nicole Liao portrait" />
      </div>
    </section>

    <section class="about-experience">
      <div class="about-experience-copy">
        <p class="about-kicker">Experience</p>
        <h3>Different kinds of work have shaped how I build.</h3>
        <p>
          Across internships, research collaborations, and teaching roles, I’ve learned that I’m most excited
          by work that combines technical depth with clarity, usefulness, and care for the people on the other side.
        </p>
      </div>

      <div class="experience-area-grid">
        <article v-for="area in experienceAreas" :key="area.title" class="experience-area">
          <p class="experience-area-title">{{ area.title }}</p>
          <p class="experience-area-summary">{{ area.summary }}</p>
          <ul>
            <li v-for="point in area.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding: 3.5rem 0 4rem;
}

.about-hero {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
  gap: 2rem;
  align-items: center;
}

.about-copy {
  padding: 2rem;
  border-radius: 32px;
  background:
    radial-gradient(circle at top left, rgba(225, 193, 90, 0.24), transparent 28%),
    linear-gradient(180deg, rgba(255, 251, 239, 0.9) 0%, rgba(251, 246, 230, 0.96) 100%);
  border: 1px solid var(--color-border);
  box-shadow: 0 18px 42px var(--color-shadow);
}

.about-kicker {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text);
}

.about-copy h2 {
  margin-top: 0.65rem;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.04;
  font-weight: 700;
  color: var(--color-heading);
}

.about-summary {
  margin-top: 1rem;
  max-width: 42rem;
  color: var(--color-text-soft);
  font-size: 1.03rem;
}

.detail-list {
  display: grid;
  gap: 0.7rem;
  margin-top: 1.4rem;
}

.detail-list p {
  padding: 0.9rem 1rem;
  border-radius: 18px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.contact-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.contact-panel a,
.contact-panel span {
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: var(--accent-gold);
  color: #fffaf0;
}

.portrait-panel {
  position: relative;
  padding: 1rem;
  border-radius: 32px;
  background:
    linear-gradient(135deg, rgba(255, 247, 220, 0.95), rgba(251, 246, 230, 0.95));
  border: 1px solid var(--color-border);
  box-shadow: 0 18px 42px var(--color-shadow);
}

.portrait-panel img {
  display: block;
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
}

.about-experience {
  width: min(1180px, calc(100% - 48px));
  margin: 2.25rem auto 0;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 1.4rem;
  align-items: start;
}

.about-experience-copy {
  padding: 1.8rem 1.9rem;
  border-radius: 28px;
  background: rgba(247, 250, 252, 0.92);
  border: 1px solid rgba(118, 138, 156, 0.14);
  box-shadow: 0 16px 36px rgba(46, 58, 72, 0.08);
}

.about-experience-copy h3 {
  margin-top: 0.6rem;
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  line-height: 1.08;
  color: var(--color-heading);
}

.about-experience-copy p:last-child {
  margin-top: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.experience-area-grid {
  display: grid;
  gap: 1rem;
}

.experience-area {
  padding: 1.3rem 1.35rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(118, 138, 156, 0.14);
  box-shadow: 0 12px 28px rgba(46, 58, 72, 0.06);
}

.experience-area-title {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text);
}

.experience-area-summary {
  margin-top: 0.5rem;
  color: var(--color-text-soft);
  line-height: 1.65;
}

.experience-area ul {
  margin-top: 0.85rem;
  padding-left: 1.15rem;
  color: var(--color-text);
}

.experience-area li + li {
  margin-top: 0.45rem;
}

@media (max-width: 900px) {
  .about-hero,
  .about-experience {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .about-hero {
    width: min(100% - 32px, 1180px);
  }

  .about-copy {
    padding: 1.4rem;
  }
}
</style>
