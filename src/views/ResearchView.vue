<script>
export default {
    data() {
        return {
            events: [
                { status: 'One Button Tracker', date: '15/10/2020', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
                { status: 'Birdcast Project', date: '15/10/2020', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'NSF BirdVox', date: '15/10/2020', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Independent Research', date: '16/10/2020', icon: 'pi pi-check', color: '#607D8B' }
            ]
        };
    }
};
</script>

<template>
  <div class="about">
    <!-- <div> -->
    <!-- <h1>This is a research page: db, aml, ai hc, pp</h1> -->
    <div class="card">
      <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
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
    /* background-color: aquamarine; */
  }

</style>