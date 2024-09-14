interface ImageCard {
  url: string;
  alt: string | undefined;
  largeUrl: string;
  handleCardClick: (payload: Modal) => void;
}

const ImageCard = ({ url, alt, handleCardClick, largeUrl }: ImageCard) => {
  const handleClick = () => {
    handleCardClick({ url: largeUrl, alt });
  };
  return (
    <div
      onClick={handleClick}
      className=" h-[200px] overflow-hidden rounded-xl shadow-xl cursor-pointer">
      <img
        className="w-[300px] h-full"
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
