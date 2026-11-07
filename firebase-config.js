/* The 2human admin hub's Firebase project (admin-2human, web app "2human admin hub"). Public by design: access is decided
 * by email-link sign-in, the account's role claim and the database rules (firebase/), not by keeping this hidden.
 * appCheckSiteKey is the public reCAPTCHA Enterprise site key App Check uses (tools/hub-firebase/app-check-setup.mjs).
 * The object below is plain JSON so tools can read it; the publish script refuses an emulator config. */
window.FIREBASE_CONFIG = {
  "apiKey": "AIzaSyA0dUU1XRSRxCiZBtbAsOmbDx5Dh0S6JsQ",
  "authDomain": "admin-2human.firebaseapp.com",
  "projectId": "admin-2human",
  "storageBucket": "admin-2human.firebasestorage.app",
  "messagingSenderId": "281928284980",
  "appId": "1:281928284980:web:3d2952aa9846cd2b4c8361",
  "appCheckSiteKey": "6LcSpBQuAAAAAGtKF6xXdxfWVWC3-ZRyocWNYErl"
};
