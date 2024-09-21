import isEmpty from 'lodash/isEmpty';
import xss from 'xss';
export function requestEscaper(req, res, next) {
    if (req.is('application/json')) {
        req.body = JSON.parse(xss(JSON.stringify(req.body)));
    }
    if (!isEmpty(req.query)) {
        req.query = JSON.parse(xss(JSON.stringify(req.query)));
    }
    next();
}
//# sourceMappingURL=requestEscaper.js.map