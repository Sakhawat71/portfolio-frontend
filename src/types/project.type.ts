export type IProject = {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    backGitUrl?: string;
    category?: string;
    isTeam: boolean;
    teamSize: number | null;
    roleInTeam: string | null;
    startDate: string | null;
    endDate: string | null;
    createdAt?: string;
};

export type TProject = {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
};

export type TProjectProps = {
    name: string
    type: "Team" | "Solo"
    contributors?: string
    role: string
    features: string[]
    work: string
    techStack: string[]
    images: string[]
    githubBackend?: string
    githubFrontend?: string
    live: string
    reverse?: boolean
}

// export type TProjectCard = {
//     id: string;
//     title: string;
//     description: string;
//     image: string;
//     techStack: string[];
//     liveUrl: string;
//     githubUrl: string;
//     isTeam?: boolean;
//     teamSize?: number;
//     roleInTeam?: string;
//     startDate: string;
//     endDate: string;
// };