var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
    methods: {
        notifyMe() {

            let notification = new Notification('TITLE OF NOTIFICATION', {
                icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
                body: "Hey! You are on notice!",
                vibrate: [100, 50, 100]

            });

            notification.onclick = function () {
                window.open("http://carnes.cc");
            };
        },
        allowNotifications() {
            Notification.requestPermission();
        },
        denyNotifications() {
            Notification.permission = 'denied';
        }
    },
    computed: {
        permission() {
            return Notification.permission
        }
    }
})


// JS Nuggets: Notifications API

//Notification.requestPermission();

//new Notification("Subscribe to JS Nuggets!");

function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
    } else if (Notification.permission === "granted") {
        notify();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                notify();
            }
        });
    }

}

function notify() {
    let notification = new Notification('TITLE OF NOTIFICATION', {
        icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
        body: "Hey! You are on notice!",
        vibrate: [100, 50, 100]

    });

    notification.onclick = function () {
        window.open("http://carnes.cc");
    };
    //    setTimeout(notification.close.bind(notification), 7000); 
}
//notifyMe();


//window.addEventListener('load', () => {
//  navigator.serviceWorker.register('/worker.js')
//  .then((registration) => {
//    console.log('Service Worker registration completed with scope: ',
//      registration.scope)
//  }, (err) => {
//    console.log('Service Worker registration failed', err)
//  })
//})
