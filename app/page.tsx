import Link from 'next/link';
import {ArrowUpRight,Clock3,MapPin,MessageCircle} from 'lucide-react';
import {business,whatsappLink} from '@/lib/data';
import {CTA,Reviews} from '@/components/Site';

const menuMoments=[
  {title:'Burgers',copy:'The juicy, crispy, stacked kind.',image:'/images/food-2.jpeg',className:'menu-card menu-card-large'},
  {title:'Submarines',copy:'Big fillings. Zero boring bites.',image:'/images/food-1.jpeg',className:'menu-card'},
  {title:'Fresh drinks',copy:'Cool down with something bright.',image:'/images/menu-drinks.jpeg',className:'menu-card'}
];

export default function Home(){return <><section className="home-hero"><div className="container home-hero-grid"><div className="hero-copy"><span className="eyebrow">Food worth the detour</span><h1>Big flavour.<br/><em>Good mood.</em></h1><p>Weligama&apos;s easy-going stop for halal comfort food, refreshing drinks and late-night cravings.</p><div className="hero-actions"><Link className="btn" href="/menu">Browse the menu <ArrowUpRight size={16}/></Link><a className="text-link" href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin size={16}/> Find our place</a></div><div className="hero-facts"><span><Clock3 size={17}/><b>Open late</b> until 1 AM</span><span><MessageCircle size={17}/><b>Free delivery</b> in Weligama</span></div></div><div className="hero-photo"><img src="/images/food-2.jpeg" alt="Burgers and crispy chicken served at Coffiyano"/><div className="hero-photo-note"><span>Made for</span><b>right now.</b></div></div></div></section>

<section className="marquee" aria-label="Coffiyano highlights"><div><span>HALAL FOOD</span><i>+</i><span>FRESH JUICES</span><i>+</i><span>LATE NIGHTS</span><i>+</i><span>FREE DELIVERY</span><i>+</i><span>GOOD MOOD FOOD</span></div></section>

<section className="section home-menu"><div className="container"><div className="home-section-head"><div><span className="eyebrow">A little something for everyone</span><h2>What are you craving?</h2></div><Link href="/menu" className="text-link">View all menu items <ArrowUpRight size={16}/></Link></div><div className="menu-showcase">{menuMoments.map(item=><Link className={item.className} href="/menu" key={item.title}><img src={item.image} alt={item.title}/><div><span>Explore</span><h3>{item.title}</h3><p>{item.copy}</p></div></Link>)}</div></div></section>

<section className="section story-band"><div className="container story-grid"><div className="story-photos"><img src="/images/storefront.webp" alt="Coffiyano storefront in Weligama"/><img src="/images/food-3.jpeg" alt="A snack served at Coffiyano"/></div><div className="story-copy"><span className="eyebrow">Your local food stop</span><h2>Come hungry.<br/><em>Stay a while.</em></h2><p>Whether you&apos;re finishing a beach day, catching up with friends or looking for an easy dinner at home, Coffiyano is ready with the kind of food that always hits the spot.</p><div className="story-links"><a href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin size={18}/> 100/A, Samaraweera Place</a><Link href="/about"><span>Our story</span><ArrowUpRight size={17}/></Link></div></div></div></section>

<section className="section guest-section"><div className="container"><Reviews compact/></div></section>

<section className="section visit-section"><div className="container visit-grid"><div><span className="eyebrow">A good bite is never far</span><h2>Weligama<br/><em>is hungry.</em></h2></div><div><p>Drop in for a burger, a submarine, crispy chicken or a cool juice. Our kitchen is open late and delivery is on us.</p><div className="visit-actions"><a className="btn" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Order on WhatsApp <ArrowUpRight size={16}/></a><Link className="text-link" href="/location">Opening hours <ArrowUpRight size={16}/></Link></div></div></div></section>
<div className="container"><CTA/></div></>}
