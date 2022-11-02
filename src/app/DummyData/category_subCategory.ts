 export let category= [
    {
      "id": 2,
      "name": "Electronics",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "position": "head"
    },
    {
      "id": 3,
      "name": "Mobiles, Tablets & More",
      "image": "test2 image",
      "hyperlink": "www.goolge.com",
      "position": "head"
    },
    {
      id: 4,
      "name": "Men's Fashion & Accessories",
      "image": "test4 image",
      "hyperlink": "www.goolge.com",
      "position": "head"
    },
    {
      "id": 5,
      "name": "Women's Fashion & Accessories",
      "image": "test5 image",
      "hyperlink": "www.goolge.com",
      "position": "head"
    },
    {
      "id": 6,
      "name": "testig",
      "image": "test6 image",
      "hyperlink": "www.goolge.com",
      "position": "left"
    },
    {
      "id": 7,
      "name": "testing ck",
      "image": "test7 image",
      "hyperlink": "www.goolge.com",
      "position": "left"
    },
    {
      "name": "testing ck",
      "image": "test8 image",
      "hyperlink": "www.goolge.com",
      "position": "left",
      "id": 8
    }
  ]


  export let  sub_category= [
    {
      "id": 2,
      "name": "Football",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "1",
        "name": "Sports & Fitness"
      }
    },
    {
      "id": 4,
      "name": "Fitness Accessories",
      "image": "test2 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 1,
        "name": "Sports & Fitness"
      }
    },
    {
      "id": 5,
      "name": "Strength Training",
      "image": "test3 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 1,
        "name": "Sports & Fitness"
      }
    },
    {
      "id": 6,
      "name": "Televisions",
      "image": "test4 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 2,
        "name": "Electronics"
      }
    },
    {
      "id": 7,
      "name": "Headphones",
      "image": "test5 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 2,
        "name": "Electronics"
      }
    },
    {
      "id": 8,
      "name": "Home Entertainment Systems",
      "image": "test6 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 2,
        "name": "Electronics"
      }
    },
    {
      "id": 9,
      "name": "Cameras and DSLR Cameras",
      "image": "test9 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 2,
        "name": "Electronics"
      }
    },
    {
      "id": 10,
      "name": "Musical Instruments & professionals Audio",
      "image": "test10 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 2,
        "name": "Electronics"
      }
    },
    {
      "id": 11,
      "name": "Gaming Consoles",
      "image": "test11 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 2,
        "name": "Electronics"
      }
    },
    {
      "id": 12,
      "name": "Mobiles & Smart Phones",
      "image": "test12 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 3,
        "name": "Mobiles, Tablets & More"
      }
    },
    {
      "id": 13,
      "name": "Cases and Covers",
      "image": "test13 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 3,
        "name": "Mobiles, Tablets & More"
      }
    },
    {
      "id": 14,
      "name": "Screen Protectors",
      "image": "test14 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 3,
        "name": "Mobiles, Tablets & More"
      }
    },
    {
      "id": 15,
      "name": "Power Banks",
      "image": "test16 image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": 3,
        "name": "Mobiles, Tablets & More"
      }
    },
    {
      "id": 16,
      "name": "Tablets",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "3",
        "name": "Mobiles, Tablets & More"
      }
    },
    {
      "id": 17,
      "name": "Smart watches and Wearables",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "3",
        "name": "Mobiles, Tablets & More"
      }
    },
    {
      "id": 18,
      "name": "Clothings",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "4",
        "name": "Men's Fashion & Accessories"
      }
    },
    {
      "id": 19,
      "name": "T-shirts and Polos",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "4",
        "name": "Men's Fashion & Accessories"
      }
    },
    {
      "id": 20,
      "name": "Shirts",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "4",
        "name": "Men's Fashion & Accessories"
      }
    },
    {
      "id": 21,
      "name": "Jeans",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "4",
        "name": "Men's Fashion & Accessories"
      }
    },
    {
      "id": 22,
      "name": "Innerware",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "4",
        "name": "Men's Fashion & Accessories"
      }
    },
    {
      "id": 23,
      "name": "Watches",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "4",
        "name": "Men's Fashion & Accessories"
      }
    },
    {
      "id": 24,
      "name": "Sunglasses",
      "image": "test image",
      "hyperlink": "www.goolge.com",
      "parent_category": {
        "id": "4",
        "name": "Men's Fashion & Accessories"
      }
    },
    {
      "name": "hb sjb sbj bjsb jhs`",
      "image": "bh djshgbhjsdnjsb",
      "hyperlink": "B JBJSB SJB",
      "parent_category": {
        "id": "145",
        "name": "hjcb shs bhb"
      },
      "id": 25
    }
  ]