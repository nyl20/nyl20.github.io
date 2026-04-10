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
    radial-gradient(circle at top left, rgba(184, 219, 217, 0.5), transparent 28%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfb 100%);
  border: 1px solid rgba(47, 69, 80, 0.08);
  box-shadow: 0 18px 42px rgba(47, 69, 80, 0.08);
}

.about-kicker {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #2f4550;
}

.about-copy h2 {
  margin-top: 0.65rem;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.04;
  font-weight: 700;
  color: #16303b;
}

.about-summary {
  margin-top: 1rem;
  max-width: 42rem;
  color: #4d6772;
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
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(47, 69, 80, 0.08);
  color: #2f4550;
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
  background: #16303b;
  color: #f7fbfb;
}

.portrait-panel {
  position: relative;
  padding: 1rem;
  border-radius: 32px;
  background:
    linear-gradient(135deg, rgba(255, 245, 234, 0.95), rgba(244, 248, 249, 0.95));
  border: 1px solid rgba(47, 69, 80, 0.08);
  box-shadow: 0 18px 42px rgba(47, 69, 80, 0.08);
}

.portrait-panel img {
  display: block;
  width: 100%;
  border-radius: 24px;
  object-fit: cover;
}

@media (max-width: 900px) {
  .about-hero {
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
