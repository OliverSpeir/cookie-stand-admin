import Link from 'next/link';
export default function Header() {
    return (
        <header className=' p-4 bg-green-300 text-black'>
        <h1>Cookie Stand Admin Page</h1>
        <Link href="/newpage" className='text-blue-700 hover:text-blue-500'>
                <h2>link</h2>
        </Link>
      </header>
    );
}