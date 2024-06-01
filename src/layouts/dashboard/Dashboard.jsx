import { useState } from 'react';
import PropTypes from 'prop-types';

import {Box} from '@mui/material';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import { CookiesBanner } from './common';
import useCookie from 'src/hooks/use-cookie';
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const [cookie] = useCookie('cookie-acceptance');
  

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
        {
          cookie ? null : <CookiesBanner />
        }
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

