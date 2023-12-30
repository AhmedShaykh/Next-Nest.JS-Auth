import { getNotes } from "@/services/index.service";
import { Note as Notes } from "../../Types";
import Note from "./Note";
import Link from "next/link";

const Notes = async () => {

    const notes = await getNotes();

    if (notes && notes.length < 0) {
        return (
            <div className="flex justify-center items-center mt-40">
                <h1 className="font-bold text-5xl">
                    No Data Available!
                </h1>
            </div>
        );
    }

    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {notes?.map((item: Notes) => (
                        <div
                            className="p-4 lg:w-1/3"
                            key={item._id}
                        >
                            <Link href={`/note/${item._id}`}>
                                <Note item={item} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Notes;