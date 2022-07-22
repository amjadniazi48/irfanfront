import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, locale: ctx?.locale || 'en' }
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === 'ur-PK' ? 'rtl' : 'ltr';
    <Html dir={this.props.locale === 'ur-PK' ? 'rtl': 'ltr'} lang={this.props.locale} />
    return (
      <Html lang={locale} dir={dir}>
       
        <Head />

        <body className="home blog wp-custom-logo full-width" > 
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument