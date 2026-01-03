function ContactForm({
  form,
  setForm,
  errors,
  submitHandler,
  isSubmitting,
  submitSuccess
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Contact Form
      </h2>

      {submitSuccess && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          ✓ {submitSuccess}
        </div>
      )}

      <div className="space-y-5">
        {/* Name */}
        <input
          placeholder="Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg"
        />
        <p className="text-red-500 text-sm">{errors.name}</p>

        {/* Email */}
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg"
        />
        <p className="text-red-500 text-sm">{errors.email}</p>

        {/* Phone */}
        <input
             type="text"
          placeholder="Phone *"
          value={form.phone}
           onChange={(e) => {
              const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
             setForm({ ...form, phone: onlyNumbers });
            }}
              className="w-full px-4 py-3 border rounded-lg"
            />
             <p className="text-red-500 text-sm">{errors.phone}</p>


        {/* Message */}
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg"
        />

        <button
          onClick={submitHandler}
          disabled={!form.name || !form.phone || isSubmitting}
          className="w-full bg-indigo-600 text-white py-3 rounded disabled:bg-gray-300"
        >
          {isSubmitting ? "Saving..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
