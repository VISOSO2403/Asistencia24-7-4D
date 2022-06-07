import max30102
import hrcalc
import time
import requests
import math
import random

TOKEN = "BBFF-FPRs4ttXIHt2ZPdlCTcYMLKstv3fe1"  # Put your TOKEN here
DEVICE_LABEL = "Raspberry"  # Put your device label here 
VARIABLE_LABEL_1 = "hr2"  # Put your first variable label here
VARIABLE_LABEL_2 = "sp2"  # Put your second variable label here

def build_payload(variable_1, variable_2):
#    # Creates two random values for sending data
    m = max30102.MAX30102()
    hr2 = 0
    sp2 = 0
    
    red, ir = m.read_sequential()
    
    hr,hrb,sp,spb = hrcalc.calc_hr_and_spo2(ir, red)

    if(hrb == True and hr != -999):
        hr2 = int(hr)
    if(spb == True and sp != -999):
        sp2 = int(sp)
    
    value_1 = hr2
    value_2 = sp2

    # Creates a random gps coordinates



    payload = {variable_1: value_1,
                variable_2: value_2,}
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
        VARIABLE_LABEL_1, VARIABLE_LABEL_2)

    print("[INFO] Attemping to send data")
    post_request(payload)
    print("[INFO] finished")


if __name__ == '__main__':
    while (True):
        main()
        time.sleep(0.5)

