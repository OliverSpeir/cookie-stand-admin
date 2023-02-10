import { useAuth } from '../../contexts/auth';
import useResource from '../../hooks/useResource';

export default function CreateForm() {
  const { user } = useAuth();
  const { createResource } = useResource();
  function handleSubmit(event) {
    event.preventDefault();
    const info = {
        location: event.target.location.value,
        minimum_customers_per_hour: parseInt(event.target.minimum.value),
        maximum_customers_per_hour: parseInt(event.target.maximum.value),
        average_cookies_per_sale: parseFloat(event.target.average.value),
        owner: user.id,
    };
    createResource(info);

}
  return (
    <form
      className="w-8/12 p-2 mx-auto my-4 bg-green-300 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center">Create Cookie Stand</h2>
      <div className="container flex justify-between">
        <label className="mr-4" for="location">
          Location:
        </label>
        <input className="w-full rounded-lg mb-4" placeholder='location' name='location' />
      </div>
      <div className="flex items-center justify-between m-1">
        <div className="flex flex-col items-center m-1">
          <label for="field1">Minimum Customers per Hour</label>
          <input className="w-full" placeholder='minimum' name='minimum' />
        </div>
        <div className="flex flex-col items-center m-1">
          <label for="field2">Maximum Customers per Hour</label>
          <input className="w-full" placeholder='maximum' name='maximum' />
        </div>
        <div className="flex flex-col items-center m-1">
          <label for="field3">Average Cookies per Sale</label>
          <input className="w-full" placeholder='average' name='average' />
        </div>

        <button
          className="pt-5 pb-5 pl-20 pr-20 m-3 font-bold bg-green-500 rounded-lg"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
