document.addEventListener('DOMContentLoaded', function () {

    var tbody = document.body
    var width = tbody.clientWidth
    var height = tbody.clientHeight
    window.parent.postMessage({ height: height, width: width }, '*')

}, false)