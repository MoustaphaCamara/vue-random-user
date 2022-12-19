const app = Vue.createApp({
  //   template: "<h1>Wassup my G {{firstName}}</h1>",
  data() {
    return {
      firstName: "Carter",
      lastName: "Inspector",
      email: "carter@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      // {results} = results.results (json res)

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");

/*
/!\ data is a function, that returns an object
//template : same as writing directly in the app div

on peut pas directement faire 
<img src={{picture}}/>
il faut le bind
<img v-bind:src="picture" alt="" />
et donc pas d'utilisation des {{}}

v-bind ou : = pareil
:alt ou v-bind:alt

*/
