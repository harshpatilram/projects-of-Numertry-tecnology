# 🛒 Flipkart Clone Documentation

## 📋 Project Overview
A **Flipkart Clone** — an e-commerce web application replicating core functionalities of Flipkart, including product listings, user authentication, cart management, and order placement.

## ⚙️ Tech Stack
- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens), bcrypt for password hashing
- **API Communication:** Axios

## 🚀 Features Implemented
- 🔐 **User Authentication:**
  - User Registration & Login with JWT authentication
  - Password encryption using bcrypt

- 🛍️ **Product Management:**
  - Product listing with images, price, and details
  - Search and category-based filtering

- 🛒 **Cart Functionality:**
  - Add to Cart, Remove from Cart
  - View cart items with total price calculation

- 💳 **Checkout Process:**
  - Order placement
  - Mock payment integration (optional)

- 🔎 **Search & Filters:**
  - Search bar for product search
  - Filters by price, category, and ratings

- 📱 **Responsive Design:**
  - Fully responsive across devices using Bootstrap

## 📁 Project Structure
```
flipkart-clone/
├── client/ (React Frontend)
│   ├── public/
│   ├── src/
│   │   ├── components/ (Navbar, ProductCard, Cart, etc.)
│   │   ├── pages/ (Home, ProductDetails, Cart, Login, Register)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/ (Node.js Backend)
│   ├── config/ (DB Config, JWT Secret)
│   ├── controllers/ (ProductController, UserController, CartController)
│   ├── routes/ (productRoutes.js, userRoutes.js, cartRoutes.js)
│   ├── models/ (Product.js, User.js, Cart.js)
│   ├── app.js
│   └── package.json
│
└── README.md
```

## 🏗️ Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd flipkart-clone
   ```

2. **Frontend Setup:**
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Backend Setup:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Database Setup:**
   - Create a MySQL database named `flipkart_clone`
   - Run the provided SQL scripts to create tables (`users`, `products`, `cart`, `orders`)
   
5. **Environment Variables:**
   Create a `.env` file in `/server` with:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=flipkart_clone
   JWT_SECRET=your_jwt_secret
   ```

## 📡 API Documentation

### 🔐 **Authentication APIs**
- **Register:** `POST /api/users/register`
  - Body: `{ "name": "", "email": "", "password": "" }`

- **Login:** `POST /api/users/login`
  - Body: `{ "email": "", "password": "" }`
  - Response: JWT Token

### 🛍️ **Product APIs**
- **Get All Products:** `GET /api/products`
- **Get Product by ID:** `GET /api/products/:id`
- **Search Products:** `GET /api/products/search?query=keyword`

### 🛒 **Cart APIs**
- **Add to Cart:** `POST /api/cart`
  - Body: `{ "productId": "", "quantity": 1 }`

- **Get Cart Items:** `GET /api/cart`
- **Remove from Cart:** `DELETE /api/cart/:productId`

### 💳 **Order APIs**
- **Place Order:** `POST /api/orders`
  - Body: `{ "cartItems": [], "total": 100 }`

- **Get User Orders:** `GET /api/orders`

## 🖼️ Screenshots
- Home Page (Product Listings)
- Product Details Page
- Cart Page
- Login & Register Pages

## ⚡ Challenges Faced
- Implementing JWT-based authentication and protecting routes
- Handling image uploads for products
- Managing cart state between frontend and backend

## 📈 Future Enhancements
- Integrate real payment gateway (e.g., Stripe)
- Add product reviews & ratings
- Implement order tracking system

## 🧑‍💻 Credits
- Inspired by Flipkart (flipkart.com)
- Libraries used: React, Node.js, Express, MySQL, Axios, Bootstrap

## 📜 License
This project is licensed under the **MIT License**.

---



