<template>
  <div>
    <footer>
        <h1 id="copyright">{{ copyright }}</h1>
        <h6 id="copyright">{{ descrption }}</h6>

    </footer>
  </div>
 
</template>

<script>
export default {
  name: 'footers',
  data(){
    return {
    copyright:"Copyright by Ranga:  "+ new Date().getFullYear(),
    descrption:"This Application is the First to Learn Vue JS "
    }  
  }
 
}
</script>
<style scoped>
#copyright{
background: black;
text-align: center;
height:200%;
width: 100%;
margin-left:0px;
margin-right: 0px;
color:teal;
padding: 10px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
