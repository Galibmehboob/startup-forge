
import { baseUrl } from "./basrUrl"

export const serverMutation = async (path, method, data) => {
    const res = await fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return await res.json();
};
export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`)
    return res.json()
}