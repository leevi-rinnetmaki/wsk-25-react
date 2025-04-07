import PropTypes from 'prop-types';

const Greeting = ({ prop }) => {
    return (
        <h1>Tervë, {prop}</h1>,
        <button onClick={(()=>alert("klikkasit"))}>nappï</button>
    );
};


Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;


/*
import PropTypes from 'prop-types';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
*/