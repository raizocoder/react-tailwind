import image from "./assets/1photo.jpg";
const ImageCard = () => {
  return (
    <div className=" flex flex-col m-4 items-center relative">
      <div className="w-100 absolute rounded-2x overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="w-60 hover:scale-110 transition-transform duration-300"
        />
        <p className="absolute w-100 top-56 text-center text-white hidden sm:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptates perspiciatis sit facilis distinctio ducimus reiciendis
          optio eveniet hic vitae?
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
