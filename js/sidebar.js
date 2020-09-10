function changeActiveElement(item,e) {
    var element_active = document.getElementsByClassName('active');
    if(element_active.length !== 0) {
        element_active[0].classList.remove('active');
    }

    if(item.classList.contains('parent') && !e.target.classList.contains('children-dropdown-item-link')) {
        item.classList.toggle("dropdown-show");
        // collapse smooth
        if (item.children[1].style.maxHeight){
            item.children[1].style.maxHeight = null;
        } else {
            item.children[1].style.maxHeight = item.children[1].scrollHeight + "px";
        }
        // end collapse smooth
    } else if (e.target.classList.contains('children-dropdown-item-link')){
        e.target.parentElement.classList.add('active');
    } else {
        item.classList.add("active");
    }
}

//document is ready
document.addEventListener('DOMContentLoaded', function(){
    // change active
    var sidebar_items = document.querySelectorAll('.item-sidebar');
    [].forEach.call(sidebar_items, function (item) {
        item.addEventListener("click", function(e) { 
            changeActiveElement(item,e);
        });
    })

});

