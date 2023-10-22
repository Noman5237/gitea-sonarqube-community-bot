import {format, createLogger, transports} from "winston";

const {combine, timestamp, colorize, metadata} = format;

const logFormat = format.printf(({meta, message}) => {
    return `${meta.timestamp} - ${meta.traceId}: ${message}`;
});

const logger = createLogger({
    level: 'debug',
    format: combine(
        colorize(),
        timestamp(),
        metadata({
            key: 'meta'
        }),
        logFormat,
    ),
    transports: [
        new transports.File({filename: 'traces.log'}),
        new transports.Console()
    ],
});

export const log = (traceId, message) => logger.debug(message, {traceId});