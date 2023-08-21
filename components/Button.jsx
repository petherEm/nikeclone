import Image from "next/image";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border text-lg font-montserrat leading-none rounded-full${
        fullWidth && "w-full"
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red rounded-full text-white border-coral-red $"
      }`}
    >
      {label}

      {iconUrl && (
        <Image
          src={iconUrl}
          alt="arrow right icon"
          width={25}
          height={25}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
