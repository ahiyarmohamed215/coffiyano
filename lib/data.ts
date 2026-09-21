export const business={name:'COFFIYANO',address:'100/A, Samaraweera Place, Weligama, Sri Lanka',telephone:'+94777436344',displayPhone:'0777 436344',whatsapp:'94777436344',maps:'https://maps.app.goo.gl/bbZ7Cr9mAkqvN1gR6?g_st=ic',instagram:'https://www.instagram.com/coffiyano.srilanka/',site:process.env.NEXT_PUBLIC_SITE_URL||'https://coffiyano.lk'};
export const hours=[{days:'Monday – Thursday',open:'10:30 AM',close:'1:00 AM (next day)'},{days:'Friday',open:'3:00 PM',close:'1:00 AM (Saturday)'},{days:'Saturday – Sunday',open:'10:30 AM',close:'1:00 AM (next day)'}];
export const categories=[
{name:'Burgers',items:[['Crispy Chicken Burger',700],['Beef Burger',850],['Beef with Cheese Burger',900],['Double Cheese Burger',750]]},
{name:'Submarines',items:[['Chicken Submarine Mini',450],['Chicken Submarine',800],['Beef Submarine Mini',550],['Beef Submarine',1000],['Crispy Chicken Submarine Mini',550],['Crispy Chicken Submarine',900],['Mexican Submarine (Beef)',1200],['Vegetable Submarine',550]]},
{name:'Spicy submarines',items:[['Spicy Chicken Submarine',900],['Spicy Beef Submarine',1150],['Spicy Mexican Beef Submarine',1350]]},
{name:'Sandwiches',items:[['Beef Sandwich',650],['Chicken Sandwich',500],['Vegetable Sandwich',400],['Egg Sandwich',450],['Cheese Sandwich',500]]},
{name:'Starters',items:[['French Fries',500],['Crispy Chicken Strips',750],['Loaded Fries with Crispy Chicken',1200],['Crispy Chicken Wings',550],['Cheese Balls (6 pcs)',350]]},
{name:'Hot dogs & buns',items:[['Hot Dog Bun',300],['Hot Dog with Mozzarella Cheese',450],['Chicken Bun',250],['Egg Bun',200]]},
{name:'Broasted chicken',items:[['2 pcs Broasted Chicken',650],['4 pcs Broasted Chicken',1200],['8 pcs Broasted Chicken',2100],['12 pcs Bucket Broasted Chicken',3000]]},
{name:'Milkshakes',items:[['Strawberry Milkshake',500],['Mango Milkshake',500],['Chocolate Milkshake',500],['Vanilla Milkshake',500]]},
{name:'Fresh juices',items:[['Lime Juice',200],['Watermelon Juice',300],['Papaya Juice',350],['Orange Juice',400],['Pineapple Juice',450],['Mango Juice',450],['Avocado Juice (seasonal)',500]]},
{name:'Mocktails',items:[['Peach Mocktail',700],['Roseberry Mocktail',750],['Lychee Mocktail',850]]},
{name:'Lassi',items:[['Sweet & Salt Lassi',650],['Salt Lassi',650],['Mango Lassi',700]]},
{name:'Mojitos',items:[['Blue Lagoon Mojito',650],['Passion Mojito',650],['Green Mint Mojito',650]]}
] as const;
export const whatsappLink=(message='Hello COFFIYANO! I would like to order food for delivery in Weligama.')=>`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const money=(n:number)=>`Rs. ${n.toLocaleString('en-LK')}`;
