import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { getPhotosByQuery } from "./utils/api-requests";
import ImageGallery from "./components/ImageGallery";

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (() => {
      if (searchQuery === "") return;
      handleRequest(searchQuery);
    })();
  }, [searchQuery]);

  const handleRequest = async (query: string): Promise<void> => {
    const data = await getPhotosByQuery(query);
    if (!data) return;

    setPhotos(data.results);
  };

  const handleQueryChange = (query: string): void => {
    setSearchQuery(query);
  };

  return (
    <div className="w-full">
      <SearchBar setSearchQuery={handleQueryChange} />
      <ImageGallery photos={photos} />
    </div>
  );
};

export default App;
