const ig = require('instatouch');
const sID = process.env.sID;

const options = {
  // Number of posts to scrape: {int default: 0}
  count: 0,
  // Media type to scrape: ["image", "video", "all"]: {string default: 'all'}
  mediaType: 'all',
	timeout: 0,
  session: "sessionid="+sID
};

const IG = (url) => new Promise((resolve, reject) => {
    if (url === 'undefined') { reject('Masukkan URL nya.') }
	url = url.split('?')[0];
	ig.getPostMeta(url, options)
	.then(data => {
		var validasi = data.graphql.shortcode_media.__typename
		if (validasi == 'GraphVideo'){
			var link = data.graphql.shortcode_media.video_url
			var type = 'Video'
			resolve({link, type})
		} else if (validasi == 'GraphImage'){
			var link = data.graphql.shortcode_media.display_url
			var type = 'Image'
			resolve({link, type})
		} else if (validasi == 'GraphSidecar'){
			var link = data.graphql.shortcode_media.edge_sidecar_to_children.edges;
			let h = []
			for(var i = 0; i < link.length; i++){
				var hasil = link[i].node.display_url
				h.push({slide:i+1, url:hasil, type:'Slide'})
				resolve(h)
			}
		}
	})
})

module.exports = IG