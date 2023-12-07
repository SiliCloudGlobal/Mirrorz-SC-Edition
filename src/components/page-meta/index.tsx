import style9 from 'style9';

import { useRouteMeta } from '@/hooks/use-route-meta';
import ExternalLink from '../external-link';
import { issueUrl } from '@/lib/client/constant';

const styles = style9.create({
  main: {
    padding: '20px 24px',
    '@media screen and (min-width: 1280px)': {
      padding: '28px 32px'
    },
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    marginTop: '36px',
    marginBottom: '24px'
  },
  p: {
    marginBottom: '20px',
    ':last-of-type': {
      marginBottom: 0
    }
  },
  link: {
    color: 'var(--text-link)',
    borderBottomWidth: '1px',
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    ':hover': {
      borderBottomColor: 'var(--text-link)'
    }
  },
  bold: {
    fontWeight: 700
  }
});

export default function MetadataCard() {
  const meta = useRouteMeta();

  if (!meta) return null;
  return (
    <div className={styles('main')}>
      <p className={styles('p')}>
        <span className={styles('bold')}>Is there an issue? </span>
        <ExternalLink href={issueUrl} className={styles('link')}>
          Report via GitHub Issue
        </ExternalLink>
      </p>
      {/** TODO: Contributing Guide */}
      <p className={styles('p')}>
        <span className={styles('bold')}>Would you like to contribute? </span>
        <ExternalLink className={styles('link')} href="#">
          Contribution Guide.
        </ExternalLink>，
        <ExternalLink className={styles('link')} href={`https://github.com/mirrorz-org/mirrorz-help/blob/master/contents/${meta.file}`}>
          Source code on GitHub.
        </ExternalLink>
      </p>
      <p className={styles('p')}>
        <span className={styles('bold')}>
          All content is provided under the terms of the
          {' '}
          <ExternalLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed" className={styles('link')}>
            CC BY-NC-SA 4.0
          </ExternalLink>
          {' '}
          license, additional terms may also apply.
        </span>
      </p>
    </div>
  );
}
