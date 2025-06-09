export interface IBlog {
    id: string;
    title: string;
    tags: string[];
    contentHtml: string;
    contentJson: JSON;
    slug: string;
    publishedAt?: Date;
    isPublished?: boolean;
    createdAt: Date;
}
