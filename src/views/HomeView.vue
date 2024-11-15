<script>
    import image from "../assets/headshot.jpg"
    
    export default {
      methods: {
    routerpush(resource_name) {
      let name = "/" + resource_name;
      this.$router.push(name);
    }
  },
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

      
    <div>
      <div id="intro-text">
        <p>Hi, I'm Nicole! I am a first year Master's student studying applied information systems at Cornell Tech. I graduated from Cornell University with a Bachelor's in Computer Science this past May. I am interested in the intersection of machine learning and healthcare and hope to develop software to advance the health tech space. From app development to academic research, I have a passion for developing meaningful technology and hope to create impactful work. Learn more about me through my past projects and research:</p>
      </div>
      <!-- <div id="app">
        <img id="portrait" :src="image"/>
      </div> -->
    </div>
    <button class="custom-button" @click="routerpush('projects')">Projects</button>
    <p>Connect with me on LinkedIn:</p>
      <p>Or reach out by email: nyl6@cornell.edu</p>
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
    margin-top: 7%;
    /* background-color: aquamarine; */
  }
  .intro {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    /* background-color: #586F7C; */
    
    /* align-content: center; */
  }

  #intro-text{
    /* align-self: center; */
    font-size: 20px;
  }
  #portrait {
    border-radius: 8%;
    height: 70%;
    /* align-self: center; */
    /* align-items: center; */
  }

  .custom-button {
    background-color: #B8DBD9;
    border-radius: 10%;
    width: 20%;
    height: 30px;
  }

</style>