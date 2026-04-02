// 1. List your 100+ videos here
const videoData = [
    { title: "4 New projects of <br> Ufotable", url: "animenews/4 New projects of Ufotable.mp4" },
    { title: "2025 Anime Awards <br> Results", url: "animenews/2025 Anime Awards Results.mp4" },
    { title: "2025 Award Winning <br> Anime is... AOT", url: "animenews/2025 Award Winning Anime is... AOT.mp4" },
    { title: "Ace of Diamond Act II <br> season 2 premieres <br> April 5, 2026", url: "animenews/Ace of Diamond Act II season 2 premieres April 5, 2026.mp4" },
    { title: "Anime's Release date", url: "animenews/Anime's Release date.mp4" },
    { title: "Apothecary Diaries <br> Upcoming Updates", url: "animenews/Apothecary Diaries Upcoming Updates.mp4" },
    { title: "Best Anime's Ending <br> and Airing at which <br> Episodes Details", url: "animenews/Best Anime's Ending and Airing at which Episodes Details.mp4" },
    { title: "Big 4 returning in <br> 2026  Father of <br> all animes", url: "animenews/Big 4 returning in 2026  Father of all animes.mp4" },
    { title: "Chainsaw Man Manga <br> end today", url: "animenews/Chainsaw Man Manga end today.mp4" },
    { title: "Demon Slayer <br> Infinity Castle", url: "animenews/Demon Slayer Infinity Castle.mp4" },
    { title: "Enjoy 4 new Naruto <br> episodes going <br> to release", url: "animenews/Enjoy 4 new Naruto episodes going to release.mp4" },
    { title: "JJK season 3 Crashed <br> Crunchyroll's <br> Servers", url: "animenews/JJK season 3 Crashed Crunchyroll's Servers.mp4" },
    { title: "Jujutsu Kaisen Season 3 <br> episode release <br> date", url: "animenews/Jujutsu Kaisen Season 3 episode release date.mp4" },
    { title: "Solo Leveling Movie <br> Update", url: "animenews/Solo Leveling Movie Update.mp4" },
    { title: "The Big 4 Returns in <br> 2026", url: "animenews/The Big 4 Returns in 2026.mp4" },
    { title: "World's Biggest Anime <br> Piracy HiAnime <br> Got Shutdown", url: "animenews/World's Biggest Anime Piracy HiAnime Got Shutdown.mp4" },
    // Add all 100 here...
];

const grid = document.getElementById('videoGrid');
const overlay = document.getElementById('videoOverlay');
const player = document.getElementById('mainPlayer');

// 2. Load the Gallery
function loadVideos(data) {
    grid.innerHTML = data.map(vid => `
        <div class="video-card" onclick="openVideo('${vid.url}')">
            <div class="thumb-container">
                <video class="thumb-video" preload="metadata">
                    <source src="${vid.url}#t=5.0" type="video/mp4">
                </video>
            </div>
            <div class="video-title">${vid.title}</div>
        </div>
    `).join('');
}

// 3. Open Video
function openVideo(url) {
    player.src = url;
    overlay.style.display = 'flex';
    player.play();
    document.body.style.overflow = 'hidden'; // Stop page scroll
}

// 4. Close Video
function closeVideo() {
    overlay.style.display = 'none';
    player.pause();
    player.src = "";
    document.body.style.overflow = 'auto'; // Restore scroll
}

// 5. Close on "Empty Space" Click
function closeOnEmpty(event) {
    // If the user clicked the 'overlay' background and NOT the 'mainPlayer'
    if (event.target === overlay) {
        closeVideo();
    }
}

// 6. Search Filter
function filterVideos() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = videoData.filter(v => v.title.toLowerCase().includes(term));
    loadVideos(filtered);
}

// Start
loadVideos(videoData);


// Close on 'Esc' key
window.addEventListener('keydown', (e) => { if(e.key === "Escape") closeVideo(); });