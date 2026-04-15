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
    import podcast from "../assets/ef-podcast.jpeg"
    import saved from "../assets/ef-saved.jpeg"
import report from "../assets/sleep_report.png"
    import Carousel from 'primevue/carousel';
    
    export default {
        data: function () {
            return {
                images: [
                  
                  {title: '', image: podcast, alt: 'Podcast screen'},
                  {title: '', image: saved, alt: 'Saved screen'},
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
  <div class="project-container">
    <!-- <div> -->
      <div class="box">
    
    <div class="description">
      <div id="decription-text">
         <h1>EchoFeed: Audio Digest</h1>
         <p>There is a plethora of content across all social media platforms, spanning many different topics from comedy to how-to's. Users often save posts they are interested in and want to revisit later. The core problem is that users forget the content they save and rarely review their saved posts. EchoFeed aims to address this issue by taking the social media content that a user saves and generating short audio podcasts for users to listen to. Users can catch up on content they have forgotten about and personalize the audio to cover topics that are more relevant to them.</p>
        <p>The EchoFeed app was created using React Native for the frontend and Python for the backend with the parsing and generation of the audio through Gemini. The vector database is also set up through Supabase and allows for user authentication. The app is deployed on TestFlight for beta testing currently and interested users can join a waitlist.</p>
        <!-- <div class="contact-area">
          <p class="twenty">Information</p>
          <p>Since this app is still in testing, it is not available yet on the app store. For questions, reach out to:</p>
          <p>Email: nyl6@cornell.edu</p>
          <p>Github: https://github.com/nyl20</p>
        </div> -->
        <div class="project-contact-area">
          <p class="twenty">Information</p>
          <p>Since this app is still in testing, it is not available yet on the app store. For questions, reach out to:</p>
          <p>Email: nyl6@cornell.edu</p>
          <p>Github: https://github.com/Matt-Shapir0/SaveSpace</p>
        </div>
        <router-link to="/projects"><button class="project-back-link">&#8592 All Projects</button></router-link>
        
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

.project-container{
  margin-left: 9%;
  margin-right: 9%;
  margin-top: -2%;
}

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
  max-height: 600px;
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
    /* background-color: #F4F4F9; */
    background-color: var(--color-highlight);
  }

  .back-button {
    border-radius: 20px;
    /* background-color:#B8DBD9 ; */
    background-color: rgba(255, 255, 255, 0.05);
    width: 25%;
    border-width: 0;
    padding: 2%;
    align-items: center;
    margin-bottom: 15%;
    margin-top: 4%;
    text-align: center;
    border: 1px solid var(--accent-gold);
    color: var(--color-text);
    box-shadow: 0 12px 26px rgba(104, 81, 33, 0.2);
    cursor: pointer;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease;
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