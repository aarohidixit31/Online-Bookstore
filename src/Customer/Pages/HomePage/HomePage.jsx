import React from 'react'
import Carousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCaro from '../../components/HomeSectionCaro/HomeSectionCaro'
import { fictionBooks } from '../../../data/fictionBooks'
import { feelGoodBooks } from '../../../data/feelGoodBooks'
import { academicBooks } from '../../../data/academicBooks'

const HomePage = () => {
  return (
    <div className="bg-surface min-h-screen">
      <Carousel/>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCaro
        //   heading={<span className="text-3xl font-bold text-primary">Fiction</span>}
          description={<span className="text-2xl ml-12 font-bold text-error">Fiction 🫡: Discover timeless classics and beloved modern novels.</span>}
          books={fictionBooks}
        />
        <HomeSectionCaro
          // heading={<span className="text-3xl font-bold text-primary">Feel-Good Books</span>}
          description={<span className="text-2xl ml-12 font-bold text-error">Feel-Good Books ✨: Uplifting, heartwarming reads for every mood.</span>}
          books={feelGoodBooks}
        />
        <HomeSectionCaro
          // heading={<span className="text-3xl font-bold text-primary">Educational</span>}
          description={<span className="text-2xl ml-12 font-bold text-error ">Educational 👩‍🎓: Essential reads to inspire and inform students and life-long learners.</span>}
          books={academicBooks}
        />
      </div>
    </div>
  )
}
export default HomePage
