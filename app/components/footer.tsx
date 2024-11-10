import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-gray-700 py-10 text-center text-white">
        <p>© 2024 SYHZ Developers | All Rights Reserved</p>
        <div className="mt-4">
          <Link href="https://www.linkedin.com/in/syed-yazdan-haider-5179a224a/" className="text-gray-300 hover:text-white mx-2">LinkedIn</Link>
          <Link href="https://github.com/SyedYazdanHaider" className="text-gray-300 hover:text-white mx-2">GitHub</Link>
        </div>
      </footer>
    )
}