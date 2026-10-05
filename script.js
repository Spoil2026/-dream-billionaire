/* =====================================================================
   DREAM BILLIONAIRE
   ---------------------------------------------------------------------
   HOW TO CHANGE THE TITLE:            edit GAME_TITLE below.
   HOW TO CHANGE THE STARTING BALANCE: edit STARTING_BALANCE below
                                       (numbers only, no commas or $).
   HOW TO ADD A PRODUCT:     add one new line inside PRODUCTS, e.g.
                             { id:"pony", name:"Pony", price:5000, category:"family" },
                             - id must be unique, lowercase, no spaces (use dashes)
                             - category must be one of: everyday, tech, cars, homes,
                               fashion, family, business, travel, experiences,
                               ridiculous, mega
                             - image is optional. If left out, the game looks for
                               images/<id>.webp  (so "pony" -> images/pony.webp)
                             - description is optional: description:"Short text"
   HOW TO REMOVE A PRODUCT:  delete its whole line.
   HOW TO CHANGE A PRICE:    change the number after price: (no commas).
   HOW TO CHANGE AN IMAGE:   put the file in the images folder and either name it
                             <id>.webp, or add image:"images/yourfile.jpg" to the line.
   ===================================================================== */

const GAME_TITLE = "Dream Billionaire";
const STARTING_BALANCE = 100000000000;  // $100 billion
const SAVE_KEY = "dreamBillionaire.v1";

/* ======================= PRODUCT LIST (edit me) ======================= */
const PRODUCTS = [
// EVERYDAY
{ id:"coffee", name:"Coffee", price:8, category:"everyday" },
{ id:"fast-food-meal", name:"Burger Meal", price:15, category:"everyday" },
{ id:"nice-dinner", name:"Nice Dinner", price:150, category:"everyday" },
{ id:"haircut", name:"Haircut", price:60, category:"everyday" },
{ id:"tank-of-gas", name:"Tank of Gas", price:100, category:"everyday" },
{ id:"grocery-shopping", name:"Groceries", price:300, category:"everyday" },
{ id:"family-dinner", name:"Family Dinner", price:500, category:"everyday" },
{ id:"new-mattress", name:"Mattress", price:2500, category:"everyday" },
{ id:"living-room-makeover", name:"Living Room", price:15000, category:"everyday" },
{ id:"whole-new-wardrobe", name:"New Wardrobe", price:25000, category:"everyday" },
{ id:"personal-chef", name:"Personal Chef", price:250000, category:"everyday" },
{ id:"personal-assistant", name:"Personal Assistant", price:150000, category:"everyday" },
{ id:"housekeeper", name:"Housekeeper", price:100000, category:"everyday" },
{ id:"private-security", name:"Bodyguards", price:500000, category:"everyday" },
// TECH & ENTERTAINMENT
{ id:"smartphone", name:"Flagship Smartphone", price:1500, category:"tech" },
{ id:"gaming-pc", name:"Gaming PC", price:6000, category:"tech" },
{ id:"gaming-room", name:"Gaming Room", price:50000, category:"tech" },
{ id:"recording-studio", name:"Recording Studio", price:100000, category:"tech" },
{ id:"movie-theater-room", name:"Movie Room", price:250000, category:"tech" },
{ id:"streaming-setup", name:"Streaming Setup", price:25000, category:"tech" },
{ id:"arcade-room", name:"Arcade Room", price:150000, category:"tech" },
{ id:"golf-simulator", name:"Golf Simulator", price:75000, category:"tech" },
{ id:"luxury-home-theater", name:"Home Theater", price:500000, category:"tech" },
{ id:"movie-theater-building", name:"Cinema Building", price:5000000, category:"tech" },
{ id:"build-video-game", name:"Video Game", price:10000000, category:"tech" },
{ id:"fund-dream-movie", name:"Movie", price:50000000, category:"tech" },
{ id:"build-movie-studio", name:"Movie Studio", price:250000000, category:"tech" },
// CARS & GARAGE
{ id:"dream-motorcycle", name:"Motorcycle", price:40000, category:"cars" },
{ id:"luxury-suv", name:"SUV", price:150000, category:"cars" },
{ id:"sports-car", name:"Sports Car", price:250000, category:"cars" },
{ id:"supercar", name:"Supercar", price:500000, category:"cars" },
{ id:"hypercar", name:"Hypercar", price:3000000, category:"cars" },
{ id:"classic-car-collection", name:"Classic Cars", price:10000000, category:"cars" },
{ id:"armored-suv", name:"Armored SUV", price:500000, category:"cars" },
{ id:"luxury-rv", name:"RV", price:750000, category:"cars" },
{ id:"custom-limousine", name:"Limousine", price:500000, category:"cars" },
{ id:"monster-truck", name:"Monster Truck", price:500000, category:"cars" },
{ id:"race-car", name:"Race Car", price:2000000, category:"cars" },
{ id:"car-museum", name:"Car Museum", price:25000000, category:"cars" },
{ id:"dream-garage", name:"100-Car Garage", price:50000000, category:"cars" },
{ id:"private-racetrack", name:"Racetrack", price:100000000, category:"cars" },
// HOMES & PROPERTY
{ id:"first-dream-house", name:"House", price:1000000, category:"homes" },
{ id:"beach-house", name:"Beach House", price:5000000, category:"homes" },
{ id:"mountain-cabin", name:"Cabin", price:3000000, category:"homes" },
{ id:"luxury-penthouse", name:"Penthouse", price:10000000, category:"homes" },
{ id:"hollywood-mansion", name:"Hollywood Mansion", price:25000000, category:"homes" },
{ id:"mega-mansion", name:"Mega Mansion", price:50000000, category:"homes" },
{ id:"private-ranch", name:"Ranch", price:25000000, category:"homes" },
{ id:"lakefront-estate", name:"Lake House", price:20000000, category:"homes" },
{ id:"luxury-family-compound", name:"Family Compound", price:75000000, category:"homes" },
{ id:"private-castle", name:"Castle", price:50000000, category:"homes" },
{ id:"private-island", name:"Private Island", price:120000000, category:"homes" },
{ id:"private-island-mansion", name:"Island Mansion", price:200000000, category:"homes" },
{ id:"build-neighborhood", name:"Neighborhood", price:300000000, category:"homes" },
// FAMILY & GENEROSITY
{ id:"parents-mortgage", name:"Parents' Mortgage", price:500000, category:"family" },
{ id:"mom-dream-house", name:"Mom's House", price:2000000, category:"family" },
{ id:"dad-dream-house", name:"Dad's House", price:2000000, category:"family" },
{ id:"best-friend-house", name:"Best Friend's House", price:1500000, category:"family" },
{ id:"family-new-cars", name:"Cars for Family", price:2000000, category:"family" },
{ id:"family-vacation", name:"Family Vacation", price:100000, category:"family" },
{ id:"luxury-family-vacation", name:"Luxury Family Vacation", price:500000, category:"family" },
{ id:"vacation-50-family", name:"50-Person Family Trip", price:2000000, category:"family" },
{ id:"college-funds", name:"Set Up College Funds", price:2000000, category:"family" },
{ id:"kids-million-each", name:"$1M for Each Kid", price:2000000, category:"family" },
{ id:"family-trust-fund", name:"Family Trust Fund", price:25000000, category:"family" },
{ id:"build-family-compound", name:"Build a Family Compound", price:50000000, category:"family" },
{ id:"retire-parents", name:"Parents' Retirement", price:10000000, category:"family" },
{ id:"give-100-families", name:"Gifts for 100 Families", price:10000000, category:"family" },
{ id:"give-100-million", name:"$100M Donation", price:100000000, category:"family" },
// FASHION & COLLECTING
{ id:"designer-outfit", name:"Designer Outfit", price:10000, category:"fashion" },
{ id:"luxury-jewelry", name:"Jewelry Set", price:50000, category:"fashion" },
{ id:"rare-watch", name:"Rare Watch", price:250000, category:"fashion" },
{ id:"million-dollar-watch", name:"$1M Watch", price:1000000, category:"fashion" },
{ id:"sneaker-collection", name:"Sneaker Collection", price:100000, category:"fashion" },
{ id:"designer-closet", name:"Designer Closet", price:500000, category:"fashion" },
{ id:"trading-cards", name:"Trading Cards", price:1000000, category:"fashion" },
{ id:"museum-art-piece", name:"Painting", price:10000000, category:"fashion" },
{ id:"private-art-collection", name:"Art Collection", price:100000000, category:"fashion" },
// TRAVEL
{ id:"first-class-world-trip", name:"World Trip", price:100000, category:"travel" },
{ id:"luxury-world-tour", name:"World Tour", price:1000000, category:"travel" },
{ id:"rent-island-month", name:"Island Rental", price:2000000, category:"travel" },
{ id:"private-helicopter", name:"Helicopter", price:5000000, category:"travel" },
{ id:"private-jet", name:"Private Jet", price:75000000, category:"travel" },
{ id:"jet-fleet", name:"Jet Fleet", price:300000000, category:"travel" },
{ id:"superyacht", name:"Superyacht", price:180000000, category:"travel" },
{ id:"mega-yacht", name:"Mega Yacht", price:500000000, category:"travel" },
{ id:"private-submarine", name:"Submarine", price:50000000, category:"travel" },
{ id:"luxury-train", name:"Train", price:100000000, category:"travel" },
{ id:"private-train", name:"Private Train", price:250000000, category:"travel" },
// BUSINESSES
{ id:"dream-business", name:"Business", price:500000, category:"business" },
{ id:"restaurant", name:"Open a Restaurant", price:1000000, category:"business" },
{ id:"nightclub", name:"Open a Nightclub", price:3000000, category:"business" },
{ id:"luxury-hotel", name:"Hotel", price:50000000, category:"business" },
{ id:"build-resort", name:"Resort", price:200000000, category:"business" },
{ id:"clothing-company", name:"Clothing Brand", price:2000000, category:"business" },
{ id:"car-company", name:"Car Company", price:500000000, category:"business" },
{ id:"video-game-studio", name:"Game Studio", price:25000000, category:"business" },
{ id:"start-movie-studio", name:"Film Studio", price:250000000, category:"business" },
{ id:"airline", name:"Airline", price:1000000000, category:"business" },
// EXPERIENCES (dream experiences + "things people don't usually think about")
{ id:"dream-bedroom", name:"Dream Bedroom", price:100000, category:"experiences" },
{ id:"organize-life", name:"Life Organizer", price:250000, category:"experiences" },
{ id:"never-fly-commercial", name:"Never Fly Commercial Again", price:100000000, category:"experiences" },
{ id:"full-time-driver", name:"Driver for 20 Years", price:2000000, category:"experiences" },
{ id:"giant-treehouse", name:"Treehouse", price:500000, category:"experiences" },
{ id:"ultimate-backyard", name:"Backyard", price:2000000, category:"experiences" },
{ id:"skatepark", name:"Build Your Own Skatepark", price:5000000, category:"experiences" },
{ id:"water-park", name:"Build Your Own Water Park", price:50000000, category:"experiences" },
{ id:"haunted-house", name:"Build Your Own Haunted House Attraction", price:25000000, category:"experiences" },
{ id:"home-aquarium", name:"Aquarium", price:5000000, category:"experiences" },
{ id:"secret-room", name:"Build a Secret Room", price:500000, category:"experiences" },
{ id:"underground-garage", name:"Build an Underground Garage", price:10000000, category:"experiences" },
{ id:"bowling-alley", name:"Bowling Alley", price:2000000, category:"experiences" },
{ id:"personal-museum", name:"Museum", price:25000000, category:"experiences" },
{ id:"zoo", name:"Build Your Own Zoo", price:100000000, category:"experiences" },
{ id:"luxury-campground", name:"Own a Luxury Campground", price:25000000, category:"experiences" },
{ id:"go-kart-track", name:"Build a Private Go-Kart Track", price:5000000, category:"experiences" },
{ id:"mini-golf", name:"Mini Golf", price:3000000, category:"experiences" },
{ id:"own-movie-theater", name:"Movie Theater", price:5000000, category:"experiences" },
{ id:"favorite-artist-concert", name:"Artist Concert", price:5000000, category:"experiences" },
{ id:"birthday-party", name:"Birthday Party", price:10000000, category:"experiences" },
{ id:"mansion-christmas", name:"Mansion Christmas", price:2000000, category:"experiences" },
{ id:"rent-resort", name:"Resort for Friends", price:5000000, category:"experiences" },
{ id:"go-to-space", name:"Trip to Space", price:50000000, category:"experiences" },
{ id:"zero-gravity", name:"Zero-Gravity Flight", price:1000000, category:"experiences" },
{ id:"expensive-vacation", name:"Dream Vacation", price:5000000, category:"experiences" },
{ id:"private-concert", name:"Private Concert", price:5000000, category:"experiences" },
{ id:"rent-stadium", name:"Stadium Rental", price:1000000, category:"experiences" },
{ id:"world-five-years", name:"5 Years Abroad", price:10000000, category:"experiences" },
{ id:"ultimate-wedding", name:"Wedding", price:10000000, category:"experiences" },
{ id:"family-reunion", name:"Family Reunion", price:2000000, category:"experiences" },
{ id:"hotel-ten-years", name:"10 Years in a Hotel", price:20000000, category:"experiences" },
{ id:"documentary-crew", name:"Documentary Crew", price:5000000, category:"experiences" },
// RIDICULOUS
{ id:"gold-toilet", name:"Gold Toilet", price:1000000, category:"ridiculous" },
{ id:"diamond-phone", name:"Diamond Phone", price:2000000, category:"ridiculous" },
{ id:"diamond-dog-collar", name:"Diamond Dog Collar", price:1000000, category:"ridiculous" },
{ id:"dinosaur-skeleton", name:"Dinosaur Skeleton", price:10000000, category:"ridiculous" },
{ id:"robot-collection", name:"Robot Collection", price:5000000, category:"ridiculous" },
{ id:"roller-coaster", name:"Private Roller Coaster", price:25000000, category:"ridiculous" },
{ id:"ferris-wheel", name:"Personal Ferris Wheel", price:10000000, category:"ridiculous" },
{ id:"indoor-snow-park", name:"Indoor Snow Park", price:50000000, category:"ridiculous" },
{ id:"concert-arena", name:"Concert Arena", price:100000000, category:"ridiculous" },
{ id:"personal-theme-park", name:"Theme Park", price:500000000, category:"ridiculous" },
{ id:"resort-island", name:"Resort Island", price:850000000, category:"ridiculous" },
// MEGA PURCHASES
{ id:"buy-skyscraper", name:"Skyscraper", price:500000000, category:"mega" },
{ id:"build-skyscraper", name:"New Skyscraper", price:1000000000, category:"mega" },
{ id:"hotel-chain", name:"Hotel Chain", price:750000000, category:"mega" },
{ id:"sports-franchise", name:"Sports Team", price:2500000000, category:"mega" },
{ id:"theme-park-resort", name:"Theme Park Resort", price:1000000000, category:"mega" },
{ id:"private-city", name:"Build Your Own Private City", price:2000000000, category:"mega" },
{ id:"charity-foundation", name:"Charity Foundation", price:1000000000, category:"mega" },
{ id:"give-1-billion", name:"$1B Donation", price:1000000000, category:"mega" },
// MORE ITEMS (added in update 2)
{ id:"ice-cream", name:"Ice Cream Cone", price:5, category:"everyday" },
{ id:"movie-night", name:"Movie Night for Two", price:60, category:"everyday" },
{ id:"spa-day", name:"Spa Day", price:500, category:"everyday" },
{ id:"month-groceries", name:"A Full Year of Groceries", price:15000, category:"everyday" },
{ id:"home-gym", name:"Dream Home Gym", price:15000, category:"everyday" },
{ id:"dental-makeover", name:"Dental Makeover", price:30000, category:"everyday" },
{ id:"kitchen-reno", name:"Full Kitchen Renovation", price:75000, category:"everyday" },
{ id:"personal-trainer", name:"Personal Trainer for a Year", price:100000, category:"everyday" },
{ id:"personal-stylist", name:"Personal Stylist for a Year", price:120000, category:"everyday" },
{ id:"pay-off-debt", name:"Pay Off All Your Debt", price:150000, category:"everyday" },
{ id:"wireless-earbuds", name:"Wireless Earbuds", price:250, category:"tech" },
{ id:"vr-headset", name:"VR Headset", price:700, category:"tech" },
{ id:"smartwatch", name:"Smartwatch", price:800, category:"tech" },
{ id:"drone", name:"Camera Drone", price:2000, category:"tech" },
{ id:"big-tv", name:"Big-Screen TV", price:3000, category:"tech" },
{ id:"camera-kit", name:"Pro Camera Kit", price:8000, category:"tech" },
{ id:"podcast-studio", name:"Podcast Studio", price:40000, category:"tech" },
{ id:"smart-home", name:"Whole-Home Smart Upgrade", price:100000, category:"tech" },
{ id:"esports-team", name:"Own an Esports Team", price:5000000, category:"tech" },
{ id:"launch-satellite", name:"Launch Your Own Satellite", price:10000000, category:"tech" },
{ id:"supercomputer-lab", name:"Build a Supercomputer Lab", price:25000000, category:"tech" },
{ id:"electric-commuter", name:"Electric Commuter Car", price:55000, category:"cars" },
{ id:"pickup-truck", name:"Pickup Truck", price:70000, category:"cars" },
{ id:"luxury-sedan", name:"Luxury Sedan", price:120000, category:"cars" },
{ id:"vintage-convertible", name:"Vintage Convertible", price:150000, category:"cars" },
{ id:"offroad-rig", name:"Off-Road Adventure Rig", price:180000, category:"cars" },
{ id:"rally-car", name:"Rally Car", price:400000, category:"cars" },
{ id:"tour-bus", name:"Custom Tour Bus", price:2000000, category:"cars" },
{ id:"electric-hypercar", name:"Electric Hypercar", price:2500000, category:"cars" },
{ id:"motorcade", name:"Armored Motorcade", price:3000000, category:"cars" },
{ id:"flying-car", name:"Flying Car Prototype", price:5000000, category:"cars" },
{ id:"vintage-race-car", name:"Vintage Race Car", price:15000000, category:"cars" },
{ id:"racing-team", name:"Professional Racing Team", price:80000000, category:"cars" },
{ id:"cozy-cottage", name:"Cozy Cottage", price:600000, category:"homes" },
{ id:"city-apartment", name:"City Apartment", price:800000, category:"homes" },
{ id:"overwater-bungalow", name:"Overwater Bungalow", price:3500000, category:"homes" },
{ id:"city-townhouse", name:"City Townhouse", price:4000000, category:"homes" },
{ id:"desert-retreat", name:"Desert Retreat", price:6000000, category:"homes" },
{ id:"ski-chalet", name:"Ski Chalet", price:8000000, category:"homes" },
{ id:"tropical-villa", name:"Tropical Villa", price:12000000, category:"homes" },
{ id:"bunker-home", name:"Underground Bunker Home", price:20000000, category:"homes" },
{ id:"vineyard-estate", name:"Vineyard Estate", price:30000000, category:"homes" },
{ id:"historic-estate", name:"Historic Estate", price:40000000, category:"homes" },
{ id:"city-block", name:"Buy an Entire City Block", price:150000000, category:"homes" },
{ id:"private-mountain", name:"Own a Private Mountain", price:250000000, category:"homes" },
{ id:"sunglasses", name:"Designer Sunglasses", price:500, category:"fashion" },
{ id:"tailored-suit", name:"Tailored Suit", price:5000, category:"fashion" },
{ id:"leather-handbag", name:"Leather Handbag", price:8000, category:"fashion" },
{ id:"comic-collection", name:"Rare Comic Collection", price:500000, category:"fashion" },
{ id:"diamond-ring", name:"Diamond Ring", price:500000, category:"fashion" },
{ id:"sports-memorabilia", name:"Signed Sports Memorabilia", price:1000000, category:"fashion" },
{ id:"diamond-necklace", name:"Diamond Necklace", price:2000000, category:"fashion" },
{ id:"wine-collection", name:"Vintage Wine Collection", price:2000000, category:"fashion" },
{ id:"antique-furniture", name:"Antique Furniture Collection", price:3000000, category:"fashion" },
{ id:"rare-gemstone", name:"Rare Gemstone", price:5000000, category:"fashion" },
{ id:"rare-coins", name:"Rare Coin Collection", price:5000000, category:"fashion" },
{ id:"vintage-jewelry", name:"Vintage Jewelry Collection", price:10000000, category:"fashion" },
{ id:"pink-diamond", name:"Pink Diamond", price:25000000, category:"fashion" },
{ id:"friend-student-loans", name:"Pay Off a Friend's Student Loans", price:60000, category:"family" },
{ id:"wedding-gift", name:"Wedding Gift for a Friend", price:100000, category:"family" },
{ id:"siblings-trip", name:"Surprise Siblings Vacation", price:150000, category:"family" },
{ id:"grandma-home", name:"Buy Grandma a Home", price:1500000, category:"family" },
{ id:"sibling-business", name:"Fund a Sibling's Business", price:1000000, category:"family" },
{ id:"town-playground", name:"Build a Playground for Your Town", price:1000000, category:"family" },
{ id:"animal-shelter", name:"Fund an Animal Shelter", price:2000000, category:"family" },
{ id:"medical-bills", name:"Pay Off Family Medical Bills", price:500000, category:"family" },
{ id:"clean-water", name:"Clean Water Project", price:5000000, category:"family" },
{ id:"family-medical-fund", name:"Family Medical Fund", price:5000000, category:"family" },
{ id:"local-school", name:"Fund a Local School", price:10000000, category:"family" },
{ id:"scholarship-program", name:"University Scholarship Program", price:25000000, category:"family" },
{ id:"hospital-wing", name:"Build a Hospital Wing", price:50000000, category:"family" },
{ id:"food-truck", name:"Food Truck", price:150000, category:"business" },
{ id:"bakery", name:"Open a Bakery", price:300000, category:"business" },
{ id:"coffee-shop", name:"Open a Coffee Shop", price:400000, category:"business" },
{ id:"bookstore", name:"Open a Bookstore", price:500000, category:"business" },
{ id:"gym-business", name:"Open a Gym", price:1500000, category:"business" },
{ id:"tech-startup", name:"Fund a Tech Startup", price:10000000, category:"business" },
{ id:"record-label", name:"Start a Record Label", price:10000000, category:"business" },
{ id:"local-sports-team", name:"Own a Local Sports Team", price:15000000, category:"business" },
{ id:"sneaker-brand", name:"Create Your Own Sneaker Brand", price:20000000, category:"business" },
{ id:"beverage-company", name:"Start a Beverage Company", price:25000000, category:"business" },
{ id:"ski-resort", name:"Own a Ski Resort", price:150000000, category:"business" },
{ id:"shopping-mall", name:"Buy a Shopping Mall", price:400000000, category:"business" },
{ id:"cruise-line", name:"Start Your Own Cruise Line", price:800000000, category:"business" },
{ id:"weekend-getaway", name:"Weekend Getaway", price:5000, category:"travel" },
{ id:"sleeper-train-trip", name:"Luxury Sleeper Train Trip", price:30000, category:"travel" },
{ id:"luxury-cruise", name:"Luxury Cruise", price:50000, category:"travel" },
{ id:"safari", name:"Safari Adventure", price:150000, category:"travel" },
{ id:"sailboat", name:"Sailboat", price:400000, category:"travel" },
{ id:"summer-villa", name:"Private Villa for a Summer", price:500000, category:"travel" },
{ id:"small-plane", name:"Small Private Plane", price:1500000, category:"travel" },
{ id:"luxury-catamaran", name:"Luxury Catamaran", price:3000000, category:"travel" },
{ id:"jet-charter-year", name:"A Year of Private Jet Charters", price:3000000, category:"travel" },
{ id:"seaplane", name:"Seaplane", price:6000000, category:"travel" },
{ id:"expedition-yacht", name:"Expedition Yacht", price:25000000, category:"travel" },
{ id:"private-airship", name:"Private Airship", price:90000000, category:"travel" },
{ id:"skydiving-day", name:"Skydiving Day", price:300, category:"experiences" },
{ id:"balloon-ride", name:"Hot Air Balloon Ride", price:800, category:"experiences" },
{ id:"concert-front-row", name:"Front-Row Concert Tickets", price:2000, category:"experiences" },
{ id:"cooking-class", name:"Cooking Class With a Famous Chef", price:5000, category:"experiences" },
{ id:"northern-lights", name:"Northern Lights Trip", price:15000, category:"experiences" },
{ id:"pilot-license", name:"Learn to Fly: Pilot's License", price:20000, category:"experiences" },
{ id:"chef-dinner", name:"Private Dinner by a Top Chef", price:25000, category:"experiences" },
{ id:"fireworks-show", name:"Private Fireworks Show", price:100000, category:"experiences" },
{ id:"rent-museum", name:"Rent a Museum for a Night", price:150000, category:"experiences" },
{ id:"everest", name:"Climb Everest With Guides", price:150000, category:"experiences" },
{ id:"surprise-proposal", name:"Surprise Proposal Production", price:250000, category:"experiences" },
{ id:"polar-expedition", name:"Polar Expedition", price:250000, category:"experiences" },
{ id:"rent-castle", name:"Rent a Castle for a Weekend", price:300000, category:"experiences" },
{ id:"island-wedding-week", name:"Island Wedding Week", price:3000000, category:"experiences" },
{ id:"music-festival", name:"Throw Your Own Music Festival", price:20000000, category:"experiences" },
{ id:"rubber-ducks", name:"Giant Rubber Duck Collection", price:5000, category:"ridiculous" },
{ id:"gold-bicycle", name:"Gold-Plated Bicycle", price:50000, category:"ridiculous" },
{ id:"statue-of-you", name:"Life-Size Statue of Yourself", price:100000, category:"ridiculous" },
{ id:"diamond-guitar", name:"Diamond-Studded Guitar", price:500000, category:"ridiculous" },
{ id:"gold-car", name:"Gold-Plated Car", price:800000, category:"ridiculous" },
{ id:"mansion-playhouse", name:"Mansion-Sized Playhouse", price:1000000, category:"ridiculous" },
{ id:"lazy-river", name:"Lazy River Pool", price:3000000, category:"ridiculous" },
{ id:"candy-factory", name:"Private Candy Factory", price:5000000, category:"ridiculous" },
{ id:"fireworks-year", name:"Fireworks Every Night for a Year", price:10000000, category:"ridiculous" },
{ id:"indoor-rainforest", name:"Indoor Rainforest", price:15000000, category:"ridiculous" },
{ id:"giant-mech", name:"Giant Piloted Robot", price:20000000, category:"ridiculous" },
{ id:"observatory", name:"Personal Space Observatory", price:30000000, category:"ridiculous" },
{ id:"ton-of-gold", name:"One Ton of Gold", price:90000000, category:"ridiculous" },
{ id:"free-housing", name:"Free Housing for 1,000 Families", price:300000000, category:"mega" },
{ id:"hospital", name:"Build a Full Hospital", price:750000000, category:"mega" },
{ id:"solar-farm", name:"Build a Giant Solar Farm", price:1000000000, category:"mega" },
{ id:"private-university", name:"Build a Private University", price:1500000000, category:"mega" },
{ id:"football-stadium", name:"Buy a Football Stadium", price:1500000000, category:"mega" },
{ id:"research-institute", name:"Fund a Medical Research Institute", price:2000000000, category:"mega" },
{ id:"island-chain", name:"Buy a Private Island Chain", price:3000000000, category:"mega" },
{ id:"space-station-module", name:"Build a Space Station Module", price:3000000000, category:"mega" },
{ id:"cruise-fleet", name:"Own a Cruise Fleet", price:3000000000, category:"mega" },
{ id:"moon-mission", name:"Private Moon Mission", price:4000000000, category:"mega" },
{ id:"major-airline", name:"Buy a Major Airline", price:5000000000, category:"mega" },
{ id:"studio-empire", name:"Buy a Movie Studio Empire", price:6000000000, category:"mega" },
// MORE ITEMS (added in update 3)
{ id:"pizza", name:"Pizza", price:20, category:"everyday" },
{ id:"pool-table", name:"Pool Table", price:8000, category:"everyday" },
{ id:"laptop", name:"Laptop", price:2000, category:"tech" },
{ id:"tablet", name:"Tablet", price:1000, category:"tech" },
{ id:"game-console", name:"Game Console", price:600, category:"tech" },
{ id:"headphones", name:"Headphones", price:400, category:"tech" },
{ id:"soundbar", name:"Soundbar", price:1000, category:"tech" },
{ id:"3d-printer", name:"3D Printer", price:1000, category:"tech" },
{ id:"robot-vacuum", name:"Robot Vacuum", price:700, category:"tech" },
{ id:"electric-guitar", name:"Electric Guitar", price:3000, category:"tech" },
{ id:"grand-piano", name:"Grand Piano", price:150000, category:"tech" },
{ id:"led-wall", name:"Giant LED Wall", price:400000, category:"tech" },
{ id:"e-bike", name:"Electric Bike", price:3000, category:"cars" },
{ id:"jet-ski", name:"Jet Ski", price:15000, category:"cars" },
{ id:"golf-cart", name:"Custom Golf Cart", price:20000, category:"cars" },
{ id:"tank", name:"Tank", price:6000000, category:"cars" },
{ id:"fighter-jet", name:"Fighter Jet", price:25000000, category:"cars" },
{ id:"sneakers", name:"Sneakers", price:150, category:"fashion" },
{ id:"hoodie", name:"Hoodie", price:80, category:"fashion" },
{ id:"boots", name:"Leather Boots", price:400, category:"fashion" },
{ id:"high-heels", name:"High Heels", price:800, category:"fashion" },
{ id:"leather-jacket", name:"Leather Jacket", price:1500, category:"fashion" },
{ id:"tuxedo", name:"Tuxedo", price:3000, category:"fashion" },
{ id:"custom-sneakers", name:"Custom Sneakers", price:5000, category:"fashion" },
{ id:"wedding-dress", name:"Wedding Dress", price:15000, category:"fashion" },
{ id:"pearl-necklace", name:"Pearl Necklace", price:20000, category:"fashion" },
{ id:"gold-chain", name:"Gold Chain", price:30000, category:"fashion" },
{ id:"jersey-collection", name:"Jersey Collection", price:50000, category:"fashion" },
{ id:"gold-watch", name:"Gold Watch", price:80000, category:"fashion" },
{ id:"diamond-earrings", name:"Diamond Earrings", price:100000, category:"fashion" },
{ id:"diamond-grill", name:"Diamond Grill", price:100000, category:"fashion" },
{ id:"diamond-bracelet", name:"Diamond Bracelet", price:200000, category:"fashion" },
{ id:"ruby-ring", name:"Ruby Ring", price:800000, category:"fashion" },
{ id:"emerald-necklace", name:"Emerald Necklace", price:1500000, category:"fashion" },
{ id:"jeweled-crown", name:"Jeweled Crown", price:20000000, category:"fashion" },
{ id:"stranger-groceries", name:"Pay a Stranger's Groceries", price:150, category:"family" },
{ id:"tip-1000", name:"$1,000 Tip", price:1000, category:"family" },
{ id:"stranger-rent", name:"Pay a Stranger's Rent", price:2000, category:"family" },
{ id:"teacher-gift", name:"Gift a Teacher $10,000", price:10000, category:"family" },
{ id:"adopt-family-holiday", name:"Holiday for a Family in Need", price:5000, category:"family" },
{ id:"nurse-loans", name:"Pay a Nurse's Student Loans", price:60000, category:"family" },
{ id:"food-bank", name:"Fund a Food Bank", price:1000000, category:"family" },
{ id:"town-gifts", name:"Gifts for a Whole Town", price:1000000, category:"family" },
{ id:"friends-100k", name:"$100,000 for Each Friend", price:1000000, category:"family" },
{ id:"library", name:"Build a Library", price:5000000, category:"family" },
{ id:"homeless-shelter", name:"Build a Shelter", price:10000000, category:"family" },
{ id:"give-1000-people", name:"$10,000 for 1,000 People", price:10000000, category:"family" },
{ id:"free-college-class", name:"Free College for a Class", price:20000000, category:"family" },
{ id:"medical-debt", name:"Erase a Town's Medical Debt", price:25000000, category:"family" },
{ id:"childrens-hospital", name:"Children's Hospital", price:100000000, category:"family" },
{ id:"lemonade-stand", name:"Lemonade Stand", price:500, category:"business" },
{ id:"rental-property", name:"Rental Property", price:400000, category:"business" },
{ id:"index-fund", name:"Index Fund", price:1000000, category:"business" },
{ id:"crypto-coins", name:"Crypto Coins", price:1000000, category:"business" },
{ id:"snack-brand", name:"Snack Brand", price:2000000, category:"business" },
{ id:"skincare-brand", name:"Skincare Brand", price:3000000, category:"business" },
{ id:"makeup-brand", name:"Makeup Brand", price:3000000, category:"business" },
{ id:"apartment-building", name:"Apartment Building", price:5000000, category:"business" },
{ id:"perfume-brand", name:"Perfume Brand", price:5000000, category:"business" },
{ id:"jewelry-brand", name:"Jewelry Brand", price:5000000, category:"business" },
{ id:"stock-portfolio", name:"Stock Portfolio", price:10000000, category:"business" },
{ id:"energy-drink", name:"Energy Drink Brand", price:10000000, category:"business" },
{ id:"farmland", name:"Farmland", price:20000000, category:"business" },
{ id:"watch-brand", name:"Watch Brand", price:25000000, category:"business" },
{ id:"toy-company", name:"Toy Company", price:30000000, category:"business" },
{ id:"treasury-bonds", name:"Treasury Bonds", price:50000000, category:"business" },
{ id:"venture-fund", name:"Venture Fund", price:100000000, category:"business" },
{ id:"restaurant-chain", name:"Restaurant Chain", price:100000000, category:"business" },
{ id:"fashion-house", name:"Fashion House", price:100000000, category:"business" },
{ id:"real-estate-portfolio", name:"Real Estate Portfolio", price:200000000, category:"business" },
{ id:"social-app", name:"Social Media App", price:200000000, category:"business" },
{ id:"gold-mine", name:"Gold Mine", price:300000000, category:"business" },
{ id:"casino", name:"Casino", price:500000000, category:"business" },
{ id:"streaming-service", name:"Streaming Service", price:500000000, category:"business" },
{ id:"bank", name:"Bank", price:750000000, category:"business" },
{ id:"camping-trip", name:"Camping Trip", price:1500, category:"travel" },
{ id:"road-trip", name:"Road Trip", price:3000, category:"travel" },
{ id:"theme-park-day", name:"Theme Park Day", price:1000, category:"travel" },
{ id:"theme-park-family", name:"Theme Park Family Trip", price:8000, category:"travel" },
{ id:"beach-week", name:"Beach Resort Week", price:6000, category:"travel" },
{ id:"ski-trip", name:"Ski Trip", price:10000, category:"travel" },
{ id:"theme-park-vip", name:"Theme Park VIP Week", price:50000, category:"travel" },
{ id:"honeymoon", name:"Honeymoon", price:100000, category:"travel" },
{ id:"theme-park-everyone", name:"Theme Park Trip for Everyone", price:150000, category:"travel" },
{ id:"family-cruise", name:"Family Cruise", price:300000, category:"travel" },
{ id:"family-every-continent", name:"Family Trip to Every Continent", price:1000000, category:"travel" },
{ id:"lottery-tickets", name:"Lottery Tickets", price:100, category:"experiences" },
{ id:"casino-night", name:"Casino Night", price:5000, category:"experiences" },
{ id:"poker-buyin", name:"Poker Tournament Buy-In", price:100000, category:"experiences" },
{ id:"pool-party", name:"Pool Party", price:50000, category:"experiences" },
{ id:"car-giveaway", name:"Car Giveaway", price:50000, category:"experiences" },
{ id:"bachelor-trip", name:"Bachelor Party Abroad", price:200000, category:"experiences" },
{ id:"private-poker-room", name:"Private Poker Room", price:500000, category:"experiences" },
{ id:"race-horse", name:"Race Horse", price:500000, category:"experiences" },
{ id:"high-roller-weekend", name:"High-Roller Weekend", price:1000000, category:"experiences" },
{ id:"big-game-bet", name:"Bet on the Big Game", price:1000000, category:"experiences" },
{ id:"mega-party", name:"Mega Party", price:5000000, category:"experiences" },
{ id:"horse-stable", name:"Horse Racing Stable", price:10000000, category:"experiences" },
{ id:"cruise-party", name:"Cruise Ship Party", price:15000000, category:"experiences" },
{ id:"hunting-rifle", name:"Hunting Rifle", price:3000, category:"ridiculous" },
{ id:"cringe-podcast", name:"Cringe Podcast", price:100000, category:"ridiculous" },
{ id:"friends-bad-idea", name:"Friend's Bad Business Idea", price:250000, category:"ridiculous" },
{ id:"bar", name:"Buy a Bar", price:500000, category:"ridiculous" },
{ id:"bad-band", name:"Terrible Band", price:500000, category:"ridiculous" },
{ id:"biker-club", name:"Biker Club", price:500000, category:"ridiculous" },
{ id:"antique-guns", name:"Antique Gun Collection", price:500000, category:"ridiculous" },
{ id:"cigar-club", name:"Cigar Club", price:1000000, category:"ridiculous" },
{ id:"poker-club", name:"Poker Club", price:1000000, category:"ridiculous" },
{ id:"shut-down-party", name:"Party That Gets Shut Down", price:1000000, category:"ridiculous" },
{ id:"shooting-range", name:"Private Shooting Range", price:2000000, category:"ridiculous" },
{ id:"car-club", name:"Car Club", price:2000000, category:"ridiculous" },
{ id:"pizza-for-city", name:"Pizza for a Whole City", price:2000000, category:"ridiculous" },
{ id:"digital-monkeys", name:"Overpriced Digital Monkeys", price:3000000, category:"ridiculous" },
{ id:"secret-society", name:"Secret Society", price:5000000, category:"ridiculous" },
{ id:"pirate-ship", name:"Pirate Ship", price:5000000, category:"ridiculous" },
{ id:"yacht-club", name:"Yacht Club", price:10000000, category:"ridiculous" },
{ id:"country-club", name:"Country Club", price:20000000, category:"ridiculous" },
{ id:"yacht-sight-unseen", name:"Yacht Bought Sight Unseen", price:20000000, category:"ridiculous" },
{ id:"sports-league", name:"Sports League", price:5000000000, category:"mega" },
{ id:"space-company", name:"Space Company", price:8000000000, category:"mega" },
];

/* Products are automatically sorted cheapest to most expensive, so the order
   you type them in does not matter. */
PRODUCTS.sort((a, b) => a.price - b.price);

/* Category tabs: [key, label]. Change labels here if you like. */
const CATEGORIES = [["all","ALL"],["everyday","EVERYDAY"],["tech","TECH"],["cars","CARS"],["homes","HOMES"],["fashion","FASHION"],["family","FAMILY"],["business","BUSINESS"],["travel","TRAVEL"],["experiences","EXPERIENCES"],["ridiculous","RIDICULOUS"],["mega","MEGA PURCHASES"]];

/* Products counted as "vehicles" in the statistics. */
const VEHICLE_IDS = ["dream-motorcycle","luxury-suv","sports-car","supercar","hypercar","armored-suv","luxury-rv","custom-limousine","monster-truck","race-car"];

/* ========================== GAME CODE (no need to edit) ========================== */
const money = new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0});
const $ = id => document.getElementById(id);
const byId = {}; PRODUCTS.forEach(p => byId[p.id] = p);
let qty = {}, spent = 0, shownBalance = STARTING_BALANCE;
const balance = () => STARTING_BALANCE - spent;

/* ---- Save / load ---- */
function save(){ try{ localStorage.setItem(SAVE_KEY, JSON.stringify({balance:balance(), qty, spent})); }catch(e){} }
function load(){
  try{
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if(!d || !d.qty) return false;
    qty = {}; spent = 0;
    for(const id in d.qty){ if(byId[id] && d.qty[id] > 0){ qty[id] = Math.floor(d.qty[id]); spent += qty[id]*byId[id].price; } }
    return spent > 0;
  }catch(e){ return false; }
}
function reset(){ qty = {}; spent = 0; save(); renderAll(true); window.scrollTo(0,0); }

/* ---- Build the page ---- */
function buildCards(){
  $("grid").innerHTML = PRODUCTS.map(p => `
    <article class="card" data-id="${p.id}" data-cat="${p.category}">
      <div class="pic"><div class="ph">${p.name.split(" ").slice(0,2).join(" ")}</div>
        <img src="${p.image || "images/"+p.id+".webp"}" alt="${p.name}" loading="lazy" onerror="this.remove()"></div>
      <div class="info"><div class="name">${p.name}</div><div class="price">${money.format(p.price)}</div>
        ${p.description ? `<div class="desc">${p.description}</div>` : ""}</div>
      <div class="ctl"><button class="sell" data-act="sell">SELL</button><div class="qty">0</div><button class="buy" data-act="buy">BUY</button></div>
    </article>`).join("");
  $("cats").innerHTML = CATEGORIES.map(([k,l],i) => `<button data-cat="${k}" class="${i?"":"on"}">${l}</button>`).join("");
}

/* ---- Money display with a quick count animation ---- */
function showBalance(animate, dir){
  const el = $("balance"), target = balance(), from = shownBalance;
  if(!animate || from === target){ el.textContent = money.format(target); shownBalance = target; return; }
  el.className = "balance " + dir;
  const t0 = performance.now();
  (function step(now){
    const k = Math.min(1,(now-t0)/350), e = 1-Math.pow(1-k,3);
    shownBalance = Math.round(from + (target-from)*e);
    el.textContent = money.format(shownBalance);
    if(k < 1) requestAnimationFrame(step); else { shownBalance = target; setTimeout(()=>el.className="balance",250); }
  })(t0);
}

/* ---- Toast (accumulates while holding a button) ---- */
let toastKey = "", toastAmt = 0, toastN = 0, toastTimer;
function toast(p, dir, n){
  const key = p.id + dir;
  if(key === toastKey){ toastAmt += n*p.price; toastN += n; } else { toastKey = key; toastAmt = n*p.price; toastN = n; }
  const t = $("toast");
  t.className = "toast show " + (dir === "buy" ? "neg" : "pos");
  t.querySelector("b").textContent = (dir === "buy" ? "-" : "+") + money.format(toastAmt);
  t.querySelector("span").textContent = `${toastN > 1 ? toastN + " × " : ""}${p.name} ${dir === "buy" ? "purchased" : "sold"}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ t.classList.remove("show"); toastKey = ""; }, 1100);
}

/* ---- Buy / Sell ---- */
function trade(id, dir, n){
  const p = byId[id], have = qty[id] || 0;
  n = dir === "buy" ? Math.min(n, Math.floor(balance()/p.price)) : Math.min(n, have);
  if(n <= 0) return 0;
  qty[id] = have + (dir === "buy" ? n : -n);
  spent += (dir === "buy" ? n : -n) * p.price;
  if(!qty[id]) delete qty[id];
  save(); showBalance(true, dir === "buy" ? "down" : "up"); renderAll(false); toast(p, dir, n);
  return n;
}

/* ---- Cards + summary ---- */
function renderAll(instant){
  const bal = balance();
  document.querySelectorAll(".card").forEach(c => {
    const p = byId[c.dataset.id], q = qty[p.id] || 0;
    c.querySelector(".qty").textContent = q.toLocaleString("en-US");
    c.querySelector(".sell").disabled = q < 1;
    c.querySelector(".buy").disabled = p.price > bal;
  });
  if(instant) showBalance(false);
  const ids = Object.keys(qty), items = ids.reduce((s,i)=>s+qty[i],0);
  const sumCat = cat => ids.reduce((s,i)=>s+(byId[i].category===cat ? qty[i]*byId[i].price : 0),0);
  const sumQty = f => ids.reduce((s,i)=>s+(f(byId[i]) ? qty[i] : 0),0);
  $("sStart").textContent = money.format(STARTING_BALANCE);
  $("sSpent").textContent = money.format(spent);
  $("sLeft").textContent = money.format(bal);
  $("sItems").textContent = items.toLocaleString("en-US");
  $("owned").innerHTML = ids.length
    ? ids.sort((a,b)=>byId[b].price-byId[a].price).map(i=>`<li>${byId[i].name} × ${qty[i].toLocaleString("en-US")}</li>`).join("")
    : `<li class="none">Nothing yet. Start dreaming above.</li>`;
  const top = ids.slice().sort((a,b)=>byId[b].price-byId[a].price)[0];
  const most = ids.slice().sort((a,b)=>qty[b]-qty[a])[0];
  const stat = [
    ["Most Expensive Purchase", top ? byId[top].name : "None yet"],
    ["Most Purchased Item", most ? `${byId[most].name} × ${qty[most].toLocaleString("en-US")}` : "None yet"],
    ["Number of Homes", sumQty(p=>p.category==="homes").toLocaleString("en-US")],
    ["Number of Vehicles", sumQty(p=>VEHICLE_IDS.includes(p.id)).toLocaleString("en-US")],
    ["Money Spent on Family", money.format(sumCat("family"))],
    ["Money Spent on Everyday Items", money.format(sumCat("everyday"))],
    ["Money Spent on Ridiculous Purchases", money.format(sumCat("ridiculous"))],
    ["Percentage of Fortune Remaining", (bal/STARTING_BALANCE*100).toFixed(2) + "%"]
  ];
  $("stats").innerHTML = stat.map(([l,v])=>`<div><span>${l}</span><b>${v}</b></div>`).join("");
}

/* ---- Controls: tap = 1 item, press and hold = repeat and speed up ---- */
let holdTimer, holdLoop;
function stopHold(){ clearTimeout(holdTimer); clearInterval(holdLoop); }
$("grid").addEventListener("pointerdown", e => {
  const b = e.target.closest("button[data-act]"); if(!b || b.disabled) return;
  const id = b.closest(".card").dataset.id, dir = b.dataset.act; let count = 0;
  trade(id, dir, 1);
  holdTimer = setTimeout(() => {
    holdLoop = setInterval(() => {
      count++;
      const n = count < 12 ? 1 : count < 24 ? 10 : count < 36 ? 100 : count < 48 ? 1000 : 10000;
      if(!trade(id, dir, n)) stopHold();
    }, 70);
  }, 400);
});
["pointerup","pointerleave","pointercancel"].forEach(ev => document.addEventListener(ev, stopHold));
$("grid").addEventListener("contextmenu", e => e.preventDefault());

$("cats").addEventListener("click", e => {
  const b = e.target.closest("button"); if(!b) return;
  document.querySelectorAll("#cats button").forEach(x => x.classList.toggle("on", x === b));
  document.querySelectorAll(".card").forEach(c => c.hidden = b.dataset.cat !== "all" && c.dataset.cat !== b.dataset.cat);
});

let welcomeMode="welcome";
function openWelcome(mode){
  const c = mode==="confirm"; welcomeMode = mode;
  $("wTitle").textContent = c ? "Start over?" : "Welcome back";
  $("welcomeMsg").textContent = c ? "This erases your current dream life and gives you the full fortune back." : `You have ${money.format(balance())} left. Pick up where you left off?`;
  $("cont").textContent = c ? "KEEP PLAYING" : "CONTINUE DREAM LIFE";
  $("fresh").textContent = c ? "YES, ERASE AND START OVER" : "START OVER";
  $("welcome").hidden = false;
}
$("reset").onclick = () => openWelcome("confirm");
$("fresh").onclick = () => { if(welcomeMode === "welcome") openWelcome("confirm"); else { $("welcome").hidden = true; reset(); } };
$("cont").onclick = () => $("welcome").hidden = true;

/* ---- Start ---- */
document.title = GAME_TITLE; $("brand").textContent = GAME_TITLE;
buildCards();
const hadSave = load();
renderAll(true);
if(hadSave){
  openWelcome("welcome");
}
