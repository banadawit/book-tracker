export default function ThemeToggle({ darkMode, setDarkMode }) {
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-4 right-4 p-2 rounded-full ${
          darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"
        }`}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    );
  }