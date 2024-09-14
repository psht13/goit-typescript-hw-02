interface ImageCard {
  url: string;
  alt: string | undefined;
}

const ImageCard = ({ url, alt }: ImageCard) => {
  return (
    <div className=" h-[200px] overflow-hidden rounded-xl shadow-xl cursor-pointer">
      <img
        className="w-[300px] h-full"
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
