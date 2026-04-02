// Reliable News Feed Logic
const FEED_URL = "https://www.animenewsnetwork.com/.rss";
let newsData = [];

async function fetchNews() {
    const listElement = document.getElementById('news-list');
    
    // List of multiple proxies in case one is down
    const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(FEED_URL)}`,
        `https://corsproxy.io/?${encodeURIComponent(FEED_URL)}`
    ];

    for (let proxy of proxies) {
        try {
            const response = await fetch(proxy);
            if (!response.ok) throw new Error("Proxy failed");
            
            const data = await response.json();
            const contents = data.contents || data; // Handle different proxy formats
            
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(contents, "text/xml");
            const items = xmlDoc.querySelectorAll("item");

            if (items.length === 0) throw new Error("No items found");

            newsData = [];
            items.forEach((item, index) => {
                if (index >= 20) return;

                let title = item.querySelector("title").textContent.replace(/Crunchyroll/gi, "Anime Intel Hub");
                let description = item.querySelector("description").textContent.replace(/Crunchyroll/gi, "Anime Intel Hub");
                let creator = item.getElementsByTagName("dc:creator")[0]?.textContent || "Anime Intel Hub Staff";
                let pubDate = item.querySelector("pubDate").textContent;
                
                // Better Image Detection
                let img = "https://via.placeholder.com/300x168?text=Anime+Intel+Hub";
                const mediaContent = item.getElementsByTagName("media:content")[0];
                const mediaThumb = item.getElementsByTagName("media:thumbnail")[0];
                
                if (mediaContent) img = mediaContent.getAttribute("url");
                else if (mediaThumb) img = mediaThumb.getAttribute("url");

                newsData.push({ title, description, creator, pubDate, img });
            });

            renderList();
            return; // Success! Exit the loop.
        } catch (error) {
            console.warn("Retrying with backup proxy...");
        }
    }

    // FINAL FALLBACK: If all live fetches fail, show these default posts so the page isn't empty
    showOfflineNews();
}

function showOfflineNews() {
    newsData = [
        {
            title: "Welcome to Anime Intel Hub - Latest Updates coming soon!",
            description: "We are currently syncing with our news servers. Please check back in a few minutes.",
            creator: "Admin",
            pubDate: new Date().toLocaleDateString(),
            img: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500"
        }
    ];
    renderList();
}

function renderList() {
    const list = document.getElementById('news-list');
    list.innerHTML = newsData.map((item, index) => `
        <div class="news-card" onclick="showArticle(${index})">
            <div class="img-box">
                <img src="${item.img}" onerror="this.src='https://via.placeholder.com/300x168?text=Anime+Intel+Hub'" alt="news">
            </div>
            <div class="info">
                <div class="badge-row">
                    <span class="badge red">LATEST NEWS</span>
                    <span class="badge orange">TRENDING</span>
                </div>
                <h3 class="news-title">${item.title}</h3>
                <div class="meta">${item.pubDate} • ${item.creator}</div>
            </div>
        </div>
    `).join('');
}

function showArticle(index) {
    const item = newsData[index];
    document.getElementById('art-title').innerText = item.title;
    document.getElementById('art-publish').innerText = "Published: " + item.pubDate;
    document.getElementById('art-author').innerText = item.creator;
    document.getElementById('art-img').src = item.img;
    document.getElementById('art-content').innerHTML = item.description;

    document.getElementById('news-feed-view').style.display = 'none';
    document.getElementById('article-view').style.display = 'block';
    window.scrollTo(0, 0);
}

function closeArticle() {
    document.getElementById('news-feed-view').style.display = 'block';
    document.getElementById('article-view').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', fetchNews);