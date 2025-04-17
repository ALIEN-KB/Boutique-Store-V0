import { Product } from '../types/Product';

// Re-export the products data for consistency
export const products = [
  {
    id: '1',
    name: 'Silk Wrap Dress',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Elegant silk wrap dress with floral pattern, perfect for special occasions. Features a flattering V-neckline and adjustable waist tie.',
    category: 'dresses'
  },
  {
    id: '2',
    name: 'Tailored Blazer',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Sophisticated tailored blazer in premium Italian fabric. Featuring structured shoulders and a sleek silhouette for a professional look.',
    category: 'tops'
  },
  {
    id: '3',
    name: 'Vintage-Inspired Blouse',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
    description: 'Delicate blouse with vintage-inspired details. Made from lightweight fabric with lace trim and button details.',
    category: 'tops'
  },
  {
    id: '4',
    name: 'Statement Earrings',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description: 'Handcrafted statement earrings featuring natural stones and gold-plated details. These eye-catching accessories elevate any outfit.',
    category: 'accessories'
  },
  {
    id: '5',
    name: 'Linen Wide-Leg Pants',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Comfortable yet elegant wide-leg pants in 100% linen. High-waisted design with front pleats for a flattering fit.',
    category: 'new'
  },
  {
    id: '6',
    name: 'Cashmere Sweater',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Luxurious 100% cashmere sweater in a relaxed fit. Incredibly soft with ribbed detailing at the cuffs and hem.',
    category: 'tops'
  },
  {
    id: '7',
    name: 'Leather Tote Bag',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    description: 'Handcrafted leather tote with ample space for essentials. Features interior pockets and a detachable crossbody strap.',
    category: 'accessories'
  },
  {
    id: '8',
    name: 'Maxi Silk Skirt',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1577900232427-18219b8349fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
    description: 'Flowing silk maxi skirt with subtle pleating. The perfect statement piece that transitions seamlessly from day to evening wear.',
    category: 'sale'
  },
  {
    id: '9',
    name: 'Classic Trench Coat',
    price: 229.99,
    image: 'https://images.unsplash.com/photo-1591347887730-173aa607f8df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Timeless trench coat in water-resistant gabardine. Features classic details including storm flaps, epaulettes, and a belted waist.',
    category: 'new'
  },
  {
    id: '10',
    name: 'Embroidered Evening Dress',
    price: 289.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
    description: 'Stunning evening dress featuring intricate embroidery on delicate mesh. Fitted bodice with a gently flared skirt for an elegant silhouette.',
    category: 'dresses'
  },
  {
    id: '11',
    name: 'Leather Ankle Boots',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    description: 'Handcrafted leather ankle boots with a stacked heel. Versatile style that complements both casual and dressed-up outfits.',
    category: 'accessories'
  },
  {
    id: '12',
    name: 'Merino Wool Cardigan',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
    description: 'Soft merino wool cardigan in a relaxed fit. Perfect for layering with a luxurious feel and excellent temperature regulation.',
    category: 'tops'
  },
  {
    id: '13',
    name: 'Structured Mini Handbag',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description: 'Elegant structured handbag in premium leather with gold-tone hardware. Compact yet spacious enough for essentials.',
    category: 'sale'
  },
  {
    id: '14',
    name: 'Pleated Midi Dress',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80',
    description: 'Sophisticated pleated midi dress in lightweight fabric. Features a fitted waist and flowing skirt for a feminine silhouette.',
    category: 'dresses'
  },
  {
    id: '15',
    name: 'Linen Blend Blazer',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description: 'Lightweight linen blend blazer perfect for warmer weather. Tailored fit with subtle textured fabric.',
    category: 'tops'
  },
  {
    id: '16',
    name: 'Minimalist Gold Necklace',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1589128507457-4905ecee04c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description: 'Delicate 14k gold-filled necklace with a simple pendant. The perfect everyday accessory that pairs with any outfit.',
    category: 'accessories'
  }
];

// For backward compatibility
export const allProducts = products; 