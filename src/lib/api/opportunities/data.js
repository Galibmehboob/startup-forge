import { serverFetch } from "../server";

export const getMyOpportunities = async (startupId) => {
    return await serverFetch(`/api/opportunities/startup/${startupId}`);
};

export const getOpportunity = async (id) => {

    return await serverFetch(`/api/opportunities/${id}`);

};

export const fetchOpportunities = async (query) => {
    const result = await serverFetch(`/api/opportunities?${query.toString()}`);

    return result;
};