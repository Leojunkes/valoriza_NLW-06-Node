
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface Ipayload {
    sub: string;
}

export function ensureAuthenticated(request: Request,
    response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).end()
    }

    const [, token] = authToken.split(' ')

    try {
        const { sub } = verify(token, "03214bc9f04f76c00d422758fcb14809") as Ipayload
        request.user_id = sub

        return next()
    } catch (err) {
        return response.status(401).end()
    }





}