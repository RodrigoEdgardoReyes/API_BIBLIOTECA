import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permitir cors desde el frontend
  app.enableCors({
    origin: 'http://localhost:5173'
  });

  // Puerto corriendo 3000
  await app.listen(3000);
}
bootstrap();
