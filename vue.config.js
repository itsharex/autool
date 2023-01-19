const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  pages: {
    index: {
      entry: 'src/render/main.js'
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "Aba",
        appId: "com.aba.app",
        copyright: "Copyright © 2022 hecmay",
        extraResources: [
          {from:'./resources',to:'./resources'},
          {from: './dist/app', to: './backend'}],
        directories: {
            output: "release/"
        },
        mac: {
          target: ['dmg'],
          icon: './resources/logo.png',
          asar: true
        },
        win: {
          icon: "./resources/logo.png",
          target: [
            "portable"
          ]
        },
        "nsis": {
          "runAfterFinish":false,
          "oneClick":false,
          "allowToChangeInstallationDirectory":true,
          "createDesktopShortcut":true
        },
      },
    },
  },
})
