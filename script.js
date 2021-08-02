

fetch("https://api.magicthegathering.io/v1/cards")
   .then(response => response.json())
   .then((data) => showCards(data.cards));

const showCards = card => {
    const cards = document.querySelector("#player-div");
    card.forEach(e => {
        const name = document.createElement("p");
        name.innerText = `${e.name.toUpperCase()}`;
        cards.append(name)
    })
}

// function createCardUsingTemplate(article) {
//     const { title, summary, image, week } = article;
//     // get the template for articles (from the HTML)
//     const template = document.querySelector("#articleTemplate");
//     // clone the content of the template (returns a DocumentFragment)
//     const domFragment = template.content.cloneNode(true);
//     // we only need to add the dynamic properties inside the fragment
//     // since all the static ones (e.g. styling classNames) are set in the template
//     domFragment.querySelector("h3").textContent = title;
//     domFragment.querySelector("img").src = image;
//     domFragment.querySelector("p").textContent = summary;
//     domFragment.querySelector("b").textContent = week;
//     // put the fragment onto the page
//     containerElement2.appendChild(domFragment);
//   }