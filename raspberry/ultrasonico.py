# Importamos la paquteria necesaria
import RPi.GPIO as GPIO
import time
from gpiozero import Buzzer
from time import sleep

buzzer = Buzzer(12) 
TRIG = 16 
ECHO = 20 

GPIO.setmode(GPIO.BCM)     #Establecemos el modo según el cual nos refiriremos a los GPIO de nuestra RPi            
GPIO.setup(TRIG, GPIO.OUT) #Configuramos el pin TRIG como una salida 
GPIO.setup(ECHO, GPIO.IN)  #Configuramos el pin ECHO como una salida 



try:
    while True:

        # Ponemos en bajo el pin TRIG 
        GPIO.output(TRIG, GPIO.LOW)
        time.sleep(0.5)

        #Ponemos en alto el pin TRIG 
        GPIO.output(TRIG, GPIO.HIGH)
        time.sleep(0.00001)
        GPIO.output(TRIG, GPIO.LOW)

        
        while True:
            pulso_inicio = time.time()
            if GPIO.input(ECHO) == GPIO.HIGH:
                break


        while True:
            pulso_fin = time.time()
            if GPIO.input(ECHO) == GPIO.LOW:
                break

        duracion = pulso_fin - pulso_inicio

        #Obtener la distancia 
        distancia = (34300 * duracion) / 2
        if distancia > 45:
            buzzer.off() 
        if distancia > 30 and distancia <= 44.99:
            buzzer.on() 
            sleep(0.5) 
            buzzer.off() 
            sleep(0.0)
        if distancia > 16 and distancia < 29.99:
            buzzer.on() 
            sleep(0.3) 
            buzzer.off() 
            sleep(0.0)
        if distancia > 11 and distancia < 15.99:
            buzzer.on() 
            sleep(0.1) 
            buzzer.off() 
            sleep(0.0)
        if distancia <= 10.99:
            buzzer.on() 


finally:
    # Reiniciamos 
    GPIO.cleanup()
