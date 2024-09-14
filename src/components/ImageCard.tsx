interface ImageCard {
  url: string;
  alt: string | undefined;
}

const ImageCard = ({ url, alt }: ImageCard) => {
  return (
    <div>
      <img
        src={url}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
