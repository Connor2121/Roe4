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
    return queryInterface.bulkInsert("cropData",
    [
      {
        "id": 1,
        "Name": "Achillea"
      },
      {
        "id": 2,
        "Name": "Acorn Squash"
      },
      {
        "id": 3,
        "Name": "Agastache"
      },
      {
        "id": 4,
        "Name": "Agrimony"
      },
      {
        "id": 5,
        "Name": "Alfalfa"
      },
      {
        "id": 6,
        "Name": "Alfalfa-Triticale Hay"
      },
      {
        "id": 7,
        "Name": "Alliums"
      },
      {
        "id": 8,
        "Name": "Amaranth"
      },
      {
        "id": 9,
        "Name": "American Wormseed"
      },
      {
        "id": 10,
        "Name": "Angelica"
      },
      {
        "id": 11,
        "Name": "Apple"
      },
      {
        "id": 12,
        "Name": "Apples"
      },
      {
        "id": 13,
        "Name": "Aquilegia"
      },
      {
        "id": 14,
        "Name": "Arnica"
      },
      {
        "id": 15,
        "Name": "Artichokes"
      },
      {
        "id": 16,
        "Name": "Arugula"
      },
      {
        "id": 17,
        "Name": "Ashwaganda"
      },
      {
        "id": 18,
        "Name": "Asian Greens"
      },
      {
        "id": 19,
        "Name": "Asparagus"
      },
      {
        "id": 20,
        "Name": "Astragalus"
      },
      {
        "id": 21,
        "Name": "Balloon Vine"
      },
      {
        "id": 22,
        "Name": "Barley"
      },
      {
        "id": 23,
        "Name": "Basil"
      },
      {
        "id": 24,
        "Name": "Basil (Tulsi)"
      },
      {
        "id": 25,
        "Name": "Bean (forage)"
      },
      {
        "id": 26,
        "Name": "Beans"
      },
      {
        "id": 27,
        "Name": "Beans (French)"
      },
      {
        "id": 28,
        "Name": "Bee Balm"
      },
      {
        "id": 29,
        "Name": "Beet"
      },
      {
        "id": 30,
        "Name": "Beets"
      },
      {
        "id": 31,
        "Name": "Bell Peppers"
      },
      {
        "id": 32,
        "Name": "Berries"
      },
      {
        "id": 33,
        "Name": "Black Walnut Hulls"
      },
      {
        "id": 34,
        "Name": "Blackberries"
      },
      {
        "id": 35,
        "Name": "Blackberry"
      },
      {
        "id": 36,
        "Name": "Blessed Thistle"
      },
      {
        "id": 37,
        "Name": "Blue Vervain"
      },
      {
        "id": 38,
        "Name": "Blueberries"
      },
      {
        "id": 39,
        "Name": "Blueberry"
      },
      {
        "id": 40,
        "Name": "Bok Choy"
      },
      {
        "id": 41,
        "Name": "Boneset"
      },
      {
        "id": 42,
        "Name": "Borage"
      },
      {
        "id": 43,
        "Name": "Braising Mix"
      },
      {
        "id": 44,
        "Name": "Brassicas"
      },
      {
        "id": 45,
        "Name": "Broccoli"
      },
      {
        "id": 46,
        "Name": "Brussels Sprouts"
      },
      {
        "id": 47,
        "Name": "Buckwheat"
      },
      {
        "id": 48,
        "Name": "Burdock"
      },
      {
        "id": 49,
        "Name": "Bush Beans"
      },
      {
        "id": 50,
        "Name": "Butternut"
      },
      {
        "id": 51,
        "Name": "Butternut Squash"
      },
      {
        "id": 52,
        "Name": "Cabbage"
      },
      {
        "id": 53,
        "Name": "Cabbages"
      },
      {
        "id": 54,
        "Name": "Calendula"
      },
      {
        "id": 55,
        "Name": "California Poppy"
      },
      {
        "id": 56,
        "Name": "Cantaloupes"
      },
      {
        "id": 57,
        "Name": "Carrot"
      },
      {
        "id": 58,
        "Name": "Carrots"
      },
      {
        "id": 59,
        "Name": "Castor"
      },
      {
        "id": 60,
        "Name": "Catnip"
      },
      {
        "id": 61,
        "Name": "Cauliflower"
      },
      {
        "id": 62,
        "Name": "Cayenne"
      },
      {
        "id": 63,
        "Name": "Celery"
      },
      {
        "id": 64,
        "Name": "Celoisa"
      },
      {
        "id": 65,
        "Name": "Chamomile"
      },
      {
        "id": 66,
        "Name": "Chard"
      },
      {
        "id": 67,
        "Name": "Cherry"
      },
      {
        "id": 68,
        "Name": "Chestnut"
      },
      {
        "id": 69,
        "Name": "Chiles"
      },
      {
        "id": 70,
        "Name": "Chives"
      },
      {
        "id": 71,
        "Name": "Cilantro"
      },
      {
        "id": 72,
        "Name": "Clover"
      },
      {
        "id": 73,
        "Name": "Collard Greens"
      },
      {
        "id": 74,
        "Name": "Collards"
      },
      {
        "id": 75,
        "Name": "Comfrey"
      },
      {
        "id": 76,
        "Name": "Cone Flower"
      },
      {
        "id": 77,
        "Name": "Corn"
      },
      {
        "id": 78,
        "Name": "Corn (Sweet Corn Seed)"
      },
      {
        "id": 79,
        "Name": "Corn (Sweet Corn)"
      },
      {
        "id": 80,
        "Name": "Cotton"
      },
      {
        "id": 81,
        "Name": "Cover Crop"
      },
      {
        "id": 82,
        "Name": "Cowpea"
      },
      {
        "id": 83,
        "Name": "Cucumber"
      },
      {
        "id": 84,
        "Name": "Cucumbers"
      },
      {
        "id": 85,
        "Name": "Cucurbit Transplants"
      },
      {
        "id": 86,
        "Name": "Cucurbitaceae"
      },
      {
        "id": 87,
        "Name": "Cucurbits"
      },
      {
        "id": 88,
        "Name": "Currants"
      },
      {
        "id": 89,
        "Name": "Dahlia"
      },
      {
        "id": 90,
        "Name": "Daisy"
      },
      {
        "id": 91,
        "Name": "Dandelion"
      },
      {
        "id": 92,
        "Name": "Dandelion Greens"
      },
      {
        "id": 93,
        "Name": "Dill"
      },
      {
        "id": 94,
        "Name": "Echinacea"
      },
      {
        "id": 95,
        "Name": "Echinacea Augustifolia"
      },
      {
        "id": 96,
        "Name": "Edamame"
      },
      {
        "id": 97,
        "Name": "Eggplant"
      },
      {
        "id": 98,
        "Name": "Eggplants"
      },
      {
        "id": 99,
        "Name": "Elderberries"
      },
      {
        "id": 100,
        "Name": "Elecampane"
      },
      {
        "id": 101,
        "Name": "Fallow"
      },
      {
        "id": 102,
        "Name": "Fennel"
      },
      {
        "id": 103,
        "Name": "Fescue"
      },
      {
        "id": 104,
        "Name": "Feverfew"
      },
      {
        "id": 105,
        "Name": "Flax"
      },
      {
        "id": 106,
        "Name": "Flowers"
      },
      {
        "id": 107,
        "Name": "Flue Cured Tobacco"
      },
      {
        "id": 108,
        "Name": "Forage"
      },
      {
        "id": 109,
        "Name": "Frisee"
      },
      {
        "id": 110,
        "Name": "Fruit"
      },
      {
        "id": 111,
        "Name": "Fruits"
      },
      {
        "id": 112,
        "Name": "Garlic"
      },
      {
        "id": 113,
        "Name": "Ginger"
      },
      {
        "id": 114,
        "Name": "Ginkgo"
      },
      {
        "id": 115,
        "Name": "Ginseng"
      },
      {
        "id": 116,
        "Name": "Ginseng (Ashwagandha/Indian)"
      },
      {
        "id": 117,
        "Name": "Gladiolas"
      },
      {
        "id": 118,
        "Name": "Goldenseal"
      },
      {
        "id": 119,
        "Name": "Gotu Kola"
      },
      {
        "id": 120,
        "Name": "Grain"
      },
      {
        "id": 121,
        "Name": "Grains"
      },
      {
        "id": 122,
        "Name": "Grains for Research"
      },
      {
        "id": 123,
        "Name": "Grape Tomatoes"
      },
      {
        "id": 124,
        "Name": "Grapes"
      },
      {
        "id": 125,
        "Name": "Grass"
      },
      {
        "id": 126,
        "Name": "Greater Celandine"
      },
      {
        "id": 127,
        "Name": "Green bean"
      },
      {
        "id": 128,
        "Name": "Green Beans"
      },
      {
        "id": 129,
        "Name": "Greens"
      },
      {
        "id": 130,
        "Name": "Grindelia"
      },
      {
        "id": 131,
        "Name": "Hairy Vetch"
      },
      {
        "id": 132,
        "Name": "Hawthorn"
      },
      {
        "id": 133,
        "Name": "Hawthornberry"
      },
      {
        "id": 134,
        "Name": "Hay"
      },
      {
        "id": 135,
        "Name": "Helebores"
      },
      {
        "id": 136,
        "Name": "Henbane"
      },
      {
        "id": 137,
        "Name": "Herb Seeds (Various)"
      },
      {
        "id": 138,
        "Name": "Herbs"
      },
      {
        "id": 139,
        "Name": "Herbs Transplants (Various)"
      },
      {
        "id": 140,
        "Name": "Hops"
      },
      {
        "id": 141,
        "Name": "Horehound"
      },
      {
        "id": 142,
        "Name": "Horseradish"
      },
      {
        "id": 143,
        "Name": "Horsetail"
      },
      {
        "id": 144,
        "Name": "Horseweed"
      },
      {
        "id": 145,
        "Name": "Hyssop"
      },
      {
        "id": 146,
        "Name": "idle"
      },
      {
        "id": 147,
        "Name": "Iris"
      },
      {
        "id": 148,
        "Name": "Jiaogulan"
      },
      {
        "id": 149,
        "Name": "Joe-Pye Weed"
      },
      {
        "id": 150,
        "Name": "Kale"
      },
      {
        "id": 151,
        "Name": "Kale (Dino)"
      },
      {
        "id": 152,
        "Name": "Kale (Lacinato)"
      },
      {
        "id": 153,
        "Name": "Kale (Red)"
      },
      {
        "id": 154,
        "Name": "Kohlrabi"
      },
      {
        "id": 155,
        "Name": "Lambs Quarter"
      },
      {
        "id": 156,
        "Name": "Leafy Greens"
      },
      {
        "id": 157,
        "Name": "Leeks"
      },
      {
        "id": 158,
        "Name": "Legumes"
      },
      {
        "id": 159,
        "Name": "Lemon Balm"
      },
      {
        "id": 160,
        "Name": "Lemon Verbena"
      },
      {
        "id": 161,
        "Name": "Lettuce"
      },
      {
        "id": 162,
        "Name": "Lettuces"
      },
      {
        "id": 163,
        "Name": "Lilies"
      },
      {
        "id": 164,
        "Name": "Lion's Mane"
      },
      {
        "id": 165,
        "Name": "Marigold"
      },
      {
        "id": 166,
        "Name": "Marjoram"
      },
      {
        "id": 167,
        "Name": "Marshmallow"
      },
      {
        "id": 168,
        "Name": "Melon"
      },
      {
        "id": 169,
        "Name": "Melons"
      },
      {
        "id": 170,
        "Name": "Microgreens"
      },
      {
        "id": 171,
        "Name": "Milk Thistle"
      },
      {
        "id": 172,
        "Name": "Milkweed"
      },
      {
        "id": 173,
        "Name": "Mint (Mountain)"
      },
      {
        "id": 174,
        "Name": "Miscellaneous Herbs & Spices"
      },
      {
        "id": 175,
        "Name": "Mixed Vegetables"
      },
      {
        "id": 176,
        "Name": "Motherwort"
      },
      {
        "id": 177,
        "Name": "Mulberry"
      },
      {
        "id": 178,
        "Name": "Mullein"
      },
      {
        "id": 179,
        "Name": "Muscadine"
      },
      {
        "id": 180,
        "Name": "Mushroom"
      },
      {
        "id": 181,
        "Name": "Mushrooms"
      },
      {
        "id": 182,
        "Name": "Mustard"
      },
      {
        "id": 183,
        "Name": "Mustard Greens"
      },
      {
        "id": 184,
        "Name": "Napa Cabbage"
      },
      {
        "id": 185,
        "Name": "Nasturtium"
      },
      {
        "id": 186,
        "Name": "Nectarines"
      },
      {
        "id": 187,
        "Name": "Nettle"
      },
      {
        "id": 188,
        "Name": "Oats"
      },
      {
        "id": 189,
        "Name": "Okra"
      },
      {
        "id": 190,
        "Name": "Onion"
      },
      {
        "id": 191,
        "Name": "Onions"
      },
      {
        "id": 192,
        "Name": "Oregano"
      },
      {
        "id": 193,
        "Name": "Organic Fennel"
      },
      {
        "id": 194,
        "Name": "Other"
      },
      {
        "id": 195,
        "Name": "Oyster Mushroom"
      },
      {
        "id": 196,
        "Name": "Pansy"
      },
      {
        "id": 197,
        "Name": "Parsley"
      },
      {
        "id": 198,
        "Name": "Parsley (Italain)"
      },
      {
        "id": 199,
        "Name": "Parsnips"
      },
      {
        "id": 200,
        "Name": "Passion Flower"
      },
      {
        "id": 201,
        "Name": "Passionflowers"
      },
      {
        "id": 202,
        "Name": "Pasture"
      },
      {
        "id": 203,
        "Name": "Peaches"
      },
      {
        "id": 204,
        "Name": "Peanuts"
      },
      {
        "id": 205,
        "Name": "Pears"
      },
      {
        "id": 206,
        "Name": "Peas"
      },
      {
        "id": 207,
        "Name": "Peas (Fresh)"
      },
      {
        "id": 208,
        "Name": "Peas (Green Peas)"
      },
      {
        "id": 209,
        "Name": "Pennyroyal"
      },
      {
        "id": 210,
        "Name": "Pepper"
      },
      {
        "id": 211,
        "Name": "Peppermint"
      },
      {
        "id": 212,
        "Name": "Peppers"
      },
      {
        "id": 213,
        "Name": "Persimmons"
      },
      {
        "id": 214,
        "Name": "Phlox"
      },
      {
        "id": 215,
        "Name": "Pigweed"
      },
      {
        "id": 216,
        "Name": "Pioppini Mushroom"
      },
      {
        "id": 217,
        "Name": "Plantains"
      },
      {
        "id": 218,
        "Name": "Plum"
      },
      {
        "id": 219,
        "Name": "Poke"
      },
      {
        "id": 220,
        "Name": "Popcorn"
      },
      {
        "id": 221,
        "Name": "Poppy Seed"
      },
      {
        "id": 222,
        "Name": "Potato"
      },
      {
        "id": 223,
        "Name": "Potatoes"
      },
      {
        "id": 224,
        "Name": "Potatoes (Yukon Gold)"
      },
      {
        "id": 225,
        "Name": "Potted Plants"
      },
      {
        "id": 226,
        "Name": "Pumpkins"
      },
      {
        "id": 227,
        "Name": "Purslane"
      },
      {
        "id": 228,
        "Name": "Radish"
      },
      {
        "id": 229,
        "Name": "Radishes"
      },
      {
        "id": 230,
        "Name": "Raspberries"
      },
      {
        "id": 231,
        "Name": "Raspberry"
      },
      {
        "id": 232,
        "Name": "Romaine Lettuce"
      },
      {
        "id": 233,
        "Name": "Rose"
      },
      {
        "id": 234,
        "Name": "Rosehips"
      },
      {
        "id": 235,
        "Name": "Rosemary"
      },
      {
        "id": 236,
        "Name": "Rutabaga"
      },
      {
        "id": 237,
        "Name": "Rye"
      },
      {
        "id": 238,
        "Name": "Ryegrass"
      },
      {
        "id": 239,
        "Name": "Sage"
      },
      {
        "id": 240,
        "Name": "Sage (Red)"
      },
      {
        "id": 241,
        "Name": "Salad Mix"
      },
      {
        "id": 242,
        "Name": "Salvia"
      },
      {
        "id": 243,
        "Name": "Scallions"
      },
      {
        "id": 244,
        "Name": "Seedlings"
      },
      {
        "id": 245,
        "Name": "Seeds"
      },
      {
        "id": 246,
        "Name": "Seeds for Research"
      },
      {
        "id": 247,
        "Name": "Self-heal"
      },
      {
        "id": 248,
        "Name": "Shiitake Mushroom"
      },
      {
        "id": 249,
        "Name": "Skullcap"
      },
      {
        "id": 250,
        "Name": "Snacks"
      },
      {
        "id": 251,
        "Name": "Snap Beans"
      },
      {
        "id": 252,
        "Name": "Solanaceous Transplants"
      },
      {
        "id": 253,
        "Name": "Sorghum"
      },
      {
        "id": 254,
        "Name": "Sorghum (Milo)"
      },
      {
        "id": 255,
        "Name": "Sorghum-Sudangrass"
      },
      {
        "id": 256,
        "Name": "Soybean"
      },
      {
        "id": 257,
        "Name": "Soybeans"
      },
      {
        "id": 258,
        "Name": "Spilanthes"
      },
      {
        "id": 259,
        "Name": "Spinach"
      },
      {
        "id": 260,
        "Name": "Sprouts"
      },
      {
        "id": 261,
        "Name": "Squash"
      },
      {
        "id": 262,
        "Name": "Squash (Butternut)"
      },
      {
        "id": 263,
        "Name": "Squash (Summer)"
      },
      {
        "id": 264,
        "Name": "Squash (Winter)"
      },
      {
        "id": 265,
        "Name": "Squash (Yellow)"
      },
      {
        "id": 266,
        "Name": "St. John's Wort"
      },
      {
        "id": 267,
        "Name": "Stevia"
      },
      {
        "id": 268,
        "Name": "Strawberries"
      },
      {
        "id": 269,
        "Name": "Sudan Grass"
      },
      {
        "id": 270,
        "Name": "Summer Squash"
      },
      {
        "id": 271,
        "Name": "Sunchokes"
      },
      {
        "id": 272,
        "Name": "Sunflower"
      },
      {
        "id": 273,
        "Name": "Sunflower (seed)"
      },
      {
        "id": 274,
        "Name": "Sunflower Seeds"
      },
      {
        "id": 275,
        "Name": "Sunflowers"
      },
      {
        "id": 276,
        "Name": "Sunflowers (Hopi Black Dye)"
      },
      {
        "id": 277,
        "Name": "Sweet Potato Transplants"
      },
      {
        "id": 278,
        "Name": "Sweet Potatoes"
      },
      {
        "id": 279,
        "Name": "Swiss Chard"
      },
      {
        "id": 280,
        "Name": "Tansy Ragwort"
      },
      {
        "id": 281,
        "Name": "Tea"
      },
      {
        "id": 282,
        "Name": "Tobacco"
      },
      {
        "id": 283,
        "Name": "Tobacco (Tobacco and Tobacco Transplants)"
      },
      {
        "id": 284,
        "Name": "Tobacco seedlings"
      },
      {
        "id": 285,
        "Name": "Tobacco Transplants"
      },
      {
        "id": 286,
        "Name": "Tomatillos"
      },
      {
        "id": 287,
        "Name": "Tomato"
      },
      {
        "id": 288,
        "Name": "Tomatoes"
      },
      {
        "id": 289,
        "Name": "Tomatoes (Cherry)"
      },
      {
        "id": 290,
        "Name": "Tomatoes (Grape)"
      },
      {
        "id": 291,
        "Name": "Transplants"
      },
      {
        "id": 292,
        "Name": "Transplants (Sweet Potato Transplants)"
      },
      {
        "id": 293,
        "Name": "Transplants (Sweet Potato)"
      },
      {
        "id": 294,
        "Name": "Transplants (Sweet Potatoes)"
      },
      {
        "id": 295,
        "Name": "Transplants (Tobacco Transplants)"
      },
      {
        "id": 296,
        "Name": "Transplants (Tobacco)"
      },
      {
        "id": 297,
        "Name": "Trees"
      },
      {
        "id": 298,
        "Name": "Tulsi"
      },
      {
        "id": 299,
        "Name": "Turmeric"
      },
      {
        "id": 300,
        "Name": "Turnips"
      },
      {
        "id": 301,
        "Name": "Usnea Barbata"
      },
      {
        "id": 302,
        "Name": "Valerian"
      },
      {
        "id": 303,
        "Name": "Vegetable"
      },
      {
        "id": 304,
        "Name": "Vegetable Transplants"
      },
      {
        "id": 305,
        "Name": "Vegetables"
      },
      {
        "id": 306,
        "Name": "Vegetables for Research"
      },
      {
        "id": 307,
        "Name": "Vetch"
      },
      {
        "id": 308,
        "Name": "Violet"
      },
      {
        "id": 309,
        "Name": "Watercress"
      },
      {
        "id": 310,
        "Name": "Watermelon"
      },
      {
        "id": 311,
        "Name": "Watermelons"
      },
      {
        "id": 312,
        "Name": "Wheat"
      },
      {
        "id": 313,
        "Name": "Wheat Grass"
      },
      {
        "id": 314,
        "Name": "Wheatgrass"
      },
      {
        "id": 315,
        "Name": "Wineberry"
      },
      {
        "id": 316,
        "Name": "Winter Squash"
      },
      {
        "id": 317,
        "Name": "Woodlands"
      },
      {
        "id": 318,
        "Name": "Wormwood"
      },
      {
        "id": 319,
        "Name": "Yarrow"
      },
      {
        "id": 320,
        "Name": "Yarrow (Official)"
      },
      {
        "id": 321,
        "Name": "Yellow Dock"
      },
      {
        "id": 322,
        "Name": "Zinnia"
      },
      {
        "id": 323,
        "Name": "Zucchini"
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
    return queryInterface.dropTable("cropData", null, {});

  }
};
