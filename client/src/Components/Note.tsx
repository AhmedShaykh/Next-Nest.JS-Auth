import { formatDate } from "@/libs/formatDate";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

const Note = ({ item }: any) => {

    let createdUpdatedText: string;

    if (item.updatedAt > item.createdAt) {

        createdUpdatedText = "Updated: " + formatDate(item.updatedAt);

    } else {

        createdUpdatedText = "Created: " + formatDate(item.createdAt);

    }

    return (
        <div className="h-full bg-gray-800 bg-opacity-40 px-8 py-12 rounded-lg overflow-hidden text-center relative">
            <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-4">
                {item.title}
            </h1>

            <p className="leading-relaxed mb-14">
                {item.text}
            </p>

            <div className="text-center mb-4 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <p className="text-white">
                    {createdUpdatedText}
                </p>
            </div>

            <div className="absolute top-5 right-2 flex flex-col gap-2">
                <Link
                    href={`/editNote/${item._id}`}
                >
                    <button className="p-2 bg-cyan-700 text-white rounded-md">
                        <Pencil />
                    </button>
                </Link>

                <button className="p-2 bg-red-700 text-white rounded-md">
                    <Trash2 />
                </button>
            </div>
        </div>
    )
};

export default Note;