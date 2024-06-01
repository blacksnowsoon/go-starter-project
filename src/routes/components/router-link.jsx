import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

// forwarding the Link to assign a ref
// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ href, ...other }, ref) => <Link ref={ref} to={href} {...other} />);

RouterLink.propTypes = {
  href: PropTypes.string,
};
RouterLink.displayName = 'RouterLink'
export default RouterLink;
