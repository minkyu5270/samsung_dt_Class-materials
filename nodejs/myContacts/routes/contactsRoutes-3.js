const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact
} 
= require("../controllers/contactController"); //컨트롤러 분리,contactController-3

//localhost:3000/contacts
router
    .route("/")
    //모든 연락처 가져오기
    .get(getAllContacts)
    //연락처 추가하기
    .post(createContacts);

router
    .route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);



module.exports = router;