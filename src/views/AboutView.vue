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
  <div class="about">
    <!-- <div> -->
    <div class="intro">
      <div id="intro-text">
        <p>Hi, I'm Nicole! I am a first year Master's student studying applied information systems at Cornell Tech. I graduated from Cornell University with a Bachelor's in Computer Science this past May.</p>
      </div>
      <div id="app">
        <img id="portrait" :src="image"/>
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
