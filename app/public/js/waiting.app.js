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
        large:'',
        medium:''
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
      .then(json => {
        var pdate = json.results[0].dob.date;
        pdate= pdate.substring(0,10);
        json.results[0].dob.date=pdate;
        waitingApp.person=json.results[0];
      });
    }
  },
  created(){
    this.fetchPerson();
  }
});
