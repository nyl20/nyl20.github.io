<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div class="projects-container">
    <div>
      <h2>Projects</h2>
    </div>

    <div class="pair">
      <Card v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template #title>SquashScore</template>
        <template #content>
          <p class="m-0">
            An app for squash players and coaches to analyze their matches and improve their skills based
            on real time input. Squash coaches can use this app to document how points are won and
            visualize areas of strength and weakness. Designed in Figma and developed in React Native
            with deployment using Apple Developer.
          </p>
          <RouterLink :to="{ name: 'squashscore' }" class="more-button">Read more</RouterLink>
        </template>
      </Card>

      <Card v-animateonscroll="{ enterClass: 'fadeinLeft' }" class="project">
        <template #title>BCBM Suptype Prediction</template>
        <template #content>
          <p class="m-0">
            Machine learning model for classifying the molecular subtype of breast cancer, specifically
            in cases of brain metastasis. A custom ensemble classifier was trained using radiomics data
            and 3D scans of the brain (MRIs). All data processing and model development was done in
            python.
          </p>
          <RouterLink :to="{ name: 'bcbm-prediction' }" class="more-button">Read more</RouterLink>
        </template>
      </Card>
    </div>

    <div class="pair">
      <Card v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template #title>Music on Sleep: a N-of-1 Trial</template>
        <template #content>
          <p class="m-0">
            A study to determine the impact of classical music on sleep quality by listening to a
            relaxing playlist before sleeping and after waking. The trial was conducted over four weeks
            in an ABAB format. Fitbit was used to track sleep data and surveys were used for percieved
            sleep and morning mood data collection. Sentiment analysis and statistical analysis were
            performed on the data to determine if there was a significant effect of music on sleep and
            morning mood.
          </p>
          <RouterLink :to="{ name: 'nof1' }" class="more-button">Read more</RouterLink>
        </template>
      </Card>

      <Card v-animateonscroll="{ enterClass: 'fadeinLeft' }" class="project">
        <template #title>BlueTape</template>
        <template #content>
          <p class="m-0">
            The winning idea at the MindState Ideation Hackathon. User interviews and research were
            performed to ideate a product in the AgTech field which would help farmers combat or monitor
            the problem of pesticide drift. BlueTape was created in collaboration with designers from
            Mexico and Israel and a mentor from BlueWhite.
          </p>
          <RouterLink :to="{ name: 'bluetape' }" class="more-button">Read more</RouterLink>
        </template>
      </Card>
    </div>

    <div class="pair">
      <Card v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template #title>Yarn Social</template>
        <template #content>
          <p class="m-0">
            A website for yarn lovers and fiber artists to share patterns and yarn shops. Users can post
            patterns and shops can post about their store or items they are selling. The website was
            created with Next.js, React, drizzle, and a postgres database.
          </p>
          <RouterLink :to="{ name: 'yarnsocial' }" class="more-button">Read more</RouterLink>
        </template>
      </Card>

      <Card v-animateonscroll="{ enterClass: 'fadeinLeft' }" class="project">
        <template #title>Relational Database Management System</template>
        <template #content>
          <p class="m-0">
            An original relational database management system developed as the final deliverable for
            Databases Practicum (CS). The database takes in binary datatables, SQL queires, and
            efficiently returns the output to the queries. The system supports scanning, projections,
            aliases, filtering, sorting, and joining.
          </p>
        </template>
      </Card>
    </div>

    <div class="pair">
      <Card v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template #title>Cornell Biomedical Device (CUBMD)</template>
        <template #content>
          <p class="m-0">
            CUBMD is a project team in the College of Engineering at Cornell. During my three years on
            the team, I worked with fellow engineering students on the product development subteam and
            also worked as the Webmaster.
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Fieldset legend="Specific Projects" :toggleable="true">
              <p>Website design: <a href="https://www.cubmd.org/">CUBMD website</a></p>
              <p class="m-0">MelanOxi: Pulse oximeter that calibrates to skin tone</p>
              <p class="m-0">MyeMonitor: Wearable muscle sensor to track MS symptoms</p>
              <p class="m-0">InFlux: Infusion pump to make drug addiction recovery accessible</p>
            </Fieldset>
          </div>
        </template>
      </Card>

      <Card v-animateonscroll="{ enterClass: 'fadeinLeft' }" class="project">
        <template #title>FreshCheck</template>
        <template #content>
          <p class="m-0">
            An Android app to track the time a user spends outdoors. This project focused on user
            research and design, as well as creating a prototype in Android Studio.
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style>
.projects-container {
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  padding-right: 7%;
  padding-left: 7%;
  margin-top: 3%;
  margin-bottom: 5%;
}

.pair {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
}

.project {
  width: 48%;
}

.p-card-title {
  color: #586f7c;
}

.p-card-body {
  box-shadow: 0 -0.6em 1em 0.1em #f4f4f9;
}

.more-button {
  display: inline-flex;
  margin-top: 1rem;
  border-width: 0;
  border-radius: 10px;
  background-color: #f4f4f9;
  padding: 0.7rem 1rem;
  color: #2f4550;
}

.more-button:hover {
  background-color: #586f7c;
  color: #ffffff;
}

@keyframes fadeInSlideLeft {
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInSlideRight {
  0% {
    opacity: 0;
    transform: translateX(10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeinRight {
  animation: fadeInSlideRight 1s ease-out forwards;
}

.fadeinLeft {
  animation: fadeInSlideLeft 1s ease-out forwards;
}

@media (max-width: 1000px) {
  .pair {
    display: flex;
    flex-direction: column;
  }

  .project {
    width: 100%;
    margin-bottom: 5%;
  }
}
</style>
