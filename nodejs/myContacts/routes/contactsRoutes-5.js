const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact,
    addContactForm //연락처 추가폼
} 
= require("../controllers/contactController"); 

//localhost:3000/contacts
router.route("/").get(getAllContacts);
//localhost:3000/contacts/add
router.route("/add").get(addContactForm).post(createContacts);
//localhost:3000/contacts/:id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;