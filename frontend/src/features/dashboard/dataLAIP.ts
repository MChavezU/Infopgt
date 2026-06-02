// src/features/dashboard/dataLAIP.ts

export interface IncisoLAIP {
    id: number;
    titulo: string;
    desc: string;
    icon: string;
    referenciaLegal: string;
}

export const incisosLAIP: IncisoLAIP[] = [
    { 
        id: 1, 
        titulo: "Estructura Orgánica", 
        desc: "Estructura orgánica, funciones de cada una de las dependencias y departamentos, así como su marco regulatorio interno.", 
        icon: "pi-sitemap",
        referenciaLegal: "Art. 10, Num. 1"
    },
    { 
        id: 2, 
        titulo: "Dirección y Teléfonos", 
        desc: "Dirección y teléfonos de todas las dependencias y oficinas de enlace, así como horarios de atención al público.", 
        icon: "pi-map-marker",
        referenciaLegal: "Art. 10, Num. 2"
    },
    { 
        id: 3, 
        titulo: "Directorio de Empleados", 
        desc: "Directorio completo de empleados y servidores públicos, incluyendo nombres, cargos, correos y números de extensión.", 
        icon: "pi-users",
        referenciaLegal: "Art. 10, Num. 3"
    },
    { 
        id: 4, 
        titulo: "Salarios y Honorarios", 
        desc: "Número y remuneración de directores, asesores, empleados públicos y personal bajo cualquier renglón de contratación.", 
        icon: "pi-wallet",
        referenciaLegal: "Art. 10, Num. 4"
    },
    { 
        id: 5, 
        titulo: "Misión y Objetivos", 
        desc: "Misión, visión, objetivos institucionales, planes operativos anuales (POA) y planes estratégicos (PEI).", 
        icon: "pi-compass",
        referenciaLegal: "Art. 10, Num. 5"
    },
    { 
        id: 6, 
        titulo: "Manuales de Procedimientos", 
        desc: "Manuales de organización, de procedimientos administrativos, de puestos y funciones vinculados a la institución.", 
        icon: "pi-book",
        referenciaLegal: "Art. 10, Num. 6"
    },
    { 
        id: 7, 
        titulo: "Presupuesto de Egresos", 
        desc: "Presupuesto de ingresos y egresos asignado, ejecuciones presupuestarias mensuales y transferencias de fondos.", 
        icon: "pi-chart-pie",
        referenciaLegal: "Art. 10, Num. 7"
    },
    { 
        id: 8, 
        titulo: "Informes de Auditoría", 
        desc: "Resultados de las auditorías internas y externas, de la Contraloría General de Cuentas y su estatus de cumplimiento.", 
        icon: "pi-check-square",
        referenciaLegal: "Art. 10, Num. 8"
    },
    { 
        id: 9, 
        titulo: "Canales de Depósito", 
        desc: "Información sobre los depósitos de fondos públicos, cuentas bancarias e instrumentos financieros del sujeto obligado.", 
        icon: "pi-building",
        referenciaLegal: "Art. 10, Num. 9"
    },
    { 
        id: 10, 
        titulo: "Procesos de Cotización", 
        desc: "Procesos de cotización y licitación vigentes, adjudicados y rechazados, vinculados al portal de Guatecompras.", 
        icon: "pi-shopping-bag",
        referenciaLegal: "Art. 10, Num. 10"
    },
    { 
        id: 11, 
        titulo: "Contratación de Bienes", 
        desc: "Detalle de las contrataciones de bienes y servicios efectuadas por la institución, proveedores y montos.", 
        icon: "pi-file-pdf",
        referenciaLegal: "Art. 10, Num. 11"
    },
    { 
        id: 12, 
        titulo: "Viajes Nacionales e Internac.", 
        desc: "Listado de viajes nacionales e internacionales financiados con fondos públicos, objetivos, viáticos y personal comisionado.", 
        icon: "pi-send",
        referenciaLegal: "Art. 10, Num. 12"
    },
    { 
        id: 13, 
        titulo: "Inventario de Propiedades", 
        desc: "Inventario detallado de bienes muebles e inmuebles, activos fijos y equipo tecnológico bajo resguardo institucional.", 
        icon: "pi-box",
        referenciaLegal: "Art. 10, Num. 13"
    },
    { 
        id: 14, 
        titulo: "Mantenimiento de Vehículos", 
        desc: "Información sobre contratos de mantenimiento de la flotilla vehicular, asignación de combustible y bitácoras.", 
        icon: "pi-car",
        referenciaLegal: "Art. 10, Num. 14"
    },
    { 
        id: 15, 
        titulo: "Subsidios y Becas", 
        desc: "Programas de subsidios, becas, transferencias condicionadas o aportes otorgados con fondos del Estado.", 
        icon: "pi-percentage",
        referenciaLegal: "Art. 10, Num. 15"
    },
    { 
        id: 16, 
        titulo: "Arrendamiento de Bienes", 
        desc: "Contratos vigentes de arrendamiento de edificios, oficinas, terrenos o maquinaria para uso institucional.", 
        icon: "pi-key",
        referenciaLegal: "Art. 10, Num. 16"
    },
    { 
        id: 17, 
        titulo: "Empresas Precalificadas", 
        desc: "Listado de empresas precalificadas ante el sujeto obligado para obras, suministros o servicios del Estado.", 
        icon: "pi-id-card",
        referenciaLegal: "Art. 10, Num. 17"
    },
    { 
        id: 18, 
        titulo: "Obras Públicas Ejecutadas", 
        desc: "Listado de obras públicas financiadas, avances físicos, financieros, contratos y supervisión técnica.", 
        icon: "pi-hammer",
        referenciaLegal: "Art. 10, Num. 18"
    },
    { 
        id: 19, 
        titulo: "Contratos de Concesiones", 
        desc: "Contratos de concesión de servicios públicos otorgados por la entidad u licitaciones de explotación de recursos.", 
        icon: "pi-briefcase",
        referenciaLegal: "Art. 10, Num. 19"
    },
    { 
        id: 20, 
        titulo: "Trámites y Requisitos", 
        desc: "Listado de trámites directos ante la institución, formatos descargables, costos legales y tiempos estimados.", 
        icon: "pi-info-circle",
        referenciaLegal: "Art. 10, Num. 20"
    },
    { 
        id: 21, 
        titulo: "Índice de Archivos", 
        desc: "Índice de los archivos, expedientes, clasificaciones y sistemas de archivo físico o digital del sujeto obligado.", 
        icon: "pi-folder-open",
        referenciaLegal: "Art. 10, Num. 21"
    },
    { 
        id: 22, 
        titulo: "Criterios de Selección", 
        desc: "Criterios técnicos, legales o financieros que fundamentan las decisiones administrativas de la entidad.", 
        icon: "pi-sliders-h",
        referenciaLegal: "Art. 10, Num. 22"
    },
    { 
        id: 23, 
        titulo: "Modernización Administrativa", 
        desc: "Proyectos y planes de desarrollo institucional orientados a la modernización tecnológica y simplificación de trámites.", 
        icon: "pi-refresh",
        referenciaLegal: "Art. 10, Num. 23"
    },
    { 
        id: 24, 
        titulo: "Donaciones Recibidas", 
        desc: "Detalle de las donaciones monetarias o en especie recibidas de organismos nacionales o internacionales, y su destino.", 
        icon: "pi-heart",
        referenciaLegal: "Art. 10, Num. 24"
    },
    { 
        id: 25, 
        titulo: "Leyes y Normas Aplicables", 
        desc: "Marco jurídico nacional, decretos, reglamentos y normativas específicas que rigen el actuar de la institución.", 
        icon: "pi-shield",
        referenciaLegal: "Art. 10, Num. 25"
    },
    { 
        id: 26, 
        titulo: "Actas de Consejo y Sesiones", 
        desc: "Actas firmadas de las sesiones de Consejo, Juntas Directivas o asambleas de toma de decisiones del sujeto obligado.", 
        icon: "pi-copy",
        referenciaLegal: "Art. 10, Num. 26"
    },
    { 
        id: 27, 
        titulo: "Índice de Datos Reservados", 
        desc: "Listado oficial de información clasificada como confidencial o reservada bajo los lineamientos estipulados por la ley.", 
        icon: "pi-lock",
        referenciaLegal: "Art. 10, Num. 27"
    },
    { 
        id: 28, 
        titulo: "Entidades del Sistema", 
        desc: "Padrón institucional de dependencias adscritas, comisiones o fideicomisos vinculados a la entidad matriz.", 
        icon: "pi-tags",
        referenciaLegal: "Art. 10, Num. 28"
    },
    { 
        id: 29, 
        titulo: "Informes Anuales a PDH", 
        desc: "Informes consolidados de solicitudes de acceso a la información ingresadas y resueltas, remitidos anualmente a la PDH.", 
        icon: "pi-file",
        referenciaLegal: "Art. 10, Num. 29"
    }
];