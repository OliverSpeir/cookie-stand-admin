import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  const [stands, setStands] = useState([])

  function newStandHandler(event) {
    event.preventDefault();
    const stand = {
      standName: event.target.standName.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgSale.value,
      id: stands.length
    };
    setStands([...stands, stand])
  }
  return (
    <>
    <Head>
      <title>Cookie Stand Admin Page</title>
      <meta name="description" content="First NextJS Project" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className=' p-4 bg-green-300 text-black'>
      <h1>Cookie Stand Admin Page</h1>
      <Link href="/newpage" className='text-blue-700 hover:text-blue-500'>
              <h2>link</h2>
      </Link>
    </header>
    <main className="">
      <form className="w-8/12 p-2 mx-auto my-4 bg-green-300 rounded-lg" onSubmit={newStandHandler}>
        <h2 className="text-center">Create Cookie Stand</h2>
        <div className="container flex justify-between">
          <label className="mr-4" for="standName">Location:</label>
          <input className="w-full rounded-lg mb-4" type="text" id="standName" name="standName"/>
        </div>
        <div className="flex items-center justify-between m-1">
          <div className="flex flex-col items-center m-1">
            <label for="field1">Minimum Customers per Hour</label>
            <input
              className="w-full"
              type="number"
              id="minCustomers"
              name="minCustomers"
              defaultValue={2}
            />
          </div>
          <div className="flex flex-col items-center m-1">
            <label for="field2">Maximum Customers per Hour</label>
            <input
              className="w-full"
              type="number"
              id="maxCustomers"
              name="maxCustomers"
              defaultValue={4}
            />
          </div>
          <div className="flex flex-col items-center m-1">
            <label for="field3">Average Cookies per Sale</label>
            <input
              className="w-full"
              type="number"
              id="avgSale"
              name="avgSale"
              defaultValue={2.5}
            />
          </div>

          <button
            className="pt-5 pb-5 pl-20 pr-20 m-3 font-bold bg-green-500 rounded-lg"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
      <table className="w-1/2 mx-auto my-4">
              <thead>
                  <tr>
                      <th className="border border-gray-700">No.</th>
                      <th className="border border-gray-700">Location</th>
                      <th className="border border-gray-700">Minimum Customer/Hour</th>
                      <th className="border border-gray-700">Maximum Customer/Hour</th>
                      <th className="border border-gray-700">Average Cookies/Sale</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    stands.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="pl-2 border border-gray-700">{item.id}</td>
                          <td className="pl-2 border border-gray-700">{item.standName}</td>
                          <td className="pl-2 border border-gray-700">{item.minCustomers}</td>
                          <td className="pl-2 border border-gray-700">{item.maxCustomers}</td>
                          <td className="pl-2 border border-gray-700">{item.avgCookies}</td>
                      </tr>
                      )
                    })
                  }
              </tbody>
          </table>
    </main>
    </>
  )
}