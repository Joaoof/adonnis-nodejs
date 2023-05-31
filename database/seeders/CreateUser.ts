import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'João de Deus',
        email: 'admin@cataline.io',
        password: 'secret',
        role: 'admin',
      },
      {
        name: 'Yung da Silva',
        email: 'normal@cataline.io',
        password: 'secret',
        role: 'normal',
      },
    ])
  }
}
