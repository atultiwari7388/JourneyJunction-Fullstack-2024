export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-myprimary">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Create Account
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-mysecondary focus:border-mysecondary"
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-mysecondary focus:border-mysecondary"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-mysecondary hover:bg-myprimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mysecondary transition duration-150 transform hover:-translate-y-1"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-mysecondary hover:text-myprimary font-medium"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
