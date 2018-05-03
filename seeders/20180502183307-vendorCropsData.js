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
    return queryInterface.bulkInsert("vendorCrops", [
      {
        "id": 1,
        "VendorID": 1,
        "CropID": 282
      },
      {
        "id": 2,
        "VendorID": 1,
        "CropID": 304
      },
      {
        "id": 3,
        "VendorID": 1,
        "CropID": 310
      },
      {
        "id": 4,
        "VendorID": 2,
        "CropID": 257
      },
      {
        "id": 5,
        "VendorID": 2,
        "CropID": 282
      },
      {
        "id": 6,
        "VendorID": 2,
        "CropID": 310
      },
      {
        "id": 7,
        "VendorID": 3,
        "CropID": 304
      },
      {
        "id": 8,
        "VendorID": 3,
        "CropID": 179
      },
      {
        "id": 9,
        "VendorID": 3,
        "CropID": 169
      },
      {
        "id": 10,
        "VendorID": 5,
        "CropID": 282
      },
      {
        "id": 11,
        "VendorID": 5,
        "CropID": 310
      },
      {
        "id": 12,
        "VendorID": 6,
        "CropID": 51
      },
      {
        "id": 13,
        "VendorID": 6,
        "CropID": 125
      },
      {
        "id": 14,
        "VendorID": 7,
        "CropID": 23
      },
      {
        "id": 15,
        "VendorID": 7,
        "CropID": 26
      },
      {
        "id": 16,
        "VendorID": 7,
        "CropID": 31
      },
      {
        "id": 17,
        "VendorID": 7,
        "CropID": 41
      },
      {
        "id": 18,
        "VendorID": 7,
        "CropID": 44
      },
      {
        "id": 19,
        "VendorID": 7,
        "CropID": 153
      },
      {
        "id": 20,
        "VendorID": 7,
        "CropID": 182
      },
      {
        "id": 21,
        "VendorID": 7,
        "CropID": 241
      },
      {
        "id": 22,
        "VendorID": 7,
        "CropID": 253
      },
      {
        "id": 23,
        "VendorID": 7,
        "CropID": 46
      },
      {
        "id": 24,
        "VendorID": 7,
        "CropID": 52
      },
      {
        "id": 25,
        "VendorID": 7,
        "CropID": 58
      },
      {
        "id": 26,
        "VendorID": 7,
        "CropID": 61
      },
      {
        "id": 27,
        "VendorID": 7,
        "CropID": 63
      },
      {
        "id": 28,
        "VendorID": 7,
        "CropID": 66
      },
      {
        "id": 29,
        "VendorID": 7,
        "CropID": 71
      },
      {
        "id": 30,
        "VendorID": 7,
        "CropID": 78
      },
      {
        "id": 31,
        "VendorID": 7,
        "CropID": 85
      },
      {
        "id": 32,
        "VendorID": 7,
        "CropID": 94
      },
      {
        "id": 33,
        "VendorID": 7,
        "CropID": 99
      },
      {
        "id": 34,
        "VendorID": 7,
        "CropID": 103
      },
      {
        "id": 35,
        "VendorID": 7,
        "CropID": 114
      },
      {
        "id": 36,
        "VendorID": 7,
        "CropID": 151
      },
      {
        "id": 37,
        "VendorID": 7,
        "CropID": 157
      },
      {
        "id": 38,
        "VendorID": 7,
        "CropID": 161
      },
      {
        "id": 39,
        "VendorID": 7,
        "CropID": 168
      },
      {
        "id": 40,
        "VendorID": 7,
        "CropID": 189
      },
      {
        "id": 41,
        "VendorID": 7,
        "CropID": 195
      },
      {
        "id": 42,
        "VendorID": 7,
        "CropID": 204
      },
      {
        "id": 43,
        "VendorID": 7,
        "CropID": 212
      },
      {
        "id": 44,
        "VendorID": 7,
        "CropID": 222
      },
      {
        "id": 45,
        "VendorID": 7,
        "CropID": 228
      },
      {
        "id": 46,
        "VendorID": 7,
        "CropID": 259
      },
      {
        "id": 47,
        "VendorID": 7,
        "CropID": 260
      },
      {
        "id": 48,
        "VendorID": 7,
        "CropID": 278
      },
      {
        "id": 49,
        "VendorID": 7,
        "CropID": 288
      },
      {
        "id": 50,
        "VendorID": 7,
        "CropID": 300
      },
      {
        "id": 51,
        "VendorID": 10,
        "CropID": 283
      },
      {
        "id": 52,
        "VendorID": 10,
        "CropID": 310
      },
      {
        "id": 53,
        "VendorID": 14,
        "CropID": 224
      },
      {
        "id": 54,
        "VendorID": 14,
        "CropID": 245
      },
      {
        "id": 55,
        "VendorID": 14,
        "CropID": 304
      },
      {
        "id": 56,
        "VendorID": 20,
        "CropID": 237
      },
      {
        "id": 57,
        "VendorID": 20,
        "CropID": 282
      },
      {
        "id": 58,
        "VendorID": 22,
        "CropID": 78
      },
      {
        "id": 59,
        "VendorID": 22,
        "CropID": 257
      },
      {
        "id": 60,
        "VendorID": 22,
        "CropID": 310
      },
      {
        "id": 61,
        "VendorID": 32,
        "CropID": 278
      },
      {
        "id": 62,
        "VendorID": 32,
        "CropID": 257
      },
      {
        "id": 63,
        "VendorID": 32,
        "CropID": 310
      },
      {
        "id": 64,
        "VendorID": 32,
        "CropID": 276
      },
      {
        "id": 65,
        "VendorID": 34,
        "CropID": 139
      },
      {
        "id": 66,
        "VendorID": 34,
        "CropID": 282
      },
      {
        "id": 67,
        "VendorID": 35,
        "CropID": 52
      },
      {
        "id": 68,
        "VendorID": 35,
        "CropID": 151
      },
      {
        "id": 69,
        "VendorID": 35,
        "CropID": 161
      },
      {
        "id": 70,
        "VendorID": 35,
        "CropID": 212
      },
      {
        "id": 71,
        "VendorID": 35,
        "CropID": 260
      },
      {
        "id": 72,
        "VendorID": 35,
        "CropID": 288
      },
      {
        "id": 73,
        "VendorID": 35,
        "CropID": 46
      },
      {
        "id": 74,
        "VendorID": 35,
        "CropID": 61
      },
      {
        "id": 75,
        "VendorID": 38,
        "CropID": 278
      },
      {
        "id": 76,
        "VendorID": 38,
        "CropID": 257
      },
      {
        "id": 77,
        "VendorID": 38,
        "CropID": 282
      },
      {
        "id": 78,
        "VendorID": 38,
        "CropID": 310
      },
      {
        "id": 79,
        "VendorID": 38,
        "CropID": 213
      },
      {
        "id": 80,
        "VendorID": 40,
        "CropID": 261
      },
      {
        "id": 81,
        "VendorID": 40,
        "CropID": 264
      },
      {
        "id": 82,
        "VendorID": 40,
        "CropID": 320
      },
      {
        "id": 83,
        "VendorID": 42,
        "CropID": 257
      },
      {
        "id": 84,
        "VendorID": 42,
        "CropID": 310
      },
      {
        "id": 85,
        "VendorID": 44,
        "CropID": 257
      },
      {
        "id": 86,
        "VendorID": 44,
        "CropID": 278
      },
      {
        "id": 87,
        "VendorID": 44,
        "CropID": 282
      },
      {
        "id": 88,
        "VendorID": 48,
        "CropID": 191
      },
      {
        "id": 89,
        "VendorID": 48,
        "CropID": 232
      },
      {
        "id": 90,
        "VendorID": 48,
        "CropID": 312
      },
      {
        "id": 91,
        "VendorID": 48,
        "CropID": 225
      },
      {
        "id": 92,
        "VendorID": 48,
        "CropID": 2
      },
      {
        "id": 93,
        "VendorID": 48,
        "CropID": 300
      },
      {
        "id": 94,
        "VendorID": 48,
        "CropID": 227
      },
      {
        "id": 95,
        "VendorID": 48,
        "CropID": 151
      },
      {
        "id": 96,
        "VendorID": 48,
        "CropID": 66
      },
      {
        "id": 97,
        "VendorID": 48,
        "CropID": 195
      },
      {
        "id": 98,
        "VendorID": 48,
        "CropID": 71
      },
      {
        "id": 99,
        "VendorID": 48,
        "CropID": 31
      },
      {
        "id": 100,
        "VendorID": 48,
        "CropID": 52
      },
      {
        "id": 101,
        "VendorID": 48,
        "CropID": 130
      },
      {
        "id": 102,
        "VendorID": 48,
        "CropID": 85
      },
      {
        "id": 103,
        "VendorID": 48,
        "CropID": 270
      },
      {
        "id": 104,
        "VendorID": 48,
        "CropID": 288
      },
      {
        "id": 105,
        "VendorID": 48,
        "CropID": 75
      },
      {
        "id": 106,
        "VendorID": 49,
        "CropID": 103
      },
      {
        "id": 107,
        "VendorID": 49,
        "CropID": 232
      },
      {
        "id": 108,
        "VendorID": 49,
        "CropID": 225
      },
      {
        "id": 109,
        "VendorID": 49,
        "CropID": 300
      },
      {
        "id": 110,
        "VendorID": 49,
        "CropID": 227
      },
      {
        "id": 111,
        "VendorID": 49,
        "CropID": 195
      },
      {
        "id": 112,
        "VendorID": 49,
        "CropID": 31
      },
      {
        "id": 113,
        "VendorID": 49,
        "CropID": 93
      },
      {
        "id": 114,
        "VendorID": 49,
        "CropID": 41
      },
      {
        "id": 115,
        "VendorID": 49,
        "CropID": 46
      },
      {
        "id": 116,
        "VendorID": 49,
        "CropID": 244
      },
      {
        "id": 117,
        "VendorID": 49,
        "CropID": 58
      },
      {
        "id": 118,
        "VendorID": 49,
        "CropID": 47
      },
      {
        "id": 119,
        "VendorID": 49,
        "CropID": 274
      },
      {
        "id": 120,
        "VendorID": 49,
        "CropID": 242
      },
      {
        "id": 121,
        "VendorID": 53,
        "CropID": 257
      },
      {
        "id": 122,
        "VendorID": 53,
        "CropID": 282
      },
      {
        "id": 123,
        "VendorID": 53,
        "CropID": 310
      },
      {
        "id": 124,
        "VendorID": 58,
        "CropID": 282
      },
      {
        "id": 125,
        "VendorID": 58,
        "CropID": 295
      },
      {
        "id": 126,
        "VendorID": 61,
        "CropID": 278
      },
      {
        "id": 127,
        "VendorID": 61,
        "CropID": 257
      },
      {
        "id": 128,
        "VendorID": 62,
        "CropID": 107
      },
      {
        "id": 129,
        "VendorID": 62,
        "CropID": 113
      },
      {
        "id": 130,
        "VendorID": 62,
        "CropID": 139
      },
      {
        "id": 131,
        "VendorID": 62,
        "CropID": 291
      },
      {
        "id": 132,
        "VendorID": 67,
        "CropID": 39
      },
      {
        "id": 133,
        "VendorID": 67,
        "CropID": 19
      },
      {
        "id": 134,
        "VendorID": 73,
        "CropID": 278
      },
      {
        "id": 135,
        "VendorID": 73,
        "CropID": 257
      },
      {
        "id": 136,
        "VendorID": 73,
        "CropID": 282
      },
      {
        "id": 137,
        "VendorID": 73,
        "CropID": 310
      },
      {
        "id": 138,
        "VendorID": 74,
        "CropID": 257
      },
      {
        "id": 139,
        "VendorID": 74,
        "CropID": 310
      },
      {
        "id": 140,
        "VendorID": 77,
        "CropID": 85
      },
      {
        "id": 141,
        "VendorID": 77,
        "CropID": 257
      },
      {
        "id": 142,
        "VendorID": 77,
        "CropID": 282
      },
      {
        "id": 143,
        "VendorID": 77,
        "CropID": 310
      },
      {
        "id": 144,
        "VendorID": 78,
        "CropID": 282
      },
      {
        "id": 145,
        "VendorID": 78,
        "CropID": 304
      },
      {
        "id": 146,
        "VendorID": 80,
        "CropID": 22
      },
      {
        "id": 147,
        "VendorID": 80,
        "CropID": 78
      },
      {
        "id": 148,
        "VendorID": 80,
        "CropID": 186
      },
      {
        "id": 149,
        "VendorID": 80,
        "CropID": 257
      },
      {
        "id": 150,
        "VendorID": 80,
        "CropID": 282
      },
      {
        "id": 151,
        "VendorID": 86,
        "CropID": 31
      },
      {
        "id": 152,
        "VendorID": 86,
        "CropID": 236
      },
      {
        "id": 153,
        "VendorID": 86,
        "CropID": 278
      },
      {
        "id": 154,
        "VendorID": 86,
        "CropID": 300
      },
      {
        "id": 155,
        "VendorID": 86,
        "CropID": 74
      },
      {
        "id": 156,
        "VendorID": 86,
        "CropID": 151
      },
      {
        "id": 157,
        "VendorID": 86,
        "CropID": 225
      },
      {
        "id": 158,
        "VendorID": 86,
        "CropID": 261
      },
      {
        "id": 159,
        "VendorID": 86,
        "CropID": 278
      },
      {
        "id": 160,
        "VendorID": 86,
        "CropID": 310
      },
      {
        "id": 161,
        "VendorID": 86,
        "CropID": 276
      },
      {
        "id": 162,
        "VendorID": 142,
        "CropID": 12
      },
      {
        "id": 163,
        "VendorID": 142,
        "CropID": 39
      },
      {
        "id": 164,
        "VendorID": 142,
        "CropID": 89
      },
      {
        "id": 165,
        "VendorID": 142,
        "CropID": 100
      },
      {
        "id": 166,
        "VendorID": 142,
        "CropID": 126
      },
      {
        "id": 167,
        "VendorID": 146,
        "CropID": 107
      },
      {
        "id": 168,
        "VendorID": 146,
        "CropID": 111
      },
      {
        "id": 169,
        "VendorID": 146,
        "CropID": 139
      },
      {
        "id": 170,
        "VendorID": 146,
        "CropID": 304
      },
      {
        "id": 171,
        "VendorID": 149,
        "CropID": 257
      },
      {
        "id": 172,
        "VendorID": 149,
        "CropID": 282
      },
      {
        "id": 173,
        "VendorID": 149,
        "CropID": 310
      },
      {
        "id": 174,
        "VendorID": 151,
        "CropID": 278
      },
      {
        "id": 175,
        "VendorID": 151,
        "CropID": 85
      },
      {
        "id": 176,
        "VendorID": 151,
        "CropID": 288
      },
      {
        "id": 177,
        "VendorID": 151,
        "CropID": 56
      },
      {
        "id": 178,
        "VendorID": 151,
        "CropID": 309
      },
      {
        "id": 179,
        "VendorID": 151,
        "CropID": 257
      },
      {
        "id": 180,
        "VendorID": 151,
        "CropID": 282
      },
      {
        "id": 181,
        "VendorID": 152,
        "CropID": 139
      },
      {
        "id": 182,
        "VendorID": 152,
        "CropID": 224
      },
      {
        "id": 183,
        "VendorID": 152,
        "CropID": 304
      },
      {
        "id": 184,
        "VendorID": 153,
        "CropID": 107
      },
      {
        "id": 185,
        "VendorID": 153,
        "CropID": 123
      },
      {
        "id": 186,
        "VendorID": 153,
        "CropID": 139
      },
      {
        "id": 187,
        "VendorID": 153,
        "CropID": 224
      },
      {
        "id": 188,
        "VendorID": 153,
        "CropID": 304
      },
      {
        "id": 189,
        "VendorID": 154,
        "CropID": 282
      },
      {
        "id": 190,
        "VendorID": 154,
        "CropID": 310
      },
      {
        "id": 191,
        "VendorID": 156,
        "CropID": 31
      },
      {
        "id": 192,
        "VendorID": 156,
        "CropID": 58
      },
      {
        "id": 193,
        "VendorID": 156,
        "CropID": 114
      },
      {
        "id": 194,
        "VendorID": 156,
        "CropID": 197
      },
      {
        "id": 195,
        "VendorID": 156,
        "CropID": 222
      },
      {
        "id": 196,
        "VendorID": 156,
        "CropID": 228
      },
      {
        "id": 197,
        "VendorID": 156,
        "CropID": 263
      },
      {
        "id": 198,
        "VendorID": 158,
        "CropID": 78
      },
      {
        "id": 199,
        "VendorID": 158,
        "CropID": 256
      },
      {
        "id": 200,
        "VendorID": 158,
        "CropID": 310
      },
      {
        "id": 201,
        "VendorID": 164,
        "CropID": 78
      },
      {
        "id": 202,
        "VendorID": 164,
        "CropID": 257
      },
      {
        "id": 203,
        "VendorID": 164,
        "CropID": 282
      },
      {
        "id": 204,
        "VendorID": 166,
        "CropID": 282
      },
      {
        "id": 205,
        "VendorID": 166,
        "CropID": 310
      },
      {
        "id": 206,
        "VendorID": 169,
        "CropID": 31
      },
      {
        "id": 207,
        "VendorID": 169,
        "CropID": 58
      },
      {
        "id": 208,
        "VendorID": 169,
        "CropID": 189
      },
      {
        "id": 209,
        "VendorID": 169,
        "CropID": 223
      },
      {
        "id": 210,
        "VendorID": 169,
        "CropID": 228
      },
      {
        "id": 211,
        "VendorID": 169,
        "CropID": 236
      },
      {
        "id": 212,
        "VendorID": 169,
        "CropID": 278
      },
      {
        "id": 213,
        "VendorID": 169,
        "CropID": 300
      },
      {
        "id": 214,
        "VendorID": 169,
        "CropID": 27
      },
      {
        "id": 215,
        "VendorID": 169,
        "CropID": 251
      },
      {
        "id": 216,
        "VendorID": 169,
        "CropID": 78
      },
      {
        "id": 217,
        "VendorID": 169,
        "CropID": 206
      },
      {
        "id": 218,
        "VendorID": 169,
        "CropID": 16
      },
      {
        "id": 219,
        "VendorID": 169,
        "CropID": 52
      },
      {
        "id": 220,
        "VendorID": 169,
        "CropID": 74
      },
      {
        "id": 221,
        "VendorID": 169,
        "CropID": 151
      },
      {
        "id": 222,
        "VendorID": 169,
        "CropID": 161
      },
      {
        "id": 223,
        "VendorID": 169,
        "CropID": 23
      },
      {
        "id": 224,
        "VendorID": 169,
        "CropID": 85
      },
      {
        "id": 225,
        "VendorID": 169,
        "CropID": 99
      },
      {
        "id": 226,
        "VendorID": 169,
        "CropID": 260
      },
      {
        "id": 227,
        "VendorID": 169,
        "CropID": 267
      },
      {
        "id": 228,
        "VendorID": 169,
        "CropID": 46
      },
      {
        "id": 229,
        "VendorID": 169,
        "CropID": 79
      },
      {
        "id": 230,
        "VendorID": 169,
        "CropID": 180
      },
      {
        "id": 231,
        "VendorID": 169,
        "CropID": 237
      },
      {
        "id": 232,
        "VendorID": 169,
        "CropID": 257
      },
      {
        "id": 233,
        "VendorID": 170,
        "CropID": 78
      },
      {
        "id": 234,
        "VendorID": 170,
        "CropID": 81
      },
      {
        "id": 235,
        "VendorID": 177,
        "CropID": 257
      },
      {
        "id": 236,
        "VendorID": 177,
        "CropID": 282
      },
      {
        "id": 237,
        "VendorID": 177,
        "CropID": 310
      },
      {
        "id": 238,
        "VendorID": 187,
        "CropID": 278
      },
      {
        "id": 239,
        "VendorID": 187,
        "CropID": 282
      },
      {
        "id": 240,
        "VendorID": 189,
        "CropID": 278
      },
      {
        "id": 241,
        "VendorID": 189,
        "CropID": 85
      },
      {
        "id": 242,
        "VendorID": 189,
        "CropID": 282
      },
      {
        "id": 243,
        "VendorID": 195,
        "CropID": 7
      },
      {
        "id": 244,
        "VendorID": 195,
        "CropID": 16
      },
      {
        "id": 245,
        "VendorID": 195,
        "CropID": 19
      },
      {
        "id": 246,
        "VendorID": 195,
        "CropID": 26
      },
      {
        "id": 247,
        "VendorID": 195,
        "CropID": 31
      },
      {
        "id": 248,
        "VendorID": 195,
        "CropID": 39
      },
      {
        "id": 249,
        "VendorID": 195,
        "CropID": 41
      },
      {
        "id": 250,
        "VendorID": 195,
        "CropID": 46
      },
      {
        "id": 251,
        "VendorID": 195,
        "CropID": 47
      },
      {
        "id": 252,
        "VendorID": 195,
        "CropID": 52
      },
      {
        "id": 253,
        "VendorID": 195,
        "CropID": 58
      },
      {
        "id": 254,
        "VendorID": 195,
        "CropID": 61
      },
      {
        "id": 255,
        "VendorID": 195,
        "CropID": 71
      },
      {
        "id": 256,
        "VendorID": 195,
        "CropID": 72
      },
      {
        "id": 257,
        "VendorID": 195,
        "CropID": 88
      },
      {
        "id": 258,
        "VendorID": 195,
        "CropID": 97
      },
      {
        "id": 259,
        "VendorID": 195,
        "CropID": 98
      },
      {
        "id": 260,
        "VendorID": 195,
        "CropID": 103
      },
      {
        "id": 261,
        "VendorID": 195,
        "CropID": 114
      },
      {
        "id": 262,
        "VendorID": 195,
        "CropID": 135
      },
      {
        "id": 263,
        "VendorID": 195,
        "CropID": 139
      },
      {
        "id": 264,
        "VendorID": 195,
        "CropID": 151
      },
      {
        "id": 265,
        "VendorID": 195,
        "CropID": 153
      },
      {
        "id": 266,
        "VendorID": 195,
        "CropID": 156
      },
      {
        "id": 267,
        "VendorID": 195,
        "CropID": 162
      },
      {
        "id": 268,
        "VendorID": 195,
        "CropID": 168
      },
      {
        "id": 269,
        "VendorID": 195,
        "CropID": 187
      },
      {
        "id": 270,
        "VendorID": 195,
        "CropID": 189
      },
      {
        "id": 271,
        "VendorID": 195,
        "CropID": 195
      },
      {
        "id": 272,
        "VendorID": 195,
        "CropID": 222
      },
      {
        "id": 273,
        "VendorID": 195,
        "CropID": 228
      },
      {
        "id": 274,
        "VendorID": 195,
        "CropID": 237
      },
      {
        "id": 275,
        "VendorID": 195,
        "CropID": 259
      },
      {
        "id": 276,
        "VendorID": 195,
        "CropID": 262
      },
      {
        "id": 277,
        "VendorID": 195,
        "CropID": 263
      },
      {
        "id": 278,
        "VendorID": 195,
        "CropID": 271
      },
      {
        "id": 279,
        "VendorID": 195,
        "CropID": 288
      },
      {
        "id": 280,
        "VendorID": 195,
        "CropID": 300
      },
      {
        "id": 281,
        "VendorID": 195,
        "CropID": 304
      },
      {
        "id": 282,
        "VendorID": 195,
        "CropID": 306
      },
      {
        "id": 283,
        "VendorID": 203,
        "CropID": 163
      },
      {
        "id": 284,
        "VendorID": 203,
        "CropID": 178
      },
      {
        "id": 285,
        "VendorID": 203,
        "CropID": 193
      },
      {
        "id": 286,
        "VendorID": 203,
        "CropID": 215
      },
      {
        "id": 287,
        "VendorID": 203,
        "CropID": 249
      },
      {
        "id": 288,
        "VendorID": 204,
        "CropID": 11
      },
      {
        "id": 289,
        "VendorID": 204,
        "CropID": 14
      },
      {
        "id": 290,
        "VendorID": 204,
        "CropID": 23
      },
      {
        "id": 291,
        "VendorID": 204,
        "CropID": 36
      },
      {
        "id": 292,
        "VendorID": 204,
        "CropID": 40
      },
      {
        "id": 293,
        "VendorID": 204,
        "CropID": 50
      },
      {
        "id": 294,
        "VendorID": 204,
        "CropID": 54
      },
      {
        "id": 295,
        "VendorID": 204,
        "CropID": 54
      },
      {
        "id": 296,
        "VendorID": 204,
        "CropID": 67
      },
      {
        "id": 297,
        "VendorID": 204,
        "CropID": 68
      },
      {
        "id": 298,
        "VendorID": 204,
        "CropID": 89
      },
      {
        "id": 299,
        "VendorID": 204,
        "CropID": 116
      },
      {
        "id": 300,
        "VendorID": 204,
        "CropID": 117
      },
      {
        "id": 301,
        "VendorID": 204,
        "CropID": 121
      },
      {
        "id": 302,
        "VendorID": 204,
        "CropID": 131
      },
      {
        "id": 303,
        "VendorID": 204,
        "CropID": 134
      },
      {
        "id": 304,
        "VendorID": 204,
        "CropID": 159
      },
      {
        "id": 305,
        "VendorID": 204,
        "CropID": 173
      },
      {
        "id": 306,
        "VendorID": 204,
        "CropID": 175
      },
      {
        "id": 307,
        "VendorID": 204,
        "CropID": 185
      },
      {
        "id": 308,
        "VendorID": 204,
        "CropID": 195
      },
      {
        "id": 309,
        "VendorID": 204,
        "CropID": 217
      },
      {
        "id": 310,
        "VendorID": 204,
        "CropID": 230
      },
      {
        "id": 311,
        "VendorID": 204,
        "CropID": 233
      },
      {
        "id": 312,
        "VendorID": 204,
        "CropID": 234
      },
      {
        "id": 313,
        "VendorID": 204,
        "CropID": 298
      },
      {
        "id": 314,
        "VendorID": 204,
        "CropID": 311
      },
      {
        "id": 315,
        "VendorID": 210,
        "CropID": 278
      },
      {
        "id": 316,
        "VendorID": 210,
        "CropID": 52
      },
      {
        "id": 317,
        "VendorID": 210,
        "CropID": 78
      },
      {
        "id": 318,
        "VendorID": 213,
        "CropID": 282
      },
      {
        "id": 319,
        "VendorID": 213,
        "CropID": 310
      },
      {
        "id": 320,
        "VendorID": 216,
        "CropID": 19
      },
      {
        "id": 321,
        "VendorID": 216,
        "CropID": 26
      },
      {
        "id": 322,
        "VendorID": 216,
        "CropID": 31
      },
      {
        "id": 323,
        "VendorID": 216,
        "CropID": 45
      },
      {
        "id": 324,
        "VendorID": 216,
        "CropID": 46
      },
      {
        "id": 325,
        "VendorID": 216,
        "CropID": 52
      },
      {
        "id": 326,
        "VendorID": 216,
        "CropID": 61
      },
      {
        "id": 327,
        "VendorID": 216,
        "CropID": 66
      },
      {
        "id": 328,
        "VendorID": 216,
        "CropID": 78
      },
      {
        "id": 329,
        "VendorID": 216,
        "CropID": 102
      },
      {
        "id": 330,
        "VendorID": 216,
        "CropID": 151
      },
      {
        "id": 331,
        "VendorID": 216,
        "CropID": 153
      },
      {
        "id": 332,
        "VendorID": 216,
        "CropID": 156
      },
      {
        "id": 333,
        "VendorID": 216,
        "CropID": 187
      },
      {
        "id": 334,
        "VendorID": 216,
        "CropID": 205
      },
      {
        "id": 335,
        "VendorID": 216,
        "CropID": 212
      },
      {
        "id": 336,
        "VendorID": 216,
        "CropID": 222
      },
      {
        "id": 337,
        "VendorID": 216,
        "CropID": 228
      },
      {
        "id": 338,
        "VendorID": 216,
        "CropID": 260
      },
      {
        "id": 339,
        "VendorID": 216,
        "CropID": 262
      },
      {
        "id": 340,
        "VendorID": 216,
        "CropID": 263
      },
      {
        "id": 341,
        "VendorID": 216,
        "CropID": 278
      },
      {
        "id": 342,
        "VendorID": 216,
        "CropID": 288
      },
      {
        "id": 343,
        "VendorID": 216,
        "CropID": 291
      },
      {
        "id": 344,
        "VendorID": 217,
        "CropID": 278
      },
      {
        "id": 345,
        "VendorID": 217,
        "CropID": 257
      },
      {
        "id": 346,
        "VendorID": 217,
        "CropID": 310
      },
      {
        "id": 347,
        "VendorID": 222,
        "CropID": 12
      },
      {
        "id": 348,
        "VendorID": 222,
        "CropID": 16
      },
      {
        "id": 349,
        "VendorID": 222,
        "CropID": 19
      },
      {
        "id": 350,
        "VendorID": 222,
        "CropID": 23
      },
      {
        "id": 351,
        "VendorID": 222,
        "CropID": 26
      },
      {
        "id": 352,
        "VendorID": 222,
        "CropID": 32
      },
      {
        "id": 353,
        "VendorID": 222,
        "CropID": 33
      },
      {
        "id": 354,
        "VendorID": 222,
        "CropID": 39
      },
      {
        "id": 355,
        "VendorID": 222,
        "CropID": 47
      },
      {
        "id": 356,
        "VendorID": 222,
        "CropID": 51
      },
      {
        "id": 357,
        "VendorID": 222,
        "CropID": 52
      },
      {
        "id": 358,
        "VendorID": 222,
        "CropID": 58
      },
      {
        "id": 359,
        "VendorID": 222,
        "CropID": 61
      },
      {
        "id": 360,
        "VendorID": 222,
        "CropID": 69
      },
      {
        "id": 361,
        "VendorID": 222,
        "CropID": 94
      },
      {
        "id": 362,
        "VendorID": 222,
        "CropID": 102
      },
      {
        "id": 363,
        "VendorID": 222,
        "CropID": 103
      },
      {
        "id": 364,
        "VendorID": 222,
        "CropID": 110
      },
      {
        "id": 365,
        "VendorID": 222,
        "CropID": 115
      },
      {
        "id": 366,
        "VendorID": 222,
        "CropID": 151
      },
      {
        "id": 367,
        "VendorID": 222,
        "CropID": 157
      },
      {
        "id": 368,
        "VendorID": 222,
        "CropID": 162
      },
      {
        "id": 369,
        "VendorID": 222,
        "CropID": 181
      },
      {
        "id": 370,
        "VendorID": 222,
        "CropID": 195
      },
      {
        "id": 371,
        "VendorID": 222,
        "CropID": 205
      },
      {
        "id": 372,
        "VendorID": 222,
        "CropID": 225
      },
      {
        "id": 373,
        "VendorID": 222,
        "CropID": 228
      },
      {
        "id": 374,
        "VendorID": 222,
        "CropID": 236
      },
      {
        "id": 375,
        "VendorID": 222,
        "CropID": 262
      },
      {
        "id": 376,
        "VendorID": 222,
        "CropID": 286
      },
      {
        "id": 377,
        "VendorID": 222,
        "CropID": 289
      },
      {
        "id": 378,
        "VendorID": 222,
        "CropID": 320
      },
      {
        "id": 379,
        "VendorID": 223,
        "CropID": 282
      },
      {
        "id": 380,
        "VendorID": 223,
        "CropID": 310
      },
      {
        "id": 381,
        "VendorID": 224,
        "CropID": 12
      },
      {
        "id": 382,
        "VendorID": 224,
        "CropID": 39
      },
      {
        "id": 383,
        "VendorID": 228,
        "CropID": 111
      },
      {
        "id": 384,
        "VendorID": 228,
        "CropID": 304
      },
      {
        "id": 385,
        "VendorID": 229,
        "CropID": 19
      },
      {
        "id": 386,
        "VendorID": 229,
        "CropID": 36
      },
      {
        "id": 387,
        "VendorID": 229,
        "CropID": 40
      },
      {
        "id": 388,
        "VendorID": 229,
        "CropID": 114
      },
      {
        "id": 389,
        "VendorID": 229,
        "CropID": 132
      },
      {
        "id": 390,
        "VendorID": 229,
        "CropID": 135
      },
      {
        "id": 391,
        "VendorID": 229,
        "CropID": 177
      },
      {
        "id": 392,
        "VendorID": 229,
        "CropID": 188
      },
      {
        "id": 393,
        "VendorID": 229,
        "CropID": 200
      },
      {
        "id": 394,
        "VendorID": 229,
        "CropID": 221
      },
      {
        "id": 395,
        "VendorID": 229,
        "CropID": 230
      },
      {
        "id": 396,
        "VendorID": 229,
        "CropID": 310
      },
      {
        "id": 397,
        "VendorID": 232,
        "CropID": 282
      },
      {
        "id": 398,
        "VendorID": 232,
        "CropID": 310
      },
      {
        "id": 399,
        "VendorID": 235,
        "CropID": 17
      },
      {
        "id": 400,
        "VendorID": 235,
        "CropID": 20
      },
      {
        "id": 401,
        "VendorID": 235,
        "CropID": 23
      },
      {
        "id": 402,
        "VendorID": 235,
        "CropID": 34
      },
      {
        "id": 403,
        "VendorID": 235,
        "CropID": 38
      },
      {
        "id": 404,
        "VendorID": 235,
        "CropID": 55
      },
      {
        "id": 405,
        "VendorID": 235,
        "CropID": 95
      },
      {
        "id": 406,
        "VendorID": 235,
        "CropID": 102
      },
      {
        "id": 407,
        "VendorID": 235,
        "CropID": 105
      },
      {
        "id": 408,
        "VendorID": 235,
        "CropID": 116
      },
      {
        "id": 409,
        "VendorID": 235,
        "CropID": 121
      },
      {
        "id": 410,
        "VendorID": 235,
        "CropID": 131
      },
      {
        "id": 411,
        "VendorID": 235,
        "CropID": 133
      },
      {
        "id": 412,
        "VendorID": 235,
        "CropID": 135
      },
      {
        "id": 413,
        "VendorID": 235,
        "CropID": 138
      },
      {
        "id": 414,
        "VendorID": 235,
        "CropID": 140
      },
      {
        "id": 415,
        "VendorID": 235,
        "CropID": 159
      },
      {
        "id": 416,
        "VendorID": 235,
        "CropID": 166
      },
      {
        "id": 417,
        "VendorID": 235,
        "CropID": 185
      },
      {
        "id": 418,
        "VendorID": 235,
        "CropID": 186
      },
      {
        "id": 419,
        "VendorID": 235,
        "CropID": 186
      },
      {
        "id": 420,
        "VendorID": 235,
        "CropID": 198
      },
      {
        "id": 421,
        "VendorID": 235,
        "CropID": 211
      },
      {
        "id": 422,
        "VendorID": 235,
        "CropID": 250
      },
      {
        "id": 423,
        "VendorID": 235,
        "CropID": 302
      },
      {
        "id": 424,
        "VendorID": 237,
        "CropID": 78
      },
      {
        "id": 425,
        "VendorID": 237,
        "CropID": 237
      },
      {
        "id": 426,
        "VendorID": 237,
        "CropID": 257
      },
      {
        "id": 427,
        "VendorID": 237,
        "CropID": 282
      },
      {
        "id": 428,
        "VendorID": 237,
        "CropID": 285
      },
      {
        "id": 429,
        "VendorID": 238,
        "CropID": 278
      },
      {
        "id": 430,
        "VendorID": 238,
        "CropID": 85
      },
      {
        "id": 431,
        "VendorID": 238,
        "CropID": 282
      },
      {
        "id": 432,
        "VendorID": 239,
        "CropID": 24
      },
      {
        "id": 433,
        "VendorID": 239,
        "CropID": 49
      },
      {
        "id": 434,
        "VendorID": 239,
        "CropID": 54
      },
      {
        "id": 435,
        "VendorID": 239,
        "CropID": 76
      },
      {
        "id": 436,
        "VendorID": 239,
        "CropID": 92
      },
      {
        "id": 437,
        "VendorID": 239,
        "CropID": 95
      },
      {
        "id": 438,
        "VendorID": 239,
        "CropID": 118
      },
      {
        "id": 439,
        "VendorID": 239,
        "CropID": 147
      },
      {
        "id": 440,
        "VendorID": 239,
        "CropID": 159
      },
      {
        "id": 441,
        "VendorID": 239,
        "CropID": 172
      },
      {
        "id": 442,
        "VendorID": 239,
        "CropID": 176
      },
      {
        "id": 443,
        "VendorID": 239,
        "CropID": 211
      },
      {
        "id": 444,
        "VendorID": 239,
        "CropID": 240
      },
      {
        "id": 445,
        "VendorID": 239,
        "CropID": 316
      },
      {
        "id": 446,
        "VendorID": 239,
        "CropID": 48
      },
      {
        "id": 447,
        "VendorID": 239,
        "CropID": 186
      },
      {
        "id": 448,
        "VendorID": 239,
        "CropID": 275
      },
      {
        "id": 449,
        "VendorID": 239,
        "CropID": 174
      },
      {
        "id": 450,
        "VendorID": 239,
        "CropID": 105
      },
      {
        "id": 451,
        "VendorID": 239,
        "CropID": 216
      },
      {
        "id": 452,
        "VendorID": 239,
        "CropID": 220
      },
      {
        "id": 453,
        "VendorID": 239,
        "CropID": 258
      },
      {
        "id": 454,
        "VendorID": 239,
        "CropID": 317
      },
      {
        "id": 455,
        "VendorID": 239,
        "CropID": 207
      },
      {
        "id": 456,
        "VendorID": 242,
        "CropID": 78
      },
      {
        "id": 457,
        "VendorID": 242,
        "CropID": 237
      },
      {
        "id": 458,
        "VendorID": 242,
        "CropID": 257
      },
      {
        "id": 459,
        "VendorID": 242,
        "CropID": 282
      },
      {
        "id": 460,
        "VendorID": 242,
        "CropID": 310
      },
      {
        "id": 461,
        "VendorID": 242,
        "CropID": 285
      },
      {
        "id": 462,
        "VendorID": 244,
        "CropID": 278
      },
      {
        "id": 463,
        "VendorID": 244,
        "CropID": 257
      },
      {
        "id": 464,
        "VendorID": 244,
        "CropID": 282
      },
      {
        "id": 465,
        "VendorID": 244,
        "CropID": 276
      },
      {
        "id": 466,
        "VendorID": 249,
        "CropID": 257
      },
      {
        "id": 467,
        "VendorID": 249,
        "CropID": 282
      },
      {
        "id": 468,
        "VendorID": 249,
        "CropID": 310
      },
      {
        "id": 469,
        "VendorID": 250,
        "CropID": 4
      },
      {
        "id": 470,
        "VendorID": 250,
        "CropID": 9
      },
      {
        "id": 471,
        "VendorID": 250,
        "CropID": 10
      },
      {
        "id": 472,
        "VendorID": 250,
        "CropID": 14
      },
      {
        "id": 473,
        "VendorID": 250,
        "CropID": 20
      },
      {
        "id": 474,
        "VendorID": 250,
        "CropID": 21
      },
      {
        "id": 475,
        "VendorID": 250,
        "CropID": 23
      },
      {
        "id": 476,
        "VendorID": 250,
        "CropID": 23
      },
      {
        "id": 477,
        "VendorID": 250,
        "CropID": 37
      },
      {
        "id": 478,
        "VendorID": 250,
        "CropID": 38
      },
      {
        "id": 479,
        "VendorID": 250,
        "CropID": 42
      },
      {
        "id": 480,
        "VendorID": 250,
        "CropID": 43
      },
      {
        "id": 481,
        "VendorID": 250,
        "CropID": 48
      },
      {
        "id": 482,
        "VendorID": 250,
        "CropID": 54
      },
      {
        "id": 483,
        "VendorID": 250,
        "CropID": 55
      },
      {
        "id": 484,
        "VendorID": 250,
        "CropID": 59
      },
      {
        "id": 485,
        "VendorID": 250,
        "CropID": 60
      },
      {
        "id": 486,
        "VendorID": 250,
        "CropID": 62
      },
      {
        "id": 487,
        "VendorID": 250,
        "CropID": 65
      },
      {
        "id": 488,
        "VendorID": 250,
        "CropID": 76
      },
      {
        "id": 489,
        "VendorID": 250,
        "CropID": 77
      },
      {
        "id": 490,
        "VendorID": 250,
        "CropID": 91
      },
      {
        "id": 491,
        "VendorID": 250,
        "CropID": 92
      },
      {
        "id": 492,
        "VendorID": 250,
        "CropID": 94
      },
      {
        "id": 493,
        "VendorID": 250,
        "CropID": 95
      },
      {
        "id": 494,
        "VendorID": 250,
        "CropID": 96
      },
      {
        "id": 495,
        "VendorID": 250,
        "CropID": 101
      },
      {
        "id": 496,
        "VendorID": 250,
        "CropID": 105
      },
      {
        "id": 497,
        "VendorID": 250,
        "CropID": 117
      },
      {
        "id": 498,
        "VendorID": 250,
        "CropID": 120
      },
      {
        "id": 499,
        "VendorID": 250,
        "CropID": 128
      },
      {
        "id": 500,
        "VendorID": 250,
        "CropID": 137
      },
      {
        "id": 501,
        "VendorID": 250,
        "CropID": 142
      },
      {
        "id": 502,
        "VendorID": 250,
        "CropID": 143
      },
      {
        "id": 503,
        "VendorID": 250,
        "CropID": 144
      },
      {
        "id": 504,
        "VendorID": 250,
        "CropID": 145
      },
      {
        "id": 505,
        "VendorID": 250,
        "CropID": 146
      },
      {
        "id": 506,
        "VendorID": 250,
        "CropID": 147
      },
      {
        "id": 507,
        "VendorID": 250,
        "CropID": 149
      },
      {
        "id": 508,
        "VendorID": 250,
        "CropID": 150
      },
      {
        "id": 509,
        "VendorID": 250,
        "CropID": 155
      },
      {
        "id": 510,
        "VendorID": 250,
        "CropID": 159
      },
      {
        "id": 511,
        "VendorID": 250,
        "CropID": 165
      },
      {
        "id": 512,
        "VendorID": 250,
        "CropID": 166
      },
      {
        "id": 513,
        "VendorID": 250,
        "CropID": 170
      },
      {
        "id": 514,
        "VendorID": 250,
        "CropID": 171
      },
      {
        "id": 515,
        "VendorID": 250,
        "CropID": 174
      },
      {
        "id": 516,
        "VendorID": 250,
        "CropID": 183
      },
      {
        "id": 517,
        "VendorID": 250,
        "CropID": 185
      },
      {
        "id": 518,
        "VendorID": 250,
        "CropID": 194
      },
      {
        "id": 519,
        "VendorID": 250,
        "CropID": 198
      },
      {
        "id": 520,
        "VendorID": 250,
        "CropID": 209
      },
      {
        "id": 521,
        "VendorID": 250,
        "CropID": 226
      },
      {
        "id": 522,
        "VendorID": 250,
        "CropID": 239
      },
      {
        "id": 523,
        "VendorID": 250,
        "CropID": 248
      },
      {
        "id": 524,
        "VendorID": 250,
        "CropID": 250
      },
      {
        "id": 525,
        "VendorID": 250,
        "CropID": 265
      },
      {
        "id": 526,
        "VendorID": 250,
        "CropID": 266
      },
      {
        "id": 527,
        "VendorID": 250,
        "CropID": 272
      },
      {
        "id": 528,
        "VendorID": 250,
        "CropID": 280
      },
      {
        "id": 529,
        "VendorID": 250,
        "CropID": 282
      },
      {
        "id": 530,
        "VendorID": 250,
        "CropID": 301
      },
      {
        "id": 531,
        "VendorID": 250,
        "CropID": 302
      },
      {
        "id": 532,
        "VendorID": 250,
        "CropID": 307
      },
      {
        "id": 533,
        "VendorID": 250,
        "CropID": 314
      },
      {
        "id": 534,
        "VendorID": 250,
        "CropID": 315
      },
      {
        "id": 535,
        "VendorID": 261,
        "CropID": 107
      },
      {
        "id": 536,
        "VendorID": 261,
        "CropID": 139
      },
      {
        "id": 537,
        "VendorID": 261,
        "CropID": 304
      },
      {
        "id": 538,
        "VendorID": 262,
        "CropID": 22
      },
      {
        "id": 539,
        "VendorID": 262,
        "CropID": 78
      },
      {
        "id": 540,
        "VendorID": 262,
        "CropID": 257
      },
      {
        "id": 541,
        "VendorID": 262,
        "CropID": 282
      },
      {
        "id": 542,
        "VendorID": 262,
        "CropID": 284
      },
      {
        "id": 543,
        "VendorID": 262,
        "CropID": 310
      },
      {
        "id": 544,
        "VendorID": 266,
        "CropID": 278
      },
      {
        "id": 545,
        "VendorID": 266,
        "CropID": 260
      },
      {
        "id": 546,
        "VendorID": 272,
        "CropID": 31
      },
      {
        "id": 547,
        "VendorID": 272,
        "CropID": 58
      },
      {
        "id": 548,
        "VendorID": 272,
        "CropID": 103
      },
      {
        "id": 549,
        "VendorID": 272,
        "CropID": 114
      },
      {
        "id": 550,
        "VendorID": 272,
        "CropID": 189
      },
      {
        "id": 551,
        "VendorID": 272,
        "CropID": 222
      },
      {
        "id": 552,
        "VendorID": 272,
        "CropID": 228
      },
      {
        "id": 553,
        "VendorID": 272,
        "CropID": 278
      },
      {
        "id": 554,
        "VendorID": 272,
        "CropID": 300
      },
      {
        "id": 555,
        "VendorID": 272,
        "CropID": 26
      },
      {
        "id": 556,
        "VendorID": 272,
        "CropID": 97
      },
      {
        "id": 557,
        "VendorID": 272,
        "CropID": 129
      },
      {
        "id": 558,
        "VendorID": 272,
        "CropID": 187
      },
      {
        "id": 559,
        "VendorID": 272,
        "CropID": 204
      },
      {
        "id": 560,
        "VendorID": "#VALUE!",
        "CropID": "#VALUE!"
      },
      {
        "id": 561,
        "VendorID": 272,
        "CropID": 164
      },
      {
        "id": 562,
        "VendorID": 272,
        "CropID": 148
      },
      {
        "id": 563,
        "VendorID": 272,
        "CropID": 119
      },
      {
        "id": 564,
        "VendorID": 272,
        "CropID": 141
      },
      {
        "id": 565,
        "VendorID": 272,
        "CropID": 90
      },
      {
        "id": 566,
        "VendorID": 272,
        "CropID": 319
      },
      {
        "id": 567,
        "VendorID": 272,
        "CropID": 243
      },
      {
        "id": 568,
        "VendorID": 272,
        "CropID": 16
      },
      {
        "id": 569,
        "VendorID": 272,
        "CropID": 41
      },
      {
        "id": 570,
        "VendorID": 272,
        "CropID": 52
      },
      {
        "id": 571,
        "VendorID": 272,
        "CropID": 66
      },
      {
        "id": 572,
        "VendorID": 272,
        "CropID": 74
      },
      {
        "id": 573,
        "VendorID": 272,
        "CropID": 151
      },
      {
        "id": 574,
        "VendorID": 272,
        "CropID": 153
      },
      {
        "id": 575,
        "VendorID": 272,
        "CropID": 23
      },
      {
        "id": 576,
        "VendorID": 272,
        "CropID": 70
      },
      {
        "id": 577,
        "VendorID": 272,
        "CropID": 71
      },
      {
        "id": 578,
        "VendorID": 272,
        "CropID": 94
      },
      {
        "id": 579,
        "VendorID": 272,
        "CropID": 159
      },
      {
        "id": 580,
        "VendorID": 272,
        "CropID": 160
      },
      {
        "id": 581,
        "VendorID": 272,
        "CropID": 190
      },
      {
        "id": 582,
        "VendorID": 272,
        "CropID": 195
      },
      {
        "id": 583,
        "VendorID": 272,
        "CropID": 235
      },
      {
        "id": 584,
        "VendorID": 272,
        "CropID": 239
      },
      {
        "id": 585,
        "VendorID": 272,
        "CropID": 85
      },
      {
        "id": 586,
        "VendorID": 272,
        "CropID": 99
      },
      {
        "id": 587,
        "VendorID": 272,
        "CropID": 210
      },
      {
        "id": 588,
        "VendorID": 272,
        "CropID": 225
      },
      {
        "id": 589,
        "VendorID": 272,
        "CropID": 260
      },
      {
        "id": 590,
        "VendorID": 272,
        "CropID": 286
      },
      {
        "id": 591,
        "VendorID": 272,
        "CropID": 288
      },
      {
        "id": 592,
        "VendorID": 272,
        "CropID": 320
      },
      {
        "id": 593,
        "VendorID": 272,
        "CropID": 274
      },
      {
        "id": 594,
        "VendorID": 272,
        "CropID": 1
      },
      {
        "id": 595,
        "VendorID": 272,
        "CropID": 3
      },
      {
        "id": 596,
        "VendorID": 272,
        "CropID": 13
      },
      {
        "id": 597,
        "VendorID": 272,
        "CropID": 18
      },
      {
        "id": 598,
        "VendorID": 272,
        "CropID": 29
      },
      {
        "id": 599,
        "VendorID": 272,
        "CropID": 64
      },
      {
        "id": 600,
        "VendorID": 272,
        "CropID": 136
      },
      {
        "id": 601,
        "VendorID": 272,
        "CropID": 241
      },
      {
        "id": 602,
        "VendorID": 280,
        "CropID": 257
      },
      {
        "id": 603,
        "VendorID": 280,
        "CropID": 282
      },
      {
        "id": 604,
        "VendorID": 280,
        "CropID": 295
      },
      {
        "id": 605,
        "VendorID": 285,
        "CropID": 85
      },
      {
        "id": 606,
        "VendorID": 285,
        "CropID": 261
      },
      {
        "id": 607,
        "VendorID": 285,
        "CropID": 78
      },
      {
        "id": 608,
        "VendorID": 285,
        "CropID": 257
      },
      {
        "id": 609,
        "VendorID": 285,
        "CropID": 278
      },
      {
        "id": 610,
        "VendorID": 285,
        "CropID": 282
      },
      {
        "id": 611,
        "VendorID": 286,
        "CropID": 179
      },
      {
        "id": 612,
        "VendorID": 286,
        "CropID": 19
      },
      {
        "id": 613,
        "VendorID": 286,
        "CropID": 12
      },
      {
        "id": 614,
        "VendorID": 286,
        "CropID": 35
      },
      {
        "id": 615,
        "VendorID": 286,
        "CropID": 39
      },
      {
        "id": 616,
        "VendorID": 286,
        "CropID": 229
      },
      {
        "id": 617,
        "VendorID": 288,
        "CropID": 237
      },
      {
        "id": 618,
        "VendorID": 288,
        "CropID": 257
      },
      {
        "id": 619,
        "VendorID": 288,
        "CropID": 278
      },
      {
        "id": 620,
        "VendorID": 288,
        "CropID": 282
      },
      {
        "id": 621,
        "VendorID": 288,
        "CropID": 295
      },
      {
        "id": 622,
        "VendorID": 288,
        "CropID": 292
      },
      {
        "id": 623,
        "VendorID": 288,
        "CropID": 310
      },
      {
        "id": 624,
        "VendorID": 293,
        "CropID": 282
      },
      {
        "id": 625,
        "VendorID": 293,
        "CropID": 285
      },
      {
        "id": 626,
        "VendorID": 296,
        "CropID": 108
      },
      {
        "id": 627,
        "VendorID": 296,
        "CropID": 139
      },
      {
        "id": 628,
        "VendorID": 296,
        "CropID": 304
      },
      {
        "id": 629,
        "VendorID": 299,
        "CropID": 291
      },
      {
        "id": 630,
        "VendorID": 299,
        "CropID": 139
      },
      {
        "id": 631,
        "VendorID": 300,
        "CropID": 123
      },
      {
        "id": 632,
        "VendorID": 300,
        "CropID": 257
      },
      {
        "id": 633,
        "VendorID": 300,
        "CropID": 282
      },
      {
        "id": 634,
        "VendorID": 300,
        "CropID": 310
      },
      {
        "id": 635,
        "VendorID": 301,
        "CropID": 278
      },
      {
        "id": 636,
        "VendorID": 301,
        "CropID": 282
      },
      {
        "id": 637,
        "VendorID": 302,
        "CropID": 5
      },
      {
        "id": 638,
        "VendorID": 302,
        "CropID": 6
      },
      {
        "id": 639,
        "VendorID": 302,
        "CropID": 78
      },
      {
        "id": 640,
        "VendorID": 302,
        "CropID": 109
      },
      {
        "id": 641,
        "VendorID": 302,
        "CropID": 127
      },
      {
        "id": 642,
        "VendorID": 302,
        "CropID": 127
      },
      {
        "id": 643,
        "VendorID": 302,
        "CropID": 135
      },
      {
        "id": 644,
        "VendorID": 302,
        "CropID": 186
      },
      {
        "id": 645,
        "VendorID": 302,
        "CropID": 253
      },
      {
        "id": 646,
        "VendorID": 302,
        "CropID": 256
      },
      {
        "id": 647,
        "VendorID": 302,
        "CropID": 310
      },
      {
        "id": 648,
        "VendorID": 304,
        "CropID": 112
      },
      {
        "id": 649,
        "VendorID": 304,
        "CropID": 304
      },
      {
        "id": 650,
        "VendorID": 307,
        "CropID": 282
      },
      {
        "id": 651,
        "VendorID": 307,
        "CropID": 310
      },
      {
        "id": 652,
        "VendorID": 310,
        "CropID": 278
      },
      {
        "id": 653,
        "VendorID": 310,
        "CropID": 282
      },
      {
        "id": 654,
        "VendorID": 310,
        "CropID": 310
      },
      {
        "id": 655,
        "VendorID": 316,
        "CropID": 282
      },
      {
        "id": 656,
        "VendorID": 316,
        "CropID": 310
      },
      {
        "id": 657,
        "VendorID": 317,
        "CropID": 257
      },
      {
        "id": 658,
        "VendorID": 317,
        "CropID": 282
      },
      {
        "id": 659,
        "VendorID": 317,
        "CropID": 310
      },
      {
        "id": 660,
        "VendorID": 318,
        "CropID": 107
      },
      {
        "id": 661,
        "VendorID": 318,
        "CropID": 237
      },
      {
        "id": 662,
        "VendorID": 318,
        "CropID": 268
      },
      {
        "id": 663,
        "VendorID": 318,
        "CropID": 282
      },
      {
        "id": 664,
        "VendorID": 318,
        "CropID": 310
      },
      {
        "id": 665,
        "VendorID": 320,
        "CropID": 78
      },
      {
        "id": 666,
        "VendorID": 320,
        "CropID": 257
      },
      {
        "id": 667,
        "VendorID": 320,
        "CropID": 282
      },
      {
        "id": 668,
        "VendorID": 320,
        "CropID": 310
      },
      {
        "id": 669,
        "VendorID": 321,
        "CropID": 278
      },
      {
        "id": 670,
        "VendorID": 321,
        "CropID": 310
      },
      {
        "id": 671,
        "VendorID": 326,
        "CropID": 282
      },
      {
        "id": 672,
        "VendorID": 326,
        "CropID": 296
      },
      {
        "id": 673,
        "VendorID": 328,
        "CropID": 22
      },
      {
        "id": 674,
        "VendorID": 328,
        "CropID": 78
      },
      {
        "id": 675,
        "VendorID": 328,
        "CropID": 102
      },
      {
        "id": 676,
        "VendorID": 328,
        "CropID": 200
      },
      {
        "id": 677,
        "VendorID": 328,
        "CropID": 253
      },
      {
        "id": 678,
        "VendorID": 328,
        "CropID": 268
      },
      {
        "id": 679,
        "VendorID": 328,
        "CropID": 273
      },
      {
        "id": 680,
        "VendorID": 328,
        "CropID": 310
      },
      {
        "id": 681,
        "VendorID": 335,
        "CropID": 278
      },
      {
        "id": 682,
        "VendorID": 335,
        "CropID": 257
      },
      {
        "id": 683,
        "VendorID": 339,
        "CropID": 282
      },
      {
        "id": 684,
        "VendorID": 339,
        "CropID": 310
      },
      {
        "id": 685,
        "VendorID": 341,
        "CropID": 282
      },
      {
        "id": 686,
        "VendorID": 341,
        "CropID": 284
      },
      {
        "id": 687,
        "VendorID": 341,
        "CropID": 310
      },
      {
        "id": 688,
        "VendorID": 342,
        "CropID": 135
      },
      {
        "id": 689,
        "VendorID": 342,
        "CropID": 200
      },
      {
        "id": 690,
        "VendorID": 349,
        "CropID": 257
      },
      {
        "id": 691,
        "VendorID": 349,
        "CropID": 282
      },
      {
        "id": 692,
        "VendorID": 350,
        "CropID": 111
      },
      {
        "id": 693,
        "VendorID": 350,
        "CropID": 123
      },
      {
        "id": 694,
        "VendorID": 350,
        "CropID": 135
      },
      {
        "id": 695,
        "VendorID": 350,
        "CropID": 303
      },
      {
        "id": 696,
        "VendorID": 352,
        "CropID": 111
      },
      {
        "id": 697,
        "VendorID": 352,
        "CropID": 304
      },
      {
        "id": 698,
        "VendorID": 354,
        "CropID": 282
      },
      {
        "id": 699,
        "VendorID": 354,
        "CropID": 296
      },
      {
        "id": 700,
        "VendorID": 356,
        "CropID": 282
      },
      {
        "id": 701,
        "VendorID": 356,
        "CropID": 296
      },
      {
        "id": 702,
        "VendorID": 357,
        "CropID": 111
      },
      {
        "id": 703,
        "VendorID": 357,
        "CropID": 139
      },
      {
        "id": 704,
        "VendorID": 357,
        "CropID": 245
      },
      {
        "id": 705,
        "VendorID": 357,
        "CropID": 304
      },
      {
        "id": 706,
        "VendorID": 359,
        "CropID": 85
      },
      {
        "id": 707,
        "VendorID": 359,
        "CropID": 78
      },
      {
        "id": 708,
        "VendorID": 359,
        "CropID": 257
      },
      {
        "id": 709,
        "VendorID": 359,
        "CropID": 278
      },
      {
        "id": 710,
        "VendorID": 359,
        "CropID": 282
      },
      {
        "id": 711,
        "VendorID": 359,
        "CropID": 310
      },
      {
        "id": 712,
        "VendorID": 359,
        "CropID": 276
      },
      {
        "id": 713,
        "VendorID": 359,
        "CropID": 285
      },
      {
        "id": 714,
        "VendorID": 360,
        "CropID": 139
      },
      {
        "id": 715,
        "VendorID": 360,
        "CropID": 179
      },
      {
        "id": 716,
        "VendorID": 364,
        "CropID": 22
      },
      {
        "id": 717,
        "VendorID": 364,
        "CropID": 25
      },
      {
        "id": 718,
        "VendorID": 364,
        "CropID": 72
      },
      {
        "id": 719,
        "VendorID": 364,
        "CropID": 78
      },
      {
        "id": 720,
        "VendorID": 364,
        "CropID": 127
      },
      {
        "id": 721,
        "VendorID": 364,
        "CropID": 135
      },
      {
        "id": 722,
        "VendorID": 364,
        "CropID": 200
      },
      {
        "id": 723,
        "VendorID": 364,
        "CropID": 204
      },
      {
        "id": 724,
        "VendorID": 364,
        "CropID": 238
      },
      {
        "id": 725,
        "VendorID": 364,
        "CropID": 253
      },
      {
        "id": 726,
        "VendorID": 364,
        "CropID": 256
      },
      {
        "id": 727,
        "VendorID": 364,
        "CropID": 268
      },
      {
        "id": 728,
        "VendorID": 364,
        "CropID": 313
      },
      {
        "id": 729,
        "VendorID": 367,
        "CropID": 39
      },
      {
        "id": 730,
        "VendorID": 367,
        "CropID": 282
      },
      {
        "id": 731,
        "VendorID": 367,
        "CropID": 310
      },
      {
        "id": 732,
        "VendorID": 368,
        "CropID": 278
      },
      {
        "id": 733,
        "VendorID": 368,
        "CropID": 294
      },
      {
        "id": 734,
        "VendorID": 373,
        "CropID": 31
      },
      {
        "id": 735,
        "VendorID": 373,
        "CropID": 58
      },
      {
        "id": 736,
        "VendorID": 373,
        "CropID": 228
      },
      {
        "id": 737,
        "VendorID": 373,
        "CropID": 28
      },
      {
        "id": 738,
        "VendorID": 373,
        "CropID": 251
      },
      {
        "id": 739,
        "VendorID": 373,
        "CropID": 78
      },
      {
        "id": 740,
        "VendorID": 373,
        "CropID": 187
      },
      {
        "id": 741,
        "VendorID": 373,
        "CropID": 47
      },
      {
        "id": 742,
        "VendorID": 373,
        "CropID": 151
      },
      {
        "id": 743,
        "VendorID": 373,
        "CropID": 161
      },
      {
        "id": 744,
        "VendorID": 373,
        "CropID": 115
      },
      {
        "id": 745,
        "VendorID": 373,
        "CropID": 299
      },
      {
        "id": 746,
        "VendorID": 373,
        "CropID": 99
      },
      {
        "id": 747,
        "VendorID": 373,
        "CropID": 288
      },
      {
        "id": 748,
        "VendorID": 373,
        "CropID": 46
      },
      {
        "id": 749,
        "VendorID": 373,
        "CropID": 61
      },
      {
        "id": 750,
        "VendorID": 373,
        "CropID": 72
      },
      {
        "id": 751,
        "VendorID": 373,
        "CropID": 186
      },
      {
        "id": 752,
        "VendorID": 373,
        "CropID": 219
      },
      {
        "id": 753,
        "VendorID": 375,
        "CropID": 257
      },
      {
        "id": 754,
        "VendorID": 375,
        "CropID": 282
      },
      {
        "id": 755,
        "VendorID": 375,
        "CropID": 284
      },
      {
        "id": 756,
        "VendorID": 375,
        "CropID": 310
      },
      {
        "id": 757,
        "VendorID": 386,
        "CropID": 278
      },
      {
        "id": 758,
        "VendorID": 386,
        "CropID": 257
      },
      {
        "id": 759,
        "VendorID": 386,
        "CropID": 282
      },
      {
        "id": 760,
        "VendorID": 386,
        "CropID": 310
      },
      {
        "id": 761,
        "VendorID": 390,
        "CropID": 278
      },
      {
        "id": 762,
        "VendorID": 390,
        "CropID": 257
      },
      {
        "id": 763,
        "VendorID": 390,
        "CropID": 282
      },
      {
        "id": 764,
        "VendorID": 399,
        "CropID": 46
      },
      {
        "id": 765,
        "VendorID": 399,
        "CropID": 310
      },
      {
        "id": 766,
        "VendorID": 399,
        "CropID": 87
      },
      {
        "id": 767,
        "VendorID": 400,
        "CropID": 124
      },
      {
        "id": 768,
        "VendorID": 400,
        "CropID": 247
      },
      {
        "id": 769,
        "VendorID": 400,
        "CropID": 305
      },
      {
        "id": 770,
        "VendorID": 401,
        "CropID": 222
      },
      {
        "id": 771,
        "VendorID": 401,
        "CropID": 278
      },
      {
        "id": 772,
        "VendorID": 401,
        "CropID": 257
      },
      {
        "id": 773,
        "VendorID": 401,
        "CropID": 282
      },
      {
        "id": 774,
        "VendorID": 404,
        "CropID": 5
      },
      {
        "id": 775,
        "VendorID": 404,
        "CropID": 102
      },
      {
        "id": 776,
        "VendorID": 404,
        "CropID": 135
      },
      {
        "id": 777,
        "VendorID": 404,
        "CropID": 200
      },
      {
        "id": 778,
        "VendorID": 404,
        "CropID": 253
      },
      {
        "id": 779,
        "VendorID": 406,
        "CropID": 35
      },
      {
        "id": 780,
        "VendorID": 406,
        "CropID": 39
      },
      {
        "id": 781,
        "VendorID": 409,
        "CropID": 257
      },
      {
        "id": 782,
        "VendorID": 409,
        "CropID": 310
      },
      {
        "id": 783,
        "VendorID": 409,
        "CropID": 282
      },
      {
        "id": 784,
        "VendorID": 413,
        "CropID": 111
      },
      {
        "id": 785,
        "VendorID": 413,
        "CropID": 139
      },
      {
        "id": 786,
        "VendorID": 413,
        "CropID": 304
      },
      {
        "id": 787,
        "VendorID": 419,
        "CropID": 58
      },
      {
        "id": 788,
        "VendorID": 419,
        "CropID": 228
      },
      {
        "id": 789,
        "VendorID": 419,
        "CropID": 187
      },
      {
        "id": 790,
        "VendorID": 419,
        "CropID": 161
      },
      {
        "id": 791,
        "VendorID": 419,
        "CropID": 259
      },
      {
        "id": 792,
        "VendorID": 419,
        "CropID": 212
      },
      {
        "id": 793,
        "VendorID": 419,
        "CropID": 257
      },
      {
        "id": 794,
        "VendorID": 423,
        "CropID": 8
      },
      {
        "id": 795,
        "VendorID": 423,
        "CropID": 23
      },
      {
        "id": 796,
        "VendorID": 423,
        "CropID": 26
      },
      {
        "id": 797,
        "VendorID": 423,
        "CropID": 46
      },
      {
        "id": 798,
        "VendorID": 423,
        "CropID": 52
      },
      {
        "id": 799,
        "VendorID": 423,
        "CropID": 74
      },
      {
        "id": 800,
        "VendorID": 423,
        "CropID": 85
      },
      {
        "id": 801,
        "VendorID": 423,
        "CropID": 106
      },
      {
        "id": 802,
        "VendorID": 423,
        "CropID": 135
      },
      {
        "id": 803,
        "VendorID": 423,
        "CropID": 151
      },
      {
        "id": 804,
        "VendorID": 423,
        "CropID": 159
      },
      {
        "id": 805,
        "VendorID": 423,
        "CropID": 161
      },
      {
        "id": 806,
        "VendorID": 423,
        "CropID": 199
      },
      {
        "id": 807,
        "VendorID": 423,
        "CropID": 202
      },
      {
        "id": 808,
        "VendorID": 423,
        "CropID": 204
      },
      {
        "id": 809,
        "VendorID": 423,
        "CropID": 214
      },
      {
        "id": 810,
        "VendorID": 423,
        "CropID": 218
      },
      {
        "id": 811,
        "VendorID": 423,
        "CropID": 273
      },
      {
        "id": 812,
        "VendorID": 423,
        "CropID": 302
      },
      {
        "id": 813,
        "VendorID": 423,
        "CropID": 317
      },
      {
        "id": 814,
        "VendorID": 423,
        "CropID": 246
      },
      {
        "id": 815,
        "VendorID": 423,
        "CropID": 260
      },
      {
        "id": 816,
        "VendorID": 423,
        "CropID": 274
      },
      {
        "id": 817,
        "VendorID": 423,
        "CropID": 288
      },
      {
        "id": 818,
        "VendorID": 423,
        "CropID": 309
      },
      {
        "id": 819,
        "VendorID": 423,
        "CropID": 320
      },
      {
        "id": 820,
        "VendorID": 424,
        "CropID": 19
      },
      {
        "id": 821,
        "VendorID": 424,
        "CropID": 78
      },
      {
        "id": 822,
        "VendorID": 424,
        "CropID": 256
      },
      {
        "id": 823,
        "VendorID": 424,
        "CropID": 310
      },
      {
        "id": 824,
        "VendorID": 425,
        "CropID": 278
      },
      {
        "id": 825,
        "VendorID": 425,
        "CropID": 19
      },
      {
        "id": 826,
        "VendorID": 425,
        "CropID": 282
      },
      {
        "id": 827,
        "VendorID": 425,
        "CropID": 296
      },
      {
        "id": 828,
        "VendorID": 428,
        "CropID": 83
      },
      {
        "id": 829,
        "VendorID": 428,
        "CropID": 104
      },
      {
        "id": 830,
        "VendorID": 428,
        "CropID": 127
      },
      {
        "id": 831,
        "VendorID": 428,
        "CropID": 253
      },
      {
        "id": 832,
        "VendorID": 428,
        "CropID": 255
      },
      {
        "id": 833,
        "VendorID": 428,
        "CropID": 256
      },
      {
        "id": 834,
        "VendorID": 428,
        "CropID": 313
      },
      {
        "id": 835,
        "VendorID": 430,
        "CropID": 78
      },
      {
        "id": 836,
        "VendorID": 430,
        "CropID": 257
      },
      {
        "id": 837,
        "VendorID": 430,
        "CropID": 278
      },
      {
        "id": 838,
        "VendorID": 435,
        "CropID": 282
      },
      {
        "id": 839,
        "VendorID": 435,
        "CropID": 284
      },
      {
        "id": 840,
        "VendorID": 435,
        "CropID": 310
      },
      {
        "id": 841,
        "VendorID": 438,
        "CropID": 52
      },
      {
        "id": 842,
        "VendorID": 438,
        "CropID": 46
      },
      {
        "id": 843,
        "VendorID": 438,
        "CropID": 285
      },
      {
        "id": 844,
        "VendorID": 443,
        "CropID": 31
      },
      {
        "id": 845,
        "VendorID": 443,
        "CropID": 187
      },
      {
        "id": 846,
        "VendorID": 443,
        "CropID": 52
      },
      {
        "id": 847,
        "VendorID": 443,
        "CropID": 66
      },
      {
        "id": 848,
        "VendorID": 443,
        "CropID": 74
      },
      {
        "id": 849,
        "VendorID": 443,
        "CropID": 151
      },
      {
        "id": 850,
        "VendorID": 443,
        "CropID": 161
      },
      {
        "id": 851,
        "VendorID": 443,
        "CropID": 85
      },
      {
        "id": 852,
        "VendorID": 443,
        "CropID": 212
      },
      {
        "id": 853,
        "VendorID": 443,
        "CropID": 260
      },
      {
        "id": 854,
        "VendorID": 443,
        "CropID": 46
      },
      {
        "id": 855,
        "VendorID": 443,
        "CropID": 61
      },
      {
        "id": 856,
        "VendorID": 444,
        "CropID": 82
      },
      {
        "id": 857,
        "VendorID": 444,
        "CropID": 107
      },
      {
        "id": 858,
        "VendorID": 444,
        "CropID": 112
      },
      {
        "id": 859,
        "VendorID": 444,
        "CropID": 139
      },
      {
        "id": 860,
        "VendorID": 444,
        "CropID": 246
      },
      {
        "id": 861,
        "VendorID": 444,
        "CropID": 304
      },
      {
        "id": 862,
        "VendorID": 446,
        "CropID": 304
      },
      {
        "id": 863,
        "VendorID": 446,
        "CropID": 107
      },
      {
        "id": 864,
        "VendorID": 446,
        "CropID": 139
      },
      {
        "id": 865,
        "VendorID": 447,
        "CropID": 282
      },
      {
        "id": 866,
        "VendorID": 447,
        "CropID": 296
      },
      {
        "id": 867,
        "VendorID": 448,
        "CropID": 31
      },
      {
        "id": 868,
        "VendorID": 448,
        "CropID": 58
      },
      {
        "id": 869,
        "VendorID": 448,
        "CropID": 144
      },
      {
        "id": 870,
        "VendorID": 448,
        "CropID": 157
      },
      {
        "id": 871,
        "VendorID": 448,
        "CropID": 189
      },
      {
        "id": 872,
        "VendorID": 448,
        "CropID": 222
      },
      {
        "id": 873,
        "VendorID": 448,
        "CropID": 228
      },
      {
        "id": 874,
        "VendorID": 448,
        "CropID": 300
      },
      {
        "id": 875,
        "VendorID": 448,
        "CropID": 41
      },
      {
        "id": 876,
        "VendorID": 448,
        "CropID": 151
      },
      {
        "id": 877,
        "VendorID": 448,
        "CropID": 153
      },
      {
        "id": 878,
        "VendorID": 448,
        "CropID": 161
      },
      {
        "id": 879,
        "VendorID": 448,
        "CropID": 259
      },
      {
        "id": 880,
        "VendorID": 448,
        "CropID": 23
      },
      {
        "id": 881,
        "VendorID": 448,
        "CropID": 71
      },
      {
        "id": 882,
        "VendorID": 448,
        "CropID": 94
      },
      {
        "id": 883,
        "VendorID": 448,
        "CropID": 103
      },
      {
        "id": 884,
        "VendorID": 448,
        "CropID": 114
      },
      {
        "id": 885,
        "VendorID": 448,
        "CropID": 115
      },
      {
        "id": 886,
        "VendorID": 448,
        "CropID": 195
      },
      {
        "id": 887,
        "VendorID": 448,
        "CropID": 235
      },
      {
        "id": 888,
        "VendorID": 448,
        "CropID": 299
      },
      {
        "id": 889,
        "VendorID": 448,
        "CropID": 85
      },
      {
        "id": 890,
        "VendorID": 448,
        "CropID": 99
      },
      {
        "id": 891,
        "VendorID": 448,
        "CropID": 210
      },
      {
        "id": 892,
        "VendorID": 448,
        "CropID": 260
      },
      {
        "id": 893,
        "VendorID": 448,
        "CropID": 288
      },
      {
        "id": 894,
        "VendorID": 448,
        "CropID": 39
      },
      {
        "id": 895,
        "VendorID": 448,
        "CropID": 15
      },
      {
        "id": 896,
        "VendorID": 448,
        "CropID": 46
      },
      {
        "id": 897,
        "VendorID": 448,
        "CropID": 61
      },
      {
        "id": 898,
        "VendorID": 448,
        "CropID": 279
      },
      {
        "id": 899,
        "VendorID": 451,
        "CropID": 122
      },
      {
        "id": 900,
        "VendorID": 451,
        "CropID": 282
      },
      {
        "id": 901,
        "VendorID": 451,
        "CropID": 284
      },
      {
        "id": 902,
        "VendorID": 454,
        "CropID": 282
      },
      {
        "id": 903,
        "VendorID": 454,
        "CropID": 284
      },
      {
        "id": 904,
        "VendorID": 459,
        "CropID": 282
      },
      {
        "id": 905,
        "VendorID": 459,
        "CropID": 310
      },
      {
        "id": 906,
        "VendorID": 462,
        "CropID": 186
      },
      {
        "id": 907,
        "VendorID": 462,
        "CropID": 282
      },
      {
        "id": 908,
        "VendorID": 462,
        "CropID": 310
      },
      {
        "id": 909,
        "VendorID": 463,
        "CropID": 26
      },
      {
        "id": 910,
        "VendorID": 463,
        "CropID": 39
      },
      {
        "id": 911,
        "VendorID": 463,
        "CropID": 46
      },
      {
        "id": 912,
        "VendorID": 463,
        "CropID": 66
      },
      {
        "id": 913,
        "VendorID": 463,
        "CropID": 78
      },
      {
        "id": 914,
        "VendorID": 463,
        "CropID": 98
      },
      {
        "id": 915,
        "VendorID": 463,
        "CropID": 114
      },
      {
        "id": 916,
        "VendorID": 463,
        "CropID": 151
      },
      {
        "id": 917,
        "VendorID": 463,
        "CropID": 162
      },
      {
        "id": 918,
        "VendorID": 463,
        "CropID": 168
      },
      {
        "id": 919,
        "VendorID": 463,
        "CropID": 179
      },
      {
        "id": 920,
        "VendorID": 463,
        "CropID": 205
      },
      {
        "id": 921,
        "VendorID": 463,
        "CropID": 212
      },
      {
        "id": 922,
        "VendorID": 463,
        "CropID": 260
      },
      {
        "id": 923,
        "VendorID": 463,
        "CropID": 267
      },
      {
        "id": 924,
        "VendorID": 463,
        "CropID": 288
      },
      {
        "id": 925,
        "VendorID": 463,
        "CropID": 291
      },
      {
        "id": 926,
        "VendorID": 464,
        "CropID": 22
      },
      {
        "id": 927,
        "VendorID": 464,
        "CropID": 78
      },
      {
        "id": 928,
        "VendorID": 464,
        "CropID": 109
      },
      {
        "id": 929,
        "VendorID": 464,
        "CropID": 127
      },
      {
        "id": 930,
        "VendorID": 464,
        "CropID": 200
      },
      {
        "id": 931,
        "VendorID": 464,
        "CropID": 253
      },
      {
        "id": 932,
        "VendorID": 464,
        "CropID": 255
      },
      {
        "id": 933,
        "VendorID": "#VALUE!",
        "CropID": "#VALUE!"
      },
      {
        "id": 934,
        "VendorID": 465,
        "CropID": 304
      },
      {
        "id": 935,
        "VendorID": 465,
        "CropID": 111
      },
      {
        "id": 936,
        "VendorID": 465,
        "CropID": 282
      },
      {
        "id": 937,
        "VendorID": 467,
        "CropID": 257
      },
      {
        "id": 938,
        "VendorID": 467,
        "CropID": 282
      },
      {
        "id": 939,
        "VendorID": 471,
        "CropID": 12
      },
      {
        "id": 940,
        "VendorID": 471,
        "CropID": 19
      },
      {
        "id": 941,
        "VendorID": 471,
        "CropID": 33
      },
      {
        "id": 942,
        "VendorID": 472,
        "CropID": 46
      },
      {
        "id": 943,
        "VendorID": 472,
        "CropID": 278
      },
      {
        "id": 944,
        "VendorID": 472,
        "CropID": 282
      },
      {
        "id": 945,
        "VendorID": 472,
        "CropID": 296
      },
      {
        "id": 946,
        "VendorID": 472,
        "CropID": 293
      },
      {
        "id": 947,
        "VendorID": 472,
        "CropID": 310
      },
      {
        "id": 948,
        "VendorID": 474,
        "CropID": 278
      },
      {
        "id": 949,
        "VendorID": 474,
        "CropID": 78
      },
      {
        "id": 950,
        "VendorID": 478,
        "CropID": 78
      },
      {
        "id": 951,
        "VendorID": 478,
        "CropID": 257
      },
      {
        "id": 952,
        "VendorID": 478,
        "CropID": 310
      },
      {
        "id": 953,
        "VendorID": 478,
        "CropID": 282
      },
      {
        "id": 954,
        "VendorID": 480,
        "CropID": 282
      },
      {
        "id": 955,
        "VendorID": 480,
        "CropID": 310
      },
      {
        "id": 956,
        "VendorID": 481,
        "CropID": 257
      },
      {
        "id": 957,
        "VendorID": 481,
        "CropID": 278
      },
      {
        "id": 958,
        "VendorID": 481,
        "CropID": 310
      },
      {
        "id": 959,
        "VendorID": 482,
        "CropID": 78
      },
      {
        "id": 960,
        "VendorID": 482,
        "CropID": 103
      },
      {
        "id": 961,
        "VendorID": 482,
        "CropID": 127
      },
      {
        "id": 962,
        "VendorID": 482,
        "CropID": 192
      },
      {
        "id": 963,
        "VendorID": 482,
        "CropID": 212
      },
      {
        "id": 964,
        "VendorID": 482,
        "CropID": 225
      },
      {
        "id": 965,
        "VendorID": 484,
        "CropID": 282
      },
      {
        "id": 966,
        "VendorID": 484,
        "CropID": 123
      },
      {
        "id": 967,
        "VendorID": 486,
        "CropID": 278
      },
      {
        "id": 968,
        "VendorID": 486,
        "CropID": 282
      },
      {
        "id": 969,
        "VendorID": 487,
        "CropID": 31
      },
      {
        "id": 970,
        "VendorID": 487,
        "CropID": 228
      },
      {
        "id": 971,
        "VendorID": 487,
        "CropID": 236
      },
      {
        "id": 972,
        "VendorID": 487,
        "CropID": 300
      },
      {
        "id": 973,
        "VendorID": 487,
        "CropID": 153
      },
      {
        "id": 974,
        "VendorID": 487,
        "CropID": 80
      },
      {
        "id": 975,
        "VendorID": 487,
        "CropID": 16
      },
      {
        "id": 976,
        "VendorID": 487,
        "CropID": 41
      },
      {
        "id": 977,
        "VendorID": 487,
        "CropID": 52
      },
      {
        "id": 978,
        "VendorID": 487,
        "CropID": 66
      },
      {
        "id": 979,
        "VendorID": 487,
        "CropID": 74
      },
      {
        "id": 980,
        "VendorID": 487,
        "CropID": 152
      },
      {
        "id": 981,
        "VendorID": 487,
        "CropID": 154
      },
      {
        "id": 982,
        "VendorID": 487,
        "CropID": 231
      },
      {
        "id": 983,
        "VendorID": 487,
        "CropID": 259
      },
      {
        "id": 984,
        "VendorID": 487,
        "CropID": 71
      },
      {
        "id": 985,
        "VendorID": 487,
        "CropID": 180
      },
      {
        "id": 986,
        "VendorID": 487,
        "CropID": 196
      },
      {
        "id": 987,
        "VendorID": 487,
        "CropID": 264
      },
      {
        "id": 988,
        "VendorID": 487,
        "CropID": 290
      },
      {
        "id": 989,
        "VendorID": 487,
        "CropID": 320
      },
      {
        "id": 990,
        "VendorID": 487,
        "CropID": 126
      },
      {
        "id": 991,
        "VendorID": 487,
        "CropID": 267
      },
      {
        "id": 992,
        "VendorID": 487,
        "CropID": 46
      },
      {
        "id": 993,
        "VendorID": 488,
        "CropID": 282
      },
      {
        "id": 994,
        "VendorID": 488,
        "CropID": 296
      },
      {
        "id": 995,
        "VendorID": 488,
        "CropID": 310
      },
      {
        "id": 996,
        "VendorID": 506,
        "CropID": 31
      },
      {
        "id": 997,
        "VendorID": 506,
        "CropID": 228
      },
      {
        "id": 998,
        "VendorID": 506,
        "CropID": 300
      },
      {
        "id": 999,
        "VendorID": 506,
        "CropID": 19
      },
      {
        "id": 1000,
        "VendorID": 506,
        "CropID": 204
      },
      {
        "id": 1001,
        "VendorID": 506,
        "CropID": 16
      },
      {
        "id": 1002,
        "VendorID": 506,
        "CropID": 161
      },
      {
        "id": 1003,
        "VendorID": 506,
        "CropID": 23
      },
      {
        "id": 1004,
        "VendorID": 506,
        "CropID": 210
      },
      {
        "id": 1005,
        "VendorID": 506,
        "CropID": 260
      },
      {
        "id": 1006,
        "VendorID": 506,
        "CropID": 35
      },
      {
        "id": 1007,
        "VendorID": 506,
        "CropID": 237
      },
      {
        "id": 1008,
        "VendorID": 506,
        "CropID": 73
      },
      {
        "id": 1009,
        "VendorID": 506,
        "CropID": 279
      },
      {
        "id": 1010,
        "VendorID": 511,
        "CropID": 39
      },
      {
        "id": 1011,
        "VendorID": 511,
        "CropID": 74
      },
      {
        "id": 1012,
        "VendorID": 511,
        "CropID": 162
      },
      {
        "id": 1013,
        "VendorID": 514,
        "CropID": 26
      },
      {
        "id": 1014,
        "VendorID": 514,
        "CropID": 30
      },
      {
        "id": 1015,
        "VendorID": 514,
        "CropID": 39
      },
      {
        "id": 1016,
        "VendorID": 514,
        "CropID": 53
      },
      {
        "id": 1017,
        "VendorID": 514,
        "CropID": 78
      },
      {
        "id": 1018,
        "VendorID": 514,
        "CropID": 85
      },
      {
        "id": 1019,
        "VendorID": 514,
        "CropID": 98
      },
      {
        "id": 1020,
        "VendorID": 514,
        "CropID": 162
      },
      {
        "id": 1021,
        "VendorID": 514,
        "CropID": 203
      },
      {
        "id": 1022,
        "VendorID": 514,
        "CropID": 212
      },
      {
        "id": 1023,
        "VendorID": 514,
        "CropID": 227
      },
      {
        "id": 1024,
        "VendorID": 514,
        "CropID": 260
      },
      {
        "id": 1025,
        "VendorID": 514,
        "CropID": 288
      },
      {
        "id": 1026,
        "VendorID": 519,
        "CropID": 278
      },
      {
        "id": 1027,
        "VendorID": 519,
        "CropID": 282
      },
      {
        "id": 1028,
        "VendorID": 520,
        "CropID": 222
      },
      {
        "id": 1029,
        "VendorID": 520,
        "CropID": 187
      },
      {
        "id": 1030,
        "VendorID": 520,
        "CropID": 52
      },
      {
        "id": 1031,
        "VendorID": 520,
        "CropID": 74
      },
      {
        "id": 1032,
        "VendorID": 520,
        "CropID": 151
      },
      {
        "id": 1033,
        "VendorID": 520,
        "CropID": 161
      },
      {
        "id": 1034,
        "VendorID": 520,
        "CropID": 85
      },
      {
        "id": 1035,
        "VendorID": 520,
        "CropID": 210
      },
      {
        "id": 1036,
        "VendorID": 520,
        "CropID": 260
      },
      {
        "id": 1037,
        "VendorID": 520,
        "CropID": 288
      },
      {
        "id": 1038,
        "VendorID": 520,
        "CropID": 320
      },
      {
        "id": 1039,
        "VendorID": 520,
        "CropID": 78
      },
      {
        "id": 1040,
        "VendorID": 520,
        "CropID": 186
      },
      {
        "id": 1041,
        "VendorID": 520,
        "CropID": 279
      },
      {
        "id": 1042,
        "VendorID": 521,
        "CropID": 78
      },
      {
        "id": 1043,
        "VendorID": 521,
        "CropID": 278
      },
      {
        "id": 1044,
        "VendorID": 521,
        "CropID": 282
      },
      {
        "id": 1045,
        "VendorID": 521,
        "CropID": 295
      },
      {
        "id": 1046,
        "VendorID": 522,
        "CropID": 19
      },
      {
        "id": 1047,
        "VendorID": 522,
        "CropID": 30
      },
      {
        "id": 1048,
        "VendorID": 522,
        "CropID": 57
      },
      {
        "id": 1049,
        "VendorID": 522,
        "CropID": 84
      },
      {
        "id": 1050,
        "VendorID": 522,
        "CropID": 114
      },
      {
        "id": 1051,
        "VendorID": 522,
        "CropID": 130
      },
      {
        "id": 1052,
        "VendorID": 522,
        "CropID": 167
      },
      {
        "id": 1053,
        "VendorID": 522,
        "CropID": 200
      },
      {
        "id": 1054,
        "VendorID": 522,
        "CropID": 200
      },
      {
        "id": 1055,
        "VendorID": 522,
        "CropID": 210
      },
      {
        "id": 1056,
        "VendorID": 522,
        "CropID": 221
      },
      {
        "id": 1057,
        "VendorID": 522,
        "CropID": 287
      },
      {
        "id": 1058,
        "VendorID": 522,
        "CropID": 312
      },
      {
        "id": 1059,
        "VendorID": 522,
        "CropID": 313
      },
      {
        "id": 1060,
        "VendorID": 522,
        "CropID": 313
      },
      {
        "id": 1061,
        "VendorID": 526,
        "CropID": 304
      },
      {
        "id": 1062,
        "VendorID": 526,
        "CropID": 139
      },
      {
        "id": 1063,
        "VendorID": 526,
        "CropID": 179
      },
      {
        "id": 1064,
        "VendorID": 527,
        "CropID": 39
      },
      {
        "id": 1065,
        "VendorID": 527,
        "CropID": 46
      },
      {
        "id": 1066,
        "VendorID": 527,
        "CropID": 151
      },
      {
        "id": 1067,
        "VendorID": 527,
        "CropID": 260
      },
      {
        "id": 1068,
        "VendorID": 528,
        "CropID": 278
      },
      {
        "id": 1069,
        "VendorID": 528,
        "CropID": 78
      },
      {
        "id": 1070,
        "VendorID": 528,
        "CropID": 257
      },
      {
        "id": 1071,
        "VendorID": 529,
        "CropID": 282
      },
      {
        "id": 1072,
        "VendorID": 529,
        "CropID": 310
      },
      {
        "id": 1073,
        "VendorID": 530,
        "CropID": 257
      },
      {
        "id": 1074,
        "VendorID": 530,
        "CropID": 282
      },
      {
        "id": 1075,
        "VendorID": 530,
        "CropID": 310
      },
      {
        "id": 1076,
        "VendorID": 533,
        "CropID": 282
      },
      {
        "id": 1077,
        "VendorID": 533,
        "CropID": 310
      },
      {
        "id": 1078,
        "VendorID": 534,
        "CropID": 282
      },
      {
        "id": 1079,
        "VendorID": 534,
        "CropID": 296
      },
      {
        "id": 1080,
        "VendorID": 534,
        "CropID": 310
      },
      {
        "id": 1081,
        "VendorID": 539,
        "CropID": 112
      },
      {
        "id": 1082,
        "VendorID": 539,
        "CropID": 139
      },
      {
        "id": 1083,
        "VendorID": 539,
        "CropID": 304
      },
      {
        "id": 1084,
        "VendorID": 540,
        "CropID": 278
      },
      {
        "id": 1085,
        "VendorID": 540,
        "CropID": 202
      },
      {
        "id": 1086,
        "VendorID": 540,
        "CropID": 85
      },
      {
        "id": 1087,
        "VendorID": 540,
        "CropID": 282
      },
      {
        "id": 1088,
        "VendorID": 540,
        "CropID": 296
      },
      {
        "id": 1089,
        "VendorID": 545,
        "CropID": 5
      },
      {
        "id": 1090,
        "VendorID": 545,
        "CropID": 107
      },
      {
        "id": 1091,
        "VendorID": 545,
        "CropID": 139
      },
      {
        "id": 1092,
        "VendorID": 545,
        "CropID": 144
      },
      {
        "id": 1093,
        "VendorID": 545,
        "CropID": 158
      },
      {
        "id": 1094,
        "VendorID": 545,
        "CropID": 159
      },
      {
        "id": 1095,
        "VendorID": 545,
        "CropID": 197
      },
      {
        "id": 1096,
        "VendorID": 545,
        "CropID": 235
      },
      {
        "id": 1097,
        "VendorID": 545,
        "CropID": 281
      },
      {
        "id": 1098,
        "VendorID": 545,
        "CropID": 297
      },
      {
        "id": 1099,
        "VendorID": 545,
        "CropID": 308
      },
      {
        "id": 1100,
        "VendorID": 546,
        "CropID": 184
      },
      {
        "id": 1101,
        "VendorID": 546,
        "CropID": 201
      },
      {
        "id": 1102,
        "VendorID": 546,
        "CropID": 12
      },
      {
        "id": 1103,
        "VendorID": 548,
        "CropID": 48
      },
      {
        "id": 1104,
        "VendorID": 548,
        "CropID": 282
      },
      {
        "id": 1105,
        "VendorID": 548,
        "CropID": 310
      },
      {
        "id": 1106,
        "VendorID": 553,
        "CropID": 282
      },
      {
        "id": 1107,
        "VendorID": 553,
        "CropID": 310
      },
      {
        "id": 1108,
        "VendorID": 554,
        "CropID": 278
      },
      {
        "id": 1109,
        "VendorID": 554,
        "CropID": 78
      },
      {
        "id": 1110,
        "VendorID": 554,
        "CropID": 282
      },
      {
        "id": 1111,
        "VendorID": 554,
        "CropID": 310
      },
      {
        "id": 1112,
        "VendorID": 556,
        "CropID": 78
      },
      {
        "id": 1113,
        "VendorID": 556,
        "CropID": 310
      },
      {
        "id": 1114,
        "VendorID": 559,
        "CropID": 78
      },
      {
        "id": 1115,
        "VendorID": 559,
        "CropID": 257
      },
      {
        "id": 1116,
        "VendorID": 561,
        "CropID": 86
      },
      {
        "id": 1117,
        "VendorID": 561,
        "CropID": 252
      },
      {
        "id": 1118,
        "VendorID": 565,
        "CropID": 257
      },
      {
        "id": 1119,
        "VendorID": 565,
        "CropID": 282
      },
      {
        "id": 1120,
        "VendorID": 565,
        "CropID": 285
      },
      {
        "id": 1121,
        "VendorID": 569,
        "CropID": 278
      },
      {
        "id": 1122,
        "VendorID": 569,
        "CropID": 85
      },
      {
        "id": 1123,
        "VendorID": 569,
        "CropID": 257
      },
      {
        "id": 1124,
        "VendorID": 585,
        "CropID": 85
      },
      {
        "id": 1125,
        "VendorID": 585,
        "CropID": 210
      },
      {
        "id": 1126,
        "VendorID": 585,
        "CropID": 282
      },
      {
        "id": 1127,
        "VendorID": 586,
        "CropID": 278
      },
      {
        "id": 1128,
        "VendorID": 586,
        "CropID": 257
      },
      {
        "id": 1129,
        "VendorID": 586,
        "CropID": 282
      },
      {
        "id": 1130,
        "VendorID": 591,
        "CropID": 257
      },
      {
        "id": 1131,
        "VendorID": 591,
        "CropID": 278
      },
      {
        "id": 1132,
        "VendorID": 592,
        "CropID": 22
      },
      {
        "id": 1133,
        "VendorID": 592,
        "CropID": 78
      },
      {
        "id": 1134,
        "VendorID": 592,
        "CropID": 254
      },
      {
        "id": 1135,
        "VendorID": 592,
        "CropID": 257
      },
      {
        "id": 1136,
        "VendorID": 593,
        "CropID": 22
      },
      {
        "id": 1137,
        "VendorID": 593,
        "CropID": 257
      },
      {
        "id": 1138,
        "VendorID": 593,
        "CropID": 282
      },
      {
        "id": 1139,
        "VendorID": 596,
        "CropID": 282
      },
      {
        "id": 1140,
        "VendorID": 596,
        "CropID": 310
      },
      {
        "id": 1141,
        "VendorID": 596,
        "CropID": 285
      },
      {
        "id": 1142,
        "VendorID": 597,
        "CropID": 282
      },
      {
        "id": 1143,
        "VendorID": 597,
        "CropID": 310
      },
      {
        "id": 1144,
        "VendorID": 599,
        "CropID": 168
      },
      {
        "id": 1145,
        "VendorID": 599,
        "CropID": 282
      },
      {
        "id": 1146,
        "VendorID": 600,
        "CropID": 39
      },
      {
        "id": 1147,
        "VendorID": 600,
        "CropID": 107
      },
      {
        "id": 1148,
        "VendorID": 600,
        "CropID": 123
      },
      {
        "id": 1149,
        "VendorID": 600,
        "CropID": 282
      },
      {
        "id": 1150,
        "VendorID": 600,
        "CropID": 284
      },
      {
        "id": 1151,
        "VendorID": 601,
        "CropID": 278
      },
      {
        "id": 1152,
        "VendorID": 601,
        "CropID": 282
      },
      {
        "id": 1153,
        "VendorID": 601,
        "CropID": 285
      },
      {
        "id": 1154,
        "VendorID": 605,
        "CropID": 31
      },
      {
        "id": 1155,
        "VendorID": 605,
        "CropID": 157
      },
      {
        "id": 1156,
        "VendorID": 605,
        "CropID": 300
      },
      {
        "id": 1157,
        "VendorID": 605,
        "CropID": 47
      },
      {
        "id": 1158,
        "VendorID": 605,
        "CropID": 52
      },
      {
        "id": 1159,
        "VendorID": 605,
        "CropID": 74
      },
      {
        "id": 1160,
        "VendorID": 605,
        "CropID": 151
      },
      {
        "id": 1161,
        "VendorID": 605,
        "CropID": 161
      },
      {
        "id": 1162,
        "VendorID": 605,
        "CropID": 259
      },
      {
        "id": 1163,
        "VendorID": 605,
        "CropID": 210
      },
      {
        "id": 1164,
        "VendorID": 605,
        "CropID": 46
      },
      {
        "id": 1165,
        "VendorID": 605,
        "CropID": 61
      },
      {
        "id": 1166,
        "VendorID": 605,
        "CropID": 282
      },
      {
        "id": 1167,
        "VendorID": 605,
        "CropID": 282
      },
      {
        "id": 1168,
        "VendorID": 608,
        "CropID": 278
      },
      {
        "id": 1169,
        "VendorID": 608,
        "CropID": 85
      },
      {
        "id": 1170,
        "VendorID": 608,
        "CropID": 257
      },
      {
        "id": 1171,
        "VendorID": 608,
        "CropID": 282
      },
      {
        "id": 1172,
        "VendorID": 608,
        "CropID": 285
      },
      {
        "id": 1173,
        "VendorID": 609,
        "CropID": 78
      },
      {
        "id": 1174,
        "VendorID": 609,
        "CropID": 257
      },
      {
        "id": 1175,
        "VendorID": 612,
        "CropID": 225
      },
      {
        "id": 1176,
        "VendorID": 612,
        "CropID": 267
      },
      {
        "id": 1177,
        "VendorID": 613,
        "CropID": 78
      },
      {
        "id": 1178,
        "VendorID": 613,
        "CropID": 186
      },
      {
        "id": 1179,
        "VendorID": 613,
        "CropID": 257
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
    return queryInterface.dropTable("vendorCrops", null, {});

  }
};
