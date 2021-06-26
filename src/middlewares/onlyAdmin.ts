
import { NextFunction, Response } from 'express';
import { Request } from 'express';

export function onlyAdmin(res: Response, req: Request, next: NextFunction) {
    const admin = true;

    if (admin) {
        return next()
    }
    return res.status(401).json({
        error: 'User is not admin'
    })
}