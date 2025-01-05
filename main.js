//
function addClearClassToMenu() {
    const menuElement = document.querySelector('.headerWrap__menu ul');
    if (menuElement) {
        menuElement.classList.add('clear');
    }
}

//
function removeClearClassFromMenu() {
    const menuElement = document.querySelector('.headerWrap__menu ul.clear');
    if (menuElement) {
        menuElement.classList.remove('clear');
    }
}

// 
function clickMenuBtn() {   
    const element = document.querySelector('.headerWrap__mobileBtn');
    if (element) {
        element.classList.add('open');
    }
}

//
function clickOpenMenuBtn() {
    const element = document.querySelector('.headerWrap__mobileBtn.open');
    if (element) {
        element.classList.remove('open');
    }
}

//
function createMenuToggleHandler() {
    let isMenuOpen = false;

    return function toggleMenuBtn() {
        if (isMenuOpen) {
            clickOpenMenuBtn();
        } else {
            clickMenuBtn();
        }
        isMenuOpen = !isMenuOpen;
    };
}

// set toggle function
const toggleMenuBtn = createMenuToggleHandler();
document.querySelector('.headerWrap__mobileBtn')
    .addEventListener('click', toggleMenuBtn);

// set toggle function
document.querySelector('.footerWrap__corpInfo button').addEventListener('click', function() {
    document.querySelector('.footerWrap__corpInfo').classList.toggle('on');
});

// set toggle function
document.querySelectorAll('.mainContainer__qna-wrap button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.mainContainer__qna-wrap button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});