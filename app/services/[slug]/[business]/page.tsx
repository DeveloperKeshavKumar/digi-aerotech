"use client";
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
// import { ServiceForBusinessRenderer } from '@/components/services/service-for-business-renderer';
import { getServiceBySlug } from '@/services/service-registry';
import { getBusinessTypeBySlug } from '@/services/business-type-registry';
import { ServiceBusinessRenderer } from '@/components/services/service-business/renderer';

export default function ServiceForBusinessPage() {
    const params = useParams<{ slug: string; business: string }>();
    const serviceData = getServiceBySlug(params.slug);
    const businessData = getBusinessTypeBySlug(params.business);

    if (!serviceData || !businessData) {
        notFound();
    }

    return (
        <ServiceBusinessRenderer
            serviceData={serviceData} 
            businessData={businessData} 
        />
    );
}