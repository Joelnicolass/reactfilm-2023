import styles from './private_layout.module.css';
import { Outlet } from 'react-router-dom';
import bg from '../../../assets/bg.webp';
import AppSidebar from '../../components/app_sidebar/app_sidebar';
import AppMainContent from '../../components/app_main_content/app_main_content';

const PrivateLayout = () => {
  return (
    <main className={styles.container} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.main_section}>
        <AppSidebar />
        <AppMainContent>
          <Outlet />
        </AppMainContent>
      </div>
    </main>
  );
};

export default PrivateLayout;
