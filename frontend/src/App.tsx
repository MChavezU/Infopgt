// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación de tus componentes de características (Features)
import Intro from './features/landing/Intro';
import Dashboard from './features/dashboard/Dashboard';
import DashAdmin from './features/dashboard/DashAdmin';
import { AuthProvider } from './shared/AuthContext';

export default function App(): React.JSX.Element {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Ruta raíz: Muestra la Landing Page */}
                    <Route path="/" element={<Intro />} />
                    {/* Nueva Ruta: Muestra el Dashboard Institucional */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin-dashboard" element={<DashAdmin />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}