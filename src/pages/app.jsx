import { Helmet } from "react-helmet-async"
import { AppView } from "src/sections/overview";


function app() {
  return (
    <>
      <Helmet >
        <title></title>
      </Helmet>
      <AppView />
    </>
  )
}

export default app