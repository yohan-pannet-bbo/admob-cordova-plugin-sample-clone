cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-open-admob.AdMobAds",
      "file": "plugins/cordova-open-admob/www/admob.js",
      "pluginId": "cordova-open-admob",
      "clobbers": [
        "window.admob"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-open-admob": "1.0.0-facebook"
  };
});