export const SideNaveMenueRoute = [
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/dashboard']
    },
    // {
    //     label: 'Profile',
    //     icon: 'pi pi-fw pi-user',
    //     routerLink: ['/customer']
    // },
    {
        label: 'Roles & Permission',
        items: [
            {
                label: 'Admin List',
                icon: 'pi pi-list',
                routerLink: ['/roleandpermission/adminlist']
            },
            {
                label: 'Permitted Module List',
                icon: 'pi pi-list',
                routerLink: ['/modulepermission/rolelist']
            },
        ]
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
                label: 'Banner Special',
               
                        icon: 'pi pi-list',
                        routerLink: ['/cms/banner']
            },
            {
                label: 'Feature Product',
               
                        icon: 'pi pi-list',
                        routerLink: ['/cms/feature']
            },
            // {
            //     label: 'Slider',
            //     items: [
            //         {
            //             label: 'Slider1',
            //             icon: 'pi pi-fw pi-user',
            //             routerLink: ['/cms/slider']
            //         },
            //         {
            //             label: 'Slider2',
            //             icon: 'pi pi-fw pi-shopping-cart',
            //             routerLink: ['/cms/slider']
            //         },
            //     ]
            // },

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
            label: 'User',
            items: [
                {
                    label: 'User List',
                    icon: 'pi pi-list',
                    routerLink: ['/user/userlist']
                },
                {
                    label: 'Query List',
                    icon: 'pi pi-question-circle',
                    routerLink: ['/user/querycontent']
                },
            ]
        },
    // {
    //     label: 'Bundle',
    //     items: [
    //         {
    //             label: 'Bundle List',
    //             icon: 'pi pi-list',
    //             routerLink: ['/bundle/bundlelist']
    //         },
    //     ]
    // },
    // {
    //     label: 'Influencers',
    //     items: [
    //         {
    //             label: 'Edit Basic Cost',
    //             icon: 'pi pi-user-edit',
    //             routerLink: ['/influencers/influencerlist']
    //         },
    //         {
    //             label: 'Edit Influencer Cost',
    //             icon: 'pi pi-plus-circle',
    //             routerLink: ['/influencers/influencercost']
    //         },
    //         {
    //             label: 'Add Influencer Details',
    //             icon: 'pi pi-plus',
    //             routerLink: ['/influencers/influencerdetails']
    //         },
    //     ]
    // },
    {
        label: 'Leads',
        items: [
            {
                label: 'Leads List',
                icon: 'pi pi-list',
                routerLink: ['/leads/leadslist']
            },
        ]
    },
    {
        label: 'Rating & Review',
        items: [
            {
                label: 'Rating List',
                icon: 'pi pi-list',
                routerLink: ['/rating/ratinglist']
            },
            {
                label: 'Review List',
                icon: 'pi pi-list',
                routerLink: ['/review/reviewlist']
            },
            {
                label: 'Reviewer List',
                icon: 'pi pi-list',
                routerLink: ['/reviewer/reviewerlist']
            },
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Rating Criteria List',
                        icon: 'pi pi-list',
                        routerLink: ['/ratesettings/ratingcriterialist']
                    },
                    {
                        label: 'UserType List',
                        icon: 'pi pi-list',
                        routerLink: ['/usertypesettings/usertypelist']
                    }
                ]
               
            }
        ]
    }
]