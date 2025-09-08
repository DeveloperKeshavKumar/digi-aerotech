"use client";
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { ServiceRenderer } from '@/components/services/service-renderer';
import { getServiceBySlug } from '@/services/service-registry';

export default function ServicePage() {
    const params = useParams<{ slug: string; }>();

    const serviceData = getServiceBySlug(params.slug);

    if (!serviceData) {
        notFound();
    }

    return <ServiceRenderer serviceData={serviceData} />;
}
