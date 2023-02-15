import css from './Button.module.css';
export const Button = ({ loadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={loadMore}>
      Load more
    </button>
  );
};
