const Card = ({ imgUrl, title, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={imgUrl}
        alt="Technology Acquisitions"
        loading="lazy"
      />
      <div className="p-5">
        <h5 className="text-4xl my-12 font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="my-4 text-2xl font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
