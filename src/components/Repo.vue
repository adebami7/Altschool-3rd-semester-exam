<template>
    <div>
      <h1>{{ repo.name }}</h1>
      <p>{{ repo.description }}</p>
      <p>{{ repo.language }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repo: null,
      }
    },
    created() {
      axios.get(`https://api.github.com/repos/{{USERNAME}}/${this.$route.params.name}`)
        .then(response => {
          this.repo = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  </script>
  