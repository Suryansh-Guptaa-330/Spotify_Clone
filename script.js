

async function getsongs() {

    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

    }
    return songs
}

async function main() {
    let currentsong;
    let songs = await getsongs()
    console.log(songs)

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `
        <li>
        <img src="music.svg" width="34px" alt="">
                            <div class="musicinfo">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Amresh</div>
                            </div>
                            <img src="play.svg" alt="error">
                        </li>`;
    }
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        console.log(e.getElementsByTagName("div")[1])
        // Do something with each <li> element
    });
}
main()
// var audio = new Audio(songs[0]);
// audio.play();

// }
// audio.addEventlistner("loadeddata", () =>  {
//     let duration =audio.duration;
//     console.log(duration)
// });
