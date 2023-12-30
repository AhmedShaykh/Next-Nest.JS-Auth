import { formatDate } from "@/libs/formatDate";
import axios from "axios";

async function getNote(id: any) {

    try {

        const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/notes/${id}`);

        return response.data;

    } catch (error) {

        console.log("Error");

    }

};

const Note = async ({ params }: any) => {

    const note = await getNote(params._id);

    let createdUpdatedText: string;

    if (note.updatedAt > note.createdAt) {

        createdUpdatedText = "Updated: " + formatDate(note.updatedAt);

    } else {

        createdUpdatedText = "Created: " + formatDate(note.createdAt);

    }

    return (
        <div className="h-full px-8 py-12 rounded-lg overflow-hidden text-center relative">
            <h1 className="title-font text-6xl font-medium text-white mb-8">
                {note.title}
            </h1>

            <p className="leading-relaxed text-2xl mb-14">
                {note.text}
            </p>

            <div className="text-center mb-4 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <p className="text-white text-3xl">
                    {createdUpdatedText}
                </p>
            </div>
        </div>
    )
};

export default Note