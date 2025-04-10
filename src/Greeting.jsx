import PropTypes from 'prop-types';

const Greeting = ({prop}) => {
  return (
    <>
      <h1>Tervë, {prop}</h1>,
      <button onClick={() => alert('klikkasit')}>nappï</button>
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  prop: PropTypes.object.isRequired,
  test: PropTypes.string,
};

export default Greeting;
