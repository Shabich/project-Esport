import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export interface Teams { 
  id_team: number, 
  date_modification: Date, 
  nom: string, 
  lien_logo: string, 
  description: string 
};

export interface Players { 
  id_player: number, 
  date_de_naissance: Date, 
  date_de_creation: Date, 
  date_de_maj: Date, 
  photo: string, 
  alias_player: string, 
  role_player: string, 
  pays_player: string, 
  lien_logo: string, 
  nom: string 
};

export interface Games { 
  id_game: number, 
  date_modification: Date, 
  nom: string, 
  lien_logo: string, 
  description: string 
};

export const useCounterStore = defineStore('counter', {
  state: () => ({
    myObjectStore: null,
    teams: ref<Array<Teams>>([]),
    players: ref<Array<Players>>([]),
    games: ref<Array<Games>>([]),
  }),
  getters: {
    teamItems: (state) => state.teams.map(team =>{
      return{
        lien_logo: team.lien_logo,
        nom: team.nom,
        description: team.description,
      }
    }),
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
    async setMyObject(newObject: any){
      try {
        this.myObjectStore = newObject;

        const response = await api.post('/api/endpoint', { data: newObject });

        console.log('API call successful:', response.data);
      } catch (error) {
        console.error('Error while updating data:', error);
      
    }},
    async getTeams() {
      const { data } = await api.get('/teams');
      this.teams = data;
    },
    async getPlayers() {
      const { data } = await api.get('/players');
      this.players = data;
    },
    async getGames() {
      const { data } = await api.get('/games');
      this.games = data;
    },
  },
});
