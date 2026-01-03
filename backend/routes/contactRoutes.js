const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// POST - Save contact
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
});

// GET - Fetch contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});
// DELETE - Remove contact by ID
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});


module.exports = router;

