"use server";

export const getProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/projects`, {
            method: "GET",
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }
        console.log(res);
        return await res.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

export const getProjectById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/projects/${id}`, {
            method: "GET",
            cache : 'no-store'
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }
        // console.log(res);
        return await res.json();
    } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
    }
};