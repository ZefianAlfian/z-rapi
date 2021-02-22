const YoutubeAPI = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YoutubeAPI('Your Youtube Apikey')


const ytplay = (args) => new Promise((resolve, reject) => {
    youtube.searchVideos(args, 5)
    .then(result => {
    var vid = []
    for(var i = 0; i < result.length; i++){
    	var resl = result[i].url
    	vid.push(resl)
    }
    resolve(vid)
    }).catch((err) => { reject(err) });
});

module.exports = ytplay
