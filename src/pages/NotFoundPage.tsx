import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

function NotFoundPage() {
  const { t } = useTranslation('not-found-page');

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.planet}>
        <div className={styles.crater} />
        <div className={styles.crater} />
        <div className={styles.crater} />
        <div className={styles.crater} />
        <div className={styles.crater} />
        <div className={styles.car}>
          <div className={styles.body} />
          <div className={styles.wheels} />
          <div className={styles.trace} />
        </div>
        <div className={styles.flag}>404</div>
      </div>
      <h2 className={styles.pageTitle}>{t('title')}</h2>
      <p className={styles.message}>{t('errorMessage.paragraphOne')}</p>
      <p className={styles.message}>{t('errorMessage.paragraphTwo')}</p>
      <p className={styles.message}>{t('errorMessage.paragraphThree')}</p>
    </div>
  );
}

export default NotFoundPage;
