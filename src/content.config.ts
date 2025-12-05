// Импортируем загрузчик glob
import { glob } from "astro/loaders";
// Импортируем утилиты из `astro:content`
import { z, defineCollection } from "astro:content";
// Определяем `loader` и `schema` для каждой коллекции
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Экспортируем объект `collections` для регистрации ваших коллекций
export const collections = { blog };