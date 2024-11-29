scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
function Levels (levels: number) {
    if (levels == 1) {
        tiles.setTilemap(tilemap`level1`)
        info.startCountdown(randint(25, 30))
    } else if (levels == 2) {
        mySprite.sayText("Level 2!", 1000, true)
        tiles.setTilemap(tilemap`level2`)
        info.startCountdown(randint(30, 45))
    } else if (levels == 3) {
        mySprite.sayText("Level 3!", 1000, true)
        tiles.setTilemap(tilemap`level3`)
        info.startCountdown(randint(30, 45))
    } else if (levels == 4) {
        mySprite.sayText("Level 4!", 1000, true)
        tiles.setTilemap(tilemap`level4`)
        info.startCountdown(randint(45, 60))
    } else if (levels == 5) {
        mySprite.sayText("Level 5!", 1000, true)
        tiles.setTilemap(tilemap`level5`)
        info.startCountdown(randint(60, 75))
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    Levels(levels)
    levels += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    Levels(levels)
    levels += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    Levels(levels)
    levels += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    Levels(levels)
    levels += 1
})
let levels = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
levels = 1
Levels(1)
tilemap.g.ts
// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level_0":
            case "level_0":return tiles.createTilemap(hex`100010000102020c0c1801020c0202180c0202030a0f0b0b0b0b090b0b0b0b0b0b0b0f17000b0b0b0b0b090b0b0b0b0f0b0b0b0d090b0b010c0c1b0f0b1a0707100b0b0d0a0b0b090b0b0b0b0b0d0f0b090b0b04090f0b0a0b0b0f0b0b0d0b0b0a0b0b04120b0b0a0b0b090f0b0d0b0f090f0b170a0b0b08100f090b0b0d0f0b120b0b0d090b0f0b0806090b0b0d0b0b0a0b0b040a0b0b0b0f0b090f0b0d0b0b090f0b0d0a0b0b0b0b0b090b0b0d0b0b090b0b04090b0b0c0c0c1b0b0f0b0b0f090b0b04120b0b0b0b0b0f0b0b0b0b0b090b0b170a0b0b0b0b0b090b0b0b0b0b0a0b0004090f0b0b0b0f090b0b0f0b0b090f0b0408070719070608060719060608060705`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.dungeon.stairLarge,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,myTiles.transparency16], TileScale.Sixteen);
            case "level_1":
            case "level_1":return tiles.createTilemap(hex`100010000102020c0c1801020c0202180c0202030a0f0b0b0b0b090b0b0b0b0b0b0b0f17130b0b0b0b0b090b0b0b0b0f0b0b0b0d090b0b010c0c1b0f0b1a0707100b0b0d0a0b0b090b0b0b0b0b0d0f0b090b0b04090f0b0a0b0b0f0b0b0d0b0b0a0b0b04120b0b0a0b0b090f0b0d0b0f090f0b170a0b0b08100f090b0b0d0f0b120b0b0d090b0f0b0806090b0b0d0b0b0a0b0b040a0b0b0b0f0b090f0b0d0b0b090f0b0d0a0b0b0b0b0b090b0b0d0b0b090b0b04090b0b0c0c0c1b0b0f0b0b0f090b0b04120b0b0b0b0b0f0b0b0b0b0b090b0b170a0b0b0b0b0b090b0b0b0b0b0a0b1c04090f0b0b0b0f090b0b0f0b0b090f0b0408070719070608060719060608060705`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorDark1,sprites.dungeon.floorDark5,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.dungeon.stairLarge,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.stairLadder], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`10001000030d0904040904040904040904040405020d0d0d0d0d0d0d0d0d0d0d0d0d0d0602080808080808080808080808080d0a020d0d0d0d0d0d0d0d0d0d0d0d0d0d06020d0e0808080808080808080808080a020d0d0d0d0d0d0d0d0d0d0d0d0d0d06020d0808080808080808080808080d06020d0d0d0d0d0d0d0d0d0d0d0d0d0e0a0208080808080808080808080d0c0d06020d0d0d0d0d0d0d0d0d0d0d0d0c0d06020d0808080808080808080808070e0a020d0d0d0d0d0d0d0d0d0d0d0d0d0d0602040404040404040404040404050d06020d0d0d0d0d0d0d0d0d0d0d0e060d0c020d0d0d0d0d0d0d0d0d0d0d0d0d0d0601080b08080b0808080b0f080b080807`, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast1,sprites.dungeon.floorLight2,myTiles.tile2,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100016070b07070b070b07070b070b0707080319111919191919191919171919190a0319040c0c0c0c0c0c0c0c0c191519090319191919191919191919191915190a181914190c0c0c0c0c0c0c0c0c0619090317141919191919191919191719190903190f1313131313131313191912190a01191919191919191919191919121909031911190d0d0d0d0d0d0d0d0d0e190a031911191919191919191919191719091819040c0c0c0c0c0c0c0c050505190a031917191919191919191919191919090319190d0d0d0d0d0d0d0d0d0d0d190a031919101919191919191919170919090319191019191919191919191919190a04050505050505050505020505050506`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 . . 2 . 2 
. . . . . . . . . . . . . 2 . 2 
2 . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . 2 . . . . . . . . . 2 . 2 
2 . . 2 . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.stairLarge,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthWest,myTiles.tile2,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorLight2], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000060505050505050505050505120a0a04030d0d0d0d0d0d0d0d0b110d0d0d0d0e030d0d030d0d0d0d0d0b0d100d0d0d0803110d030d010101010b0d0a040d1108030d0d030d110d0d0d0b0d0d080d0d0e030d0d030d0d0c0c0c09110d080d0d08030d0d030d110d0d0d0d0d0d08110d08030d11030d01010101010101090d0d08030d0d030d0d0d0d0d0d0d0d0d0d0d0e030d0d02010101010c0c0d0b05110d08030d0d0d0d0d0d0d0d080d0b0d0d0d08030d06050505050d0d080d0b0d0d0d08030d030d0d0d0d0d0d080d0b0d0d0d0e030d030d0c0c0c0c0c080d0b0d0d0d08030d030d0d0d0d0d0d080d0b0d0d0d08070d020f010f0101010f0101010f0109`, img`
2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . 2 . . . . . 2 . 2 . . . 2 
2 . . 2 . 2 2 2 2 2 . 2 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . 2 2 2 2 . . 2 . . 2 
2 . . 2 . . . . . . . . 2 . . 2 
2 . . 2 . 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 . 2 2 . . 2 
2 . . . . . . . . 2 . 2 . . . 2 
2 . 2 2 2 2 2 . . 2 . 2 . . . 2 
2 . 2 . . . . . . 2 . 2 . . . 2 
2 . 2 . 2 2 2 2 2 2 . 2 . . . 2 
2 . 2 . . . . . . 2 . 2 . . . 2 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.stairLarge,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest0,myTiles.tile2,sprites.dungeon.stairNorth], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`10001000151516040404040404040404040404050215101515151515151515150a15150609150a151515011515150f150a15150609150a15130d0d0d0e010f150a15150609151015101515150f150f150a15150609150a15101514150f150f150a15150609150a15101514010f150f150a15150609150a150b0c12150f150f150a15150609150a15151515150f150f150a15150609150b0c0c0c0c150f150f150a15150609151515151515150f150f150a151506091515111111111112150f150a151506091515011515151515150f150a15150609111111110c1111111112150b0c01060915151515151515151501151515151508070707070707070707070707071503`, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . . . . 2 . . 2 
2 . 2 . . . . . . . 2 . 2 . . 2 
2 . 2 . 2 2 2 2 2 . 2 . 2 . . 2 
2 . 2 . 2 . . . 2 . 2 . 2 . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . . 2 
2 . 2 . 2 2 2 . 2 . 2 . 2 . . 2 
2 . 2 . . . . . 2 . 2 . 2 . . 2 
2 . 2 2 2 2 2 . 2 . 2 . 2 . . 2 
2 . . . . . . . 2 . 2 . 2 . . 2 
2 . . 2 2 2 2 2 2 . 2 . 2 . . 2 
2 . . . . . . . . . 2 . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile2,sprites.dungeon.stairLarge,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterNorthWest], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`14001400040c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0605191919191919191919191919191919191901070f10101010101010101010101010101010101907021919191919191919191919191919191919190712111111111111111111111111111111111119070d191919191919191919191919191919191919070b19120e0e0e0e0e0e0e0e0e0e0e14190e1419070b191319191919191919191919191519011519070b19191919170e0e0e0e0e0e14191519191519070d191319191719191919191915191519191519070b191319191719191919190115191519191519070b191319191719120e0e0e0e0e191519191519070b191319191719131919191919191519191519070b191319191719131901191919191519191519070d191319191719131919191919191519191519070b1913191917190f1818181818191519191519070b191319191719191919191915191519191519070b190f10101619101010101016191519191519070b011919191901191919191919191901191519070a09090909090909090309090909090909090908`, img`
22222222222222222222
2..................2
222222222222222222.2
...................2
222222222222222222.2
2..................2
2.2222222222222.22.2
2.2...........2..2.2
2....22222222.2..2.2
2.2..2......2.2..2.2
2.2..2......2.2..2.2
2.2..2.222222.2..2.2
2.2..2.2......2..2.2
2.2..2.2......2..2.2
2.2..2.2......2..2.2
2.2..2.222222.2..2.2
2.2..2......2.2..2.2
2.2222.222222.2..2.2
2................2.2
222222222.2222222222
`, [myTiles.transparency16,myTiles.tile2,sprites.dungeon.stairLarge,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.floorLight2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}