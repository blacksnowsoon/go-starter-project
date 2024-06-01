import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  
  // -------------------------------------------------------
  const logo = (
    <Box
      component="img"
      src="/go.svg" 
      sx={{ width: 50, height: 50, alignSelf: 'center', cursor: 'pointer', ...sx }}
      {...other}
      ref={ref}
    />
  );


  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.displayName = 'Logo'

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
