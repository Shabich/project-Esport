<template>
   <q-btn icon="create" round color="primary" @click="showDialog = true" />
  <q-page class="row items-center justify-evenly"
    >

    
    <div class="group-card" v-if="1 > 0">
      <GameComponent
        v-for="(game, index) in appDataStore.games"
        :key="index"
        :nom="game.nom"
        :logo="game.lien_logo"
      />
    </div>
    <div
      v-else
      class="q-pt-xl text-grey row justify-center items-center text-h4"
    >
      Aucun résultat
    </div>



    <q-dialog v-model="showDialog">
      <InsertGameComponent
      :list="appDataStore.games"
   />
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import GameComponent from 'src/components/GameComponent.vue';
import { defineComponent } from 'vue';
import { useCounterStore } from 'src/stores/example-store';
import InsertGameComponent from 'src/components/InsertGameComponent.vue';
import { ref } from 'vue';
export default defineComponent({
  name: 'GamePage',
  components: { GameComponent, InsertGameComponent },

  data() {

      return {
        appDataStore: useCounterStore(),
        showDialog: ref(false),
        
      };
  },
  mounted() {
    this.appDataStore.getGames();
  },
});
</script>

<style>
.group-card {
  display: flex;
  flex-wrap: wrap;
  width: 63vw;
}
</style>
