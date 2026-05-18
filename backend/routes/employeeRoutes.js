const express = require("express");

const {
  addEmployee,
  getEmployees,
  searchEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.post("/", addEmployee);

router.get("/", getEmployees);

router.get("/search", searchEmployee);

module.exports = router;