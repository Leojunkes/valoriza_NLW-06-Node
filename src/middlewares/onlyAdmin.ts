
import { Response, Request, NextFunction } from 'express';



export function onlyAdmin(response: Response, req: Request, next: NextFunction) {
    const admin = true;

    if (admin) {
        return next()
    }
    return response.status(401).end();


}