export const SideNaveMenueRoute = [
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/dashboard']
    },
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/customer']
    },
    {
        label: 'Order',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['/order']
    },
    {
        label: 'CMS',
        items: [
            {
                label: 'Banner',
                items: [
                    {    icon: 'pi pi-fw pi-shopping-cart',
                        label: 'Category',
                        routerLink: ['/crm/category']
                        },
                    {    
                        icon: 'pi pi-fw pi-shopping-cart',
                        label: 'Sub_Category',
                        routerLink: ['/crm/subcategory']
                        
                    },
                    {   icon: 'pi pi-fw pi-user-plus',
                        label: 'Sponsor',
                        routerLink: ['/crm/sponsor']
                        
                    }
                ]
            },
            {
                label: 'Slider',
                items:[
                    {
                        label: 'Profile',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/customer']
                    },
                    {
                        label: 'Order',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/order']
                    },
                ]
            },

        ]
    },
    {
        label: 'Catalogs',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: ['/customer']
    },
    {
        label: 'Sponsors',
        icon: 'pi pi-fw pi-user-plus',
        routerLink: ['/customer']
    },
    {
        label: 'Categories',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['/customer']
    },
    {
        label: 'Appointment',
        icon: 'pi pi-fw pi-desktop',
        routerLink: ['/customer']
    },
    
]