# 1 YelpCamp

YelpCamp is a full-stack web application where users can browse, create and review campgrounds, with support for image uploads and interactive maps.

---

## 2. Overview

### Main Features

- User registration and login
- Create, edit and delete campgrounds
- Upload images with Cloudinary
- Interactive maps with MapTiler
- Reviews and ratings system
- Flash messages and validation
- Basic security hardening

### Tech Stack

- Backend: Node.js, Express
- Database: MongoDB + Mongoose
- Templating: EJS + EJS-Mate
- Auth: Passport, Passport-Local, Passport-Local-Mongoose
- Uploads: Multer, Cloudinary
- Maps: MapTiler SDK
- Security: Joi, Helmet, express-mongo-sanitize, sanitize-html
- Sessions: connect-mongo, connect-flash, dotenv

---

## 3. Requirements

- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas)
- Cloudinary account
- MapTiler account

---

---

## 4. Installation

From the project root:

```bash
npm install
```

---

## 5. Main Dependencies

```
@maptiler/client
cloudinary
connect-flash
connect-mongo
dotenv
ejs
ejs-mate
express
express-mongo-sanitize
express-session
helmet
joi
method-override
mongoose
multer
multer-storage-cloudinary
passport
passport-local
passport-local-mongoose
sanitize-html
```

Dev dependencies:

```
patch-package
postinstall-postinstall
```

---

## 6. Environment Variables

Create a `.env` file in the root:

```env
DB_URL=your_mongodb_connection_string
SECRET=some_long_random_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_api_key
CLOUDINARY_SECRET=your_cloud_api_secret

MAPTILER_API_KEY=your_maptiler_api_key
PORT=3000
```

Fallback DB if DB_URL not defined:

```
mongodb://localhost:27017/yelp-camp-maptiler
```

---

## 7. Running the Application

```bash
node app.js
```

Access at:

```
http://localhost:3000
```

---

## 8. Seeding Database (Optional)

This adds sample campgrounds to local MongoDB:

```bash
node seeds/index.js
```

⚠️ This script connects to:

```
mongodb://localhost:27017/yelp-camp-maptiler
```

Edit `seeds/index.js` if you want another database.

---

## 9. Authentication & Sessions

- Passport-based authentication
- Sessions stored with connect-mongo
- Flash messages via connect-flash
- Session secret from `.env` (SECRET)

---

## 10. Image Uploads (Cloudinary)

Configured in:

```
cloudinary/index.js
```

Uses:

- Multer
- Multer-Storage-Cloudinary

Requires:

```
CLOUDINARY_CLOUD_NAME
CLOUDINARY_KEY
CLOUDINARY_SECRET
```

Images stored under the "YelpCamp" folder in Cloudinary.

---

## 11. Maps & Geocoding

Server: uses `@maptiler/client` for geocoding  
Client: renders maps in:

```
public/javascripts/showPageMap.js
public/javascripts/clusterMap.js
```

Uses:

```
MAPTILER_API_KEY
```

---

## 12. Security & Validation

Enabled protections:

- Helmet – secure headers
- express-mongo-sanitize – NoSQL injection prevention
- sanitize-html – HTML sanitization
- Joi – request validation

Schemas defined in:

```
schemas.js
```

---

## 13. How To Run (Quick Summary)

```bash
npm install
# create .env file

node app.js
# Visit http://localhost:3000
```

Optional:

```bash
node seeds/index.js
```

---

## 14. Production Notes

For deployment:

- Set NODE_ENV=production
- Define all env variables in hosting environment
- Never commit .env to GitHub
- Use MongoDB Atlas + Cloudinary production credentials

---

## Final Result

You get:

- Auth system
- Campgrounds CRUD
- Reviews
- Image uploads
- Maps with geolocation
- Protected routes
- Session persistence

---
