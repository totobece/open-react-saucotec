import styles from './styles.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <iframe 
        src="https://www.appsheet.com/start/58f35c5f-0c82-4960-8a48-a2c1e0d45f52?refresh=1&wipe=1"
        className={styles.iframe}
      ></iframe>
    </div>
  );
}