import 'dotenv/config';

export default {
  "expo": {
    "name": "onYourWay",
    "slug": "onYourWay",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./app/assets/logo-gold.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./app/assets/logo-gold.png",
      "resizeMode": "contain",
      "backgroundColor": "#313940"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./app/assets/logo-gold.png",
        "backgroundColor": "#313940"
      }
    },
    "web": {
      "favicon": "./app/assets/logo-gold.png"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      googleApiKey: process.env.GOOGLE_MAPS_APIKEY
    }
  }
}
