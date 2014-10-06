var useragent = require('useragent');

function isAnySafari(ua) {
    return useragent.is(ua).safari || useragent.is(ua).mobile_safari;
}

function isMaxAgeZero(cc) {
    return cc === 'max-age=0';
}

function isBadSafari(req) {
    var ua = req.get('user-agent'),
        cc = req.get('cache-control');
    return isAnySafari(ua) && isMaxAgeZero(cc);
}

module.exports = function (req, res, next) {
    if (isBadSafari(req)) {
        req.headers['cache-control'] = 'no-cache';
    }
    next();
};
