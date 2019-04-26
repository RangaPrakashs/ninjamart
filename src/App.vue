<template>
  <div>
  <app-header></app-header>
  <app-ninjas></app-ninjas>
  <app-footer></app-footer>
  </div> 
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/footer.vue"
import Ninja from "./components/Ninja.vue"


export default {
  name: 'app',
  components:{
    "app-header": Header,
    "app-ninjas":Ninja,
    "app-footer":Footer
  },
  data(){
    return{

    }
  }
 
}
</script>



