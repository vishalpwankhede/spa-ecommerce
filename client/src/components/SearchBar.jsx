function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by SKU or Title..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
export default SearchBar;