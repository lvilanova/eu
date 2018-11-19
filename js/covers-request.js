//json request for feching all the covers images
// var imgCovers = new Vue({
//     el: '#app-covers',
//     data: { 
//       images:[],
//     },
//     mounted(){
//       var self = this;
//       axios.get('https://www.jasonbase.com/things/kREY.json')
//             .then(function(response){
//             self.images = response.data.covers;
//             }); 
//         }
//   });

//random images for testing in covers
var imgCovers = new Vue({
  el: '#app-covers',
  data: { 
    images:[],
  },
  mounted(){
    var self = this;
    axios.get('https://jsonplaceholder.typicode.com/photos?page=1')
          .then(function(response){
          self.images = response.data;
          }); 
      }
});


//random images for testing in campaigns

var imgCampaigns = new Vue({
  el: '#app-campaigns',
  data: { 
    images:[],
  },
  mounted(){
    var self = this;
    axios.get('https://jsonplaceholder.typicode.com/photos?page=1')
          .then(function(response){
          self.images = response.data;
          }); 
      }
});