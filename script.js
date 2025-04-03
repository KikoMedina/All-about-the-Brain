const NEWS_API = "https://newsapi.org/v2/everything";
const API_KEY = "";

async function fecthNews() {
    const language = document.getElementById("sprache").value;
    const url = `${NEWS_API}?q=gehirn&sprache=${sprache}&sortBy=publishedAt&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        displayNews(data.articles);
    } catch (error) {
        console.error("Fehler beim Abrufen der Nachrichten", error);
    }
}

function displayNews(articles)  {
    
}
