// getting components for use
const title = document.getElementById("movieTitle");
const description = document.getElementById("coverInfo");
const cover = document.getElementById("fixedImage")
const movie = document.getElementById("movie");
const series = document.getElementById("series")

// components declared

// trending movies
async function getCategories(index) {
  let imagePath = "https://image.tmdb.org/t/p/w500";
  let myObject = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=f3fa058a0294c6f7b1d786efd12e5aa0&language=en-US`)
  let myText = await myObject.json();

  genres.innerHTML +=
    `<div style="
    position:relative;
     background-color:#090A0E;
     display:inline-block;
     padding:2px;
     text-align:center;
     ">
    <img onclick="" src="${imagePath}${myText.results[index].poster_path}" alt="Movie" style="
    position:relative;
     width:38vw; 
     height:30vh; 
     background-color:#090A0E;
     padding:15px;
     display:inline-block;"
     padding:10px;
     >
     <br>
     <button style="position:relative; 
     height:7vh;
     border-color:white;
      padding:7px; 
     width:38vw;
     background-color:red;
     color:white;
     font-size:13px;
     border-color:red;
     line-height: 35px;
     text-align:center;
     letter-spacing:6px;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     border-radius:3px;
     ">Trailer</button>
     <br>
     <br>
    </div>
     `
}

// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

// trending tv shows api request
async function getRandomMovieById(index) {
  let imagePath = "https://image.tmdb.org/t/p/w500";
  let myObject = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f3fa058a0294c6f7b1d786efd12e5aa0`)
  let myText = await myObject.json();

  holder.innerHTML +=
    `<div style="
    position:relative;
     background-color:#090A0E;
     border-color:white;
     display:inline-block;
     padding:2px;
     text-align:center;
     ">
    <img onclick="" src="${imagePath}${myText.results[index].poster_path}" alt="Movie" style="
    position:relative;
    border-color:white;
     width:41vw; 
     height:33vh; 
     background-color:#090A0E;
     padding:15px;
     display:inline-block;"
     padding:10px;
     >
     <br>
     <button style="position:relative; 
     height:7vh;
     border-color:white;
      padding:7px; 
     width:38vw;
     background-color:red;
     color:white;
     font-size:13px;
     border-color:red;
     line-height: 35px;
     text-align:center;
     letter-spacing:6px;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
     border-radius:3px;
     ">Trailer</button>
     <br>
     <br>
    </div>
     `
}

//set up cover movie from trending
async function setCover() {
  let imagePath = "https://image.tmdb.org/t/p/w500";
  let myObject = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f3fa058a0294c6f7b1d786efd12e5aa0`)
  let myText = await myObject.json();
  console.log("my data ", myText);
  cover.src = `${imagePath}${myText.results[9].poster_path}`;
  description.innerText = `${myText.results[9].overview}`;
  title.innerText = `${myText.results[9].original_title}`;
}

const loadPage = (from, to) => {
  for (let i = Number(from); i < Number(to); i++) {
    getRandomMovieById(i);
    getCategories(i);
  }
  setCover();
}

async function getMovieByName(movieName) {
  const nameArray = movieName.split(" ");
  const finalName = nameArray.join("+");
  console.log(finalName)
  // let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f3fa058a0294c6f7b1d786efd12e5aa0&query=${finalName}`);
  let object = await response.json();
}

//execution calls
window.onload = loadPage(0, 9);
