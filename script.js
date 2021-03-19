//You can edit ALL of the code here
let input = document.getElementById("filter");
let container = document.getElementById("container");
let select = document.getElementById("select-input")
let option = document.getElementById("option");
let searchBar = document.getElementById("searchBar");
let episodesOption = document.getElementById("episodes-option")
let rootDiv = document.getElementById("root");
let allEpisodes;

function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  console.log(input.value);
  //input.addEventListener("input", search);

}

function makePageForEpisodes(episodeList) {

}
////////////////////////
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;
// the Group code work //
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList[0].name} episodes(s)`;
  for (let i = 0; i < episodeList.length; i++) {
    let episodeContainer = document.createElement("div");
    episodeContainer.className = "episodeContainer";
    let episodeName = document.createElement("h2");
    let episodeImg = document.createElement("img");
    let episodeSummary = document.createElement("p");
    episodeSummary.className = "summary";



    //giving values to the elements
    if (episodeList[i].number < 10) {
      episodeName.innerHTML = episodeList[i].name + " " + "-" + " " + "S0" + episodeList[i].season + "E0" + episodeList[i].number;
    }
    else {
      episodeName.innerHTML = episodeList[i].name + " " + "-" + " " + "S" + episodeList[i].season + "E" + episodeList[i].number;
    }
    episodeImg.src = episodeList[i].image.medium;
    episodeSummary.innerHTML = episodeList[i].summary;
    // appending elements of each episode
    episodeContainer.appendChild(episodeName);
    episodeContainer.appendChild(episodeImg);
    episodeContainer.appendChild(episodeSummary);
    // episodeContainer.append(episodeList[i].summary);
    rootElem.appendChild(episodeContainer);
  }
}
let searchInput = document.getElementById("liveSearch")
document.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  let inputSearch = e.target.value;
  const allEpisodes = getAllEpisodes();
  console.log(allEpisodes);
  let filteredEpisodes = allEpisodes.filter(function (episode) {
    return episode.name.toLowerCase().includes(inputSearch.toLowerCase());
  })
  console.log(filteredEpisodes);
  makePageForEpisodes(filteredEpisodes)
});

// search bar
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const character = tvCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.title.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(character);
});

fetch



/* 
rootElem.innerHTML += `<div class="episode">
 <h2>${item.name}</h2><div>
  <img src="${item.image.medium}" alt="">
   <br>
  ${item.summary}
  S${item.season
  .toString()
  .padStart(2,0)}E${item.number.toString().padStart(2, 0)}
  <br> <a href=${item.url}>Check the source</a>
  </div>`; 
  */

window.onload = setup;

//mystring.replace(/\/r/, '/')