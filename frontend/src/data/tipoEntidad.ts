export interface TipoEntidad {
    id: number; // <-- Cambiado de string a number
    nombre: string;
}

export const tiposEntidadesData: TipoEntidad[] = [
    { id: 1, nombre: 'Municipalidades' },
    { id: 2, nombre: 'Ministerios' },
    { id: 3, nombre: 'Entidades Autónomas' },
    { id: 4, nombre: 'Organismos de Justicia' }
];