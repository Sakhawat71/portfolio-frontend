"use server";

export const fetchSkills = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/skills`, {
            method: "GET",
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch skills");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching skills:", error);
        return [];
    }
};
