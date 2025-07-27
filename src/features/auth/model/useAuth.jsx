import { supabase } from "../../../shared/api/supabaseClient";

const useAuth = () => {
  const signInWithOAuth = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "http://localhost:5173/",
      },
    });
    if (error) throw new Error(error.message);
  };

  const signUpWithEmail = async (email, password) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:5173/",
      },
    });
    if (error) throw new Error("회원가입 문제가 발생했습니다.");
  };

  const signInWithEmail = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error("로그인 문제가 발생했습니다.");
  };

  return {
    signInWithOAuth,
    signUpWithEmail,
    signInWithEmail,
  };
};

export default useAuth;
