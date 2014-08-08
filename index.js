var useragent = require('useragent');

function _isAnySafari(ua) {
    return useragent.is(ua).safari || useragent.is(ua).mobile_safari;
}

function _isMaxAgeZero(cc) {
    return cc === 'max-age=0';
}

function _isBadSafari(req) {
    var ua = req.get('user-agent'),
        cc = req.get('cache-control');
    return _isAnySafari(ua) && _isMaxAgeZero(cc);
}

module.exports = function (req, res, next) {
    if (_isBadSafari(req)) {
        req.headers['cache-control'] = 'no-cache';
    }
    next();
};
