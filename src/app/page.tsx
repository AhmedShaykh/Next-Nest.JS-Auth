import { getNotes } from "@/services/index.service";
import Notes from "@/Components/Notes";

const Home = async () => {

    const notes = await getNotes();

    return (
        <>
            <Notes notes={notes} />
        </>
    )
};

export default Home;