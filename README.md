# 🦉 Duolingo Clone – Scalable Web App on AWS Elastic Beanstalk

A fully functional Duolingo-style language learning app built with **Next.js**, **Drizzle ORM**, and **Neon**,  and **AWS Elastic Beanstalk** deployment with auto-scaling and monitoring.

---

## 🚀 Features

- 🔤 Interactive language learning UI inspired by Duolingo
- 📊 Admin dashboard for content and user management
- 🌩️ Deployed on AWS Elastic Beanstalk with load balancing & auto-scaling
- 📈 Real-time monitoring using CloudWatch

---

## 🛠️ Tech Stack

| Layer              | Tech/Service                |
|--------------------|----------------------------|
| Frontend           | Next.js (App Router)       |
| Backend/API        | Node.js (via Next.js)      |
| ORM / DB Access    | Drizzle ORM                |
| Database           | Neon (Serverless PostgreSQL)|



| Deployment         | AWS Elastic Beanstalk      |
| Monitoring         | AWS CloudWatch             |

---

## 📦 Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/your-username/duolingo-clone.git
cd duolingo-clone
```
### 2. Install Dependencies
```
npm install
```
### 3. Setup Environment Variables
Create a **.env** file in the root directory with all necessary secrets
```
DATABASE_URL=postgresql://user:password@host/db
CLERK_SECRET_KEY=your_clerk_backend_api_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_frontend_api_key
``` 
### 4. Apply Schema and seed data with Drizzle
```
npx drizzle-kit push
npx tsx scripts/seed.ts
```

### 5. Run the development server
- Start the Next.js dev server locally:
```
npm run dev
```
- Open http://localhost:3000 in your browser

![App Preview](./images/Screenshot%20from%202025-05-30%2018-59-29.png)


### 6. Prepare for deployment
- Build the production version:
```
npm run build
```
- Start the production server locally to confirm:
```
npm run start
```
### 7. Zip the build file for deployment
```
zip -r deploy.zip . -x "node_modules/*" ".git/*" 
```

## Duolingo Clone Deployment to Elastic Beanstalk

## Prerequisites
- AWS account

- AWS Elastic Beanstalk service enabled

- Your app built locally (npm run build)

- AWS IAM user with permissions to create and manage Elastic Beanstalk applications

### Step 1: Create an Elastic Beanstalk Application

**1.** Log in to the AWS Management Console.

**2.** Navigate to ***Elastic Beanstalk*** service.

**3. Click Create** Application.

**4.** Enter the application name (e.g., duolingo-clone).

**5.** Choose Platform:

- Select **Node.js** (choose the latest supported version).

**6.** Under **Application code**, select **Upload your code** and upload the ***.zip*** file you created.

***Click Create application.***

### Step 2 Access Your Deployed App

- Once the environment health is **green** and status is **Ready**, your app is live.

**Use the provided ***URL*** in the Elastic Beanstalk dashboard to visit your Duolingo Clone app.**






