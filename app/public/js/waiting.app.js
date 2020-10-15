waitingApp = new Vue({
  el: '#randomUsersId',
  data:{
    users: []
  },
  methods:{
    fetchPerson(){
      fetch('api/users/')
      .then(response => response.json())
      .then(json => {
        this.users=json;
      });
    }
  },
  created(){
    this.fetchPerson();
  }
});
