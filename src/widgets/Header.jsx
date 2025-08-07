import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Book, Search, User, ShoppingCart, LogOut, LogIn, X } from "lucide-react";
import LoginForm from "../features/auth/ui/LoginForm";
import JoinForm from "../features/auth/ui/JoinForm";
import AuthSwitch from "../features/auth/ui/AuthSwitch";
import useAuth from "../features/auth/model/useAuth";
import useAuthGate from "../features/auth/model/useAuthGate";
import Modal from "../shared/ui/Modal";
import ThemeToggle from "./ui/ThemeToggle";
import useModalStore from "../shared/store/useModalStore";
import useUserStore from "../shared/store/useUserStore";
import useSearchStore from "../shared/store/useSearchStore";
import Navbar from "../widgets/Navbar";
import "./style/Header.css";

function Header() {
  const location = useLocation();

  const { signOut, checkUser } = useAuth();
  const authGate = useAuthGate();
  const { modalType, closeModal, openLogin, openJoin } = useModalStore();
  const { user, setUser, clearUser } = useUserStore();
  const { searchType, openSearch, closeSearch } = useSearchStore();

  const searchRef = useRef(null);
  const searchButtonRef = useRef(null);

  const typingHints = ["클린 코드", "자바스크립트", "마운틴 듀"];

  // 인증 상태 초기화
  useEffect(() => {
    checkUser().then((session) => {
      if (session.user) {
        setUser(session.user);
      } else {
        clearUser();
      }
    });
  }, []);

  // 검색창 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchEl = searchRef.current;
      const searchButton = searchButtonRef.current;

      if (searchEl && !searchEl.contains(event.target) && searchButton && !searchButton.contains(event.target)) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchType, closeSearch]);

  return (
    <>
      <div className="hidden md:flex bg-bg text-text justify-center items-center w-full h-20">
        <div className="flex max-w-screen-xl w-full h-full px-8">
          <div className="flex gap-6 items-center flex-1">
            <h1>
              <a href="/">
                <div className="flex gap-4">
                  <Book /> LOGO
                </div>
              </a>
            </h1>
          </div>
          <div className="flex items-center flex-3">
            <Navbar />
          </div>

          <div id="icon_btn" className="flex gap-4 items-center justify-end flex-3 text-sm [&_svg]:w-5 [&_svg]:h-5">
            <button ref={searchButtonRef} onClick={openSearch}>
              <Search />
              <span>검색</span>
            </button>
            {user ? (
              <button onClick={signOut}>
                <LogOut />
                <span>로그아웃</span>
              </button>
            ) : (
              <button onClick={openLogin}>
                <LogIn />
                <span>로그인</span>
              </button>
            )}
            <button
              onClick={() => authGate("/my")}
              className={location.pathname === "/my" ? "text-primary" : undefined}
            >
              <User />
              <span>마이</span>
            </button>
            <button
              onClick={() => authGate("/cart")}
              className={location.pathname === "/cart" ? "text-primary" : undefined}
            >
              <ShoppingCart />
              <span>카트</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {searchType && (
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1/4 h-12 z-50"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              // bg 수정하기
              className="flex items-center w-full h-full bg-black text-white rounded-xl"
            >
              <div className="flex-6 h-full flex items-center text-lg">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  className="w-full h-full pl-4 border rounded-l-xl"
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
          </motion.div>
        )}
      </AnimatePresence>

      {modalType && (
        <Modal onClose={closeModal}>
          {modalType === "login" && (
            <>
              <LoginForm />
              <AuthSwitch question="아직 회원이 아니신가요?" action="회원가입" onClick={openJoin} />
            </>
          )}
          {modalType === "join" && (
            <>
              <JoinForm />
              <AuthSwitch question="계정이 이미 있으신가요?" action="로그인" onClick={openLogin} />
            </>
          )}
        </Modal>
      )}
    </>
  );
}

export default Header;
