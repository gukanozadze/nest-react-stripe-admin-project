import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

import * as faker from 'minifaker';
import 'minifaker/locales/en'; // the first locale import is set as default
import { randomInt } from 'crypto';
import { OrderService } from '../order/order.service';
import { OrderItemService } from '../order/order-item.service';

// Generating 30 random ambassadors to User tables
(async () => {
    const app = await NestFactory.createApplicationContext(AppModule);

    const orderService = app.get(OrderService);
    const orderItemService = app.get(OrderItemService);

    for (let i = 0; i < 30; i++) {
        const order = await orderService.save({
            user_id: randomInt(2, 31),
            code: faker.zipCode(),
            ambassador_email: faker.email(),
            first_name: faker.firstName(),
            last_name: faker.lastName(),
            email: faker.email(),
            complete: true,
        });

        // each order will have 1-5 random order item
        for (let j = 0; j < randomInt(1, 5); j++) {
            await orderItemService.save({
                order: order,
                product_title: faker.word(),
                price: randomInt(10, 100),
                quantity: randomInt(1, 5),
                admin_revenue: randomInt(10, 100),
                ambassador_revenue: randomInt(1, 10),
            });
        }
    }

    process.exit();
})();
