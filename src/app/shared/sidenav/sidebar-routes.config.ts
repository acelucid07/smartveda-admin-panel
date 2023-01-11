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
                        routerLink: ['/cms/category']
                    },
                    {
                        icon: 'pi pi-fw pi-shopping-cart',
                        label: 'SubCategory',
                        routerLink: ['/cms/subcategory']

                    },
                    {
                        icon: 'pi pi-fw pi-user-plus',
                        label: 'Sponsor',
                        routerLink: ['/cms/sponsor']

                    }
                ]
            },
            {
                label: 'Slider',
                items: [
                    {
                        label: 'Slider1',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/cms/slider']
                    },
                    {
                        label: 'Slider2',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['/cms/slider']
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
                icon: 'pi pi-fw pi-calendar',
                routerLink: ['/appointment']
            },
            
            ]
    },
    {
        label: 'Bundle',
        items: [
            {
                label: 'Create Bundle',
                icon: 'pi pi-box',
                routerLink: ['/bundle/createbundle']
            },
            {
                label: 'Add influencers',
                icon: 'pi pi-users',
                routerLink: ['/bundle/addinfluencers']
            },
            {
                label: 'Upload Image',
                icon: 'pi pi-image',
                routerLink: ['/bundle/uploadimage']
            },
            {
                label: 'Bundle List',
                icon: 'pi pi-list',
                routerLink: ['/bundle/bundlelist']
            },
        ]
    }
]