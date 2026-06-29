import { serverFetch } from "../server";


export const getMyApplications = async (email) => {


    return await serverFetch(
        `/api/applications/user/${email}`
    );


}

export const getFounderApplications = async (email) => {

    return await serverFetch(
        `/api/applications/founder/${email}`
    );


}



export const updateApplicationStatus = async (id, status) => {


    const res = await fetch(
        `http://localhost:3005/api/applications/${id}`,
        {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                status
            }),

        });


    return res.json();


}