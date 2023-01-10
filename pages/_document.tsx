import { NextPage } from 'next'
import { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Document from 'next/document'

const Doc: NextPage = ()=>{
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Extra+Condensed:wght@400;500;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Doc.getInitialProps =async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    }
  } finally {
    sheet.seal()
  }
  
}

export default Doc;
