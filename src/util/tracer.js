import crypto from "crypto";

export const tracer = (req, res, next) => {
    req.traceId = crypto.randomBytes(16).toString("hex");
    next()
}