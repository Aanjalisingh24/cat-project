function switchoff(){
    document.getElementById("bulbImage").src=("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png")
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("onswitch").style.backgroundColor='#22c55e'
    document.getElementById("offswitch").style.backgroundColor='#cbd2d9'
    document.getElementById("switchstatus").textContent='switched off'
}
function switchon(){
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("offswitch").style.backgroundColor='#e12d39'
    document.getElementById("onswitch").style.backgroundColor='#cbd2d9'
    document.getElementById("switchstatus").textContent='switched on'
}