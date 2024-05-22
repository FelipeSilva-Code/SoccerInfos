import { ToastContainer } from "react-toastify";
import Footer from "./footer";
import Header from "./header";
import SearchTeam from "./searchTeam";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: any
}

export default function MainContainer ({children} : Props) {
    return (
        <main className="flex min-h-screen flex-col items-center bg-white">
            <Header/>

            <SearchTeam/>
                <div className="min-h-80 w-full flex flex-col items-center pb-10">
                    {children}
                </div>
                <ToastContainer />
        </main>
    )
}