import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    if (honeypot != "") {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      return;
    }

    const formData = { name, email, subject, message };

    try {
      const response = await fetch("https://contactapi.rmamet.xyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(`Failed to send message: ${result.message}`);
        return;
      }

      if (result.status === "success") {
        alert("Message sent");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Operation failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error or cannot connect to server");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/4 md:w-1/2 rounded-lg bg-slate-300 p-4 m-4 mr-auto ml-auto shadow-sm"
    >
      <input
        type="text"
        id="name"
        placeholder="Full name"
        className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        id="subject"
        placeholder="Subject"
        className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <textarea
        id="message"
        placeholder="Message"
        maxLength={1000}
        className="shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <br />
      <input
        id="Hidden"
        className="hidden"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />
      <button
        type="submit"
        className="submit shadow appearance-none border rounded w-full my-1 py-2 px-3 text-gray-700 leading-tight bg-slate-100 focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
