import Link from "next/link";
import { useState } from "react";

export default function Header ()  {
    return(
        <nav className="bg-black w-full px-10 py-3 h-22 flex justify-between items-center">
            <Link href={"/"} className="text-2xl uppercase font-bold text-white">Football Infos</Link>
            <Link className="text-white" href="sobre">About</Link>
        </nav>
    )
}