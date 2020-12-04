document.addEventListener("DOMContentLoaded", function() {
    const nodes = document.getElementsByClassName('question')
    for (var i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        node.addEventListener('click', function() {
            showAnswer(node)
        })
    }
});

const showAnswer = function(node) {
    const icon = node.children[1].children[0].children[0]
    const element = node.parentElement.children[1]
    if (element.classList.contains('visible-answer')) {
        element.classList.remove('visible-answer')
        element.classList.add('invisible-answer')
        icon.classList.remove(icon.classList[0])
        icon.classList.add('icofont-plus')
    } else {
        element.classList.remove('invisible-answer')
        element.classList.add('visible-answer')
        icon.classList.remove(icon.classList[0])
        icon.classList.add('icofont-minus')
    }
}

/*
const removeAllVisibleAnswer = function() {
    const nodes = document.getElementsByClassName('visible-answer')
    for (var i = 0; i < nodes.length; i++) {
        const icon = nodes[i].parentElement.children[0].children[1].children[0].children[0]
        nodes[i].classList.add('invisible-answer')
        nodes[i].classList.remove('visible-answer')
        icon.classList.remove(icon.classList[0])
        icon.classList.add('icofont-arrow-down')
    }
}
*/