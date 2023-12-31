"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Nav = ({ user }: any) => {

    const router = useRouter();

    console.log(user);

    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex justify-between flex-wrap py-7 px-6 flex-col md:flex-row items-center">
                    <Link href="/">
                        <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <span className="ml-3 text-xl">
                                Next Express
                            </span>
                        </p>
                    </Link>

                    <button
                        className="inline-flex items-center bg-blue-700 text-white font-medium border-0 py-2 px-4 focus:outline-none hover:bg-white 
                        hover:text-black rounded text-sm mt-4 md:mt-0"
                        onClick={() => router.push("/addNote")}
                    >
                        Add Note
                    </button>
                </div>
            </header>
        </>
    )
};

export default Nav;