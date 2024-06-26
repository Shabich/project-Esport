<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EmyNGIWn9LO6HXTez6cRjSAnLPg6rYIvVFQTt_ESPKyWxKoy10hoImIlFqK64LUUcCw&usqp=CAU"
          /></q-avatar>
          eSport.tournament
        </q-toolbar-title>

      </q-toolbar>

      <q-tabs>
        <q-route-tab to="/games" label="Games" />
        <q-route-tab to="/teams" label="Teams" />
        <q-route-tab to="/players" label="Players" />
        <q-input placeholder="rechercher" dark dense standout class="col-2 absolute-right">
          <template v-slot:append>
            <q-icon v-if="1 === 1" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
            />
          </template>
        </q-input>
      </q-tabs>       

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name:'MainLayout',
})
</script>
<style>
body{
    background-color: rgb(1, 21, 37);
}</style>