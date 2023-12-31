import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import axios from "axios";

const DeleteNote = ({ id }: any) => {

    const router = useRouter();

    const onDelete = async () => {

        try {

            const response = await axios.delete(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/notes/${id}`);

            toast.success("Deleted Note");

            setTimeout(() => {

                router.refresh();

            }, 2000);

        } catch (error: any) {

            toast.error(error.message);

        }
    };

    return (
        <>
            <button
                className="p-2 bg-red-700 text-white rounded-md"
                onClick={onDelete}
            >
                <Trash2 />
            </button>

            <Toaster />
        </>
    )
};

export default DeleteNote;