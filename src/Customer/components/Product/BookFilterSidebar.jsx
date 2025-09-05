import React from "react";

const formats = ["Paperback", "Hardcover", "Ebook", "Audiobook"];
const genres = [
  "Fiction", "Non-Fiction", "Comics & Graphic Novels", "Art & Photography",
  "Academic", "Kids & Teens", "Feel-Good", "Religion/Spiritual"
];

const fieldBlock =
  "w-full mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0";

const labelClass =
  "block font-semibold text-sm text-primary mb-2 tracking-wide";

const inputClass =
  "border border-gray-300 rounded w-full px-3 py-2 text-sm focus:outline-accent bg-white";

const BookFilterSidebar = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };

  const handleMultiSelect = (name, value) => {
    setFilters((prev) => {
      const arr = prev[name] || [];
      if (arr.includes(value)) {
        return { ...prev, [name]: arr.filter((v) => v !== value) };
      } else {
        return { ...prev, [name]: [...arr, value] };
      }
    });
  };

  return (
    <aside className="bg-surface rounded-xl shadow-lg px-6 py-8 w-full max-w-xs flex flex-col items-start min-h-screen border border-gray-200">
      {/* Title */}
      <div className={fieldBlock}>
        <label className={labelClass} htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Search by title..."
          value={filters.title || ""}
          onChange={handleInputChange}
          className={inputClass}
        />
      </div>
      {/* Author */}
      <div className={fieldBlock}>
        <label className={labelClass} htmlFor="author">Author</label>
        <input
          id="author"
          name="author"
          type="text"
          placeholder="Search by author..."
          value={filters.author || ""}
          onChange={handleInputChange}
          className={inputClass}
        />
      </div>
      {/* Format */}
      <div className={fieldBlock}>
        <label className={labelClass}>Format</label>
        <div className="flex flex-col gap-2">
          {formats.map((f) => (
            <label key={f} className="flex items-center gap-2 text-sm font-normal text-secondary">
              <input
                type="checkbox"
                checked={(filters.format || []).includes(f)}
                onChange={() => handleMultiSelect("format", f)}
                className="accent-accent"
              />
              <span>{f}</span>
            </label>
          ))}
        </div>
      </div>
      {/* Genre */}
      <div className={fieldBlock}>
        <label className={labelClass} htmlFor="genre">Genre/Category</label>
        <select
          id="genre"
          name="genre"
          value={filters.genre || ""}
          onChange={handleInputChange}
          className={inputClass}
        >
          <option value="">All</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>
      {/* Price Range */}
      <div className={fieldBlock}>
        <label className={labelClass}>Price Range</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Min"
            value={filters.minPrice || ""}
            min={0}
            onChange={handleInputChange}
            className="w-20 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-accent bg-white"
          />
          <span className="text-tertiary">-</span>
          <input
            type="number"
            name="maxPrice"
            placeholder="Max"
            value={filters.maxPrice || ""}
            min={0}
            onChange={handleInputChange}
            className="w-20 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-accent bg-white"
          />
        </div>
      </div>
      {/* Discount */}
      <div className={fieldBlock}>
        <label className={labelClass}>Discounted</label>
        <label className="flex items-center gap-2 text-secondary text-sm font-normal">
          <input
            type="checkbox"
            name="discount"
            checked={filters.discount || false}
            onChange={handleCheckboxChange}
            className="accent-accent"
          />
          Only show discounted
        </label>
      </div>
      {/* In Stock */}
      <div className={fieldBlock}>
        <label className={labelClass}>Availability</label>
        <label className="flex items-center gap-2 text-secondary text-sm font-normal">
          <input
            type="checkbox"
            name="inStock"
            checked={filters.inStock || false}
            onChange={handleCheckboxChange}
            className="accent-accent"
          />
          In stock only
        </label>
      </div>
    </aside>
  );
};

export default BookFilterSidebar;
