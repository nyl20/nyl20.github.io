<script>
    import image from "../assets/headshot.jpg";
    import match from "../assets/squash/match1.jpg"
    import game from "../assets/squash/game.jpg"
    import play from "../assets/squash/play.jpg"
    import player1 from "../assets/squash/player1.jpg"
    import player2 from "../assets/squash/player2.jpg"
    import search from "../assets/squash/search.jpg"
    import logo from "../assets/SS_login.png"
    import scores from "../assets/sleep_scores.png"
import report from "../assets/sleep_report.png"
    import Carousel from 'primevue/carousel';
    
    export default {
        data: function () {
            return {
                images: [
                  {title: '', image: report, alt: 'Report pdf'},
                  {title: '', image: scores, alt: 'Result charts'},
                  // {title: 'Record Decisive Points', image: play, alt: 'Record Decisive Points'},
                  // {title: 'Player Skills Screen', image: player1, alt: 'Player Skills Screen 1'},
                  // {title: 'Player Skills Screen', image: player2, alt: 'Player Skills Screen 2'},
                  // {title: 'Search Any Match-up', image: search, alt: 'Search Any Match-up'},
                ]
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
         <h1>Music on Sleep: a N-of-1 Trial</h1>
         <p>Sleep is a necessity that impacts our mental and physical
health in a multitude of ways, from giving us energy throughout the day to reducing chances of disorders and depression.
Music has been known to have a relaxing effect on people and
has been studied for its effect on sleep, but with contradicting
results. This study uses an N-of-1 trial to assess the effect
of listening to classical music before bed and after waking
on sleep quality and morning mood. Data on sleep and mood
are collected through daily use of a Fitbit and surveys the
participant fills out each day. In an ABAB trial design, we
find that classical music has no statistically significant effect
on sleep quality or morning mood (p=0.06). However, the results convey
a noticeable negative effect of classical music on sleep quality,
which motivates further research to collect more data and
explore the effect of this intervention more thoroughly.</p>
        <p>Raw data was taken from Fitbit and surveys and were processed using python. Perceived sleep scores were also used to learn weights to create a more transparent sleep score (than the Fitbit sleep score). Morning mood comments were analyzed with preliminary sentiment analysis and should be followed up with further analysis.</p>
        <!-- <div class="contact-area">
          <p class="twenty">Information</p>
          <p>Since this app is still in testing, it is not available yet on the app store. For questions, reach out to:</p>
          <p>Email: nyl6@cornell.edu</p>
          <p>Github: https://github.com/nyl20</p>
        </div> -->
        <router-link to="/projects"><button class="back-button">Back</button></router-link>
        
      </div>
      <div id="carousel-area">
         <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="5000">
            <template #item="slotProps">
              <div class="mb-4 font-medium image-title">{{ slotProps.data.title }}</div>
              <div class="image-card">
                <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="carousel-image" />
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

#ss-img{
  height: 300px;
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

.carousel-image {
  max-width: 95%;
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

  #description-text{
    /* align-self: center; */
    font-size: 15px;
  }
#carousel-area{
  display: flex;
  justify-content: center;
  padding-left: 5%;
  min-width: 50%;
  /* flex: 1; */
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