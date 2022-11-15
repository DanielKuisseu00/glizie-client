import moment from "moment";

export const stylistData = [
  {
    name: "Melonie",
    avatar:
      "https://i.pinimg.com/originals/b8/5d/7d/b85d7dc7fe9d6510edda4383f7371448.jpg",
    images: [
      "https://i.pinimg.com/originals/b1/d3/4e/b1d34e86ce94418826591fd9e0c43c99.jpg",
      "https://m.kriyya.com/media/catalog/product/cache/6/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/k/r/kriyya_kinky_curly_lace_wig.jpg",
      "https://i.pinimg.com/originals/01/dc/2e/01dc2ee2cfb9869b803558426b47e42a.jpg",
    ],
    shopName: "Best Nails Salon",
    hoursOpen: "9:00AM - 12:00PM",
    isPro: true,
    id: Math.random(100000),
    rating: 4.7,
    reviews: [
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
    ],
    distance: 2.3,
    location: "Miami, Florida",
    hoursAvaiable: [
      { time: moment("12:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("1:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("2:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("4:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("5:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("6:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("8:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("1:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("2:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("5:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("6:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("8:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("11:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("12:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
    ],
    services: [
      {
        name: "Braids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Kids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Weaves",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Natural Hair",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Mens Haircut",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Fish Bones",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
    ],
  },
  {
    name: "Melonie",
    avatar:
      "https://i.pinimg.com/originals/b8/5d/7d/b85d7dc7fe9d6510edda4383f7371448.jpg",
    images: [
      "https://i.pinimg.com/originals/b1/d3/4e/b1d34e86ce94418826591fd9e0c43c99.jpg",
      "https://m.kriyya.com/media/catalog/product/cache/6/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/k/r/kriyya_kinky_curly_lace_wig.jpg",
      "https://i.pinimg.com/originals/01/dc/2e/01dc2ee2cfb9869b803558426b47e42a.jpg",
    ],
    shopName: "Best Nails Salon",
    hoursOpen: "9:00AM - 12:00PM",
    isPro: true,
    id: Math.random(100000),
    rating: 4.9,
    distance: 1,
    location: "Miami, Florida",
    reviews: [
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
    ],
    hoursAvaiable: [
      { time: moment("12:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("1:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("2:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("4:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("5:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("6:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("8:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("1:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("2:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("5:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("6:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("8:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("11:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("12:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
    ],
    services: [
      {
        name: "Braids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Kids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Weaves",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Natural Hair",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Mens Haircut",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Fish Bones",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
    ],
  },
  {
    name: "Melonie",
    avatar:
      "https://i.pinimg.com/originals/b8/5d/7d/b85d7dc7fe9d6510edda4383f7371448.jpg",
    images: [
      "https://i.pinimg.com/originals/b1/d3/4e/b1d34e86ce94418826591fd9e0c43c99.jpg",
      "https://m.kriyya.com/media/catalog/product/cache/6/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/k/r/kriyya_kinky_curly_lace_wig.jpg",
      "https://i.pinimg.com/originals/01/dc/2e/01dc2ee2cfb9869b803558426b47e42a.jpg",
    ],
    shopName: "Best Nails Salon",
    hoursOpen: "9:00AM - 12:00PM",
    id: Math.random(100000),
    rating: 4.7,
    isPro: false,
    distance: 2.1,
    location: "Miami, Florida",
    reviews: [
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
    ],
    hoursAvaiable: [
      { time: moment("12:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("1:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("2:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("4:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("5:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("6:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("8:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("1:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("2:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("5:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("6:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("8:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("11:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("12:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
    ],
    services: [
      {
        name: "Braids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Kids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Weaves",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Natural Hair",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Mens Haircut",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Fish Bones",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
    ],
  },
  {
    name: "Melonie",
    avatar:
      "https://i.pinimg.com/originals/b8/5d/7d/b85d7dc7fe9d6510edda4383f7371448.jpg",
    images: [
      "https://i.pinimg.com/originals/b1/d3/4e/b1d34e86ce94418826591fd9e0c43c99.jpg",
      "https://m.kriyya.com/media/catalog/product/cache/6/small_image/270x270/9df78eab33525d08d6e5fb8d27136e95/k/r/kriyya_kinky_curly_lace_wig.jpg",
      "https://i.pinimg.com/originals/01/dc/2e/01dc2ee2cfb9869b803558426b47e42a.jpg",
    ],
    shopName: "Best Nails Salon",
    hoursOpen: "9:00AM - 12:00PM",
    id: Math.random(100000),
    rating: 5,
    isPro: false,
    distance: 3,
    location: "Miami, Florida",
    reviews: [
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
      {
        name: "meme",
        comment: "Melonie was very nice and profesional.",
        avatar:
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      },
    ],
    hoursAvaiable: [
      { time: moment("12:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("1:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("2:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("4:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("5:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("6:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("8:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 AM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 AM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("1:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("2:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("3:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("5:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("6:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("7:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("8:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("9:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("10:00 PM", "hh:mm A").format("h:mm A"), avaiable: true },
      { time: moment("11:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
      { time: moment("12:00 PM", "hh:mm A").format("h:mm A"), avaiable: false },
    ],
    services: [
      {
        name: "Braids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Kids",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Weaves",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Natural Hair",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Men's Haircut",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
      {
        name: "Fish Bones",
        subServices: [
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
          {
            title: "Wash and Blowdry",
            price: 100.0,
            description: "Deep wash and conditioning followed with a blow dry",
            image:
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
          },
        ],
      },
    ],
  },
];
