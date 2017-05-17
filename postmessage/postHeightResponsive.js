var oldHeight = '0'
var oldWidth = '0'

document.addEventListener('DOMContentLoaded', function () {

    window.setInterval(function postHeightWeight() {
        var tbody = document.body
        var width = tbody.clientWidth
        var height = tbody.clientHeight
        if (oldHeight !== height || oldWidth !== width) {
            window.parent.postMessage({ height: height, width: width }, '*')
            oldHeight = height
            oldWidth = width
        }
    }, 500);

}, false)