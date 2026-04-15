<script>
import image from "../assets/headshot.jpg";

export default {
  data() {
    return {
      image,
      education: [
        {
          school: "Cornell Tech",
          detail: "M.S. in Applied Information Systems",
          note: "Concentration in Health Tech",
        },
        {
          school: "Cornell University",
          detail: "B.A. in Computer Science",
        },
      ],
      expandableSections: [
        {
          title: "Work",
          items: [
            {
              organization: "MyStage Music",
              role: "Full Stack Developer Intern",
              points: [
                "Worked across the stack on features including notifications and social feed functionality.",
                "Built in a startup environment where iteration speed and product clarity mattered.",
              ],
            },
          ],
        },
        {
          title: "Research",
          items: [
            {
              organization: "Weill Cornell Medicine x Cornell Tech",
              role: "Medical Education Advising Research",
              points: [
                "Explored directions including LLM finetuning and retrieval-augmented generation.",
                "Worked on a healthcare-facing problem where trust, specificity, and usability are especially important.",
              ],
            },
            {
              organization: "TOTTI Labs",
              role: "One Button Tracker",
              points: [
                "Built on an existing Observable notebook codebase using JavaScript.",
                "Created multiple visualizations, including heat maps, histograms, and scatter plots for patient-facing review.",
              ],
            },
            {
              organization: "Cornell Lab of Ornithology",
              role: "BirdCast",
              points: [
                "Wrote analysis functions to assess model accuracy across family, order, and species levels.",
                "Studied precision and recall tradeoffs to better understand model performance.",
              ],
            },
          ],
        },
        {
          title: "Teaching",
          items: [
            {
              organization: "Cornell Tech",
              role: "Applied Machine Learning Course Grader",
              points: [
                "Assessed technical correctness and communicated feedback clearly to students.",
                "Supported learning around practical model building and evaluation.",
              ],
            },
            {
              organization: "Inspirit AI",
              role: "Instructor, Introduction to Machine Learning",
              points: [
                "Explained technical ideas in an accessible, student-friendly way.",
                "Helped learners connect foundational ML concepts to real projects and outcomes.",
              ],
            },
            {
              organization: "Cornell University",
              role: "Course Consultant, Object-Oriented Programming and Data Structures",
              points: [
                "Helped students reason through object-oriented design and data structure tradeoffs.",
                "Focused on making foundational programming concepts clearer and more approachable.",
              ],
            },
          ],
        },
      ],
      interests: [
        {
          title: "Creative and everyday interests",
          points: [
            "Music, crocheting, and running are some of the things I keep coming back to.",
            "I also enjoy learning new skills and exploring ways technology can feel more human and expressive.",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="about-page">
    <section class="about-layout">
      <div class="about-main">
        <div class="about-intro">
          <!-- <p class="about-kicker">About Me</p> -->
          <!-- <h1>Nicole Liao</h1> -->
           <h2>About Me</h2>
          <p class="about-summary">
            I am a master's student at Cornell Tech interested in health tech, machine learning, and
            thoughtful product design. I like building work that feels useful, clear, and carefully made.
          </p>
          <p class="about-summary">
            My background has moved across product work, research, and teaching, and each of those areas
            has shaped how I think about building technology.
          </p>
        </div>

        <section class="about-section">
          <div class="section-heading">
            <h2>Experience</h2>
          </div>

          <div class="expandable-list">
            <details
              v-for="section in expandableSections"
              :key="section.title"
              class="expandable-item"
            >
              <summary>
                <span>{{ section.title }}</span>
                <span class="expand-icon">+</span>
              </summary>

              <div class="expandable-content">
                <article v-for="item in section.items" :key="item.organization + item.role" class="role-block">
                  <p class="item-title">{{ item.organization }}</p>
                  <p class="item-role">{{ item.role }}</p>
                  <ul>
                    <li v-for="point in item.points" :key="point">{{ point }}</li>
                  </ul>
                </article>
              </div>
            </details>
          </div>
        </section>

        <section class="about-section no-border">
          <div class="section-heading">
            <h2>Interests</h2>
          </div>

          <div class="expandable-list">
            <details v-for="interest in interests" :key="interest.title" class="expandable-item">
              <summary>
                <span>{{ interest.title }}</span>
                <span class="expand-button" aria-hidden="true">+</span>
              </summary>

              <div class="expandable-content">
                <ul class="interest-list">
                  <li v-for="point in interest.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </details>
          </div>
        </section>
      </div>

      <aside class="about-side">
        <div class="portrait-wrap">
          <img :src="image" alt="Nicole Liao portrait" />
        </div>

        <div class="side-section no-border">
          <h2>Contact</h2>
          <!-- <p class="side-label">Contact</p> -->
          <div class="side-list">
            <a href="mailto:nyl6@cornell.edu" class="contact-row">
              <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h18v12H3V6Zm2 2v.2l7 4.9 7-4.9V8l-7 4.9L5 8Z" fill="currentColor" />
              </svg>
              <span>nyl6@cornell.edu</span>
            </a>
            <a href="https://www.linkedin.com/in/liao-nicole/" class="contact-row">
              <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9Zm5 0h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V19h-3v-4c0-1-.02-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19h-3v-9Z" fill="currentColor" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/nyl20" class="contact-row">
              <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5A9.5 9.5 0 0 0 9 21c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.3 2 1 2.5.8.1-.6.3-1 .6-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.7-2.3 4.6-4.6 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor" />
              </svg>
              <span>GitHub</span>
            </a>
            <p class="contact-row">
              <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 22s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor" />
              </svg>
              <span>New York, NY</span>
            </p>
          </div>
        </div>

        <div class="side-section">
          <div class="section-heading side-heading">
            <!-- <svg class="section-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 4L2 9l10 5 8-4v6h2V9L12 4Zm-6 8.5V16c0 1.9 3 3.5 6 3.5s6-1.6 6-3.5v-3.5l-6 3-6-3Z"
                fill="currentColor"
              />
            </svg> -->
            <h2>Education</h2>
          </div>

          <div class="side-list education-list">
            <article v-for="item in education" :key="item.school + item.detail">
              <p class="item-title">{{ item.school }}</p>
              <p class="item-role">{{ item.detail }}</p>
              <p v-if="item.note" class="item-note">{{ item.note }}</p>
            </article>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  padding: 3.25rem 0 4rem;
  margin-left: 11%;
  margin-right: 11%;
}

.about-layout {
  width: min(1180px, calc(100% - 56px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.72fr);
  gap: 3rem;
  align-items: start;
}

.about-main {
  display: grid;
  gap: 2rem;
}

.about-kicker,
.side-label,
.item-title {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text);
}

.about-intro h1 {
  margin-top: 0.6rem;
  font-size: clamp(2.4rem, 5vw, 4.4rem);
  line-height: 0.98;
  color: var(--color-heading);
}

.about-summary {
  max-width: 42rem;
  margin-top: 1rem;
  color: var(--color-text-soft);
  line-height: 1.75;
}

.about-section {
  padding-top: 0.2rem;
  border-top: 1px solid rgba(78, 66, 42, 0.12);
}

.about-intro h2 {
  font-size: clamp(1.5rem, 2.8vw, 1.8rem);
  color: var(--color-heading);
  font-weight: 500;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.section-heading h2, .side-section h2 {
  font-size: clamp(1.5rem, 2.8vw, 1.8rem);
  color: var(--color-heading);
}

.section-icon {
  width: 1.2rem;
  height: 1.2rem;
  color: var(--color-heading);
}

.expandable-list {
  margin-top: 1rem;
}

.expandable-item {
  border-bottom: 1px solid rgba(78, 66, 42, 0.12);
}

.expandable-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0.95rem 0;
  cursor: pointer;
  list-style: none;
  color: var(--color-heading);
  font-size: 1.1rem;
}

.expandable-item summary::-webkit-details-marker {
  display: none;
}

.expand-icon,
.expand-button {
  flex-shrink: 0;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--color-text);
  background: transparent;
  border: none;
  padding: 0;
  transition: transform 0.2s ease;
}

.expandable-item[open] .expand-icon,
.expandable-item[open] .expand-button {
  transform: rotate(45deg);
}

.expandable-content {
  padding: 0 0 1rem;
}

.role-block + .role-block {
  margin-top: 1rem;
}

.item-role {
  margin-top: 0.35rem;
  color: var(--color-heading);
  font-size: 1.02rem;
}

.role-block ul {
  margin-top: 0.75rem;
  padding-left: 1.15rem;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.role-block li + li {
  margin-top: 0.35rem;
}

.interest-list {
  padding-left: 1.15rem;
  color: var(--color-text-soft);
  line-height: 1.7;
}

.interest-list li + li {
  margin-top: 0.35rem;
}

.about-side {
  display: grid;
  gap: 1.5rem;
}

.portrait-wrap img {
  display: block;
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 18px 42px var(--color-shadow);
}

.side-section {
  padding-top: 0.2rem;
  border-top: 1px solid rgba(78, 66, 42, 0.12);
}

.no-border {
  border-top: none;
}

.side-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 0.85rem;
}

.side-list a,
.side-list p {
  color: var(--color-heading);
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.contact-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: var(--color-text);
}

.education-list article + article {
  padding-top: 0.6rem;
}

.item-note {
  margin-top: 0.25rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-side {
    max-width: 360px;
  }
}

@media (max-width: 720px) {
  .about-layout {
    width: min(100% - 32px, 1180px);
  }
}
</style>
