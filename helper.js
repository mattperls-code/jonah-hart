const fs = require("fs")

fs.readdir("./public/assets/gallery-images", {
    withFileTypes: true
}, (err, files) => {
    if (err) throw err

    console.log(JSON.stringify(files.map(file => file.name)))
})