# 🛒 MERN Stack E-Commerce Shop

A full-featured multi-vendor eCommerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This platform allows sellers to register and manage their own shops, while customers can browse, search, and purchase products.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Redux Toolkit, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT + Cookies
- **Image Uploads**: Multer + Cloudinary
- **Mailing**: Nodemailer (Shop activation emails)
- **Payment Gateway**: Stripe (for secure payments)
- **Deployment**: Vercel (Frontend) + Render/Hostinger (Backend)

---

## 📦 Features

### 🧾 User Features

- ✅ Sign up / Login with JWT Auth
- ✅ Email verification via activation link
- ✅ Password reset via email
- ✅ Profile update (name, email, avatar)
- ✅ Change password
- ✅ Shipping address management
- ✅ View order history
- ✅ Track order status
- ✅ Add products to cart
- ✅ Add/remove from wishlist
- ✅ Secure Stripe checkout

---

### 🏪 Seller Features

- ✅ Seller registration & email verification
- ✅ Seller dashboard with analytics
- ✅ Add / update / delete products
- ✅ Product image uploads (Cloudinary)
- ✅ Manage shop info
- ✅ Order management panel (pending, delivered, refunded)
- ✅ Withdraw earnings

---

### 🛍️ Product Features

- ✅ Product listing page
- ✅ Product details with images & description
- ✅ Filter by price, category, ratings
- ✅ Search functionality
- ✅ Reviews and ratings by users
- ✅ Discounts and price display

---

### 📦 Order Features

- ✅ Place orders via Stripe
- ✅ Shipping info form
- ✅ Order success & cancel pages
- ✅ Order tracking per user and seller
- ✅ Refund requests

---

### 🔐 Admin Features (Coming Soon or Optional)

- ⏳ Admin login
- ⏳ View/manage all sellers
- ⏳ View/manage all users
- ⏳ View/manage all products
- ⏳ Approve/ban sellers
- ⏳ Total sales dashboard

---

## 🛠 Folder Structure (Backend)

/backend
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── app.js
└── server.js



## 📁 Folder Structure (Frontend)

/frontend
│
├── redux/
├── components/
├── pages/
├── layouts/
├── App.js
└── index.js


---

## ⚙️ How to Run Locally

### 📌 Clone Repo

```bash
git clone https://github.com/your-username/mern-ecommerce-shop.git
cd mern-ecommerce-shop

📌 Setup Backend
cd backend
npm install
npm run dev

Create a .env file in /backend with the following:
PORT=5000
DB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SMTP_MAIL=your_email
SMTP_PASSWORD=your_app_password

📌 Setup Frontend
cd frontend
npm install
npm start

📮 API Endpoints
Method	Endpoint	Description
POST	/api/v2/shop/create-shop	Create shop & send email
POST	/api/v2/shop/activation	Activate seller account
POST	/api/v2/user/create-user	Register user
POST	/api/v2/user/login-user	Login user
GET	/api/v2/product/all	Get all products
POST	/api/v2/order/create	Place order
PUT	/api/v2/order/update/:id	Update order status

And many more...

✅ Status
🟢 MVP (Minimum Viable Product) in progress.
📦 Core features implemented.
🧠 Still building, testing, and improving.

🧑‍💻 Author
Tope Bello
Portfolio: topebello.vercel.app

🫶 Support
If you find this project useful, give it a ⭐️ on GitHub!
Pull requests, suggestions, and issues are welcome.


Let me know if you're including admin panel, chat system, or real-time updates later — I’ll expand the README to match 🔥
