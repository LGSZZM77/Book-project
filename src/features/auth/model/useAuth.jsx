import { supabase } from "../../../shared/api/supabaseClient";
import useModalStore from "../../../shared/store/useModalStore";
import useUserStore from "../../../shared/store/useUserStore";

const useAuth = () => {
  const { setUser, clearUser } = useUserStore.getState();
  const closeModal = useModalStore((state) => state.closeModal);

  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) alert("회원가입 문제가 발생했습니다.");

    if (data.user && data.session) {
      setUser(data.user);
      closeModal();
    }
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert("로그인 문제가 발생했습니다.");

    if (data.user) {
      setUser(data.user);
      closeModal();
    }
  };

  const OAuth = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      clearUser();
    }
  };

  const checkUser = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      return null;
    }

    return session;
  };

  return {
    signUp,
    signIn,
    OAuth,
    signOut,
    checkUser,
  };
};

export default useAuth;
