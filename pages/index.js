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
  const { user, login, logout } = useAuth();
  console.log(user)


  return (
    <>
      <Head>
        <title>Cookie Stand Admin Page</title>
        <meta name="description" content="First NextJS Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(user)}
      <Header user={user} logout={logout}/>
      {user ? <CookieStandAdmin /> : <LoginForm onLogin={login} />}
    </>
  );
}
