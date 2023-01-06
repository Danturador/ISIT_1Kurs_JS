$(window).load(function(){

    $("#colorChange").mouseover(function() {

        $(this).css("color", "blue");
        
    })
    
    $("#fontSizeChange").click(function() {
        
        $(this).css("fontSize", "30px");

    })

    var imageArray = ["Images/GPU.png", "Images/image.jpg"], i = 0;
    
    $("#selectorToChangeImage").click( function() {

        $(this).attr("src", imageArray[i])
        i++;

        if (i > 1) i = 0;
        
    })

    $("#selectorTextToImage").click( function() {

        $(this).html("<img src='Images/image.jpg'>");

    })

    let imgWidth = $("#selectorToResizeImage").width();
    let k = imgWidth;
    let timerId;

    $("#selectorToResizeImage").mouseover( function () {

        clearInterval(timerId); 
        timerId = setInterval(Zoom, 10);

    })

    function Zoom() {

        if (k > 700) clearInterval(timerId);
        else {

            k += 10;
            $("#selectorToResizeImage").css("width", k + "px");
            
        }

    }

    $("#selectorToResizeImage").mouseout( function () {

        clearInterval(timerId);

        timerId = setInterval(UnZoom, 10);

    })

    function UnZoom() {

        if (k <= imgWidth) clearInterval(timerId);
        else {

            k -= 10;
            $("#selectorToResizeImage").css("width", k + "px");
            
        }

    }

    $("#selectorToAddBorder").dblclick( function () {

        $(this).css("borderWidth", "2px 5px 4px 6px");
        $(this).css("borderStyle", "solid dotted dashed ridge");
        $(this).css("borderColor", "blue red purple yellow");
        
    })
    //////////////////////////////////////////////////////////////////////////////////
    $('#myimg').draggable();
    $('#textA').draggable( {cancel: "text"});

    $('#moveForward').click(function() {
        $('#moveForward').css('position', 'absolute')
        $('#moveForward').animate(
            {left: 1000}, 2000)
        })

    let startPointX =  $("#moveCurved").offset().left;
    let startPointY =  $("#moveCurved").offset().top;
    let timer1, l = 0, isEnded = false;
    
    function Curve(elemToMove, yexpr, x0, y0, s){
        
        $(elemToMove).css("top", y0 + eval(yexpr));
        $(elemToMove).css("left", x0 + x * 20);
        
        if (l > s && s > 0) isEnded = true;
        else if (isEnded && l == 0) {
            $(elemToMove).css("left", startPointX);
            $(elemToMove).css("top", startPointY);
            clearInterval(timer1);
        }
        if(isEnded){

            x -= 1;
            l--;
            
        }
        else{
            
            x += 1;
            l++;
            
        } 
        
    }
    
    $("#moveCurved").click(function() {
        
        $("#moveCurved").css("position", 'absolute');
        
        l = 0, isEnded = false;
        timer1 = setInterval(function (){
            
            Curve($("#moveCurved"), "Math.sin(x) * 10", startPointX, startPointY, 50)
            
        }, 20)
    })

    let yF = 'Math.pow(x, 2)';
    let dotColor = 'Images/blackDot.png';
    let clinewidth = '', xstr = '', xstr0 = '';

    let x = 0, p = 0;
    let draw = true;

    let Timer;

    function staticCurve(pict, yexpr, x0, y0, t, n, s){

        if (!yexpr) return null;
        if (!pict) pict = dotColor;
        if (!s) s = 0;
        if (!t) t = 0;
        
        clinewidth = 'width=' + n + ' height=' + n;
        
        xstr0 = '<img src="' + pict +'"' + clinewidth + ' style = "position:absolute; top: ';
        
        for(x = -1 * t/2; x <= t/2; x+=0.01) {
            
            if (draw) xstr += xstr0 + (y0 + eval(yexpr)) + 'px; left:' + (x0 + x * 20)+'">';
        
            if (p > s && s > 0) {

                draw = !draw;
                p = 0;

            }
                
            p++;
            
        }
        
        document.write (xstr);

    }
    
    function dinamicCurve(pict, yexpr, x0, y0, t, n, s){
            
        if (!yexpr) return null;
        if (!pict) pict = dotColor;
        if (!s) s = 0;
        if (!t) t = 0;
            
        clinewidth = 'width=' + n + ' height=' + n;
            
            
        xstr0 = '<img src="' + pict +'"' + clinewidth + ' style = "position:absolute; top: ';
            
        x+=0.05;
            
        if (draw) xstr += xstr0 + (y0 + eval(yexpr)) + 'px; left:' + (x0 + x * 20)+'">';
            
        if (p > s && s > 0 || x >= t / 2 ) {
                
            clearInterval(Timer);
                
        }
                
        p++;
            
        document.write (xstr);

    }
    $("#Draw").click(function() {
        for (let key = 0; key < $('input[name="function"]').length; key++) {
            
            if ($('input[name="function"]')[key].checked){
                
                if ($('input[name="function"]')[key].value == "y = x^2") yF = 'Math.pow(x, 2)';
                if ($('input[name="function"]')[key].value == "y = x^3") yF = 'Math.pow(x, 3)';
                if ($('input[name="function"]')[key].value == "y = sin(x)") yF = 'Math.sin(x)';
                if ($('input[name="function"]')[key].value == "y = cos(x)") yF = 'Math.cos(x)';

            }

        }
        
        dotColor = 'Images/' + $("#colorOfF").val() + 'Dot.png';
        
        if ($('input[name="drawStaricFunc"]').is(':checked')) staticCurve(dotColor, yF + "* 10", 200, 150, 5, 5, 1000);
        else if ($('input[name="drawDinamicFunc"]').is(':checked')) {
        x = -1 * 10 / 2 - 0.02;
        
        Timer = setInterval(function (){

            dinamicCurve(dotColor, yF + "* 10", 200, 150, 10, 5, 1000);

        }, 20)

        }

    })
})