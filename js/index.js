// example request using ajax get.
// $.get('data/condensed_data.json', function(data){
//   for (var i = 0; i < data.data.length; i++) {
//     var element = document.createElement("div");
//     var inner = document.createTextNode(data.data[i].author);
//     element.appendChild(inner);
//     document.getElementById('demo').appendChild(element);
//   }
// });

// Example using the Non JQuery AJAX XMLHttpRequest;
// var req = new XMLHttpRequest();
// req.open('GET', 'data/condensed_data.json', true);
// req.send();
// req.onreadystatechange = function (){
//   if (req.readyState === XMLHttpRequest.DONE) {
//     console.log('typeof req.response',typeof req.response);
//     var data = JSON.parse(req.response)
//     console.log(data);
//     for (var i = 0; i < data.data.length; i++) {
//       var element = document.createElement("div");
//       var inner = document.createTextNode(data.data[i].author);
//       element.appendChild(inner);
//       document.getElementById('demo').appendChild(element);
//     }
//   }
// }
window.onload = function () {
  var req = new XMLHttpRequest();
  req.open('GET', 'data/condensed_data.json', true);
  req.send();
  req.onreadystatechange = function (){
    if (req.readyState === XMLHttpRequest.DONE) {
      var data = JSON.parse(req.response)
      window.reddit_feed = data;

      startProcess();
    }
  }
  var time = document.querySelectorAll('.time')
  for (var i = 0; i < time.length; i++) {
    var unixTime = time[i].innerHTML;
    time[i].innerHTML = moment.unix(unixTime);
  }
}

//All custom code goes here
function startProcess(){
  console.log(window.reddit_feed.data[0]);
  for(var i = 0; i < window.reddit_feed.data.length; i++){
    var currentArticle = window.reddit_feed.data[i];
    var author = currentArticle.author;

    //Create HTML elements in memory
    var container = document.createElement('div');
    container.className = "col-sm-12 col-md-4";
    
    var post = document.createElement('div');
    post.className = "post";
    container.appendChild(post);

    var link = document.createElement('a');
    link.href = 'javascript:void(0)'
    post.appendChild(link);

    var thumbnail = document.createElement('div');
    thumbnail.className = "thumbnail";
    link.appendChild(thumbnail);

    var author = document.createElement('div');
    author.className = "image";
    link.appendChild(author);

    var title = document.createElement('div');
    title.className = "title";
    link.appendChild(title);

    var body = document.createElement('div');
    body.className = "body";
    link.appendChild(body);

    var time = document.createElement('div');
    time.className = "time";
    link.appendChild(time);


    document.getElementById('main').appendChild(container);
  }
}











