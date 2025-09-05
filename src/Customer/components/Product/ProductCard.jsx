import React from "react";

const ProductCard = ({
  cover,
  title,
  author,
  price,
  rating,
  ratingCount,
  badge,
  inStock,
}) => (
  <div className="w-[15rem] m-3 bg-white rounded-xl shadow hover:shadow-2xl transition-transform duration-300 overflow-hidden group hover:scale-105 cursor-pointer relative border">
    <div className="h-[20rem] relative">
      <img
        className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
        src={cover}
        alt={title}
      />
      {badge && (
        <span className="absolute top-2 left-2 bg-accent text-xs text-white px-2 py-1 rounded font-bold">
          {badge}
        </span>
      )}
      {!inStock && (
        <span className="absolute bottom-2 left-2 bg-error text-xs text-white px-2 py-1 rounded font-bold">
          Out of Stock
        </span>
      )}
    </div>
    <div className="p-4 flex flex-col gap-1">
      <p className="font-bold text-primary text-lg line-clamp-2">{title}</p>
      <p className="text-secondary text-sm mb-1">by {author}</p>
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-success text-white text-xs px-2 py-0.5 rounded">{rating}★</span>
        <span className="text-xs text-gray-400">({ratingCount})</span>
      </div>
      <p className="font-semibold text-accent text-xl mb-2">₹{price}</p>
      <button
        disabled={!inStock}
        className={`bg-primary text-white py-2 rounded hover:bg-accent transition-colors text-sm font-bold
          ${!inStock ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  </div>
);

export default ProductCard;
