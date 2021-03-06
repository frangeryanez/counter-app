import PropTypes from 'prop-types';

// const subtitle = 'Subtitle';

export const FirstApp = ({ greetings, subTitle }) => {
  // if (!greetings) throw new Error('The greetings does not exist');
  return (
    <>
      <h1 data-testid="test-title">{ greetings }</h1>
      <p data-testid="test-subtitle">{ subTitle }</p>
      <p data-testid="test-subtitle">{ subTitle }</p>
    </>
  );
};

FirstApp.propTypes = {
  greetings: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

FirstApp.defaultProps = {
  greetings: 'The greetings does not exist',
  subTitle: 'SubTitle'
};