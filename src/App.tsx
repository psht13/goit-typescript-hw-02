import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { getPhotosByQuery } from "./utils/api-requests";
import ImageGallery from "./components/ImageGallery";
import { Toaster } from "react-hot-toast";
import { error, success } from "./utils/notifications";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import { PER_PAGE } from "./utils/constants";
import ImageModal from "./components/ImageModal";

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<null | Modal>(null);

  useEffect(() => {
    if (searchQuery === "") return;
    handleFetchRequest(searchQuery, 1); // Load first page
  }, [searchQuery]);

  const handleFetchRequest = async (
    query: string,
    pageNumber: number
  ): Promise<void> => {
    setIsLoading(true);
    setLoadMore(false);
    try {
      const data = await getPhotosByQuery(query, pageNumber, PER_PAGE);

      if (!data || !data.results || data.results.length === 0) {
        error("No results for this query.");
        setPhotos([]);
        setLoadMore(false);
        return;
      }

      setPhotos((prevPhotos) =>
        pageNumber === 1 ? data.results : [...prevPhotos, ...data.results]
      );
      setTotalPages(data.total_pages);
      setLoadMore(pageNumber < data.total_pages);
      if (pageNumber === data.total_pages) {
        success("No more photos left.");
      } else {
        success("Content loaded.");
      }
    } catch (err) {
      if (err instanceof Error) {
        error(err.message);
      } else {
        error("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
      handleFetchRequest(searchQuery, page + 1);
    }
  };

  const handleQueryChange = (query: string): void => {
    setSearchQuery(query);
    setPage(1); // Reset page when new query is entered
  };

  const handleCardClick = (payload: Modal) => {
    setIsOpen(true);
    setModalContent(payload);
  };

  const handleModalClose = () => {
    setModalContent(null);
    setIsOpen(false);
  };
  return (
    <div className="w-full">
      <SearchBar setSearchQuery={handleQueryChange} />
      {photos && (
        <ImageGallery
          photos={photos}
          handleCardClick={handleCardClick}
        />
      )}
      {isLoading && <Loader />}
      {loadMore && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <Toaster position="top-right" />
      <ImageModal
        isOpen={isOpen}
        modalContent={modalContent}
        handleModalClose={handleModalClose}
      />
    </div>
  );
};

export default App;
