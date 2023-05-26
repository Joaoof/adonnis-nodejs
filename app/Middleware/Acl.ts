import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle({}: HttpContextContract, next: () => Promise<void>, allowedRoles: string[]) {
    console.log(allowedRoles)
    await next()
  }
}
