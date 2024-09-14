import ImageCard from "./ImageCard";

interface ImageGallery {
  photos: Photo[];
}

const ImageGallery = ({ photos }: ImageGallery) => {
  return (
    <div>
      {photos.map((photo) => (
        <ImageCard
          key={photo.id}
          url={photo.urls.small}
          alt={photo.description}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
