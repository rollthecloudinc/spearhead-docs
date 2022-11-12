const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  []);

module.exports = {
  output: {
    uniqueName: "spear",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "ipe",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/ipe/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        /*remotes: {
          "fedMicroNg": "http://localhost:3000/remoteEntry.js"
        },*/

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          "@rollthecloudinc/utils": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@rollthecloudinc/attributes": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@rollthecloudinc/plugin": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@rollthecloudinc/material": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@rollthecloudinc/content": { singleton: true, strictVersion: false, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
