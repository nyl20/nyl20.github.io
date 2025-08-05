<script>
    import image from "../assets/headshot.jpg";
    import match from "../assets/squash/match1.jpg"
    import game from "../assets/squash/game.jpg"
    import play from "../assets/squash/play.jpg"
    import player1 from "../assets/squash/player1.jpg"
    import player2 from "../assets/squash/player2.jpg"
    import search from "../assets/squash/search.jpg"
    import logo from "../assets/SS_login.png"
    import Carousel from 'primevue/carousel';
    
    export default {
        data: function () {
            return {
                images: [
                  {title: 'Match Analysis Screen', image: match, alt: 'Match Analysis Screen'},
                  {title: 'Game Analysis Screen', image: game, alt: 'Game Analysis Screen'},
                  {title: 'Record Decisive Points', image: play, alt: 'Record Decisive Points'},
                  {title: 'Player Skills Screen', image: player1, alt: 'Player Skills Screen 1'},
                  {title: 'Player Skills Screen', image: player2, alt: 'Player Skills Screen 2'},
                  {title: 'Search Any Match-up', image: search, alt: 'Search Any Match-up'},
                ]
            }
        }
    }
</script>

<template>
  <div class="container">
    <!-- <div> -->
      <div class="box">
    
    <div class="description squash-description">
      <div id="decription-text">
         <h1>SquashScore</h1>
        <p>SquashScore is an iOS app for squash players and coaches to analyze their skills based on real time input. Once a user signs in, they can add players and start a match. A match is recorded through user input of the last shot of each rally, while the match is being played in real time. The user can input details about each decisive shot like the specific shot taken, the direction, and the location. Multiple games can be played per match, with intermediate skill analysis for coaches to use during the 90 seconds allotted between games to coach during a match. A more in depth analysis is provided at the end of matches, as well as on a player's profile. Users can also search up previous matches they recorded and look at head-to-head analysis, which combines data across different matches. </p>
        <p>The app was designed using wireframes, user interviews, and Figma for higher fidelity prototypes. React Native was used for development and data was stored using Supabase. The app is currently in beta testing using Apple's Test Flight.</p>
        <div class="contact-area">
          <p class="twenty">Information</p>
          <p>Since this app is still in testing, it is not available yet on the app store. For questions, reach out to:</p>
          <p>Email: nyl6@cornell.edu</p>
          <p>Github: https://github.com/nyl20</p>
        </div>
        <router-link to="/projects"><button class="back-button">Back</button></router-link>
        
      </div>
      <div id="carousel-squash">
         <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="5000">
            <template #item="slotProps">
              <div class="mb-4 font-medium image-title">{{ slotProps.data.title }}</div>
              <div class="image-card">
                <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="squash-image" />
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

.squash-image {
  max-width: 65%;
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
#carousel-squash{
  display: flex;
  justify-content: center;
  padding-left: 5%;
  max-width: 50%;
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

  .squash-description {
    flex-direction: column;
    max-width: 55%;
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