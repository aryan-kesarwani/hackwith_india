// RESET pin: 5
// DIO0 pin:  2
// DIO1 pin:  15
// NSS pin:   4
// MOSI pin:   23
// MISO pin:   19
// sck pin:   18

// include the library
#include <RadioLib.h>
SX1278 radio = new Module(4, 2, 5, 15);
// save transmission state between loops
int transmissionState = RADIOLIB_ERR_NONE;

//Light
#include <Wire.h>
#include <BH1750.h>

BH1750 lightMeter;
//Light

//Water
#define sensorPower 12
#define sensorPin 32
int waterr = 0;
int level=0;
//Water

//ph
const int potPin=34;
float ph;
float Value=0;
//ph

//bmp280
#include <Adafruit_BMP280.h>
#define BMP_SDA 21
#define BMP_SCL 22

Adafruit_BMP280 bmp280;
//bmp280

void setup(){
  Serial.begin(9600);

  //LoRa
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
  // when packet transmission is finished
  radio.setPacketSentAction(setFlag);

  // start transmitting the first packet
  Serial.print(F("[SX1278] Sending first packet ... "));

  // you can transmit C-string or Arduino string up to
  // 255 characters long
  transmissionState = radio.startTransmit("Hello World!");
  //end LoRa



  //Water
  pinMode(sensorPower, OUTPUT);
  digitalWrite(sensorPower, LOW);
  //Water

  // Initialize the I2C bus (BH1750 library doesn't do this automatically)
  //Light
  Wire.begin();
  // On esp8266 you can select SCL and SDA pins using Wire.begin(D4, D3);
  // For Wemos / Lolin D1 Mini Pro and the Ambient Light shield use Wire.begin(D2, D1);
  lightMeter.begin();
  Serial.println(F("BH1750 Test begin"));
  //Light

  //ph
  pinMode(potPin,INPUT);
  delay(1000);
  //ph
  
  //bmp280
  Serial.println("Initializing BMP280");
  boolean status = bmp280.begin(0x76);
  if (!status)
  {
    Serial.println("Not connected");
  }
  //bmp280
}

//LoRa
// flag to indicate that a packet was sent
volatile bool transmittedFlag = false;

// this function is called when a complete packet
// is transmitted by the module
// IMPORTANT: this function MUST be 'void' type
//            and MUST NOT have any arguments!
#if defined(ESP8266) || defined(ESP32)
  ICACHE_RAM_ATTR
#endif
void setFlag(void) {
  // we sent a packet, set the flag
  transmittedFlag = true;
}
//end LoRa

void loop() {

  //Water
  digitalWrite(sensorPower, HIGH);
  delay(10);
  waterr = analogRead(sensorPin);
  digitalWrite(sensorPower, LOW);
  float(water);
  
  delay(1000);
  //Water

  //Light
  float lux = lightMeter.readLightLevel();
  
  delay(1000);
  //Light

  //ph
  Value= analogRead(potPin);
  
  float voltage=Value*(3.3/4095.0);
  ph=(3.3*voltage);
  
  delay(1000);
  //ph

  //bmp280
  float temp = bmp280.readTemperature();

  float altitude = bmp280.readAltitude(1011.18);
  
  float pressure = (bmp280.readPressure()/100);
 
  delay(1000);
  //bmp280

  //final print
  Serial.print("Water level: ");
  Serial.print(waterr);
  Serial.print(",   Light: ");
  Serial.print(lux);
  Serial.print(" lx");
  Serial.print(",   pH: ");
  Serial.print(ph);
  Serial.print(",   Temperature: ");
  Serial.print(temp);
  Serial.print(",  Pressure: ");
  Serial.print(pressure);
  Serial.print(" hPa");
  Serial.print(",   Altitude: ");
  Serial.print(altitude);
  Serial.println(" ");
  Serial.println(" ");
  Serial.println(" ");


  //LoRa
  // check if the previous transmission finished
  if(transmittedFlag) {
    // reset flag
    transmittedFlag = false;

    if (transmissionState == RADIOLIB_ERR_NONE) {
      // packet was successfully sent
      Serial.println(F("transmission finished!"));
    } 
    else {
      Serial.print(F("failed, code "));
      Serial.println(transmissionState);
    }
    // clean up after transmission is finished
    radio.finishTransmit();
    // wait a second before transmitting again
    delay(1000);
    // send another one
    Serial.print(F("[SX1278] Sending another packet ... "));
    String str = String(waterr) + ";" + String(lux) + ";" + String(ph) + ";" + String(temp) + ";" + String(pressure) + ";" + String(altitude) + ";";
    transmissionState = radio.startTransmit(str);
    delay(10000);
  }




  
}