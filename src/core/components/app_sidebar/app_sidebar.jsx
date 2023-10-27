import React from 'react';
import AppText from '../app_text/app_text';
import AppLink from '../app_link/app_link';

import styles from './app_sidebar.module.css';
import AppSeparator from '../app_separator/app_separator';

const AppSidebar = () => {
  return (
    <aside className={styles.container}>
      <AppText>Genero</AppText>
      <AppSeparator />
      <AppLink to={''}>All</AppLink>
      <AppLink to={'action'}>Action</AppLink>
    </aside>
  );
};

export default AppSidebar;
