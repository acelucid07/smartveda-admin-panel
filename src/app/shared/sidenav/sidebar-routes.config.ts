export const SideNaveMenueRoute = [
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/dashboard']
    },
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/customer']
    },
    {
        label: 'Order',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/order']
    },
    {
        label: 'CMS',
        items: [
            {
                label: 'Banner',
                icon: 'pi pi-fw pi-plus',
                routerLink: ['/pagename'],
                items: [
                    {
                        label: 'Category',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['/pagename'],
                    },
                    {
                        label: 'Sub_Category',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['/pagename'],
                    },
                    {
                        label: 'Sponsor',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['/pagename'],
                    }
                ]
            },
            {
                label: 'Slider',
                icon: 'pi pi-fw pi-plus',
                routerLink: ['/pagename']
            },

        ]
    },
    {
        label: 'Catalogs',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/customer']
    },
    {
        label: 'Sponsors',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/customer']
    },
    {
        label: 'Categories',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/customer']
    },
    {
        label: 'Appointment',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/customer']
    },
    {
        label: 'Appointment',
        icon: 'pi pi-fw pi-plus',
        routerLink: ['/customer']
    },
]