<template>
  
  <div class="home container-fluid text-light">
    <div class="row logo-row">
      <h1 class="col-md-9 col-12 logo">save.space</h1>
      <button class="btn btn-outline-light col-2 demo-btn" onclick="toDemo()">30 second demo</button>
    </div>
    <div class="row textarea-row">
      <!-- v-model="editable.name" -->
      <textarea class="col-md-4 col-10 offset-1" placeholder="Your event name..." ></textarea> 
    </div>
    <div class="row create-space-row">
      <button class="btn btn-primary col-md-3 col-10 offset-1 space-btn" onclick="createSpace()">Create Space</button>
    </div>
    <div class="row">
      <p class="offset-1 mt-3 find-space col-md-2 col-6 selectable" type="submit" onclick="findSpace()">Find a Space</p>
    </div>
    <div class="row slogan-text-row">
      <h2 class="col-3 offset-1 slogan ">
        Collect all <br/> your photos. <br/> In one place
      </h2>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  setup() {
    const editable = ref ({isPrivate: false})
    return {
      async createSpace(){
        try {
          //  await spaceService.createSpace(editable.value)
        }
        catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@media only screen and (max-width: 768px){
  .home{
    background-image: url("../assets/img/mobile.png");
    background-position: center;
    background-size: cover;
  }
  .logo-row{
    margin: none;
  }
  .logo{
    text-align: center;
  }
  .logo-row{
    margin-top: 2em;  
  } 
  .demo-btn{
    display: none;
  }
  textarea{
  margin-top: 15vh;
  margin-bottom: 2vh;
  background: transparent;
  color: white;
  font-size: 30px;
  border: none;
  outline: none;
  resize: none;
  max-height: 8vh;
}
  .slogan{
    display: none;
  }
}
// Desktop
@media only screen and (min-width: 768px){
  .home{
    background-image: url("../assets/img/1440p.png");
    background-position: center;
    background-size: cover;
  }
  .logo-row{
    margin-left: 3em;
    margin-top: 3em;
  }
  textarea{
  margin-top: 20vh;
  background: transparent;
  color: white;
  font-size: 30px;
  border: none;
  outline: none;
  resize: none;
  max-height: 8vh;
}
.create-space-row{
  margin-top: 4vh;
}
}
.home {
  position: relative;
  height: 100vh;
  background-color: #1C1832;
  overflow-y:hidden;
  overflow-x:hidden;
}
.logo{
  font-size: 40px;
}
.demo-btn{
  border-radius: 36px;
  font-size: 20px;
  margin-top: 10px;
  padding: 11px;
}
.space-btn{
  border-radius: 17px;
  font-size: 30px;
  background-color: #7939FE;
  padding: 2vh;
}
.find-space{
  font-size: 18px;
}
.find-space:hover{
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
}
.slogan-text-row{
  margin-top: 5vh;
}
.slogan{
  font-size: 50px;
}
</style>