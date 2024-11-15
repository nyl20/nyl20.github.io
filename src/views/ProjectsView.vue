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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
    </Card>
    <Card class="project">
        <template #title>SquashScore</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
        <div class="flex gap-4 mt-1">
          <Fieldset legend="More Info" :toggleable="true">
           <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
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

</style>