// RESET pin: 5
// DIO0 pin:  2
// DIO1 pin:  15
// NSS pin:   4
// MOSI pin:   23
// MISO pin:   19
// sck pin:   18
/*
   RadioLib SX127x Receive with Interrupts Example

   This example listens for LoRa transmissions and tries to
   receive them. Once a packet is received, an interrupt is
   triggered. To successfully receive data, the following
   settings have to be the same on both transmitter
   and receiver:
    - carrier frequency
    - bandwidth
    - spreading factor
    - coding rate
    - sync word

   Other modules from SX127x/RFM9x family can also be used.

   For default module settings, see the wiki page
   https://github.com/jgromes/RadioLib/wiki/Default-configuration#sx127xrfm9x---lora-modem

   For full API reference, see the GitHub Pages
   https://jgromes.github.io/RadioLib/
*/
//FIREBASE
#include <Arduino.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <Wire.h>
#include "time.h"
// Provide the token generation process info.
#include "addons/TokenHelper.h"
// Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"
//FIREBASE

//string
#include <String.h>
#include <sstream>
//END STRING

//LORA
#include <RadioLib.h>
SX1278 radio = new Module(4, 2, 5, 15);
//LORA

//firebase
// Insert your network credentials
#define WIFI_SSID "SHIVAMTHAKKAR1685"
#define WIFI_PASSWORD "123456789"
// Insert Firebase project API Key
#define API_KEY "AIzaSyBaRy-JGsezzQKbgovI6SDJfZawkXBWa30"
// Insert Authorized Email and Corresponding Password
#define USER_EMAIL "kesarwaniaryan76@gmail.com"
#define USER_PASSWORD "testtest"
// Insert RTDB URLefine the RTDB URL
#define DATABASE_URL "https://maggi-agro-default-rtdb.asia-southeast1.firebasedatabase.app/"
//firebase

//STRING
float water,lux,pH,temp,pressure,altitude;
int numValues = 6;
int integers[6];
float floatingPoints[6];
//STRING

//FIREBASE
// Define Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
// Variable to save USER UID
String uid;
// Database main path (to be updated in setup with the user UID)
String databasePath;

// Database child nodes
String waterPath = "/water_level";
String lightPath = "/light_intensity";
String pHPath = "/pH";
String tempPath = "/temperature";
String presPath = "/pressure";
String altitudePath = "/altitude";
String timePath = "/timestamp";
// Parent Node (to be updated in every loop)
String parentPath;
int timestamp;
FirebaseJson json;
const char* ntpServer = "pool.ntp.org";
// Timer variables (send new readings every three minutes)
unsigned long sendDataPrevMillis = 0;
unsigned long timerDelay = 180000;
// Initialize WiFi
void initWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println(WiFi.localIP());
  Serial.println();
}
// Function that gets current epoch time
unsigned long getTime() {
  time_t now;
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    //Serial.println("Failed to obtain time");
    return(0);
  }
  time(&now);
  return now;
}
//FIREBASE

void setup() {
  Serial.begin(9600);

  // initialize SX1278 with default settings
  Serial.print(F("[SX1278] Initializing ... "));
  int state = radio.begin();
  if (state == RADIOLIB_ERR_NONE) {
    Serial.println(F("success!"));
  } else {
    Serial.print(F("failed, code "));
    Serial.println(state);
    while (true);
  }

  // set the function that will be called
  // when new packet is received
  radio.setPacketReceivedAction(setFlag);

  // start listening for LoRa packets
  Serial.print(F("[SX1278] Starting to listen ... "));
  state = radio.startReceive();
  if (state == RADIOLIB_ERR_NONE) {
    Serial.println(F("success!"));
  } else {
    Serial.print(F("failed, code "));
    Serial.println(state);
    while (true);
  }
  // if needed, 'listen' mode can be disabled by calling
  // any of the following methods:
  //
  // radio.standby()
  // radio.sleep()
  // radio.transmit();
  // radio.receive();
  // radio.scanChannel();

  //FIREBASE
  initWiFi();
  configTime(0, 0, ntpServer);
  // Assign the api key (required)
  config.api_key = API_KEY;
  // Assign the user sign in credentials
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  // Assign the RTDB URL (required)
  config.database_url = DATABASE_URL;
  Firebase.reconnectWiFi(true);
  fbdo.setResponseSize(4096);
  // Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  // Assign the maximum retry of token generation
  config.max_token_generation_retry = 5;
  // Initialize the library with the Firebase authen and config
  Firebase.begin(&config, &auth);
  // Getting the user UID might take a few seconds
  Serial.println("Getting User UID");
  while ((auth.token.uid) == "") {
    Serial.print('.');
    delay(1000);
  }
  // Print user UID
  uid = auth.token.uid.c_str();
  Serial.print("User UID: ");
  Serial.println(uid);
  // Update database path
  databasePath = "/ESP_RECIVER/";
  //FIREBASE
}

// flag to indicate that a packet was received
volatile bool receivedFlag = false;

// this function is called when a complete packet
// is received by the module
// IMPORTANT: this function MUST be 'void' type
//            and MUST NOT have any arguments!
#if defined(ESP8266) || defined(ESP32)
  ICACHE_RAM_ATTR
#endif
void setFlag(void) {
  // we got a packet, set the flag
  receivedFlag = true;
}

void loop() {
  // check if the flag is set
  if(receivedFlag) {
    // reset flag
    receivedFlag = false;

    // you can read received data as an Arduino String
    String str;
    int state = radio.readData(str);
    if (state == RADIOLIB_ERR_NONE) {
      // packet was successfully received
      Serial.println(F("[SX1278] Received packet!"));
      // print data of the packet
      Serial.print(F("[SX1278] Data:\t\t"));
      Serial.println(str);
      // print RSSI (Received Signal Strength Indicator)
      Serial.print(F("[SX1278] RSSI:\t\t"));
      Serial.print(radio.getRSSI());
      Serial.println(F(" dBm"));
      // print SNR (Signal-to-Noise Ratio)
      Serial.print(F("[SX1278] SNR:\t\t"));
      Serial.print(radio.getSNR());
      Serial.println(F(" dB"));
      // print frequency error
      Serial.print(F("[SX1278] Frequency error:\t"));
      Serial.print(radio.getFrequencyError());
      Serial.println(F(" Hz"));

      //STRING
      splitString(str, integers, floatingPoints, numValues);
      water = integers[0];
      lux = floatingPoints[1];
      pH = floatingPoints[2];
      temp = floatingPoints[3];
      pressure = floatingPoints[4];
      altitude = floatingPoints[5];
      Serial.print("Water Level: ");
      Serial.println(water);
      Serial.print("Light Intensity: ");
      Serial.println(lux);
      Serial.print("pH value: ");
      Serial.println(pH);
      Serial.print("Temperature: ");
      Serial.println(temp);
      Serial.print("Pressure: ");
      Serial.println(pressure);
      Serial.print("Altitude: ");
      Serial.println(altitude);
      Serial.println("");
      Serial.println("");
      //STRING



      if (Firebase.ready()){
        //Get current timestamp
        timestamp = getTime();
        Serial.print ("time: ");
        Serial.println (timestamp);

        parentPath= databasePath + "/" + String(timestamp);

        json.set(waterPath.c_str(), String(water));
        json.set(lightPath.c_str(), String(lux));
        json.set(pHPath.c_str(), String(pH));
        json.set(tempPath.c_str(), String(temp));
        json.set(presPath.c_str(), String(pressure));
        json.set(altitudePath.c_str(), String(altitude));
        json.set(timePath, String(timestamp));
        Serial.printf("Set json... %s\n", Firebase.RTDB.setJSON(&fbdo, parentPath.c_str(), &json) ? "ok" : fbdo.errorReason().c_str());
      }





    } 
    else if (state == RADIOLIB_ERR_CRC_MISMATCH) {
      // packet was received, but is malformed
      Serial.println(F("[SX1278] CRC error!"));
    } 
    else {
      // some other error occurred
      Serial.print(F("[SX1278] Failed, code "));
      Serial.println(state);
    }
  }
}


void splitString(String str, int* intArray, float* floatArray, int numValues) {
  std::istringstream iss(str.c_str()); // Convert String to C-style string
  std::string token;
  int i = 0;

  while (std::getline(iss, token, ';')) {
    if (i < numValues) {
      // Check if token is an integer
      if (token.find_first_not_of("0123456789") == std::string::npos) {
        intArray[i] = std::stoi(token);
      } else {
        floatArray[i] = std::stof(token);
      }
      i++;
    } else {
      // Handle potential extra values (optional: log an error)
      Serial.println("Warning: More values than expected in string");
      break;
    }
  }
}