<script>
import { RouterLink } from "vue-router";
import squashImage from "../assets/squash/play.jpg";
import bcbmImage from "../assets/brains.png";
import nof1Image from "../assets/sleep_report.png";
import freshcheckImage from "../assets/SS_login.png";
import blueTapeImage from "../assets/blueTape.png";
import yarnImage from "../assets/ys-banner.png";
import efImage from "../assets/ef-cover.png";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      projectRows: [
        [
          {
            title: "EchoFeed",
            image: efImage,
            route: "echofeed",
            description:
              "An iOS app that generates short form audio based on saved social media content. EchoFeed was developed based on various surveys and user testing and tested iteratively. The app is currently being tested on testflight.",
          },
          
        ],
        [
          {
            title: "SquashScore",
            image: squashImage,
            route: "squashscore",
            description:
              "An app for squash players and coaches to analyze matches and improve performance based on real-time input. Coaches can document how points are won and use the app to visualize patterns of strength and weakness. The project was designed in Figma and developed in React Native for iOS deployment.",
          },
          {
            title: "BCBM Subtype Prediction",
            image: bcbmImage,
            route: "bcbm-prediction",
            description:
              "A machine learning project for classifying the molecular subtype of breast cancer in cases of brain metastasis. I trained a custom ensemble classifier using radiomics data and 3D MRI scans, handling data processing and model development in Python.",
          },
          
        ],
        [
          
          {
            title: "BlueTape",
            image: blueTapeImage,
            route: "bluetape",
            description:
              "The winning idea at the MindState Ideation Hackathon. Through user interviews and research, our team designed an AgTech concept to help farmers monitor and respond to pesticide drift. The project was developed in collaboration with designers from Mexico and Israel and supported by a BlueWhite mentor.",
          },
          {
            title: "Music on Sleep: N-of-1 Trial",
            image: nof1Image,
            route: "nof1",
            description:
              "A study exploring the effect of classical music on sleep quality through a four-week ABAB trial. Fitbit data, surveys, statistical analysis, and sentiment analysis were used to understand whether music influenced sleep and morning mood.",
          },
        ],
        [
          {
            title: "Yarn Social",
            image: yarnImage,
            route: "yarnsocial",
            description:
              "A website for yarn lovers and fiber artists to share patterns and yarn shops. Users can post patterns, while shops can share store updates or featured products. The site was built with Next.js, React, Drizzle, and Postgres.",
          },
        ],
      ],
    };
  },
};
</script>

<template>
  <div class="projects-page">
    <section class="projects-hero">
      <!-- <p class="projects-kicker">Projects</p> -->
      <!-- <h1>Selected work across product, research, and creative technology.</h1> -->
       <h2>Projects</h2>
      <!-- <p class="projects-summary">
        These projects range from health tech and machine learning to community platforms and app design.
        I’m usually most interested in work that combines useful functionality with a clear, thoughtful user experience.
      </p> -->
    </section>

    <section class="projects-list" aria-label="Projects">
      <div
        v-for="(row, rowIndex) in projectRows"
        :key="rowIndex"
        :class="['projects-row', row.length === 1 ? 'projects-row-single' : 'projects-row-double']"
      >
        <article
          v-for="project in row"
          :key="project.title"
          class="project-entry"
        >
          <div class="project-image-wrap">
            <img :src="project.image" :alt="project.title" class="project-image" />
          </div>

          <div class="project-copy">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <RouterLink :to="{ name: project.route }" class="project-link">Read more</RouterLink>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-page {
  /* width: min(980px, calc(100% - 10%)); */
  /* max-width: 980px; */
  width: 74%;
  margin-left: 13%;
  margin-right: 13%;
  box-sizing: border-box;
  padding: 3.25rem 0 4.25rem;
  align-items: center;
}

.projects-hero {
  max-width: 58rem;
}

.projects-kicker {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text);
}

.projects-hero h1 {
  margin-top: 0.7rem;
  font-size: clamp(2.2rem, 4.4vw, 4rem);
  line-height: 1.02;
  color: var(--color-heading);
}

.projects-hero h2 {
  font-size: clamp(1.5rem, 2.8vw, 1.8rem);
  color: var(--color-heading);
  font-weight: 500;
}

.projects-summary {
  max-width: 42rem;
  margin-top: 1rem;
  color: var(--color-text-soft);
  line-height: 1.75;
}

.projects-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.7rem;
}

.projects-row {
  display: grid;
  gap: 0.8rem;
}

.projects-row-double {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.projects-row-single {
  grid-template-columns: minmax(0, 1fr);
}

.project-entry {
  display: grid;
  gap: 0.7rem;
  padding: 0.7rem;
  border-radius: 8px;
  background: rgba(255, 251, 243, 0.52);
  border: 1px solid rgba(78, 66, 42, 0.08);
  grid-template-columns: minmax(124px, 0.66fr) minmax(0, 1.34fr);
  align-items: start;
}

.project-image-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  min-height: 145px;
}

.project-image {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 360px;
  min-height: 290px;
  object-fit: cover;
  filter: saturate(0.95) contrast(0.96);
}

.project-copy {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.05rem 0.1rem 0.05rem;
}

.project-copy h2 {
  color: var(--color-heading);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
}

.project-copy p {
  margin-top: 0.55rem;
  color: var(--color-text-soft);
  line-height: 1.58;
  font-size: 0.96rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-top: 0.8rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-heading);
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
}

.project-link:hover {
  transform: translateY(-2px);
}

@media (max-width: 1180px) {
  .projects-row-double,
  .projects-row-single {
    grid-template-columns: 1fr;
  }

  .projects-page {
    width: min(100%, calc(100% - 22%));
  }

  .project-image-wrap {
    min-height: 180px;
  }
}

@media (max-width: 720px) {
  .projects-page {
    width: min(100% - 32px, 980px);
    margin-left: auto;
    margin-right: auto;
  }

  .project-entry {
    padding: 0.65rem;
    grid-template-columns: 1fr;
  }

  .project-image-wrap {
    min-height: 165px;
  }
}
</style>
