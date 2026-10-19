// Cars Empire — site data.
// Everything the UI needs lives here: inventory, collection categories,
// makes, testimonials, FAQs and shared contact details.

export const site = {
  name: "Cars Empire",
  phone: "+44 1234 567 890",
  phoneHref: "tel:+441234567890",
  email: "sales@carsempire.co.uk",
  address: "Empire House, 1 Showroom Way, Business Park, London, EC1 2AB",
};

// ---- Inventory --------------------------------------------------------------
// price / mileageVal are numbers so the collection page can sort by them.
export const cars = [
  { id: 1,  make: "audi",        brand: "Audi",        body: "estate",      title: "Audi RS6 Avant",          sub: "4.0 V8 Bi-Turbo Quattro", year: 2022, mileageVal: 12400, fuel: "Petrol", gearbox: "Automatic", price: 94950,  ref: "CE-1042", tags: ["Performance", "Estate"],  badge: "Featured", image: "/images/car-01.svg" },
  { id: 2,  make: "mercedes",    brand: "Mercedes-AMG",body: "suv",         title: "Mercedes-AMG G63",        sub: "4.0 V8 Bi-Turbo",         year: 2021, mileageVal: 18900, fuel: "Petrol", gearbox: "Automatic", price: 139995, ref: "CE-1043", tags: ["Luxury", "SUV"],          badge: "Featured", image: "/images/car-02.svg" },
  { id: 3,  make: "bmw",         brand: "BMW",         body: "coupe",       title: "BMW M4 Competition",      sub: "3.0 Twin-Turbo",          year: 2023, mileageVal: 8250,  fuel: "Petrol", gearbox: "Automatic", price: 72500,  ref: "CE-1044", tags: ["Performance", "Coupe"],   badge: "Featured", image: "/images/car-03.svg" },
  { id: 4,  make: "porsche",     brand: "Porsche",     body: "sports",      title: "Porsche 911 Turbo S",     sub: "3.8 Flat-Six",            year: 2022, mileageVal: 6100,  fuel: "Petrol", gearbox: "PDK",       price: 168900, ref: "CE-1045", tags: ["Supercar", "Sports"],     badge: null,       image: "/images/car-04.svg" },
  { id: 5,  make: "audi",        brand: "Audi",        body: "suv",         title: "Audi RS Q8",              sub: "4.0 V8 Bi-Turbo Quattro", year: 2021, mileageVal: 21500, fuel: "Petrol", gearbox: "Automatic", price: 98750,  ref: "CE-1046", tags: ["Performance", "SUV"],     badge: null,       image: "/images/car-05.svg" },
  { id: 6,  make: "landrover",   brand: "Land Rover",  body: "suv",         title: "Range Rover Sport SVR",   sub: "5.0 Supercharged V8",     year: 2020, mileageVal: 29300, fuel: "Petrol", gearbox: "Automatic", price: 67995,  ref: "CE-1047", tags: ["Luxury", "SUV"],          badge: null,       image: "/images/car-06.svg" },
  { id: 7,  make: "mercedes",    brand: "Mercedes-AMG",body: "saloon",      title: "Mercedes-AMG C63 S",      sub: "4.0 V8 Bi-Turbo",         year: 2021, mileageVal: 16700, fuel: "Petrol", gearbox: "Automatic", price: 59950,  ref: "CE-1048", tags: ["Performance", "Saloon"],  badge: null,       image: "/images/car-07.svg" },
  { id: 8,  make: "bmw",         brand: "BMW",         body: "saloon",      title: "BMW M5 Competition",      sub: "4.4 V8 Twin-Turbo",       year: 2022, mileageVal: 14100, fuel: "Petrol", gearbox: "Automatic", price: 84900,  ref: "CE-1049", tags: ["Performance", "Saloon"],  badge: null,       image: "/images/car-08.svg" },
  { id: 9,  make: "lamborghini", brand: "Lamborghini", body: "suv",         title: "Lamborghini Urus",        sub: "4.0 V8 Bi-Turbo",         year: 2021, mileageVal: 11800, fuel: "Petrol", gearbox: "Automatic", price: 189000, ref: "CE-1050", tags: ["Supercar", "SUV"],        badge: "Rare",     image: "/images/car-09.svg" },
  { id: 10, make: "porsche",     brand: "Porsche",     body: "suv",         title: "Porsche Cayenne GTS",     sub: "4.0 V8 Twin-Turbo",       year: 2022, mileageVal: 13600, fuel: "Petrol", gearbox: "PDK",       price: 79995,  ref: "CE-1051", tags: ["Performance", "SUV"],     badge: null,       image: "/images/car-10.svg" },
  { id: 11, make: "audi",        brand: "Audi",        body: "supercar",    title: "Audi R8 V10 Performance", sub: "5.2 V10 Quattro",         year: 2020, mileageVal: 9400,  fuel: "Petrol", gearbox: "S tronic",  price: 124950, ref: "CE-1052", tags: ["Supercar", "Coupe"],      badge: "Rare",     image: "/images/car-11.svg" },
  { id: 12, make: "bentley",     brand: "Bentley",     body: "gt",          title: "Bentley Continental GT",  sub: "6.0 W12 Twin-Turbo",      year: 2021, mileageVal: 15200, fuel: "Petrol", gearbox: "Automatic", price: 154900, ref: "CE-1053", tags: ["Luxury", "GT"],           badge: null,       image: "/images/car-12.svg" },
  { id: 13, make: "nissan",      brand: "Nissan",      body: "coupe",       title: "Nissan GT-R Nismo",       sub: "3.8 V6 Twin-Turbo",       year: 2021, mileageVal: 7300,  fuel: "Petrol", gearbox: "Automatic", price: 149950, ref: "CE-1054", tags: ["JDM", "Coupe"],           badge: "Rare",     image: "/images/car-13.svg" },
  { id: 14, make: "toyota",      brand: "Toyota",      body: "coupe",       title: "Toyota GR Supra",         sub: "3.0 Twin-Scroll Turbo",   year: 2022, mileageVal: 10200, fuel: "Petrol", gearbox: "Automatic", price: 54950,  ref: "CE-1055", tags: ["JDM", "Coupe"],           badge: null,       image: "/images/car-14.svg" },
  { id: 15, make: "mercedes",    brand: "Mercedes-AMG",body: "gt",          title: "Mercedes-AMG GT 63",      sub: "4.0 V8 Bi-Turbo",         year: 2022, mileageVal: 12900, fuel: "Petrol", gearbox: "Automatic", price: 109950, ref: "CE-1056", tags: ["Performance", "GT"],      badge: null,       image: "/images/car-15.svg" },
];

export const formatPrice = (n) => "£" + n.toLocaleString("en-GB");
export const formatMiles = (n) => n.toLocaleString("en-GB") + " mi";

// ---- Collection categories (mega-menu + homepage strip) ---------------------
export const collections = [
  { key: "japanese",    label: "Japanese",     count: 42, image: "/images/col-japanese.svg" },
  { key: "german",      label: "German",       count: 38, image: "/images/col-german.svg" },
  { key: "italian",     label: "Italian",      count: 12, image: "/images/col-italian.svg" },
  { key: "british",     label: "British",      count: 9,  image: "/images/col-british.svg" },
  { key: "french",      label: "French",       count: 7,  image: "/images/col-french.svg" },
  { key: "jdm",         label: "JDM cars",     count: 24, image: "/images/col-jdm.svg" },
  { key: "supercars",   label: "Supercars",    count: 15, image: "/images/col-supercars.svg" },
  { key: "hypercars",   label: "Hypercars",    count: 3,  image: "/images/col-hypercars.svg" },
  { key: "performance", label: "Performance",  count: 28, image: "/images/col-performance.svg" },
  { key: "luxury",      label: "Luxury cars",  count: 31, image: "/images/col-luxury.svg" },
  { key: "suv",         label: "SUVs",         count: 26, image: "/images/col-suv.svg" },
  { key: "convertible", label: "Convertibles", count: 11, image: "/images/col-convertible.svg" },
  { key: "classic",     label: "Classic cars", count: 8,  image: "/images/col-classic.svg" },
  { key: "muscle",      label: "Muscle cars",  count: 6,  image: "/images/col-muscle.svg" },
];

// ---- Makes (monogram chips on the homepage) ---------------------------------
export const makes = [
  "Audi", "BMW", "Mercedes-AMG", "Porsche", "Lamborghini", "Bentley",
  "Land Rover", "Nissan", "Toyota", "Lexus", "Aston Martin", "Ferrari",
];

// ---- Filters for the collection page ----------------------------------------
export const makeFilters = [
  { key: "all",         label: "All makes" },
  { key: "audi",        label: "Audi" },
  { key: "bmw",         label: "BMW" },
  { key: "mercedes",    label: "Mercedes-AMG" },
  { key: "porsche",     label: "Porsche" },
  { key: "landrover",   label: "Land Rover" },
  { key: "lamborghini", label: "Lamborghini" },
  { key: "bentley",     label: "Bentley" },
  { key: "nissan",      label: "Nissan" },
  { key: "toyota",      label: "Toyota" },
];

export const bodyFilters = [
  { key: "all",      label: "All types" },
  { key: "suv",      label: "SUV" },
  { key: "coupe",    label: "Coupe" },
  { key: "saloon",   label: "Saloon" },
  { key: "estate",   label: "Estate" },
  { key: "sports",   label: "Sports" },
  { key: "supercar", label: "Supercar" },
  { key: "gt",       label: "Grand Tourer" },
];

export const sortOptions = [
  { key: "featured",   label: "Featured first" },
  { key: "newest",     label: "Newest" },
  { key: "price-asc",  label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
  { key: "miles-asc",  label: "Lowest mileage" },
];

// ---- Testimonials -----------------------------------------------------------
export const testimonials = [
  { name: "Luca Williams",  when: "2 months ago", text: "Faultless from first enquiry to delivery. The car was exactly as described and the whole process was effortless." },
  { name: "Jean-Marc Caliero", when: "1 month ago", text: "Superb specification and an honest, no-pressure team. Delivery to my door was quick and fully insured." },
  { name: "Mustafizur Rahaman", when: "3 weeks ago", text: "Outstanding service throughout. They handled the part-exchange and finance seamlessly for me." },
  { name: "Simon Islam", when: "1 month ago", text: "Just what I'd hoped for. A genuinely rare example, immaculate, and a fair price. Would buy again." },
  { name: "Asia Pietruszczak", when: "2 weeks ago", text: "Efficient, professional and a pleasure to deal with. The collection is seriously impressive." },
];

// ---- FAQ --------------------------------------------------------------------
export const faqs = [
  { q: "How do I reserve or buy a car?", a: "Call or email our team and we'll arrange a viewing or reserve the car for you. A refundable deposit secures it while paperwork is completed." },
  { q: "Do you offer finance?", a: "Yes. We arrange tailored funding — from Hire Purchase to lease purchase — through trusted lenders to suit your circumstances. No-obligation quotes are available." },
  { q: "Can you deliver nationwide?", a: "We deliver anywhere in the UK by enclosed, fully insured transport, discreetly to your door. International delivery can be arranged on request." },
  { q: "Do you take part exchange?", a: "Absolutely. We offer competitive, no-obligation valuations on your current car against any car in our collection." },
  { q: "Are the cars inspected?", a: "Every car is personally inspected, mechanically checked and fully prepared before sale, with history and provenance verified." },
];
