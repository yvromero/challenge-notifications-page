

const markAll = document.querySelector('#mark-all');
const numberNotifications = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    post.addEventListener('click', () => {
        post.querySelector('.not-read').classList.remove('not-read');

    updateNotifications();

    })
});

markAll.addEventListener('click', () => {
    const notReadElements = document.querySelectorAll('.not-read');

    notReadElements.forEach( notReadElement => {

        notReadElement.classList.remove('not-read')
    })

    updateNotifications();

});

const updateNotifications = () => {

    const ReadElements = document.querySelectorAll('.not-read');
    numberNotifications.innerText = ReadElements.length;
}