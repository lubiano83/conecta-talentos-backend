import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Variables
  const PORT = process.env.PORT ?? 3000;
  const HOST = process.env.HOST ?? "localhost";
  const app = await NestFactory.create(AppModule);
  // Cors
  app.enableCors();
  // Swagger
  const config = new DocumentBuilder()
    .setTitle('API app store')
    .setDescription('Esta api describe la plataforma de aplicaciones mobile')
    .setVersion('1.0.0')
    .addTag('app-store-api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // Listen
  await app.listen(PORT);
  console.log(`Escuchando en http://${HOST}:${PORT}`);
}
bootstrap();
