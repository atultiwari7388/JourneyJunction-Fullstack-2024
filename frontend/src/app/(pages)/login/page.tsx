export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-myprimary">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome Back
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-mysecondary focus:border-mysecondary"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-mysecondary focus:border-mysecondary"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-mysecondary hover:bg-myprimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mysecondary transition duration-150"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-mysecondary hover:text-myprimary">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
