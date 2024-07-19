var express = require('express');
var router = express.Router();
const db = require("../model/helper") 

/* backend API endpoint for fetching data from the MySQL database 
receiving the code from the fetchFrontend.jsx*/


// /api/places      queries the MySQL database to select all records from the places table.
router.get("/", (req,res) => {  /* / means: /api !!!!!!!!   see app.js line 16 */
db("SELECT * FROM Mani_hotel_favourites")
.then(results => {
  console.log(results.data)
    res.send(results.data);
})
.catch(err => res.status(500).send(err))

});

// /api/places/:id

router.get("/:id", async (req, res) =>{  /* the /api/places is the /  !!!!!!!!!!!!! */
  let placeId= req.params.id;
  try{

    let result = await db(`SELECT * FROM Mani_hotel_favourites WHERE id = ${placeId}`);
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

// /api/favourites/
router.post("/", async(req, res) => {
  // we assume we have all the required data inside req.body
  let {Hotel, Rating, Price} = req.body;

  let sql = `INSERT INTO favourites (Hotel, Rating, Price)
             VALUES ('${Hotel}', ${Rating}, ${Price})`;

    try{
      await db(sql);
      let result = await db("SELECT * FROM favourites");
      res.status(201).send(result.data);
    }
    catch(err){
      res.status(500).send(err);

    }

});


// /api/favourites/:id
router.put("/:id", async (req, res) => {  /* for the put it expects the id(see App.jsx) */
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
    else{
        res.status(404).send({error: 'place not found!'});
    }

  }
  catch(err){//server error
      res.status(500).send(err);
  }

});

router.delete("/:id", async(req, res) => {

  let placeId = req.params.id;

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


