import { serverFetch } from "../server";

export const getMyOpportunities = async (startupId) => {
    return await serverFetch(`/api/opportunities/startup/${startupId}`);
};

export const getOpportunity = async (id) => {

    return await serverFetch(`/api/opportunities/${id}`);

};