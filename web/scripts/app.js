
window.interdeal = {
    "sitekey": "1daf29fbd9bd8b2b8a10e1eaa4833c36",
    "Position": "left",
    "domains": {
        "js": "https://cdn.equalweb.com/",
        "acc": "https://access.equalweb.com/"
    },
    "Menulang": "ES",
    "showTooltip": true,
    "btnStyle": {
        "vPosition": [
            "80%",
            "80%"
        ],
        "scale": [
            "1",
            "0.5"
        ],
        "color": {
            "main": "#255eed",
            "second": "#ffffff"
        },
        "icon": {
            "outline": true,
            "type": 11,
            "shape": "semicircle"
        }
    }
};
(function(doc, head, body){
    var coreCall             = doc.createElement('script');
    coreCall.src             = interdeal.domains.js + 'core/5.0.13/accessibility.js';
    coreCall.defer           = true;
    coreCall.integrity       = 'sha512-pk3CeR0KGJu+GfK2x2ybTSZ1o1qfua6XW2PRAxMWOhC85M3+CanPYmvRp6BOiW0/riZjWGerRN7+JH4wEF0wJQ==';
    coreCall.crossOrigin     = 'anonymous';
    coreCall.setAttribute('data-cfasync', true );
    body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
