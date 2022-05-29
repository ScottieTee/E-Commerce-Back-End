const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  Category.findOne({
    where: {   
    id: req.params.id,
  },
  include: [
    {
      model: Product, 
      attributes: ["Product_name"],
    },
  ],
  })
  .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.post("/", (req, res) => {
  router.post("/", (req, res) => {
    Category.create({
      category_name: req.body.category_name,
    })
      .then((newCategory) => res.json(newCategory))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
});

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

  router.delete("/:id", (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedCategory) => res.json(deletedCategory))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  })
});

module.exports = router;
