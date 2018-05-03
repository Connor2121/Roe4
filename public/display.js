$(document).ready(function(){
var vendors = {
    "Vendor1": {
        Vendor: "Against The Grain",
        Contact: "Holly Whitesides",
        Address: "619 Camp Joy Road",
        City: "Zionville",
        State: "North Carolina",
        Zip: 28698,
        Phone: "828-406-4439",
        Email: "N/A",
        Certified: "6/3/2016",
        Crops: "Basil, Beans, Beets, Bok Choy, Braising Mix, Kohlrabi, Napa Cabbage, Salad Mix, Sorghum, Broccoli, Cabbage, Carrots, Cauliflower, Celery, Chard, Cilantro, Corn, Cucumbers, Dill, Eggplants, Fennel, Garlic, Kale, Leeks, Lettuce, Melons, Onions, Parsley, Peas, Peppers, Potatoes, Radishes, Spinach, Squash, Sweet Potatoes, Tomatoes, Turnips",
        Livestock: "N/A",
        Wildcrops: "N/A",
        Handling: "N/A"
    },
    "Vendor2": {
        Vendor: "Ashley Williams",
        Contact: "Ashley Williams",
        Address: "757 Hickory Cross Road",
        City: "Belvidere",
        State: "North Carolina",
        Zip: 27919,
        Phone: "252-333-7905",
        Email: "N/A",
        Certified: "11/4/2015",
        Crops: "Corn, Soybeans, Wheat",
        Livestock: "N/A",
        Wildcrops: "N/A",
        Handling: "N/A"
    },
    "Vendor3": {
        Vendor: "Bailey Bros Ag Partnership Dba Bailey Brothers Organics",
        Contact: "Johnny Bailey",
        Address: "3805 Bullhead Rd.",
        City: "Bailey",
        State: "North Carolina",
        Zip: 27807,
        Phone: "252-236-8585",
        Email: "",
        Certified: "11/26/2013",
        Crops: "Sweet Potatoes, Soybeans, Wheat, Sweet Potato Transplants",
        Livestock: "",
        Wildcrops: "",
        Handling: ""
    },
    "Vendor4": {
        Vendor: "Atlantic Seafood",
        Contact: "",
        Address: "95 NC-210",
        City: "Hampstead",
        State: "North Carolina",
        Zip: 28443,
        Phone: "910-270-4446",
        Email: "",
        Certified: "",
        Crops: "",
        Livestock: "Fish, Shrimp, Oysters, Octopus, Crawfish, Frog Legs, Clams and more",
        Wildcrops: "",
        Handling: ""
    },
    "Vendor5": {
        Vendor: "Chaudhry Halal Meats",
        Contact: "Abdul Chaudhry",
        Address: "380 Stock Yard Road",
        City: "Siler City",
        State: "North Carolina",
        Zip: 27344,
        Phone: "919-742-9292",
        Email: "",
        Certified: "9/15/2015",
        Crops: "",
        Livestock: "",
        Wildcrops: "",
        Handling: "Beef"
    },
    "Vendor6": {
        Vendor: "Clay Smith And Nancy Joyner/Redbud Farm",
        Contact: "Clay Smith",
        Address: "1921 Gwyn Rd",
        City: "Burlington",
        State: "North Carolina",
        Zip: 27217,
        Phone: "919-671-8744",
        Email: "",
        Certified: "8/29/2009",
        Crops: "Flowers, Grains, Herbs, Potted plants, Vegetables",
        Livestock: "",
        Wildcrops: "",
        Handling: "Processed Goods"
    }
};

var faveVendors = function(vendor, renderArea) {
    var vendorDiv = $("<div class='vendor' data-name='" + vendors.Vendor + "'>");
    var vendorName = $("<div class='vendor-name'>").text(vendors.Vendor);


    vendorDiv.append(vendorName);
    $(renderArea).append(vendorDiv);
};

var initializeDisplay = function() {
    for (var key in vendors) {
        faveVendors(vendors[key], ".search-results");
    }
};

initializeDisplay();
    
});