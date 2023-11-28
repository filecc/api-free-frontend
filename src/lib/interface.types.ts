export interface Post {
    id: string
    title: string
    content: string
    slug: string
    image: string
    published: boolean
    createdAt: string
    updatedAt: string
    categoryId: number
    postedById: string
    image_url: string
    download_link: string
    author: {
        name: string
        email: string
    }
}