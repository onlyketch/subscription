document.addEventListener('DOMContentLoaded', function() {

    let pageTitle = document.querySelector('title');

    const screenSettings = document.querySelector('.content-box__settings');
    const screenYouChoosed = document.querySelector('.content-box__choosed');
    const screenYouUnsubscribed = document.querySelector('.content-box__unsubscribed');

    let buttonLeaveChoosed = document.querySelector('.btn-leave');
    let buttonUnsubscribe = document.querySelector('.btn-unsubscribe');
    let buttonChangeChoosed = document.querySelector('.content-box__error-change');
    let buttonSubscribeAgain = document.querySelector('.content-box__error-subscribe');
    
    if (screenSettings !== null) {
        
        buttonLeaveChoosed.addEventListener('click', function() {
            screenSettings.classList.remove('show');
            screenYouChoosed.classList.add('show');
            pageTitle.textContent = 'Вы выбрали темы для рассылки';
        });

        buttonChangeChoosed.addEventListener('click', function() {
            screenYouChoosed.classList.remove('show');
            screenSettings.classList.add('show');
            pageTitle.textContent = 'Настройте рассылку под себя';
        });

        buttonSubscribeAgain.addEventListener('click', function() {
            screenYouUnsubscribed.classList.remove('show');
            screenSettings.classList.add('show');
            pageTitle.textContent = 'Настройте рассылку под себя';
        });

        buttonUnsubscribe.addEventListener('click', function() {
            screenSettings.classList.remove('show');
            screenYouUnsubscribed.classList.add('show');
            pageTitle.textContent = 'Вы успешно отписались';
        });
    }



});
