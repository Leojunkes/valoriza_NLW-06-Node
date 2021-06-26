import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class CreateTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories)
        if (!name) {
            throw new Error('incorrect name!')
        }
        const tagExists = await tagsRepositories.findOne({
            name
        })
        if (tagExists) {
            throw new Error('Tag already exists!')
        }
        const tag = tagsRepositories.create({
            name
        })
        await tagsRepositories.save(tag)
        return tag
    }
}

export { CreateTagService }