
var heroes = document.querySelectorAll('.draggable');

document.onmouseover = function(ev){
    var m = ev.target;
    var hero;
    for(var i = 0;i<heroes.length;i++){
        if(m == heroes[i]){
            console.log(heroes[i]);
            hero = heroes[i];
        }
    }

    hero.onmousedown = function(e) { 

        hero.style.position = 'absolute';
        moveAt(e);
        
        document.body.appendChild(hero);

        hero.style.zIndex = 1000;

        function moveAt(e) {
            hero.style.left = e.pageX - hero.offsetWidth / 2 + 'px';
            hero.style.top = e.pageY - hero.offsetHeight / 2 + 'px';
        }

        
        document.onmousemove = function(e) {
            moveAt(e);
        }

        hero.onmouseup = function() {
            document.onmousemove = null;
            hero.onmouseup = null;
        }
        hero.ondragstart = function() {
            return false;
        };
    }
}
    
    


    