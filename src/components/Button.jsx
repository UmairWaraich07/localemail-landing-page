const Button = ({ label, styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-8 sm:px-10 font-sen font-semibold
sm:text-[20px] bg-secondary capitalize text-light outline-none border-2 border-transparent 
hover:bg-transparent hover:text-secondary hover:border-secondary w-fit ${styles} rounded-[5px]`}
    >
      <a href="https://app.localemail.app/register">{label}</a>
    </button>
  );
};

export default Button;
