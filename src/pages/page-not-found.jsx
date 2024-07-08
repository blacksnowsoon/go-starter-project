import { Helmet } from 'react-helmet-async'
import { NotFoundView } from 'src/sections/error'
import { useTranslation } from 'react-i18next'

function NotFoundPage() {
  const {t} = useTranslation('translation', { keyPrefix: 'error' })
  return (
    <>
      <Helmet>
        <title>{t('not_found')}</title>
      </Helmet>
      <NotFoundView />
    </>
  )
}

export default NotFoundPage
