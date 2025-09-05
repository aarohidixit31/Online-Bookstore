// navigation.js

export const navigation = {
  categories: [
    {
      id: 'genres',
      name: 'Genres',
      sections: [
        {
          id: 'genres-section',
          name: 'Genres',
          items: [
            { name: 'Fiction', href: 'http://localhost:3000/#' },
            { name: 'Non-Fiction', href: 'http://localhost:3000/#' },
            { name: 'Comics & Graphic Novels', href: 'http://localhost:3000/#' },
            { name: 'Art & Photography', href: 'http://localhost:3000/#' },
            { name: 'Browse All', href: 'http://localhost:3000/#' },
          ],
        },
      ],
    },
    {
      id: 'learning',
      name: 'Learning',
      sections: [
        {
          id: 'learning-section',
          name: 'Learning & Inspiration',
          items: [
            { name: 'Academic', href: 'http://localhost:3000/#' },
            { name: 'Education', href: 'http://localhost:3000/#' },
            { name: 'Religious/Spiritual', href: 'http://localhost:3000/#' },
            { name: 'Adult Coloring Books', href: 'http://localhost:3000/#' },
            { name: 'Browse All', href: 'http://localhost:3000/#' },
          ],
        },
      ],
    },
  ],
  pages: [
    {
      name: 'About Us',
      href: '', // Leave empty or set actual About page link when available
    },
  ],
};
