import isObject from 'lodash/isObject';
import xss from 'xss';
export function responseEscaper(req, res, next) {
    const oldSend = res.send;
    res.send = function (data) {
        let modifiedData = data;
        if (isObject(data)) {
            modifiedData = JSON.parse(xss(JSON.stringify(data)));
        }
        res.send = oldSend;
        return res.send(modifiedData);
    };
    next();
}
//# sourceMappingURL=responseEscaper.js.map