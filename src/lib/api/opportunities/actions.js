"use server";

import { serverMutation } from "../server";

export const addOpportunities = async (data) => {
    return await serverMutation("/api/opportunities", "POST", data);
};

export const updateOpportunities = async (data, id) => {
    return await serverMutation(
        `/api/opportunities/${id}`,
        "PATCH",
        data
    );
};

export const deleteOpportunity = async (id) => {
    return await serverMutation(
        `/api/opportunities/${id}`,
        "DELETE"
    );
};

