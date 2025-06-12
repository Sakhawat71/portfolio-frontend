"use server";
import { IMessage } from "../../types/message.type";

export const createMessage = async (data: IMessage) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/contacts/send-message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return await res.json();
    } catch (error) {
        console.error("Error creating message:", error);
        return { success: false };
    }
};

