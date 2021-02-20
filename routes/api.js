__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var rapi = db.get("rapi");
} catch (e) {
	console.log('')
}

var creatorList = ['@zefianalfian','@rickoveriyanto','@allviyan7','@zefianalfian', '@isywl_','@rickoveriyanto','@zefianalfian', '@allviyan7','@isywl_','@rickoveriyanto','@allviyan7'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var options = require(__path + '/lib/options.js');
var {
	Nulis,
	Vokal,
	Base,
	Github,
	IG
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'gapunya apikey? chat saya wa.me/6289630171792 , apikey nya free kok, saya buat rest api ini menggunakan apikey agar saya tau siapa saja yang menggunakan'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid.'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

//START RANDOM
var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------ZefianGanteng'+'RIZQI--GANTENG';
        
 //END RANDOM 
 
 //FUNCTION
 
 async function cekApiKey(api) {
 	ap = await rapi.findOne({apikey:api})
 return ap;
 }
 function logPengguna(apikey,hasilcek,apinya){
 	console.log('ApiKey : ' + apikey + '\nNama : ' + hasilcek.name + '\nNomorHp : ' + hasilcek.nomor_hp + '\nMenggunakan api : ' + apinya)
 }

router.get('/yt/search', async (req, res, next) => {
	var search = req.query.q,
	       apikeyInput = req.query.apikey;
	
	if (!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput) 
	if (a == null) return res.json(loghandler.invalidKey)
	logPengguna(apikeyInput,a,'Youtube')
	if(!search) return res.json({status:false,creator:creator,message:'masukan parameter q'})
	try {
scrapeYt.search(search, {
    type: "video"
}).then(videos => {
    res.json(videos);
})
} catch (err) {
    console.log('Error :', color(err, 'red'))
    res.json(loghandler.error)
  }
})
router.get('/yt', async (req, res, next) => {
	var url = req.query.url,
		apikeyInput = req.query.apikey,
		type = req.query.type;

	if (!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput) 
	if (a == null) return res.json(loghandler.invalidKey)
	logPengguna(apikeyInput,a,'Youtube')
	if (!url) return res.json(loghandler.noturl)
	let playlistregex = /\/playlist\?list=/;
	let result = []
	try {
		if (playlistregex.test(url)){
			ytpl(url)
			.then(info => info.items)
			.then(info => {
				let video
				for(video of info){
					result.push({
						title: video.title,
						id: video.id,
						duration: video.duration
					})
				}
				res.json({
					status:true,
					creator: creator,
					result,
					message: 'jangan lupa follow ' + creator
				})
			})
			.catch(e => {
				console.log(e)
				res.json(loghandler.error)
			})
		} else {
			ytdl.getInfo(url)
			.then(info => {
				let duration = (info.lengthSeconds/60).toString()
				duration = duration.substring(0, duration.indexOf('.'))+':'+Math.floor((info.lengthSeconds%60).toString())
				const max = info.videoDetails.thumbnails.reduce((prev, current) => ((prev.height > current.height) ? prev : current));
					result.push({
						    id: info.videoDetails.videoId,
                            title: info.videoDetails.title,
                            description: info.videoDetails.description,
                            length: info.videoDetails.lengthSeconds,
                            view: info.videoDetails.viewCount,
                            date: info.videoDetails.publishDate,
                            thumbnail: max,
                            video:info.formats
                })
                res.json({
				status:true,
				creator: creator,
                result,
                message: 'jangan lupa follow ' + creator
                })
			})
			.catch (er => {
				console.log(er)
				res.json(loghandler.error)
				})
				}
				} catch (e) {
					console.log(e)
					res.json(loghandler.error)
					} 
	if (url && type == 'audio') {
		try {
    res.header('Content-Disposition', `attachment; filename="audio-zefian.mp3"`);
    ytdl(url, {
      format: 'mp3',
      filter: 'audioonly',
      filter: 'audioonly'
      }).pipe(res);

  } catch (err) {
    res.json(loghandler.error)
    console.log(loghandler.error)
  }
		} else if (url && type == 'video'){
			try {
    res.header('Content-Disposition', `attachment; filename="video-zefian.mp4"`);
    ytdl(url, {
      format: 'mp4',
    }).pipe(res);

  } catch (err) {
    res.json(loghandler.error)
    console.log(loghandler.error)
  }
  } 
})

router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zef') return res.json(loghandler.invalidKey)

    try {
        rapi.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zef') return res.json(loghandler.invalidKey)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)

    try {
        rapi.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'zef') return res.json(loghandler.invalidKey)

    try {
        rapi.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/covid-indo', async (req, res, next) => {
    var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)

    fetch(encodeURI(`https://api.kawalcorona.com/indonesia`))
        .then(response => response.json())
        .then(data => {
            res.json({
                status: true,
                creator: `${creator}`,
                result: {
                    positif: `${data[0].positif}`,
                    sembuh: `${data[0].sembuh}`,
                    dirawat: `${data[0].dirawat}`,
                    meninggal: `${data[0].meninggal}`,
                },
                message: "Tetap jalani protokol kesehatan dan Semangattt"
            })
        })
})

router.get('/igdown', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

    if (!url) return res.json(loghandler.noturl)
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)

    var str = url
    var potong = str.split('?')
    var graph = "?__a=1"
    var potong2 = potong[0] + graph

    fetch(encodeURI(potong2))
        .then(response => response.json())
        .then(data => {
            var validasi = data["graphql"]["shortcode_media"]["__typename"];
            if (validasi == "GraphVideo") {
                var link = data.graphql.shortcode_media.video_url;
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result: {
                        type: "Video",
                        url: link
                    },
                    message: "jangan lupa follow" + creator
                })
            } else if (validasi == "GraphImage") {
                var link = data.graphql.shortcode_media.display_url;
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result: {
                        type: "Picture",
                        url: link
                    },
                    message: "jangan lupa follow" + creator
                })
            } else {
                res.json({
                    status: false,
                    creator: `${creator}`,
                    message: "mungkin terjadi error"
                })
            }
        })
        .catch(e => {
            console.log('Error:', color(e,'red'))
            res.json({status:false,creator: `${creator}`, message: "gagal, pastikan url anda benar:)"})
       })
})

router.get('/igstalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)

    fetch(encodeURI(`https://www.instagram.com/${username}/?__a=1`))
        .then(response => response.json())
        .then(data => {
             var bisnis_or = data.graphql.user.is_business_account == false ? "bukan bisnis": "ini bisnis"
             var verif_or =  data.graphql.user.is_verified == false ? "belum verified / centang biru": "sudah verified / centang biru"
             var response = {
                 status: true,
                 creator: `${creator}`,
                 result: {
                      username: `${data.graphql.user.username}`,
                      name: `${data.graphql.user.full_name}`,
                      biodata: `${data.graphql.user.biography}`,
                      followers: `${data.graphql.user.edge_followed_by.count}`,
                      following:`${data.graphql.user.edge_follow.count}`,
                      verified: verif_or,
                      business_account: bisnis_or,
                      post: `${data.graphql.user.edge_owner_to_timeline_media.count}`,
                      profile_picture: `${data.graphql.user.profile_pic_url}`,
                      profile_picture_hd: `${data.graphql.user.profile_pic_url_hd}`,
                 },
                 message: `jangan lupa follow ${creator}`
             }
             res.json(response)
        })
})

router.get('/ttdown-nown', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/ttstalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', (req, res, next) => {
    var apikey = req.query.apikey

    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zef') return res.json(loghandler.invalidKey)

    fetch(encodeURI(`https://mhankbarbar.tech/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     author : `${data.author}`,
                     quotes : `${data.quotes}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {})
})


router.get('/randomloli', (req, res, next) => {
    var apikey = req.query.apikey

    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zef') return res.json(loghandler.invalidKey)

    try {
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q= " + "Loli",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }

        request(options, function(error, response, responseBody) {
            if (error) return

            $ = cheerio.load(responseBody)
            var links = $(".image a.link")
            var cari = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

            if (!cari.length) return
            var hasil = cari[Math.floor(Math.random() * cari.length)]

            res.json({
                status : true,
                creator : `${creator}`,
                result : {
                    image : 'mme',
                },
                message : `jangan lupa follow ${creator}`})
            })
    } catch (e) {}
})

router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query,
            host = req.hostname
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/shorturl/tinyurl', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/text2img', async (req, res, next) => {
	var apikeyInput = req.query.apikey,
	text = req.query.text;
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)
     if (!text) return res.json(loghandler.nottext)
	request(`http://api.img4me.com/?text=${text}&font=arial&fcolor=000000&size=35&type=png`, function (error, response, body) {
         try {
         	fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=28dd175b555860ab2b5cdfedf125fe38&image=${body}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                 var urlnya = data.data.url,
                                     delete_url = data.data.delete_url;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                 	text : text,
                     url : urlnya,
                     delete_url : delete_url,
                 },
                 message : `jangan lupa follow ${creator}`
             })
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.error)
         }
     })
 })
router.get('/texttoimg2', (req, res, next) => {
     var apikey = req.query.apikey,
         text = req.query.text

     if (!apikey) return res.json(loghandler.notparam)
     if (!text) return res.json(loghandler.nottext)
     if (apikey != 'zef') return res.json(loghandler.invalidKey)

     fetch(encodeURI(`https://mhankbarbar.tech/api/text2image?text=${text}&apiKey=${apiBar}`))
         .then(response => response.json())
         .then(data => {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     image : `${data.result}`,
                     text : `${text}`
                 },
                 message : `jangan lupa follow ${creator}`
             })
         })
})

router.get('/vokal', async (req, res, next) => {
	var text = req.query.text,
	       apikeyInput = req.query.apikey,
	       huruf_vokal = req.query.huruf;
	if(!apikeyInput) return res.json(loghandler.notparam)
	 a = await rapi.findOne({apikey:apikeyInput}) ? true : false
     if(a == false) return res.json(loghandler.invalidKey)
	 if(!(text && huruf_vokal)) return res.json(loghandler.notvokal)
	
	Vokal(text,huruf_vokal)
	.then(result => {
		res.json({
			status: true,
			creator: creator,
			result,
			message: 'jangan lupa follow ' + creator
		})
		})
		.catch(err => {
			res.json(loghandler.error)
			})
		})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		a = await rapi.findOne({apikey:apikeyInput}) ? true : false
		if (a == false) return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})
router.get('/nulis', async (req, res, next) => {
	var text = req.query.text,
		 apikeyInput = req.query.apikey;
	if(!apikeyInput) return res.json(loghandler.notparam)
	 a = await rapi.findOne({apikey:apikeyInput}) ? true : false
     if(a == false) return res.json(loghandler.invalidKey)
	 if(!text) return res.json(loghandler.nottext)
		Nulis(text)
		 .then(hasil => {
			fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=28dd175b555860ab2b5cdfedf125fe38&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
            })
           .catch(err => {
		  res.json(loghandler.error)
		   })
})


router.get('/github', async (req, res, next) => {
	var username = req.query.username,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.json(loghandler.notparam)
		a = await rapi.findOne({apikey:apikeyInput}) ? true : false
		if (a == false) return res.json(loghandler.invalidKey)
		if (!username) return res.json(loghandler.notusername)
		Github(username)
		.then(result => {
			res.json({
				status: true,
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/igdownn', (req, res, next) => {
	var link = req.query.link
	IG(link)
	.then(result => {
		res.json({
			status:true,
			creator:creator,
			result,
			message: "jangan lupa follow " + creator
		})
	})
	.catch(e => {
		res.send(e)
	})
})
router.get('/textmaker/list', (req, res, next) => {
	res.json({
		status:true,
		creator:creator,
		list: 'glitch , google-suggestion , blackpink'
	})
})
router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
             
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await rapi.findOne({apikey:apikeyInput}) ? true : false
	if(a == false) return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion' && theme != 'blackpink') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)
        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=28dd175b555860ab2b5cdfedf125fe38&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                            	theme: "Glitch",
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=28dd175b555860ab2b5cdfedf125fe38&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                            	theme: "Google Suggestion",
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else if (theme == 'blackpink'){
            request.post({
                url: "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=28dd175b555860ab2b5cdfedf125fe38&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                            	theme: "BlackPink",
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/', (req, res, next) => {
	res.redirect(__path + '/views/index.html')
})

router.get('/*', (req, res) => {
	res.sendFile(__path + '/views/404.html')
})
module.exports = router
