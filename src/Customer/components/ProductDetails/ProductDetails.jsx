import { StarIcon } from '@heroicons/react/20/solid'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ProductReviewCard from "./ProductReviewCard";
import { academicBooks } from '../../../data/academicBooks';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { feelGoodBooks } from '../../../data/feelGoodBooks';
import { fictionBooks } from '../../../data/fictionBooks';
import { useNavigate } from 'react-router-dom';




const product = {
  name: 'The Great Gatsby',
  price: 'Rs. 499',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Books', href: '#' },
    { id: 2, name: 'Fiction', href: '#' },
  ],
  images: [
    {
      src: 'https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg',
      alt: 'Cover of The Great Gatsby',
    },
    {
      src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6tWgqa5DSnJkRqaieDTLzPQ9zAd1I4Oa9DoeKPe9uLlZ2PLKILCEuB1ZObPLfix3aERII6QksVwK56K2Aqg4JHSW_jg_5DhTuV4LtCB0P_b9yU8xTDmuiyJZjiS9bgSXwTyeY4PccOTmW/s1600/sothebys2.jpg',
      alt: 'Back cover of The Great Gatsby',
    },
    {
      src: 'https://manhattanrarebooks.cdn.bibliopolis.com/pictures/2778.jpg?auto=webp&v=1697741543',
      alt: 'Open book showing pages of The Great Gatsby',
    },
  ],
  description:
    'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
  highlights: [
    'Classic American literature',
    'F. Scott Fitzgerald’s masterpiece',
    'Includes critical essays and annotations',
  ],
  details:
    'First published in 1925, this edition contains a new introduction by a renowned literary critic, extensive footnotes, and high-quality print on acid-free paper.',
  author: 'F. Scott Fitzgerald',
  publisher: 'Scribner',
  language: 'English',
  isbn: '9780743273565',
  formats: [
    { name: 'Hardcover', available: true },
    { name: 'Paperback', available: true },
    { name: 'Kindle', available: true },
    { name: 'Audiobook', available: false },
  ],
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const navigate = useNavigate();
  const handleAddToCart=() =>{
    navigate("/cart")
  }
  return (
    <div className="bg-white lg:px-20 py-10">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
{/* Image gallery */}
        <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                <img
                    alt={product.images[0].alt}
                    src={product.images[0].src}
                    className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
                />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
                {product.images.map((item)=><div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                    <img
                        alt={item.alt}
                        src={item.src}
                        className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                    />
                </div>)}
            </div>
        </div>    
{/* {Product Info} */}
<div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 text-left">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{product.name}</h1>
              <h2 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>by {product.author}</h2>
            </div>
            

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>Rs.199</p>
                <p className='opacity-50 line-through'>Rs.211</p>
                <p className='text-green-600 font-semibold'>5% off</p>
            </div>
            {/* Reviews */}
            <div className="mt-6">
                <div className='flex items-center space-x-3'>
                    <Rating name="read-only" value={5.5} readOnly />
                    <p className='opacity-50 text-sm'>56540 Ratings</p>
                    <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>3870 Reviews</p>
                </div>
            </div>

            <form className="mt-10">

              <Button onClick={handleAddToCart} variant='contained' sx={{px:"2rem",py:"1rem",bgcolor:"#9155fd"}}>
                Add to Cart
              </Button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>   
        </section>
        {/* {rating and reviews} */}
        <section>
            <h1 className='font-semibold text-lg pb-4'>Recent Review & Rating</h1>
            
            <div className='border p-5'>
                <div className="flex flex-col lg:flex-row justify-between gap-8">

                {/* LEFT - REVIEWS */}
                <div className="flex-1 space-y-5">
                    {[1, 1, 1].map((item, index) => (
                    <ProductReviewCard key={index} />
                    ))}
                </div>

                {/* RIGHT - PRODUCT RATINGS */}
                <div className="w-full lg:w-1/3">
                    <div className="flex flex-col items-start text-left space-y-3">
                    <h1 className='text-xl font-semibold'>Product Ratings</h1>

                    <div className='flex items-center space-x-2'>
                        <Rating value={4.6} precision={0.5} readOnly />
                        <p className='text-gray-500'>54890 Ratings</p>
                    </div>

                    {/* Rating bars */}
                    {/* <Box className="mt-5">
                    <Grid container justifyContent="center" gap={2}>
                        <Grid Item xs={2}>
                        <p>Excellent</p>
                        </Grid>
                        <Grid item xs={7}>
                        <LinearProgress />
                        </Grid>
                    </Grid>
                    </Box> */}

                    <div className="w-full space-y-3 pt-4">
                        {[
                            { label: "Excellent", value: 70, count: 19259, barColor: "#1f7a1f" },       // dark green
                            { label: "Very Good", value: 60, count: 19259, barColor: "#4CAF50" },      // light green
                            { label: "Good", value: 50, count: 19259, barColor: "#2196F3" },           // blue
                            { label: "Average", value: 30, count: 19259, barColor: "#FF5722" },        // orange
                            { label: "Poor", value: 10, count: 19259, barColor: "#F44336" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between gap-4">
                            {/* Label */}
                            <span className="w-[90px] text-sm text-gray-700">{item.label}</span>

                            {/* Progress bar */}
                            <div className="flex-1">
                                <LinearProgress
                                variant="determinate"
                                value={item.value}
                                sx={{
                                    bgcolor: "#d0d0d0",
                                    borderRadius: 4,
                                    height: 8,
                                    "& .MuiLinearProgress-bar": {
                                    backgroundColor: item.barColor,
                                    },
                                }}
                                />
                            </div>

                            {/* Count */}
                            <span className="w-[60px] text-sm text-gray-700 text-right">{item.count}</span>
                            </div>
                        ))}
                        </div>


                    </div>
                </div>

                </div>
            </div>
        </section>
        {/* similar products */}
        <section className='pt-10'>
            <h1 className='py-5 text-xl font-bold'>Similar Products</h1>
            <div className='flex flex-wrap gap-x-5 gap-y-5 justify-center '>
                {academicBooks.map((item, index) => (
                    <HomeSectionCard
                    key={index}
                    cover={item.cover}
                    title={item.title}
                    author={item.author}
                    year={item.year}
                    />
                ))}
                {feelGoodBooks.map((item, index) => (
                    <HomeSectionCard
                    key={index}
                    cover={item.cover}
                    title={item.title}
                    author={item.author}
                    year={item.year}
                    />
                ))}
                {fictionBooks.map((item, index) => (
                    <HomeSectionCard
                    key={index}
                    cover={item.cover}
                    title={item.title}
                    author={item.author}
                    year={item.year}
                    />
                ))}
                
            </div>
        </section>
      </div>
    </div>
  );
}
