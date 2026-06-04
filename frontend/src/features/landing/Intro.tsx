import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import type { MenuItem } from 'primereact/menuitem'; // Importamos tipos de PrimeReact
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import LogoSvg from '../../assets/homeico.svg'
import { LoginAdmin } from '../../components/auth/LoginAdmin'
import { SaberMas } from '../../components/info/SaberMas';
import { Toast } from 'primereact/toast';


// Definimos la interfaz para el estado del formulario de contacto
interface ContactoForm {
    nombre: string;
    email: string;
    mensaje: string;
}

export default function Intro(): React.JSX.Element {
    const navigate = useNavigate();

    //Mensajes Toast
    const toastRef = useRef<Toast>(null);

    //Estado Carga Botón Enviar
    const [sendingContact, setSendingContact] = useState<boolean>(false);

    //Form Login State
    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

    const handleLoginSuccess = (userEmail: string) => {
        console.log("¡Logueado con éxito como administrador!", userEmail);
        
        // 1. Guardamos la sesión en el almacenamiento local
        localStorage.setItem('adminUser', userEmail); 
        
        // 2. Cerramos el modal primero para limpiar el árbol de componentes
        setShowLoginModal(false);
        
        // 3. Redirigimos inmediatamente a la ruta del panel de administración
        setTimeout(() => {
            navigate('/admin-dashboard');
        }, 100);
    };

    // Saber Más
    const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

    // Estado estrictamente tipado con nuestra interfaz
    const [contacto, setContacto] = useState<ContactoForm>({ nombre: '', email: '', mensaje: '' });

    // Tipamos el menú de navegación con la interfaz MenuItem de PrimeReact
    const itemsNav: MenuItem[] = [
        { label: 'Inicio', icon: 'pi pi-home', command: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); } },
        { label: 'Nosotros', icon: 'pi pi-info-circle', command: () => { document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Servicios', icon: 'pi pi-crown', command: () => { document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Contacto', icon: 'pi pi-envelope', command: () => { document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Administración', icon: 'pi pi-spin pi-cog', command: () => { setShowLoginModal(true); } }
    ];

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        // Validación básica por seguridad
        if (!contacto.nombre || !contacto.email || !contacto.mensaje) {
            toastRef.current?.show({
                severity: 'warn',
                summary: 'Campos incompletos',
                detail: 'Por favor, rellena todos los campos antes de enviar.',
                life: 3000
            });
            return;
        }

        setSendingContact(true);

        // Notificación de que el proceso ha iniciado
        toastRef.current?.show({
            severity: 'info',
            summary: 'Enviando mensaje',
            detail: 'Conectando con el servidor de correo...',
            life: 1500
        });

        // Simulamos el envío al backend (API) que despacharía el correo a infopgt96@gmail.com
        setTimeout(() => {
            setSendingContact(false);

            // Mensaje de éxito elegante
            toastRef.current?.show({
                severity: 'success',
                summary: '¡Mensaje Enviado!',
                detail: 'Tu consulta ha sido redirigida al administrador (infopgt96@gmail.com).',
                life: 4000
            });

            // Limpiamos el formulario de manera ordenada
            setContacto({ nombre: '', email: '', mensaje: '' });

        }, 2200); // Simulamos 2.2 segundos de latencia de red
    };

    return (
        <div className="surface-0 font-sans">
            {/* ENCABEZADO / NAVBAR */}
            <header className="sticky top-0 z-5 shadow-1 bg-white">
                <div className="flex align-items-center px-4 md:px-6 max-w-7xl mx-auto">
                {/* Contenedor del Logo */}
                    <div className="flex align-items-center gap-2 text-blue-700 font-bold text-xl py-3 mr-4">
                        {/* <i className="pi pi-bolt" style={{ fontSize: '1.5rem' }}></i> */}

                        <img 
                            src={LogoSvg} 
                            alt="Logo Sistema Energético" 
                            className="w-3rem h-3rem" /* Controlas el tamaño con PrimeFlex (ej: 3rem = 48px) */
                        />

                        <div className="flex flex-column text-left">
                            <span className="line-height-2 text-base md:text-xl">Información Pública Guatemala</span>
                            <span className="text-xs font-normal text-600">Tu poder para decidir</span>
                        </div>
                    </div>

                    {/* El Menubar ahora solo renderiza los ítems, y con la clase 'flex-grow-1' 
                    junto a la eliminación de bordes/fondos, se acopla a la izquierda */}
                    <Menubar 
                        model={itemsNav} 
                        className="border-none bg-transparent flex-grow-1 p-0 custom-right-menu custom-menu-colors" 
                    />
                </div>
            </header>

            {/* SECCIÓN HERO (Opción Degradado Moderno) */}
            <section 
                style={{ background: 'linear-gradient(180deg, var(--blue-100) 0%, rgba(255,255,255,1) 100%)' }} 
                className="py-8 px-4 md:px-8 text-center"
            >
                <div className="max-w-4xl mx-auto my-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                        Sistema de Información Pública de Guatemala
                    </h1>
                    <p className="text-xl text-gray-700 line-height-3 mb-6 max-w-3xl mx-auto">
                        Monitorea la rendición de cuentas y ejerce auditoría social de manera eficiente.
                        Accede a datos abiertos de las entidades obligadas, realiza un seguimiento inteligente 
                        a las solicitudes de información y promueve la transparencia democrática en Guatemala.
                    </p>
                    <div className="flex justify-content-center gap-3">
                        <Button 
                            label="Empecemos" 
                            className="p-button-raised"
                            onClick={ () => navigate('/dashboard') } 
                            rounded 
                        />
                        <Button 
                            label="Saber Más" 
                            className="p-button-outlined"
                            onClick={() => setShowInfoModal(true)}
                            rounded 
                        />
                    </div>
                </div>
            </section>

            {/* SECCIÓN SERVICIOS */}
            <section id="servicios" className="py-8 px-4 md:px-8 bg-white text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Servicios de la Plataforma</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Herramientas diseñadas para agilizar la transparencia, asegurar el cumplimiento legal y facilitar la auditoría social.
                </p>
                
                <div className="grid max-w-7xl mx-auto mt-4 justify-content-center">
                    {/* Servicio 1: Gestión de Solicitudes */}
                    <div className="col-12 md:col-4 p-3">
                        <Card className="h-full border-1 border-300 shadow-1 hover:shadow-3 transition-duration-200">
                            {/* Contenedor del icono con fondo azul específico #0059D5 y flexbox */}
                            <div 
                                style={{ backgroundColor: '#0059D5' }} 
                                className="border-circle w-3rem h-3rem flex align-items-center justify-content-center mx-auto mb-3"
                            >
                                {/* Icono con clase text-white para que sea blanco */}
                                <i className="pi pi-file-edit text-white text-xl"></i>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">Gestión de Solicitudes</h3>
                            <p className="text-gray-600 line-height-2">
                                Centraliza la recepción, asignación y respuesta de solicitudes de información pública interpuestas por la ciudadanía de forma digital y ordenada.
                            </p>
                        </Card>
                    </div>

                    {/* Servicio 2: Control de Tiempos Legales */}
                    <div className="col-12 md:col-4 p-3">
                        <Card className="h-full border-1 border-300 shadow-1 hover:shadow-3 transition-duration-200">
                            {/* Contenedor del icono con fondo azul específico #0059D5 y flexbox */}
                            <div 
                                style={{ backgroundColor: '#0059D5' }} 
                                className="border-circle w-3rem h-3rem flex align-items-center justify-content-center mx-auto mb-3"
                            >
                                {/* Icono del reloj en color blanco */}
                                <i className="pi pi-clock text-white text-xl"></i>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">Alertas y Tiempos Legales</h3>
                            <p className="text-gray-600 line-height-2">
                                Sistema de semáforo inteligente para monitorear los plazos de respuesta obligatorios, evitando prórrogas innecesarias o silencios administrativos.
                            </p>
                        </Card>
                    </div>

                    {/* Servicio 3: Reportes de Cumplimiento */}
                    <div className="col-12 md:col-4 p-3">
                        <Card className="h-full border-1 border-300 shadow-1 hover:shadow-3 transition-duration-200">
                            {/* Contenedor del icono con fondo azul específico #0059D5 y flexbox */}
                            <div 
                                style={{ backgroundColor: '#0059D5' }} 
                                className="border-circle w-3rem h-3rem flex align-items-center justify-content-center mx-auto mb-3"
                            >
                                {/* Icono de reportes en color blanco */}
                                <i className="pi pi-chart-line text-white text-xl"></i>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">Reportes e Indicadores</h3>
                            <p className="text-gray-600 line-height-2">
                                Genera estadísticas e informes automáticos listos para presentar ante el Procurador de los Derechos Humanos (PDH) y cumplir con las obligaciones anuales.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            <hr className="border-none surface-border border-top-1 m-0" />

            {/* SECCIÓN SOBRE LA PLATAFORMA */}
            <section id="nosotros" className="py-8 px-4 md:px-8 bg-blue-50">
                <div className="grid max-w-7xl mx-auto align-items-center">
                    
                    {/* Texto descriptivo a la izquierda */}
                    <div className="col-12 lg:col-6 p-4 text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nuestra Plataforma</h2>
                        <p className="text-lg text-gray-600 line-height-3 mb-4">
                            Nuestro Sistema de Información Pública está diseñado estratégicamente para apoyar a las 
                            instituciones obligadas y a la sociedad civil en la optimización del cumplimiento de la 
                            **Ley de Acceso a la Información Pública (Decreto 57-2008)**.
                        </p>
                        <p className="text-lg text-gray-600 line-height-3">
                            A través de una arquitectura moderna, garantizamos que los datos de transparencia activa 
                            (Artículo 10) sean accesibles, estructurados y fáciles de auditar, fortaleciendo la 
                            confianza democrática y simplificando los procesos administrativos del Estado.
                        </p>
                    </div>

                    {/* Cuadrícula de Métricas / Estadísticas a la derecha */}
                    <div className="col-12 lg:col-6 p-4">
                        <div className="grid">
                            <div className="col-12 sm:col-6 p-2">
                                <div className="bg-white border-1 border-200 p-4 text-center border-round shadow-1">
                                    <span className="block text-4xl font-bold text-blue-700 mb-2">100%</span>
                                    <span className="text-sm font-semibold text-600 uppercase">Cumplimiento Legal</span>
                                </div>
                            </div>
                            <div className="col-12 sm:col-6 p-2">
                                <div className="bg-white border-1 border-200 p-4 text-center border-round shadow-1">
                                    <span className="block text-4xl font-bold text-blue-700 mb-2">&lt; 10 Días</span>
                                    <span className="text-sm font-semibold text-600 uppercase">Tiempo de Respuesta</span>
                                </div>
                            </div>
                            <div className="col-12 sm:col-6 p-2">
                                <div className="bg-white border-1 border-200 p-4 text-center border-round shadow-1">
                                    <span className="block text-4xl font-bold text-blue-700 mb-2">0%</span>
                                    <span className="text-sm font-semibold text-600 uppercase">Mora Administrativa</span>
                                </div>
                            </div>
                            <div className="col-12 sm:col-6 p-2">
                                <div className="bg-white border-1 border-200 p-4 text-center border-round shadow-1">
                                    <span className="block text-4xl font-bold text-blue-700 mb-2">29 Num.</span>
                                    <span className="text-sm font-semibold text-600 uppercase">De Transparencia Activa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <hr className="border-none surface-border border-top-1 m-0" />

            {/* SECCIÓN CONTACTO */}
            <section id="contacto" className="py-8 px-4 md:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Ponte en Contacto</h2>
                    <p className="text-gray-600 mb-6">
                        ¿Tienes preguntas? Estamos aquí para ayudarte a comenzar con nuestro Sistema de Gestión de Información Pública.
                    </p>

                    <form className="grid" onSubmit={handleFormSubmit}>
                        <div className="col-12 md:col-6 p-3 text-left">
                            <label htmlFor="nombre" className="block text-sm font-medium text-700 mb-2">Tu Nombre</label>
                            <InputText 
                                id="nombre" 
                                value={contacto.nombre} 
                                onChange={(e) => setContacto({...contacto, nombre: e.target.value})} 
                                className="w-full p-inputtext-lg" 
                                placeholder="Ingresa tu nombre"
                            />
                        </div>
                        <div className="col-12 md:col-6 p-3 text-left">
                            <label htmlFor="email" className="block text-sm font-medium text-700 mb-2">Tu Correo Electrónico</label>
                            <InputText 
                                id="email" 
                                type="email"
                                value={contacto.email} 
                                onChange={(e) => setContacto({...contacto, email: e.target.value})} 
                                className="w-full p-inputtext-lg" 
                                placeholder="nombre@correo.com"
                            />
                        </div>
                        <div className="col-12 p-3 text-left">
                            <label htmlFor="mensaje" className="block text-sm font-medium text-700 mb-2">Tu Mensaje</label>
                            <InputTextarea 
                                id="mensaje" 
                                rows={5} 
                                value={contacto.mensaje} 
                                onChange={(e) => setContacto({...contacto, mensaje: e.target.value})} 
                                className="w-full text-lg" 
                                autoResize 
                                placeholder="Escribe tu consulta aquí..."
                            />
                        </div>
                        <div className="col-12 p-3">
                            <Button 
                                label={sendingContact ? "Enviando..." : "Enviar Mensaje"} 
                                icon="pi pi-send" 
                                loading={sendingContact}
                                className="p-button-lg px-6" 
                                type="submit"
                                style={{ backgroundColor: '#0059D5', borderColor: '#0059D5' }}
                                rounded
                            />
                        </div>
                    </form>
                </div>
            </section>

            {/* INVOCACIÓN DEL POPUP LOGIN ADMIN COMPONENT */}
            <LoginAdmin 
                visible={showLoginModal} 
                onHide={() => setShowLoginModal(false)} 
                onLoginSuccess={handleLoginSuccess}
            />

            {/* INFO SABER MAS */}
            <SaberMas 
                visible={showInfoModal} 
                onHide={() => setShowInfoModal(false)} 
            />

           {/* COMPONENTE TOAST PARA NOTIFICACIONES DE CONTACTO */}
            <Toast ref={toastRef} position="top-right" />
             
        </div>
    );
}