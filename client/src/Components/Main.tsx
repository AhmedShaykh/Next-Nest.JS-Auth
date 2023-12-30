import { getNotes } from "@/services/index.service";
import { Note } from "../../Types";

const Main = async () => {

    const notes: Note = await getNotes();

    console.log(notes)

    return (
        <div>
        </div>
    )
};

export default Main;