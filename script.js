const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") loadImg();
});
function loadImg() {
  //console.log("dino");
  removeImages();
  const url =
    " https://api.unsplash.com/search/photos/?query=" +
    input.value +
    "&per_page=9&client_id=a7jU5cQU6PuHa_ZYcMvIC3xdtWX8JR9oNB7G3CE4FTY";
  fetch(url)
    .then((response) => {
      //console.log(response);
      if (response.ok) return response.json();
      else alert(response.status);
    })
    .then((data) => {
      console.log(data);
      const imagesNodes = [];
      for (var i = 0; i < data.results.length; i++) {
        imagesNodes[i] = document.createElement("div");
        imagesNodes[i].className = "img";
        imagesNodes[i].style.backgroundImage =
          "url(" + data.results[i].urls.raw + ")";
        imagesNodes[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
        });
        grid.appendChild(imagesNodes[i]);
      }
    });
}
function removeImages() {
  grid.innerHTML = " ";
}
