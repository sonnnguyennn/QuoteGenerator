const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("button");


async function getQuote(url){
    let x = Math.floor(Math.random() * apiUrl.length) + 100;
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data)
    quote.innerHTML = data[x].text;
    author.innerHTML = data[x].author;
};
getQuote(apiUrl);
