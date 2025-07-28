import { useNavigate } from "react-router-dom";
import useUserStore from "../../../shared/store/useUserStore";
import useModalStore from "../../../shared/store/useModalStore";

const useAuthGate = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const openLogin = useModalStore((state) => state.openLogin);

  return (path) => {
    if (!user) {
      alert("로그인 후 이용해주세요");
      openLogin();
    } else {
      navigate(path);
    }
  };
};

export default useAuthGate;
