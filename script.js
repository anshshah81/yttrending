const apiKey = "AIzaSyCfeN7ZwmrD4zvmgarjyltY_FdDGHFM7Ss";
const api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${apiKey}`;

async function Trending() {
    const response = await fetch(api);
    const data = await response.json();

    const trendingOne = data.items[0].snippet.title
    const trendingTwo = data.items[1].snippet.title
    const trendingThree = data.items[2].snippet.title
    const trendingFour = data.items[3].snippet.title
    const trendingFive = data.items[4].snippet.title

    document.getElementById('1').textContent=trendingOne;
    document.getElementById('2').textContent=trendingTwo;
    document.getElementById('3').textContent=trendingThree;
    document.getElementById('4').textContent=trendingFour;
    document.getElementById('5').textContent= trendingFive;

}
async function links() {
    const response = await fetch(api);
    const data = await response.json();

    const link1 = "https://www.youtube.com/watch?v=" + data.items[0].id;
    document.getElementById("L1").href=link1;
    const link2 = "https://www.youtube.com/watch?v=" + data.items[1].id;
    document.getElementById("L2").href=link2;
    const link3 = "https://www.youtube.com/watch?v=" + data.items[2].id;
    document.getElementById("L3").href=link3;
    const link4 = "https://www.youtube.com/watch?v=" + data.items[3].id;
    document.getElementById("L4").href=link4;
    const link5 = "https://www.youtube.com/watch?v=" + data.items[4].id;
    document.getElementById("L5").href=link5;
}
async function channel() {
    const response = await fetch(api);
    const data = await response.json();

    const channel1 = data.items[0].snippet.channelTitle;
    document.getElementById("channel1").textContent="By: " + channel1;
    const channel2 = data.items[1].snippet.channelTitle;
    document.getElementById("channel2").textContent="By: " + channel2;
    const channel3 = data.items[2].snippet.channelTitle;
    document.getElementById("channel3").textContent="By: " + channel3;
    const channel4 = data.items[3].snippet.channelTitle;
    document.getElementById("channel4").textContent="By: " + channel4;
    const channel5 = data.items[4].snippet.channelTitle;
    document.getElementById("channel5").textContent="By: " + channel5;
}
channel();
links();
Trending();