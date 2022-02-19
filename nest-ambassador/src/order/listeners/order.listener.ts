import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class OrderListener {

    constructor(
        private mailerService: MailerService
    ) { }

    @OnEvent('order.completed')
    async handleOrderCompletedEvent(order) {
        console.log("jiosdfjilofgdjsikgbnd jikgb sdjikgbsduibguilsdauiogbsjik")
        await this.mailerService.sendMail({
            to: 'admin@admin.com',
            subject: 'An order has been completed',
            html: `Order #${order.id} with a total of $${order.total} has been completed!`
        })

        await this.mailerService.sendMail({
            to: order.ambassador_email,
            subject: 'An order has been completed',
            html: `You earned $${order.ambassador_revenue} from the link #${order.code}`
        })
    }
}