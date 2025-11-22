import dotenv from 'dotenv';

dotenv.config();

export interface Environment {
  port: number;
  apiBasePath: string;
  logLevel: string;
  tlsKeyPath?: string;
  tlsCertPath?: string;
  allowedOrigins: string[];
  enableMetrics: boolean;
}

const parseBoolean = (value?: string) => value === 'true' || value === '1';

export const env: Environment = {
  port: parseInt(process.env.PORT || '4000', 10),
  apiBasePath: process.env.API_BASE_URL || '/api',
  logLevel: process.env.LOG_LEVEL || 'info',
  tlsKeyPath: process.env.TLS_KEY_PATH,
  tlsCertPath: process.env.TLS_CERT_PATH,
  allowedOrigins: (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean),
  enableMetrics: parseBoolean(process.env.PROMETHEUS_METRICS || 'true'),
};
