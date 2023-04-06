## Setup

For iOS:
* Set the value of "**GADApplicationIdentifier**" in **HelloCordova-Info.plist** with a proper Admob App ID

For Android:
* Set the value of "**ANDROID_ADMOB_APP_ID**" in **AndroidManifest** with a proper Admob App ID. File in located in **platforms/android/app/src/main**

## Changes

With the latest version of AdMob there are some delegate methods that are no longer supported, because they were deprecated or removed by AdMob's SDK. 

Events exposed from the interface are not effect and they still function as intended:

- createBannerView
- requestRewardedAd
- requestInterstitialAd
- showBannerAd
- showInterstitialAd
- showRewardedAd
- destroyBannerView

The events that are no longer fired from native plugin are:

- onAdLeftApplication
- onRewardedAdVideoStarted
- onRewardedAdVideoCompleted