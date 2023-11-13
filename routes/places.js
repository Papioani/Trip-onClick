var express = require('express');
var router = express.Router();
const db = require("../model/helper") 


// /api/places   16 of app.js
router.get("/", (req,res) => {  /* / means: /api/places/  !!!!!!!!    */
db("SELECT * FROM places")
.then(results => {
    res.send(results.data);
})
.catch(err => res.status(500).send(err))

});

// /api/places/:id

router.get("/:id", async (req, res) =>{  /* the /api/places/ is within the /  !!!!!!!!!!!!! */
  let placeId= req.params.id;
  try{

    let result = await db(`SELECT * FROM places WHERE id = ${placeId}`);
    if(result.data.length === 1){ 
      res.send(result.data[0])
    }
    else{
       res.status(400).send({error: "place not found!"});
    }
  }catch(err) {
    res.status(500).send(err);
  }
});

// /api/places/
router.post("/", async(req, res) => {
  // we assume we have all the required data inside req.body
  let {name, link} = req.body;

  let sql = `INSERT INTO places (name, link)
             VALUES ('${name}', ${link}`;

    try{
      await db(sql);
      let result = await db("SELECT * FROM books");
      res.status(201).send(result.data);
    }
    catch(err){
      res.status(500).send(err);

    }

});


router.put("/places/:id", async (req, res) => {  /* for the put it expects the id(see App.jsx) */
  // get place id from params
  let placeId = req.params.id;

  try{
    
    let result = await db(`SELECT * FROM places WHERE id = ${placeId}`);
    if(result.data.length === 1){ 
        //get all the properties from req.body and create a sql statement with them
        let {name, link} = req.body;
        let sql = `UPDATE places
                    SET name='${name}', link=${link}
                    WHERE id = ${placeId}`;
        await db(sql);
        let result = await db("SELECT * FROM places");
        res.status(201).send(result.data);
    }
    else{/
        res.status(404).send({error: 'place not found!'});
    }

  }
  catch(err){//server error
      res.status(500).send(err);
  }

});

router.delete("/places/:id", async(req, res) => {

  let bookId = req.params.id;

  try{
    let result = await db(`SELECT * FROM places WHERE id = ${placeId}`);
    if(result.data.length === 1){ 
        await db(`DELETE FROM places WHERE id = ${placeId}`);
        let result = await db("SELECT * FROM places");
        res.send(result.data);
    }
    else{
        res.status(404).send({error: 'place not found!'});
    }

  }
  catch(err){//server error
      res.status(500).send(err);
  }


});
module.exports = router;


