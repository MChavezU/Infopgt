import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import LogoSvg from '../../assets/homeico.svg'; // Asegura la ruta de tu logo

export default function DashAdmin(): React.JSX.Element {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState<string>('Dashboard Admin');
    const [adminEmail, setAdminEmail] = useState<string>('admin@infop.gob.gt');

    // Validación estricta de sesión de Administrador
    useEffect(() => {
        const storedUser = localStorage.getItem('adminUser');
        
        if (!storedUser) {
            // Si no hay un usuario logueado en el localStorage, deniega el acceso
            console.warn("Acceso denegado. Redirigiendo al inicio...");
            navigate('/');
        } else {
            // Si existe, le asignamos el correo al estado del perfil
            setAdminEmail(storedUser);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminUser');
        navigate('/');
    };

    // Opciones del menú lateral solicitadas
    const menuItems = [
        { label: 'Dashboard Admin', icon: 'pi pi-th-large' },
        { label: 'Gestión Instituciones', icon: 'pi pi-building' },
        { label: 'Gestión Documental', icon: 'pi pi-folder-open' },
        { label: 'IA Inteligente', icon: 'pi pi-cpu' },
        { label: 'Gestión Solicitudes', icon: 'pi pi-envelope' },
        { label: 'Reportes', icon: 'pi pi-chart-bar' },
        { label: 'Usuarios', icon: 'pi pi-users' }
    ];

    // ==========================================
    // DATOS DE MUESTRA PARA LAS GRÁFICAS (RANDOM)
    // ==========================================
    const barChartData = {
        labels: ['Min. de Cultura', 'Mineduc', 'Mides', 'Minfin', 'Muni Guate'],
        datasets: [{
            label: 'Documentos Publicados',
            backgroundColor: '#0059D5',
            data: [65, 82, 44, 95, 71]
        }]
    };

    const pieChartData = {
        labels: ['Art 10. Num 1 (Estructura)', 'Art 10. Num 4 (Salarios)', 'Art 10. Num 5 (Misiones)', 'Otros'],
        datasets: [{
            data: [300, 150, 100, 240],
            backgroundColor: ['#0059D5', '#34d399', '#fbbf24', '#a78bfa']
        }]
    };

    const lineChartData = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Solicitudes Ciudadanas 2026',
            data: [120, 185, 240, 190, 310, 420],
            fill: false,
            borderColor: '#0059D5',
            tension: 0.4
        }]
    };

    const polarChartData = {
        labels: ['Excelente (90-100)', 'Aceptable (75-89)', 'Deficiente (<75)'],
        datasets: [{
            data: [45, 28, 12],
            backgroundColor: ['#34d399', '#fbbf24', '#f87171']
        }]
    };

    return (
        <div className="flex min-h-screen surface-ground font-sans">
            
            {/* 1 y 2. MENÚ BARRA LATERAL CON BORDES REDONDEADOS Y TEXTOS NORMALES (SIN BOLD) */}
            <aside 
                className="w-20rem flex flex-column p-4 text-white select-none shrink-0 border-round-3xl m-3 shadow-3" 
                style={{ backgroundColor: '#0059D5' }}
            >
                
                {/* BRANDING SUPERIOR: LOGO SVG Y TEXTO VERTICAL */}
                <div className="flex flex-column align-items-center text-center mb-6 mt-2 select-none">
                    <div 
                        className="bg-white-alpha-90 border-circle flex align-items-center justify-content-center mb-3 shadow-2"
                        style={{ width: '4.5rem', height: '4.5rem' }}
                    >
                        <img 
                            src={LogoSvg} 
                            alt="InfopGT Logo" 
                            style={{ 
                                width: '40px', 
                                height: '40px', 
                                objectFit: 'contain' 
                            }}
                            className="select-none"
                        />
                    </div>
                    
                    <h2 className="m-0 text-2xl font-bold tracking-semi-wide text-white line-height-1">
                        InfopGT
                    </h2>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white-alpha-70 mt-2 block">
                        Guatemala
                    </span>
                </div>

                {/* Cuerpo Central: Navegación Principal con Hover y Selección Corregidos */}
                <nav className="flex-grow-1 flex flex-column gap-2 mt-2">
                    {menuItems.map((item) => {
                        const isSelected = activeMenu === item.label;
                        return (
                            <button
                                key={item.label}
                                onClick={() => setActiveMenu(item.label)}
                                className={`flex align-items-center gap-3 w-full px-4 py-3 border-round-xl border-none text-left text-base cursor-pointer transition-colors transition-duration-200 ${
                                    isSelected 
                                        ? 'bg-white shadow-2 font-semibold' 
                                        : 'bg-transparent hover:bg-blue-600 opacity-90 font-normal'
                                }`}
                                style={{
                                    /* Mantenemos el blindaje estricto del color del texto */
                                    color: isSelected ? '#0059D5' : '#FFFFFF',
                                    /* CRUCIAL: Solo aplicamos color de fondo fijo cuando está SELECCIONADO. 
                                      Si no lo está, lo dejamos como undefined para que NO bloquee el efecto hover del CSS.
                                    */
                                    backgroundColor: isSelected ? '#FFFFFF' : undefined,
                                    outline: 'none'
                                }}
                            >
                                <i 
                                    className={item.icon} 
                                    style={{ 
                                        color: isSelected ? '#0059D5' : '#FFFFFF', 
                                        fontSize: '1.2rem',
                                        display: 'inline-block'
                                    }}
                                ></i>
                                <span 
                                    style={{ 
                                        color: isSelected ? '#0059D5' : '#FFFFFF',
                                        display: 'inline-block'
                                    }}
                                >
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                {/* Parte Inferior: Perfil del Administrador Organizado Verticalmente */}
                <div className="border-top-0 border-blue-400 pt-4 flex flex-column align-items-center gap-2 bg-blue-600 p-3 border-round-2xl shadow-inner text-center">
                    {/* Icono de usuario arriba */}
                    <div 
                        className="border-circle bg-white-alpha-60 text-blue-700 flex align-items-center justify-content-center shadow-1 mb-1" 
                        style={{ width: '3rem', height: '3rem' }}
                    >
                        <i className="pi pi-user text-xl"></i>
                    </div>
                    
                    {/* Datos del usuario abajo */}
                    <div className="flex flex-column gap-1 w-full overflow-hidden">
                        <span 
                            className="font-normal text-sm truncate block text-white px-2"
                            title={adminEmail} /* Muestra el correo completo al pasar el mouse por si es muy largo */
                        >
                            {adminEmail}
                        </span>
                        <span className="text-xs text-blue-100 opacity-80 font-normal tracking-wide">
                            Administrador General
                        </span>
                    </div>
                </div>

            </aside>

            {/* CONTENEDOR DERECHO (MENÚ SUPERIOR Y CONTENIDO) */}
            <div className="flex-grow-1 flex flex-column overflow-hidden">
                
                {/* 3. MENÚ SUPERIOR (ÚNICAMENTE HOME Y LOGOUT) */}
                <header className="bg-white shadow-1 px-5 py-3 flex justify-content-between align-items-center">
                    <div className="text-left">
                        <h2 className="m-0 text-xl font-bold text-gray-800">{activeMenu}</h2>
                        <span className="text-xs text-500 font-semibold">Panel de Control Interno</span>
                    </div>
                    <div className="flex align-items-center gap-2">
                        <Button 
                            icon="pi pi-home" 
                            tooltip="Ir al Inicio Público" 
                            tooltipOptions={{ position: 'bottom' }}
                            style={{ backgroundColor: '#0059D5', borderColor: '#0059D5' }}
                            onClick={() => navigate('/')}
                            rounded
                        />
                        <Button 
                            icon="pi pi-sign-out" 
                            label="Cerrar Sesión"
                            className="p-button-rounded p-button-text font-bold"
                            onClick={handleLogout}
                        />
                    </div>
                </header>

                {/* CUERPO DEL CONTENIDO VARIABLE */}
                <main className="p-5 flex-grow-1 overflow-y-auto bg-gray-50">
                    {activeMenu === 'Dashboard Admin' ? (
                        <div className="flex flex-column gap-5">
                            
                            {/* 4. INDICADORES ESTRATÉGICOS (KPI CARDS) */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-700 mb-3 text-left">Indicadores Estratégicos</h3>
                                <div className="grid">
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-blue-600 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Instituciones Registradas</span>
                                            <span className="text-3xl font-bold text-gray-800 block text-left">148</span>
                                        </Card>
                                    </div>
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-green-500 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Documentos Almacenados</span>
                                            <span className="text-3xl font-bold text-gray-800 block text-left">14,205</span>
                                        </Card>
                                    </div>
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-purple-500 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Procesados por IA</span>
                                            <span className="text-3xl font-bold text-gray-800 block text-left">8,941</span>
                                        </Card>
                                    </div>
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-orange-500 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Solicitudes Recibidas</span>
                                            <span className="text-3xl font-bold text-gray-800 block text-left">2,419</span>
                                        </Card>
                                    </div>
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-red-400 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Solicitudes Pendientes</span>
                                            <span className="text-3xl font-bold text-red-500 block text-left">134</span>
                                        </Card>
                                    </div>
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-teal-500 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Solicitudes Atendidas</span>
                                            <span className="text-3xl font-bold text-teal-600 block text-left">2,285</span>
                                        </Card>
                                    </div>
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-indigo-400 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Cargados en el Mes</span>
                                            <span className="text-3xl font-bold text-gray-800 block text-left">+1,104</span>
                                        </Card>
                                    </div>
                                    <div className="col-12 sm:col-6 lg:col-3 p-2">
                                        <Card className="shadow-1 hover:shadow-6 border-none border-left-4 border-yellow-500 bg-white">
                                            <span className="block text-500 font-semibold text-xs text-left mb-1 uppercase">Cumplimiento Art. 10</span>
                                            <span className="text-3xl font-bold text-blue-700 block text-left">89.4%</span>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            {/* 4. GRÁFICAS DEL SISTEMA ESTRATÉGICO */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-700 mb-3 text-left">Análisis y Gráficos Operativos</h3>
                                <div className="grid">
                                    
                                    {/* Documentos por institución */}
                                    <div className="col-12 lg:col-7 p-2">
                                        <Card title="Documentos por Institución Obligada" className="shadow-1 hover:shadow-6 border-none bg-white text-left font-bold text-sm">
                                            <Chart type="bar" data={barChartData} style={{ position: 'relative', height: '250px' }} />
                                        </Card>
                                    </div>

                                    {/* Documentos por categoría */}
                                    <div className="col-12 lg:col-5 p-2">
                                        <Card title="Distribución por Categorías" className="shadow-1 hover:shadow-6 border-none bg-white text-left font-bold text-sm">
                                            <Chart type="pie" data={pieChartData} style={{ position: 'relative', height: '250px' }} />
                                        </Card>
                                    </div>

                                    {/* Solicitudes por mes */}
                                    <div className="col-12 lg:col-6 p-2">
                                        <Card title="Historial Mensual de Solicitudes" className="shadow-1 hover:shadow-6 border-none bg-white text-left font-bold text-sm">
                                            <Chart type="line" data={lineChartData} style={{ position: 'relative', height: '230px' }} />
                                        </Card>
                                    </div>

                                    {/* Nivel de cumplimiento institucional */}
                                    <div className="col-12 lg:col-6 p-2">
                                        <Card title="Nivel de Cumplimiento Institucional" className="shadow-1 hover:shadow-6 border-none bg-white text-left font-bold text-sm">
                                            <Chart type="polarArea" data={polarChartData} style={{ position: 'relative', height: '230px' }} />
                                        </Card>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ) : (
                        /* VISTA CONTENEDORA PARA LAS OTRAS SECCIONES */
                        <div className="flex flex-column align-items-center justify-content-center h-20rem bg-white border-round-xl border-1 border-200 shadow-1">
                            <i className="pi pi-spin pi-cog text-4xl text-blue-500 mb-3"></i>
                            <h3 className="m-0 text-gray-800 font-bold">Sección de {activeMenu}</h3>
                            <p className="text-sm text-500 mt-1">Componente modular en desarrollo de entorno administrativo.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}