export const extractFirstImageUrlFromHtml = (html: string): string | null => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
};

// export const extractFirstParagraphFromHtml = (html: string): string | null => {
//     const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
//     if (!match) return null;
//     const textOnly = match[1].replace(/<[^>]+>/g, "");
//     return textOnly.trim();
// };

export const extractFirstParagraphFromHtml = (html: string): string | null => {
    const matches = html.match(/<p[^>]*>(.*?)<\/p>/gi);
    if (!matches) return null;

    for (const p of matches) {
        const textOnly = p.replace(/<[^>]+>/g, "").trim();
        if (textOnly.length > 0) {
            return textOnly;
        }
    };
    return null;
};
