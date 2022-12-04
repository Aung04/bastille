const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Pompeii',
        'name': 'Pompeii.mp4',
        'duration': '3:52',
    },
    {
        'id': 'a2',
        'title': 'Things We Lost In The Fire',
        'name': 'Things We Lost In The Fire.mp4',
        'duration': '4:20',
    },
    {
        'id': 'a3',
        'title': 'Bad Blood',
        'name': 'Bad Blood.mp4',
        'duration': '3:33',
    },

    {
        'id': 'a4',
        'title': 'Happier',
        'name': 'Happier.mp4',
        'duration': '3:53',
    },
    {
        'id': 'a5',
        'title': 'Laura Palmer',
        'name': 'Laura Palmer.mp4',
        'duration': '3:20',
    },
    {
        'id': 'a6',
        'title': 'Send Them Off!',
        'name': 'Send Them Off!.mp4',
        'duration': '3:44',
    },
    {
        'id': 'a7',
        'title': 'Flaws',
        'name': 'Flaws.mp4',
        'duration': '3:40',
    },
  
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.png" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.png';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.png';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.png';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});