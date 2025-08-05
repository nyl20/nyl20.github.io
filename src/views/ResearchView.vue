<script>
import image1 from "../assets/TottiLabs.png"
import image2 from "../assets/OrnithologyLab.png"
import image3 from "../assets/BirdVox.png"
import image4 from "../assets/weill.png"
export default {
    data() {
        return {
            events: [
              { status: 'Medical Education Advising', date: 'Present',
                    location: 'New York, NY',
                    image: image4,
                    description: 'Through a collaboration of Cornell Tech and Weill Cornell, this research project is targeted at making medical education advising easier for both students and advisors. The goal is to create a chatbot which students can interact with in place of an advisor. With data from past Weill students and specific advice from Cornell\'s advisors, the chatbot should be able to give specialized and personalized advice on medical career questions and how to rank residencies during their fourth year of medical school.',
                    contribution: 'Working with Dr. Kaushal Shah, I am exploring options for the chatbot, including finetuning a LLM and using RAG.'
                },
                { status: 'One Button Tracker', date: 'May 2023 - Jul 2023',
                    location: 'Lyngby, DK',
                    image: image1,
                    description: 'One Button Tracker is a portable device used to help monitor the effects of PTSD developed by TOTTI Labs, a lab based in Denmark. Patients carry the tracker with them and press the button when they experience stress.',
                    contribution: 'Working with Dr. Jakob Eg Larsen, I contributed to the One Button Tracker project by building upon an extensive set of pre-existing code to create multiple graphical interfaces that may be used for physicians to display the results of the One Button Tracker to their patients. I adapted my skills in JavaScript to work in Observable Notebooks and produced four unique interfaces, including heat maps, histograms, and scatter plots with varying ranges.'
                },
                { status: 'BirdCast', date: 'Jun 2022 - Dec 2022',
                    location: 'Ithaca, NY',
                    image: image2,
                    description: 'The BirdCast project uses machine learning to document and classify birds and uses information gained to learn more about bird migration. Audio files of bird calls are collected, annotated, and used to train a model that predicts the taxonomy of the bird.',
                    contribution: 'I worked with Dr. Benjamin van Doren and Dr. Andrew Farnsworth to analyze the extensive set of predictions from the machine learning model. I wrote functions to determine the accuracy of the model and analyzed ways to optimize the model’s predictions’ precision and recall on the family, order, and species levels.'},
                { status: 'NSF BirdVox', date: 'Feb 2021 - May 2021',
                    location: 'Remote',
                    image: image3,
                    description: 'BirdVox focuses on bioacoustic research on species classification in natural environments. The research includes creating a large dataset and classifying flight calls.',
                    contribution: 'Under the supervision of Dr. Andrew Farnsworth, I annotated audio files for the machine learning team to use for their model to predict birds based on their calls. I worked in Raven Pro and manually labeled thousands of bird calls.'},
                { status: 'Independent Research', date: 'Oct 2018 - Feb 2020',
                    location: 'Eastchester, NY',
                    description: 'Research focused on the effects of artificial lignt at night on nocturnal organisms, specifically moths.',
                    contribution: 'I developed and completed an experiment to analyze the effects of different wavelengths of light on moth fitness. Moths were placed under different colored lights and observed for several months, and fitness was measured by mass. Results indicated that red light is better to reduce light pollution.'}
            ],
            isMobile: window.innerWidth < 1000
        };
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.isMobile = window.innerWidth < 768;
      }
    }
};
</script>

<template>
  <div class="about">
    <!-- <div> -->
    
     <div class="vertical">
        <div class="para">
            <h2>Research</h2>
            <p>My research interests have transitioned over time and currently, I am looking to continue doing research on how to draw meaningful conclusions from wearable devices and using machine learning for impactful purposes. Here is a brief timeline of the research projects I have contributed to:</p>
         </div>
    <!-- <div class="timeline">
      <Timeline class="tl" :value="events" >
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
                <Card class="mt-4">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-sm" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                        <Button label="Read more" text></Button>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div> -->



    <div class="card timeline-wrapper">
        <Timeline :value="events" :align="isMobile ? 'left' : 'alternate'" class="customized-timeline">
            <template #opposite="slotProps">
        <!-- <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small> -->
        <img  v-if="slotProps.item.image" :src="`${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-sm" />
    </template>
            <template #marker="slotProps">
                <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card class="mt-4">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                        <p>{{ slotProps.item.location }}</p>
                    </template>
                    <template #content>
                        <!-- <img v-if="slotProps.item.image" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-sm" /> -->
                        <p>{{ slotProps.item.description }}</p>
                        <p>{{ slotProps.item.contribution}}</p>
                        <!-- <Button label="Read more" text></Button> -->
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
  </div>

  </div>
</template>

<style>
  .about {
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    /* background-color: aquamarine; */
  }
  .vertical {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 25px;
  }

  .para {
    margin-right: 7%;
    margin-left: 7%;
    margin-top: 3%;
  }

  .p-timeline-event-opposite {
    margin-top: 2%;
  }

  .card {
    margin: 5% 6%;
    min-width: 700px;
    /* width: 100%; */
    /* margin-right: 6%;
    margin-left: 6%;
    margin-bottom: 3%; */
  }

  



/* Add vertical spacing between timeline events */
.p-timeline-event {
  margin-bottom: 2rem;
}


  /* .timeline {
    background-color: bisque;
    width: 80%;
  } */

  /* Move timeline line and event markers to the left */
.p-timeline-left .p-timeline-event-opposite {
  display: none;
}

.p-timeline-left .p-timeline-event-content {
  margin-left: 2rem; /* add spacing to separate from line */
}

.p-timeline-left .p-timeline-event-marker {
  left: 0;
  margin-left: 0;
}

.p-timeline-left .p-timeline-event-connector {
  left: 0;
}

.p-timeline-left .p-timeline-event {
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}


  @media (max-width: 1000px) {
    .timeline {
        margin: 0;
        align-self: flex-start;
    }

  /* Ensure card content fits in wrapper */
    .customized-timeline .p-card {
      width: 60%;
      box-sizing: border-box;
    }

    .timeline-wrapper {
      /* max-width: 700px;  */
      /* or 90% for fluid sizing */
      width: 100%;
      margin: 0 auto;
      padding: 0 1rem;
      box-sizing: border-box;
    }

    .card {
      margin-top: 3%;
    }
    .p-timeline-event-opposite {
      visibility: hidden;
    }

    .para {
      width: 55%;
    }

  /* .intro {
    flex-direction: column;
    justify-content: space-between;
  }

  #headshot-area {
  padding-top: 5%;
  padding-left: 0;
  }

  #portrait {
    width: 100%;
    height: auto;
  } */
}

</style>