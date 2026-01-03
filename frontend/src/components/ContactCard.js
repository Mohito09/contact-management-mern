function ContactCard({ contact, onDelete }) {
  return (
    <div className="p-4 bg-indigo-50 rounded-lg border flex justify-between">
      <div>
        <p className="font-semibold">{contact.name}</p>
        <p className="text-sm">{contact.phone}</p>
        {contact.email && (
          <p className="text-sm text-gray-500">{contact.email}</p>
        )}
      </div>

      <button
        onClick={() => onDelete(contact._id)}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}

export default ContactCard;
