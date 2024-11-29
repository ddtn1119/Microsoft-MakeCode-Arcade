def on_overlap_tile(sprite, location):
    game.over(False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def Levels(levels: number):
    if levels == 1:
        tiles.set_tilemap(tilemap("""
            level1
        """))
        info.start_countdown(randint(25, 30))
    elif levels == 2:
        mySprite.say_text("Level 2!", 1000, True)
        tiles.set_tilemap(tilemap("""
            level2
        """))
        info.start_countdown(randint(30, 45))
    elif levels == 3:
        mySprite.say_text("Level 3!", 1000, True)
        tiles.set_tilemap(tilemap("""
            level3
        """))
        info.start_countdown(randint(30, 45))
    elif levels == 4:
        mySprite.say_text("Level 4!", 1000, True)
        tiles.set_tilemap(tilemap("""
            level4
        """))
        info.start_countdown(randint(45, 60))
    elif levels == 5:
        mySprite.say_text("Level 5!", 1000, True)
        tiles.set_tilemap(tilemap("""
            level5
        """))
        info.start_countdown(randint(60, 75))
    else:
        game.over(True)
    tiles.place_on_random_tile(mySprite, sprites.dungeon.stair_large)

def on_overlap_tile2(sprite2, location2):
    global levels2
    Levels(levels2)
    levels2 += 1
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_north,
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    global levels2
    Levels(levels2)
    levels2 += 1
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_west,
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    global levels2
    Levels(levels2)
    levels2 += 1
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_east,
    on_overlap_tile4)

def on_overlap_tile5(sprite5, location5):
    global levels2
    Levels(levels2)
    levels2 += 1
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_south,
    on_overlap_tile5)

levels2 = 0
mySprite: Sprite = None
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
tiles.place_on_random_tile(mySprite, sprites.dungeon.stair_large)
scene.camera_follow_sprite(mySprite)
levels2 = 1
Levels(1)