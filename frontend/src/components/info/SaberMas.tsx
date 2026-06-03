import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

interface SaberMasProps {
    visible: boolean;
    onHide: () => void;
}

export const SaberMas: React.FC<SaberMasProps> = ({ visible, onHide }) => {
    
    // Encabezado personalizado para el panel lateral
    const customHeader = (
        <div className="flex align-items-center gap-2 text-blue-700">
            <i className="pi pi-bookmark-fill text-2xl" style={{ color: '#0059D5' }}></i>
            <span className="font-bold text-xl text-900">Marco Legal y Alcance de la Plataforma</span>
        </div>
    );

    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            header={customHeader}
            style={{ width: '100%', maxWidth: '600px' }}
            className="p-sidebar-md shadow-4 select-none"
        >
            <div className="px-2 py-3 overflow-y-auto h-full text-left" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                
                {/* INTRODUCCIÓN */}
                <p className="text-gray-700 line-height-3 text-lg mb-4">
                    Esta plataforma digital ha sido diseñada para optimizar los procesos de transparencia y facilitar el cumplimiento del 
                    <strong> Decreto Número 57-2008</strong> (Ley de Acceso a la Información Pública de Guatemala). Su propósito es ser el puente tecnológico entre la ciudadanía y los sujetos obligados.
                </p>

                <Divider align="left">
                    <span className="p-tag bg-blue-100 text-blue-800 font-bold">Ejes Conceptuales</span>
                </Divider>

                {/* SECCIÓN 1: MARCO LEGAL */}
                <div className="mb-4 mt-3">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex align-items-center gap-2">
                        <i className="pi pi-shield text-lg" style={{ color: '#0059D5' }}></i>
                        1. Respaldo a la Ley (Decreto 57-2008)
                    </h4>
                    <p className="text-gray-600 line-height-2 mb-3">
                        Garantiza de forma automatizada que cualquier persona individual o jurídica pueda ejercer su derecho constitucional de conocer los actos de la administración pública.
                    </p>
                    <div className="grid">
                        <div className="col-12 sm:col-6 p-2">
                            <Card className="bg-blue-50 border-none p-1">
                                <span className="font-bold text-sm block text-blue-900 mb-1">Transparencia Activa</span>
                                <span className="text-xs text-700">Actualización automatizada de los artículos de oficio (Art. 10).</span>
                            </Card>
                        </div>
                        <div className="col-12 sm:col-6 p-2">
                            <Card className="bg-blue-50 border-none p-1">
                                <span className="font-bold text-sm block text-blue-900 mb-1">Cultura de Apertura</span>
                                <span className="text-xs text-700">Reducción del uso de papel y digitalización del archivo institucional.</span>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* SECCIÓN 2: CONTROL Y GESTIÓN */}
                <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex align-items-center gap-2">
                        <i className="pi pi-sliders-h text-lg" style={{ color: '#0059D5' }}></i>
                        2. Control de Solicitudes de Información
                    </h4>
                    <p className="text-gray-600 line-height-2 mb-3">
                        La plataforma rompe con la burocracia tradicional implementando un flujo de trabajo dinámico (Workflow) para procesar solicitudes:
                    </p>
                    <ul className="list-none p-0 m-0 flex flex-column gap-2 text-gray-700 text-sm">
                        <li className="flex align-items-start gap-2">
                            <i className="pi pi-check-circle text-green-600 mt-1"></i>
                            <span><strong>Trazabilidad de Expedientes:</strong> Cada solicitud genera un número único de seguimiento para auditar en qué oficina o analista se encuentra.</span>
                        </li>
                        <li className="flex align-items-start gap-2">
                            <i className="pi pi-check-circle text-green-600 mt-1"></i>
                            <span><strong>Alertas de Vencimiento:</strong> Notificaciones internas automáticas cuando una solicitud cumple 5, 8 o los 10 días hábiles que estipula la ley.</span>
                        </li>
                        <li className="flex align-items-start gap-2">
                            <i className="pi pi-check-circle text-green-600 mt-1"></i>
                            <span><strong>Prórrogas Automatizadas:</strong> Gestión justificada del plazo adicional de 5 días bajo las condiciones excepcionales contempladas en la normativa.</span>
                        </li>
                    </ul>
                </div>

                {/* SECCIÓN 3: RENDICIÓN DE CUENTAS */}
                <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex align-items-center gap-2">
                        <i className="pi pi-chart-bar text-lg" style={{ color: '#0059D5' }}></i>
                        3. Rendición de Cuentas Automatizada
                    </h4>
                    <p className="text-gray-600 line-height-2 mb-2">
                        Al finalizar el ciclo anual, la plataforma consolida de manera algorítmica toda la data recopilada para exportar los informes requeridos por las autoridades reguladoras.
                    </p>
                    <div className="border-left-3 pl-3 border-blue-600 bg-gray-50 p-3 border-round-right-md">
                        <span className="block font-bold text-gray-800 text-sm mb-1">Informe Anual al PDH:</span>
                        <span className="text-xs text-600 block line-height-2">
                            Exportación directa con métricas exactas sobre solicitudes recibidas, entregadas, rechazadas por confidencialidad, y tiempos promedio de resolución. ¡Cero margen de error humano!
                        </span>
                    </div>
                </div>

                {/* SECCIÓN 4: AUDITORÍA SOCIAL (SUGERENCIA EXTRA) */}
                <div className="mb-5">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex align-items-center gap-2">
                        <i className="pi pi-users text-lg" style={{ color: '#0059D5' }}></i>
                        4. Auditoría Social Activa
                    </h4>
                    <p className="text-gray-600 line-height-2">
                        Como valor agregado, el sistema cuenta con un **Módulo de Datos Abiertos** interactivo que permite a periodistas, investigadores y ciudadanos descargar tabulados en formatos reutilizables (CSV, JSON), impulsando una verdadera contraloría social participativa en el país.
                    </p>
                </div>

            </div>
        </Sidebar>
    );
};