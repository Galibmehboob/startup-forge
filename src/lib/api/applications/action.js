import { serverFetch } from "../server";


export const getMyApplications = async (email) => {


    return await serverFetch(
        `/api/applications/user/${email}`
    );


}