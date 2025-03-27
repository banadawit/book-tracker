export default function FilterBar({ filter, setFilter, searchQuery, setSearchQuery, darkMode }) {
    return (
      <div className={`p-4 rounded-lg shadow-md mb-6 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="🔍 Search books..."
          className={`w-full p-2 mb-3 rounded border ${
            darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
          }`}
        />
        <div className="flex gap-2">
          {["all", "read", "unread"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === f
                  ? "bg-blue-500 text-white"
                  : darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-200"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  }