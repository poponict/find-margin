var check_element_yohaku_aruyo = false;
var popup_yohaku_mituketa = document.createElement("div");
function checkyohaku(ele) {
    for (var i = 0; i < ele.length; i++) {
        var compStyles = window.getComputedStyle(ele[i]);
        if (window.getComputedStyle(ele[i].parentNode).getPropertyValue('overflow-x') == "visible" && ele[i].getBoundingClientRect().left + window.pageXOffset + Math.max(Number(compStyles.getPropertyValue('width').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('padding-right').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('border-right-width').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('margin-right').replace(/px/g, '')), 0) - 1 > Number(window.getComputedStyle(document.body).getPropertyValue('width').replace(/px/g, ''))) {
            if (check_element_yohaku_aruyo == false) {
                check_element_yohaku_aruyo = true;

                popup_yohaku_mituketa.style.zIndex = 99999;
                popup_yohaku_mituketa.style.position = "absolute";
                popup_yohaku_mituketa.style.background = "rgba(255,0,0,0.3)";
                popup_yohaku_mituketa.style.pointerEvents = "none";
                popup_yohaku_mituketa.style.top = ele[i].getBoundingClientRect().top + window.pageYOffset - Math.max(Number(compStyles.getPropertyValue('margin-top').replace(/px/g, '')), 0) + "px";
                popup_yohaku_mituketa.style.left = ele[i].getBoundingClientRect().left + window.pageXOffset - Math.max(Number(compStyles.getPropertyValue('margin-left').replace(/px/g, '')), 0) + "px";
                popup_yohaku_mituketa.style.height = Math.max(Number(compStyles.getPropertyValue('height').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('padding-top').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('border-top-width').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('margin-top').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('padding-bottom').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('border-bottom-width').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('margin-bottom').replace(/px/g, '')), 0) + "px";
                popup_yohaku_mituketa.style.width = Math.max(Number(compStyles.getPropertyValue('width').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('padding-left').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('border-left-width').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('margin-left').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('padding-right').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('border-right-width').replace(/px/g, '')), 0) + Math.max(Number(compStyles.getPropertyValue('margin-right').replace(/px/g, '')), 0) + "px";
                window.scroll({ top: ele[i].getBoundingClientRect().top + window.pageYOffset - Math.max(Number(compStyles.getPropertyValue('margin-top').replace(/px/g, '')), 0) - document.documentElement.clientHeight / 3, behavior: 'smooth' })
            }
        }


        if (ele[i].children != 0) {
            checkyohaku(ele[i].children);
        }

    }
}



window.onload = function () {
    setTimeout(() => {
        document.body.appendChild(popup_yohaku_mituketa);
        var elements = document.body.children;
        checkyohaku(elements);
        window.addEventListener('resize', function () {
            check_element_yohaku_aruyo = false;
            checkyohaku(elements);
        });
    }, 1000);
};
