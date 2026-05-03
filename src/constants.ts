export interface RegionalNode {
  id: string;
  name: string;
  country: string;
  concept: string;
  description: string;
  expertInsight: string;
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
    concept: 'Seguridad Estructural en Climas Extremos.',
    description: 'Validamos proyectos para resistir vientos de 100km/h y el peso de nieve subantártica. Aseguramos que su cimentación sea apta para el suelo de alta montaña.',
    expertInsight: '[ Verificación: Carga de nieve 1.2kN/m² ]',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-mx',
    name: 'MÉXICO',
    country: 'México',
    concept: 'Desarrollo Costero y Suelos Kársticos.',
    description: 'Evite el colapso en terrenos de la Península de Yucatán. Analizamos el riesgo de marejadas y adaptamos la ingeniería al suelo kárstico costero.',
    expertInsight: '[ Verificación: Protocolo Anti-Salinidad ]',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-cl',
    name: 'CHILE',
    country: 'Chile',
    concept: 'Resiliencia Sísmica Certificada.',
    description: 'Arquitectura preparada para la actividad sísmica del sur. Validamos la respuesta de la estructura ante movimientos dinámicos severos.',
    expertInsight: '[ Verificación: Estabilidad >0.4g ]',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-co',
    name: 'COLOMBIA',
    country: 'Colombia',
    concept: 'Gestión de Laderas y Trópico.',
    description: 'Protegemos su inversión en terrenos de alta pendiente. Detectamos riesgos de saturación hídrica y deslizamientos mediante análisis satelital.',
    expertInsight: '[ Verificación: Análisis Multiespectral ]',
    url: 'https://geo.tumapaia.com'
  },
  {
    id: 'node-es',
    name: 'ESPAÑA',
    country: 'España',
    concept: 'Eficiencia Energética Europea.',
    description: 'Cumplimiento total del Código Técnico (CTE). Optimizamos su domo para alcanzar estándares Passivhaus y reducir el gasto en climatización.',
    expertInsight: '[ Verificación: Certificación CTE / Passivhaus ]',
    url: 'https://geo.tumapaia.com'
  }
];
