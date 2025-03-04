const GalleryCard = ({ data }) => {
  return (
    <div className="hover:border-b-4 rounded-b border-sky-800 normal hover:shadow-lg shadow-lg shadow-sky-200 transition delay-150 duration-300 ease-in-out hover:scale-105">
      <img src={data.image} alt="" className="cover w-full" />
      <h2 className="text-center text-2xl font-semibold py-3 normal hover:text-sky-800">
        {data.title}
      </h2>
    </div>
  );
};

export default GalleryCard;
