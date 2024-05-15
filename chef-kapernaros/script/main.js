var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
console.log('hello world');
var hambMenu = document.querySelector('.hamburger-menu');
var navMenu = document.getElementById('navMenu');
var navBar = document.querySelector('.navBar');
var spanToBreak = document.querySelectorAll('.brSm');
if (hambMenu) {
    hambMenu.addEventListener('click', function () {
        navMenu.classList.toggle('show');
        navMenu.classList.toggle('hide', !navMenu.classList.contains('show'));
        hambMenu.classList.toggle('openHam');
        navBar.classList.toggle('expand');
    });
}
var navBarAdjToScreen = function () {
    if (window.innerWidth < 750 && navBar.classList.contains('biggerScreen')) {
        navBar.classList.add('mobileView');
        navBar.classList.remove('biggerScreen');
        spanToBreak.forEach(function (el) {
            if (!el.firstChild || el.firstChild.nodeName !== 'BR') {
                var brEl = document.createElement('br');
                el.prepend(brEl);
            }
        });
    }
    else if (window.innerWidth >= 750 && !navBar.classList.contains('biggerScreen')) {
        navBar.classList.remove('mobileView');
        navBar.classList.add('biggerScreen');
        spanToBreak.forEach(function (el) {
            if (el.firstChild && el.firstChild.nodeName === 'BR') {
                el.removeChild(el.firstChild);
            }
        });
    }
};
var navScrolling = function () {
    if (window.pageYOffset > 30) {
        navBar.classList.add('scrolled');
    }
    else {
        if (!navBar.classList.contains('scrolledAlways')) {
            navBar.classList.remove('scrolled');
        }
    }
};
var picAnimation = function () {
    document.querySelectorAll('.bioLandingPicContainer img').forEach(function (img) {
        if (window.pageYOffset >= 600) {
            img.classList.add('in-view');
        }
        else if (window.pageYOffset < 500) {
            img.classList.remove('in-view');
        }
    });
    document.querySelectorAll('.achCards').forEach(function (img) {
        if (window.innerWidth < 770) {
            if (window.pageYOffset > 1000) {
                img.classList.add('in-view');
            }
            else if (window.pageYOffset < 950) {
                img.classList.remove('in-view');
            }
        }
        else {
            if (window.pageYOffset > 1250) {
                img.classList.add('in-view');
            }
            else if (window.pageYOffset < 1150) {
                img.classList.remove('in-view');
            }
        }
    });
    document.querySelectorAll('.charityLandingPicContainer img').forEach(function (img) {
        if (window.pageYOffset >= 1950) {
            img.classList.add('in-view');
        }
        else if (window.pageYOffset < 1850) {
            img.classList.remove('in-view');
        }
    });
};
window.addEventListener('resize', navBarAdjToScreen);
navBarAdjToScreen();
window.addEventListener('scroll', function () {
    navScrolling();
    picAnimation();
});
navScrolling();
picAnimation();
var container = document.querySelector('#bigPic');
var allNotActiveTitles = document.querySelectorAll('.secTitles');
allNotActiveTitles.forEach(function (listEl) {
    listEl.addEventListener('click', function () {
        allNotActiveTitles = document.querySelectorAll('.secTitles');
        // console.log(listEl)
        if (!listEl.classList.contains('active')) {
            var titleActive = __spreadArray([], allNotActiveTitles, true).filter(function (el) { return el.classList.contains('active'); })[0];
            titleActive.classList.remove('active');
            listEl.classList.add('active');
        }
    });
});
emailjs.init('0wA6kpUaumn2FNdbg');
var messageSent = document.querySelector('#messageSent');
var inputText = document.querySelectorAll('.inputText');
(_a = document.getElementById('myForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    emailjs.sendForm('service_m5a5vcb', 'template_1jfyvjh', this)
        .then(function (response) {
        messageSent.classList.remove('hide');
        inputText.forEach(function (text) { return text.value = ''; });
        console.log('SUCCESS!', response.status, response.text);
        setTimeout(function () { messageSent.classList.add('hide'); }, 5000);
        // alert("Email sent successfully!")
    }, function (error) {
        console.log('FAILED...', error);
        alert("Failed to send email.");
    });
});
var allChefPic = document.querySelectorAll('.singlePicTable');
allChefPic.forEach(function (el) {
    el.addEventListener('touchstart', function () { touchLogic(el); }, { passive: true });
    el.addEventListener('click', function () { touchLogic(el); });
});
var touchLogic = function (el) {
    if (!document.fullscreenElement) {
        el.requestFullscreen()
            .then(function () { return el.classList.add('fullScreenTable'); })
            .catch(function (err) { return console.error("Error attempting to enter fullscreen mode: ".concat(err.message, " (").concat(err.name, ")")); });
    }
    else {
        document.exitFullscreen()
            .then(function () { return el.classList.remove('fullScreenTable'); })
            .catch(function (err) { return console.error("Error attempting to exit fullscreen mode: ".concat(err.message, " (").concat(err.name, ")")); });
    }
};
// // Setting a cookie with SameSite=None and Secure attributes
// document.cookie = "key=value; SameSite=None; Secure";
// Setting a cookie with SameSite=Lax
document.cookie = "key=value; SameSite=Lax";
console.log('all the time 4 try');
