const express = require('express');

const router = express.Router({caseSensitive : true});

const fs = require("fs").promises;
const dataFilePath =  "data.json";

const readJsonFile = async (dataFilePath) => { // Passing dataFilePath as a parameter
    try {
      const data = await fs.readFile(dataFilePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        return []; // Return an empty array if the file doesn't exist yet
      }
      throw error;
    }
  };

router.get('/:id', async (req, res) => {
    let id = req.params["id"];
    const vaccines = await readJsonFile(dataFilePath);
    if (vaccines === null || vaccines.length === 0 || vaccines.length <= id) {
        return res.status(400).send({status : "Failed", message: "No vaccine Found"});
    }
    return res.status(200).send({status : "Success", ...vaccines[id]});
})

router.get("*", (req, res) => {
    res.send("<h1> The api is not ready </h1>");
})

module.exports=router;