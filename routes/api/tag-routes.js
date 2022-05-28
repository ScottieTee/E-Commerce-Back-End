const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ["product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      res.json(err);
    });
});

  router.get("/:id", (req, res) => {
    Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          attributes: ["product_name", "price", "stock", "category_id"],
        },
      ],
    })
      .then((tagData) => res.json(tagData))
      .catch((err) => {
        res.json(err);
      });    
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((newTag) => res.json(newTag))
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedTag) => res.json(updatedTag))
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deletedTag) => res.json(deletedTag))
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;