import React, { FC } from "react";
import { formatDate } from "@/libs/formatDate";

const Note: FC<any> = ({ item }) => {

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
        </div>
    )
};

export default Note;