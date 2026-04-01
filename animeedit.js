// 1. List your 100+ videos here
const videoData = [
    { title: "Attack On Titan Edits", url: "animeedit/Attack On Titan Edits.mp4" },
    { title: "Itachi Uchiha <br> Mangekyou Sharingan <br> Edits", url: "animeedit/Itachi Uchica mangekyou sharingan.mp4" },
    { title: "Naruto Shippuden Edits", url: "animeedit/Naruto Shippuden Edits.mp4" },
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