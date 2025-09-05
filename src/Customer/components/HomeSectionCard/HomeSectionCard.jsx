import React from 'react';

const HomeSectionCard = ({ cover, title, author, year }) => {
  return (
    <div
      className={`
        cursor-pointer flex flex-col items-center
        bg-white rounded-lg shadow-lg overflow-hidden
        w-[15rem] h-[22rem] mx-1
        transition-transform duration-300 ease-in-out
        border-2 border-surface
        hover:scale-125 hover:z-50 hover:shadow-2xl 
        relative
      `}
      style={{
        willChange: 'transform',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <div className="h-[13rem] w-[10rem] overflow-hidden">
        <img className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-105" src={cover} alt={title} />
      </div>
      <div className="p-4 min-h-[5.5rem] flex flex-col justify-center w-full">
        <h3 className="text-lg font-medium text-primary line-clamp-2">{title}</h3>
        <p className="mt-2 text-sm text-secondary truncate">by {author} ({year})</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
