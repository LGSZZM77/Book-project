import { useEffect } from "react";
import { Book, Search, User, ShoppingCart } from "lucide-react";
import LoginForm from "../features/auth/ui/LoginForm";
import JoinForm from "../features/auth/ui/JoinForm";
import AuthSwitch from "../features/auth/ui/AuthSwitch";
import useAuth from "../features/auth/model/useAuth";
import useAuthGate from "../features/auth/model/useAuthGate";
import Modal from "../shared/ui/Modal";
import ThemeToggle from "./ui/ThemeToggle";
import useModalStore from "../shared/store/useModalStore";
import useUserStore from "../shared/store/useUserStore";

function Header() {
  const { modalType, closeModal, openLogin, openJoin } = useModalStore();
  const { signOut, checkUser } = useAuth();
  const authGate = useAuthGate();
  const { user, setUser, clearUser } = useUserStore();

  useEffect(() => {
    checkUser().then((session) => {
      if (session.user) {
        setUser(session.user);
      } else {
        clearUser();
      }
    });
  }, []);

  return (
    <>
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
            <div className="w-52 flex items-center gap-2 p-2 rounded-lg bg-search-bg text-search">
              <Search className="w-4 h-4" /> 검색
            </div>
          </div>

          <div className="flex gap-6 items-center">
            {user ? <button onClick={signOut}>로그아웃</button> : <button onClick={openLogin}>로그인</button>}
            <ul className="flex gap-6">
              <li>
                <button onClick={() => authGate("/my")}>
                  <User />
                </button>
              </li>
              <li>
                <button onClick={() => authGate("/cart")}>
                  <ShoppingCart />
                </button>
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
