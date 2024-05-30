/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class TitleScene extends Phaser.Scene {
    constructor() {
      super({ key: "titleScene" })
      this.titleSceneBackgroundImage = null
      this.titleSceneText = null
      this.titleSceneTextStyle ={
        font: "100px Times",
        fill: "#8B0000",
        align: "center",
      } 
    }
    /**  
    @param { object }  data 
    */
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
  
    preload() {
      console.log("Title Scene")
      this.load.image("titleSceneBackground", "./asset/titleSceneImage.jpg")
    }
    /**@param {object} data */
    create(data) {
      this.titleSceneBackgroundImage = this.add
      .image(0, 0, "titleSceneBackground")
      .setScale(3.0)
      this.titleSceneBackgroundImage.x = 1920/2
      this.titleSceneBackgroundImage.y = 1080/2
  
      this.titleSceneText = this.add
        .text(1920/2, 1080/2 ,"RACING", this.titleSceneTextStyle)
        .setOrigin(0.5)
    }
    /**
      *@param {number} delta
      *@param {number} time
     */
    update(time, delta) {
      if (time > 6000) {
        this.scene.switch("menuScene")
      }
    }
  }
  
  export default TitleScene