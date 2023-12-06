import style9 from 'style9';
import { Layout } from '../components/layout';
import MirrorzLogo from '../components/mirrorz-logo';

import IconUbuntu from '@/components/icons/brands/ubuntu';
import IconDebian from '@/components/icons/brands/debian';
import IconFedora from '../components/icons/brands/fedora';
import IconOpenSUSE from '../components/icons/brands/opensuse';
import IconArchLinux from '../components/icons/brands/archlinux';
import IconCentOS from '../components/icons/brands/centos';
import IconGentoo from '../components/icons/brands/gentoo';
import IconPython from '../components/icons/brands/python';
import Link from 'next/link';
import SeoHead from '../components/seo/head';
import JsonLD from '../components/seo/json-ld';

const styles = style9.create({
  main: {
    marginTop: '32px',
    marginBottom: '32px',
    '@media screen and (min-width: 840px)': {
      marginTop: '40px',
      marginBottom: '40px'
    },
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (min-width: 640px)': {
      flexDirection: 'row',
      alignItems: 'center'
    },
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  mirrorz_logo: {
    width: '80px',
    height: '80px',
    '@media screen and (min-width: 640px)': {
      width: '112px',
      height: '112px'
    },
    marginRight: '12px'
  },
  title_wrapper: {
    marginTop: '8px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 48,
    marginRight: '16px',
    fontWeight: 700,
    lineHeight: 1.25,
    color: 'var(--text-primary)'
  },
  h2: {
    marginTop: '36px',
    marginBottom: '24px',
    fontSize: 24,
    lineHeight: '2rem',
    color: 'var(--text-primary)',
    fontWeight: 600
  },
  badge: {
    display: 'inline-flex',
    alignSelf: 'center',
    paddingLeft: '8px',
    paddingRight: '8px',
    marginTop: '4px',
    backgroundColor: 'var(--bg-highlight)',
    width: 'auto',
    borderRadius: '4px',
    color: 'var(--text-link)',
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '0.025em',
    whiteSpace: 'nowrap'
  },
  paragraph: {
    marginTop: '24px',
    marginBottom: '24px',
    fontWeight: 400,
    lineHeight: 1.5,
    color: 'var(--text-primary)',
    fontSize: 18
  },
  featured_docs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    columnGap: '24px',
    rowGap: '24px',
    '@media screen and (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    '@media screen and (min-width: 1536px)': {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
    }
  },
  card: {
    padding: '24px 32px',
    boxShadow: 'var(--shadow-main)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-card)',
    ':hover': {
      backgroundColor: 'var(--bg-hover)'
    }
  },
  brand_icon: {
    width: '64px',
    height: '64px'
  },
  card_title: {
    marginTop: '24px',
    fontSize: 18,
    fontWeight: 700
  }
});

export default function HomePage() {
  return (
    <>
      <SeoHead />
      <Layout>
        <div className={styles('main')}>
          <MirrorzLogo className={styles('mirrorz_logo')} />
          <div className={styles('title_wrapper')}>
            <h1 className={styles('title')}>
              MirrorZ Help
            </h1>
            <div className={styles('badge')}>
              Alpha
            </div>
          </div>
        </div>
        <section>
          <p className={styles('paragraph')}>
            MirrorZ Help is committed to becoming a centralized platform for integrating open-source software mirror documentation that is open, transparent, and continuously updated. Its goal is to facilitate the dissemination and promotion of open-source software usage among universities.
          </p>
          <h2 className={styles('h2')}>Popular Doc</h2>
          <div className={styles('featured_docs')}>
            <Link href="/ubuntu/" className={styles('card')}>
              <IconUbuntu className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                Ubuntu Repository Mirror Usage Guide
              </h3>
            </Link>
            <Link href="/debian/" className={styles('card')}>
              <IconDebian className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                Debian Repository Mirror Usage Guide
              </h3>
            </Link>
            <Link href="/archlinux/" className={styles('card')}>
              <IconArchLinux className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                Arch Linux Repository Mirror Usage Guide
              </h3>
            </Link>
            <Link href="/fedora/" className={styles('card')}>
              <IconFedora className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                Fedora Repository Mirror Usage Guide
              </h3>
            </Link>
            <Link href="/opensuse/" className={styles('card')}>
              <IconOpenSUSE className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                openSUSE Repository Mirror Usage Guide
              </h3>
            </Link>
            <Link href="/centos/" className={styles('card')}>
              <IconCentOS className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                CentOS Repository Mirror Usage Guide
              </h3>
            </Link>
            <Link href="/gentoo/" className={styles('card')}>
              <IconGentoo className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                Gentoo Repository Mirror Usage Guide
              </h3>
            </Link>
            <Link href="/pypi/" className={styles('card')}>
              <IconPython className={styles('brand_icon')} />
              <h3 className={styles('card_title')}>
                PyPI Repository Mirror Usage Guide
              </h3>
            </Link>
          </div>
        </section>
        {/** TODO: Logo Cloud Section */}
      </Layout>
      <JsonLD />
    </>
  );
}
