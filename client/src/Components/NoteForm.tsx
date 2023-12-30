"use client";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const NoteForm: FC<any> = ({ noteId }) => {

    const [note, setNote] = useState({
        title: "",
        text: ""
    });

    const router = useRouter();

    const onSubmit = async () => {

        try {

            let response;

            if (noteId) {

                response = await axios.put(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/notes/${noteId._id}`, note);

            } else {

                response = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/notes/`, note);

            }

            toast.success(response.data.message);

            router.push("/");

        } catch (error: any) {

            toast.error(error.message);

        }

    };

    useEffect(() => {

        if (noteId) {
            setNote(noteId);
        }

    }, [noteId]);

    return (
        <>
            <section className="text-gray-400 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="mx-auto">
                        <div className="flex flex-col gap-12 flex-wrap -m-2">
                            <div className="w-full">
                                <label className="leading-7 text-xl text-gray-300">
                                    Title
                                </label>

                                <input
                                    className="w-full bg-gray-800 bg-opacity-40 mt-3 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                                    placeholder="Enter Title"
                                    value={note.title}
                                    type="text"
                                />
                            </div>

                            <div className="w-full">
                                <label className="leading-7 text-xl text-gray-300">
                                    Text
                                </label>

                                <input
                                    className="w-full bg-gray-800 bg-opacity-40 mt-3 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setNote({ ...note, text: e.target.value })}
                                    placeholder="Enter Text"
                                    value={note.text}
                                    type="text"
                                />
                            </div>

                            <div className="p-2 w-full">
                                <button
                                    className="flex mx-auto bg-blue-700 text-white border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg"
                                    onClick={onSubmit}
                                >
                                    {noteId ? `Update` : `Submit`}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Toaster />
        </>
    )
};

export default NoteForm;