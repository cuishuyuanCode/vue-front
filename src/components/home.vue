<template>
    <div class="wrapper">
      <fj-Header></fj-Header>
      <fj-Sidebar></fj-Sidebar>
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </template>
  
  <script>
      import fjHeader from './header'
      import fjSidebar from './sidebar'
    //   import {loadData} from '../api'
  
      export default {
        components: {
          fjHeader, fjSidebar
        },
        mounted() {
          this.load();
        },
        methods:{
        //   load() {
        //     loadData().then(function(response){
        //       console.log(response);
        //     });
        //   }
        }
      }
  </script>