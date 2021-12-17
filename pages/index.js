import Head from 'next/head'
import Login from '../Components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();
  
  if(isAuthenticated) return <Login/>;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Metaverse App</h1>

    <button onClick={logout}>Logout</button>

    </div>
  );
}
