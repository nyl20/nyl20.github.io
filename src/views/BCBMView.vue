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
    import brains from "../assets/brains.png"
    import loss from "../assets/bcbm_loss.png"
import report from "../assets/sleep_report.png"
    import Carousel from 'primevue/carousel';
    
    export default {
        data: function () {
            return {
                images: [
                  {title: '2D and 3D Brain Scans', image: brains, alt: '2D and 3D Brain Scans'},
                  {title: 'Loss Plots', image: loss, alt: 'Loss Plots'},
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
         <h1>BCBM Subtype Prediction</h1>
         <p>Breast cancer
is the most common cancer in women and is second only to
lung cancer in the leading cause of cancer death in women.
In advanced cases of breast cancer, there is a higher risk
of brain metastases (BCBM), the primary cause of death from breast
cancer. As there is no cure for metastatic breast cancer, it is
important to learn more about these severe cases and gain
insight into the key factors influencing the progression of
cancer, the treatment response, and the overall patient outcome. Since knowing the molecular subtype is essential for treatment strategy and subtype is typically determined through invasive biopsy, it is important to derive a way to predict the subtype through a non-invasive procedure. </p>
<p>Thus, we created a multi-modal ensemble model to classify the molecular subtype of BCBM using radiomics data and 3D MRI scans. We used traditional machine learning models like logistic regression, SVM, and XGBoost in the first phase of training on the tabular data and used custom 3D CNN architectures on the brain scans in the second phase. In the third phase, we fused the best traditional model and the best CNN to create an ensemble classifier which had greater performance than the two models individually. Performance varied on the different subtypes and future work could include data augmentation and different architectures.</p>        
        <!-- <div class="contact-area">
          <p class="twenty">Information</p>
          <p>Since this app is still in testing, it is not available yet on the app store. For questions, reach out to:</p>
          <p>Email: nyl6@cornell.edu</p>
          <p>Github: https://github.com/nyl20</p>
        </div> -->
        <router-link to="/projects"><button class="back-button">Back</button></router-link>
        
      </div>
      <div id="carousel-bcbm">
         <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="5000">
            <template #item="slotProps">
              <div class="mb-4 font-medium image-title">{{ slotProps.data.title }}</div>
              <div class="image-card">
                <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="bcbm-image" />
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

.bcbm-image {
  max-width: 100%;
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

  #carousel-bcbm{
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