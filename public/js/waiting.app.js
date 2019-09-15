waitingApp = new Vue({
  el: '#randomUsersId',
  data:{
    person:{
      name:{
        first:'',
        last:''
      },
      location:{
        timezone:{
          description:''
        }
      },
      email:'',
      picture:{
        large:''
      },
      dob:{
        date:''
      }
    },
  },
  methods:{
    fetchPerson(){
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {waitingApp.person=json.results[0]});
    }
  },
  created(){
    this.fetchPerson();
  }
});
