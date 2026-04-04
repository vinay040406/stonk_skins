export const Title = ({ text, className }) => {
  return (
    <h2
      className={` ${className} font-poppins font-medium -tracking-6 leading-118 text-[#fff]`}
    >
      {text}
    </h2>
  );
};
