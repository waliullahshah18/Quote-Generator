const api_url = "https://quotes-api-self.vercel.app/quote"
const quoteDisplay = document.getElementById("quoteDisplay");
const newquotes = document.getElementById("New");
const auth = document.querySelector(".Quote-box span");


async function getquotes(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        quoteDisplay.innerText = data.quote
        auth.textContent = data.author;
    } catch (error) {
        console.error("There was problemmmmmmmmmmmmmmmmmmmmmmmmmmmmmm:", error);
        quoteDisplay.textContent = "Failed to fetch quote.";
    }
}
getquotes(api_url);

function tweet() {
    window.open('https://twitter.com/intent/tweet?text='+ quoteDisplay.innerText + " --- by " + auth.innerHTML, "Tweet Window", "width=600, height=300")
}
