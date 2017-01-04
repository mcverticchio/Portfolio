var projects = [{
  id: '1',
  title: 'Store to Door: Grocery Store Delivery App',
  img: 'images/storeToDoor.png',
  live: 'https://store-to-door.herokuapp.com/',
  code: 'https://github.com/ConnorFieldUser/Final_Project',
  description: 'Store to Door is a grocery store delivery application that provides a customer front-end interface with a back-end driver-side view.  Customers are able to view item details, add and delete items from their cart, and place an order to be delivered to their homes.  This project was developed using django/python technology as well as React and Backbone Frameworks for the front-end.',
  tech: ['HTML', 'CSS/SCSS', 'Bootstrap', 'React', 'Backbone', 'Django/Python'],
  images: ['images/sd1.png', 'images/sd2.png', 'images/sd3.png', 'images/sd4.png', 'images/sd5.png', 'images/sd6.png']
}, {
  id: '2',
  title: 'Majestic Thai Restaurant Ordering App',
  img: 'images/majThai.png',
  live: 'https://mcverticchio.github.io/7.4-Majestic-Thai/',
  code: 'https://github.com/mcverticchio/7.4-Majestic-Thai',
  description: 'Majestic Thai is a restaurant application that displays menu items.  Users are able to add items to a cart and view the total.  Once orders are placed the information is saved to the tiny-lasagna-server. I am continually developing my projects and plan to add a "kitchen view" that allows kitchen staff to view pending orders.',
  tech: ['HTML', 'CSS/SCSS', 'Bootstrap', 'React', 'Backbone'],
  images: ['images/maj1.png', 'images/maj2.png']
},{
  id: '3',
  title: 'Github Recreation',
  img: 'images/gh.png',
  live: 'https://mcverticchio.github.io/4.4-Github-Recreation/',
  code: 'https://github.com/mcverticchio/4.4-Github-Recreation',
  description: 'Github Recreation is exactly what it sounds like, a recreation of Github! I used an external API request to access real data from my Github profile and display it on the recreation.  I also incorporated javascript features like functional iterators to display my data.',
  tech: ['HTML', 'CSS/SCSS', 'Bootstrap', 'jQuery/Javascript', 'Underscore'],
  images: ['images/github1.png','images/github2.png']
},{
  id: '4',
  title: 'Skateboard Brand Design Comp',
  img: 'images/skateboard.png',
  live: 'https://mcverticchio.github.io/2.2-sass-bootstrap/',
  code: 'https://github.com/mcverticchio/2.2-sass-bootstrap',
  description: 'I used Bootstrap components to create an attractive design that mirrored the design comp. I used media queries and other bootstrap elements to produce a mobile responsive layout.',
  tech: ['HTML', 'CSS/SCSS', 'Bootstrap'],
  images: ['images/skate.png', 'images/skatemobile1.png', 'images/skatemobile2.png','images/skatemobile3.png','images/skatemobile4.png',]
},{
  id: '5',
  title: 'Surf and Paddle',
  img: 'images/surfPaddle.png',
  live: 'https://mcverticchio.github.io/1.4-pixel-perfect/',
  code: 'https://github.com/mcverticchio/1.4-pixel-perfect',
  description: 'Surf and Paddle incorporates an SCSS compiler.  I used scss to position elements in the pixel position they were originally placed in our design comp.',
  tech: ['HTML', 'CSS', 'SCSS'],
  images: ['images/surf.png']
},{
  id: '6',
  title: 'Octocats Gallery',
  img: 'images/octocat1.png',
  live: 'https://mcverticchio.github.io/1.2-octocats/',
  code: 'https://github.com/mcverticchio/1.2-octocats',
  description: 'The Octocats Gallery was one of my first assignments at the Iron Yard. This project was a strictly for layout practice and demonstrates my ability to correctly position elements using only HTML and CSS.',
  tech: ['HTML', 'CSS'],
  images:['images/octocat.png']
}];

module.exports = {
  projects: projects
};
