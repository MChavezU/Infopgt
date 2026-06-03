import React, { useState, useRef } from 'react'; // 1. Importamos useRef
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast'; // 2. Importamos el componente Toast

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

    // 3. Creamos la referencia para controlar el Toast
    const toastRef = useRef<Toast>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // 4. Mostramos un mensaje informativo azul al iniciar la petición
        toastRef.current?.show({
            severity: 'info',
            summary: 'Autenticación',
            detail: 'Validando credenciales...',
            life: 1000
        });
        
        setTimeout(() => {
            setLoading(false);
            if (email && password) {
                // 5. Mostramos un mensaje de éxito verde antes de cerrar o redirigir
                toastRef.current?.show({
                    severity: 'success',
                    summary: 'Ingreso Exitoso',
                    detail: `¡Bienvenido, ${email}!`,
                    life: 2000
                });

                // Esperamos un momento breve para que el usuario logre leer el Toast de éxito
                setTimeout(() => {
                    if (onLoginSuccess) onLoginSuccess(email);
                    onHide();
                }, 800);
            }
        }, 1200);
    };

    return (
        <>
            {/* 6. El componente Toast debe vivir al mismo nivel de tu jerarquía visual */}
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
                        label="Entrar al Sistema"
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