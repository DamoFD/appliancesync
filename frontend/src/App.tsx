import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';

function App() {

    return (
        <Routes>
            <Route path="auth/*" element={<AuthLayout />} />
            <Route path="admin/*" element={<AdminLayout />} />
        </Routes>
    );
}

export default App
