import Link from "next/link";

export default function NewPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl">Testing Link</h1>
      <Link href="/" className="text-blue-700 hover:text-blue-500">
        Back to Home
      </Link>
    </div>
  );
}
