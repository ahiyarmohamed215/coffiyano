import type {Metadata} from 'next';
import {CTA,PageHero} from '@/components/Site';

export const metadata:Metadata={title:'Food & Restaurant Gallery',description:'See real photographs of COFFIYANO, its food, burgers, submarines and restaurant in Weligama, Sri Lanka.',alternates:{canonical:'/gallery'}};
const images=[
  ['/images/food-2.jpeg','Burgers and fried chicken at Coffiyano','gallery-feature'],
  ['/images/food-1.jpeg','Freshly prepared submarine sandwich at Coffiyano','gallery-tall'],
  ['/images/food-3.jpeg','Snack served at Coffiyano',''],
  ['/images/storefront.webp','Coffiyano restaurant entrance in Weligama','gallery-wide'],
  ['/images/menu-food.jpeg','Coffiyano printed food menu',''],
  ['/images/menu-drinks.jpeg','Coffiyano printed drinks menu','gallery-tall']
];
export default function Gallery(){return <><PageHero eyebrow="A taste in pictures" title="The good stuff, in view." description="A few real moments from our kitchen, menu and Weligama food stop."/><section className="section gallery-page"><div className="container"><div className="gallery-intro"><p>Food is better when you can almost taste it through the screen.</p><span>Scroll for cravings.</span></div><div className="gallery-masonry">{images.map(([src,alt,className])=><figure className={className} key={src}><img src={src} alt={alt} loading="lazy"/></figure>)}</div><CTA/></div></section></>}
