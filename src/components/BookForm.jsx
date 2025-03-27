import { useState } from "react";

export default function BookForm({ setBooks, darkMode }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      rating,
      read: false,
    };

    setBooks((prev) => [...prev, newBook]);
    setTitle("");
    setAuthor("");
    setRating(3);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div
        className={`p-4 rounded-lg shadow-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="font-semibold mb-3">📖 Add a New Book</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          className={`w-full p-2 mb-3 rounded border ${
            darkMode
              ? "bg-gray-700 border-gray-600"
              : "bg-white border-gray-300"
          }`}
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className={`w-full p-2 mb-3 rounded border ${
            darkMode
              ? "bg-gray-700 border-gray-600"
              : "bg-white border-gray-300"
          }`}
          required
        />
        <div className="flex items-center mb-4">
          <label className="mr-2">Rating:</label>
          <input
            type="range"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="w-24"
          />
          <span className="ml-2">{rating} ★</span>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          Add Book
        </button>
      </div>
    </form>
  );
}
