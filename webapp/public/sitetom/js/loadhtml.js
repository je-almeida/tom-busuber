function loadHTML(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => (document.getElementById(id).innerHTML = html))
    .catch((err) => console.error("Erro ao carregar", url, err));
}

loadHTML("head", "header.html");
loadHTML("scripts", "scripts.html");
