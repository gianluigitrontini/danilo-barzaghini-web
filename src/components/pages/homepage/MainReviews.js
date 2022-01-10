import React, { useContext } from 'react';
import ReviewQuotes from '../../../assets/images/review-quotes.png';
import libro from '../../../assets/images/libro.png';
import { content } from '../../../data/content';
import { LangContext } from '../../../context/LangContext';

function MainReviews() {
  const { state } = useContext(LangContext);

  const ReviewBlock = ({ review }) => {
    return (
      <div className='flex items-start my-8 p-4 pb-0 hover:bg-gray-50'>
        <img className='w-8 mr-4 mt-2' src={ReviewQuotes} alt='' />
        <div>
          <p>{review.text}</p>
          <span className='block font-bold my-4'>{review.author}</span>
        </div>
      </div>
    );
  };
  return (
    <section>
      <h2 className='font-bold text-xl mt-8 text-center'>
        ~ They say about me ~
      </h2>
      <div className='container flex items-start justify-between'>
        <div className='flex-1'>
          {state.language === 'en'
            ? content.homepage.en.reviews.column1.map((review) => (
                <ReviewBlock review={review} />
              ))
            : state.language === 'de'
            ? content.homepage.de.reviews.column1.map((review) => (
                <ReviewBlock review={review} />
              ))
            : content.homepage.it.reviews.column1.map((review) => (
                <ReviewBlock review={review} />
              ))}
        </div>
        <div className='flex-1'>
          {state.language === 'en'
            ? content.homepage.en.reviews.column2.map((review) => (
                <ReviewBlock review={review} />
              ))
            : state.language === 'de'
            ? content.homepage.de.reviews.column2.map((review) => (
                <ReviewBlock review={review} />
              ))
            : content.homepage.it.reviews.column2.map((review) => (
                <ReviewBlock review={review} />
              ))}
        </div>
        <div className='flex-1'>
          <img src={libro} alt='' className='-mt-[60%]' />
          {state.language === 'en'
            ? content.homepage.en.reviews.column3.map((review) => (
                <ReviewBlock review={review} />
              ))
            : state.language === 'de'
            ? content.homepage.de.reviews.column3.map((review) => (
                <ReviewBlock review={review} />
              ))
            : content.homepage.it.reviews.column3.map((review) => (
                <ReviewBlock review={review} />
              ))}
        </div>
      </div>
    </section>
  );
}

export default MainReviews;
