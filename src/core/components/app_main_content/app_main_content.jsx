import React from 'react';
import AppButton from '../app_button/app_button';
import { FaDoorClosed } from 'react-icons/fa';
import { useAuth } from '../../auth/hooks/useAuth';
import styles from './app_main_content.module.css';

const AppMainContent = ({ children }) => {
  const { logout } = useAuth();

  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <AppButton onClick={logout}>
          <FaDoorClosed size={20} />
        </AppButton>
      </nav>
      <article className={styles.content}>{children}</article>
    </section>
  );
};

export default AppMainContent;
