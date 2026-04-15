<script>
import myStageImage from "../assets/ys-banner.png";
import weillImage from "../assets/weill.png";
import tottiImage from "../assets/TottiLabs.png";
import birdCastImage from "../assets/OrnithologyLab.png";
import birdVoxImage from "../assets/BirdVox.png";

export default {
  data() {
    return {
      experienceGroups: [
        {
          value: "0",
          label: "Industry",
          roles: [
            {
              organization: "MyStage Music",
              title: "Full Stack Developer Intern",
              image: myStageImage,
              points: [
                "Worked across the stack on features including notifications and social feed functionality.",
                "Collaborated in a startup environment where iteration speed and product clarity mattered.",
              ],
            },
          ],
        },
        {
          value: "1",
          label: "Research",
          roles: [
            {
              organization: "Weill Cornell Medicine x Cornell Tech",
              title: "Medical Education Advising Research",
              image: weillImage,
              points: [
                "Evaluating directions including LLM finetuning and retrieval-augmented generation.",
                "Working on a healthcare-facing problem where trust, specificity, and usability are especially important.",
              ],
            },
            {
              organization: "TOTTI Labs",
              title: "One Button Tracker",
              image: tottiImage,
              points: [
                "Built on an existing Observable notebook codebase using JavaScript.",
                "Created multiple visualizations, including heat maps, histograms, and scatter plots for patient-facing review.",
              ],
            },
            {
              organization: "Cornell Lab of Ornithology",
              title: "BirdCast",
              image: birdCastImage,
              points: [
                "Wrote analysis functions to assess model accuracy across family, order, and species levels.",
                "Studied precision and recall tradeoffs to better understand model performance.",
              ],
            },
            {
              organization: "BirdVox",
              title: "NSF BirdVox",
              image: birdVoxImage,
              points: [
                "Labeled large volumes of bird-call audio in Raven Pro.",
                "Supported dataset creation for species classification in natural environments.",
              ],
            },
          ],
        },
        {
          value: "2",
          label: "Teaching",
          roles: [
            {
              organization: "Cornell Tech",
              title: "Applied Machine Learning Course Grader",
              image: weillImage,
              points: [
                "Assessed technical correctness and communicated feedback clearly to students.",
                "Supported learning around practical model building and evaluation.",
              ],
            },
            {
              organization: "Inspirit AI",
              title: "Instructor, Introduction to Machine Learning",
              image: birdCastImage,
              points: [
                "Explained technical ideas in an accessible, student-friendly way.",
                "Helped learners connect foundational ML concepts to real projects and outcomes.",
              ],
            },
            {
              organization: "Cornell University",
              title: "Course Consultant, Object-Oriented Programming and Data Structures",
              image: tottiImage,
              points: [
                "Helped students reason through object-oriented design and data structure tradeoffs.",
                "Focused on making foundational programming concepts clearer and more approachable.",
              ],
            },
          ],
        },
      ],
      openGroups: ["0", "1", "2"],
    };
  },
};
</script>

<template>
  <div class="experience-page">
    <section class="experience-hero">
      <p class="experience-kicker">Experience</p>
      <!-- <h2>Work, research, and teaching that all shape how I build</h2> -->
      <p>
        My experience includes working for a music startup, conducting research, and teaching machine learning.
      </p>
    </section>

    <section class="experience-accordion">
      <Accordion :value="openGroups" multiple>
        <AccordionPanel
          v-for="group in experienceGroups"
          :key="group.value"
          :value="group.value"
          class="experience-panel"
        >
          <AccordionHeader class="experience-panel-header">
            <div class="panel-heading">
              <h3>{{ group.label }}</h3>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="panel-body">
              <div class="role-stack">
                <article
                  v-for="role in group.roles"
                  :key="role.organization + role.title"
                  class="role-card"
                >
                  <img v-if="role.image" class="role-image" :src="role.image" :alt="role.title" />
                  <div class="role-copy">
                    <p class="organization">{{ role.organization }}</p>
                    <h4>{{ role.title }}</h4>
                    <ul class="role-points">
                      <li v-for="point in role.points" :key="point">{{ point }}</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </section>
  </div>
</template>

<style scoped>
.experience-page {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 3rem 7% 4rem;
}

.experience-hero {
  /* max-width: 62rem; */
  width: 77%;
  align-self: center;
}

.experience-kicker,
.organization {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text);
}

.experience-hero h2 {
  margin-top: 0.5rem;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.08;
  color: var(--color-heading);
}

.experience-hero p:last-child {
  margin-top: 0.8rem;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.experience-accordion {
  width: 77%;
  align-self: center;
}

.experience-panel {
  margin-bottom: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  overflow: hidden;
  background: var(--color-surface);
  box-shadow: 0 16px 38px var(--color-shadow);
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.panel-heading h3 {
  margin: 0;
  color: var(--color-heading);
  font-size: clamp(1.35rem, 2.6vw, 1.8rem);
}

.panel-body {
  padding: 0.2rem 1.35rem 1.35rem;
}

.role-stack {
  display: grid;
  gap: 1.35rem;
}

.role-card {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 1.1rem;
  align-items: start;
}

.role-image {
  display: block;
  width: 100%;
  height: 150px;
  object-fit: contain;
  object-position: left center;
  border-radius: 14px;
  background: transparent;
}

.role-copy h4 {
  margin-top: 0.2rem;
  color: var(--color-heading);
  font-size: 1.35rem;
}

.role-points {
  margin-top: 0.75rem;
  padding-left: 1.2rem;
  color: var(--color-text);
}

.role-points li + li {
  margin-top: 0.45rem;
}

@media (max-width: 900px) {
  .experience-page {
    padding: 2rem 7% 3rem;
  }

  .role-card {
    grid-template-columns: 1fr;
  }

  .role-image {
    height: 180px;
    object-position: center;
  }
}

@media (max-width: 640px) {
  .panel-body {
    padding: 0 1rem 1rem;
  }

  .role-image {
    height: 160px;
  }
}
</style>
