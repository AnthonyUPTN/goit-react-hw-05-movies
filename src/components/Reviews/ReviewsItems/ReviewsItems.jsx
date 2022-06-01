import PropTypes from 'prop-types';

import s from './reviewsItems.module.css';

function ReviewsItems({ data } = []) {
  const elements = data.map(el => (
    <li key={el.id} className={s.item}>
      <h3 className={s.author}>Author: {el.author}</h3>
      <p>{el.content}</p>
    </li>
  ));
  return <ul className={s.list}>{elements}</ul>;
}

export default ReviewsItems;

ReviewsItems.dafaultProps = {
  data: [],
};

ReviewsItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
