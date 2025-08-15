"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import searchBooks from "../../shared/api/searchBooks ";

const SearchBar = () => {
  const typingHints = ["클린 코드", "자바스크립트", "마운틴 듀"];
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await searchBooks(query);
      setBooks(results);
      console.log("검색 결과:", results);
    } catch {
      console.error("검색 중 오류:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center w-full h-full bg-black text-white rounded-xl">
        <div className="flex-6 h-full flex items-center text-lg">
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            className="w-full h-full pl-4 border rounded-l-xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="flex-1 h-full flex items-center justify-center border rounded-r-xl bg-tab">
          <Search />
        </div>
      </form>
      <div className="relative top-1 w-full py-2 bg-amber-400">
        {typingHints.map((item) => (
          <div key={item} className="flex items-center mx-2 px-4 py-2.5 rounded-lg hover:bg-red-500">
            <span className="mr-3.5">
              <Search size={20} />
            </span>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
