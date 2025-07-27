import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import useThemeStore from "../../../shared/store/useThemeStore";
import useAuth from "../model/useAuth";
import { useNavigate } from "react-router-dom";
import useModalStore from "../../../shared/store/useModalStore";

const AuthForm = ({ type }) => {
  const isLogin = type === "login";
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();
  const closeModal = useModalStore((state) => state.closeModal);

  const { signInWithEmail, signUpWithEmail, signInWithOAuth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmail(email, password);
        closeModal();
        navigate("/");
      } else {
        await signUpWithEmail(email, password);
        alert("인증 메일이 발송되었습니다. 이메일을 확인하세요.");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const socialButtons = [
    {
      provider: "github",
      alt: "깃허브 로그인",
      lightSrc: "/icons/github-light.svg",
      darkSrc: "/icons/github-dark.svg",
    },
    {
      provider: "google",
      alt: "구글 로그인",
      lightSrc: "/icons/google-light.svg",
      darkSrc: "/icons/google-dark.svg",
    },
    {
      provider: "kakao",
      alt: "카카오톡 로그인",
      src: "/icons/kakaotalk.png",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold">{isLogin ? "로그인" : "회원가입"}</h2>
      <form className="flex flex-col gap-4 text-lg w-75" onSubmit={handleSubmit}>
        <input
          className="p-2 w-full border text-base border-muted"
          type="email"
          name="email"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            className="p-2 w-full border text-base border-muted"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-muted"
          >
            {showPassword ? <EyeClosed /> : <Eye />}
          </button>
        </div>

        <button type="submit" className="w-full py-2 bg-primary text-primary-muted font-bold">
          {isLogin ? "로그인" : "회원가입"}
        </button>
      </form>
      <h4 className="text-xl font-bold text-muted">소셜 계정으로 {isLogin ? "로그인" : "회원가입"}</h4>
      <div className="flex justify-evenly">
        {socialButtons.map(({ provider, alt, lightSrc, darkSrc, src }, idx) => {
          const imgSrc = theme && lightSrc && darkSrc ? (theme === "light" ? lightSrc : darkSrc) : src;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => signInWithOAuth(provider)}
              aria-label={alt}
              className="w-10 h-10 flex items-center justify-center"
            >
              <img src={imgSrc} alt={alt} className="w-10 h-10" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AuthForm;
