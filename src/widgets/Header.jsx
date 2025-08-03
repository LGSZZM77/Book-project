import { useEffect } from "react";
import { Book, Search, User, ShoppingCart, LogOut, LogIn } from "lucide-react";
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

function Header() {
  const { signOut, checkUser } = useAuth();
  const authGate = useAuthGate();
  const { modalType, closeModal, openLogin, openJoin } = useModalStore();
  const { user, setUser, clearUser } = useUserStore();
  const { searchType, openSearch, closeSearch } = useSearchStore();

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
        <div className="flex max-w-screen-xl w-full h-full px-8">
          <div className="flex gap-6 items-center  flex-1">
            <h1>
              <a href="/">
                <div className="flex gap-4">
                  <Book /> LOGO
                </div>
              </a>
            </h1>
          </div>
          <div className="flex flex-3">
            <Navbar />
          </div>

          <div className="flex gap-6 items-center justify-end flex-3">
            <button onClick={openSearch}>
              <Search />
            </button>
            {user ? (
              <button onClick={signOut}>
                <LogOut />
              </button>
            ) : (
              <button onClick={openLogin}>
                <LogIn />
              </button>
            )}
            <button onClick={() => authGate("/my")}>
              <User />
            </button>
            <button onClick={() => authGate("/cart")}>
              <ShoppingCart />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {searchType && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1/3 h-16 z-50">
          <div className="w-full h-full bg-amber-300 rounded-md">
            <button onClick={closeSearch}>닫기</button>
          </div>
        </div>
      )}

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
