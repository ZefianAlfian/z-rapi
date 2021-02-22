const YoutubeAPI = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YoutubeAPI('AIzaSyAStUHe-v7ujeeVy9unXZDKbuwaBwOxnvw')


const ytdldown = (url, type) => new Promise((resolve, reject) => {
    try {
        switch(type) {
            case "audio":{
                ytdl.getInfo(url).then(async (res) => {
                    const formats = await ytdl.filterFormats(res.formats, 'audioonly')
                    const thumb = res.videoDetails.thumbnails
                    if (res.videoDetails.lengthSeconds >= 500) resolve({msg:"durasi kepanjangan"})
                    if (res.videoDetails.lengthSeconds < 500) resolve({ status: 'sukses', duration: res.videoDetails.lengthSeconds, link: formats[0].url, thumbnail: thumb[thumb.length - 1].url, title: res.videoDetails.title })
                })
            }
            break
            case "video":{
            	ytdl.getInfo(url).then(async (res) => {
            		const formats = await ytdl.filterFormats(res.formats, 'audioandvideo')
            		const thumb = res.videoDetails.thumbnails
            		if (res.videoDetails.lengthSeconds >= 500) resolve({msg: "durasi kepanjangan"})
            		if (res.videoDetails.lengthSecones < 500) resolve({duration: res.videoDetails.lengthSeconds, url_video: formats[0].url, thumbnail: thumb[thumb.length - 1].url, title: res.videoDetails.title })
            	})
            }
            break
            case "multi":{
                ytdl.getInfo(url).then(async (res) => {
                	const formats2 = await ytdl.filterFormats(res.formats, 'audioonly')
                    const formats = await ytdl.filterFormats(res.formats, 'audioandvideo')
                    const thumb = res.videoDetails.thumbnails
                    if (res.videoDetails.lengthSeconds >= 500) resolve({msg:"durasi video kepanjangan"})
                    if (res.videoDetails.lengthSeconds < 500) resolve({ duration: res.videoDetails.lengthSeconds, url_video: formats[0].url, url_audio: formats2[0].url, thumbnail: thumb[thumb.length - 1].url, title: res.videoDetails.title, description: res.videoDetails.description, publishDate: res.videoDetails.publishDate, videoId: res.videoDetails.videoId, url: 'https://youtu.be/'+res.videoDetails.videoId })
                })
            }
            break
        }
    } catch (e) {
        reject(e)
    }
})

module.exports = ytdldown