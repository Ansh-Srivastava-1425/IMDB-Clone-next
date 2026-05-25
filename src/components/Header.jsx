import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs" 
import Link from 'next/link'
import DarkModeSwitch from "./DarkModeSwitch";


export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white" >
        <div className="flex gap-4">
            <MenuItem title="Home" address="/" Icon={AiFillHome} />
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex gap-4 items-center" >
          <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center" >
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg" >IMDB</span>
          <span className="text-xl hidden sm:inline" >Clone</span>
        </Link>
        </div>
    </div>
  )
}
