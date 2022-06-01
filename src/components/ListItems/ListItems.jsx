import { Link } from 'react-router-dom';

import s from './listItems.module.css';

function ListItems({ data }) {
  const elements = data.map(({ id, title }) => (
    <li key={id} className={s.item}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));
  return <ul>{elements}</ul>;
}

export default ListItems;
