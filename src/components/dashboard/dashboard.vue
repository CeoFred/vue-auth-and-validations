<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Youe email address: {{ email }}</p>
  </div>
</template>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>

<script>
import axios from "../../axios-auth.js";

export default {
  data() {
    return {
      email: ''
    }
  },
  created() {
    axios.get().then(res => {
       const data = res.data;
      const users = [];
       for (const key in data) {
         if (data.hasOwnProperty(key)) {
           const element = data[key];
            users.push(element)
         }
       }

       this.email = users[0].email;

    }).catch(err => { 
      console.log(err);
    })
  },  
}
</script>