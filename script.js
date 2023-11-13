function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")
  
  // substituir img
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem amanhecer
    img.setAttribute("src", "./assets/4.png")
    img.setAttribute("alt", "Imagem do amanhecer")
  } else {
    // se tiver sem light mode, adicionar imagem da noite
    img.setAttribute("src", "./assets/1.png")
    img.setAttribute("alt", "Imagem da noite")
  }
}