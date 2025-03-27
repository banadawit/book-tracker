import { motion } from "framer-motion";

export default function BookCard({ book, setBooks, darkMode }) {
  const toggleReadStatus = () => {
    setBooks(prev => 
      prev.map(b => 
        b.id === book.id ? { ...b, read: !b.read } : b
      )
    );
  };

  const deleteBook = () => {
    setBooks(prev => prev.filter(b => b.id !== book.id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`rounded-lg p-4 shadow-lg transition-all hover:shadow-xl ${
        darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
      }`}
    >
      <h3 className="font-bold text-lg">{book.title}</h3>
      <p className="text-sm opacity-80">{book.author}</p>
      
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < book.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={toggleReadStatus}
          className={`px-3 py-1 text-sm rounded-full ${
            book.read 
              ? "bg-green-500 text-white" 
              : darkMode ? "bg-gray-700 text-white" : "bg-gray-200"
          }`}
        >
          {book.read ? "Read ✓" : "Mark Read"}
        </button>
        <button
          onClick={deleteBook}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded-full"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}