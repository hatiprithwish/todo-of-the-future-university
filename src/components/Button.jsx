const Button = ({ label, size, handleClick }) => {
  return (
    <button
      className={`${
        size === "big" ? "py-4 px-9" : "text-sm py-2 px-4"
      } bg-lime-green hover:bg-green-600 text-white rounded-custom`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
