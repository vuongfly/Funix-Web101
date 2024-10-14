const myEmail = document.getElementById('my-email').textContent
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log("hello")

function checkEmail() {
    document.getElementById('input-email-form').classList.add('d-none');
    document.getElementById('personal-info').classList.remove('d-none');
}

for (const child of document.getElementById('career-info').children) {

    child.children.item(1).classList.add('d-none');
    let viewMore = document.getElementById('view-more-btn').cloneNode(true);
    child.append(viewMore);
    child.addEventListener('mouseover', evt => {
        viewMore.classList.remove('d-none')
    })
    child.addEventListener('mouseout', evt => {
        viewMore.classList.add('d-none')
    })
    child.addEventListener('click', evt => {
        if (viewMore.textContent === 'View more') {
            child.children.item(1).classList.remove('d-none');
            viewMore.textContent = 'View less'
        } else {
            child.children.item(1).classList.add('d-none');
            viewMore.textContent = 'View more'
        }

    })
}
