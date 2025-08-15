// lib/blog-validation.utils.ts
import { BlogPost } from "@/app/api/blogs/blogs.types";

export function validateBlogPost(data: any): data is BlogPost {
    console.log('Validating blog post data:', JSON.stringify(data, null, 2));

    // Basic object check
    if (typeof data !== 'object' || data === null) {
        console.error('Validation failed: data is not an object');
        return false;
    }

    // Required string fields that shouldn't be empty
    const requiredStringFields = {
        heading: 'Heading',
        subheading: 'Subheading',
        slug: 'Slug'
    };

    for (const [field, fieldName] of Object.entries(requiredStringFields)) {
        if (typeof data[field] !== 'string') {
            console.error(`Validation failed: ${fieldName} is not a string (value: ${data[field]})`);
            return false;
        }
        if (data[field].trim() === '') {
            console.error(`Validation failed: ${fieldName} cannot be empty`);
            return false;
        }
    }

    // Paragraphs validation
    if (!Array.isArray(data.paragraphs)) {
        console.error('Validation failed: paragraphs is not an array');
        return false;
    }

    if (data.paragraphs.length === 0) {
        console.error('Validation failed: at least one paragraph is required');
        return false;
    }

    const paragraphsValid = data.paragraphs.every((p: any, i: number) => {
        // Check paragraph is a valid object
        if (typeof p !== 'object' || p === null) {
            console.error(`Validation failed: paragraph ${i} is not an object`);
            return false;
        }

        // Check type is valid
        if (p.type !== 'text' && p.type !== 'image') {
            console.error(`Validation failed: paragraph ${i} has invalid type (${p.type})`);
            return false;
        }

        // Check content exists and isn't empty
        if (typeof p.content !== 'string' || p.content.trim() === '') {
            console.error(`Validation failed: paragraph ${i} content is empty or not a string`);
            return false;
        }

        // Check image caption if this is an image paragraph
        if (p.type === 'image' && p.imageCaption !== undefined) {
            if (typeof p.imageCaption !== 'string') {
                console.error(`Validation failed: paragraph ${i} imageCaption is not a string`);
                return false;
            }
            if (p.imageCaption.trim() === '') {
                console.error(`Validation failed: paragraph ${i} imageCaption cannot be empty`);
                return false;
            }
        }

        return true;
    });

    if (!paragraphsValid) return false;

    // Published field validation (accepts boolean or 0/1)
    if (typeof data.published !== 'boolean' &&
        data.published !== 0 &&
        data.published !== 1) {
        console.error(`Validation failed: published is not a boolean or 0/1 (value: ${data.published})`);
        return false;
    }

    // Optional fields validation
    if (data.featuredImage !== undefined && data.featuredImage !== null) {
        if (typeof data.featuredImage !== 'string' || data.featuredImage.trim() === '') {
            console.error('Validation failed: featuredImage must be a non-empty string if provided');
            return false;
        }
    }

    if (data.author !== undefined && data.author !== null) {
        if (typeof data.author !== 'string' || data.author.trim() === '') {
            console.error('Validation failed: author must be a non-empty string if provided');
            return false;
        }
    }

    if (data.tags !== undefined && data.tags !== null) {
        if (!Array.isArray(data.tags)) {
            console.error('Validation failed: tags must be an array if provided');
            return false;
        }
        if (data.tags.some((tag: any) => typeof tag !== 'string' || tag.trim() === '')) {
            console.error('Validation failed: tags must be non-empty strings');
            return false;
        }
    }

    return true;
}