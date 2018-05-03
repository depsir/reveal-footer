(
function(){
    function addAll(){
        var sections = document.querySelectorAll('section');
        sections.forEach(addFooter);
    }
    function addFooter(currentSelector){
        var numOfFooters = currentSelector.querySelectorAll('.foot').length
        var spacer = document.createElement('div');
        spacer.setAttribute('class', 'stretch');
        var footer = document.createElement('div');
        footer.setAttribute('class', 'foot');
        var text = document.createTextNode(Reveal.getConfig().footer || '');
        footer.appendChild(text);
        if (numOfFooters==0){
            var isTitleSlide = currentSelector.classList.contains('title-slide')
            var wrappingDiv = document.createElement('div');
            if (isTitleSlide){
                wrappingDiv.setAttribute('class', 'stretch');
            }
            var i;
            var initialNumOfChildren = currentSelector.children.length
            for (i=0; i<initialNumOfChildren ;i++){
                wrappingDiv.appendChild(currentSelector.children[0]);
            }
            currentSelector.appendChild(wrappingDiv);
            if (!isTitleSlide){
                currentSelector.appendChild(spacer);
            }
            currentSelector.appendChild(footer);
            var state = Reveal.getState();
            Reveal.setState( state );
        }
    }
    addAll();
})()
