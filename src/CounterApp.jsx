import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <div xs={12} className="pt-2">
        <Button 
          aria-label="btn-add"
          className="me-2" 
          variant="primary" 
          onClick={ handleAdd }
        >
          +1
        </Button>
        <Button 
          aria-label="btn-subtract"
          className="me-2" 
          variant="danger" 
          onClick={ handleSubtract }
        >
          -1
        </Button>
        <Button 
          aria-label="btn-reset"
          className="me-2" 
          variant="info" 
          onClick={ handleReset }
        >
          Reset
        </Button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
  value: 0
};