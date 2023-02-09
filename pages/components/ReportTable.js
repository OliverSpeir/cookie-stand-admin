import Link from "next/link";
import { hours } from "./data.js";
export default function ReportTable({ stands }) {
  let totals = 0;
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
        {stands.map((item, idx) => {
          const standTotal = item.hourlySales.reduce(
            (sum, sale) => sum + sale,
            0
          );
          totals += standTotal;
          return (
            <tr key={idx} className="even:bg-emerald-100 odd:bg-emerald-300">
              <td className="pl-2 border border-gray-700">{item.standName}</td>
              {item.hourlySales.map((item) => (
                <td key={idx * 100} className="pl-2 border border-gray-700">
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
                {stands.reduce((sum, sale) => sum + sale.hourlySales[idx], 0)}
              </td>
            </>
          );
        })}
        <td className="pl-2 border border-gray-700">{totals}</td>
      </tbody>
    </table>
  );
}
