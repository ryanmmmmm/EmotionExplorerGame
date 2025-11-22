import client from 'prom-client';
import type { RequestHandler } from 'express';

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

export const requestCounter = new client.Counter({
  name: 'emotion_explorer_requests_total',
  help: 'Total number of requests',
  labelNames: ['method', 'route', 'status'],
});

export const metricsHandler: RequestHandler = async (_req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
};
