/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class SplashScene extends Phaser.Scene {
    constructor () {
      super({ key: "splashScene"})
      this.splashSceneBackgroundImage = null
    } 
    /**  
    @param { Object } data 
    */ 
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
  
    preload() {
      console.log("Splash Scene")
      this.load.image("splashSceneBackground", "./asset/splashSceneImage.png" )
    }
    /**@param {object} data */
    create(data) { 
      this.splashSceneBackgroundImage = this.add.sprite(
        0,
        0,
        "splashSceneBackground"
      ) 
      this.splashSceneBackgroundImage.x = 1920/2
      this.splashSceneBackgroundImage.y = 1080/2  
    }
    /**
      *@param {number} delta
      *@param {number} time
     */
    update(time, delta){
      if (time>3000) {
        this.scene.switch("titleScene")
      }
    }
  }
  
  export default SplashScene