import type { Shirt } from './types';
import { Tag } from './types';

export const shirts: Shirt[] = [
  {
    id: 7,
    name: 'Snacksmosphere',
    caption: 'The cozy, joyful vibe created when food and company are just right.',
    imageUrl: 'https://i.ibb.co/yngggKDp/snacksmosphere.jpg',
    etsyUrl: 'https://www.etsy.com/listing/4392663848/snacksmosphere-definition-t-shirt-cozy',
    tags: [Tag.COZY, Tag.FUNNY],
  },
  {
    id: 5,
    name: "Don't Hog The Middle",
    caption: "A friendly reminder for your partner who thinks the whole court is theirs.",
    imageUrl: 'https://i.ibb.co/rf3pCpdd/hog-it.png',
    etsyUrl: 'https://www.etsy.com/listing/4391340972/funny-pickleball-shirt-if-you-are-going',
    tags: [Tag.FUNNY],
  },
  {
    id: 4,
    name: 'Seeking a 4.5+ Player',
    caption: 'Looking for a partner who can handle a fast-paced game... on and off the court.',
    imageUrl: 'https://i.ibb.co/Z6cVYqCN/4-5-dating.jpg',
    etsyUrl: 'https://www.etsy.com/listing/4391521889/funny-pickleball-sweatshirt-sorry-i-only',
    tags: [Tag.FUNNY],
  },
  {
    id: 1,
    name: 'Net-Cord Appreciation Society',
    caption: 'Proudly celebrating those lucky net-cord shots.',
    imageUrl: 'https://i.ibb.co/bR5fR1g0/net-cord.jpg',
    etsyUrl: 'https://www.etsy.com/listing/4387737719/net-cord-appreciation-society-funny',
    tags: [Tag.FUNNY],
  },
  {
    id: 2,
    name: 'I Lied About Getting It',
    caption: "Yours, Mine? Whose is it?",
    imageUrl: 'https://i.ibb.co/4wDqbXBH/Front.jpg',
    etsyUrl: 'https://www.etsy.com/listing/4387728219/i-lied-about-getting-it-funny-pickleball',
    tags: [Tag.FUNNY],
  },
  {
    id: 3,
    name: 'Dink Therapist',
    caption: 'Solving problems one dink at a time.',
    imageUrl: 'https://i.ibb.co/wZQw0PsV/dink-therapist.jpg',
    etsyUrl: 'https://www.etsy.com/listing/4388357547/dink-therapist-pickleball-t-shirt-funny',
    tags: [Tag.FUNNY],
  },
  {
    id: 6,
    name: 'Pickles: The Original Dink Master',
    caption: 'Meet Pickles, the goodest boy on the court and a true dink master.',
    imageUrl: 'https://i.ibb.co/6JLkhq4q/pickles.png',
    etsyUrl: 'https://www.etsy.com/listing/4388530144/pickles-the-original-dink-master-funny',
    tags: [Tag.FUNNY],
  },
];

export const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'Etsy', url: 'https://www.etsy.com/shop/PicklePunsApparel', icon: 'etsy' },
];