import { useState } from "react";
import useThemeStore from "../../../shared/store/useThemeStore";
import { Eye, EyeClosed } from "lucide-react";

const AuthForm = ({ type }) => {
  const isLogin = type === "login";
  const theme = useThemeStore((state) => state.theme);
  const [showPassword, setShowPassword] = useState(false);

  const socialButtons = [
    {
      alt: "깃허브 로그인",
      lightSrc: "/icons/github-light.svg",
      darkSrc: "/icons/github-dark.svg",
    },
    {
      alt: "구글 로그인",
      lightSrc: "/icons/google-light.svg",
      darkSrc: "/icons/google-dark.svg",
    },
    {
      alt: "카카오톡 로그인",
      src: "/icons/kakaotalk.png",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold">{isLogin ? "로그인" : "회원가입"}</h2>
      <form action="#" className="flex flex-col gap-4 text-lg w-75">
        <input
          className="p-2 w-full border text-base border-muted"
          type="email"
          name=""
          id=""
          placeholder="이메일을 입력하세요."
        />
        <div className="relative">
          <input
            className="p-2 w-full border text-base border-muted"
            type={showPassword ? "text" : "password"}
            name=""
            id=""
            placeholder="비밀번호를 입력하세요."
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-muted"
          >
            {showPassword ? <EyeClosed /> : <Eye />}
          </button>
        </div>

        <button className="w-full py-2 bg-primary text-primary-muted font-bold">
          {isLogin ? "로그인" : "회원가입"}
        </button>
      </form>
      <h4 className="text-xl font-bold text-muted">소셜 계정으로 {isLogin ? "로그인" : "회원가입"}</h4>
      <div className="flex justify-evenly">
        {socialButtons.map(({ alt, lightSrc, darkSrc, src }, idx) => {
          const imgSrc = theme && lightSrc && darkSrc ? (theme === "light" ? lightSrc : darkSrc) : src;

          return (
            <a key={idx} href="#" aria-label={alt} className="w-10 h-10 flex items-center justify-center ">
              <img src={imgSrc} alt={alt} className="w-10 h-10" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AuthForm;
