$(document).ready(function () {
    $('.sidenav').sidenav();

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            displayFavorites();
            displayUser();
            displayPic();
        }
        // else clear out profile
    })
    // get elements    
    const fileButton = document.getElementById('fileButton');
    // Listen for file selection
    fileButton.addEventListener('change', e => {
        // Get file
        let file = e.target.files[0];
        // Create a storage ref
        let storageRef = firebase.storage().ref('profile_photo/' + firebase.auth().currentUser.uid);
        // substitute file.name with uid
        // Upload file then use promise to display pic
        storageRef.put(file).then(snap => {
            displayPic();
        });

    });
    // use url of image uploaded by user to display profile picture
    displayPic = () => {
        firebase.storage().ref('profile_photo/' + firebase.auth().currentUser.uid).getDownloadURL().then(url => {
            // insert url into image src
            let img = document.getElementById('userPhoto');
            img.src = url;
            let navImg = document.getElementById('img-circle');
            navImg.src = url;
        }).catch(function (error) {
            // Handle any errors
        });
    }
    // displays first name and last name
    displayUser = () => {
        let userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + userId).once('value', snap => {
            let first = snap.val().firstName;
            let last = snap.val().lastName;
            $('#firstName').text(first);
            $('#lastName').text(last);
        })
    }
    // displays last 5 search criteria from form
    function displayFavorites() {
        let userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + userId).child('favorites').on('child_added', function (snap) {
            $('.favorites').prepend(`<li> ${snap.val()} </li>`);
        }, function (errorObject) {
            console.log('The read failed: ' + errorObject.code);
        });
    };
});