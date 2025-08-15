import { useRouter } from "next/navigation";
import useUserStore from "../../../shared/store/useUserStore";
import useModalStore from "../../../shared/store/useModalStore";

const useAuthGate = () => {
  const router = useRouter();
  const { user } = useUserStore();
  const openLogin = useModalStore((state) => state.openLogin);

  return (path) => {
    if (!user) {
      alert("로그인 후 이용해주세요");
      openLogin();
    } else {
      router.push(path);
    }
  };
};

export default useAuthGate;
