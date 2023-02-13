export default function Footer({ locations }) {
  return (
    <footer className=" p-4 bg-green-300 text-black">
      {locations && <h1 className="ml-0">{locations.length} Locations World Wide</h1>}
    </footer>
  );
}
