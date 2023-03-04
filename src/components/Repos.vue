<template>
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        <li v-for="repo in repos" :key="repo.id">
          <router-link :to="'/repo/' + repo.name">{{ repo.name }}</router-link>
        </li>
      </ul>
      <button @click="loadMore">Load More</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repos: [],
        page: 1,
        perPage: 10,
      }
    },
    created() {
      this.loadRepos();
    },
    methods: {
      loadRepos() {
        axios.get(`https://api.github.com/users/{{USERNAME}}/repos?page=${this.page}&per_page=${this.perPage}`)
          .then(response => {
            this.repos = [...this.repos, ...response.data];
          })
          .catch(error => {
            console.log(error);
          });
      },
      loadMore() {
        this.page++;
        this.loadRepos();
      }
    }
  }
  </script>
  