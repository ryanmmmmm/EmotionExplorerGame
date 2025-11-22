import fs from 'fs';
import http from 'http';
import https from 'https';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/environment.js';
import emotionsRouter from './routes/emotions.js';
import { metricsHandler } from './monitoring/metrics.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: env.allowedOrigins.length ? env.allowedOrigins : undefined }));
app.use(morgan(env.logLevel));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

if (env.enableMetrics) {
  app.get('/metrics', metricsHandler);
}

app.use(env.apiBasePath, emotionsRouter);

const startServer = () => {
  if (env.tlsCertPath && env.tlsKeyPath && fs.existsSync(env.tlsCertPath) && fs.existsSync(env.tlsKeyPath)) {
    const key = fs.readFileSync(env.tlsKeyPath);
    const cert = fs.readFileSync(env.tlsCertPath);
    https.createServer({ key, cert }, app).listen(env.port, () => {
      console.log(`HTTPS server listening on port ${env.port}`);
    });
  } else {
    http.createServer(app).listen(env.port, () => {
      console.log(`HTTP server listening on port ${env.port}`);
    });
  }
};

startServer();

export default app;
