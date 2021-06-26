
import { NextFunction, Response, Request } from 'express';


export function onlyAdmin(response:Response, req: Request, next: NextFunction) {
    const admin = true;

    if (admin) {
        return next()
    }
    return response.status(401).json({
        error: 'User is not admin'
    })
}