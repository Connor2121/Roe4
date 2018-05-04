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
    return queryInterface.bulkInsert("VendorLivestocks",
    [
      {
        "id": 1,
        "vendorDatumId": 4,
        "LivestockID": 10
      },
      {
        "id": 2,
        "vendorDatumId": 17,
        "LivestockID": 10
      },
      {
        "id": 3,
        "vendorDatumId": 23,
        "LivestockID": 32
      },
      {
        "id": 4,
        "vendorDatumId": 23,
        "LivestockID": 53
      },
      {
        "id": 5,
        "vendorDatumId": 23,
        "LivestockID": 47
      },
      {
        "id": 6,
        "vendorDatumId": 23,
        "LivestockID": 45
      },
      {
        "id": 7,
        "vendorDatumId": 23,
        "LivestockID": 25
      },
      {
        "id": 8,
        "vendorDatumId": 23,
        "LivestockID": 33
      },
      {
        "id": 9,
        "vendorDatumId": 23,
        "LivestockID": 21
      },
      {
        "id": 10,
        "vendorDatumId": 25,
        "LivestockID": 10
      },
      {
        "id": 11,
        "vendorDatumId": 29,
        "LivestockID": 10
      },
      {
        "id": 12,
        "vendorDatumId": 30,
        "LivestockID": 10
      },
      {
        "id": 13,
        "vendorDatumId": 31,
        "LivestockID": 10
      },
      {
        "id": 14,
        "vendorDatumId": 36,
        "LivestockID": 38
      },
      {
        "id": 15,
        "vendorDatumId": 36,
        "LivestockID": 44
      },
      {
        "id": 16,
        "vendorDatumId": 37,
        "LivestockID": 10
      },
      {
        "id": 17,
        "vendorDatumId": 41,
        "LivestockID": 50
      },
      {
        "id": 18,
        "vendorDatumId": 50,
        "LivestockID": 10
      },
      {
        "id": 19,
        "vendorDatumId": 51,
        "LivestockID": 10
      },
      {
        "id": 20,
        "vendorDatumId": 52,
        "LivestockID": 11
      },
      {
        "id": 21,
        "vendorDatumId": 56,
        "LivestockID": 2
      },
      {
        "id": 22,
        "vendorDatumId": 56,
        "LivestockID": 5
      },
      {
        "id": 23,
        "vendorDatumId": 56,
        "LivestockID": 6
      },
      {
        "id": 24,
        "vendorDatumId": 56,
        "LivestockID": 3
      },
      {
        "id": 25,
        "vendorDatumId": 56,
        "LivestockID": 26
      },
      {
        "id": 26,
        "vendorDatumId": 56,
        "LivestockID": 27
      },
      {
        "id": 27,
        "vendorDatumId": 64,
        "LivestockID": 10
      },
      {
        "id": 28,
        "vendorDatumId": 66,
        "LivestockID": 10
      },
      {
        "id": 29,
        "vendorDatumId": 68,
        "LivestockID": 10
      },
      {
        "id": 30,
        "vendorDatumId": 79,
        "LivestockID": 10
      },
      {
        "id": 31,
        "vendorDatumId": 81,
        "LivestockID": 10
      },
      {
        "id": 32,
        "vendorDatumId": 82,
        "LivestockID": 10
      },
      {
        "id": 33,
        "vendorDatumId": 85,
        "LivestockID": 10
      },
      {
        "id": 34,
        "vendorDatumId": 87,
        "LivestockID": 10
      },
      {
        "id": 35,
        "vendorDatumId": 88,
        "LivestockID": 10
      },
      {
        "id": 36,
        "vendorDatumId": 89,
        "LivestockID": 10
      },
      {
        "id": 37,
        "vendorDatumId": 95,
        "LivestockID": 10
      },
      {
        "id": 38,
        "vendorDatumId": 96,
        "LivestockID": 31
      },
      {
        "id": 39,
        "vendorDatumId": 96,
        "LivestockID": 38
      },
      {
        "id": 40,
        "vendorDatumId": 97,
        "LivestockID": 31
      },
      {
        "id": 41,
        "vendorDatumId": 97,
        "LivestockID": 38
      },
      {
        "id": 42,
        "vendorDatumId": 98,
        "LivestockID": 31
      },
      {
        "id": 43,
        "vendorDatumId": 98,
        "LivestockID": 38
      },
      {
        "id": 44,
        "vendorDatumId": 99,
        "LivestockID": 30
      },
      {
        "id": 45,
        "vendorDatumId": 99,
        "LivestockID": 44
      },
      {
        "id": 46,
        "vendorDatumId": 100,
        "LivestockID": 50
      },
      {
        "id": 47,
        "vendorDatumId": 101,
        "LivestockID": 38
      },
      {
        "id": 48,
        "vendorDatumId": 101,
        "LivestockID": 44
      },
      {
        "id": 49,
        "vendorDatumId": 102,
        "LivestockID": 50
      },
      {
        "id": 50,
        "vendorDatumId": 103,
        "LivestockID": 38
      },
      {
        "id": 51,
        "vendorDatumId": 103,
        "LivestockID": 44
      },
      {
        "id": 52,
        "vendorDatumId": 104,
        "LivestockID": 38
      },
      {
        "id": 53,
        "vendorDatumId": 104,
        "LivestockID": 44
      },
      {
        "id": 54,
        "vendorDatumId": 105,
        "LivestockID": 38
      },
      {
        "id": 55,
        "vendorDatumId": 105,
        "LivestockID": 44
      },
      {
        "id": 56,
        "vendorDatumId": 106,
        "LivestockID": 50
      },
      {
        "id": 57,
        "vendorDatumId": 107,
        "LivestockID": 38
      },
      {
        "id": 58,
        "vendorDatumId": 107,
        "LivestockID": 44
      },
      {
        "id": 59,
        "vendorDatumId": 108,
        "LivestockID": 38
      },
      {
        "id": 60,
        "vendorDatumId": 108,
        "LivestockID": 44
      },
      {
        "id": 61,
        "vendorDatumId": 109,
        "LivestockID": 38
      },
      {
        "id": 62,
        "vendorDatumId": 109,
        "LivestockID": 44
      },
      {
        "id": 63,
        "vendorDatumId": 110,
        "LivestockID": 29
      },
      {
        "id": 64,
        "vendorDatumId": 110,
        "LivestockID": 44
      },
      {
        "id": 65,
        "vendorDatumId": 111,
        "LivestockID": 38
      },
      {
        "id": 66,
        "vendorDatumId": 111,
        "LivestockID": 44
      },
      {
        "id": 67,
        "vendorDatumId": 112,
        "LivestockID": 38
      },
      {
        "id": 68,
        "vendorDatumId": 112,
        "LivestockID": 44
      },
      {
        "id": 69,
        "vendorDatumId": 113,
        "LivestockID": 50
      },
      {
        "id": 70,
        "vendorDatumId": 114,
        "LivestockID": 50
      },
      {
        "id": 71,
        "vendorDatumId": 115,
        "LivestockID": 31
      },
      {
        "id": 72,
        "vendorDatumId": 115,
        "LivestockID": 38
      },
      {
        "id": 73,
        "vendorDatumId": 116,
        "LivestockID": 31
      },
      {
        "id": 74,
        "vendorDatumId": 117,
        "LivestockID": 50
      },
      {
        "id": 75,
        "vendorDatumId": 118,
        "LivestockID": 36
      },
      {
        "id": 76,
        "vendorDatumId": 118,
        "LivestockID": 31
      },
      {
        "id": 77,
        "vendorDatumId": 119,
        "LivestockID": 31
      },
      {
        "id": 78,
        "vendorDatumId": 119,
        "LivestockID": 38
      },
      {
        "id": 79,
        "vendorDatumId": 120,
        "LivestockID": 31
      },
      {
        "id": 80,
        "vendorDatumId": 121,
        "LivestockID": 38
      },
      {
        "id": 81,
        "vendorDatumId": 121,
        "LivestockID": 44
      },
      {
        "id": 82,
        "vendorDatumId": 122,
        "LivestockID": 50
      },
      {
        "id": 83,
        "vendorDatumId": 123,
        "LivestockID": 38
      },
      {
        "id": 84,
        "vendorDatumId": 123,
        "LivestockID": 44
      },
      {
        "id": 85,
        "vendorDatumId": 124,
        "LivestockID": 31
      },
      {
        "id": 86,
        "vendorDatumId": 124,
        "LivestockID": 38
      },
      {
        "id": 87,
        "vendorDatumId": 125,
        "LivestockID": 50
      },
      {
        "id": 88,
        "vendorDatumId": 126,
        "LivestockID": 31
      },
      {
        "id": 89,
        "vendorDatumId": 126,
        "LivestockID": 38
      },
      {
        "id": 90,
        "vendorDatumId": 127,
        "LivestockID": 50
      },
      {
        "id": 91,
        "vendorDatumId": 128,
        "LivestockID": 31
      },
      {
        "id": 92,
        "vendorDatumId": 128,
        "LivestockID": 36
      },
      {
        "id": 93,
        "vendorDatumId": 129,
        "LivestockID": 31
      },
      {
        "id": 94,
        "vendorDatumId": 129,
        "LivestockID": 38
      },
      {
        "id": 95,
        "vendorDatumId": 130,
        "LivestockID": 31
      },
      {
        "id": 96,
        "vendorDatumId": 130,
        "LivestockID": 38
      },
      {
        "id": 97,
        "vendorDatumId": 131,
        "LivestockID": 31
      },
      {
        "id": 98,
        "vendorDatumId": 131,
        "LivestockID": 38
      },
      {
        "id": 99,
        "vendorDatumId": 132,
        "LivestockID": 11
      },
      {
        "id": 100,
        "vendorDatumId": 133,
        "LivestockID": 11
      },
      {
        "id": 101,
        "vendorDatumId": 134,
        "LivestockID": 12
      },
      {
        "id": 102,
        "vendorDatumId": 150,
        "LivestockID": 12
      },
      {
        "id": 103,
        "vendorDatumId": 157,
        "LivestockID": 11
      },
      {
        "id": 104,
        "vendorDatumId": 159,
        "LivestockID": 11
      },
      {
        "id": 105,
        "vendorDatumId": 160,
        "LivestockID": 11
      },
      {
        "id": 106,
        "vendorDatumId": 163,
        "LivestockID": 39
      },
      {
        "id": 107,
        "vendorDatumId": 167,
        "LivestockID": 11
      },
      {
        "id": 108,
        "vendorDatumId": 175,
        "LivestockID": 57
      },
      {
        "id": 109,
        "vendorDatumId": 180,
        "LivestockID": 57
      },
      {
        "id": 110,
        "vendorDatumId": 181,
        "LivestockID": 11
      },
      {
        "id": 111,
        "vendorDatumId": 183,
        "LivestockID": 11
      },
      {
        "id": 112,
        "vendorDatumId": 184,
        "LivestockID": 36
      },
      {
        "id": 113,
        "vendorDatumId": 184,
        "LivestockID": 31
      },
      {
        "id": 114,
        "vendorDatumId": 185,
        "LivestockID": 11
      },
      {
        "id": 115,
        "vendorDatumId": 190,
        "LivestockID": 11
      },
      {
        "id": 116,
        "vendorDatumId": 191,
        "LivestockID": 11
      },
      {
        "id": 117,
        "vendorDatumId": 193,
        "LivestockID": 57
      },
      {
        "id": 118,
        "vendorDatumId": 196,
        "LivestockID": 11
      },
      {
        "id": 119,
        "vendorDatumId": 205,
        "LivestockID": 12
      },
      {
        "id": 120,
        "vendorDatumId": 214,
        "LivestockID": 11
      },
      {
        "id": 121,
        "vendorDatumId": 215,
        "LivestockID": 11
      },
      {
        "id": 122,
        "vendorDatumId": 220,
        "LivestockID": 9
      },
      {
        "id": 123,
        "vendorDatumId": 226,
        "LivestockID": 38
      },
      {
        "id": 124,
        "vendorDatumId": 226,
        "LivestockID": 44
      },
      {
        "id": 125,
        "vendorDatumId": 229,
        "LivestockID": 19
      },
      {
        "id": 126,
        "vendorDatumId": 229,
        "LivestockID": 34
      },
      {
        "id": 127,
        "vendorDatumId": 229,
        "LivestockID": 35
      },
      {
        "id": 128,
        "vendorDatumId": 229,
        "LivestockID": 52
      },
      {
        "id": 129,
        "vendorDatumId": 231,
        "LivestockID": 11
      },
      {
        "id": 130,
        "vendorDatumId": 233,
        "LivestockID": 11
      },
      {
        "id": 131,
        "vendorDatumId": 240,
        "LivestockID": 12
      },
      {
        "id": 132,
        "vendorDatumId": 241,
        "LivestockID": 11
      },
      {
        "id": 133,
        "vendorDatumId": 245,
        "LivestockID": 11
      },
      {
        "id": 134,
        "vendorDatumId": 252,
        "LivestockID": 9
      },
      {
        "id": 135,
        "vendorDatumId": 257,
        "LivestockID": 12
      },
      {
        "id": 136,
        "vendorDatumId": 259,
        "LivestockID": 50
      },
      {
        "id": 137,
        "vendorDatumId": 264,
        "LivestockID": 11
      },
      {
        "id": 138,
        "vendorDatumId": 265,
        "LivestockID": 12
      },
      {
        "id": 139,
        "vendorDatumId": 271,
        "LivestockID": 11
      },
      {
        "id": 140,
        "vendorDatumId": 273,
        "LivestockID": 12
      },
      {
        "id": 141,
        "vendorDatumId": 276,
        "LivestockID": 11
      },
      {
        "id": 142,
        "vendorDatumId": 279,
        "LivestockID": 57
      },
      {
        "id": 143,
        "vendorDatumId": 281,
        "LivestockID": 11
      },
      {
        "id": 144,
        "vendorDatumId": 286,
        "LivestockID": 8
      },
      {
        "id": 145,
        "vendorDatumId": 286,
        "LivestockID": 14
      },
      {
        "id": 146,
        "vendorDatumId": 289,
        "LivestockID": 11
      },
      {
        "id": 147,
        "vendorDatumId": 291,
        "LivestockID": 51
      },
      {
        "id": 148,
        "vendorDatumId": 294,
        "LivestockID": 11
      },
      {
        "id": 149,
        "vendorDatumId": 295,
        "LivestockID": 11
      },
      {
        "id": 150,
        "vendorDatumId": 297,
        "LivestockID": 11
      },
      {
        "id": 151,
        "vendorDatumId": 298,
        "LivestockID": 39
      },
      {
        "id": 152,
        "vendorDatumId": 302,
        "LivestockID": 15
      },
      {
        "id": 153,
        "vendorDatumId": 302,
        "LivestockID": 17
      },
      {
        "id": 154,
        "vendorDatumId": 302,
        "LivestockID": 23
      },
      {
        "id": 155,
        "vendorDatumId": 303,
        "LivestockID": 11
      },
      {
        "id": 156,
        "vendorDatumId": 305,
        "LivestockID": 11
      },
      {
        "id": 157,
        "vendorDatumId": 306,
        "LivestockID": 39
      },
      {
        "id": 158,
        "vendorDatumId": 309,
        "LivestockID": 11
      },
      {
        "id": 159,
        "vendorDatumId": 311,
        "LivestockID": 11
      },
      {
        "id": 160,
        "vendorDatumId": 314,
        "LivestockID": 11
      },
      {
        "id": 161,
        "vendorDatumId": 319,
        "LivestockID": 11
      },
      {
        "id": 162,
        "vendorDatumId": 322,
        "LivestockID": 11
      },
      {
        "id": 163,
        "vendorDatumId": 327,
        "LivestockID": 11
      },
      {
        "id": 164,
        "vendorDatumId": 328,
        "LivestockID": 16
      },
      {
        "id": 165,
        "vendorDatumId": 328,
        "LivestockID": 17
      },
      {
        "id": 166,
        "vendorDatumId": 328,
        "LivestockID": 23
      },
      {
        "id": 167,
        "vendorDatumId": 330,
        "LivestockID": 11
      },
      {
        "id": 168,
        "vendorDatumId": 333,
        "LivestockID": 11
      },
      {
        "id": 169,
        "vendorDatumId": 337,
        "LivestockID": 39
      },
      {
        "id": 170,
        "vendorDatumId": 347,
        "LivestockID": 11
      },
      {
        "id": 171,
        "vendorDatumId": 351,
        "LivestockID": 11
      },
      {
        "id": 172,
        "vendorDatumId": 358,
        "LivestockID": 11
      },
      {
        "id": 173,
        "vendorDatumId": 369,
        "LivestockID": 11
      },
      {
        "id": 174,
        "vendorDatumId": 370,
        "LivestockID": 11
      },
      {
        "id": 175,
        "vendorDatumId": 371,
        "LivestockID": 11
      },
      {
        "id": 176,
        "vendorDatumId": 372,
        "LivestockID": 12
      },
      {
        "id": 177,
        "vendorDatumId": 376,
        "LivestockID": 39
      },
      {
        "id": 178,
        "vendorDatumId": 380,
        "LivestockID": 11
      },
      {
        "id": 179,
        "vendorDatumId": 384,
        "LivestockID": 11
      },
      {
        "id": 180,
        "vendorDatumId": 387,
        "LivestockID": 50
      },
      {
        "id": 181,
        "vendorDatumId": 402,
        "LivestockID": 11
      },
      {
        "id": 182,
        "vendorDatumId": 403,
        "LivestockID": 11
      },
      {
        "id": 183,
        "vendorDatumId": 404,
        "LivestockID": 15
      },
      {
        "id": 184,
        "vendorDatumId": 404,
        "LivestockID": 16
      },
      {
        "id": 185,
        "vendorDatumId": 404,
        "LivestockID": 23
      },
      {
        "id": 186,
        "vendorDatumId": 405,
        "LivestockID": 11
      },
      {
        "id": 187,
        "vendorDatumId": 411,
        "LivestockID": 11
      },
      {
        "id": 188,
        "vendorDatumId": 412,
        "LivestockID": 11
      },
      {
        "id": 189,
        "vendorDatumId": 422,
        "LivestockID": 11
      },
      {
        "id": 190,
        "vendorDatumId": 427,
        "LivestockID": 11
      },
      {
        "id": 191,
        "vendorDatumId": 428,
        "LivestockID": 15
      },
      {
        "id": 192,
        "vendorDatumId": 428,
        "LivestockID": 23
      },
      {
        "id": 193,
        "vendorDatumId": 429,
        "LivestockID": 11
      },
      {
        "id": 194,
        "vendorDatumId": 431,
        "LivestockID": 11
      },
      {
        "id": 195,
        "vendorDatumId": 432,
        "LivestockID": 11
      },
      {
        "id": 196,
        "vendorDatumId": 436,
        "LivestockID": 57
      },
      {
        "id": 197,
        "vendorDatumId": 439,
        "LivestockID": 11
      },
      {
        "id": 198,
        "vendorDatumId": 445,
        "LivestockID": 37
      },
      {
        "id": 199,
        "vendorDatumId": 452,
        "LivestockID": 11
      },
      {
        "id": 200,
        "vendorDatumId": 453,
        "LivestockID": 55
      },
      {
        "id": 201,
        "vendorDatumId": 453,
        "LivestockID": 4
      },
      {
        "id": 202,
        "vendorDatumId": 457,
        "LivestockID": 11
      },
      {
        "id": 203,
        "vendorDatumId": 464,
        "LivestockID": 1
      },
      {
        "id": 204,
        "vendorDatumId": 464,
        "LivestockID": 15
      },
      {
        "id": 205,
        "vendorDatumId": 464,
        "LivestockID": 16
      },
      {
        "id": 206,
        "vendorDatumId": 464,
        "LivestockID": 17
      },
      {
        "id": 207,
        "vendorDatumId": 464,
        "LivestockID": 18
      },
      {
        "id": 208,
        "vendorDatumId": 464,
        "LivestockID": 19
      },
      {
        "id": 209,
        "vendorDatumId": 464,
        "LivestockID": 23
      },
      {
        "id": 210,
        "vendorDatumId": 466,
        "LivestockID": 11
      },
      {
        "id": 211,
        "vendorDatumId": 469,
        "LivestockID": 11
      },
      {
        "id": 212,
        "vendorDatumId": 475,
        "LivestockID": 11
      },
      {
        "id": 213,
        "vendorDatumId": 476,
        "LivestockID": 11
      },
      {
        "id": 214,
        "vendorDatumId": 477,
        "LivestockID": 11
      },
      {
        "id": 215,
        "vendorDatumId": 482,
        "LivestockID": 40
      },
      {
        "id": 216,
        "vendorDatumId": 482,
        "LivestockID": 46
      },
      {
        "id": 217,
        "vendorDatumId": 482,
        "LivestockID": 40
      },
      {
        "id": 218,
        "vendorDatumId": 482,
        "LivestockID": 46
      },
      {
        "id": 219,
        "vendorDatumId": 485,
        "LivestockID": 57
      },
      {
        "id": 220,
        "vendorDatumId": 495,
        "LivestockID": 11
      },
      {
        "id": 221,
        "vendorDatumId": 496,
        "LivestockID": 32
      },
      {
        "id": 222,
        "vendorDatumId": 496,
        "LivestockID": 53
      },
      {
        "id": 223,
        "vendorDatumId": 496,
        "LivestockID": 7
      },
      {
        "id": 224,
        "vendorDatumId": 496,
        "LivestockID": 54
      },
      {
        "id": 225,
        "vendorDatumId": 496,
        "LivestockID": 24
      },
      {
        "id": 226,
        "vendorDatumId": 496,
        "LivestockID": 28
      },
      {
        "id": 227,
        "vendorDatumId": 496,
        "LivestockID": 41
      },
      {
        "id": 228,
        "vendorDatumId": 496,
        "LivestockID": 25
      },
      {
        "id": 229,
        "vendorDatumId": 496,
        "LivestockID": 21
      },
      {
        "id": 230,
        "vendorDatumId": 496,
        "LivestockID": 47
      },
      {
        "id": 231,
        "vendorDatumId": 496,
        "LivestockID": 22
      },
      {
        "id": 232,
        "vendorDatumId": 496,
        "LivestockID": 43
      },
      {
        "id": 233,
        "vendorDatumId": 501,
        "LivestockID": 11
      },
      {
        "id": 234,
        "vendorDatumId": 507,
        "LivestockID": 11
      },
      {
        "id": 235,
        "vendorDatumId": 508,
        "LivestockID": 11
      },
      {
        "id": 236,
        "vendorDatumId": 517,
        "LivestockID": 11
      },
      {
        "id": 237,
        "vendorDatumId": 526,
        "LivestockID": 50
      },
      {
        "id": 238,
        "vendorDatumId": 532,
        "LivestockID": 39
      },
      {
        "id": 239,
        "vendorDatumId": 537,
        "LivestockID": 11
      },
      {
        "id": 240,
        "vendorDatumId": 538,
        "LivestockID": 11
      },
      {
        "id": 241,
        "vendorDatumId": 549,
        "LivestockID": 11
      },
      {
        "id": 242,
        "vendorDatumId": 550,
        "LivestockID": 11
      },
      {
        "id": 243,
        "vendorDatumId": 552,
        "LivestockID": 11
      },
      {
        "id": 244,
        "vendorDatumId": 555,
        "LivestockID": 11
      },
      {
        "id": 245,
        "vendorDatumId": 563,
        "LivestockID": 11
      },
      {
        "id": 246,
        "vendorDatumId": 566,
        "LivestockID": 11
      },
      {
        "id": 247,
        "vendorDatumId": 567,
        "LivestockID": 13
      },
      {
        "id": 248,
        "vendorDatumId": 567,
        "LivestockID": 19
      },
      {
        "id": 249,
        "vendorDatumId": 567,
        "LivestockID": 20
      },
      {
        "id": 250,
        "vendorDatumId": 567,
        "LivestockID": 49
      },
      {
        "id": 251,
        "vendorDatumId": 567,
        "LivestockID": 56
      },
      {
        "id": 252,
        "vendorDatumId": 570,
        "LivestockID": 26
      },
      {
        "id": 253,
        "vendorDatumId": 570,
        "LivestockID": 42
      },
      {
        "id": 254,
        "vendorDatumId": 570,
        "LivestockID": 48
      },
      {
        "id": 255,
        "vendorDatumId": 576,
        "LivestockID": 11
      },
      {
        "id": 256,
        "vendorDatumId": 581,
        "LivestockID": 11
      },
      {
        "id": 257,
        "vendorDatumId": 582,
        "LivestockID": 11
      },
      {
        "id": 258,
        "vendorDatumId": 590,
        "LivestockID": 11
      },
      {
        "id": 259,
        "vendorDatumId": 607,
        "LivestockID": 11
      },
      {
        "id": 260,
        "vendorDatumId": 614,
        "LivestockID": 11
      },
      {
        "id": 261,
        "vendorDatumId": 616,
        "LivestockID": 11
      },
      {
        "id": 262,
        "vendorDatumId": 617,
        "LivestockID": 11
      },
      {
        "id": 263,
        "vendorDatumId": 620,
        "LivestockID": 11
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
    return queryInterface.dropTable("VendorLivestocks", null, {});

  }
};
