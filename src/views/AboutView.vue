<script>
    import image from "../assets/headshot.jpg"
    
    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<template>
  <div class="container">
    <!-- <div> -->
      <div class="box">

     
    <div class="intro">
      <div id="intro-text">
        <h2>About Me</h2>
        <p>I recently graduated from Cornell University and have been living in New York City since.
           In my free time, I might be seen playing the piano or flute, crocheting, or 
           running. During my undergraduate, I was involved in the flute ensemble, the 
           Cornell Biomedical Device project team, and the Phi Sigma Pi Honor Fraternity. 
           I also enjoy learning new skills and started learning Arabic and figure 
           skating during my time at Cornell. </p>
        <div class="contact-area">
    <p class="twenty">Information</p>
    <p>Email: nyl6@cornell.edu</p>
    <p>LinkedIn: https://www.linkedin.com/in/liao-nicole/</p>
    <p>Github: https://github.com/nyl20</p>
    <p>Location: New York, NY</p>
  </div>
      </div>
      <div id="headshot-area">
        <img id="portrait" :src="image"/>
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

 .container {
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    /* background-color: aquamarine; */
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
    /* background-color: aquamarine; */
  }

  .intro {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* background-color: #586F7C; */
    align-items: center;
    /* margin-left: 7%;
    margin-right: 7%; */
    /* align-content: center; */
  }

  #intro-text{
    /* align-self: center; */
    font-size: 15px;
  }
#headshot-area{
  display: flex;
  justify-content: center;
  padding-left: 5%;
}

  #portrait {
    border-radius: 8%;
    height: 300px;
    /* align-self: center; */
    /* align-items: center; */
  }

  .contact-area {
    background-color: #586F7C;
    padding: 5%;
    margin-top: 7%;
    color: #F4F4F9;
  }

</style>
