import Head from "next/head";
// import Link from 'next/link';
import { useState } from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ReportTable from "./components/ReportTable";
// import CreateForm from "./components/CreateForm";
import CookieStandAdmin from "./components/CookieStandAdmin";
import { useAuth } from '../contexts/auth';
import LoginForm from "./components/LoginForm";

export default function Home() {
  // const [stands, setStands] = useState([]);
  const { user, login } = useAuth();

  // function newStandHandler(event) {
  //   event.preventDefault();
  //   const stand = {
  //     standName: event.target.standName.value,
  //     minCustomers: event.target.minCustomers.value,
  //     maxCustomers: event.target.maxCustomers.value,
  //     avgCookies: event.target.avgSale.value,
  //     id: stands.length,
  //     hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
  //   };
  //   setStands([...stands, stand]);
  // }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin Page</title>
        <meta name="description" content="First NextJS Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <main className="">
        <CreateForm newStandHandler={newStandHandler} />
        {stands.length > 0 ? (
          <ReportTable stands={stands} />
        ) : (
          <h1>report coming soon</h1>
        )}
      </main>
      <Footer locations={stands.length} /> */}
      {user ? <CookieStandAdmin /> : <LoginForm onLogin={login} />}
    </>
  );
}
