// main.js — Game entry point
// Claude: This file sets up the Phaser game and scenes.
// Add new scenes in separate files in src/ and register them here.

// BootScene — runs first, good place to load assets
class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Load images and sounds here before the game starts
    // Example: this.load.image('player', 'assets/sprites/player.png');
  }

  create() {
    this.scene.start('GameScene');
  }
}

// GameScene — this is where the actual game happens
class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // Placeholder: a rectangle where the player will be
    this.add.rectangle(400, 300, 40, 40, 0x00ff88).setDepth(1);
    this.add.text(400, 300, 'player', {
      fontSize: '10px', color: '#000'
    }).setOrigin(0.5);

    this.add.text(400, 50, 'Game is running!', {
      fontSize: '20px', color: '#ffffff'
    }).setOrigin(0.5);
  }

  update() {
    // Runs every frame — keep it lean
    // Do NOT create new objects here (no "new" keyword in update)
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1a1a2e',
  scene: [BootScene, GameScene]
};

const game = new Phaser.Game(config);
