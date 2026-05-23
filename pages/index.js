import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const CITIES = ["Seoul", "Tokyo", "Paris", "London"];

export default function Home() {
  return (
    <div>
      <Head>
        <title> Weather App </title>
      </Head>
      <main className={`layout ${styles.main}`}>
        <h1 className={styles.title}>
          Welcome to <br />
          <span className={styles.titleAccent}> Weather App! </span>
        </h1>
        <p className={styles.subtitle}>
          Choose a city from the list below to check the weather.
        </p>
        <nav>
          <ul className={styles.cityList}>
            {CITIES.map((city) => (
              <li key={city}>
                <Link href={`/${city}`}>
                  <a className={styles.cityLink}>{city}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <img src="/earth-3d.png" alt="globe" className={styles.globe} />
      </main>
    </div>
  );
}
