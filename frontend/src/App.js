import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [contacts, setContacts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");

  useEffect(() => {
    axios.get("https://contact-backend-8v1o.onrender.com/api/contacts")
      .then(res => setContacts(res.data));
  }, []);

  const validate = () => {
  let err = {};

  if (!form.name) {
    err.name = "Name required";
  }

  if (!form.phone) {
    err.phone = "Phone is required";
  } else if (!/^\d+$/.test(form.phone)) {
    err.phone = "Phone must contain only numbers";
  }

  if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
    err.email = "Invalid email";
  }

  setErrors(err);
  return Object.keys(err).length === 0;
};


  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
   const res = await axios.post(
    "https://contact-backend-8v1o.onrender.com/api/contacts",
     form
);


    setContacts([res.data, ...contacts]);
    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmitSuccess("Contact saved successfully");
    setTimeout(() => {
    setSubmitSuccess("");
    }, 3000);
    setIsSubmitting(false);
  };

  const deleteContact = async (id) => {
   await axios.delete(`https://contact-backend-8v1o.onrender.com/api/contacts/${id}`);
    setContacts(contacts.filter(c => c._id !== id));
    setSubmitSuccess("Contact deleted successfully");
    setTimeout(() => {
    setSubmitSuccess("");
    }, 3000);
  };

  
  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
    <div className="max-w-4xl mx-auto">

     
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Get In Touch
        </h1>
        <p className="text-gray-600">
          We'd love to hear from you. Send us a message!
        </p>
      </div>

     
      <div className="grid md:grid-cols-2 gap-6">
        
        <ContactForm
          form={form}
          setForm={setForm}
          errors={errors}
          submitHandler={submitHandler}
          isSubmitting={isSubmitting}
          submitSuccess={submitSuccess}
        />

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold mb-4">Contacts</h3>

          {sortedContacts.length === 0 ? (
            <p className="text-gray-400">No contacts yet</p>
          ) : (
            sortedContacts.map(c => (
              <ContactCard
                key={c._id}
                contact={c}
                onDelete={deleteContact}
              />
            ))
          )}
        </div>

      </div>
    </div>
  </div>
);

}

export default App;
