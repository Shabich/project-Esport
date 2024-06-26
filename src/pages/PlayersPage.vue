<template>
<q-btn icon="create" round color="primary" @click="showDialog = true" />
  <q-page class="row items-center justify-evenly">

    <ListComponent :list="appDataStore.players"
    :triggerFields="['lien_logo','photo','pays_player']"/>
    <q-dialog v-model="showDialog">


      <InsertGameComponent
      :list="appDataStore.players"
    :typeContent="[]"/>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import ListComponent from 'src/components/ListComponent.vue';
import InsertGameComponent from 'src/components/InsertGameComponent.vue';
import { useCounterStore } from 'src/stores/example-store';
import { defineComponent, ref} from 'vue';

export default defineComponent({
    name: 'PlayersPage',
  
    data() {
      return {
        appDataStore: useCounterStore(),
        showDialog: ref(false),
      };
  },
  mounted() {
    this.appDataStore.getPlayers();
  },


    components: { ListComponent, InsertGameComponent }
});
</script>

