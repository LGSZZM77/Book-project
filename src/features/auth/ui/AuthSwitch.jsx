const AuthSwitch = ({ question, action, onClick }) => {
  return (
    <div className="flex justify-end gap-1 mt-16 text-sm">
      <span className="text-text">{question}</span>
      <button className="font-bold text-primary hover:underline" onClick={onClick}>
        {action}
      </button>
    </div>
  );
};

export default AuthSwitch;
