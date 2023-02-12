import Link from "next/link";

export default function Header({user, logout}) {
  return (
    <header className="flex p-4 bg-green-300 text-black">
      <div className="container">
      <h1>Cookie Stand Admin Page</h1>
      </div>
      <div className="container">
      <Link href="/newpage" className="text-blue-700 hover:text-blue-500">
        <h2>link</h2>
      </Link>
      </div>
      <div className="container">
        {user && <UserButtons user={user} logout= {logout}/>}
      </div>
    </header>
  );
}


function UserButtons({user, logout}){
  console.log(user)
  return (
    <>
    <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{user.username}</button>
    <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={logout}>Logout</button>
    </> 
 )
}