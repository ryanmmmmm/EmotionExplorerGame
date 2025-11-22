# AWS Deployment (Elastic Beanstalk)

1. Build and bundle the backend image using the provided `backend/Dockerfile` and push to ECR.
2. Provision an Application Load Balancer with an ACM certificate attached for TLS termination.
3. Deploy the generated image with `Dockerrun.aws.json` to Elastic Beanstalk. Ensure environment variables (see `.env.example`) are provided and health checks point to `/health`.
4. Enable CloudWatch Logs and Metrics for monitoring, scraping `/metrics` for Prometheus-compatible collectors.
