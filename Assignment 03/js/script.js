const myEmail = document.getElementById('my-email').textContent
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function checkEmail() {
    document.getElementById('input-email-form').classList.add('d-none');
    document.getElementById('personal-info').classList.remove('d-none');
}


for (const child of document.getElementsByClassName('section-info')) {
    console.log(child)
    const sectionContent = child.querySelector('.section-content');
    // Ẩn section-content khi mới load trang
    sectionContent.classList.add('d-none');

    let viewMore = document.getElementById('view-more-btn').cloneNode(true);
    viewMore.classList.remove('d-none')
    viewMore.classList.add('invisible')
    child.append(viewMore);

    child.addEventListener('mouseover', evt => {
        viewMore.classList.remove('invisible')
    })

    child.addEventListener('mouseout', evt => {
        viewMore.classList.add('invisible')
    })

    viewMore.addEventListener('click', evt => {
        if (viewMore.textContent === 'View more') {
            sectionContent.classList.remove('d-none');
            viewMore.textContent = 'View less'
        } else {
            sectionContent.classList.add('d-none');
            viewMore.textContent = 'View more'
        }
    })
}
