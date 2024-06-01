import { useState } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import { writeCookie } from 'src/utils/cookies';
// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'ar',
    label: 'arabic',
    icon: '/assets/icons/ic_flag_eg.svg',
  },
  {
    value: 'en',
    label: 'english',
    icon: '/assets/icons/ic_flag_en.svg',
  }
];

// ----------------------------------------------------------------------
 export default function LanguagePopover() {
  const { i18n, t } = useTranslation('translation', { keyPrefix: 'header' });
  const [open, setOpen] = useState(null);
  
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = (e) => {
    setOpen(null);
      i18n.changeLanguage(e);
      writeCookie('i18next', e, { path: '/', expDays: 7 });
  };

  
  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <img src={LANGS[i18n.language === 'ar' ? 0 : 1].icon} alt={LANGS[i18n.language === 'ar' ? 0 : 1].label} />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === LANGS[0].value}
            onClick={() => handleClose(option.value)}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

            {t(option.label)}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}

