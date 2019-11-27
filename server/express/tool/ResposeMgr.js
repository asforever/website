export class ResponseMgr {
    static sendSuccess(data) {
        return {response: data}
    }

    static sendError(data) {
        return {error: data}
    }
}
