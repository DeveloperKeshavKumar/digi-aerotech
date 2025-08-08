"use client";
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/services/service-registry';
import { getBusinessTypeBySlug } from '@/services/business-type-registry';
import { BusinessServiceRenderer } from '@/components/business-services/business-service-renderer';

export default function ServiceForBusinessPage() {
    const params = useParams<{ slug: string; business: string }>();
    const serviceData = getServiceBySlug(params.slug);
    const businessData = getBusinessTypeBySlug(params.business);

    if (!serviceData || !businessData) {
        notFound();
    }

    return (
        <BusinessServiceRenderer
            service={params.slug}
            business={params.business}
        />
    );
}