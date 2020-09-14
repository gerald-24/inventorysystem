module.exports = {
    users: [{
        empID: '34573',
        name: 'Gerald Casalme'
    }, {
        empID: '18250',
        name: 'Jeffrey Solis'
    }],
    productCategories: [{
            text: 'All',
            value: 0,
            icon: 'mdi-all-inclusive'
        },
        {
            text: 'Papers',
            value: 1,
            icon: 'mdi-file'
        },
        {
            text: 'Pen/Pencil',
            value: 2,
            icon: 'mdi-pencil-minus'
        }, {
            text: 'Tapes',
            value: 3,
            icon: 'mdi-tape-measure'
        }, {
            text: 'Markers',
            value: 4,
            icon: 'mdi-marker'
        }, {
            text: 'Others',
            value: 5,
            icon: 'mdi-shopping'
        },
    ],
    UoM: [{
            text: 'bottle',
            value: 0
        },
        {
            text: 'box',
            value: 1
        },
        {
            text: 'can',
            value: 2
        },
        {
            text: 'kilo',
            value: 3
        },
        {
            text: 'pack',
            value: 4
        },
        {
            text: 'pad',
            value: 5
        },
        {
            text: 'piece',
            value: 6
        },
        {
            text: 'ream',
            value: 7
        },
        {
            text: 'roll',
            value: 8
        },
        {
            text: 'tube',
            value: 9
        },
    ],
    ProductItems: [{
        ItemCode: 'ITM-20200909-1',
        ItemName: 'Mechanical Pencil',
        UoM: 1,
        QuantityPerPiece: 3,
        PricePerPiece: 100,
        ProductCategory: 2,
        ImageURL: 'https://www.vuemastery.com/images/vuemastery-white.svg',
        Description: 'MECHANICAL PENCIL 0.5 BRAND: YYYYYxxxxxxxxxxx',
        Stock: 10,
        allImage: ['https://www.vuemastery.com/images/vuemastery-white.svg', 'https://www.vuemastery.com/images/vuemastery-white.svg', 'https://www.vuemastery.com/images/vuemastery-white.svg']
    }, {
        ItemCode: 'ITM-20200909-2',
        ItemName: 'Mechanical Pencil',
        UoM: 1,
        QuantityPerPiece: 3,
        PricePerPiece: 110,
        ProductCategory: 2,
        ImageURL: 'https://www.vuemastery.com/images/vuemastery-white.svg',
        Description: 'MECHANICAL PENCIL 0.3 BRAND: XXXXX',
        Stock: 3,
        allImage: ['https://www.vuemastery.com/images/vuemastery-white.svg', 'https://www.vuemastery.com/images/vuemastery-white.svg', 'https://www.vuemastery.com/images/vuemastery-white.svg']
    }, {
        ItemCode: 'ITM-20200909-3',
        ItemName: 'Paper',
        UoM: 7,
        QuantityPerPiece: 1,
        PricePerPiece: 243,
        ProductCategory: 1,
        ImageURL: 'https://www.vuemastery.com/images/vuemastery-white.svg',
        Description: 'YELLOW PAPER BRAND: XXXXX',
        Stock: 0,
        allImage: ['https://www.vuemastery.com/images/vuemastery-white.svg', 'https://www.vuemastery.com/images/vuemastery-white.svg', 'https://www.vuemastery.com/images/vuemastery-white.svg']
    }]
}