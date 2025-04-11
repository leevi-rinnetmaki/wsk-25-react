const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  const handleClick = () => {
    setSelectedItem(null);
  };
  return (
    item && (
      <>
        <dialog open={item}>
          <button onClick={handleClick}>&#10005;</button>
          (item.media_type.includes('video') ? (
          <video controls src={item.filename} alt={item.title} />; ) : (
          <img src={item.filename} alt={item.title} />
          ));
          <h3>Mihnuen Tïttelï!</h3>
          <p>{item.description}</p>
        </dialog>
      </>
    )
  );
};
export default SingleView;
