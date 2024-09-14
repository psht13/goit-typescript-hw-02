import ImageCard from "./ImageCard";

interface ImageGallery {
  photos: Photo[];
}

const ImageGallery = ({ photos }: ImageGallery) => {
  return (
    <ul className="flex flex-wrap gap-8 w-full justify-center items-center p-8 list-none">
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            url={photo.urls.small}
            alt={photo.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
