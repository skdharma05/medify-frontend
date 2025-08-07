

const apiKey = "fd97fd99"; 

const searchBtn = document.getElementById('searchBtn');
const queryInput = document.getElementById('query');
const moviesContainer = document.getElementById('movies');
const bgBlur = document.getElementById('bg-blur');

searchBtn.addEventListener('click', async () => {
  const query = queryInput.value.trim();
  if (!query) {
    alert("Please enter a movie title.");
    return;
  }

  try {
    const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`);
    const data = await res.json();

    if (data.Response === "False") {
      moviesContainer.innerHTML = `<p style="color:red;text-align:center;">${data.Error}</p>`;
      return;
    }

    renderMovies(data.Search);
    if (data.Search[0]?.Poster && data.Search[0].Poster !== "N/A") {
      bgBlur.style.backgroundImage = `url(${data.Search[0].Poster})`;
    }

  } catch (error) {
    console.error("Error:", error);
    moviesContainer.innerHTML = `<p style="color:red;text-align:center;">Something went wrong...</p>`;
  }
});

function renderMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    const poster = movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450/111111/cccccc?text=No+Image";

    card.innerHTML = `
      <img src="${poster}" alt="${movie.Title}" />
      <div class="movie-info">
        <div class="movie-title">${movie.Title}</div>
        <div class="movie-year">${movie.Year}</div>
      </div>
    `;

    moviesContainer.appendChild(card);
  });
}

