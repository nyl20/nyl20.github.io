<script>
    import image from "../assets/SS_login.png"
    
    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<template>
  <div class="projects-container">
    <!-- <div> -->
    <!-- <h1>This is an projects page: db, aml, ai hc, pp</h1>
    <p>Vegetable Varieties</p>
    <p>Search Media</p>
    <p>Graphics final</p> -->
    <div >
            <h2>Projects</h2>
         </div>
    <div class="pair">

    
    <Card class="project">
        <template class="title" #title>Relational Database Management System</template>
        <template #content>
            <p class="m-0">
              An original relational database management system developed as the final deliverable for Databases Practicum (CS).
              The database takes in binary datatables, SQL queires, and efficiently returns the 
              output to the queries. The system supports scanning, projections, aliases, filtering, sorting, and joining.
              Multiple joins were also implemented, including block nested loop join and sort merge join. Retrieval of results was
              optimized using indexing and a join dynamic programming algorithm. All components were coded in Java.
            </p>
        </template>
    </Card>
    <Card class="project">
        <template #title>
          SquashScore
          
        </template>
        <template #content>
            <p class="m-0">
              An app for squash players to analyze their matches and improve their skills based 
              on real time input. Squash coaches can use this app to document how points are
               won and visualize areas of strength and weakness. Designed in Figma 
               and developed in React Native with deployment using Apple Developer.

            </p>
            
        </template>
        <template #footer>
        <!-- <div class="flex gap-4 mt-1">
          <Fieldset legend="More Info" :toggleable="true">
           <p class="m-0">
            ss
           </p>
           <img alt="user header" :src="image" class="card-top" />
          </Fieldset>
        </div> -->
    </template>
    </Card>
  </div>
  <div class="pair">
    <Card class="project">
        <template #title>Cornell Biomedical Device (CUBMD)</template>
        <template #content>
            <p class="m-0">
                CUBMD is a project team in the College of Engineering at Cornell. During my 
                three years on the team, I worked with fellow engineering students on the 
                product development subteam and also worked as the Webmaster. We worked on 
                ideating novel devices and developing devices we believed feasible. As a team, 
                we started multiple projects and submitted to competitions.
            </p>
        </template>
        <template #footer>
        <div class="flex gap-4 mt-1">
          <Fieldset legend="Specific Projects" :toggleable="true">
            <p>Website design: <a href="https://www.cubmd.org/">CUBMD website</a></p>
           <p class="m-0">
            MelanOxi: Pulse oximeter that calibrates to skin tone
           </p>
           <p class="m-0">
            MyeMonitor: Wearable muscle sensor to track MS symptoms
           </p>
           <p class="m-0">
            InFlux: Infusion pump to make drug addiction recovery accessible
           </p>
          </Fieldset>
        </div>
    </template>
    </Card>
    <Card class="project">
        <template #title>FreshCheck</template>
        <template #content>
            <p class="m-0">
                An Android app to track the time a user spends outdoors. This project focused
                on user research and design, as well as creating a prototype in Android Studio.
                We researched existing apps and the importance of spending time outdoors in order to
                create an effective design and wrote a comprehensive report of our findings.
            </p>
            <!-- <p><a href="assets/report.pdf">CUBMD website</a></p> -->
        </template>
    </Card>
  </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */


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
    /* background-color: aquamarine; */
  }

  .title {
    background-color: #B8DBD9;
  }

  .pair {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4%;
  }

  .project {
    width: 48%;
    /* -webkit-box-shadow: 0 4px 6px -6px #B8DBD9; */
    /* -moz-box-shadow: 0 4px 6px -6px #B8DBD9; */
    /* box-shadow: 0 4px 6px -6px #B8DBD9' */
    box-shadow: 10px 5px 5px red;
  }

  .card-top {
    height: 50px;
  }

  .p-card-title {
    /* -webkit-box-shadow: 0 4px 6px -6px #222;
    -moz-box-shadow: 0 4px 6px -6px #222;
    box-shadow: 0 4px 6px -6px #222; */
    color: #586F7C;
  }

  .p-card-body {
    /* background-color: aquamarine; */
    /* box-shadow: 10px 5px 5px red; */
    box-shadow: 0 -0.6em 1em 0.1em #F4F4F9;
  }


</style>