const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then(data => data.json())
    // .then(json => console.log(json.bio))
    .then(json => {
      console.log(json)
      console.log(json.id)
      if(!json.id) {
        // json.bio = 'не указано'
        console.log(json.id);
        resultsContainer.innerHTML = `<div class="response-container"> Нет такого пользователя
        </div>`;
      } else if (!json.bio) {
        // console.log(json.bio)
        json.bio = 'не указано'
              resultsContainer.innerHTML = `<div class="response-container">
                <img src="${json.avatar_url}">
                <p> Имя: <span>${json.login}</span><p>
                <p> О себе: <span>${json.bio}</span><p>
                <p> Кол-во репозиториев: <span>${json.public_repos}</span><p>
            </div>`
      } 
      // else {
      // (resultsContainer.innerHTML = `<div class="response-container">
      //           <img src="${json.avatar_url}">
      //           <p> Имя: <span>${json.login}</span><p>
      //           <p> О себе: <span>${json.bio}</span><p>
      //           <p> Кол-во репозиториев: <span>${json.public_repos}</span><p>
      //       </div>`)
      // }
    }
  );
});
