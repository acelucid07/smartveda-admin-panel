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
                        label: 'SubCategory',
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
                        label: 'Slider1',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/crm/slider']
                    },
                    {
                        label: 'Slider2',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/crm/slider']
                    },
                ]
            },

        ]
    },
    {
        label: 'PMS',
        items: [
            {
                label: 'ProductList',
                items: [
                    {    icon: 'pi pi-fw pi-shopping-cart',
                        label: 'productlist',
                        routerLink: ['/product/productlist']
                        },
                    {    
                        icon: 'pi pi-fw pi-shopping-cart',
                        label: 'Update',
                        routerLink: ['/product/editProduct']
                        
                    },
                    
                ]
            },
            {
                label: 'Slider',
                items:[
                    {
                        label: 'Slider1',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/crm/slider']
                    },
                    {
                        label: 'Slider2',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/crm/slider']
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