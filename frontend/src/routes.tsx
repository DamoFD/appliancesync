// Admin Imports
import MainDashboard from './views/admin/default';

// Auth Imports
// Icon Imports
import {
    MdHome,
} from 'react-icons/md';

const routes = [
    {
        name: "main Dashboard",
        layout: "/admin",
        path: "default",
        icon: <MdHome className="h-6 w-6" />,
        component: <MainDashboard />,
    },
];

export default routes;
