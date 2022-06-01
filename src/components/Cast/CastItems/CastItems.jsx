import PropTypes from 'prop-types';

import POSTER from 'images/no-poster.jpg';

const CastItems = ({ data }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const elements = data.map(el => (
    <li key={el.id}>
      {el.profile_path ? (
        <img src={IMG_URL + el.profile_path} alt={el.name} />
      ) : (
        <img src={POSTER} alt="no poster" />
      )}

      <p>{el.original_name}</p>
      <p>Charaсter: {el.character}</p>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default CastItems;

CastItems.dafaultProps = {
  data: [],
};

CastItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
