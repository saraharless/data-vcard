console.log('ghost toast');

let fullname = document.querySelector('.fullname')
let story = document.querySelector('.story')
let basics = document.querySelector('.basics')
// let info = document.querySelector('ul')

function popInfo() {
  let data = JSON.parse(this.responseText);
  console.log(data);
  // name
  let h1 = document.createElement('h1');
  fullname.appendChild(h1);
  let name = (data.name);
  console.log(name);
  h1.innerHTML = `${name}`
  // list
  let list = `
  <h2>The Basics</h2>
  <ul>
    <li><span class = "key">Name: </span>${data.name}</li>
    <li><span class = "key">Github URL: </span>${data.html_url}</li>
    <li><span class = "key">Email: </span>sara.e.harless@gmail.com</li>
    <li><span class = "key">Company: </span>${data.company}</li>
    <li><span class = "key">Website: </span>${data.blog}</li>
  </ul>
  `
  basics.innerHTML = list
  // bio
  let bio = document.createElement('p');
  story.appendChild(bio);
  let biotext = (data.bio);
  console.log(biotext);
  bio.innerHTML = `${biotext}`
  // photo
  let image = document.createElement('img');
  story.appendChild(image);
  let photo = (data.avatar_url);
  console.log(photo);
  image.setAttribute("src", `${photo}`)

}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/saraharless");
req.addEventListener("load", popInfo);
req.send();
