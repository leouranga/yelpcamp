const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp-maptiler');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '68db008eb397a109794c39b1',  //68d44bc950f9807d78f3d629 old acc
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ]
      },
      title: `${sample(descriptors)} ${sample(places)}`,
      // images: `https://picsum.photos/400?random=${Math.random()}`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
      price,
      images: [
        {
          url: 'https://res.cloudinary.com/dh9eqivxn/image/upload/v1759003457/YelpCamp/ooghx9wspjn8zy4awzvy.avif',
          filename: 'YelpCamp/ooghx9wspjn8zy4awzvy',
          _id: new ObjectId('68d8434253474ff2c2537231')
        },
        {
          url: 'https://res.cloudinary.com/dh9eqivxn/image/upload/v1759003457/YelpCamp/b1armdvnazahol53fl5s.avif',
          filename: 'YelpCamp/b1armdvnazahol53fl5s',
        },
        {
          url: 'https://res.cloudinary.com/dh9eqivxn/image/upload/v1759003457/YelpCamp/v3buqfdpxakllz4hgz4c.avif',
          filename: 'YelpCamp/v3buqfdpxakllz4hgz4c',
        },
        {
          url: 'https://res.cloudinary.com/dh9eqivxn/image/upload/v1759003457/YelpCamp/pwxmplbinwe7a923gkzp.avif',
          filename: 'YelpCamp/pwxmplbinwe7a923gkzp',
        },
        {
          url: 'https://res.cloudinary.com/dh9eqivxn/image/upload/v1759003457/YelpCamp/v083bqizl2haqr1ohmot.avif',
          filename: 'YelpCamp/v083bqizl2haqr1ohmot',
        },
        {
          url: 'https://res.cloudinary.com/dh9eqivxn/image/upload/v1759003457/YelpCamp/xfeu6kv6malahzm9uo1t.avif',
          filename: 'YelpCamp/xfeu6kv6malahzm9uo1t',
        }
      ]

    })
    await camp.save();
  }
}

seedDB().then(() => {
  mongoose.connection.close();
})


