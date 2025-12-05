import React, {useEffect} from 'react';

import PropTypes from 'prop-types';

import './button.css';
import { action } from 'storybook/actions';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  useEffect(() => {
    action('console.info')('Button', primary)
    console.info('Button', primary)
    console.log('Button', primary)
    console.warn('Button', primary)
    console.error('Button', primary)
  }, [primary])

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
      onClick={() => {
        console.log('Button clicked')
      }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
