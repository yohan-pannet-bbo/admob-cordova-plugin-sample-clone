/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
    // Options
    var options = {...admob.options};
    applyOptions(options);
    
    // Apply (Button)
    var applyOptionsButton = document.getElementById("button_applyOptions");
    applyOptionsButton.addEventListener("click", function() {
        applyOptions(options);
    });
    
    // Load Interstitial (Button)
    var loadInterstitialButton = document.getElementById("button_loadInterstitial");
    loadInterstitialButton.addEventListener("click", function() {
        console.log("Load Interstitial");
        cordova.exec(()=>{},()=>{},'AdMobAds','requestInterstitialAd', [options])
    });
    
    // Show Interstitial (Button)
    var showInterstitialButton = document.getElementById("button_showInterstitial");
    showInterstitialButton.addEventListener("click", function() {
        console.log("Show Interstitial");
        cordova.exec(()=>{},()=>{},'AdMobAds','showInterstitialAd', [])
    });
    
    // Load Rewarded Video (Button)
    var loadRewardedVideoButton = document.getElementById("button_loadRewardedVideo");
    loadRewardedVideoButton.addEventListener("click", function() {
        console.log("Load Rewarded Video");
        cordova.exec(()=>{},()=>{},'AdMobAds','requestRewardedAd', [options])
    });
    
    // Show Rewarded Video (Button)
    var showRewardedVideoButton = document.getElementById("button_showRewardedVideo");
    showRewardedVideoButton.addEventListener("click", function() {
        console.log("Show Rewarded Video");
        cordova.exec(()=>{},()=>{},'AdMobAds','showRewardedAd', [])
    });
    
    // Load Banner (Button)
    var loadBannerButton = document.getElementById("button_loadBanner");
    loadBannerButton.addEventListener("click", function() {
        console.log("Load Banner");
        cordova.exec(()=>{},()=>{},'AdMobAds','createBannerView', [options])
    });
    
    // Show Banner (Button)
    var showBannerButton = document.getElementById("button_showBanner");
    showBannerButton.addEventListener("click", function() {
        console.log("Show Banner");
        cordova.exec(()=>{},()=>{},'AdMobAds','showBannerAd', [])
    });
    
    // Destroy Banner (Button)
    var destroyBannerButton = document.getElementById("button_destroyBanner");
    destroyBannerButton.addEventListener("click", function() {
        console.log("Destroy Banner");
        cordova.exec(()=>{},()=>{},'AdMobAds','destroyBannerView', [])
    });

}

function applyOptions(options) {
    // Disable auto-show
    options.autoShowBanner = false;
    options.autoShowInterstitial = false;
    options.autoShowRewarded = false
    
    options.publisherId = document.getElementById("text_bannerId").value;
    options.interstitialId = document.getElementById("text_interstitialId").value;
    options.rewardedAdId = document.getElementById("text_rewardedId").value;
    
    console.log(options);
}
