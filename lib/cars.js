// Cars Empire — inventory data.
// Edit this list to add, remove or update cars. `make` drives the
// collection filters; `image` points to a file in /public/images.

export const cars = [
  {
    id: 1, make: "audi", title: "Audi RS6 Avant", sub: "4.0 V8 Bi-Turbo Quattro",
    year: 2022, mileage: "12,400 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£94,950", badge: "Featured", image: "/images/car-01.svg",
  },
  {
    id: 2, make: "mercedes", title: "Mercedes-AMG G63", sub: "4.0 V8 Bi-Turbo",
    year: 2021, mileage: "18,900 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£139,995", badge: "Featured", image: "/images/car-02.svg",
  },
  {
    id: 3, make: "bmw", title: "BMW M4 Competition", sub: "3.0 Twin-Turbo",
    year: 2023, mileage: "8,250 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£72,500", badge: "Featured", image: "/images/car-03.svg",
  },
  {
    id: 4, make: "porsche", title: "Porsche 911 Turbo S", sub: "3.8 Flat-Six",
    year: 2022, mileage: "6,100 mi", fuel: "Petrol", gearbox: "PDK",
    price: "£168,900", badge: null, image: "/images/car-04.svg",
  },
  {
    id: 5, make: "audi", title: "Audi RS Q8", sub: "4.0 V8 Bi-Turbo Quattro",
    year: 2021, mileage: "21,500 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£98,750", badge: null, image: "/images/car-05.svg",
  },
  {
    id: 6, make: "landrover", title: "Range Rover Sport SVR", sub: "5.0 Supercharged V8",
    year: 2020, mileage: "29,300 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£67,995", badge: null, image: "/images/car-06.svg",
  },
  {
    id: 7, make: "mercedes", title: "Mercedes-AMG C63 S", sub: "4.0 V8 Bi-Turbo",
    year: 2021, mileage: "16,700 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£59,950", badge: null, image: "/images/car-07.svg",
  },
  {
    id: 8, make: "bmw", title: "BMW M5 Competition", sub: "4.4 V8 Twin-Turbo",
    year: 2022, mileage: "14,100 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£84,900", badge: null, image: "/images/car-08.svg",
  },
  {
    id: 9, make: "lamborghini", title: "Lamborghini Urus", sub: "4.0 V8 Bi-Turbo",
    year: 2021, mileage: "11,800 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£189,000", badge: "Rare", image: "/images/car-09.svg",
  },
  {
    id: 10, make: "porsche", title: "Porsche Cayenne GTS", sub: "4.0 V8 Twin-Turbo",
    year: 2022, mileage: "13,600 mi", fuel: "Petrol", gearbox: "PDK",
    price: "£79,995", badge: null, image: "/images/car-10.svg",
  },
  {
    id: 11, make: "audi", title: "Audi R8 V10 Performance", sub: "5.2 V10 Quattro",
    year: 2020, mileage: "9,400 mi", fuel: "Petrol", gearbox: "S tronic",
    price: "£124,950", badge: "Rare", image: "/images/car-11.svg",
  },
  {
    id: 12, make: "bentley", title: "Bentley Continental GT", sub: "6.0 W12 Twin-Turbo",
    year: 2021, mileage: "15,200 mi", fuel: "Petrol", gearbox: "Auto",
    price: "£154,900", badge: null, image: "/images/car-12.svg",
  },
];

// Filter buttons shown on the collection page.
export const makeFilters = [
  { key: "all", label: "All" },
  { key: "audi", label: "Audi" },
  { key: "bmw", label: "BMW" },
  { key: "mercedes", label: "Mercedes-AMG" },
  { key: "porsche", label: "Porsche" },
  { key: "landrover", label: "Land Rover" },
  { key: "lamborghini", label: "Lamborghini" },
  { key: "bentley", label: "Bentley" },
];

// Shared business/contact details — change once, applied site-wide.
export const site = {
  name: "Cars Empire",
  phone: "+44 1234 567 890",
  phoneHref: "tel:+441234567890",
  email: "sales@carsempire.co.uk",
  address: "Empire House, 1 Showroom Way, Business Park, London, EC1 2AB",
};
