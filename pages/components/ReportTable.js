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
          {stands && hours.map((item, idx) => (
            <th key={idx}>{item}</th>
          ))}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
      {stands && stands.map(stand => (
                    <TableRow key={stand.id} info={stand} deleteStand={deleteStand} />
                ))}
      </tbody>
    </table>
  );
}
