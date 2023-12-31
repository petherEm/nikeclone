import Image from "next/image";

import star from "@/public/icons/star.svg";

const PopularProduct = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px]"
        width={280}
        height={280}
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} height={24} width={24} alt="rating" />
        <p className="font-montserrat text-slate-gray leading-normal text-xl">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProduct;
