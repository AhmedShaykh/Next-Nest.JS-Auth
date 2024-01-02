"use client";
import React, { useState } from "react";
import { loginUser } from "@/services/index.service";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    const onSubmit = async () => {

        try {

            const res = await loginUser(login);

            console.log(res);

            toast.success("Successfully Login");

            setLogin({
                email: "",
                password: ""
            });

            setTimeout(() => {

                router.push("/");

            }, 2000);

        } catch (error: any) {

            toast.error(error.message);

        }

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mb-8">
                Login
            </h1>

            <label
                className="text-xl font-medium my-2"
                htmlFor="email"
            >
                Email:
            </label>

            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                placeholder="Enter Email"
                value={login.email}
                type="email"
                id="email"
            />

            <label
                className="text-xl font-medium my-2"
                htmlFor="password"
            >
                Password:
            </label>

            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                placeholder="Enter Password"
                value={login.password}
                id="password"
                type="password"
            />

            <button
                className="py-2 px-5 rounded-lg my-4 font-bold text-black bg-white cursor-pointer"
                onClick={onSubmit}
            >
                Login
            </button>

            <Link href="/signup" className="text-blue-700 text-xl cursor-pointer mt-3">
                Visit Register Page
            </Link>

            <Toaster />
        </div>
    )
};

export default Login;