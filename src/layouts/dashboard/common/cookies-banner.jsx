import { useState } from "react";

import Stack from '@mui/material/Stack';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useCookie from "src/hooks/use-cookie";
import { useTranslation } from "react-i18next";



export default function CookiesBanner() {
  const { t } = useTranslation('translation', { keyPrefix: 'cookie' })
  
  const [cookie, addToCookies] = useCookie('cookie-acceptance');
  const [showBanner, setShowBanner] = useState(cookie !== 'true');
  if (!showBanner) return null;
  const handleAccept = () => {
    setShowBanner(false);
    addToCookies('cookie-acceptance', true, {path: '/', expDays: 7});
  }
  const handleDecline = () => {
    setShowBanner(false);
  }
  return (
    <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Fade appear={false} in={showBanner}>
          <Paper
            role="dialog"
            aria-modal="false"
            aria-label="Cookie banner"
            square
            variant="outlined"
            tabIndex={-1}
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              m: 0,
              p: 2,
              borderWidth: 0,
              borderTopWidth: 1,
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              gap={2}
            >
              <Box
                sx={{
                  flexShrink: 1,
                  alignSelf: { xs: 'flex-start', sm: 'center' },
                }}
              >
                <Typography variant="body2">
                  {t('message')}
                </Typography>
              </Box>
              <Stack
                gap={2}
                direction={{
                  xs: 'row-reverse',
                  sm: 'row',
                }}
                sx={{
                  flexShrink: 0,
                  alignSelf: { xs: 'flex-end', sm: 'center' },
                }}
              >
                <Button size="small" onClick={handleAccept} variant="contained">
                  {t('accept')}
                </Button>
                <Button size="small" onClick={handleDecline}>
                  {t('reject')}
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Fade>
      </TrapFocus>
  );
}