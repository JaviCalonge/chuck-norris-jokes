const btn = document.querySelector(".btn")
const chiste = document.querySelector(".joke")

const url = "https://api.chucknorris.io/jokes/random"

function getJoke () {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.value.length > 150) {
        getJoke()
      } else {
        chiste.innerHTML = data.value
      }
    }     
)
}

btn.addEventListener("click", getJoke)