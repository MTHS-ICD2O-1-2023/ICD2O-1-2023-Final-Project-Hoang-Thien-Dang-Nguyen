/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class MenuScene extends Phaser.Scene {
    constructor() {
      super({ key: "menuScene" })
      this.menuSceneBackgroundImage = null
      this.gameStartTextStyle = { font: '40px Arial', fill: '#FFD700', align: 'center' }
  
    }
    /**  
    @param { object }  data 
    */
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
  
    preload() {
      console.log("Menu Scene")
      this.load.image("menuSceneBackground", "./asset/backgroundMenuScene.png")
    }
    /**@param {object} data */
    create(data) {
      this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
      this.menuSceneBackgroundImage.x = 1920/2
      this.menuSceneBackgroundImage.y = 1080/2
  
      this.gameStartText = this.add.text(1920/2, 1080/2 +100, "-Click anywhere to start a game-", this.gameStartTextStyle).setOrigin(0.5)
      this.gameStartText.setInteractive({useHandCursor:true})
      this.gameStartText.on("pointerdown", () => this.scene.start('gameScene'))
    }
    /**
      *@param {number} delta
      *@param {number} time
     */
    update(time, delta) {
      
    }
  }
  
  export default MenuScene