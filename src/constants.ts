export interface RegionalNode {
  id: string;
  name: string;
  country: string;
  description: string;
  technicalPredicate: string;
  status: 'PENDIENTE' | 'VALIDADO';
  url: string;
}

export interface CalculatorNode {
  id: string;
  name: string;
  region: string;
  url: string;
  description: string;
  icon: 'zap' | 'wind' | 'sun';
}

export const CALCULATOR_NODES: CalculatorNode[] = [
  {
    id: 'traslasierra-calc',
    name: 'TRASLASIERRA (CÓRDOBA)',
    region: 'Sierras Centrales',
    url: 'https://listadomos.com/factibilidad',
    description: 'Modelos entrenados para el análisis de viabilidad técnica, legal y financiera en zonas de montaña.',
    icon: 'zap'
  },
  {
    id: 'patagonia-calc',
    name: 'PATAGONIA (SUR)',
    region: 'Andes Patagónicos',
    url: 'https://listadomos.com/factibilidad?region=patagonia',
    description: 'Análisis de cargas de nieve, viento y resiliencia térmica para climas sub-árticos.',
    icon: 'wind'
  }
];

export const REGIONAL_NODES: RegionalNode[] = [
  {
    id: 'node-ar',
    name: 'PATAGONIA',
    country: 'Argentina',
    description: 'Resiliencia a cargas de viento de 100km/h y peso de nieve subártica.',
    technicalPredicate: 'Validación de la Resiliencia Térmica y Cargas Estructurales en entornos de alta montaña.',
    status: 'PENDIENTE',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-mx',
    name: 'MÉXICO',
    country: 'México',
    description: 'Análisis de riesgo de salinidad y mapeo de marejadas ciclónicas en costa.',
    technicalPredicate: 'Validación de la Topografía de Costa y Riesgo Salino para asegurar la durabilidad de estructuras geodésicas.',
    status: 'PENDIENTE',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-cl',
    name: 'CHILE',
    country: 'Chile',
    description: 'Auditoría de estabilidad sísmica y respuesta dinámica estructural.',
    technicalPredicate: 'Auditoría de Estabilidad Sísmica y Respuesta Dinámica de Estructuras en climas severos.',
    status: 'PENDIENTE',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-co',
    name: 'COLOMBIA',
    country: 'Colombia',
    description: 'Mapeo de escorrentía tropical y estabilidad de laderas en alta pendiente.',
    technicalPredicate: 'Análisis de Escorrentía Tropical y Estabilidad de Laderas en terrenos de alta pendiente.',
    status: 'PENDIENTE',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-es',
    name: 'ESPAÑA',
    country: 'España',
    description: 'Certificación de eficiencia bajo el Código Técnico de la Edificación (CTE).',
    technicalPredicate: 'Certificación de Eficiencia Energética bajo estándares del Código Técnico de la Edificación (CTE).',
    status: 'PENDIENTE',
    url: 'https://geo.tumapaia.com'
  }
];
