import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.date || !formData.time || !formData.guests) {
      setMessage("⚠️ Please fill all fields before submitting.");
      return;
    }

    setMessage(`✅ Table booked for ${formData.name} on ${formData.date} at ${formData.time}.`);
    setFormData({ name: "", date: "", time: "", guests: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} aria-label="Full Name" />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} aria-label="Date" />

      <label htmlFor="time">Time:</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} aria-label="Time" />

      <label htmlFor="guests">Number of Guests:</label>
      <select id="guests" name="guests" value={formData.guests} onChange={handleChange} aria-label="Number of Guests">
        <option value="">Select</option>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      <button type="submit">Book Table</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default BookingForm;
