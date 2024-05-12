const btn = document.querySelector(".btn")
const chiste = document.querySelector(".joke")


const broma = () => {

const xhr = new XMLHttpRequest()

xhr.open ("GET", "https://api.chucknorris.io/jokes/random")

xhr.onreadystatechange = function () {
  
  if (this.readyState === 4 && this.status === 200) {

    chiste.innerHTML = JSON.parse(this.responseText).value

  }
}

xhr.send()
}

btn.addEventListener("click", broma)