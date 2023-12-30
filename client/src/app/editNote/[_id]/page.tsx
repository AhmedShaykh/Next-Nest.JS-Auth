import NoteForm from "@/Components/NoteForm";
import axios from "axios";

async function getNote(id: any) {

    try {

        const response = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/notes/${id}`);

        return response.data;

    } catch (error) {

        console.log("Error");

    }
};

const EditNote = async ({ params }: any) => {

    const note = await getNote(params._id);

    return (
        <>
            <NoteForm noteId={note} />
        </>
    )
};

export default EditNote;