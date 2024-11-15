
<script>
    import image from "../assets/headshot.jpg"
    // import Button from 'primevue/button';
    
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
    <div class="buttons">
      <button class="custom-button" @click="routerpush('projects')">Projects</button>
      <!-- <Button label="Submit"/> -->
      <button class="custom-button" @click="routerpush('research')">Research</button>
    </div>
    <p>Skills</p>
      <p>Connect with me on <a href="https://www.linkedin.com/in/liao-nicole/">LinkedIn</a></p>
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
    animation: 1s fadeIn;
    animation-fill-mode: forwards;
  
    visibility: hidden;
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

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 35%;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .custom-button:hover {
  background-color: #586F7C;
}

  .custom-button {
    background-color: #B8DBD9;
    border-radius: 10%;
    border: none;
    width: 150px;
    height: 50px;
    font-size: 20px;
    padding: 1%;
    -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
  }

  @keyframes fadeIn {
    0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

</style>