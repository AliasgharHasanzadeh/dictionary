const btnsearch = document.getElementById("search");
const word = document.getElementById("word");
// main dom
const wordmain = document.getElementById("word-main");
const phonetic = document.getElementById("phonetic");
const definition = document.getElementById("definition");
const example = document.getElementById("example");
// functions
btnsearch.addEventListener("click", function () {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word.value;
  fetch(url)
    .then((Response) => Response.json())
    .then(
      (data) => (
        // console.log(
        //   // type of word
        //   data[0].meanings[0].partOfSpeech,
        //   "\n",
        //   // example
        //   data[0].meanings[0].definitions[0].example,
        //   "\n",
        //   data[0].meanings[1].definitions[0].example,
        //   "\n",
        //   // phonetic
        //   data[0].phonetic,
        //   "\n",
        //   // definition
        //   data[0].meanings[0].definitions[0].definition,
        //   "\n"
        // )
        (wordmain.innerText = word.value),
        (phonetic.innerHTML = data[0].phonetic),
        (definition.innerText = data[0].meanings[0].definitions[0].definition),
        (example.innerHTML = data[0].meanings[0].definitions[0].example)
      )
    );
});
