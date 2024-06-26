<template>
  <div class="q-pa-md bg-white" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div v-for="(value, index) in keysList" :key="index">
        <q-input standout="bg-black text-white" v-model="submittedObject[keysList[index]]" :label="value" />
      </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from '../stores/example-store'
import { defineComponent, ref, onMounted } from 'vue';

export interface IinsertTeam {
  id_team: number;
  date_modification: Date;
  nom: string;
  description: string;
  lien_logo: string;
}
export interface IinsertGame {
  id_game: number;
  date_modification: Date;
  nom: string;
  description: string;
  lien_logo: string;
}
export interface IinsertPlayer {
  id_player: number;
  date_de_naissance: Date;
  photo: string;
  alias_player: string;
  role_player: string;
  pays_player: string;
  lien_logo: string;
  nom: string;
}

export default defineComponent({
  props: {
    list: {
      type: Array as () => Array<IinsertTeam> | Array<IinsertGame> | Array<IinsertPlayer>,
      required: true,
    },
  },
  setup(props) {
    const myObject = ref<{ [key: string]: any }>({});
    const submittedObject = ref<{ [key: string]: any }>({});
    const store = useCounterStore();
    const keysList = ref<string[]>([]);

    const onSubmit = () => {
      const submittedObject: { [key: string]: any } = {};
      keysList.value.forEach(key => {
        submittedObject[key] = myObject.value[key];
      });
  
      console.log('Submitted:', submittedObject);
      store.setMyObject(submittedObject);
    };

    const onReset = () => {
      keysList.value.forEach(key => {
        submittedObject.value[key] = '';
      });
    };

    onMounted(() => {
      myObject.value = props.list[0] || {};
      keysList.value = Object.keys(myObject.value);
      console.log(myObject.value);

    });

    return {
      myObjectStore: store.myObjectStore,
      submittedObject,
      myObject,
      keysList,
      onSubmit,
      onReset,
    };
  },
});
</script>
