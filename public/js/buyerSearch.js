// initializing form selector
$(document).ready(function () {
    $('.tabs').tabs();
    $('.productArea').hide();
    $('.livestockArea').hide();

    // dynamically add cities in NC to dropdown
    var cities = ['ALBERMARLE', 'ANGIER', 'ARCHDALE', 'ARDEN', 'ASHEBORO', 'ASHEVILLE', 'AUTRYVILLE', 'AYDEN', 'BAILEY', 'BARNARDSVILLE', 'BATTLEBORO', 'BEAR CREEK', 'BELMONT', 'BELVIDERE', 'BENNETT', 'BENSON', 'BISCOE', 'BLACK MOUNTAIN', 'BLADENBORO', 'BLANCH', 'BOOMER', 'BOONE', 'BOONVILLE', 'BOSTIC', 'BREVARD', 'BROADWAY', 'BROWNS SUMMIT', 'BUNN', 'BURLINGTON', 'BURNSVILLE', 'CALABASH', 'CAMERON', 'CAROLINA BEACH', 'CARTHAGE', 'CASHIERS', 'CASTALIA', 'CEDAR GROVE', 'CHADBOURN', 'CHAPEL HILL', 'CHARLOTTE', 'CLARENDON', 'CLAYTON', 'CLIMAX', 'CLINTON', 'COATS', 'CONCORD', 'CONOVER', 'CORNELIUS', 'CREEDMOOR', 'DEEP RUN', 'DENTON', 'DOBSON', 'DUNN', 'DURHAM', 'EAGLE SPRINGS', 'EDEN', 'EDENTON', 'EFLAND', 'ELKIN', 'ELON', 'EMERALD ISLE', 'ENGELHARD', 'FAIR BLUFF', 'FAIRVIEW', 'FAISON', 'FARMVILLE', 'FAYETTEVILLE', 'FLETCHER', 'FRANKLINTON', 'FRANKLINVILLE', 'FREMONT', 'FUQUAY-VARINA', 'GARLAND', 'GASTONIA', 'GIBSONVILLE', 'GOLD', 'GOLDSBORO', 'GOLDSTON', 'GRAHAM', 'GRASSY CREEK', 'GREENSBORO', 'GREENVILLE', 'HAMPSTEAD', 'HAMPTONVILLE', 'HARMONY', 'HENDERSON', 'HENDERSONVILLE', 'HIGH POINT', 'HILLSBOROUGH', 'HURDLE MILLS', 'INDIAN TRAIL', 'IVANHOE', 'JONESVILLE', 'KELLY', 'KERNERSVILLE', 'KING', 'KINGS', 'LAKE LURE', 'LAWNDALE', 'LEASBURG', 'LEICESTER', 'LELAND', 'LEXINGTON', 'LIBERTY', 'LILLINGTON', 'LINCOLNTON', 'LINDEN', 'LOUISBURG', 'LUMBERTON', 'MACON', 'MADISON', 'MAGNOLIA', 'MARSHALL', 'MATTHEWS', 'MEBANE', 'MIDLAND', 'MILLERS CREEK', 'MILLINGPORT', 'MILLS RIVER', 'MONROE', 'MOORESVILLE', 'MOREHEAD', 'MOREHEAD CITY', 'MORGANTON', 'MORRISVILLE', 'MOUNT AIRY', 'MOUNT PLEASANT', 'MT OLIVE', 'MURPHY', 'NAGS HEAD', 'NASHVILLE', 'NEBO', 'NEW LONDON', 'NORLINA', 'OAK ISLAND', 'OXFORD', 'PANTEGO', 'PELHAM', 'PENROSE', 'PINEVILLE', 'PINEY CREEK', 'PISGAH FOREST', 'PITTSBORO', 'PRINCETON', 'PROSPECT HILL', 'RAEFORD', 'RALEIGH', 'RAMSEUR', 'RANDLEMAN', 'REIDSVILLE', 'RICH SQUARE', 'ROBBINS', 'ROCKWELL', 'ROCKY MOUNT', 'RONDA', 'ROSE HILL', 'ROUGEMONT', 'ROXBORO', 'RUFFIN', 'RUTHERFORDTON', 'SALEMBURG', 'SALISBURY', 'SALUDA', 'SANFORD', 'SEAGROVE', 'SEVERN', 'SILER', 'SILER CITY', 'SIMS', 'SNOW CAMP', 'SNOW HILL', 'SOPHIA', 'SOUTH CARTHAGE', 'SPRING HOPE', 'STALEY', 'STANTONBURG', 'STAR', 'STATELY', 'STATESVILLE', 'STEM', 'STONEVILLE', 'SUPPLY', 'SWAN QUARTER', 'TARBORO', 'THOMASVILLE', 'TIMBERLAKE', 'TRENTON', 'TRINITY', 'TROY', 'TRYON', 'TYNER', 'UNION GROVE', 'VALDESE', 'VASS', 'VILAS', 'WADESBORO', 'WAKE FOREST', 'WALNUT COVE', 'WALSTONBURG', 'WARRENTON', 'WARSAW', 'WAXHAW', 'WAYNESVILLE', 'WELDON', 'WENDELL', 'WHITAKERS', 'WHITEVILLE', 'WILKESBORO', 'WILMINGTON', 'WILSON', 'WINSTON-SALEM', 'YADKINVILLE', 'ZEBULON', 'ZIONVILLE'];
     for (var i = 0; i < cities.length; i++) {
        $('select').append("<option value=" + cities[i] + ">" + cities[i] + "</option>");
    };
    $('select').formSelect();

    // dynamically generate cards with featured vendors (vendors that are users)
    $.get(location.origin + "/api/vendors", function (data) {
        $(".header-here").append(
            `<h4 class='header-font'>Featured Vendors</h4>`);
        for(var i = 620; i<data.length; i++) {
            var vendor = data[i].Vendor;
            var city = data[i].City;
            var phone = data[i].Phone;
            var address = data[i].Address;
            var bio = data[i].Bio;
            var image = data[i].Image;
            var link = ["/vendorProfile/621", "/vendorProfile/622", "/vendorProfile/623"];
            $(".search-results").append(
                `<div class='card'>
                    <div class='flex'>
                        <div class='card-image waves-effect waves-block waves-light'>
                            <img class='activator' src="${image}">
                        </div>
                        <div class="card-content">
                            <span class="header-font card-title activator grey-text text-darken-4">
                                <i class="material-icons right">more_vert</i>
                            </span>
                            <p>
                                <a href="${link[i-620]}">${vendor}</a>
                            </p>
                        </div>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            <i class="material-icons right">close</i>
                        </span>
                        <br>
                        ${address}<br>
                        ${city}<br>
                        ${phone}<br>
                        <br>
                        ${bio}
                    </div>
                </div>`
            );
        };
    });

    //====================================================
    // handiling search results

    // product search
    $('#productButton').on('click', e => {
        e.preventDefault();
        $('.productData').empty();
        let base = location.origin;
        let productName = $('#search_item').val().trim();
        $.get(base + '/api/crops/' + productName, result => {
            for (var i = 0; i < result[0].vendorData.length; i++) {
                $('.productData').append(
                    `<li class="product-details" data-id=${result[0].vendorData[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[0].vendorData[i].Vendor}
                                <br>
                                ${result[0].vendorData[i].Address}
                                <br>
                                ${result[0].vendorData[i].City}
                            </div>
                            <div class="col l5">
                                ${result[0].vendorData[i].Phone}
                                <br> 
                                ${result[0].vendorData[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[0].vendorData[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <div class="results-grid details-results">
                               
                            </div>
                        </div>
                    </li>`
                );
            }
            $('.collapsible').collapsible();
            $('.productArea').show();

        });
    });

    //get vendor crops to dispay in collapsible
    $('.productData').on('click', '.product-details', function () {
        var card = $(this).find('.details-results');
        var id = $(this).attr('data-id');
        var base = location.origin;
        card.empty();
        $.get(base + '/api/vendors/id/' + id, result => {
            return result;
        }).then(function (result) {
            for (var i = 0; i < result.cropData.length; i++) {
                var p = $("<p>");
                card.append(p.text(result.cropData[i].Name));
            }
        });
    });

    //get vendor livestock to dispay in collapsible
    $('.productData').on('click', '.product-details', function () {
        var card = $(this).find('.details-livestock-results');
        var id = $(this).attr('data-id');
        var base = location.origin;
        card.empty();
        $.get(base + '/api/vendors/id/' + id, result => {
            return result;
        }).then(function (result) {
            for (var i = 0; i < result.Livestock.length; i++) {
                var p = $("<p>");
                card.append(p.text(result.Livestock[i].Name));
            }
        });
    });

    $('.newData').on('click', '.product-details', function () {
        var card = $(this).closest(".collection");
        var id = $(this).attr('data-id');
        var base = location.origin;
        card.empty();
        $.get(base + '/api/vendors/id/' + id, result => {
            return result;
        }).then(function (result) {
            for (var i = 0; i < result.Livestock.length; i++) {
                var p = $("<p>");
                card.find('.details-results').append(p.text(result.Livestock[i].Name));
            }
        });
    });

    $('#vendorButton').on('click', e => {
        e.preventDefault();

        $('.productData').empty();
        let base = location.origin;
        let vendorName = $('#vendor').val().trim();
        $.get(base + '/api/vendors/' + vendorName, result => {
            for (var i = 0; i < result.length; i++) {
                $('.productData').append(
                    `<li class="product-details" data-id=${result[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[i].Vendor}
                                <br>
                                ${result[i].Address}
                                <br>
                                ${result[i].City}
                            </div>
                            <div class="col l5">
                                ${result[i].Phone}
                                <br> 
                                ${result[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <h5>Crops:</h5>
                            <div class="results-grid details-results">
                               
                            </div>
                            <h5>Livestock:</h5>
                            <div class="results-grid details-livestock-results">
                                
                            </div>
                        </div>
                    </li>`
                );
            }
            $('.collapsible').collapsible();
            $('.productArea').show();
        });
    });

    //search by city
    $('#cityButton').on('click', e => {
        e.preventDefault();
        $('.productData').empty();
        let base = location.origin;
        let city = $('#city-name option:checked').val().trim();
        $.get(base + '/api/city/' + city, result => {
            for (var i = 0; i < result.length; i++) {
                $('.productData').append(
                    `<li class="product-details" data-id=${result[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[i].Vendor}
                                <br>
                                ${result[i].Address}
                                <br>
                                ${result[i].City}
                            </div>
                            <div class="col l5">
                                ${result[i].Phone}
                                <br> 
                                ${result[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <h5>Crops:</h5>
                            <div class="results-grid details-results">
                               
                            </div>
                            <h5>Livestock:</h5>
                            <div class="results-grid details-livestock-results">
                                
                            </div>
                        </div>
                    </li>`
                );
            }
            $('.collapsible').collapsible();
            $('.productArea').show();

        });
    });

    //livestock search
    $('#livestockButton').on('click', e => {
        $('.productData').empty();
        let base = location.origin;
        let livestock = $('#livestock').val().trim();
        $.get(base + '/api/livestock/' + livestock, result => {
            for (var i = 0; i < result[0].vendorData.length; i++) {
                $('.productData').append(
                    `<li class="livestock-details" data-id=${result[0].vendorData[i].id}>
                        <div class="collapsible-header">
                            <div class="col l5">
                                ${result[0].vendorData[i].Vendor}
                                <br>
                                ${result[0].vendorData[i].Address}
                                <br>
                                ${result[0].vendorData[i].City}
                            </div>
                            <div class="col l5">
                                ${result[0].vendorData[i].Phone}
                                <br> 
                                ${result[0].vendorData[i].Email}
                            </div>
                            <!-- Switch -->
                            <div class="switch">
                                <label>
                                
                                <input type="checkbox" class="favorite" data-id="${result[0].vendorData[i].Vendor}">
                                <span class="lever"></span>
                                Favorite
                                </label>
                            </div>
                        </div>
                        <div class="collapsible-body">
                            <div class="results-grid details-results">
                            
                            </div>
                        </div>
                    </li>`
                );
            };
            $('.collapsible').collapsible();
            $('.productArea').show();
        });
    });

    //showing full list of livestock in collapsible
    $('.productData').on('click', '.livestock-details', function () {
        var card = $(this).find('.details-results');
        var id = $(this).attr('data-id');
        var base = location.origin;
        card.empty();
        console.log('clicked');
        $.get(base + '/api/vendors/id/' + id, result => {
            return result;
        }).then(function (result) {
            console.log(result);
            for (var i = 0; i < result.Livestock.length; i++) {
                var p = $("<p>");
                card.append(p.text(result.Livestock[i].Name));
            }
        });
    });

    // Favorite button
    $('.search-result-data').on('click', '.favorite', function() {
        let vendor = $(this).attr('data-id');
        if ($('.favorite').prop('checked')) {
            // add vendor to favorites in firebase
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).child('favorites').push(vendor);
        } else if (!$('.favorite').prop('checked')) {
            // remove vendor from favorites in firebase
            let favRef = firebase.database().ref('users/' + firebase.auth().currentUser.uid).child('favorites');
            let query = favRef.orderByValue().equalTo(vendor);
            query.once('value').then(function(snapshot) {
                snapshot.forEach(function(childSnap) {
                    favRef.child(childSnap.key).remove();
                });
            });
        };
    });
});