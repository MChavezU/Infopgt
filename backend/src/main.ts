import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'; // 1. Importamos el ConfigService

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 2. Obtenemos la instancia del ConfigService de nuestra app
  const configService = app.get(ConfigService);
  
  // 3. Extraemos la URL del frontend limpiando posibles espacios en blanco
  const frontendUrl = configService.get<string>('FRONTEND_URL')?.trim() || 'http://localhost:5173';

  // 4. Habilitamos CORS de forma dinámica con la variable del .env
  app.enableCors({
    origin: frontendUrl, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Extra (Opcional): Usar también el PORT del .env si está disponible
  const port = configService.get<number>('PORT') || 3000;
  
  await app.listen(port);
  console.log(`El Backend está corriendo en: http://localhost:${port}`);
  console.log(`CORS configurado permitiendo accesos desde: ${frontendUrl}`);
}
bootstrap();