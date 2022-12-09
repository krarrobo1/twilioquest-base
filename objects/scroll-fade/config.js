module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestScrollFade: {
      fileName: "Scroll_Fade.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestScrollFade",
      layers: [],
    },
<<<<<<< Updated upstream
    idleAnimations: {
      animations: { idle: 150 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
=======
>>>>>>> Stashed changes
  },
};
