function displayFact(response) {
  console.log("fact generated");
  new Typewriter("#fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e3d9fa2f5fd390oadf41baa3t061f077";
  let prompt = `User instructions: Generate a random fact about ${instructionsInput.value}`;
  let context =
    "You are an expert on random facts and love to suprise people about your range of facts.  Your mission is to generate a weird fact that is no longer than 10 lines in basic HTML.  Make sure to follow the user instructions. ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating fact");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiURL).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
