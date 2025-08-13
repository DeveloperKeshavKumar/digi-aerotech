"use client";
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getBusinessBySlug } from '@/business/business-registry';
import { BusinessRenderer } from '@/components/business/business-renderer';

export default function BusinessPage() {
    const params = useParams<{ slug: string }>();
    const businessData = getBusinessBySlug(params.slug);

    if (!businessData) {
        notFound();
    }

    return <BusinessRenderer businessData={businessData} />;
}