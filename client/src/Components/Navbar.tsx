import { getUsers } from "@/services/index.service";
import Nav from "./Nav";

const Navbar = async () => {

    const users = await getUsers();

    return (
        <>
            <Nav user={users} />
        </>
    )
};

export default Navbar;