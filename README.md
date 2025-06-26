
# 🛒 Trendy Products BD - E-Commerce Website

A fully customized e-commerce platform where users can explore trending products, add them to wishlist or cart, and place orders. Admin has full control over product and order management. The entire project is built and designed by me.

🔗 **Live Site:** [https://trendyproductsbd.netlify.app/](https://trendyproductsbd.netlify.app/)

⚠️ Note: This project is currently under development.update some section  

### admin login 

email:tanvir123@gmail.com
Password:Ta12345@



## ✨ Features

### 👤 User Features:
- ✅ Browse all products with a clean UI
- 💖 Add products to **Wishlist**
- 🛒 Add products to **Cart**
- 💳 Purchase products with full checkout flow
- 📦 View order status (Pending, Accepted, Delivered)

### 🛠️ Admin Features:
- 📦 Add / Edit / Delete Products
- ✅ Accept or Cancel Orders
- 🚚 Mark orders as **Delivered**
- 👥 View all users and role select

---

## 🔐 User Roles

- **User:** Regular shopping activities (Wishlist, Cart, Orders)
- **Admin:** Product & Order Management, User overview

---

## ⚙️ Technology Stack

| Area        | Stack                                     |
|-------------|-------------------------------------------|
| Frontend    | React.js, Tailwind CSS, React Router DOM |
| Backend     | Node.js, Express.js                       |
| Database    | MongoDB (Cloud)                           |
| Auth        | Firebase Authentication                   |
| Deployment  | Netlify (Frontend), Render/Vultr (Backend)|

---

## 🧪 Local Setup

### Step 1: Clone the repo
```bash
git clone https://github.com/your-username/trendy-products-bd.git
cd trendy-products-bd
Step 2: Setup Backend
bash
Copy
Edit
cd server
npm install
npm run start
Step 3: Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
🗂️ Folder Structure
scss
Copy
Edit
📦 trendy-products-bd
 ┣ 📂 client (React Frontend)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┗ App.jsx
 ┣ 📂 server (Node.js Backend)
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┗ index.js
 ┗ .env (Environment Variables)
🔐 Environment Variables Example
Create a .env file in both frontend and backend:

Backend .env
ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
📸 Screenshots
Add screenshots of:

✅ Product listing

✅ Wishlist

✅ Cart

✅ Admin dashboard

✅ Order tracking

🚀 Upcoming Features
 Stripe or bKash Payment Integration

 Product Ratings & Reviews

 Email Notification on Order Delivery

 Mobile App Version (React Native)

👨‍💻 Author
Tanvir Ahmed
📧 Email: tanvir@gmail.com
🌐 Live Site: trendyproductsbd.netlify.app