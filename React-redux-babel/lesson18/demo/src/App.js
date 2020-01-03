import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      byte: ''
  };
    this.handle = this.handle.bind(this);
  }
  handle(){
    const traslado = {
      "meta": {
        "idCreator": "string",
        "nameCreator": "string",
        "timestampCreation": 0,
        "idOfModifier": "string",
        "nameOfModifier": "string",
        "timestampOfModifier": 0,
        "activeRecord": true,
        "lastActionApplied": "string",
        "numbersOfChangesApplied": 0
      },
      "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "idResource": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "folio":1,
      "request": 4,
      "emitter": {
        "cv": "string",
        "name": "BSC-Banco de Sangre Central",
        "address": "1 COL:2, 3, Aguascalientes"
      },
      "receiver": {
        "cv": "string",
        "name": "HOSPITAL DE ZONA LA PAZ 014",
        "address": "COL CENTRO CP 45520 GUADALAJARA JAL."
      },
      "responsible": "Medina Rosa, Miguel Gerardo",
      "containerName": "string",
      "dateRequest": "2019-12-05T23:40:21.590Z",
      "movimientos": {
        "dateWork": "12/12/2019",
        "dateSend": "2019-12-05T23:40:21.590Z",
        "dateReceived": "2019-12-05T23:40:21.590Z",
        "dateClosed": "2019-12-05T23:40:21.590Z",
        "nameClose": "string"
      },
      "hemocomponentes": [
        {
          "banco": "string",
          "solicitud": "string",
          "tipoDonacion": "string",
          "hemocomponente": "CE",
          "unidad": "19000027",
          "gpoSanguineo": "AB POSITIVO",
          "fechaExtraccion": "10/07/2019",
          "fechaCaducidad": "10/07/2019"
        },
     {
          "banco": "string",
          "solicitud": "string",
          "tipoDonacion": "string",
          "hemocomponente": "CE",
          "unidad": "190000024",
          "gpoSanguineo": "A1 POSITIVO",
          "fechaExtraccion": "10/07/2019",
          "fechaCaducidad": "10/07/2019"
        },
     {
          "banco": "string",
          "solicitud": "string",
          "tipoDonacion": "string",
          "hemocomponente": "CP",
          "unidad": "19000027",
          "gpoSanguineo": "AB POSITIVO",
          "fechaExtraccion": "10/07/2019",
          "fechaCaducidad": "10/06/2019"
        },
     {
          "banco": "string",
          "solicitud": "string",
          "tipoDonacion": "string",
          "hemocomponente": "PF",
          "unidad": "19000027",
          "gpoSanguineo": "AB POSITIVO",
          "fechaExtraccion": "10/07/2019",
          "fechaCaducidad": "10/05/2019"
        }
      ],
      "measurements": [
        {
          "latitude": 0,
          "longitude": 0,
          "dateTime": "2019-12-05T23:40:21.590Z",
          "temperature": {
            "value": 0,
            "unit": "string"
          },
          "interpretation": 0
        }
      ],
      "measurementsReport": [
        {
          "parameterName": {
            "text": "string"
          },
          "parameter": {
            "value": 0,
            "unit": "string"
          },
          "interpretation": 0
        }
      ]
    }

    console.log(traslado);
    axios.post(`http://192.168.103.2/api/traslados/gen`, traslado).
    then(
      res => {
        console.log('traslado',res.data);
        this.setState({
          byte:res.data
        });
        
      }
    ).catch(error =>{
    console.log(error)
    })

  }
  render() {
    return (
      <div style={{width:'100%',height:'1000px'}}>
        <button onClick={this.handle}> + </button>
        <div style={{width:'100%',height:'100%'}}>{this.state.byte  !== ''  ? (
          <div style={{width:'100%',height:'100%'}}>
          <object 
          style={{width:'100%',height:'100%'}}          
          type="application/pdf" 
        data={'data:application/pdf;base64,'+this.state.byte}></object>
          </div>
        ): false} </div>
      </div>
    );
  }
}

export default App;
