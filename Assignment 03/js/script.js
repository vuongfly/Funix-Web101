const myEmail = document.getElementById('my-email').textContent
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function checkEmail() {
    document.getElementById('input-email-form').classList.add('d-none');
    document.getElementById('personal-info').classList.remove('d-none');
}

for (const child of document.getElementById('career-info').children) {

    const section = child.querySelector('.section');
    const sectionContent = child.querySelector('.section-content');
    // Ẩn section-content khi mới load trang
    sectionContent.classList.add('d-none');

    let viewMore = document.getElementById('view-more-btn').cloneNode(true);
    section.append(viewMore);

    child.addEventListener('mouseover', evt => {
        viewMore.classList.remove('d-none')
    })

    child.addEventListener('mouseout', evt => {
        viewMore.classList.add('d-none')
    })

    child.addEventListener('click', evt => {
        if (viewMore.textContent === 'View more') {
            sectionContent.classList.remove('d-none');
            viewMore.textContent = 'View less'
        } else {
            sectionContent.classList.add('d-none');
            viewMore.textContent = 'View more'
        }
    })
}
