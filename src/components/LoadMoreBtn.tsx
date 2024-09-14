interface LoadMore {
  handleLoadMore: () => void;
}

const LoadMoreBtn = ({ handleLoadMore }: LoadMore) => {
  const handleClick = () => {
    handleLoadMore();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="block mx-auto mb-8 rounded-xl h-10 px-4 bg-blue-800 text-white outline-none">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
