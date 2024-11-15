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
  <div class="about">
    <!-- <div> -->
    <!-- <h1>This is an projects page: db, aml, ai hc, pp</h1>
    <p>Vegetable Varieties</p>
    <p>Search Media</p>
    <p>Graphics final</p> -->
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
        <div class="flex gap-4 mt-1">
          <Fieldset legend="More Info" :toggleable="true">
           <p class="m-0">
            ss
           </p>
           <img alt="user header" :src="image" class="card-top" />
          </Fieldset>
        </div>
    </template>
    </Card>
  </div>
  <div class="pair">
    <Card class="project">
        <template #title>Cornell Biomedical Device</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
        <div class="flex gap-4 mt-1">
          <Fieldset legend="Specific Projects" :toggleable="true">
           <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
          </Fieldset>
        </div>
    </template>
    </Card>
    <Card class="project">
        <template #title>FreshCheck</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
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


  .about {
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
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
  }

  .card-top {
    height: 50px;
  }

</style>