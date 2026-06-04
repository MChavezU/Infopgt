import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { useAuth } from '../../shared/AuthContext';

interface LoginAdminProps {
    visible: boolean;
    onHide: () => void;
    onLoginSuccess?: (username: string) => void;
}

export const LoginAdmin: React.FC<LoginAdminProps> = ({ visible, onHide, onLoginSuccess }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // Consumimos el método login desde el AuthContext
    const { login } = useAuth();

    const toastRef = useRef<Toast>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Mostramos mensaje informativo al iniciar la petición
        toastRef.current?.show({
            severity: 'info',
            summary: 'Autenticación',
            detail: 'Validando credenciales...',
            life: 1000
        });

        try {
            // Ejecutamos la petición real al backend a través del contexto
            const success = await login(email, password);

            if (success) {
                toastRef.current?.show({
                    severity: 'success',
                    summary: 'Ingreso Exitoso',
                    detail: `¡Bienvenido al sistema!`,
                    life: 1500
                });

                // Esperamos un momento breve para que el usuario lea el Toast de éxito
                setTimeout(() => {
                    setLoading(false);
                    if (onLoginSuccess) onLoginSuccess(email);
                    onHide();
                    // Opcional: Limpiar campos tras un login exitoso
                    setEmail('');
                    setPassword('');
                }, 1000);

            } else {
                setLoading(false);
                toastRef.current?.show({
                    severity: 'error',
                    summary: 'Error de ingreso',
                    detail: 'Credenciales incorrectas o cuenta no verificada.',
                    life: 3000
                });
            }
        } catch (error) {
            setLoading(false);
            console.error("Error en la conexión del login:", error);
            toastRef.current?.show({
                severity: 'error',
                summary: 'Error de Red',
                detail: 'No se pudo conectar con el servidor de autenticación.',
                life: 4000
            });
        }
    };

    return (
        <>
            <Toast ref={toastRef} position="top-right" />

            <Dialog
                visible={visible}
                onHide={onHide}
                modal
                dismissableMask
                closable
                showHeader={false} 
                style={{ width: '90%', maxWidth: '420px' }}
                className="border-round-2xl overflow-hidden shadow-6"
                contentClassName="p-0"
            >
                <form onSubmit={handleLogin} className="bg-white p-5 flex flex-column align-items-center select-none">
                    
                    {/* Icono superior */}
                    <div 
                        className="border-circle flex align-items-center justify-content-center mb-3 shadow-2"
                        style={{ 
                            width: '4.5rem', 
                            height: '4.5rem', 
                            backgroundColor: '#0059D5'
                        }}
                    >
                        <i className="pi pi-user text-3xl text-white"></i>
                    </div>

                    <h3 className="m-0 text-xl font-bold mb-4 line-height-2 text-800">
                        Ingreso Administrativo
                    </h3>

                    {/* Campo Correo Electrónico */}
                    <div className="w-full flex flex-column gap-2 mb-3 text-left">
                        <label htmlFor="loginEmail" className="font-semibold text-sm text-700">Correo Electrónico</label>
                        <div className="p-input-icon-left w-full relative flex align-items-center">
                            <i className="pi pi-envelope absolute left-0 ml-3 z-2 text-base" style={{ color: '#0059D5' }} />
                            <InputText
                                id="loginEmail"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ejemplo@infop.gob.gt"
                                className="w-full border-round-xl p-inputtext-sm pl-6 py-2.5 text-base"
                                style={{ borderColor: '#0059D5', boxShadow: 'none' }}
                                disabled={loading}
                                required
                            />
                        </div>
                    </div>

                    {/* Campo Contraseña */}
                    <div className="w-full flex flex-column gap-2 mb-4 text-left">
                        <label htmlFor="loginPass" className="font-semibold text-sm text-700">Contraseña</label>
                        <div className="p-input-icon-left w-full relative flex align-items-center">
                            <i className="pi pi-lock absolute left-0 ml-3 z-2 text-base" style={{ color: '#0059D5' }} />
                            <Password
                                id="loginPass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                toggleMask
                                feedback={false}
                                className="w-full"
                                inputClassName="w-full border-round-xl p-inputtext-sm pl-6 py-2.5 text-base"
                                inputStyle={{ borderColor: '#0059D5', boxShadow: 'none' }}
                                disabled={loading}
                                required
                            />
                        </div>
                    </div>

                    {/* Recordarme / Olvidé Contraseña */}
                    <div className="w-full flex align-items-center justify-content-between mb-5 text-xs font-semibold">
                        <div className="flex align-items-center gap-2">
                            <Checkbox 
                                id="remember" 
                                onChange={e => setRememberMe(e.checked ?? false)} 
                                checked={rememberMe}
                                disabled={loading}
                                pt={{ 
                                    box: { 
                                        className: rememberMe ? 'border-none' : '',
                                        style: rememberMe ? { backgroundColor: '#0059D5' } : { borderColor: '#0059D5' }
                                    } 
                                }}
                            />
                            <label htmlFor="remember" className="text-600 cursor-pointer">Recordarme</label>
                        </div>
                        <span className="hover:underline cursor-pointer" style={{ color: '#0059D5' }}>
                            ¿Olvidó su contraseña?
                        </span>
                    </div>

                    {/* Botón Entrar */}
                    <Button
                        type="submit"
                        label={loading ? "Iniciando Sesión..." : "Entrar al Sistema"}
                        icon="pi pi-sign-in"
                        loading={loading}
                        className="w-full py-3 border-round-xl font-bold transition-duration-200 shadow-2 border-none text-base"
                        style={{ backgroundColor: '#0059D5' }}
                    />
                </form>
            </Dialog>
        </>
    );
};