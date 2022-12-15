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
        items: [
            {
                label: 'OrderList',
                icon: 'pi pi-fw pi-shopping-cart',
                routerLink: ['/order']
            },
            {
                label: 'orderTransaction',
                icon: 'pi pi-fw pi-shopping-cart',
                routerLink: ['/order/order-transaction']
            },
            {
                label: 'shipment',
                icon: 'pi pi-fw pi-shopping-cart',
                routerLink: ['/order/shipment']
            }
        ],

    },
    {
        label: 'CMS',
        items: [
            {
                label: 'Banner',
                items: [
                    {
                        icon: 'pi pi-fw pi-shopping-cart',
                        label: 'Category',
                        routerLink: ['/crm/category']
                    },
                    {
                        icon: 'pi pi-fw pi-shopping-cart',
                        label: 'SubCategory',
                        routerLink: ['/crm/subcategory']

                    },
                    {
                        icon: 'pi pi-fw pi-user-plus',
                        label: 'Sponsor',
                        routerLink: ['/crm/sponsor']

                    }
                ]
            },
            {
                label: 'Slider',
                items: [
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
        label: 'Catalog',
        items: [
            {
                label: 'Product',
                icon: 'pi pi-fw pi-shopping-cart',
                routerLink: ['/product/productlist']
            },
            {
                label: 'Category',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/product/categorylist']
            },

        ]
    },
    {
        label: 'Marketing',
        items: [
            {
                label: 'Coupons',
                icon: 'pi pi-fw pi-shopping-cart',
                routerLink: ['/marketing']
            },
            {
                label: 'Rewards',
                items: [
                    {
                        label: 'Redemption',
                        icon: 'pi pi-fw pi-money-bill',
                        routerLink: ['/marketing/redemption']
                    }
                ]
            }
            ]
    },
    {
        label: 'Appointment',
        items: [
            {
                label: 'Appointment',
                icon: 'pi pi-fw pi-shopping-cart',
                routerLink: ['/appoinment']
            },
            
            ]
    }
]