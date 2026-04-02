// 1. Data for 100+ videos
const videoData = [
    { title: "Anime All Episodes Ratings", url: "animevideo/Anime All Episodes Ratings.mp4" },
    { title: "Anime Edits I Spent 1 Hours", url: "animevideo/Anime Edits I Spent 1 Hours.mp4" },
    { title: "7 Anime Genre Video with Top 5 Anime Edits", url: "animevideo/genre video.mp4" },
    { title: "Naruto Shippuden Edits", url: "animevideo/Naruto Shippuden Edits.mp4" },
    { title: "Anime Ultimate Edits", url: "animevideo/Anime Live.mp4" },
    // Simply continue adding your video objects here...
];

const grid = document.getElementById('videoGrid');
const overlay = document.getElementById('videoOverlay');
const player = document.getElementById('mainPlayer');
const downloadBtn = document.getElementById('downloadBtn');
const overlayTitle = document.getElementById('overlayTitle');

// 2. Build the Gallery
function loadVideos(data) {
    grid.innerHTML = data.map(vid => `
        <div class="video-card" onclick="openVideo('${vid.url}', '${vid.title}')">
            <div class="thumb-container">
                <video class="thumb-video" preload="metadata">
                    <source src="${vid.url}#t=0.1" type="video/mp4">
                </video>
            </div>
            <div class="video-title">${vid.title}</div>
        </div>
    `).join('');
}

// 3. Open Player & Set Download Link
function openVideo(url, title) {
    player.src = url;
    overlayTitle.innerText = title;
    downloadBtn.href = url; // Sets the link to the current video file
    overlay.style.display = 'flex';
    player.play();
    document.body.style.overflow = 'hidden';
}

// 4. Close Player
function closeVideo() {
    overlay.style.display = 'none';
    player.pause();
    player.src = "";
    document.body.style.overflow = 'auto';
}

// 5. Close on Empty Space (Click outside the video)
function closeOnEmpty(event) {
    // If the user clicks the 'overlay' background specifically
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

// Initial Load
loadVideos(videoData);

// ESC key to close
window.onkeydown = (e) => { if(e.key === "Escape") closeVideo(); };