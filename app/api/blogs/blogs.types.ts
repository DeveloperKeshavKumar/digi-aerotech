export interface BlogParagraph {
    type: 'text' | 'image';
    content: string; // For text: the paragraph text, for image: image URL
    imageCaption?: string; // Optional caption for images
}

// Type for the blog post
export interface BlogPost {
    id?: number;
    heading: string;
    subheading: string;
    paragraphs: BlogParagraph[];
    createdAt?: string;
    updatedAt?: string;
    published: boolean;
    slug: string;
    featuredImage?: string;
    author?: string;
    tags?: string[];
}   