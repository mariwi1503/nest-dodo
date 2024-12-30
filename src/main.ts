import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.user(cors)
  app.enableCors()

  // untuk prefix routes
  // app.setGlobalPrefix('/api')

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion:'1',
  });

  // handle validation
  app.useGlobalPipes(new ValidationPipe())

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle('JOKO API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'BELAJAR NEST API',
  });

  await app.listen(3000);

}
bootstrap();
