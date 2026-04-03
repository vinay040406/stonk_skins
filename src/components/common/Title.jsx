export const Title = ({ text, className }) => {
  return (
    <h2
      className={` ${className} font-poppins text-custom-4xl lg:text-5xl font-medium -tracking-6 leading-118`}
    >
      {text}
    </h2>
  );
};
