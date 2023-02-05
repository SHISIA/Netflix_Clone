// getting components for use
const title = document.getElementsByClassName("coverTitle");
const description=document.getElementById("coverInfo");
const movie = document.getElementById("movie");
const series = document.getElementById("series")
// components declared

 const loadPage = (from,to) => {
    for(let i=Number(from);i<Number(to);i++){
        getRandomMovieById(i);
    }
}

async function getRandomMovieById(number) {
    let imagePath="https://image.tmdb.org/t/p/w500";
    let myObject=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f3fa058a0294c6f7b1d786efd12e5aa0`)
    let myText = await myObject.json();

    movie.innerHTML+=
    `<img onclick="" src="${imagePath}${myText.results[number].poster_path}" alt="Movie" style="
    position:relative;
     width:85vw; 
     height:40vh; 
     background-color:#090A0E;
     padding:15px;
     border-color:black;
     display:inline;"
     padding:10px;
     >
     <p style="position:relative;">${myText.results[number].title}</p>
     `
     console.log(myText)
  }

async function getMovieByName(movieName) {
    const nameArray = movieName.split(" ");
    const finalName= nameArray.join("+");
    console.log(finalName)
    // let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f3fa058a0294c6f7b1d786efd12e5aa0&query=${finalName}`);
    let object = await response.json();
    console.log("kghcf ",object)
  }
//   getText();
// loadPage(89)
// getMovieByName("popular")
window.onload = loadPage(15,19);
// adult: false
// backdrop_path: null
// genre_ids: [99]
// id: 1045592
// original_language: "en"
// original_title: "Jack Reacher: When the Man Comes Around"
// overview: "Cast and crew speak on adapting One Shot as the first Jack Reacher film, casting Tom Cruise, earning Lee Child's blessing, additional character qualities and the performances that shape them, Lee Child's cameo in the film, and shooting the film's climax."
// popularity: 10.203
// poster_path: null
// release_date: "2013-05-07"
// title: "Jack Reacher: When the Man Comes Around"
// video: false
// vote_average: 0
// vote_count: 0