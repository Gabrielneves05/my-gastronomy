import UsersDataAccess from "../dataAccess/users.js";
import { ok, notFound, serverError } from "../helpers/httpResponse.js";

export default class UsersControllers {
    constructor() {
        this.dataAccess = new UsersDataAccess()
    }

    async getUsers() {
        try {
            const users = await this.dataAccess.getUsers()

            return ok(users)
        } catch (err) {
            return serverError(err)
        }
    }

    async updateUser(userId, userData) {
        try {
            const result = await this.dataAccess.updateUser(userId, userData)

            return ok(result)
        } catch (err) {
            return serverError(err)
        }
    }

    async deleteUser(userId) {
        try {
            const result = await this.dataAccess.deleteUser(userId)

            return ok(result)
        } catch (err) {
            return serverError(err)
        }
    }
}