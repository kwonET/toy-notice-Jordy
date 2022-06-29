import Document, { Head, Main, NextScript, Html} from 'next/document';

export default class RootDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}