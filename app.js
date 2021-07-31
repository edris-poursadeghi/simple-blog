const express = require("express");

const app = express();
const blogRouter = require("./routes/blogs");

app.set("view engine", "ejs");

app.use(express.static('public'))


app.get("/blog", (req, res) => {
  blogs = [
    {
      title: "Post 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      snippet:
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      author: "Edris Poursadeghi",
      createdAt: new Date(),
     // img: "images/post1.jpg",
     img:'https://p4.wallpaperbetter.com/wallpaper/864/412/1015/sea-sunset-flowers-tropics-wallpaper-preview.jpg'
    },
    {
        title: "Post 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
        snippet:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
        author: "Edris Poursadeghi",
        createdAt: new Date(),
       // img: "images/post2.jpg",
       img:'https://www.katalay.net/images/gallery/images/amazingplaces/treasure-island-laguna-beach.jpeg'
      },
  ];
  res.render("index", { blogs });
});

app.use("/blogs", blogRouter);

app.listen(5000);
