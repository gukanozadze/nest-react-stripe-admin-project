import { Req } from '@nestjs/common';
import { Body, Controller, Get, Param, Post, UseGuards, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { Order } from '../order/order';
import { LinkService } from './link.service';

@Controller('')
@UseInterceptors(ClassSerializerInterceptor)
export class LinkController {
    constructor(
        private linkService: LinkService,
        private authService: AuthService
    ) { }

    @UseGuards(AuthGuard)
    @Get('admin/user/:id/links')
    async all(@Param('id') id: number) {
        return this.linkService.find({
            user: id,
            relations: ['orders', 'orders.order_items'],
        });
    }

    @UseGuards(AuthGuard)
    @Post('ambassador/links')
    async create(
        @Body('products') products: number[],
        @Req() request: Request
    ) {

        const user = await this.authService.user(request)

        return this.linkService.save({
            code: Math.random().toString(36).substring(6),
            user,
            products: products.map(id => ({ id }))
        })
    }

    @UseGuards(AuthGuard)
    @Get('ambassador/stats')
    async stats(
        @Req() request: Request
    ) {
        const user = await this.authService.user(request)

        const links = await this.linkService.find({
            user,
            relations: ['orders']
        })

        return links.map(link => {
            const completedOrders: Order[] = link.orders.filter(o => o.is_complete)
            return {
                code: link.code,
                count: completedOrders.length,
                revenue: completedOrders.reduce((s, o) => s + o.ambassador_revenue, 0)
            }
        })
    }

    @Get('checkout/links/:code')
    async link(@Param('code') code: string) {
        return this.linkService.findOne({
            code,
            relations: ['user', 'products']
        })
    }

}
