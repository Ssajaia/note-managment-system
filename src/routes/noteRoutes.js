const routes = require("../controllers/noteController")
const express = require('express')
const router = express.Router();

router.get("/",routes.getAllNotes)
router.post("/",routes.addNote)
router.get("/:tag",routes.getNoteByTag)
router.put("/:id",routes.updateNote)
router.delete("/:id",routes.deleteNote)

module.exports=router;
