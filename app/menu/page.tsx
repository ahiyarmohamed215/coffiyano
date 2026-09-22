import type {Metadata} from 'next';
import {MenuBrowser,PageHero} from '@/components/Site';

export const metadata:Metadata={title:'Menu & Prices | Burgers, Submarines, Juices',description:'Browse the COFFIYANO menu in Weligama: burgers, submarines, halal chicken, fresh juices, milkshakes, mocktails, mojitos and prices in LKR.',alternates:{canonical:'/menu'}};

export default function Menu(){return <><PageHero eyebrow="Made to order" title="Follow your appetite." description="Start with a craving, find your favourite and send your order straight to our kitchen. All prices are in Sri Lankan rupees."/><section className="menu-page section"><div className="container"><div className="menu-page-aside"><p>From stacked burgers to bright tropical drinks, everything is made for an easy, satisfying moment.</p><span>Tap a category to explore.</span></div><MenuBrowser/><p className="page-note">Prices and product availability may change. Please confirm your order with our team before delivery.</p></div></section></>}
