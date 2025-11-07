import { Link } from "react-router-dom";

export default function NotebookLayout({ children }) {
  const tabs = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Art", path: "/art" },
    { label: "Coding", path: "/coding" },
  ];

  return (
    <div className="relative min-h-screen bg-white flex justify-center items-center font-[Arial]">
      <div className="relative bg-white shadow-2xl border-2 border-gray-300 rounded-3xl w-[90%] md:w-[70%] h-[90vh] overflow-hidden flex">
        {/* Spiral binding look */}
        <div className="w-6 bg-gray-200 border-r border-gray-400" />
        
        {/* Main content */}
        <div className="flex-1 p-10 overflow-auto">{children}</div>

        {/* Side Tabs */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col items-end justify-center space-y-4 p-4">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className="bg-white border border-gray-400 rounded-l-xl px-3 py-1 text-sm font-medium hover:bg-gray-100 transition"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
