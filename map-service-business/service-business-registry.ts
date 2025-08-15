// src/map-service-business/service-business-registry.ts
import { ServiceBusinessMap } from './map-service-business.types';

// Import all map combinations
import * as reAso from './data/real-estate/aso-services';
import * as reLeads from './data/real-estate/leads-generation';
import * as b2bAso from './data/b2b-services/aso-services';

const maps: ServiceBusinessMap[] = [
  reAso.map,
  reLeads.map,
  b2bAso.map
];

export const getMap = (service: string, business: string): ServiceBusinessMap | undefined =>
  maps.find(m => m.service === service && m.business === business);

export const getAllMaps = (): ServiceBusinessMap[] => maps;
