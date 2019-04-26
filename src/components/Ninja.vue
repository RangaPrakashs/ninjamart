<template>
  <div id="ninja">
<button v-on:click="hideNinja()">Hide all Ninjas</button>
       <h3>Name and Speciality</h3>

   <ul v-show="hide">
       <li v-for="ninja in ninjas" v-on:click="ninja.show=!ninja.show">
           <h1>{{ninja.name}}</h1>
           <h3 v-show="ninja.show">{{ninja.speciality}}</h3>      

       </li>
   </ul>
  </div>
 
</template>

<script>
export default {
  name: 'headers',
  data(){
    return {
        ninjas:[
        {name:"Ryu", speciality:"Art",show:"false"},
        {name:"Crystal", speciality:"Sniping",show:"false"},
        {name:"Mugen", speciality:"Assassination",show:"false"},
        {name:"Kato", speciality:"Lift and Shift",show:"false"},
        {name:"Kai", speciality:"Carrots",show:"false"}
        ],
        hide:false
      }
  },
  methods:{
      hideNinja:function(){
          this.hide=!this.hide;
      }
  }
 
}
</script>
<style scoped>
#ninja{
    width:100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing:border-box;
    
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding:0;

}
li{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    flex-grow: 1;
    flex-basis:300px;
    text-align:center;
    padding:30px;
    border: 1px solid #222;
    background:coral;
}
h3{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-display: initial;
    font-size: 120%;
    color: blueviolet;
}
</style>
