import { serverFetch } from "../server";

export const myStartup = async (email) => {
    const result = await serverFetch(`/api/startup/${email}`);
    console.log(result, "My startup");
    return result;
};