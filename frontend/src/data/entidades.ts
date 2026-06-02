export interface Entidad {
    id: number;     // <-- Cambiado a number
    tipoId: number; // <-- Llave numérica de asociación con TipoEntidad
    nombre: string;
}

export const entidadesData: Entidad[] = [
    // Municipalidades (tipoId: 1)
    { id: 101, tipoId: 1, nombre: 'Guatemala' },
    { id: 102, tipoId: 1, nombre: 'Santa Catarina Pinula' },
    { id: 103, tipoId: 1, nombre: 'San José Pinula' },
    { id: 104, tipoId: 1, nombre: 'San José del Golfo' },
    { id: 105, tipoId: 1, nombre: 'Palencia' },
    { id: 106, tipoId: 1, nombre: 'Chinautla' },
    { id: 107, tipoId: 1, nombre: 'San Pedro Ayampuc' },
    { id: 108, tipoId: 1, nombre: 'Mixco' },
    { id: 109, tipoId: 1, nombre: 'San Pedro Sacatepequez' },
    { id: 110, tipoId: 1, nombre: 'San Juan Sacatepequez' },
    { id: 111, tipoId: 1, nombre: 'San Raymundo' },
    { id: 112, tipoId: 1, nombre: 'Chuarrancho' },
    { id: 113, tipoId: 1, nombre: 'Fraijanes' },
    { id: 114, tipoId: 1, nombre: 'Amatitlán' },
    { id: 115, tipoId: 1, nombre: 'Villa Nueva' },
    { id: 116, tipoId: 1, nombre: 'Villa Canales' },
    { id: 117, tipoId: 1, nombre: 'San Miguel Petapa' },


    // Ministerios (tipoId: 2)
    { id: 3001, tipoId: 2, nombre: 'Agricultura, Ganandería y Alimentación - MAGA' },
    { id: 3002, tipoId: 2, nombre: 'Ambiente y Recursos Naturales - MARN' },
    { id: 3003, tipoId: 2, nombre: 'Comunicaciones, Infraestructura y Vivienda - MICIVI' },
    { id: 3004, tipoId: 2, nombre: 'Cultura y Deportes - MICUDE' },
    { id: 3005, tipoId: 2, nombre: 'Defensa Nacional - MINDEF' },
    { id: 3006, tipoId: 2, nombre: 'Desarrollo Social - MIDES' },
    { id: 3007, tipoId: 2, nombre: 'Economía - MINECO' },
    { id: 3008, tipoId: 2, nombre: 'Educación - MINEDUC' },
    { id: 3009, tipoId: 2, nombre: 'Energía y Minas - MINER' },
    { id: 3010, tipoId: 2, nombre: 'Finanzas Públicas - MINFIN' },
    { id: 3011, tipoId: 2, nombre: 'Gobernación - MINGOB' },
    { id: 3012, tipoId: 2, nombre: 'Salud y Asistencia Social - MSPAS' },
    { id: 3013, tipoId: 2, nombre: 'Relaciones Exteriores - MINEX' },
    { id: 3014, tipoId: 2, nombre: 'Trabajo y Previsión Social - MINTRAB' },

    { id: 4001, tipoId: 3, nombre: 'Universidad de San Carlos de Guatemala - USAC' },
    { id: 4002, tipoId: 3, nombre: 'Instituto Guatemalteco de Seguridad Social - IGSS' },
    { id: 4003, tipoId: 3, nombre: 'Banco de Guatemala - BANGUAT' },
    { id: 4004, tipoId: 3, nombre: 'Confederación Deportiva Autónoma de Guatemala - CDAG' },
    { id: 4005, tipoId: 3, nombre: 'Comité Olímpico Guatemalteco - COG' },

    { id: 5001, tipoId: 4, nombre: 'Corte Suprema de Justicia - CSJ' },
    { id: 5002, tipoId: 4, nombre: 'Corte de Constitucionalidad - CC' },
    { id: 5003, tipoId: 4, nombre: 'Ministerio Público - MP' }
];