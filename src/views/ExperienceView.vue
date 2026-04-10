<script>
import weillImage from "../assets/weill.png";
import tottiImage from "../assets/TottiLabs.png";
import birdImage from "../assets/OrnithologyLab.png";

export default {
  data() {
    return {
      experiences: [
        {
          organization: "MyStage Music",
          timeframe: "Sep 2025 - Dec 2025",
          title: "Full Stack Developer Intern",
          image: weillImage,
          summary:
            "Building out features for an early stage music event discovery startup, including a notifications systems and social feed.",
          points: [
            "Investigating model and retrieval strategies for personalized advising support.",
            "Working on a problem space where trust, specificity, and usability matter.",
          ],
        },
        {
          organization: "Cornell Tech",
          timeframe: "Sep 2025 - Dec 2025",
          title: "Applied Machine Learning Course Grader",
          image: tottiImage,
          summary:
            "Assessed student assignments for the Applied Machine Learning course at Cornell Tech, providing feedback on model implementations and performance.",
          points: [
            "Extended a large pre-existing codebase in Observable notebooks.",
            "Created multiple visualizations including heat maps, histograms, and scatter plots.",
          ],
        },
        {
          organization: "InspiritAI",
          timeframe: "Jul 2025 - Aug 2025",
          title: "Course Instructor for Introduction to Machine Learning",
          image: birdImage,
          summary:
            "Analyzed prediction outputs from bird classification models and evaluated performance at multiple taxonomic levels.",
          points: [
            "Wrote functions to measure model performance and study precision-recall tradeoffs.",
            "Contributed to machine learning research tied to migration monitoring.",
          ],
        },
        {
          organization: "Conrell University",
          timeframe: "Jul 2025 - Aug 2025",
          title: "Course Consultant for Object-Oriented Programming and Data Structures",
          image: birdImage,
          summary:
            "Analyzed prediction outputs from bird classification models and evaluated performance at multiple taxonomic levels.",
          points: [
            "Wrote functions to measure model performance and study precision-recall tradeoffs.",
            "Contributed to machine learning research tied to migration monitoring.",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="experience-page">
    <section class="experience-hero">
      <p class="experience-kicker">Experience</p>
      <h2>Research, interfaces, and technical problem-solving across different domains</h2>
      <p>
        My roles have been selective but varied, spanning healthcare-focused research, scientific analysis,
        and interface design for real users.
      </p>
    </section>

    <section class="experience-stack">
      <article v-for="item in experiences" :key="item.organization + item.title" class="experience-entry">
        <img class="experience-image" :src="item.image" :alt="item.title" />
        <div class="experience-content">
          <div class="experience-header">
            <div>
              <p class="organization">{{ item.organization }}</p>
              <h3>{{ item.title }}</h3>
            </div>
            <span class="timeframe">{{ item.timeframe }}</span>
          </div>
          <p class="summary">{{ item.summary }}</p>
          <ul>
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.experience-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 7% 4rem;
}

.experience-hero {
  max-width: 60rem;
}

.experience-kicker,
.organization {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2f4550;
}

.experience-hero h2 {
  margin-top: 0.5rem;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.08;
  color: #16303b;
}

.experience-hero p:last-child {
  margin-top: 0.8rem;
  color: #4d6772;
}

.experience-stack {
  display: grid;
  gap: 1rem;
}

.experience-entry {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: 24px;
  border: 1px solid rgba(47, 69, 80, 0.08);
  background: #ffffff;
  box-shadow: 0 14px 40px rgba(47, 69, 80, 0.06);
}

.experience-image {
  width: 100%;
  height: 180px;
  border-radius: 18px;
  object-fit: cover;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;
}

.experience-content h3 {
  margin-top: 0.3rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #16303b;
}

.timeframe {
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: #e8f2f1;
  color: #2f4550;
  font-size: 0.9rem;
  white-space: nowrap;
}

.summary {
  margin-top: 0.8rem;
  color: #4d6772;
}

ul {
  margin-top: 0.9rem;
  padding-left: 1.2rem;
  color: #35515d;
}

li + li {
  margin-top: 0.45rem;
}

@media (max-width: 800px) {
  .experience-page {
    padding: 2rem 7% 3rem;
  }

  .experience-entry {
    grid-template-columns: 1fr;
  }

  .experience-header {
    flex-direction: column;
  }

  .timeframe {
    align-self: flex-start;
  }
}
</style>
