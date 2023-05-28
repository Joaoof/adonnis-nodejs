import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { StoreValidator, UpdateValidator } from 'App/Validators/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.all()

    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const post = await Post.create(data)

    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id) // buscar postagem que tenha "tal" id.

    return post
  }

  public async update({ request, params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id) // buscar postagem que tenha "tal" id.
    const data = await request.validate(UpdateValidator)

    post.merge(data)

    await post.save()

    return post
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id) // buscar postagem que tenha "tal" id.

    await post.delete()
  }
}
