import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
    credentials: true,
  });

  app.use(express.json({ limit: Number.MAX_SAFE_INTEGER } as any));
  app.use(express.urlencoded({ limit: Number.MAX_SAFE_INTEGER as any, extended: true } as any));

  await app.listen(process.env.PORT || 4000);
}
bootstrap();