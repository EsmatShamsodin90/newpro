import { createRouter, createWebHistory } from 'vue-router';
import annyang from 'annyang';
import VoiceGame from './components/VoiceGame.vue';
import Puzzle from './views/Puzzle.vue';
import TicTacToe from './views/TicTacToe.vue';
import SnakeAndLadder from "./views/SnakeAndLadder.vue";


const routes = [
  { path: '/', component: VoiceGame },
  { path: '/puzzle', component: Puzzle },
  { path: '/tic-tac-toe', component: TicTacToe },
  { path: '/snake-and-ladder', name: 'SnakeAndLadder', component: SnakeAndLadder }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
