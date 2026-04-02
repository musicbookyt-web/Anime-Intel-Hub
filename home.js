// Sample Data - You can add your news here
const animeNewsData = [
    {
        title: "Doraemon: Nobita and the New Castle of the Undersea Devil Anime Film Steams Creditless Opening Video.",
        description: "The 45th Doraemon movie has surpassed 3 billion yen at the Japanese box office.",
        category: "MOVIES",
        author: "Mikikazu Komatsu",
        image: "Latestanimepic/Screenshot 2026-04-02 120727.png"
    },
    {
        title: "Saved by the Ice Cold Prince's Embrace Light Anime Adaptation Announced.",
        description: "The fantasy romance series will premiere in July.",
        category: " ",
        author: "Kara Dennison",
        image: "Latestanimepic/Screenshot 2026-04-02 121713.png"
    },
    {
        title: "NEEDY GIRL OVERDOSE Anime Introduces Ame-chan with New Trailer, Visual.",
        description: "The anime series is set to premiere on April 4.",
        category: " ",
        author: "Kara Dennison",
        image: "Latestanimepic/Screenshot 2026-04-02 130551.png"
    },
    {
        title: "Star Blazers: Space Battleship Yamato 3199 Anime Releases Chapter 6 New Teaser Visual, Video.",
        description: "Yamato arrives in Tokyo in 2026.",
        category: "MOVIES",
        author: "Mikikazu Komatsu",
        image: "Latestanimepic/Screenshot 2026-04-02 130729.png"
    },
    {
        title: "DAN DA DAN Season 2 Collector's Edition Blu-ray Up for Pre-Order.",
        description: "Deluxe release launches on July 14.",
        category: "Merch",
        author: "Joseph Luster",
        image: "Latestanimepic/Screenshot 2026-04-02 131133.png"
    }
];

function formatCurrentDate() {
    const now = new Date();
    const options = { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short' 
    };
    // Result looks like: APR 2, 2026 12:01 PM IST
    return now.toLocaleString('en-US', options).toUpperCase();
}

function renderNews() {
    const list = document.getElementById('news-list');
    const currentTime = formatCurrentDate();

    list.innerHTML = animeNewsData.map(item => `
        <a href="javascript:void(0)" class="news-card">
            <div class="img-box">
                <img src="${item.image}" alt="News Thumb">
            </div>
            <div class="info-box">
                <div class="badge-row">
                    <span class="tag latest">LATEST NEWS</span>
                    <span class="tag category">${item.category}</span>
                </div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-description">${item.description}</p>
                <div class="date-time">${currentTime}</div>
                <div class="author">👤 ${item.author}</div>
            </div>
        </a>
    `).join('');
}

// Run the function when page loads
document.addEventListener('DOMContentLoaded', renderNews);