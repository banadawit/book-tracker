import { useState, useEffect } from "react";
import BookCard from "./components/BookCard";
import BookForm from "./components/BookForm";
import FilterBar from "./components/FilterBar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "read", "unread"
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Load books from localStorage
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
  }, []);

  // Save books to localStorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Filtered books (by status + search)
  const filteredBooks = books.filter((book) => {
    const matchesFilter = filter === "all" || 
      (filter === "read" && book.read) || 
      (filter === "unread" && !book.read);
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-4xl mx-auto">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <h1 className="text-3xl font-bold mb-6">📚 Book Tracker</h1>
        
        <BookForm setBooks={setBooks} darkMode={darkMode} />
        <FilterBar 
          filter={filter} 
          setFilter={setFilter} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          darkMode={darkMode}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredBooks.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              setBooks={setBooks} 
              darkMode={darkMode} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}