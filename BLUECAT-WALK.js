var pos = 0;
    const bluecat = [
        ['bc7.png', 'bc8.png', 'bc9.png', 'bc10.png', 'bc11.png'],
        ['bc2.png', 'bc3.png', 'bc4.png', 'bc5.png','bc6.png']
    ];
    var direction = 0;
    var focus = 0;

    function Run() {
        let img = document.getElementById("bc");
        let imgWidth = img.width;
        focus = (focus + 1) % 5;
        direction = checkPageBounds(direction, imgWidth);
        img.src = bluecat[direction][focus];
        if (direction) {
            pos -= 20;
            img.style.left = pos + "px";
        } else {
            pos += 20;
            img.style.left = pos + 'px';
        }
    }

    function checkPageBounds(direction, imgWidth) {
        if(pos > (window.innerWidth - imgWidth)){
            direction = 1;
        } else if(pos < 0){
            direction = 0
        }
        return direction;
    }
    setInterval(Run, 200)