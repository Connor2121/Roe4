'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Livestock",
    [
      {
        "id": 1,
        "Name": "Beef"
      },
      {
        "id": 2,
        "Name": "Beef Brood Cows"
      },
      {
        "id": 3,
        "Name": "Beef Bulls"
      },
      {
        "id": 4,
        "Name": "Beef Cows"
      },
      {
        "id": 5,
        "Name": "Beef Replacements"
      },
      {
        "id": 6,
        "Name": "Beef Steers"
      },
      {
        "id": 7,
        "Name": "Blue Crab"
      },
      {
        "id": 8,
        "Name": "Breeding Eligible"
      },
      {
        "id": 9,
        "Name": "Broilers"
      },
      {
        "id": 10,
        "Name": "Broilers (Broiler Chickens)"
      },
      {
        "id": 11,
        "Name": "Broilers (Chicken)"
      },
      {
        "id": 12,
        "Name": "Broilers (Chickens)"
      },
      {
        "id": 13,
        "Name": "Brown Eggs (Organic Brown Eggs)"
      },
      {
        "id": 14,
        "Name": "Calves"
      },
      {
        "id": 15,
        "Name": "Cattle (Dairy - Converted - Dairy Only)"
      },
      {
        "id": 16,
        "Name": "Cattle (Dairy - Last Third Gestation - Slaughter Eligible)"
      },
      {
        "id": 17,
        "Name": "Cattle-For Slaughter"
      },
      {
        "id": 18,
        "Name": "Chicken Eggs"
      },
      {
        "id": 19,
        "Name": "Chickens-For Egg Production"
      },
      {
        "id": 20,
        "Name": "Chickens-For Slaughter"
      },
      {
        "id": 21,
        "Name": "Clams"
      },
      {
        "id": 22,
        "Name": "Conch"
      },
      {
        "id": 23,
        "Name": "Cow Milk"
      },
      {
        "id": 24,
        "Name": "Crabmeat"
      },
      {
        "id": 25,
        "Name": "Crawfish"
      },
      {
        "id": 26,
        "Name": "Dairy Cows"
      },
      {
        "id": 27,
        "Name": "Dairy Replacements"
      },
      {
        "id": 28,
        "Name": "Dry Packed Scallops"
      },
      {
        "id": 29,
        "Name": "Egg Layers"
      },
      {
        "id": 30,
        "Name": "Egg Laying Hens"
      },
      {
        "id": 31,
        "Name": "Eggs"
      },
      {
        "id": 32,
        "Name": "Fish"
      },
      {
        "id": 33,
        "Name": "Frog Legs"
      },
      {
        "id": 34,
        "Name": "Goats (Dairy - Converted - Dairy Only)"
      },
      {
        "id": 35,
        "Name": "Goats (Dairy - Last Third Gestation - Slaughter Eligible)"
      },
      {
        "id": 36,
        "Name": "Hens"
      },
      {
        "id": 37,
        "Name": "House empty"
      },
      {
        "id": 38,
        "Name": "Laying Hens"
      },
      {
        "id": 39,
        "Name": "Laying Hens (Slaughter Eligible)"
      },
      {
        "id": 40,
        "Name": "Live cattle"
      },
      {
        "id": 41,
        "Name": "Live Lobster"
      },
      {
        "id": 42,
        "Name": "Milk"
      },
      {
        "id": 43,
        "Name": "Mussels"
      },
      {
        "id": 44,
        "Name": "Nest run eggs"
      },
      {
        "id": 45,
        "Name": "Octopus"
      },
      {
        "id": 46,
        "Name": "other"
      },
      {
        "id": 47,
        "Name": "Oysters"
      },
      {
        "id": 48,
        "Name": "Pasture"
      },
      {
        "id": 49,
        "Name": "Pork Cuts"
      },
      {
        "id": 50,
        "Name": "Pullets"
      },
      {
        "id": 51,
        "Name": "Pullets (Slaughter Eligible)"
      },
      {
        "id": 52,
        "Name": "Sheep-For Slaughter"
      },
      {
        "id": 53,
        "Name": "Shrimp"
      },
      {
        "id": 54,
        "Name": "Soft Shell"
      },
      {
        "id": 55,
        "Name": "Steers"
      },
      {
        "id": 56,
        "Name": "Swine-For Slaughter"
      },
      {
        "id": 57,
        "Name": "Turkeys"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.dropTable("Livestock", null, {});

  }
};
