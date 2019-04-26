<template>
  <div>
    <header>
        <h1 id="title">{{ title }}</h1>
        <p id="sub">Buy and Sell Ninjas</p>
    </header>
  </div>
 
</template>

<script>
export default {
  name: 'headers',
  data(){
    return {
        title:"Ninja Mart"
      }  
  }
 
}
</script>
<style scoped>
#title{
background: orange;
text-align: center;
height:200%;
width: 100%;
margin-left:0px;
margin-right: 0px;
margin-bottom: 0px;
color:black;
padding: 10px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#sub{
  margin-left:0px;
  margin-right:0px;
  display: block;
  text-align:center;
  font-family: cursive;
}
</style>
