import Image from "next/image"
import Link from "next/link"
export const Header = ()=>{
    return(
        <header className="h-[300px] p-[50px] bg-gradient-to-r from-[#f3f7f5] to-[#dbfff3] flex justify-between flex-col">
          <div className="flex justify-between align-center ">
            <Image src={'/images/logo_black.png'} width={50} height={50} alt='logo'/>
          <nav>
            <ul className="flex gap-[15px]">
              <li className="font-semibold text-[16px]">
                <Link href="/" passHref>Home</Link>
              </li>
              <li className="font-semibold text-[16px]">
                <Link href="/events" passHref>Events</Link>
              </li>
              <li className="font-semibold text-[10-6px]">
                <Link href="/about-us" passHref>About Us</Link>
              </li>
            </ul>
        </nav>
          </div>
       <h1 className="w-[50%] font-semibold text-[40px] uppercase">Sed ut perspiciatis unde omnis</h1>
      </header>
    )
}