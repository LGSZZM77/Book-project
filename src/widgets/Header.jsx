import ThemeToggle from "./ui/ThemeToggle";
import { Book, Search, User, ShoppingCart } from "lucide-react";
import useModalStore from "../shared/store/useModalStore";
import Modal from "../shared/ui/Modal";
import LoginForm from "../features/auth/ui/LoginForm";
import JoinForm from "../features/auth/ui/JoinForm";

function Header() {
  const { modalType, closeModal, openLogin, openJoin } = useModalStore();

  return (
    <>
      <div className="hidden md:flex bg-base text-base justify-center w-full h-16">
        <div className="flex max-w-screen-xl w-full h-full justify-between items-center">
          <div className="flex gap-6 items-center">
            <h1>
              <a href="/">
                <div className="flex gap-4">
                  <Book /> LOGO
                </div>
              </a>
            </h1>
            <div className="w-52 flex items-center gap-2 p-2 bg-search text-search">
              <Search className="w-4 h-4" /> 검색
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <button onClick={openLogin}>로그인</button>
            <ul className="flex gap-6">
              <li>
                <a href="/my">
                  <User />
                </a>
              </li>
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

      {modalType && (
        <Modal onClose={closeModal}>
          {modalType === "login" && (
            <>
              <LoginForm />
              <div className="flex gap-1">
                <span>아직 회원이 아니신가요?</span>
                <button className="font-bold hover:underline" onClick={openJoin}>
                  회원가입
                </button>
              </div>
            </>
          )}
          {modalType === "join" && (
            <>
              <JoinForm />
              <div className="flex gap-1">
                <span>계정이 이미 있으신가요?</span>
                <button className="font-bold hover:underline" onClick={openLogin}>
                  {" "}
                  로그인
                </button>
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
}

export default Header;
