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
      <div class="vertical">

     
    <div class="intro">
      <div id="intro-text">
        <p>I recently graduated from Cornell University and have been living in New York City since. In my free time, I might be seen playing the piano or flute, crocheting, or running. During my undergraduate, I was involved in the flute ensemble and the Cornell Biomedical Device project team. I also like learning new skills and started taking up skating in the last year. </p>
      </div>
      <div id="app">
        <img id="portrait" :src="image"/>
      </div>
    </div>
    <p>Contact Information</p>
    <p>Email:</p>
    <p>LinkedIn:</p>
    <p>Location: New York, NY</p>
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
 .vertical {
  display: flex;
  flex-direction: column;
 }
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    /* background-color: aquamarine; */
  }

  .intro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: #586F7C; */
    margin-left: 7%;
    margin-right: 7%;
    /* align-content: center; */
  }

  #intro-text{
    align-self: center;
    font-size: 20px;
  }
  #portrait {
    border-radius: 8%;
    height: 70%;
    align-self: center;
    /* align-items: center; */
  }

</style>
