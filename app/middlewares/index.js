const codeMap = {
    '-1': 'fail',
    '200': 'success',
    '401': 'token expired',
    '500': 'server error',
    '10001': 'params error',
}

const utilFn = {
    resuccess(data) {
        return {
            code: 200,
            success: true,
            msg: codeMap['200'],
            data: data || null,
        }
    },
    refail(message, code, data) {
        return {
            code: code || -1,
            success: false,
            msg: message || codeMap[code],
            data: data || null,
        }
    },
}

export default class Middleware {
    static util(ctx, next) {
        ctx.set('X-Request-Id', ctx.req.id)
        ctx.util = utilFn
        return next()
    }
}
