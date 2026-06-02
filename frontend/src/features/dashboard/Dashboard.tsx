// src/features/dashboard/Dashboard.tsx

import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { Paginator } from 'primereact/paginator'
import type { PaginatorPageChangeEvent } from 'primereact/paginator';
import { incisosLAIP } from './dataLAIP';
import type { IncisoLAIP } from './dataLAIP';
import LogoSvg from '../../assets/homeico.svg'

// Interface para controlar el estado del login mockeado
interface UsuarioLogueado {
    nombre: string;
    rol: string;
    autenticado: boolean;
}

// Opciones mock para los Combobox (Dropdowns) de filtrado institucional
const tiposInstituciones = [
    { label: 'Ministerios', value: 'ministerio' },
    { label: 'Municipalidades', value: 'muni' },
    { label: 'Entidades Autónomas', value: 'autonoma' },
    { label: 'Organismos de Justicia', value: 'justicia' }
];

const nombresInstituciones = [
    { label: 'Ministerio de Finanzas Públicas (MINFIN)', value: 'minfin', tipo: 'ministerio' },
    { label: 'Municipalidad de Guatemala', value: 'muniguate', tipo: 'muni' },
    { label: 'Universidad de San Carlos de Guatemala (USAC)', value: 'usac', tipo: 'autonoma' },
    { label: 'Corte de Constitucionalidad (CC)', value: 'cc', tipo: 'justicia' }
];

const listadoAnios = [
    { label: 'Año 2025', value: '2025' },
    { label: 'Año 2026', value: '2026' }
];

export default function Dashboard(): React.JSX.Element {
    // Estados para la paginación (6 elementos por página por requerimiento)
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(6);

    // Estados para los comboboxes de filtrado
    const [tipoSeleccionado, setTipoSeleccionado] = useState<string | null>(null);
    const [institucionSeleccionada, setInstitucionSeleccionada] = useState<string | null>(null);
    const [anioSeleccionado, setAnioSeleccionado] = useState<string | null>(null);

    // Estado del usuario (Cambiar 'autenticado: true' a 'false' para probar ambos flujos)
    const [usuario] = useState<UsuarioLogueado>({
        nombre: "Manuel Chávez",
        rol: "Administrador de Sistema",
        autenticado: false
    });

    // Controlador del cambio de página
    const manejarCambioPagina = (e: PaginatorPageChangeEvent) => {
        setFirst(e.first);
        setRows(e.rows);
    };

    // Función auxiliar para extraer iniciales del nombre de usuario
    const obtenerIniciales = (nombreCompleto: string): string => {
        return nombreCompleto
            .split(' ')
            .map(palabra => palabra[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    return (
        <div className="flex min-h-screen surface-ground font-sans">
            
            {/* =========================================================
               7. MENU LATERAL (SIDEBAR)
               ========================================================= */}
            <aside className="w-20rem flex flex-column p-4 text-white select-none shrink-0 border-round-2xl" style={{ backgroundColor: '#0059D5' }}>
                {/* =========================================================
                BRANDING SUPERIOR: LOGO SVG Y TEXTO VERTICAL
                ========================================================= */}
                <div className="flex flex-column align-items-center text-center mb-6 mt-2 select-none">
                    {/* Contenedor circular estilizado para tu archivo SVG */}
                    <div 
                    className="bg-white-alpha-90 border-circle flex align-items-center justify-content-center mb-3 shadow-2"
                    style={{ width: '4.5rem', height: '4.5rem' }}
                >
                <img 
                    src={LogoSvg} 
                    alt="InfopGT Logo" 
                    /* Usamos style nativo para garantizar que mida exactamente 40px y se centre */
                    style={{ 
                        width: '40px', 
                        height: '40px', 
                        objectFit: 'contain' 
                    }}
                    className="select-none"
                />
                </div>
                    
                    {/* Textos alineados verticalmente hacia abajo */}
                    <h2 className="m-0 text-2xl font-bold tracking-semi-wide text-white line-height-1">
                        InfopGT
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white-alpha-70 mt-2 block">
                        Guatemala
                    </span>
                </div>

                {/* Enlaces de herramientas */}
                <nav className="flex-grow-1">
                    <ul className="list-none p-0 m-0">
                        <li className="mb-2">
                            <Button label="Dashboard" icon="pi pi-th-large" className="w-full p-button-text text-white text-left p-3 hover:bg-white-alpha-10 border-round-md" />
                        </li>
                        <li className="mb-2">
                            <Button label="Solicitudes" icon="pi pi-clipboard" tooltip="Gestionar Mis Solicitudes" className="w-full p-button-text text-white text-left p-3 hover:bg-white-alpha-10 border-round-md" />
                        </li>
                        <li className="mb-2">
                            <Button label="Seguimiento" icon="pi pi-flag-fill" tooltip="Seguimiento Mis Solicitudes" className="w-full p-button-text text-white text-left p-3 hover:bg-white-alpha-10 border-round-md" />
                        </li>
                        <li className="mb-2">
                            <Button label="Búsqueda" icon="pi pi-microchip-ai" tooltip="Búsqueda Semántica" className="w-full p-button-text text-white text-left p-3 hover:bg-white-alpha-10 border-round-md" />
                        </li>
                        <li className="mb-2">
                            <Button label="Extracción" icon="pi pi-sparkles" tooltip="Extraer Texto" className="w-full p-button-text text-white text-left p-3 hover:bg-white-alpha-10 border-round-md" />
                        </li>
                    </ul>
                </nav>

                {/* =========================================================
                FOOTER DEL SIDEBAR: GESTIÓN DE USUARIO VERTICAL Y CENTRADO
                ========================================================= */}
                <div className="border-top-1 border-white-alpha-20 pt-4 flex flex-column align-items-center gap-3 select-none">
                    {usuario.autenticado ? (
                        <>
                            {/* Círculo con las Iniciales */}
                            <Avatar 
                                label={obtenerIniciales(usuario.nombre)} 
                                shape="circle" 
                                className="bg-white font-bold shadow-2 flex align-items-center justify-content-center" 
                                style={{ 
                                    width: '4rem', 
                                    height: '4rem', 
                                    fontSize: '1.4rem',
                                    color: '#0059D5' // 3. Forzamos el color azul directamente aquí para evitar el texto blanco heredado
                                }}
                            />
                            
                            {/* Información del Usuario */}
                            <div className="flex flex-column align-items-center text-center px-2">
                                <span className="font-bold text-base text-white line-height-2 white-space-normal">
                                    {usuario.nombre}
                                </span>
                                <span className="text-xs text-white-alpha-70 font-semibold uppercase tracking-wider mt-1 white-space-normal">
                                    {usuario.rol}
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Círculo de Estado No Logueado */}
                            <Avatar 
                                icon="pi pi-user-minus" 
                                shape="circle" 
                                className="bg-white-alpha-20 text-white shadow-1" 
                                style={{ width: '4rem', height: '4rem', fontSize: '1.4rem' }}
                            />
                            
                            {/* Mensaje de Invitado */}
                            <div className="flex flex-column align-items-center text-center px-2">
                                <span className="font-bold text-base text-white line-height-2">
                                    Usuario No Logueado
                                </span>
                                <span className="text-xs text-white-alpha-60 font-medium mt-1">
                                    Por favor, inicie sesión
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </aside>

            {/* =========================================================
               CONTENIDO PRINCIPAL
               ========================================================= */}
            <main className="flex-grow-1 p-5 flex flex-column justify-content-between">
                <div>
                    {/* =========================================================================
                    ENCABEZADO DE CONTROL: ESTRUCTURA EN FILAS (BOTONES ARRIBA / FILTROS ABAJO)
                    ========================================================================= */}
                    <div className="flex flex-column gap-4 mb-5">
                        
                        {/* Fila 1: Menú Superior de Círculos (Siempre empujado a la derecha) */}
                        <div className="flex align-self-end gap-2">
                            <Button icon="pi pi-home" rounded style={{ backgroundColor: '#0059D5', borderColor: '#0059D5' }} tooltip="Home" tooltipOptions={{ position: 'bottom' }} />
                            <Button icon="pi pi-user-plus" rounded style={{ backgroundColor: '#0059D5', borderColor: '#0059D5' }} tooltip="Registrarme" tooltipOptions={{ position: 'bottom' }} />
                            <Button icon="pi pi-sign-in" rounded style={{ backgroundColor: '#0059D5', borderColor: '#0059D5' }} tooltip="Login" tooltipOptions={{ position: 'bottom' }} />
                            <Button icon="pi pi-sign-out" rounded style={{ backgroundColor: '#0059D5', borderColor: '#0059D5' }} tooltip="Logout" tooltipOptions={{ position: 'bottom' }} />
                        </div>

                        {/* Fila 2: Sección de Comboboxes y Botón de Filtrado */}
                        <div className="flex flex-wrap gap-3 align-items-end justify-content-start">
                            <div className="flex flex-column gap-2 text-left">
                                <label htmlFor="tipoInst" className="font-bold text-sm text-700">Tipo de Entidad</label>
                                <Dropdown 
                                    id="tipoInst"
                                    value={tipoSeleccionado} 
                                    onChange={(e) => setTipoSeleccionado(e.value)} 
                                    options={tiposInstituciones} 
                                    placeholder="Seleccione Tipo" 
                                    className="w-15rem" 
                                    showClear
                                />
                            </div>
                            <div className="flex flex-column gap-2 text-left">
                                <label htmlFor="nombreInst" className="font-bold text-sm text-700">Entidad</label>
                                <Dropdown 
                                    id="nombreInst"
                                    value={institucionSeleccionada} 
                                    onChange={(e) => setInstitucionSeleccionada(e.value)} 
                                    options={nombresInstituciones} 
                                    placeholder="Seleccione Entidad" 
                                    className="w-18rem" 
                                    showClear
                                />
                            </div>
                            {/* Combobox para la selección de Año */}
                            <div className="flex flex-column gap-2 text-left">
                                <label htmlFor="anioInst" className="font-bold text-sm text-700">Año Fiscal</label>
                                <Dropdown 
                                    id="anioInst"
                                    value={anioSeleccionado} 
                                    onChange={(e) => setAnioSeleccionado(e.value)} 
                                    options={listadoAnios} 
                                    placeholder="Seleccione Año" 
                                    className="w-10rem" /* Un ancho más corto para equilibrar el diseño */
                                    showClear
                                />
                            </div>
                            {/* 5. Botón Apply Filter */}
                            <Button 
                                label="Aplicar Filtro" 
                                icon="pi pi-filter" 
                                style={{ backgroundColor: '#454445', borderColor: '#0059D5' }} 
                                className="px-4"
                                rounded
                            />
                        </div>

                    </div>

                    {/* Título de Contexto Jurídico de la Sección */}
                    <div className="text-left mb-4">
                        <h3 className="m-0 text-xl font-bold text-900">Artículo 10: Obligaciones de Transparencia</h3>
                        <p className="m-0 text-600 text-sm mt-1">Haga clic en los filtros para evaluar la información pública de oficio de las instituciones de Guatemala.</p>
                    </div>

                    {/* =========================================================
                       6. SECCIÓN DE CUADROS (6 CARDS POR PÁGINA)
                       ========================================================= */}
                    <div className="grid">
                        {incisosLAIP.slice(first, first + rows).map((inciso: IncisoLAIP) => (
                            <div key={inciso.id} className="col-12 sm:col-6 lg:col-4 p-3">
                                <Card 
                                    className="h-full border-none shadow-1 hover:shadow-6 transition-duration-200 border-round-xl text-left"
                                    // Modificamos y añadimos las propiedades de Pass Through (pt) para reducir los espacios internos
                                    pt={{
                                        root: { 
                                            style: { backgroundColor: '#eff6ff', borderLeft: '4px solid #0059D5' } 
                                        },
                                        body: { 
                                            className: 'py-2 px-3' // Reducimos drásticamente el padding vertical superior/inferior del cuerpo
                                        },
                                        content: { 
                                            className: 'p-0 m-0'   // Eliminamos los márgenes y paddings por defecto del contenedor de texto
                                        }
                                    }}
                                >
                                    {/* Cabecera Interna de la Card (Icono y Numeral) */}
                                    <div className="flex justify-content-between align-items-center mb-2 mt-1">
                                        <div className="bg-blue-50 border-circle w-2.5rem h-2.5rem flex align-items-center justify-content-center">
                                            <i className={`pi ${inciso.icon} text-lg`} style={{ color: '#0059D5' }}></i>
                                        </div>
                                        <span className="inline-block text-xs font-bold text-white px-2 py-1 border-round-md selected-none" style={{ backgroundColor: '#0059D5' }}>
                                            {inciso.referenciaLegal}
                                        </span>
                                    </div>
                                    
                                    {/* Títulos y Contenido */}
                                    <h4 className="m-0 text-base font-bold text-900 mb-2 line-height-2">{inciso.titulo}</h4>
                                    <p className="m-0 text-sm text-600 line-height-3 text-justify">{inciso.desc}</p>
                                    
                                    {/* Información técnica extra y Botón de Acción */}
                                    <div className="mt-3 pt-2 border-top-1 surface-border flex justify-content-between align-items-center">
                                        <span className="text-xs font-semibold text-500">
                                            Última Actualización: 2026
                                        </span>
                                        <Button 
                                            label="Mostrar" // Ajustado al texto exacto de tu nueva maqueta
                                            icon="pi pi-eye" 
                                            iconPos="right"
                                            className="p-button-text p-button-sm p-0 font-bold hover:underline text-xs"
                                            style={{ color: '#0059D5' }}
                                        />
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =========================================================
                   6. COMPONENTE PAGINADOR INTEGRADO
                   ========================================================= */}
                <Paginator 
                    first={first} 
                    rows={rows} 
                    totalRecords={incisosLAIP.length} 
                    onPageChange={manejarCambioPagina} 
                    className="mt-4 bg-white border-1 border-300 border-round-xl shadow-1"
                />
            </main>
        </div>
    );
}