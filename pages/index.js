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
      <main className="layout">
        <h1>
          Welcome to <span> Weather App! </span>
        </h1>
        <p>Choose a city from the list below to check the weather.</p>
        <nav>
          <ul>
            {CITIES.map((city) => (
              <li key={city}>
                <Link href={`/${city}`}>
                  <a>{city}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  );
}
