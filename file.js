const fetch = require('node-fetch')
const fs = require('fs')

var url = 'http://jsonplaceholder.typicode.com/posts'
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      const post = data[i]
      fs.appendFile(
        'result/posts.txt',
        JSON.stringify(post) + '\r\n',
        (err) => {
          if (err) throw err
          console.log('File Created')
        }
      )
    }
  })
  .catch((err) => {
    console.log(err)
  })

console.log('File Fetched')

