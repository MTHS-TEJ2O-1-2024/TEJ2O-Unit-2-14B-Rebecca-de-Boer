/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Oct 2024
 * This program ...
*/
// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter = 1
    basic.pause(500)
    loopCounter = 0
    sprite = game.createSprite (5, 0)
      while (loopCounter <= 0)
  sprite.delete()
  basic.showIcon(IconNames.Happy)

}