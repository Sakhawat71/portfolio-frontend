"use server";

export const getProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/projects`, {
            method: "GET",
            // next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

export const getProjectById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/projects/${id}`, {
            method: "GET",
            next: { revalidate: 60 }, 
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
    }
};