// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post

export default class PostsController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  index() {
    return Post.all
  }
}
