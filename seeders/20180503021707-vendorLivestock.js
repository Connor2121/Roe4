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
        "VendorID": 4,
        "LivestockID": 10
      },
      {
        "id": 2,
        "VendorID": 17,
        "LivestockID": 10
      },
      {
        "id": 3,
        "VendorID": 23,
        "LivestockID": 32
      },
      {
        "id": 4,
        "VendorID": 23,
        "LivestockID": 53
      },
      {
        "id": 5,
        "VendorID": 23,
        "LivestockID": 47
      },
      {
        "id": 6,
        "VendorID": 23,
        "LivestockID": 45
      },
      {
        "id": 7,
        "VendorID": 23,
        "LivestockID": 25
      },
      {
        "id": 8,
        "VendorID": 23,
        "LivestockID": 33
      },
      {
        "id": 9,
        "VendorID": 23,
        "LivestockID": 21
      },
      {
        "id": 10,
        "VendorID": 25,
        "LivestockID": 10
      },
      {
        "id": 11,
        "VendorID": 29,
        "LivestockID": 10
      },
      {
        "id": 12,
        "VendorID": 30,
        "LivestockID": 10
      },
      {
        "id": 13,
        "VendorID": 31,
        "LivestockID": 10
      },
      {
        "id": 14,
        "VendorID": 36,
        "LivestockID": 38
      },
      {
        "id": 15,
        "VendorID": 36,
        "LivestockID": 44
      },
      {
        "id": 16,
        "VendorID": 37,
        "LivestockID": 10
      },
      {
        "id": 17,
        "VendorID": 41,
        "LivestockID": 50
      },
      {
        "id": 18,
        "VendorID": 50,
        "LivestockID": 10
      },
      {
        "id": 19,
        "VendorID": 51,
        "LivestockID": 10
      },
      {
        "id": 20,
        "VendorID": 52,
        "LivestockID": 11
      },
      {
        "id": 21,
        "VendorID": 56,
        "LivestockID": 2
      },
      {
        "id": 22,
        "VendorID": 56,
        "LivestockID": 5
      },
      {
        "id": 23,
        "VendorID": 56,
        "LivestockID": 6
      },
      {
        "id": 24,
        "VendorID": 56,
        "LivestockID": 3
      },
      {
        "id": 25,
        "VendorID": 56,
        "LivestockID": 26
      },
      {
        "id": 26,
        "VendorID": 56,
        "LivestockID": 27
      },
      {
        "id": 27,
        "VendorID": 64,
        "LivestockID": 10
      },
      {
        "id": 28,
        "VendorID": 66,
        "LivestockID": 10
      },
      {
        "id": 29,
        "VendorID": 68,
        "LivestockID": 10
      },
      {
        "id": 30,
        "VendorID": 79,
        "LivestockID": 10
      },
      {
        "id": 31,
        "VendorID": 81,
        "LivestockID": 10
      },
      {
        "id": 32,
        "VendorID": 82,
        "LivestockID": 10
      },
      {
        "id": 33,
        "VendorID": 85,
        "LivestockID": 10
      },
      {
        "id": 34,
        "VendorID": 87,
        "LivestockID": 10
      },
      {
        "id": 35,
        "VendorID": 88,
        "LivestockID": 10
      },
      {
        "id": 36,
        "VendorID": 89,
        "LivestockID": 10
      },
      {
        "id": 37,
        "VendorID": 95,
        "LivestockID": 10
      },
      {
        "id": 38,
        "VendorID": 96,
        "LivestockID": 31
      },
      {
        "id": 39,
        "VendorID": 96,
        "LivestockID": 38
      },
      {
        "id": 40,
        "VendorID": 97,
        "LivestockID": 31
      },
      {
        "id": 41,
        "VendorID": 97,
        "LivestockID": 38
      },
      {
        "id": 42,
        "VendorID": 98,
        "LivestockID": 31
      },
      {
        "id": 43,
        "VendorID": 98,
        "LivestockID": 38
      },
      {
        "id": 44,
        "VendorID": 99,
        "LivestockID": 30
      },
      {
        "id": 45,
        "VendorID": 99,
        "LivestockID": 44
      },
      {
        "id": 46,
        "VendorID": 100,
        "LivestockID": 50
      },
      {
        "id": 47,
        "VendorID": 101,
        "LivestockID": 38
      },
      {
        "id": 48,
        "VendorID": 101,
        "LivestockID": 44
      },
      {
        "id": 49,
        "VendorID": 102,
        "LivestockID": 50
      },
      {
        "id": 50,
        "VendorID": 103,
        "LivestockID": 38
      },
      {
        "id": 51,
        "VendorID": 103,
        "LivestockID": 44
      },
      {
        "id": 52,
        "VendorID": 104,
        "LivestockID": 38
      },
      {
        "id": 53,
        "VendorID": 104,
        "LivestockID": 44
      },
      {
        "id": 54,
        "VendorID": 105,
        "LivestockID": 38
      },
      {
        "id": 55,
        "VendorID": 105,
        "LivestockID": 44
      },
      {
        "id": 56,
        "VendorID": 106,
        "LivestockID": 50
      },
      {
        "id": 57,
        "VendorID": 107,
        "LivestockID": 38
      },
      {
        "id": 58,
        "VendorID": 107,
        "LivestockID": 44
      },
      {
        "id": 59,
        "VendorID": 108,
        "LivestockID": 38
      },
      {
        "id": 60,
        "VendorID": 108,
        "LivestockID": 44
      },
      {
        "id": 61,
        "VendorID": 109,
        "LivestockID": 38
      },
      {
        "id": 62,
        "VendorID": 109,
        "LivestockID": 44
      },
      {
        "id": 63,
        "VendorID": 110,
        "LivestockID": 29
      },
      {
        "id": 64,
        "VendorID": 110,
        "LivestockID": 44
      },
      {
        "id": 65,
        "VendorID": 111,
        "LivestockID": 38
      },
      {
        "id": 66,
        "VendorID": 111,
        "LivestockID": 44
      },
      {
        "id": 67,
        "VendorID": 112,
        "LivestockID": 38
      },
      {
        "id": 68,
        "VendorID": 112,
        "LivestockID": 44
      },
      {
        "id": 69,
        "VendorID": 113,
        "LivestockID": 50
      },
      {
        "id": 70,
        "VendorID": 114,
        "LivestockID": 50
      },
      {
        "id": 71,
        "VendorID": 115,
        "LivestockID": 31
      },
      {
        "id": 72,
        "VendorID": 115,
        "LivestockID": 38
      },
      {
        "id": 73,
        "VendorID": 116,
        "LivestockID": 31
      },
      {
        "id": 74,
        "VendorID": 117,
        "LivestockID": 50
      },
      {
        "id": 75,
        "VendorID": 118,
        "LivestockID": 36
      },
      {
        "id": 76,
        "VendorID": 118,
        "LivestockID": 31
      },
      {
        "id": 77,
        "VendorID": 119,
        "LivestockID": 31
      },
      {
        "id": 78,
        "VendorID": 119,
        "LivestockID": 38
      },
      {
        "id": 79,
        "VendorID": 120,
        "LivestockID": 31
      },
      {
        "id": 80,
        "VendorID": 121,
        "LivestockID": 38
      },
      {
        "id": 81,
        "VendorID": 121,
        "LivestockID": 44
      },
      {
        "id": 82,
        "VendorID": 122,
        "LivestockID": 50
      },
      {
        "id": 83,
        "VendorID": 123,
        "LivestockID": 38
      },
      {
        "id": 84,
        "VendorID": 123,
        "LivestockID": 44
      },
      {
        "id": 85,
        "VendorID": 124,
        "LivestockID": 31
      },
      {
        "id": 86,
        "VendorID": 124,
        "LivestockID": 38
      },
      {
        "id": 87,
        "VendorID": 125,
        "LivestockID": 50
      },
      {
        "id": 88,
        "VendorID": 126,
        "LivestockID": 31
      },
      {
        "id": 89,
        "VendorID": 126,
        "LivestockID": 38
      },
      {
        "id": 90,
        "VendorID": 127,
        "LivestockID": 50
      },
      {
        "id": 91,
        "VendorID": 128,
        "LivestockID": 31
      },
      {
        "id": 92,
        "VendorID": 128,
        "LivestockID": 36
      },
      {
        "id": 93,
        "VendorID": 129,
        "LivestockID": 31
      },
      {
        "id": 94,
        "VendorID": 129,
        "LivestockID": 38
      },
      {
        "id": 95,
        "VendorID": 130,
        "LivestockID": 31
      },
      {
        "id": 96,
        "VendorID": 130,
        "LivestockID": 38
      },
      {
        "id": 97,
        "VendorID": 131,
        "LivestockID": 31
      },
      {
        "id": 98,
        "VendorID": 131,
        "LivestockID": 38
      },
      {
        "id": 99,
        "VendorID": 132,
        "LivestockID": 11
      },
      {
        "id": 100,
        "VendorID": 133,
        "LivestockID": 11
      },
      {
        "id": 101,
        "VendorID": 134,
        "LivestockID": 12
      },
      {
        "id": 102,
        "VendorID": 150,
        "LivestockID": 12
      },
      {
        "id": 103,
        "VendorID": 157,
        "LivestockID": 11
      },
      {
        "id": 104,
        "VendorID": 159,
        "LivestockID": 11
      },
      {
        "id": 105,
        "VendorID": 160,
        "LivestockID": 11
      },
      {
        "id": 106,
        "VendorID": 163,
        "LivestockID": 39
      },
      {
        "id": 107,
        "VendorID": 167,
        "LivestockID": 11
      },
      {
        "id": 108,
        "VendorID": 175,
        "LivestockID": 57
      },
      {
        "id": 109,
        "VendorID": 180,
        "LivestockID": 57
      },
      {
        "id": 110,
        "VendorID": 181,
        "LivestockID": 11
      },
      {
        "id": 111,
        "VendorID": 183,
        "LivestockID": 11
      },
      {
        "id": 112,
        "VendorID": 184,
        "LivestockID": 36
      },
      {
        "id": 113,
        "VendorID": 184,
        "LivestockID": 31
      },
      {
        "id": 114,
        "VendorID": 185,
        "LivestockID": 11
      },
      {
        "id": 115,
        "VendorID": 190,
        "LivestockID": 11
      },
      {
        "id": 116,
        "VendorID": 191,
        "LivestockID": 11
      },
      {
        "id": 117,
        "VendorID": 193,
        "LivestockID": 57
      },
      {
        "id": 118,
        "VendorID": 196,
        "LivestockID": 11
      },
      {
        "id": 119,
        "VendorID": 205,
        "LivestockID": 12
      },
      {
        "id": 120,
        "VendorID": 214,
        "LivestockID": 11
      },
      {
        "id": 121,
        "VendorID": 215,
        "LivestockID": 11
      },
      {
        "id": 122,
        "VendorID": 220,
        "LivestockID": 9
      },
      {
        "id": 123,
        "VendorID": 226,
        "LivestockID": 38
      },
      {
        "id": 124,
        "VendorID": 226,
        "LivestockID": 44
      },
      {
        "id": 125,
        "VendorID": 229,
        "LivestockID": 19
      },
      {
        "id": 126,
        "VendorID": 229,
        "LivestockID": 34
      },
      {
        "id": 127,
        "VendorID": 229,
        "LivestockID": 35
      },
      {
        "id": 128,
        "VendorID": 229,
        "LivestockID": 52
      },
      {
        "id": 129,
        "VendorID": 231,
        "LivestockID": 11
      },
      {
        "id": 130,
        "VendorID": 233,
        "LivestockID": 11
      },
      {
        "id": 131,
        "VendorID": 240,
        "LivestockID": 12
      },
      {
        "id": 132,
        "VendorID": 241,
        "LivestockID": 11
      },
      {
        "id": 133,
        "VendorID": 245,
        "LivestockID": 11
      },
      {
        "id": 134,
        "VendorID": 252,
        "LivestockID": 9
      },
      {
        "id": 135,
        "VendorID": 257,
        "LivestockID": 12
      },
      {
        "id": 136,
        "VendorID": 259,
        "LivestockID": 50
      },
      {
        "id": 137,
        "VendorID": 264,
        "LivestockID": 11
      },
      {
        "id": 138,
        "VendorID": 265,
        "LivestockID": 12
      },
      {
        "id": 139,
        "VendorID": 271,
        "LivestockID": 11
      },
      {
        "id": 140,
        "VendorID": 273,
        "LivestockID": 12
      },
      {
        "id": 141,
        "VendorID": 276,
        "LivestockID": 11
      },
      {
        "id": 142,
        "VendorID": 279,
        "LivestockID": 57
      },
      {
        "id": 143,
        "VendorID": 281,
        "LivestockID": 11
      },
      {
        "id": 144,
        "VendorID": 286,
        "LivestockID": 8
      },
      {
        "id": 145,
        "VendorID": 286,
        "LivestockID": 14
      },
      {
        "id": 146,
        "VendorID": 289,
        "LivestockID": 11
      },
      {
        "id": 147,
        "VendorID": 291,
        "LivestockID": 51
      },
      {
        "id": 148,
        "VendorID": 294,
        "LivestockID": 11
      },
      {
        "id": 149,
        "VendorID": 295,
        "LivestockID": 11
      },
      {
        "id": 150,
        "VendorID": 297,
        "LivestockID": 11
      },
      {
        "id": 151,
        "VendorID": 298,
        "LivestockID": 39
      },
      {
        "id": 152,
        "VendorID": 302,
        "LivestockID": 15
      },
      {
        "id": 153,
        "VendorID": 302,
        "LivestockID": 17
      },
      {
        "id": 154,
        "VendorID": 302,
        "LivestockID": 23
      },
      {
        "id": 155,
        "VendorID": 303,
        "LivestockID": 11
      },
      {
        "id": 156,
        "VendorID": 305,
        "LivestockID": 11
      },
      {
        "id": 157,
        "VendorID": 306,
        "LivestockID": 39
      },
      {
        "id": 158,
        "VendorID": 309,
        "LivestockID": 11
      },
      {
        "id": 159,
        "VendorID": 311,
        "LivestockID": 11
      },
      {
        "id": 160,
        "VendorID": 314,
        "LivestockID": 11
      },
      {
        "id": 161,
        "VendorID": 319,
        "LivestockID": 11
      },
      {
        "id": 162,
        "VendorID": 322,
        "LivestockID": 11
      },
      {
        "id": 163,
        "VendorID": 327,
        "LivestockID": 11
      },
      {
        "id": 164,
        "VendorID": 328,
        "LivestockID": 16
      },
      {
        "id": 165,
        "VendorID": 328,
        "LivestockID": 17
      },
      {
        "id": 166,
        "VendorID": 328,
        "LivestockID": 23
      },
      {
        "id": 167,
        "VendorID": 330,
        "LivestockID": 11
      },
      {
        "id": 168,
        "VendorID": 333,
        "LivestockID": 11
      },
      {
        "id": 169,
        "VendorID": 337,
        "LivestockID": 39
      },
      {
        "id": 170,
        "VendorID": 347,
        "LivestockID": 11
      },
      {
        "id": 171,
        "VendorID": 351,
        "LivestockID": 11
      },
      {
        "id": 172,
        "VendorID": 358,
        "LivestockID": 11
      },
      {
        "id": 173,
        "VendorID": 369,
        "LivestockID": 11
      },
      {
        "id": 174,
        "VendorID": 370,
        "LivestockID": 11
      },
      {
        "id": 175,
        "VendorID": 371,
        "LivestockID": 11
      },
      {
        "id": 176,
        "VendorID": 372,
        "LivestockID": 12
      },
      {
        "id": 177,
        "VendorID": 376,
        "LivestockID": 39
      },
      {
        "id": 178,
        "VendorID": 380,
        "LivestockID": 11
      },
      {
        "id": 179,
        "VendorID": 384,
        "LivestockID": 11
      },
      {
        "id": 180,
        "VendorID": 387,
        "LivestockID": 50
      },
      {
        "id": 181,
        "VendorID": 402,
        "LivestockID": 11
      },
      {
        "id": 182,
        "VendorID": 403,
        "LivestockID": 11
      },
      {
        "id": 183,
        "VendorID": 404,
        "LivestockID": 15
      },
      {
        "id": 184,
        "VendorID": 404,
        "LivestockID": 16
      },
      {
        "id": 185,
        "VendorID": 404,
        "LivestockID": 23
      },
      {
        "id": 186,
        "VendorID": 405,
        "LivestockID": 11
      },
      {
        "id": 187,
        "VendorID": 411,
        "LivestockID": 11
      },
      {
        "id": 188,
        "VendorID": 412,
        "LivestockID": 11
      },
      {
        "id": 189,
        "VendorID": 422,
        "LivestockID": 11
      },
      {
        "id": 190,
        "VendorID": 427,
        "LivestockID": 11
      },
      {
        "id": 191,
        "VendorID": 428,
        "LivestockID": 15
      },
      {
        "id": 192,
        "VendorID": 428,
        "LivestockID": 23
      },
      {
        "id": 193,
        "VendorID": 429,
        "LivestockID": 11
      },
      {
        "id": 194,
        "VendorID": 431,
        "LivestockID": 11
      },
      {
        "id": 195,
        "VendorID": 432,
        "LivestockID": 11
      },
      {
        "id": 196,
        "VendorID": 436,
        "LivestockID": 57
      },
      {
        "id": 197,
        "VendorID": 439,
        "LivestockID": 11
      },
      {
        "id": 198,
        "VendorID": 445,
        "LivestockID": 37
      },
      {
        "id": 199,
        "VendorID": 452,
        "LivestockID": 11
      },
      {
        "id": 200,
        "VendorID": 453,
        "LivestockID": 55
      },
      {
        "id": 201,
        "VendorID": 453,
        "LivestockID": 4
      },
      {
        "id": 202,
        "VendorID": 457,
        "LivestockID": 11
      },
      {
        "id": 203,
        "VendorID": 464,
        "LivestockID": 1
      },
      {
        "id": 204,
        "VendorID": 464,
        "LivestockID": 15
      },
      {
        "id": 205,
        "VendorID": 464,
        "LivestockID": 16
      },
      {
        "id": 206,
        "VendorID": 464,
        "LivestockID": 17
      },
      {
        "id": 207,
        "VendorID": 464,
        "LivestockID": 18
      },
      {
        "id": 208,
        "VendorID": 464,
        "LivestockID": 19
      },
      {
        "id": 209,
        "VendorID": 464,
        "LivestockID": 23
      },
      {
        "id": 210,
        "VendorID": 466,
        "LivestockID": 11
      },
      {
        "id": 211,
        "VendorID": 469,
        "LivestockID": 11
      },
      {
        "id": 212,
        "VendorID": 475,
        "LivestockID": 11
      },
      {
        "id": 213,
        "VendorID": 476,
        "LivestockID": 11
      },
      {
        "id": 214,
        "VendorID": 477,
        "LivestockID": 11
      },
      {
        "id": 215,
        "VendorID": 482,
        "LivestockID": 40
      },
      {
        "id": 216,
        "VendorID": 482,
        "LivestockID": 46
      },
      {
        "id": 217,
        "VendorID": 482,
        "LivestockID": 40
      },
      {
        "id": 218,
        "VendorID": 482,
        "LivestockID": 46
      },
      {
        "id": 219,
        "VendorID": 485,
        "LivestockID": 57
      },
      {
        "id": 220,
        "VendorID": 495,
        "LivestockID": 11
      },
      {
        "id": 221,
        "VendorID": 496,
        "LivestockID": 32
      },
      {
        "id": 222,
        "VendorID": 496,
        "LivestockID": 53
      },
      {
        "id": 223,
        "VendorID": 496,
        "LivestockID": 7
      },
      {
        "id": 224,
        "VendorID": 496,
        "LivestockID": 54
      },
      {
        "id": 225,
        "VendorID": 496,
        "LivestockID": 24
      },
      {
        "id": 226,
        "VendorID": 496,
        "LivestockID": 28
      },
      {
        "id": 227,
        "VendorID": 496,
        "LivestockID": 41
      },
      {
        "id": 228,
        "VendorID": 496,
        "LivestockID": 25
      },
      {
        "id": 229,
        "VendorID": 496,
        "LivestockID": 21
      },
      {
        "id": 230,
        "VendorID": 496,
        "LivestockID": 47
      },
      {
        "id": 231,
        "VendorID": 496,
        "LivestockID": 22
      },
      {
        "id": 232,
        "VendorID": 496,
        "LivestockID": 43
      },
      {
        "id": 233,
        "VendorID": 501,
        "LivestockID": 11
      },
      {
        "id": 234,
        "VendorID": 507,
        "LivestockID": 11
      },
      {
        "id": 235,
        "VendorID": 508,
        "LivestockID": 11
      },
      {
        "id": 236,
        "VendorID": 517,
        "LivestockID": 11
      },
      {
        "id": 237,
        "VendorID": 526,
        "LivestockID": 50
      },
      {
        "id": 238,
        "VendorID": 532,
        "LivestockID": 39
      },
      {
        "id": 239,
        "VendorID": 537,
        "LivestockID": 11
      },
      {
        "id": 240,
        "VendorID": 538,
        "LivestockID": 11
      },
      {
        "id": 241,
        "VendorID": 549,
        "LivestockID": 11
      },
      {
        "id": 242,
        "VendorID": 550,
        "LivestockID": 11
      },
      {
        "id": 243,
        "VendorID": 552,
        "LivestockID": 11
      },
      {
        "id": 244,
        "VendorID": 555,
        "LivestockID": 11
      },
      {
        "id": 245,
        "VendorID": 563,
        "LivestockID": 11
      },
      {
        "id": 246,
        "VendorID": 566,
        "LivestockID": 11
      },
      {
        "id": 247,
        "VendorID": 567,
        "LivestockID": 13
      },
      {
        "id": 248,
        "VendorID": 567,
        "LivestockID": 19
      },
      {
        "id": 249,
        "VendorID": 567,
        "LivestockID": 20
      },
      {
        "id": 250,
        "VendorID": 567,
        "LivestockID": 49
      },
      {
        "id": 251,
        "VendorID": 567,
        "LivestockID": 56
      },
      {
        "id": 252,
        "VendorID": 570,
        "LivestockID": 26
      },
      {
        "id": 253,
        "VendorID": 570,
        "LivestockID": 42
      },
      {
        "id": 254,
        "VendorID": 570,
        "LivestockID": 48
      },
      {
        "id": 255,
        "VendorID": 576,
        "LivestockID": 11
      },
      {
        "id": 256,
        "VendorID": 581,
        "LivestockID": 11
      },
      {
        "id": 257,
        "VendorID": 582,
        "LivestockID": 11
      },
      {
        "id": 258,
        "VendorID": 590,
        "LivestockID": 11
      },
      {
        "id": 259,
        "VendorID": 607,
        "LivestockID": 11
      },
      {
        "id": 260,
        "VendorID": 614,
        "LivestockID": 11
      },
      {
        "id": 261,
        "VendorID": 616,
        "LivestockID": 11
      },
      {
        "id": 262,
        "VendorID": 617,
        "LivestockID": 11
      },
      {
        "id": 263,
        "VendorID": 620,
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
