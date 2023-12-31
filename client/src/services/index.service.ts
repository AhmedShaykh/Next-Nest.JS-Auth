import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_LOCAL_API_URL;

export async function getNotes() {

    try {

        const response = await axios.get(`${baseURL}/api/notes`);

        return response.data;

    } catch (error) {

        console.log("Error");

    }

};

export async function getUsers() {

    try {

        const response = await axios.get(`${baseURL}/api/users/`);

        return response;

    } catch (error) {

        console.log("Error");

    }

};