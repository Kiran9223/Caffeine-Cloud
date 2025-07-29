# Caffeine Cloud ☕️🌥️

Caffeine Cloud is a serverless application built on AWS that demonstrates how to integrate multiple AWS services into a scalable, cost-effective solution for a coffee shop application. 🚀

## Project Overview

This project leverages several AWS services:
- **AWS Lambda:** Executes serverless functions for backend operations. The current function retrieves coffee data from a DynamoDB table using either a `GetCommand` (for a single record) or a `ScanCommand` (for all records). ⚡
- **API Gateway:** Exposes REST API endpoints that route requests to the Lambda functions. 🌐
- **Amazon DynamoDB:** Serves as the NoSQL database to store coffee shop data. 🗄️
- **Amazon Cognito:** Handles authentication and authorization for secure access. 🔒
- **Amazon S3:** Hosts the static frontend assets. ☁️
- **Amazon CloudFront:** Distributes the frontend assets globally for low latency (as configured in the `.env` file). 🌍

## Architecture Diagram

*Include your architecture diagram here if available.* 🖼️

## Deployment Instructions

### Prerequisites
- AWS CLI configured with appropriate credentials. 🛠️
- Node.js and npm (or yarn) installed.
- An AWS account with permissions to create/use Lambda, API Gateway, DynamoDB, Cognito, S3, and CloudFront services.

### Deployment Steps

1. **Backend (Lambda & API Gateway):**
   - Package and deploy your Lambda functions using a deployment tool (e.g., AWS SAM, Serverless Framework) or manually via the AWS Console.
   - Configure API Gateway to route HTTP requests to the appropriate Lambda functions.

2. **Database (DynamoDB):**
   - Create a DynamoDB table (e.g., `CoffeeShop`) in your AWS account.
   - Ensure that the table has the correct key schema (e.g., primary key `coffeeId`) as expected by the Lambda functions.

3. **Authentication (Cognito):**
   - Set up a Cognito User Pool for user authentication.
   - Integrate Cognito in the frontend to protect access to your API endpoints.

4. **Frontend (S3 & CloudFront):**
   - Update the `.env` file with the correct API URL (e.g., CloudFront distribution URL).
   - Build your frontend application (using a tool like Vite), then upload the build artifacts to an S3 bucket.
   - Configure CloudFront to serve the contents from the S3 bucket for fast global delivery.

### Local Setup

1. Clone the repository:
```bash
git clone <repository_url>
cd AWS_SERVERLESS
```
2. Install the dependencies:
```bash
npm install
```
3. Run the application locally (if your development process supports it):
```bash
npm run dev
```

## AWS Services Employed

- **AWS Lambda:** Serverless compute for backend logic. ⚡
- **API Gateway:** REST API management. 🌐
- **Amazon DynamoDB:** NoSQL database service for data storage. 🗄️
- **Amazon Cognito:** User authentication and authorization. 🔒
- **Amazon S3:** Hosting static assets. ☁️
- **Amazon CloudFront:** Global content delivery network (CDN) for fast asset delivery. 🌍

## Conclusion

Caffeine Cloud is an excellent example of building a robust, serverless application on AWS while highlighting practical, cloud-based development skills. Perfect for showcasing on your resume! 💼✨
