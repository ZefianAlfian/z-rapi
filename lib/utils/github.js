const needle = require('needle')

const Github = (user) => new Promise((resolve, reject) => {
    needle('https://api.github.com/users/' + encodeURIComponent(user), (error, resp, body) => {
        const { id, node_id, avatar_url, gravatar_id, html_url, type, site_admin, name, company, blog, location, email, bio, twitter_username, public_repos, public_gists, followers, following, created_at, updated_at } = body
        if (error) {
			    reject(error);
        } else {
          resolve({
              status: resp.statusCode,
              id: id,
              node_id: node_id,
              avatar_url: avatar_url,
              gravatar_id: gravatar_id,
              html_url: html_url,
              type: type,
              site_admin: site_admin,
              name: name,
              company: company,
              blog: blog,
              location: location,
              email: email,
              bio: bio,
              twitter_username: twitter_username,
              public_repos: public_repos,
              public_gists: public_gists,
              followers: followers,
              following: following,
              created_at: created_at,
              updated_at: updated_at
          })
        }
    })
})

module.exports = Github