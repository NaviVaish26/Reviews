import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Person = ({
  id,
  name,
  job,
  image,
  text,
  prevPerson,
  nextPerson,
  randomPerson,
}) => {
  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={prevPerson} type='button'>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson} type='button'>
          <FaChevronRight />
        </button>
      </div>
      <button className='btn btn-hipster' type='button' onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Person;
