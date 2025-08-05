<script>
    import blueTape from "../assets/blueTape.png"
    import farmerView from "../assets/farmer_view.png"
    import field from "../assets/field.png"
    import value from "../assets/value_prop.png"
    import sensor from "../assets/sensor-centered-unscreen.gif"
    import Carousel from 'primevue/carousel';
    
    export default {
        data: function () {
            return {
                images: [
                  {title: '', image: blueTape, alt: 'BlueTape'},
                  {title: 'Farm Manager Dashboard', image: farmerView, alt: 'Farm Manager Dashboard'},
                  {title: 'Live Field View', image: field, alt: 'Live Field View'},
                  // {title: 'Record Decisive Points', image: play, alt: 'Record Decisive Points'},
                  // {title: 'Player Skills Screen', image: player1, alt: 'Player Skills Screen 1'},
                  // {title: 'Player Skills Screen', image: player2, alt: 'Player Skills Screen 2'},
                  // {title: 'Search Any Match-up', image: search, alt: 'Search Any Match-up'},
                ],
                sensor: sensor,
                value: value
            }
        }
    }
</script>

<template>
  <div class="container">
    <!-- <div> -->
      <div class="box">
    
    <div class="description">
      <div id="decription-text">
         <h1>BlueTape</h1>
         <p>BlueTape is an idea for an AgTech product that helps farmers and farm managers monitor the problem of pesticide drift. BlueTape has both a hardware and software component, where a sensor detects the presence of pesticide in the air and a digital UI displays the farm's pesticide spraying schedule and each employee's pesticide exposure risk. Since the hackathon competition was a collaboration with BlueWhite (autonomous tractor company), BlueTape connects to the BlueWhite tractors, tracks live movements and displays a live view of the field with risk areas highlighted.</p>
         <p>The name BlueTape comes from a manual system that farmers use today, where farm managers walk to neighbors and place blue masking tape on fences to let their neighbors know they will be spraying pesticide in 24 hours. BlueTape automates this system with extra data available to monitor employee health and increase safety measures.</p>
         <p>The month long MindState competition allowed time for extensive research with interviews with farmers and refinement on the product idea. The final pitch included the motivation for the product, the sensor technology design, demo of the UI, and the business model. At the conclusion of the pitch event, BlueTape won the grand prize!</p>       
        <!-- <div class="contact-area">
          <p class="twenty">Information</p>
          <p>Since this app is still in testing, it is not available yet on the app store. For questions, reach out to:</p>
          <p>Email: nyl6@cornell.edu</p>
          <p>Github: https://github.com/nyl20</p>
        </div> -->
        
        <div class="row">
          
<img :src="value"  id="value-img"/>
        <img :src="sensor"  id="sensor-img"/>
        </div>
        <router-link to="/projects"><button class="back-button">Back</button></router-link>
        
        
        
      </div>
      <div id="carousel-bt">
         <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="5000">
            <template #item="slotProps">
              <div class="mb-4 font-medium image-title">{{ slotProps.data.title }}</div>
              <div class="image-card">
                <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="bt-image" />
              </div>
            </template>
          </Carousel>


      </div>
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

.squash-title{
  display: flex;
  flex-direction: row;
}

.row{
  display: flex;
  flex-direction: row;
  align-items: center;
}

#sensor-img{
  height: 250px;
}

#value-img{
  height: 180px;
}
 .carousel-container {
  max-width: 900px;
  margin: auto;
  padding: 2rem 1rem;
}

.image-card {
  padding: 0.5rem;
  display: flex;
  justify-content: center;
}

.bt-image {
  max-width: 80%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.image-title {
  text-align: center;
}

 .container {
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  .back-button:hover{
    background-color: #F4F4F9;
  }

  .back-button {
    border-radius: 12px;
    background-color:#B8DBD9 ;
    width: 15%;
    border-width: 0;
    padding: 2%;
    align-items: center;
    margin-bottom: 15%;
    margin-top: 4%;
    text-align: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 5%;
    animation: 1s fadeIn;
    animation-fill-mode: forwards;
  
    visibility: hidden;
  }

  .description {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* flex: 2; */
   
  }

  #description{
    /* align-self: center; */
    font-size: 15px;
  }

  #carousel-bt{
    display: flex;
    justify-content: center;
    padding-left: 5%;
    min-width: 45%;
  }

  #portrait {
    border-radius: 8%;
    height: 300px;
  }

  .contact-area {
    background-color: #586F7C;
    padding: 5%;
    margin-top: 7%;
    color: #F4F4F9;
  }

  @media (max-width: 1000px) {
  .intro {
    flex-direction: column;
    justify-content: space-between;
  }

  .description {
    flex-direction: column;
  }

 .row {
    flex-direction: column;
    /* max-width: 45%; */
  }

  #headshot-area {
  padding-top: 5%;
  padding-left: 0;
  }

  #portrait {
    width: 100%;
    height: auto;
  }
}
</style>