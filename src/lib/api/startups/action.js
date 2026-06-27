

import { serverMutation } from "../server"

export const addStartups = async (data) => {
    const resData = await serverMutation("/api/startups", "POST", data)
    return resData;
}
export const updateStartups = async (data, id) => {
    const resData = await serverMutation(`/api/startups/${id}`, "PATCH", data)
    return resData;
} 