const Card = ({ imgUrl, title, description }) => {
  return (
    <div className="max-w-[332px] bg-white border border-gray-200 rounded-lg shadow-sm ">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={imgUrl}
        alt="Technology Acquisitions"
        loading="lazy"
      />
      <div className="p-5">
        <h5 className="text-3xl md:text-4xl mt-7 font-normal tracking-tight text-black ">
          {title}
        </h5>
        <p className="my-4 text-xl md:text-2xl font-normal text-neutral-800">{description}</p>
      </div>
    </div>
  );
};

export default Card;
