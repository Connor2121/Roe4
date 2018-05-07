ReactDOM.render(React.createElement(Icon), document.getElementById('react'));

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCpN-SRkG3HrYkJgClTHwJKu6k4_KYx4So",
    authDomain: "nc-vfm.firebaseapp.com",
    databaseURL: "https://nc-vfm.firebaseio.com",
    projectId: "nc-vfm",
    storageBucket: "nc-vfm.appspot.com",
    messagingSenderId: "987355521805"
};
firebase.initializeApp(config);

$(document).ready( () => {
    // Initializing modal
    $('#modal1').modal();
    $('.parallax').parallax();

    // log-out button
    $('.logoutBtn').on('click', e => {
        firebase.auth().signOut();
        $('.login').removeClass('hide');
        $('.buyer').addClass('hide');
        $('.logoutBtn').addClass('hide');
        $('.vendor').addClass('hide');
        $('.manage').addClass('hide');
        let img = document.getElementById('img-circle');
        img.src = "/images/man1.png";
        window.location.replace('/');
    });

    // Add log-in event
    $('.loginBtn').on('click', e => {
        // get email and pass
        let email = $('#modal-email').val().trim();
        let pass = $('#modal-password').val().trim();

        // validate email and password aren't blank
        validateForm = () => {
            let isValid = true;
            if (email === '' || pass === '') {
                // alert user to fill out txt inputs with alert div
                alert('Email and Password must be filled out');
                isValid = false;
            }
            return isValid;
        };
        if(!validateForm()) {
            return;
        };
        
        // sign-in
        const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
        // promise.catch(e => console.log(e.message));
        promise.catch(e => {
            console.log(e.message);
            alert(e.message);
        });            
    });

    // realtime listener to check if a user is logged in
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            // check if user is a Vendor
            let userId = firebase.auth().currentUser.uid;
            firebase.database().ref('users/' + userId).once('value', snap => {
                let vendor = snap.val().vendor;
                if(vendor === "true") {
                    $('.vendor').removeClass('hide');
                    $('.manage').removeClass('hide');                        
                };
            });

            console.log(firebase.auth().currentUser.email, ' is currently logged in.');
            $('.buyer').removeClass('hide');
            $('.logoutBtn').removeClass('hide');
            $('.login').addClass('hide');
            
            firebase.storage().ref('profile_photo/' + firebase.auth().currentUser.uid).getDownloadURL().then(function(url) {            
                // insert url into image src
                let img = document.getElementById('img-circle');
                img.src = url;
            })
            .catch(err => {
                // Handle any errors
                console.log('Error: ', err);
            });
        } else {
            console.log('Not logged in.');
        };
        $('#modal1').modal('close');
    });
});