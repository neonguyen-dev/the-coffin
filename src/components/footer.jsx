// Third party library imports
import Link from "next/link";

export function Footer(props) {
  return (
    <footer className="py-4 px-4">
      <div className="mx-auto max-w-screen-xl p-4 flex items-center justify-between 
      text-sm text-gray-500 dark:text-gray-400">
        <span className="sm:text-center ">
          © 2023 Neo Nguyen, Rasmus Sjöberg, Peter Patranika, Roy Dolonius. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="about" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li className="hover:underline">
            {props.user && <a onClick={() => { props.logout() }} className="cursor-pointer">Log out</a>}
            {!props.user && <Link href="login">Login</Link>}
          </li>
        </ul>
      </div>
    </footer>
  )
}
