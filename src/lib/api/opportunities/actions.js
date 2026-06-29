"use server";


import { authClient } from "@/lib/auth-client";
import { serverMutation } from "../server";


export const addOpportunities = async (data) => {
    const { data: token } = await authClient.token()
    console.log(token);


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

