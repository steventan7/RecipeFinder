// Makes new page
function search(html_id) {
  console.log("Loading...");
  var query = document.getElementById(html_id).value;
  // const results =
  console.log(typeof query);
  query_api(query);
  // console.log(results);
  // generate_results(results);
  // console.log("Finished!");
  // location.href = "search_results.html";
}

// Generate html for search results
// function generate_results(results) {
//   results.forEach((recipe) => {
//     const card = document.createElement("div");
//     card.setAttribute("class", "card");

//     const details = recipe.seo.web["meta-tags"];

//     const h2 = document.createElement("h2");
//     h2.textContent = details.title;

//     const p = document.createElement("p");
//     p.textContent = recipe.description;

//     container.appendChild(card);
//     card.appendChild(h2);
//     card.appendChild(p);
//   });
// }

// Queries api, query is not empty
function query_api(query) {
  const words = query.split(" ");
  let search_str = "";
  for (var i = 0; i < words.length - 1; i++) {
    search_str += words[i] + "%20";
  }
  search_str += words[i];
  //console.log(search_str);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
      "X-RapidAPI-Key": "8bc242719fmsh3e386974535374ep11157ejsnb7b714f7b94c"
    }
  };

  fetch(
    `https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=${search_str}&FAT_KCALMax=1000`,
    options
  )
    .then((response) => response.json())
    // .catch((err) => console.error(err));
    // console.log("response", response);
    .then(
      (response) => console.log("response", response)
      // console.log(typeof data);
      // console.log(data);
      // console.log(data.feed[0].seo.web["meta-tags"].title);
    );
  //.catch((err) => console.error(err));

  console.log("Outside Fetch");
}

// function search(html_id) {
//   console.log("Running");
//   var query = document.getElementById(html_id).value;
//   const results = query_api(query);
//   console.log(results);
// }

// function query_api(query) {
//   const words = query.split(" ");
//   let search_str = "";
//   for (var i = 0; i < words.length - 1; i++) {
//     search_str += words[i] + "%20";
//   }
//   search_str += words[i];
//   // console.log(search_str);
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
//       "X-RapidAPI-Key": "8bc242719fmsh3e386974535374ep11157ejsnb7b714f7b94c"
//     }
//   };

//   fetch(
//     `https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=${search_str}&FAT_KCALMax=1000`,
//     options
//   )
//     .then((response) => console.log(response.seo.web))
//     // .then((response) => response.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => console.error(err));
// }
