export type IProject = {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    isTeam: boolean;
    teamSize: number | null;
    roleInTeam: string | null;
    startDate: string | null;
    endDate: string | null;
    createdAt: string;
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