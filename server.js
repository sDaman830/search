const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

const clothes = [
  {
    id: 1,
    name: "T-Shirt",
    image:
      "https://www.jiomart.com/images/product/original/rvwdefi63d/inchh-men-s-cotton-round-neck-colour-block-half-sleeve-t-shirt-product-images-rvwdefi63d-0-202207250226.jpg?im=Resize=(500,630)",
    link: "/product/tshirt",
  },
  { id: 2, name: "Jeans", image: "path/to/jeans.jpg", link: "/product/jeans" },
  {
    id: 3,
    name: "Jacket",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230705/9hZ3/64a59403a9b42d15c93896e1/-473Wx593H-460698973-blue-MODEL.jpg",
    link: "/product/jacket",
  },
  { id: 4, name: "Dress", image: "path/to/dress.jpg", link: "/product/dress" },
  {
    id: 5,
    name: "Sweater",
    image: "path/to/sweater.jpg",
    link: "/product/sweater",
  },
  { id: 6, name: "Skirt", image: "path/to/skirt.jpg", link: "/product/skirt" },
  // Add more clothes as needed
];

app.get("/search", (req, res) => {
  const query = req.query.q;
  if (query && query.length > 3) {
    const results = clothes.filter((cloth) =>
      cloth.name.toLowerCase().includes(query.toLowerCase())
    );
    res.json(results);
  } else {
    res.json([]);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
