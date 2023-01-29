import css from './post-search-list.module.css';

const PostSearchList = ({ items }) => {
  console.log(items);
  const elements = items.map(({ id, title, body }) => (
    <li key={id} className={css.post}>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};

export default PostSearchList;

PostSearchList.defaultProps = {
  items: [],
};
