import { DepartmentsLink } from '../app/interfaces/departments-link';

export const navItems: DepartmentsLink[] = [
    {
        title: 'Headlights & Lighting',
        url: '/shop',
        submenu: {
            type: 'menu',
            links: [
                {title: 'Analytics', icon: 'barchart-outline-20', url: '/xx', description: 'Get a better understanding of where your traffic is coming from.'},
                {title: 'Engagement', icon: 'barchart-outline-20', url: '/xx', description: 'Get a better understanding of where your traffic is coming from.'},
            ],
        },
    },
    {title: 'Clutches', url: '/shop'},
    {title: 'Fuel Systems', url: '/shop'},
    {title: 'Steering', url: '/shop'},
    {title: 'Suspension', url: '/shop'},
    {title: 'Body Parts', url: '/shop'},
    {title: 'Transmission', url: '/shop'},
    {title: 'Air Filters', url: '/shop'},
];
