const Pool = require("./config");
const express = require("express");
const router = express.Router();


//1. Menampilkan data seluruh list film
router.get("/actor", (req, res) => {
  const query = `select * from actor`;

  Pool.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

//2. Menampilkan data film tertentu berdasarkan id
router.get("/actor/:id", (req, res) => {
  const { id } = req.params;
  const query = `select * from actor where actor_id = $1`;

  Pool.query(query, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

//3. Menampilkan data list category
router.get("/category", (req, res) => {
  const query = `select * from category`;

  Pool.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

//4. Menampilkan data list film berdasarkan category
router.get("/film/:category", (req, res) => {
  const { category } = req.params;
  const query = `SELECT f.*
    FROM film f
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON c.category_id = fc.category_id
    WHERE c.name ilike '%${category}%';`;

  Pool.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

module.exports = router;
