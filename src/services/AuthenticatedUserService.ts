import { UsersRepositories } from '../repositories/UsersRepositories'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'

interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticatedUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)
        //verificart ser email existe
        const user = await usersRepositories.findOne({
            email
        })
        if (!user) {
            throw new Error('email/password incorrect')
        }
        //verificar se a senha está correta
        const passwordMAtch = await compare(password, user.password)
        if (!passwordMAtch) {
            throw new Error('email/password incorrect')
        }
        //gerar Token 
        const token = sign(
            {
                email: user.email,
            },
            '03214bc9f04f76c00d422758fcb14809',
            {
                subject: user.id,
                expiresIn: '1d'
            }
        )
        return token

    }

}
export { AuthenticatedUserService }