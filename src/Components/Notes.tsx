"use client";
import { FC, useEffect } from "react";
import { Note as Notes } from "../../Types";
import { useRouter } from "next/navigation";
import Note from "./Note";

const Notes: FC<any> = ({ notes }) => {

    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {

            router.refresh();

        }, 1000);

    }, []);

    if (notes && notes.length <= 0) {
        return (
            <div className="flex justify-center items-center mt-40">
                <h1 className="font-bold text-5xl">
                    No Data Available!
                </h1>
            </div>
        );
    }

    return (
        <>
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {notes?.map((item: Notes) => (
                            <div
                                className="p-4 lg:w-1/3"
                                key={item._id}
                            >
                                <Note item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
};

export default Notes;