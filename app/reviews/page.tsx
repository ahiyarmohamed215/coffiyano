import type {Metadata} from 'next';
import {Reviews,PageHero} from '@/components/Site';

export const metadata:Metadata={title:'Google Reviews & Guest Feedback',description:'Read real Google reviews for COFFIYANO, a halal fast-food restaurant in Weligama, Sri Lanka, and find our Google Maps listing.',alternates:{canonical:'/reviews'}};
export default function ReviewsPage(){return <><PageHero eyebrow="Guest feedback" title="The word on the street." description="See what guests have shared about their Coffiyano visits, straight from Google."/><section className="section reviews-page"><div className="container"><Reviews/></div></section></>}
