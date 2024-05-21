// includo vue nel mio file js

const { createApp } = Vue;

createApp({
  data() {
    return {
      //array di oggetti di riferimento per popolare lo slider
      games: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morales",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      //setto il valore di currentIndex a 0
      currentIndex: 0,
      //setto il valore di interval a null per riassegnarlo successivamente
      interval: null,
    };
  },

  //quando monto l'app mi richiamo la funzione che avvia il carosello in automatico dopo 3 sec
  mounted() {
    this.startCarousel();
  },
  //prima di smontare l'app mi richiamo la funzione che interrompe il carosello
  beforeUnmount() {
    this.stopCarousel();
  },

  methods: {
    // funzione che gestisce il bottone next e che permette di ciclare e con l'else resettare il ciclo e ripartire creando un ciclo infinito
    nextImg() {
      if (this.currentIndex < this.games.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    // funzione che gestisce il bottone prev e che permette di ciclare e con l'else resettare il ciclo e ripartire creando un ciclo infinito
    prevImg() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.games.length - 1;
      }
    },
    // gestisco la classe active per le thumb e i suoi casi
    activeThumb(index) {
      if (this.currentIndex === index) {
        return "active";
      } else {
        return "";
      }
    },
    // mostro l'immagine del carosello corrispondente alla thumb cliccata
    setActiveImage(index) {
      this.currentIndex = index;
    },
    // setto lo start dell'interval e dopo quanto tempo deve avvenire
    startCarousel() {
      this.interval = setInterval(this.nextImg, 3000);
    },
    // setto lo stop del setInterval e resetto interval a null
    stopCarousel() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
  },
  // monto l'app nel mio div con id = 'app'
}).mount("#app");
