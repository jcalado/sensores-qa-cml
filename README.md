# Enviromental quality sensors - Câmara Municipal de Lisboa

## Demo
Live deployment is accessible here: https://jcalado.com/sensores-qa-cml

## Screenshot
![Screenshot](https://user-images.githubusercontent.com/26873/125344050-b9420d00-e34e-11eb-9f8c-e449889aa01a.jpeg)

## Features
- Search by Sensor name
- Search by Category name
- Search by Station
- Some sensors have colored tresholds in place: low, medium, high, danger, extreme
- Every column is sortable 

## Notes

Requests are proxied through http://allorigins.win/, since the original url (http://opendata-cml.qart.pt:8080/lastmeasurements) has CORS issues.

## Metadata info
There's some information about the API published here: http://dados.cm-lisboa.pt/dataset/e7f31452-7d21-4b26-9eb5-1db62737a12d/resource/d8837f32-1f7e-4a61-bb8a-a2333f822edb/download/metadadosdadosabertos.pdf
