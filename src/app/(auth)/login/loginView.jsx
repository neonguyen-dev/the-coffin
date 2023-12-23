// Third party library imports
import Link from "next/link";

export default 
function LoginView(props) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a className="flex items-center mb-6 text-2xl font-semibold text-white">
        The Coffin admin
      </a>
      <div className="w-full rounded-xl shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Login to your account
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" id="email" autoComplete="email" onChange={(event) => props.setEmail(event.target.value)} placeholder="name@company.com" required="" className="bg-gray-50 border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" id="password" autoComplete="current-password" onChange={(event) => props.setPassword(event.target.value)} placeholder="••••••••" required minLength={6} className="bg-gray-50 border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="button" onClick={() => props.login()} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 hover:underline">Login</button>
          </form>
          <p className="text-base font-bold leading-tight tracking-tight text-white">
            Don&apos;t have an account?
          </p>
          <Link href="register" className="hover:underline text-sm text-white">Sign up now!</Link>
        </div>
      </div>
    </div>
  );
}
