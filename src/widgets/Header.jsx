import ThemeToggle from "./ui/ThemeToggle";
import { Book, Search, User, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <div className="hidden md:flex bg-bg text-text justify-center w-full h-16">
      <div className="flex max-w-screen-xl w-full h-full justify-between items-center">
        <div className="flex gap-6 items-center">
          <h1>
            <a href="/">
              <div className="flex gap-4">
                <Book /> LOGO
              </div>
            </a>
          </h1>
          <div className="w-52 flex items-center gap-2 p-2 bg-searchBg text-searchText">
            <Search className="w-4 h-4" /> 검색
          </div>
        </div>

        <div className="flex gap-6 items-center">
          {/* 로그인 되면 사라지게 하기 */}
          <ul className="flex gap-6">
            <li>
              <a href="/login">로그인</a>
            </li>{" "}
            <li>
              <a href="/join">회원가입</a>
            </li>
          </ul>
          <ul className="flex gap-6">
            <li>
              <a href="/my">
                <User />
              </a>
            </li>{" "}
            <li>
              <a href="/cart">
                <ShoppingCart />
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
