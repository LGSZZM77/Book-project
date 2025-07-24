const AuthForm = ({ type }) => {
  const isLogin = type === "login";

  return (
    <div>
      <h2>{isLogin ? "로그인" : "회원가입"}</h2>
      <form action="#" className="flex flex-col">
        <input type="email" name="" id="" placeholder="이메일을 입력하세요." />
        <input type="password" name="" id="" placeholder="비밀번호를 입력하세요." />
        <button className="w-full bg-search text-search">{isLogin ? "로그인" : "회원가입"}</button>
      </form>
      <h4>소셜 계정으로 {isLogin ? "로그인" : "회원가입"}</h4>
      <div className="flex justify-between">
        <a href="#">
          <img src="#" alt="깃허브" />
        </a>
        <a href="#">
          <img src="#" alt="구글" />
        </a>
        <a href="#">
          <img src="#" alt="카카오" />
        </a>
      </div>
    </div>
  );
};

export default AuthForm;
