// src/app/services/[slug]/[business]/page.tsx
"use client";

import { useParams, notFound } from 'next/navigation';
import { getMap } from '@/map-service-business/service-business-registry';
import BusinessServiceRenderer from '@/components/business-services/business-service-renderer';

export default function ServiceForBusinessPage() {
  const params = useParams<{ slug: string; business: string }>();

  const map = getMap(params.slug, params.business);

  if (!map) {
    return notFound();
  }

  return (
    <BusinessServiceRenderer
      service={map.data}
      variants={map.variants}
    />
  );
}
