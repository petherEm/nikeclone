import Image from "next/image";
import star from "../public/icons/star.svg";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
        width={120}
        height={120}
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image src={star} alt="star" width={20} height={20} />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
