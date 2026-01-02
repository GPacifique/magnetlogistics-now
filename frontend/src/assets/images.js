// Centralized image paths for the frontend
// All images follow strict guidelines:
// - Photorealistic or high-quality 3D render
// - Neutral lighting (daylight)
// - Corporate logistics brand feel
// - Modern trucks, ships, planes
// - No logos or readable text
// - Aspect ratio: 16:9
// - High resolution (usable as hero banners)

export const images = {
  // Company logo (shown in Navbar/Footer)
  logo: '/images/logo.jpeg',

  // Hero slider images - Professional logistics photography
  heroSlides: [
    {
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80',
      title: 'Air Freight Solutions',
      description: 'Fast and reliable air cargo services worldwide',
    },
    {
      src: 'https://images.unsplash.com/photo-1565024317985-9b0d97cc8ca5?w=1920&h=1080&fit=crop&q=80',
      title: 'Ocean Shipping',
      description: 'Cost-effective sea freight for large shipments',
    },
    {
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop&q=80',
      title: 'Ground Transportation',
      description: 'Reliable truck and rail logistics services',
    },
    {
      src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop&q=80',
      title: 'Warehousing & Distribution',
      description: 'Secure storage and efficient distribution networks',
    },
  ],

  // Services images - High-quality photorealistic
  services: {
    air: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=80',
    sea: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=1080&fit=crop&q=80',
    inland: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&h=1080&fit=crop&q=80',
    customs: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=1080&fit=crop&q=80',
    warehousing: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop&q=80',
  },

  // About page image - Professional team/facility
  aboutStory: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&q=80',

  // Fallback placeholder
  placeholder: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=450&fit=crop&q=60',

  // Additional themed images - Modern logistics photography
  generated: {
    faces: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=675&fit=crop&q=80',
    train: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&h=1080&fit=crop&q=80',
    planes: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop&q=80',
    road: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop&q=80',
    boats: 'https://images.unsplash.com/photo-1565024317985-9b0d97cc8ca5?w=1920&h=1080&fit=crop&q=80',
    warehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&q=80',
    heroGlobal: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=1080&fit=crop&q=80',
  },
};
