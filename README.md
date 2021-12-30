# LockIt: Smart Door (Web Page)

By: 
- Pablo Ortega ([@PAOK-2001](https://github.com/PAOK-2001))
- Brandon Magaña ([@BrandonMagana](https://github.com/BrandonMagana))

LockIt! is an Internet of Things proyect that uses the ESP8266 microcontroller and the RaspberryPi to "smarify" your front door, allowing you to manage and monitor it in realtime as well as keep a log of when the door is open (day and exact time). Aditionally, it also allows the user to unlock the door using facial recognitior (This last function was developed by my collaborato and can be found in here [LockIT](https://github.com/PAOK-2001/LockIt-))

## About the electronics

The sensors and actuators used in this proyect are:
- *Reed Switch*: to detect if door open or not.
- *Ultra Sonic Sensor*: to detect if there is someone infront of the door and thu report a visitor, which in turn triggers the facial recognition script.
- *Solenoid lock & relay*: the door used a solenoid lock which is activated using a relay.
- *Buzzer*: used as the door's alarm.

The circuit is powered using a pack of 4 18650 lithium-ion cell's. Where the first two cells (providing around 7.8V) are used to power the ESP8266, aditionally a 5V regulator was used to step down the voltage and power the relay and ultra sonic sensor. The whole circuit was integrated in a bakelite prototyping board using terminals to allow components to be replaced quickly.

![Electronics Board](Electric.jpeg?raw=true "Electronics Board")


## ESP8266

The ESP8266 was used for reading the values of the sensor and actuating the realy depending of the state of the variable "lock" in the database. The integration with firebase was done using the library FirebaseESP8266.h.

In summary, on setup the microcontroller looks for a WiFi network to connect and established comunication with the Firebase database. Once setup is complete, the code consists of loop where the value of "lock" is read for Firebase and written to relay; subsequently, the value of the sensors is read and pushed to Firebase.

![Firebase Realtime Datbase](Database.png?raw=true "Firebase Realtime Datbase")

## RaspberryPi

The RaspberryPi is running Raspberry Pi OS (Debian based Linux distro). Before booting to OS the Pi must establish conection with a WiFi network, upon booting it runs "faceDetect.py" which establishes communication with Firebase using the library Pyrebase, afterwards listens for changes in the value of "status" to determine if a new visit must be registered, in case the door changes from "Closed" to "Open" that means a new visit must me pushed.

Aditionally, the script reads the value of "isCamera", which is active only if the ESP8266 detects a person in front of the door. In case there is a visitor, the camera feed will activate and the facial recognition function will be called. The facial recognition was adapted from my previous FaceRecognizer and uses the Local Binary Patterns Histogram Recognizer.

## Web Page 

The system is interfaced using a web page developed in React for the fronted, and **fireabse** for the backend. 

As is explained before, you can monitor your door from this page that shows a minimal styled dashboard that allows the users to understand the info raplidly and effectibly. Also from here you can check a log that show the exact date and hour of when the door has been opened. 

## Web pages tabs

### Home Page / Login
Following the minimal styled that involves this project, the home page shows a little description of the project as well as a form, that is used for authentication(This proccess uses firebase functions that make it easy and secured)

### Dashboard
Shows all door information, as well as buttons that allow interaction with the door.

### Log
Displays the door History info.

![GUI Navegation](GUI.gif?raw=true "GUI Navegation")

## Demos

-  [Monitoring](https://drive.google.com/file/d/1Sfv8R2nTwElnmW8QOGlN43AhVjWWz0q_/view?usp=sharing)
-  [Alarm](https://drive.google.com/file/d/1w1-2yVokni1xSdu0aUDbTF7MRnM4u1Vy/view?usp=sharing)
-  [New visit](https://drive.google.com/file/d/1HZv1XKGohDXBLOEsY_R-P_OO8ik6I9Ri/view?usp=sharing)
-  [Visitor detection](https://drive.google.com/file/d/1AiDHjhqeyB_6Wx5lQdcbxAIccwUqxzia/view?usp=sharing)
