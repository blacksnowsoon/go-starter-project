import { Helmet } from 'react-helmet-async'
import { NotFoundView } from 'src/sections/error'


function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <NotFoundView />
    </>
  )
}

export default NotFoundPage
