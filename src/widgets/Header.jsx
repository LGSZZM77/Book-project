import ThemeToggle from "./ui/ThemeToggle";

function Header() {
  return (
    <div className="hidden md:block bg-bg text-text w-full h-16">
      <div className="flex justify-around w-full h-full items-center">
        <div>
          <a href="/">아이콘</a>
        </div>
        <ul className="flex">
          <li>베스트</li>
          <li>커뮤니티</li>
        </ul>
        <div className="flex">
          <ul className="flex">
            <li>로그인</li> <li>회원가입</li>
          </ul>
          <ul className="flex">
            <li>마이페이지</li> <li>카트</li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
