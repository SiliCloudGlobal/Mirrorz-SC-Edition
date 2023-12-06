import style9 from 'style9';
import { Layout } from '../components/layout';
import { Paragraph } from '../components/mdx-components/block';
import Link from 'next/link';
import SeoHead from '../components/seo/head';
import ExternalLink from '../components/external-link';
import { issueUrl } from '../lib/client/constant';

const styles = style9.create({
  main: {
    marginTop: '32px',
    marginBottom: '32px',
    '@media screen and (min-width: 840px)': {
      marginTop: '40px',
      marginBottom: '40px'
    }
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: '24px',
    color: 'var(--text-primary)'
  },
  content: {
    fontSize: 18
  },
  link: {
    color: 'var(--text-link)',
    display: 'inline',
    borderBottomWidth: '1px',
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    transitionDuration: '100ms',
    transitionProperty: 'color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
    lineHeight: 1.5,
    ':hover': {
      borderBottomColor: 'var(--text-link)'
    }
  }
});

export default function ServerErrorPage() {
  return (
    <>
      <SeoHead
        title="500 Internal Server Error"
      />
      <Layout>
        <div className={styles('main')}>
          <h1 className={styles('title')}>500 Internal Server Error</h1>
          <article className={styles('content')}>
            <Paragraph>
              The server encountered an error while processing your request.
            </Paragraph>
            <Paragraph>
              You can also report issues via <ExternalLink href={issueUrl} className={styles('link')}>GitHub</ExternalLink>, or return to the <Link href="/" className={styles('link')}>Homepage</Link>.
            </Paragraph>
          </article>
        </div>
      </Layout>
    </>
  );
}
