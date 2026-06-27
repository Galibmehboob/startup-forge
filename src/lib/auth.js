import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db(
    process.env.AUTHDB_NAME || "startup_forge"
);

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),

    emailAndPassword: {
        enabled: true,
    },

    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "collaborator",
            },
            isBlocked: {
                type: "boolean",
                defaultValue: false,
            },
        },
    },
});