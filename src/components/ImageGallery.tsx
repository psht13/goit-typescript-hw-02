import ImageCard from "./ImageCard";

interface ImageGallery {
  photos: Photo[];
  handleCardClick: (payload: Modal) => void;
}

const ImageGallery = ({ photos, handleCardClick }: ImageGallery) => {
  return (
    <ul className="flex flex-wrap gap-8 w-full justify-center items-center p-8 list-none">
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            handleCardClick={handleCardClick}
            url={photo.urls.small}
            alt={photo.description}
            largeUrl={photo.urls.full}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
