export const SideNaveMenueRoute = [
    {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/customer/quib-user'],
    },
    {
        label: 'Movies',
        routerLink: ['/Movies/active-movies'],
        items: [
            {
                label: 'All Movies',
                routerLink: ['/Movies/all-movies']
            },
            {
                label: 'Active Movies',
                routerLink: ['/Movies/active-movies']
            },
        ]
    },
    {
        label: 'Quibs',
        routerLink: ['/Quib/recent-quib'],
        items: [
            {
                label: 'Recent Quib',
                routerLink: ['/Quib/recent-quib']
            },
            {
                label: 'Most Active',
                routerLink: ['/Quib/most-active']
            },
            // {
            //     label: 'Alpha Betic',
            //     routerLink: ['/Quib/alphabetic-quib']
            // }

        ]
    },


]