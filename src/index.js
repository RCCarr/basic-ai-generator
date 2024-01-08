function generateFact(event) {
  event.preventDefault();

  new Typewriter("#fact", {
    strings: ["text will type here"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
