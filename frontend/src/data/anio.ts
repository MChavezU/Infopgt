// src/data/anio.ts
export interface AnioFiscal {
    id: number; // Mantenemos la consistencia de usar IDs numéricos
    nombre: string;
}

export const aniosData: AnioFiscal[] = [
    { id: 2025, nombre: 'Año 2025' },
    { id: 2026, nombre: 'Año 2026' }
];