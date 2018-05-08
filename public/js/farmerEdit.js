$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$(document).ready(() => {

    firebase.auth().onAuthStateChanged( user => {
        displayPic();
        displayVendor();
    });        

    $('#farmer-edit-btn').on('click', e => {
        e.preventDefault();

        let uid = firebase.auth().currentUser.uid;
        let bio = $('#vendor-bio').val().trim();
        let vendorName = $('#vendor-name').val().trim();
        let phoneNum = $('#vendor-phone').val().trim();
        let email = $('#vendor-email').val().trim();
        let address = $('#vendor-address').val().trim();
        let city = $('#vendor-city').val().trim();
        let state = $('#vendor-state').val().trim();
        let zip = $('#vendor-zip').val().trim();
        validateForm = () => {
            let isValid = true;
            if (bio === '' || vendorName === '' || phoneNum === '' || email === '' || 
            address === '' || city === '' || state === '' || zip === '') {
                alert('Please input all Vendor Information.');
                isValid = false;
            }
            return isValid;
        }
        if(!validateForm()) {
            return;
        };

        $.post('/api/vendorEdit', {
            uid,
            bio,
            vendorName,
            phoneNum,
            email,
            address,
            city,
            state,
            zip
        });            
        // TODO: use reg expression to validate email format
    });

    $('#crops-edit-btn').on('click', e => {
        e.preventDefault();

        let uid = firebase.auth().currentUser.uid;
        let crop = $('#vendor-crop').val().trim();
        validateForm = () => {
            let isValid = true;
            if (crop === '') {
                alert('Please input a crop to add.');
                isValid = false;
            }
            return isValid;
        }
        if(!validateForm()) {
            return;
        };
        $.post('/api/vendorEdit/Crop', {
            uid,
            crop
        });
        $('#vendor-crop').val('');
    });

    $('#livestock-edit-btn').on('click', e => {
        e.preventDefault();

        let uid = firebase.auth().currentUser.uid;
        let livestock = $('#vendor-livestock').val().trim();
        validateForm = () => {
            let isValid = true;
            if (livestock === '') {
                alert('Please input a livestock to add.');
                isValid = false;
            }
            return isValid;
        }
        if(!validateForm()) {
            return;
        };
        $.post('/api/vendorEdit/Livestock', {
            uid,
            livestock
        });
        $('#vendor-livestock').val('');
    });


    const imageButton = document.getElementById('fileButtonVendor');
    // Listen for file selection
    imageButton.addEventListener('change', e => {
        // Get file
        let file = e.target.files[0];
        // Create a storage ref
        let storageRef = firebase.storage().ref('vendor_photo/' + firebase.auth().currentUser.uid);
        // substitute file.name with uid
        // Upload file then use promise to display pic
        storageRef.put(file).then(snap => {
            displayPic();
        });
    });

    // use url of image uploaded by user to display profile picture
    displayPic = () => {
        firebase.storage().ref('vendor_photo/' + firebase.auth().currentUser.uid).getDownloadURL().then(url => {
            console.log(url);
            let uid = firebase.auth().currentUser.uid;
            $.post('/api/vendorEdit/photo', {
                uid,
                url
            });

            // insert url into image src
            let img = document.getElementById('vendorPhoto');
            img.src = url;
        }).catch(function (error) {
            // Handle any errors
            console.log('Error: ', error);
        });
    };

    displayVendor = () => {
        let userId = firebase.auth().currentUser.uid;
        let base = location.origin;
        $.get(base + '/api/vendors/uid/' + userId, result => {
            $('#vendor-bio').text(result.Bio);
            $('#vendor-name').text(result.Vendor);
            $('#vendor-phone').text(result.Phone);
            $('#vendor-email').text(result.Email);
            $('#vendor-address').text(result.Address);
            $('#vendor-city').text(result.City);
            $('#vendor-state').text(result.State);
            $('#vendor-zip').text(result.Zip);
        });
    };
});