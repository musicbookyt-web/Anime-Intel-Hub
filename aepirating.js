// 1. List your 100+ videos here
const videoData = [

    { title: "Anime best episodes<br> ratings", url: "aepirating/Anime best episodes ratings.mp4" },
    { title: "Attack on Titan", url: "aepirating/Attack on Titan.mp4" },
    { title: "Bleach", url: "aepirating/Bleach.mp4" },
    { title: "Boruto - Naruto<br> Next Generations", url: "aepirating/Boruto - Naruto Next Generations.mp4" },
    { title: "Chainsaw Man", url: "aepirating/Chainsaw Man.mp4" },
    { title: "Code Geass - Lelouch<br> of the Rebellion", url: "aepirating/Code Geass - Lelouch of the Rebellion.mp4" },
    { title: "Code Geass - Rozé of<br> the Recapture", url: "aepirating/Code Geass - Rozé of the Recapture.mp4" },
    { title: "Cowboy Bebop all<br> episodes ratings", url: "aepirating/Cowboy Bebop all episodes ratings.mp4" },
    { title: "Dan Da Dan", url: "aepirating/Dan Da Dan.mp4" },
    { title: "DARK MOON THE<br> BLOOD ALTAR", url: "aepirating/DARK MOON THE BLOOD ALTAR.mp4" },
    { title: "DARLING in the FRANXX", url: "aepirating/DARLING in the FRANXX.mp4" },
    { title: "Death Note", url: "aepirating/Death Note.mp4" },
    { title: "Demon Slayer -<br> Kimetsu no Yaiba", url: "aepirating/Demon Slayer - Kimetsu no Yaiba.mp4" },
    { title: "Dr.STONE", url: "aepirating/Dr.STONE.mp4" },
    { title: "Dragon Ball Daima", url: "aepirating/Dragon Ball Daima.mp4" },
    { title: "Dragon Ball GT", url: "aepirating/Dragon Ball GT.mp4" },
    { title: "Dragon Ball Super", url: "aepirating/Dragon Ball Super.mp4" },
    { title: "Dragon Ball Z Kai", url: "aepirating/Dragon Ball Z Kai.mp4" },
    { title: "Dragon Ball Z", url: "aepirating/Dragon Ball Z.mp4" },
    { title: "Dragon Ball", url: "aepirating/Dragon Ball.mp4" },
    { title: "Frieren - Beyond<br> Journey's End", url: "aepirating/Frieren - Beyond Journey's End.mp4" },
    { title: "Fullmetal Alchemist - Brotherhood", url: "aepirating/Fullmetal Alchemist - Brotherhood.mp4" },
    { title: "Fullmetal Alchemist", url: "aepirating/Fullmetal Alchemist.mp4" },
    { title: "Hell's Paradise", url: "aepirating/Hell's Paradise.mp4" },
    { title: "Hunter x Hunter", url: "aepirating/Hunter x Hunter.mp4" },
    { title: "JJK S3 episode 9<br> got 9.6 rating<br> on IMDb", url: "aepirating/JJK S3 episode 9 got 9.6 rating on IMDb.mp4" },
    { title: "Jujutsu Kaisen", url: "aepirating/Jujutsu kaisen.mp4" },
    { title: "Kaiju No.8", url: "aepirating/Kaiju No.8 all episodes ratings.mp4" },
    { title: "My Dress-Up Darling", url: "aepirating/My Dress-Up Darling all episodes ratings.mp4" },
    { title: "My Hero Academia -<br> Vigilantes", url: "aepirating/My Hero Academia - Vigilantes.mp4" },
    { title: "My Hero Academia", url: "aepirating/My Hero Academia.mp4" },
    { title: "Naruto Classic", url: "aepirating/Naruto Classic.mp4" },
    { title: "Naruto Shippuden", url: "aepirating/Naruto Shippuden.mp4" },
    { title: "One Piece", url: "aepirating/One Piece all episodes ratings.mp4" },
    { title: "One Punch Man", url: "aepirating/One Punch Man.mp4" },
    { title: "Pokémon Horizons", url: "aepirating/Pokémon Horizons.mp4" },
    { title: "Pokémon", url: "aepirating/Pokémon.mp4" },
    { title: "Solo Leveling", url: "aepirating/Solo Leveling.mp4" },
    { title: "Spy x Family", url: "aepirating/Spy x Family.mp4" },
    { title: "The Daily Life<br> of the Immortal<br> King", url: "aepirating/The Daily Life of the Immortal King.mp4" },
    { title: "Vinland Saga", url: "aepirating/Vinland Saga.mp4" },
    { title: "Zom 100 - Bucket<br> List of the Dead", url: "aepirating/Zom 100 - Bucket List of the Dead.mp4" },
    { title: "Assassination Classroom", url: "aepirating/Assassination Classroom.mp4" },
    { title: "Overlord", url: "aepirating/Overlord.mp4" },
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
                    <source src="${vid.url}#t=0.1" type="video/mp4">
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