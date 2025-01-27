import OrdersDataAccess from "../dataAccess/orders.js";
import { ok, serverError } from "../helpers/httpResponse.js";

export default class OrdersControllers {
    constructor() {
        this.dataAccess = new OrdersDataAccess()
    }

    async addOrder(orderData) {
        try {
            const result = await this.dataAccess.addOrder(orderData)

            return ok(result)
        } catch (err) {
            return serverError(err)
        }
    }

    async getOrders() {
        try {
            const orders = await this.dataAccess.getOrders()

            return ok(orders)
        } catch (err) {
            return serverError(err)
        }
    }

    async getAvailableOrders() {
        try {
            const orders = await this.dataAccess.getAvailableOrders()

            return ok(orders)
        } catch (err) {
            return serverError(err)
        }
    }

    async updateOrder(orderId, orderData) {
        try {
            const result = await this.dataAccess.updateOrder(orderId, orderData)

            return ok(result)
        } catch (err) {
            return serverError(err)
        }
    }

    async deleteOrder(orderId) {
        try {
            const result = await this.dataAccess.deleteOrder(orderId)

            return ok(result)
        } catch (err) {
            return serverError(err)
        }
    }
}