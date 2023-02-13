export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <div className="container flex flex-col items-center">
        <form onSubmit={handleSubmit} className="items-center">
            <fieldset autoComplete='off' className="items-center">
                <legend className="text-center text-2xl font-bold">Log In</legend>
                <label htmlFor="username" className="text-left block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                <label htmlFor="password" className="text-left block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                <div className="container flex flex-col items-center">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mt-2 text-center content-center w-60">Log In</button>
                </div>
            </fieldset>
        </form>
        </div>
    );
}