import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Ankit',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Nikita',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      category: "Shirts",
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Product",
      countInStock: "5",
      imgsrc:
        "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      title: "Shirt of Cool Boy",
      amount: "215",
    },
    {
      category: "Suit",
      brand: "Fashion",
      rating: 4,
      numReviews: 10,
      description: "Kurti Description - Rayon Red kurti in handblock print Palazzo Description - Solid Rayon Pant",
      countInStock: "5",
      imgsrc:
        "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      title: "ANNI DESIGNER Women's Raspberry Handpainted Suit Set (Rayon Black)",
      amount: "7999",
    },
    {
      category: "Shirts",
      brand: "Nike",
      rating: 5,
      numReviews: 10,
      countInStock: "5",
      description: "High Quality Product",
      imgsrc:
        "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
      title: "ANNI DESIGNER Women's Raspberry",
      amount: "5",
    },
    {
      category: "Shirts",
      brand: "Nike",
      rating: 3.5,
      numReviews: 10,
      countInStock: "5",
      description: "High Quality Product",
      imgsrc:
        "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      title: "Jeans for Boys",
      amount: "321",
    },
    {
      category: "Shirts",
      brand: "Nike",
      rating: 3,
      numReviews: 10,
      countInStock: "5",
      description: "High Quality Product",
      imgsrc:
        "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=330&q=80",
      title: "Tops for Girls",
      amount: "9000",
    },
    {
      category: "Shirts",
      brand: "Nike",
      rating: 0,
      countInStock: "0",
      numReviews: 10,
      description: 
      "Kurti Description - Rayon Red kurti in handblock print Palazzo Description - Solid Rayon Pant",
  
      imgsrc:
        "https://images.unsplash.com/photo-1564155487168-0cc54036ec47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=515&q=80",
      title: "Numerology",
      amount: "5000",
    },
  ]
};
  
  export default data;
  