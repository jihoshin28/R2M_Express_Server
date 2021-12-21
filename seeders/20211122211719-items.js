'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Items', [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 1000 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 1500 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 2600 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 3900 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 5800 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A HOUSEHOLD GOOD - 8500 LBS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 5 X 10 - 1750',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 10 - 3500',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 15 - 5000',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 20 - 7000',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 25 - 8500',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'A STORAGE UNIT - 10 X 30 - 10000',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AIR CONDITION, LG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AIR CONDITION, SM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM STAND, LG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM STAND, LG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM, 10 GAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM, 20 GAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'AQUARIUM, 55 GAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ARMOIRE, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ARMOIRE, REGULAR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ARMOIRE, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BAKERS RACK',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BAR, 3X4X2',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BAR, STOOL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BARBECUE GRILL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BARBECUE GRILL, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED - BOX SPRING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED CANOPY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED FRAME',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, BRIDGE HEADBOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, BRIDGELIGHT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, BUNK (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, CAPTAIN (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, DAY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, DOUBLE (WITH MATTRESSES)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, FOOTBOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, FULL (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, KING (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, LARGE HEADBOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, PLATFORM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, POST',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, QUEEN (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, SINGLE (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, TRUNDLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, TWIN (WITH MATTRESS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BED, WATER Q/K',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BEAN BAG, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BENCH, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BENCH, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BIKE, ADULT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BIKE, CHILD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOK SHELF',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOK SHELF, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOKCASE 6X3',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOOKCASE, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX LAMP',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, BOOK/SMALL (1.5 CU. FT.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, CHINA/DISH 18X18X28',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, LINEN/MEDIUM (3.0 CU. FT)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED. PBO 18X18X18',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED/LG PBO 18X18X24',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, SMALL PBO 12X12X18',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, WARDROBE- (15 CU. FT.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BREAKFRONT 1 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED/LG PBO 18X18X24',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED/LG PBO 18X18X24',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED/LG PBO 18X18X24',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED/LG PBO 18X18X24',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BOX, MED/LG PBO 18X18X24',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BUFFET, BASE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'BUFFET, TOP',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CABINET, CORNER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CABINET, MEDIUM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CABINET, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHILD CAR TOY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CARPET 8X10',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CARPET, AREA (SM.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CD HOLDER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CD PLAYER (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, ARM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, DINING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, FOLDING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, HIGH',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, HIGH BACK',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, KITCHEN',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, LOUNGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, OFFICE (SM.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, OFFICE(LG.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, OVERSTUFFED',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, PAPIZON',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, RECLINER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, ROCKER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, SINGLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, STACKABLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, WICKER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHAIR, LOUNGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHANDELIER, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHANDELIER, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHANGING TABLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHEST, CEDAR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHEST, MEDIUM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHEST, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHEST, TOY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHINA CAB, 1 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CHINA CAB, 2 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CLOCK GRANDFATHER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CLOCK, WALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'COAT RACK',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'COMPUTER CHAIR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'COMPUTER DESK',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'COMPUTER SCREEN (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'COMPUTER SYSTEM (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'COPIER, REG. OFFICE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'COPIER, TABLE TOP',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CORNER CABINET',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CRADLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CREDENZA',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CRIB',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CRIB MINI',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'CURIO CABINET',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK CHAIR, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK CHAIR, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK, DOUBLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK, EXECUTIVE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK, HUTCH',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK, REGULAR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK, RETURN (L-SHAPE)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DESK, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DINING CHAIR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DINING, CHAIR + ARM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DINING TABLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DISHWASHER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DRESSER, CHILD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DRESSER, DOUBLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DRESSER, MIRROR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DRESSER, SINGLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DRESSER, TRIPLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DRYER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'DVD/VCR (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'EDGER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ENTERTAINMENT CENTER, LG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ENTERTAINMENT CENTER, REG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ENTERTAINMENT CENTER, SM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'EXERCISE BIKE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'EXERCISE EQUIP LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'EXERCISE EQUIP SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FAN, FLOOR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FAX, MACHINE (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FILE BOX - LEGAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FILE BOX - LETTER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FILE CABINET, 2 DRAWER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FILE CABINET, 4 DRAWER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FILE CABINET, 5 DRAWER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FILE CABINET, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FILE CABINET, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FOOT STOOL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FREEZER, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FREEZER, MEDIUM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FREEZER, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FREEZER, XL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'FUTON',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'GARBAGE CAN',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'GLIDER CHAIR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'GOLF BAG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'GUITAR (IN CASE)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'HAMPER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'HUTCH',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'INSTEP ROLLER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'IRONING BOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'KAYAK (UP TO 8 FOOT)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'KEYBOARD (ORGAN)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'KIT BAG',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LADDER (10 STEPS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LADDER (7 STEPS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LADDER, EXTENSION',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LAMP, FLOOR (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LAMP, TABLE (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LAWNMOWER, PUSH',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LAWNMOWER, RIDE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'LOUNGE CHAIR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MAGAZINE RACK',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MATTRESS DBL/QN',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MATTRESS KING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MATTRESS TWIN',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MICROWAVE CART',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MICROWAVE, STANDARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MIRROR, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MIRROR REGULAR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MOTORCYCLE (NOT INCLUDING CRATE)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'MUSICAL INSTRUMENT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'NIGHT STAND',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'ORIENTAL SCREEN',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'OTTOMAN, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'OTTOMAN, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PATIO CHAIR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PATIO SET, 5 PIECES',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PATIO TABLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PATIO UMBRELLA',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PEDESTAL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PIANO BENCH',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PIANO, BABYGRAND',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PIANO, GRAND',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PIANO, SPINET',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PIANO, UPRIGHT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PICTURES, MEDIUM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PICTURES, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PLANT ARTIFICIAL, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PLANT ARTIFICIAL, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PLASTIC BIN, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PLASTIC BIN, MED.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PLASTIC BIN, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PLAY HOUSE (FOR KIDS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PLAYPEN, FOLDING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'POTTERY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'PRINTER, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'RECLINER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'REFRIGERATOR DORMITY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'REFRIGERATOR, SIDE/SIDE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'REFRIGERATOR, UPRIGHT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'RUG, AREA (SM.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'RUG, LARGE 8X10',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SADDLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SADDLE, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SAFE, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SCOOTER (NOT INCLUDING CRATE)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SCREEN, FOLDING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SERVER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SEWING MACHINE, CONSOLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SEWING MACHINE, PORTABLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SIDE TABLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SIDEBOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA TABLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA, 1 CHAIR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA, 2 LOVESEAT',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA, 3 SEAT/BED',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA, SECTIONAL-2 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA, SECTIONAL-3 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA, SECTIONAL-4 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SOFA, SECTIONAL-5 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SPEAKER, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SPEAKER, REG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STAND, MED.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STAND, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STATUE, MEDIUM',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STATUE, SMALL (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STEREO CABINET',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STEREO SYSTEM (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STOOL BAR',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STOOL, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STOVE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STROLLER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STROLLER DOUBLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'STROLLER TRIPLE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SUITCASE, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SUITCASE, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'SURF BOARD',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'T.V. STAND (SMALL)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'T.V. 20 (OR SMALLER)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'T.V. BIG SCREEN',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'T.V. FLAT SCREEN - 15-32"',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'T.V. FLAT SCREEN - 33-60"',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'T.V. 21-39"',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE LAMP, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, CHANGING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, COFFEE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, CONFERENCE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, DINING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, DROP LEAF',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, END',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, ENTRANCE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, FOLDING',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, GLASS TOP',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, KITCHEN',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, KITCHEN (SM.)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, SIDE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, TELEPHONE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TABLE, VANITY',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TEA CART',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TENT, XL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TENT, LG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TENT, MED.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TENT, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TIRE (CAR)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TOASTER OVEN (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TODDLER BED',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TOOL BOX, LG. (UP TO 300 LBS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TOOL BOX, SM.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TOOL GANG BOX',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TOOLS (GARDEN)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TOY CAR (FOR KIDS)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TRAMPOLINE, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TREADMILL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TRUNK, LARGE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TRUNK, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'TYPEWRITER (PBO)',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'VACUUM CLEANER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'VANITY, BENCH',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'VANITY, DRESSER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WALL SHELVES',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WALL UNIT 1 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WALL UNIT 2 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WALL UNIT 3 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WALL UNIT 4 PIECE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WARDROBE CLOSET',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WASHER/DRYER COMBO',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WASHING MACHINE',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WATER COOLER',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WEIGHT BENCH',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WHEELBARROW',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WIRE RACK, SMALL',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WORK BENCH, REG.',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'WORK BENCH, SM.',
    },
    
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
