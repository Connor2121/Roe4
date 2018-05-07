$(document).ready(function() {
    $('#confirmation').modal();
    $('#modal1').modal();

    // Add sign-in event
    $('#btnSignUp').on('click', e => {
        e.preventDefault();
        // get user info
        let firstName = $('#first_name').val().trim();
        let lastName = $('#last_name').val().trim();
        let email = $('#email').val().trim();
        let pass = $('#password').val().trim();

        validateForm = () => {
            let isValid = true;
            if (firstName === '' || lastName === '' || email === '' || pass === '') {
                // alert user to fill out txt inputs with alert div
                alert('Please complete entire form!');
                isValid = false;
            }
            return isValid;
        }
        if(!validateForm()) {
            return;
        };
        
        $.post('/api/signup', {
            firstName,
            lastName,
            email,
            pass
        }).then(cb => {
            console.log('post sent..');
        });

        const auth = firebase.auth();
    
        // sign-up
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.then(e => {
            console.log('new uid: ' + firebase.auth().currentUser.uid);
            writeUserData(firebase.auth().currentUser.uid, firstName, lastName, email);
            // user data is not being sent to firebase when 
            //adjust writeUserData to create vendor in MySQL
            //add UID column in vendorData
            //store UID from firebase
            
        }).catch(e => {
            alert(e.message);            
            console.log(e.message);
        });      

        // clear form inputs
        clrTxt();
    });

    // log-out button
    $('#btnLogout').on('click', e => {
        e.preventDefault();
        firebase.auth().signOut();
        console.log('logout');
    });

    // save the user's profile into Firebase so we can list users,
    // use them in Security and Firebase Rules, and show profiles
    writeUserData = (userId, firstName, lastName, email) => {
        firebase.database().ref('users/' + userId).set({
            firstName: firstName,
            lastName: lastName,
            email: email,
            vendor: "false"
        }, err => {
            window.location.replace('/');
        });
    };
    // Change out function to create vendor in MySQL instead of firebase
    

    // function to clear email and password inputs
    clrTxt = () => {
        $('#first_name').val('');
        $('#last_name').val('');
        $('#email').val('');
        $('#password').val('');
    };
});