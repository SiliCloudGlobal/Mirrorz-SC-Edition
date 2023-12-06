import style9 from 'style9';
import { Layout } from '../components/layout';
import { Paragraph } from '../components/mdx-components/block';
import Link from 'next/link';
import { useSetSearchOpen } from '../contexts/search';
import { useCallback } from 'react';
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

export default function NotFoundPage() {
  const setSearchOpen = useSetSearchOpen();
  const handleSearchButtonClick = useCallback(() => {
    setSearchOpen(true);
  }, [setSearchOpen]);

  return (
    <>
      <SeoHead
        title="404 Not Found"
        noindex
      />
      <Layout>
        <div className={styles('main')}>
          <h1 className={styles('title')}>404 Page Not Found</h1>
          <article className={styles('content')}>
            <Paragraph>
              The page you are currently requesting does not exist.
            </Paragraph>
            <Paragraph>
              If you are looking for usage instructions for a software mirror, it's quite possible that this document has not been completed yet.
            </Paragraph>
            <Paragraph>
              You can try using the   
              {' '}
              <button onClick={handleSearchButtonClick} className={styles('link')} type="button">
                Search
              </button>
              {' '}
              to find the content you want to view, or return to the <Link href="/" className={styles('link')}>Homepage</Link>。
            </Paragraph>
            <Paragraph>
              You can also report issues via <ExternalLink href={issueUrl} className={styles('link')}> GitHub </ExternalLink>。
            </Paragraph>
          </article>
        </div>
      </Layout>
    </>
  );
}
