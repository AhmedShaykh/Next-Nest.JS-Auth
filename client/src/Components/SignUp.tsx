"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const SignUp = () => {

    const [signUp, setSignUp] = useState({
        username: "",
        email: "",
        password: ""
    });

    const router = useRouter();

    const onSubmit = async () => {

        try {

            // if (signUp.username) {

            //     toast.error("UserName Already Exists...");

            //     return
            // }

            // if (signUp.email) {

            //     toast.error("User Already Exists...");

            //     return
            // }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/users/signup`, signUp);

            console.log(response);

            toast.success("Successfully Register");

            setSignUp({
                username: "",
                email: "",
                password: ""
            });

            setTimeout(() => {

                router.push("/login");

            }, 2000);

        } catch (error: any) {

            toast.error(error.message);

        }

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mb-8">
                Sign Up
            </h1>

            <label
                className="text-xl font-medium my-2"
                htmlFor="username"
            >
                Username:
            </label>

            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                onChange={(e) => setSignUp({ ...signUp, username: e.target.value })}
                placeholder="Enter Username"
                value={signUp.username}
                id="username"
                type="text"
            />

            <label
                className="text-xl font-medium my-2"
                htmlFor="email"
            >
                Email:
            </label>

            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
                placeholder="Enter Email"
                value={signUp.email}
                id="email"
                type="email"
            />

            <label
                className="text-xl font-medium my-2"
                htmlFor="password"
            >
                Password:
            </label>

            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
                placeholder="Enter Password"
                value={signUp.password}
                type="password"
                id="password"
            />

            <button
                className="py-2 px-5 rounded-lg my-4 font-bold text-black bg-white cursor-pointer"
                onClick={onSubmit}
            >
                Signup
            </button>

            <Link href="/login" className="text-blue-700 text-xl cursor-pointer mt-3">
                Visit Login Page
            </Link>

            <Toaster />
        </div>
    )
};

export default SignUp