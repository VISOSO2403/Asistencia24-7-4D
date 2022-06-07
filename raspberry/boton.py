from gpiozero import Button
import time
import requests
import math
import random

TOKEN = "BBFF-FPRs4ttXIHt2ZPdlCTcYMLKstv3fe1"  # Put your TOKEN here
DEVICE_LABEL = "Raspberry"  # Put your device label here 
VARIABLE_LABEL_3 = "boton"  # Put your first variable label here


def build_payload(variable_3):
    button = Button(21)
    boton = 0
    suma = 1
    if button.is_pressed:
        boton = suma
    else:
        boton


    # Creates two random values for sending data
    value_3 = boton
    if value_3 == 1:
        payload = {variable_3: {"value":value_3,"context":{"alert":"Alerta! Revisa el estado del adulto mayor"}}}
        return payload
    else:
        payload = {variable_3 : value_3}
        return payload


def post_request(payload):
    # Creates the headers for the HTTP requests
    url = "http://industrial.api.ubidots.com"
    url = "{}/api/v1.6/devices/{}".format(url, DEVICE_LABEL)
    headers = {"X-Auth-Token": TOKEN, "Content-Type": "application/json"}

    # Makes the HTTP requests
    status = 400
    attempts = 0
    while status >= 400 and attempts <= 5:
        req = requests.post(url=url, headers=headers, json=payload)
        status = req.status_code
        attempts += 1
        time.sleep(0.5)

    # Processes results
    if status >= 400:
        print("[ERROR] Could not send data after 5 attempts, please check \
            your token credentials and internet connection")
        return False

    print("[INFO] request made properly, your device is updated")
    return True


def main():
    payload = build_payload(
        VARIABLE_LABEL_3)

    print("[INFO] Attemping to send data")
    post_request(payload)
    print("[INFO] finished")


if __name__ == '__main__':
    while (True):
        main()
        time.sleep(0.5)

