let inputFild = document.querySelector(".get-repos input");
let button = document.querySelector(".get-button");
let showData = document.querySelector(".show-data");

button.onclick = () => {
  reposFetch();
};
function reposFetch() {
  if (inputFild.value == "") {
    showData.innerHTML = "Please Write Your Username Github";
  } else {
    fetch(`https://api.github.com/users/${inputFild.value}/repos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showData.innerHTML = "";
        data.forEach((repos) => {
          let mainDiv = document.createElement("div");
          mainDiv.className = "repo-box";
          let textDiv = document.createTextNode(repos.name);
          let linkRepository = document.createElement("a");
          let textLink = document.createTextNode("Visit");
          linkRepository.href = `https://${inputFild.value}.github.io/${repos.name}/`;
          linkRepository.setAttribute("target", "_blank");
          linkRepository.appendChild(textLink);
          let star = document.createElement("span");
          let textStar = document.createTextNode(
            `Star : ${repos.stargazers_count}`
          );
          star.appendChild(textStar);
          mainDiv.appendChild(textDiv);
          mainDiv.appendChild(linkRepository);
          mainDiv.appendChild(star);
          showData.appendChild(mainDiv);
        });
      });
  }
}
