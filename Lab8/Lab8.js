window.onload = function() {

    let selector = document.getElementById("colorChange");
    
    selector.onmouseover = function() {

        selector.style.color = "blue";
        
    }

    let selectorOnClick = document.getElementById("fontSizeChange");
    
    selectorOnClick.onclick = function() {
        
        selectorOnClick.style.fontSize = "30px";

    }

    let imageArray = ["Images/GPU.png", "Images/image.jpg"], i = 0;
    let selectorToChangeImage = document.getElementById("selectorToChangeImage");
    
    selectorToChangeImage.onclick = function() {

        selectorToChangeImage.src = imageArray[i]
        i++;

        if (i > 1) i = 0;
        
    }

    let selectorTextToImage = document.getElementById("selectorTextToImage");

    selectorTextToImage.onclick = function() {

        selectorTextToImage.innerHTML = "<img src='Images/image.jpg'>";

    }

    let selectorToResizeImage = document.getElementById("selectorToResizeImage");
    let imgWidth = selectorToResizeImage.clientWidth;
    let k = imgWidth;
    let timerId;
    selectorToResizeImage.onmouseover = function () {

        clearInterval(timerId); 
        timerId = setInterval(Zoom, 10);

    }

    function Zoom() {
        if (k > 700) clearInterval(timerId);
        else {

            k += 10;
            selectorToResizeImage.style.width = k + "px";
            
        }
    }

    selectorToResizeImage.onmouseout = function () {
        clearInterval(timerId); 
        timerId = setInterval(UnZoom, 10);

    }

    function UnZoom() {
        if (k <= imgWidth) clearInterval(timerId);
        else {

            k -= 10;
            selectorToResizeImage.style.width = k + "px";
            
        }
    }

    let selectorToAddBorder = document.getElementById("selectorToAddBorder");

    selectorToAddBorder.ondblclick = function () {
        selectorToAddBorder.style.borderWidth = "2px 5px 4px 6px";
        selectorToAddBorder.style.borderStyle = "solid dotted dashed ridge";
        selectorToAddBorder.style.borderColor = "blue red purple yellow";
    }

}