import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongo from './config/mongo';
import { mqttDataConnect } from './utils/mqtt.connect';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  mongo()
    .then(() => console.log('Connect'))
    .catch((err: unknown) => console.log(err));

  // mqttInfoConnect();
  mqttDataConnect();

  await app.listen(3000);
}
bootstrap();
