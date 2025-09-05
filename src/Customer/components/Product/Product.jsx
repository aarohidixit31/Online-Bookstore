'use client'
import React, { useState, useEffect } from "react";
import BookFilterSidebar from "./BookFilterSidebar";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 12;

// 40 books: covers/authors/genres real, ISBN covers from OpenLibrary or Unsplash
const books = [
  // --- Fiction ---
  {
    id: 1,
    cover: "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling", price: 399, rating: 4.8, ratingCount: 4208, badge: "Bestseller",
    inStock: true, genre: "Fiction", format: ["Hardcover", "Ebook"], discount: true,
  },
  {
    id: 2,
    cover: "https://covers.openlibrary.org/b/isbn/9780141331973-L.jpg",
    title: "The Fault in Our Stars",
    author: "John Green", price: 349, rating: 4.5, ratingCount: 3000, badge: "Readers' Choice",
    inStock: false, genre: "Fiction", format: ["Paperback"], discount: false,
  },
  {
    id: 3,
    cover: "https://covers.openlibrary.org/b/isbn/9780307277671-L.jpg",
    title: "Kafka on the Shore",
    author: "Haruki Murakami", price: 499, rating: 4.3, ratingCount: 1877, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback", "Hardcover"], discount: true,
  },
  {
    id: 4,
    cover: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee", price: 319, rating: 4.8, ratingCount: 4633, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback", "Ebook"], discount: false,
  },
  {
    id: 5,
    cover: "https://covers.openlibrary.org/b/isbn/9780143039433-L.jpg",
    title: "1984",
    author: "George Orwell", price: 250, rating: 4.9, ratingCount: 4907, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback", "Hardcover", "Ebook"], discount: true,
  },
  {
    id: 6,
    cover: "https://covers.openlibrary.org/b/isbn/9780374531263-L.jpg",
    title: "The Kite Runner",
    author: "Khaled Hosseini", price: 279, rating: 4.7, ratingCount: 5700, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback"], discount: true,
  },
  {
    id: 7,
    cover: "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg",
    title: "Dune",
    author: "Frank Herbert", price: 389, rating: 4.6, ratingCount: 2462, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback", "Hardcover"], discount: false,
  },
  {
    id: 8,
    cover: "https://covers.openlibrary.org/b/isbn/9781408855652-L.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling", price: 399, rating: 4.8, ratingCount: 4309, badge: "Bestseller",
    inStock: true, genre: "Fiction", format: ["Paperback", "Hardcover"], discount: false,
  },
  {
    id: 9,
    cover: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    title: "Great Expectations",
    author: "Charles Dickens", price: 220, rating: 4.2, ratingCount: 2199, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback"], discount: true,
  },
  {
    id: 10,
    cover: "https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg",
    title: "The Odyssey",
    author: "Homer", price: 499, rating: 4.0, ratingCount: 990, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback", "Ebook"], discount: true,
  },

  // --- Comics & Graphic Novels ---
  {
    id: 11,
    cover: "https://covers.openlibrary.org/b/isbn/9780545162075-L.jpg",
    title: "Smile",
    author: "Raina Telgemeier", price: 269, rating: 4.7, ratingCount: 801, badge: "Award Winner",
    inStock: true, genre: "Comics & Graphic Novels", format: ["Paperback"], discount: false,
  },
  {
    id: 12,
    cover: "https://covers.openlibrary.org/b/isbn/9781401280779-L.jpg",
    title: "Batman: Year One",
    author: "Frank Miller", price: 389, rating: 4.5, ratingCount: 342, badge: "",
    inStock: true, genre: "Comics & Graphic Novels", format: ["Paperback"], discount: true,
  },
  {
    id: 13,
    cover: "https://covers.openlibrary.org/b/isbn/9781302900587-L.jpg",
    title: "Civil War",
    author: "Mark Millar", price: 299, rating: 4.2, ratingCount: 195, badge: "",
    inStock: true, genre: "Comics & Graphic Novels", format: ["Paperback", "Ebook"], discount: true,
  },
  {
    id: 14,
    cover: "https://covers.openlibrary.org/b/isbn/9780785151724-L.jpg",
    title: "Deadpool: The Complete Collection",
    author: "Daniel Way", price: 525, rating: 4.3, ratingCount: 221, badge: "",
    inStock: true, genre: "Comics & Graphic Novels", format: ["Paperback"], discount: false,
  },

  // --- Kids & Teens ---
  {
    id: 15,
    cover: "https://covers.openlibrary.org/b/isbn/9780060838676-L.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown", price: 180, rating: 4.9, ratingCount: 3387, badge: "",
    inStock: false, genre: "Kids & Teens", format: ["Hardcover"], discount: false,
  },
  {
    id: 16,
    cover: "https://covers.openlibrary.org/b/isbn/9780142415436-L.jpg",
    title: "Looking for Alaska",
    author: "John Green", price: 215, rating: 4.1, ratingCount: 1843, badge: "",
    inStock: true, genre: "Kids & Teens", format: ["Paperback"], discount: false,
  },
  {
    id: 17,
    cover: "https://covers.openlibrary.org/b/isbn/9780141320946-L.jpg",
    title: "Matilda",
    author: "Roald Dahl", price: 179, rating: 4.8, ratingCount: 3807, badge: "",
    inStock: true, genre: "Kids & Teens", format: ["Paperback", "Hardcover"], discount: true,
  },
  {
    id: 18,
    cover: "https://covers.openlibrary.org/b/isbn/9780439139601-L.jpg",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling", price: 450, rating: 4.7, ratingCount: 3991, badge: "",
    inStock: true, genre: "Kids & Teens", format: ["Paperback", "Hardcover"], discount: true,
  },

  // --- Non-Fiction ---
  {
    id: 19,
    cover: "https://covers.openlibrary.org/b/isbn/9788172235147-L.jpg",
    title: "Wise and Otherwise",
    author: "Sudha Murty", price: 199, rating: 4.4, ratingCount: 355, badge: "",
    inStock: true, genre: "Non-Fiction", format: ["Paperback"], discount: false,
  },
  {
    id: 20,
    cover: "https://covers.openlibrary.org/b/isbn/9781846144047-L.jpg",
    title: "Justice: What’s the Right Thing to Do?",
    author: "Michael J. Sandel", price: 399, rating: 4.3, ratingCount: 405, badge: "",
    inStock: true, genre: "Non-Fiction", format: ["Paperback"], discount: false,
  },
  {
    id: 21,
    cover: "https://covers.openlibrary.org/b/isbn/9780143131847-L.jpg",
    title: "Educated",
    author: "Tara Westover", price: 390, rating: 4.7, ratingCount: 1600, badge: "",
    inStock: false, genre: "Academic", format: ["Paperback", "Ebook"], discount: false,
  },
  {
    id: 22,
    cover: "https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg",
    title: "The Life-Changing Magic of Tidying Up",
    author: "Marie Kondo", price: 379, rating: 4.4, ratingCount: 1427, badge: "",
    inStock: true, genre: "Non-Fiction", format: ["Paperback", "Hardcover"], discount: true,
  },
  {
    id: 23,
    cover: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl", price: 320, rating: 4.7, ratingCount: 2157, badge: "",
    inStock: true, genre: "Non-Fiction", format: ["Paperback"], discount: false,
  },
  {
    id: 24,
    cover: "https://covers.openlibrary.org/b/isbn/9780609806973-L.jpg",
    title: "The Art of Happiness",
    author: "Dalai Lama", price: 278, rating: 4.6, ratingCount: 871, badge: "",
    inStock: true, genre: "Non-Fiction", format: ["Paperback"], discount: false,
  },
  {
    id: 25,
    cover: "https://covers.openlibrary.org/b/isbn/9780375703768-L.jpg",
    title: "Into the Wild",
    author: "Jon Krakauer", price: 240, rating: 4.2, ratingCount: 1602, badge: "",
    inStock: true, genre: "Non-Fiction", format: ["Paperback"], discount: true,
  },

  // --- Art & Photography ---
  {
    id: 26,
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Photo Art",
    author: "Sean Grant", price: 699, rating: 4.6, ratingCount: 119, badge: "Editor's Pick",
    inStock: false, genre: "Art & Photography", format: ["Hardcover"], discount: false,
  },
  {
    id: 27,
    cover: "https://images.unsplash.com/photo-1455885664032-3c361ad3cfa2?auto=format&fit=crop&w=400&q=80",
    title: "Comic Book Art",
    author: "John Artist", price: 429, rating: 4.2, ratingCount: 166, badge: "",
    inStock: true, genre: "Art & Photography", format: ["Paperback"], discount: true,
  },

  // --- Feel-Good ---
  {
    id: 28,
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
    title: "Feel-Good Stories",
    author: "Priya Desai", price: 159, rating: 4.3, ratingCount: 92, badge: "",
    inStock: true, genre: "Feel-Good", format: ["Paperback", "Ebook"], discount: true,
  },
  {
    id: 29,
    cover: "https://covers.openlibrary.org/b/isbn/9781501128035-L.jpg",
    title: "The Unhoneymooners",
    author: "Christina Lauren", price: 279, rating: 4.1, ratingCount: 280, badge: "",
    inStock: true, genre: "Feel-Good", format: ["Paperback", "Ebook"], discount: true,
  },
  {
    id: 30,
    cover: "https://covers.openlibrary.org/b/isbn/9781455509124-L.jpg",
    title: "Wonder",
    author: "R.J. Palacio", price: 360, rating: 4.8, ratingCount: 1817, badge: "",
    inStock: true, genre: "Feel-Good", format: ["Paperback"], discount: false,
  },

  // --- Academic ---
  {
    id: 31,
    cover: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen", price: 1199, rating: 4.8, ratingCount: 2100, badge: "Academic",
    inStock: true, genre: "Academic", format: ["Hardcover", "Ebook"], discount: false,
  },
  {
    id: 32,
    cover: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam", price: 299, rating: 4.6, ratingCount: 2709, badge: "Bestseller",
    inStock: true, genre: "Academic", format: ["Paperback", "Ebook"], discount: true,
  },
  {
    id: 33,
    cover: "https://covers.openlibrary.org/b/isbn/9788172235147-L.jpg",
    title: "The Power of Now",
    author: "Eckhart Tolle", price: 480, rating: 4.6, ratingCount: 3100, badge: "",
    inStock: true, genre: "Academic", format: ["Paperback"], discount: false,
  },
  {
    id: 34,
    cover: "https://covers.openlibrary.org/b/isbn/9780140187397-L.jpg",
    title: "A Brief History of Time",
    author: "Stephen Hawking", price: 350, rating: 4.8, ratingCount: 2590, badge: "",
    inStock: true, genre: "Academic", format: ["Paperback", "Ebook"], discount: true,
  },

  // --- Religion/Spiritual ---
  {
    id: 35,
    cover: "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg",
    title: "Bhagavad Gita",
    author: "Vyasa", price: 199, rating: 4.9, ratingCount: 4490, badge: "",
    inStock: true, genre: "Religion/Spiritual", format: ["Paperback"], discount: false,
  },
  {
    id: 36,
    cover: "https://covers.openlibrary.org/b/isbn/9780835609792-L.jpg",
    title: "The Dhammapada",
    author: "Buddha", price: 150, rating: 4.7, ratingCount: 1234, badge: "",
    inStock: true, genre: "Religion/Spiritual", format: ["Paperback"], discount: false,
  },
  {
    id: 37,
    cover: "https://covers.openlibrary.org/b/isbn/9781400074988-L.jpg",
    title: "Siddhartha",
    author: "Hermann Hesse", price: 175, rating: 4.5, ratingCount: 1789, badge: "",
    inStock: true, genre: "Religion/Spiritual", format: ["Paperback", "Ebook"], discount: true,
  },
  {
    id: 38,
    cover: "https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg",
    title: "The Book of Awakening",
    author: "Mark Nepo", price: 269, rating: 4.4, ratingCount: 816, badge: "",
    inStock: true, genre: "Religion/Spiritual", format: ["Paperback"], discount: true,
  },

  // --- Miscellaneous (for diversity) ---
  {
    id: 39,
    cover: "https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg",
    title: "The Life-Changing Magic of Tidying Up",
    author: "Marie Kondo", price: 379, rating: 4.4, ratingCount: 1427, badge: "",
    inStock: true, genre: "Non-Fiction", format: ["Paperback", "Hardcover"], discount: true,
  },
  {
    id: 40,
    cover: "https://covers.openlibrary.org/b/isbn/9788184001654-L.jpg",
    title: "Revolution 2020",
    author: "Chetan Bhagat", price: 180, rating: 4.0, ratingCount: 2400, badge: "",
    inStock: true, genre: "Fiction", format: ["Paperback"], discount: true,
  },
];

const applyFilters = (books, filters) => {
  return books.filter(book => {
    if (filters.title && !book.title.toLowerCase().includes(filters.title.toLowerCase())) return false;
    if (filters.author && !book.author.toLowerCase().includes(filters.author.toLowerCase())) return false;
    if (filters.format && filters.format.length && !filters.format.some(f=>book.format.includes(f))) return false;
    if (filters.genre && book.genre !== filters.genre) return false;
    if (filters.minPrice && book.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && book.price > Number(filters.maxPrice)) return false;
    if (filters.discount && !book.discount) return false;
    if (filters.rating && book.rating < Number(filters.rating)) return false;
    if (filters.inStock && !book.inStock) return false;
    return true;
  });
};

const Product = () => {
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  const filteredBooks = applyFilters(books, filters);
  const totalPages = Math.ceil(filteredBooks.length / PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const paginatedBooks = filteredBooks.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="bg-surface min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 px-2 lg:px-6 pt-4 lg:pt-10 lg:mt-10">
        <BookFilterSidebar filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex-1 p-4 lg:p-10 flex flex-col min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-primary">Browse All Books</h1>
        <div className="flex flex-wrap">
          {paginatedBooks.length > 0 ? (
            paginatedBooks.map(book => (
              <ProductCard key={book.id} {...book} />
            ))
          ) : (
            <div className="text-xl text-error">No books match your filters.</div>
          )}
        </div>
        {totalPages > 1 && (
          <div className="w-full flex justify-center items-center mt-12 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx + 1)}
                className={`w-9 h-9 rounded border font-bold transition
                  ${page === idx + 1
                    ? "bg-primary text-white border-primary"
                    : "bg-surface text-primary border-accent hover:bg-accent hover:text-white"}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
