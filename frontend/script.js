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
    const newsContainer = document.getElementById("news");
    newsContainer.innerHTML = "";

    if (articles.length === 0) {
        newsContainer.innerHTML = "<p>Keine Nachrichten gefunden</p>";
        return;
    }

    articles.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");

        newsCard.innerHTML =
            <h3>${article.title}</h3>
            <p>${article.description || "Keine Beschreibung verfügbar."}</p>
            <a href="${article.url}" target="_blank">Mehr lesen</a>
        ;

        newsContainer.appendChild(newsCard);
    });
}