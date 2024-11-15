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
    
     <div class="vertical">
<p>My research interests have transitioned over time and currently, I am looking to continue researching how to draw meaningful conclusions from wearable devices and machine learning.</p>
     
    <!-- <div class="timeline">
      <Timeline class="tl" :value="events">
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



    <div class="card">
        <Timeline :value="events" align="alternate" class="customized-timeline">
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
    </div>
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
  .vertical {
    display: flex;
    flex-direction: column;
  }

  .card {
    margin-top: 5%;
  }

  /* .timeline {
    background-color: bisque;
    width: 80%;
  } */



</style>