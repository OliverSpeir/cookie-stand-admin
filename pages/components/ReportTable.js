import Link from "next/link";
import TableRow from './TableRow';
export default function ReportTable({ stands, deleteStand }) {
  let totals = 0;
  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  return (
    <table className="w-1/2 mx-auto my-4">
      <thead>
        <tr>
          <th>Location</th>
          {hours.map((item, idx) => (
            <th key={idx}>{item}</th>
          ))}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
      {stands.map(stand => (
                    <TableRow key={stand.id} info={stand} deleteStand={deleteStand} />
                ))}
        {/* {stands.map((item, idx) => {
          const standTotal = item.hourly_sales.reduce(
            (sum, sale) => sum + sale,
            0
          );
          totals += standTotal;
          return (
            <tr key={item.name} className="even:bg-emerald-100 odd:bg-emerald-300">
              <td className="pl-2 border border-gray-700">{item.location}</td>
              {item.hourly_sales.map((item, idx) => (
                <td key={idx} className="pl-2 border border-gray-700">
                  {item}
                </td>
              ))}
              <td className="pl-2 border border-gray-700">{standTotal}</td>
            </tr>
          );
        })}
        <td className="pl-2 border border-gray-700">Totals</td>
        {hours.map((item, idx) => {
          return (
            <>
              <td className="pl-2 border border-gray-700">
                {stands.reduce((sum, sale) => sum + sale.hourly_sales[idx], 0)}
              </td>
            </>
          );
        })}
        <td className="pl-2 border border-gray-700">{totals}</td> */}
      </tbody>
    </table>
  );
}
