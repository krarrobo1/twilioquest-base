module.exports = {
  animations: {
    idle: {
      frames: [4, 5, 6, 7, 0, 1, 2, 3],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestOrbGreen: {
      fileName: "Orb_Green.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestOrb_Green",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 200 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
