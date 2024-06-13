/* Global Phaser */
// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Apr 2024
// This file contains the JS functions for index.html

class GameScene extends Phaser.Scene {
  createCar() {
    const carXLocation = Math.floor(Math.random() * 1920) + 1
    let carXVelocity = Math.floor(Math.random()* 50) +1
    carXVelocity *= Math.round(Math.random()) ? 1 : -1
    const anCar = this.physics.add.sprite(carXLocation, -100, 'otherCar')
    anCar.body.velocity.y = 200
    anCar.body.velocity.x = carXVelocity
    this.carGroup.add(anCar)
    setTimeout(_ => this.createCar(), Phaser.Math.Between(500,1000))
  }

  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.car = null
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
    this.gameEndTextStyle = {font: '65px Arial', fill: '#FFD700', align: 'center'}
  }
  /**  
  @param { object } data 
  */
  init(data) {
    this.cameras.main.setBackgroundColor("#000000")
  }

  preload() {
    console.log("Game Scene")
    this.load.image("car","./asset/car_black_1.png")
    this.load.image("otherCar", "asset/car_blue_1.png")
  }
  /**@param {object} data */
  create(data) {

    this.car = this.physics.add.sprite(1920 / 2, 1080 - 100 , "car")
    this.car.setCollideWorldBounds(true)

    this.carGroup = this.add.group()
    this.createCar()

    this.physics.add.collider(this.car, this.carGroup, function (carCollide, othercarCollide) {
      this.physics.pause()
      othercarCollide.destroy()
      carCollide.destroy()
      this.gameOverText=this.add.text(1920/2, 1080/2, 'Game Over!\nClick to play again', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({useHandCursor:true})
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
    }.bind(this)) 

    this.startTime = new Date()
    this.totalTime = 120
    this.creatTimer()
    this.updateTimer()
  }

  /**
    *@param {number} delta
    *@param {number} time
   */
  update(time, delta) {
    const keyLeftObj =  this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")

    if (keyLeftObj.isDown === true){
      this.car.x-=15
      if(this.car.x<0){
        this.car.x=0
      }
    }

    if (keyRightObj.isDown === true) {
      this.car.x +=15
      if (this.car.x >1920) {
        this.car.x = 1920
      }
    }

    if (this.timeElapsed >= this.totalTime){
      this.physics.pause()
      this.gameEndText=this.add.text(1920/2, 1080/2, 'Congratulation you won the game!!!\nClick to play again', this.gameEndTextStyle).setOrigin(0.5)
      this.gameEndText.setInteractive({useHandCursor:true})
      this.gameEndText.on('pointerdown', () => this.scene.start('gameScene'))
    }
  }
  
  creatTimer() {
    this.timeLabel = this.add.text(this.game.world, 100, "00:00",{font:"100px Arial", fill: "#F0F0F0"})
    this.timeLabel.setOrigin(0,0)
    this.timeLabel.align = 'center'
  }

  updateTimer() {
    let currentTime = new Date()
    let timeDifference = this.startTime.getTime() - currentTime.getTime()

    this.timeElapsed = Math.abs(timeDifference/1000)

    let timeRemaining = this.totalTime - this.timeElapsed

    let minute = Math.floor(timeRemaining/60)
    let second = Math.floor(timeRemaining) - (60 * minute)

    let result = (minute<10) ? ":0" + second : ":" + second

    this.timeLabel.text = result

    setTimeout(_ => this.updateTimer(), Phaser.Math.Between(1000,1000))
  }
}

export default GameScene