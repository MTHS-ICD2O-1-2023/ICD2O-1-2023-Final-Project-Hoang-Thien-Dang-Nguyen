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
      this.gameStartTextStyle = { font: '40px Arial', fill: '#F0F0F0', align: 'center' }
      this.startButton = null
    }
    /**  
    @param { object }  data 
    */
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
  
    preload() {
      console.log("Menu Scene")
      this.load.image("menuSceneBackground", "./asset/menuScene.png")
      this.load.image("startButton", "./asset/button_round_depth_flat.png")
    }
    /**@param {object} data */
    create(data) {
      this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
      this.menuSceneBackgroundImage.x = 1920/2
      this.menuSceneBackgroundImage.y = 1080/2

      this.startButton = this.add.sprite(1920/2, 1080/2 +300, "startButton")
      this.startButton.setInteractive({useHandCursor:true})
      this.startButton.on("pointerdown", () => this.clickButton())
  
      this.gameStartText = this.add.text(1920/2, 1080/2 +400, "-Click the button to start a game-", this.gameStartTextStyle).setOrigin(0.5)
    }
    /**
      *@param {number} delta
      *@param {number} time
     */
    update(time, delta) {
            
    }
    clickButton(){
      this.scene.start("gameScene")
    }
  }
  
  export default MenuScene