"use server";

export const getSkills = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/skills`, {
            method: "GET",
            // next: { revalidate: 60 }
        });
        
        // console.log(res)
        // if (!res.ok) {
        //     throw new Error("Failed to fetch skills");
        // }
        return await res.json();
    } catch (error) {
        console.error("Error fetching skills:", error);
        return [];
    }
};
