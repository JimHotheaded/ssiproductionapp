//jshint esversion6

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const https = require('https');
// const http = require('http');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//connect to database ssiDB
// const url = "mongodb+srv://adminSSI:admin1234@cluster0.snsg3.mongodb.net/ssiDB?retryWrites=true&w=majority"
const local = 'mongodb://localhost:27017/test'
mongoose.connect(local, {useNewUrlParser: true, useUnifiedTopology: true});

// http.createServer(app).listen(80);
// https.createServer(option, app).listen(443);

//callback to show connection to database status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect to SSI/logs successfully");
});

//create schema
const machineLogSchema = new mongoose.Schema(
  {
    mName: {
      type: String,
    },
    status: {
      type: Boolean
    },
    pName: {
      type: String,
    },
    pValue: {
      type: Number,
    },
    pUnit: {
      type: String,
    }
  }, { timestamps: true }
  );

//compile schema to model
const log = mongoose.model('log', machineLogSchema);

//send home page file
app.get('/', function(req,res) {
  res.sendFile(__dirname + "/index.html")
});

app.get('/crushing', function(req,res) {
  res.sendFile(__dirname + "/form/crushing/crushing.html")
});

app.get('/fmcr14', function(req,res) {
  res.sendFile(__dirname + '/form/crushing/fmcr14.html')
});

app.get('/fmcsh02', function(req,res) {
  res.sendFile(__dirname + '/form/crushing/fmcsh02.html')
});

app.get('/fmcsh08', function(req,res) {
  res.sendFile(__dirname + '/form/crushing/fmcsh08.html')
});

app.get('/ballmill2', function(req,res) {
  res.sendFile(__dirname + "/form/ballmill2/ballmill2.html")
});

app.get('/fmbml03', function(req,res) {
  res.sendFile(__dirname + "/form/ballmill2/fmbml03.html")
});

app.get('/verticalmill', function(req,res) {
  res.sendFile(__dirname + "/form/verticalmill/verticalmill.html")
});
//verticalform
app.get('/fmvtm02', function(req,res) {
  res.sendFile(__dirname + "/form/verticalmill/fmvtm02.html")
});

app.get('/fmvtm03', function(req,res) {
  res.sendFile(__dirname + "/form/verticalmill/fmvtm03.html")
});

app.get('/coating', function(req,res) {
  res.sendFile(__dirname + "/form/coating/coating.html")
});
//coatingform
app.get('/fmct02', function(req,res) {
  res.sendFile(__dirname + "/form/coating/fmct02.html")
});

app.get('/fmct07', function(req,res) {
  res.sendFile(__dirname + "/form/coating/fmct07rev2.html")
});

app.get('/fmct11', function(req,res) {
  res.sendFile(__dirname + "/form/coating/fmct11rev3.html")
});

app.get('/raymondmill', function(req,res) {
  res.sendFile(__dirname + "/form/raymondmill/raymondmill.html")
});

app.get('/successfully_save', function(req,res) {
  res.sendFile(__dirname + "/form/successfully_save.html")
});

///////////////////////////////////////////////////////////////////////////////
////////////////////post///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

app.post('/fmvtm03', function(req,res) {
  function fmvtm03savetoDB() {
    let logvtm0300 = new log({
      mName: 'verticalMill',
      pName: 'rollerLevelNo1',
      pValue: Number(req.body.rollerLevelNo1),
      pUnit: '%'
    });
    logvtm0300.save();
    let logvtm0301 = new log({
      mName: 'verticalMill',
      pName: 'rollerLevelNo2',
      pValue: Number(req.body.rollerLevelNo2),
      pUnit: '%'
    });
    logvtm0301.save();
    let logvtm0302 = new log({
      mName: 'verticalMill',
      pName: 'rollerLevelNo3',
      pValue: Number(req.body.rollerLevelNo3),
      pUnit: '%'
    });
    logvtm0302.save();
    let logvtm0303 = new log({
      mName: 'verticalMill',
      pName: 'vibration',
      pValue: Number(req.body.vibration),
      pUnit: 'mm/s2'
    });
    logvtm0303.save();
    let logvtm0304 = new log({
      mName: 'verticalMill',
      pName: 'millMotorkW',
      pValue: Number(req.body.millMotorkW),
      pUnit: 'kW'
    });
    logvtm0304.save();
    let logvtm0305 = new log({
      mName: 'verticalMill',
      pName: 'millMotorAmp',
      pValue: Number(req.body.millMotorAmp),
      pUnit: 'A'
    });
    logvtm0305.save();
    let logvtm0306 = new log({
      mName: 'verticalMill',
      pName: 'millFanRpm',
      pValue: Number(req.body.millFanRpm),
      pUnit: 'rpm'
    });
    logvtm0306.save();
    let logvtm0307 = new log({
      mName: 'verticalMill',
      pName: 'millFanAmp',
      pValue: Number(req.body.millFanAmp),
      pUnit: 'A'
    });
    logvtm0307.save();
    let logvtm0308 = new log({
      mName: 'verticalMill',
      pName: 'separatorRpm',
      pValue: Number(req.body.separatorRpm),
      pUnit: 'rpm'
    });
    logvtm0308.save();
    let logvtm0309 = new log({
      mName: 'verticalMill',
      pName: 'separatorAmp',
      pValue: Number(req.body.separatorAmp),
      pUnit: 'A'
    });
    logvtm0309.save();
    let logvtm0310 = new log({
      mName: 'verticalMill',
      pName: 'feedRawMaterialTons',
      pValue: Number(req.body.feedRawMaterialTons),
      pUnit: 'tons'
    });
    logvtm0310.save();
    let logvtm0311 = new log({
      mName: 'verticalMill',
      pName: 'feedRawMaterialHz',
      pValue: Number(req.body.feedRawMaterialHz),
      pUnit: 'Hz'
    });
    logvtm0311.save();
    let logvtm0312 = new log({
      mName: 'verticalMill',
      pName: 'lubOilPressureP',
      pValue: Number(req.body.lubOilPressureP),
      pUnit: 'kgf/cm2'
    });
    logvtm0312.save();
    let logvtm0313 = new log({
      mName: 'verticalMill',
      pName: 'lubOilPressureF',
      pValue: Number(req.body.lubOilPressureF),
      pUnit: 'kgf/cm2'
    });
    logvtm0313.save();
    let logvtm0314 = new log({
      mName: 'verticalMill',
      pName: 'lubOilAlarmTemp',
      pValue: Number(req.body.lubOilAlarmTemp),
      pUnit: '*c'
    });
    logvtm0314.save();
    let logvtm0315 = new log({
      mName: 'verticalMill',
      pName: 'alarmThrustBearingTemp',
      pValue: Number(req.body.alarmHighSpeedTemp),
      pUnit: '*c'
    });
    logvtm0315.save();
    let logvtm0316 = new log({
      mName: 'verticalMill',
      pName: 'alarmHighSpeedTemp',
      pValue: Number(req.body.alarmHighSpeedTemp),
      pUnit: '*c'
    });
    logvtm0316.save();
    let logvtm0317 = new log({
      mName: 'verticalMill',
      pName: 'pumpPressure',
      pValue: Number(req.body.pumpPressure),
      pUnit: 'kgf/cm2'
    });
    logvtm0317.save();
    let logvtm0318 = new log({
      mName: 'verticalMill',
      pName: 'rollerPressure',
      pValue: Number(req.body.rollerPressure),
      pUnit: 'kgf/cm2'
    });
    logvtm0318.save();
    let logvtm0319 = new log({
      mName: 'verticalMill',
      pName: 'hydraulicOilTemp',
      pValue: Number(req.body.hydraulicOilTemp),
      pUnit: '*c'
    });
    logvtm0319.save();
    let logvtm0320 = new log({
      mName: 'verticalMill',
      pName: 'magnetClean',
      pValue: Number(req.body.magnetClean),
      pUnit: 'grams'
    });
    logvtm0320.save();
    let logvtm0321 = new log({
      mName: 'verticalMill',
      pName: 'dustMCheck',
      status: req.body.dustMCheck,
    });
    logvtm0321.save();
    let logvtm0322 = new log({
      mName: 'verticalMill',
      pName: 'dustCCheck',
      status: req.body.dustCCheck,
    });
    logvtm0322.save();
    let logvtm0323 = new log({
      mName: 'verticalMill',
      pName: 'dustBCheck',
      status: req.body.dustBCheck,
    });
    logvtm0323.save();

    res.sendFile(__dirname + '/form/successfully_save.html');
  };
  fmvtm03savetoDB();

});

app.post('fmvtm02', function(req,res) {
  function fmvtm02saveToDB() {
    let logvtm0201 = new log({
      mName: 'verticalMill',
      pName: '1stSEPSP2',
      pValue: Number(req.body.fmvtm021stSEPSP2),
      pUnit: 'Hz'
    });
    logvtm0201.save();
    let logvtm0202 = new log({
      mName: 'verticalMill',
      pName: '1stSEPSP3',
      pValue: Number(req.body.fmvtm021stSEPSP3),
      pUnit: 'Hz'
    });
    logvtm0202.save();
    let logvtm0203 = new log({
      mName: 'verticalMill',
      pName: '1stSEPSP4',
      pValue: Number(req.body.fmvtm021stSEP4),
      pUnit: 'Hz'
    });
    logvtm0203.save();
    let logvtm0204 = new log({
      mName: 'verticalMill',
      pName: '2ndSEPS1',
      pValue: Number(req.body.fmvtm022ndSEPS1),
      pUnit: 'Hz'
    });
    logvtm0204.save();
    let logvtm0205 = new log({
      mName: 'verticalMill',
      pName: '2ndSEPS2',
      pValue: Number(req.body.fmvtm022ndSEPS2),
      pUnit: 'Hz'
    });
    logvtm0205.save();
    let logvtm0206 = new log({
      mName: 'verticalMill',
      pName: '2ndSEPS3',
      pValue: Number(req.body.fmvtm022ndSEPS3),
      pUnit: 'Hz'
    });
    logvtm0206.save();
    let logvtm0207 = new log({
      mName: 'verticalMill',
      pName: '2ndSEPS4',
      pValue: Number(req.body.fmvtm022ndSEPS4),
      pUnit: 'Hz'
    });
    logvtm0207.save();
    let logvtm0208 = new log({
      mName: 'verticalMill',
      pName: 'fmvtm02screen301',
      pValue: Number(req.body.fmvtm02screen301),
      pUnit: 'Hz'
    });
    logvtm0208.save();
    let logvtm0209 = new log({
      mName: 'verticalMill',
      pName: 'fmvtm02screen302',
      pValue: Number(req.body.fmvtm02screen302),
      pUnit: 'Hz'
    });
    logvtm0209.save();
    let logvtm0210 = new log({
      mName: 'verticalMill',
      pName: 'fmvtm02additiveVM',
      pValue: Number(req.body.fmvtm02additiveVM),
      pUnit: 'Hz'
    });
    logvtm0210.save();
    let logvtm0211 = new log({
      mName: 'verticalMill',
      pName: 'fmvtm02RMsilo2',
      pValue: Number(req.body.fmvtm02RMsilo2),
      pUnit: 'Hz'
    });
    logvtm0211.save();
    let logvtm0212 = new log({
      mName: 'verticalMill',
      pName: 'fmvtm02RMsilo3',
      pValue: Number(req.body.fmvtm02RMsilo3),
      pUnit: 'Hz'
    });
    logvtm0212.save();
    let logvtm0213 = new log({
      mName: 'verticalMill',
      pName: 'fmvtm02RMsilo4',
      pValue: Number(req.body.fmvtm02RMsilo4),
      pUnit: 'Hz'
    });
    logvtm0213.save();

  res.sendFile(__dirname + "/form/successfully_save.html");
  };
  fmvtm02saveToDB();
});

app.post('/fmct02', function(req,res) {
  function fmct02saveToDB(){
    let logct0200 = new log({
      mName: 'coater6',
      pName: 'wattHourMeter',
      pValue: Number(req.body.fm02ct6wattHourMeter),
      pUnit: 'kWh'
    });
    // let logct0201 = new log({
    //   mName: 'coater6',
    //   pName: 'stearicAcidFlowRate',
    //   pValue: Number(req.body.fm02ct6stearicAcidFlowRate),
    //   pUnit: 'l/hr'
    // });
    // let logct0202 = new log({
    //   mName: 'coater6',
    //   pName: 'stearicAcidFeedPump',
    //   pValue: Number(req.body.fm02ct6stearicAcidFeedPump),
    //   pUnit: '%'
    // });
    // let logct0203 = new log({
    //   mName: 'coater6',
    //   pName: 'stearicAcidTankTemp',
    //   pValue: Number(req.body.fm02ct6stearicAcidTankTemp),
    //   pUnit: '*c'
    // });
    // let logct0204 = new log({
    //   mName: 'coater6',
    //   pName: 'stearicAcidPipeTempNo1',
    //   pValue: Number(req.body.fm02ct6stearicAcidPipeTempNo1),
    //   pUnit: '*c'
    // });
    // let logct0205 = new log({
    //   mName: 'coater6',
    //   pName: 'stearicAcidPipeTempNo3',
    //   pValue: Number(req.body.fm02ct6stearicAcidPipeTempNo3),
    //   pUnit: '*c'
    // });
    // let logct0206 = new log({
    //   mName: 'coater6',
    //   pName: 'stearicAcidPipeTempNo6',
    //   pValue: Number(req.body.fm02ct6stearicAcidPipeTempNo6),
    //   pUnit: '*c'
    // });
    let logct0207 = new log({
      mName: 'coater6',
      pName: 'coaterCurrentM1',
      pValue: Number(req.body.fm02ct6coaterCurrentM1),
      pUnit: 'A'
    });
    let logct0208 = new log({
      mName: 'coater6',
      pName: 'coaterCurrentM2',
      pValue: Number(req.body.fm02ct6coaterCurrentM2),
      pUnit: 'A'
    });
    let logct0209 = new log({
      mName: 'coater6',
      pName: 'hotOilTankTemp',
      pValue: Number(req.body.fm02ct6hotOilTankTemp),
      pUnit: '*c'
    });
    let logct0210 = new log({
      mName: 'coater6',
      pName: 'airFlowHeaterTemp',
      pValue: Number(req.body.fm02ct6airFlowHeaterTemp),
      pUnit: '*c'
    });
    let logct0211 = new log({
      mName: 'coater6',
      pName: 'rootBlowerCurrent',
      pValue: Number(req.body.fm02ct6rootBlowerCurrent),
      pUnit: 'A'
    });
    // let logct0212 = new log({
    //   mName: 'coater6',
    //   pName: 'rawMaterialFeedFlowRate',
    //   pValue: Number(req.body.fm02ct6rawMaterialFeedFlowRate),
    //   pUnit: 'kg/hr'
    // });
    let logct0213 = new log({
      mName: 'coater6',
      pName: 'mixerPipeTemp',
      pValue: Number(req.body.fm02ct6mixerPipeTemp),
      pUnit: '*c'
    });
    let logct0214 = new log({
      mName: 'coater6',
      pName: 'pressure',
      pValue: Number(req.body.fm02ct6pressure),
      pUnit: 'bar'
    });
    let logct0215 = new log({
      mName: 'coater6',
      pName:'magnetClean',
      pValue: Number(req.body.fm02ct6magnetCleanCheck),
      pUnit: 'grams'
    });
    // let logct0216
    // let logct0217
    // let logct0218
    let logct0219 = new log({
      mName: 'coater6',
      pName: 'levelSilo17',
      pValue: Number(req.body.fm02ct6levelSilo17),
      pUnit: '%'
    });
    let logct0220 = new log({
      mName: 'coater6',
      pName: 'levelSilo21',
      pValue: Number(req.body.fm02ct6levelSilo21),
      pUnit: '%'
    });
    let logct0221 = new log({
      mName: 'coater6',
      pName: 'levelSilo22',
      pValue: Number(req.body.fm02ct6levelSilo22),
      pUnit: '%'
    });
    let logct0222 = new log({
      mName: 'coater6',
      pName: 'levelSilo23',
      pValue: Number(req.body.fm02ct6levelSilo23),
      pUnit: '%'
    });
  logct0200.save();
  // logct0201.save();
  // logct0202.save();
  // logct0203.save();
  // logct0204.save();
  // logct0205.save();
  // logct0206.save();
  logct0207.save();
  logct0208.save();
  logct0209.save();
  logct0210.save();
  logct0211.save();
  // logct0212.save();
  logct0213.save();
  logct0214.save();
  logct0215.save();
  // logct0216.save();
  // logct0217.save();
  // logct0218.save();
  logct0219.save();
  logct0220.save();
  logct0221.save();
  logct0222.save();

  res.sendFile(__dirname + "/form/successfully_save.html");
  };
  fmct02saveToDB();
});

app.post('/fmct07', function(req,res) {
  function fmct07saveToDB(){
    // let logct0700 = new log({
    //   mName: 'coater1',
    //   pName: 'hotOiltemp',
    //   pValue: Number(req.body.fm07ct1hotOilTemp),
    //   pUnit: '*c'
    // });
    // let logct0701 = new log({
    //   mName: 'coater1',
    //   pName: 'mixerPipeTemp',
    //   pValue: Number(req.body.fm07ct1mixerPipeTemp),
    //   pUnit: '*c'
    // });
    // let logct0702 = new log({
    //   mName: 'coater1',
    //   pName: 'screwPremixTemp',
    //   pValue: Number(req.body.fm07ct1screwPremixTemp),
    //   pUnit: '*c'
    // });
    // let logct0703 = new log({
    //   mName: 'coater1',
    //   pName: 'stearicFlow',
    //   pValue: Number(req.body.fm07ct1stearicFlow),
    //   pUnit: 'l/hr'
    // });
    // let logct0704 = new log({
    //   mName: 'coater1',
    //   pName: 'stearicPump',
    //   pValue: Number(req.body.fm07ct1stearicPump),
    //   pUnit: 'bar'
    // });
    // let logct0705 = new log({
    //   mName: 'coater1',
    //   pName: 'powderFlow',
    //   pValue: Number(req.body.fm07ct1powderFlow),
    //   pUnit: 'l/hr'
    // });
    // let logct0706 = new log({
    //   mName: 'coater1',
    //   pName: 'powderFeed',
    //   pValue: Number(req.body.fm07ct1powderFeed),
    //   pUnit: '*c'
    // });
    // let logct0707 = new log({
    //   mName: 'coater2',
    //   pName: 'hotOilTemp',
    //   pValue: Number(req.body.fm07ct2hotOilTemp),
    //   pUnit: '*c'
    // });
    // let logct0708 = new log({
    //   mName: 'coater2',
    //   pName: 'mixerPipeTemp',
    //   pValue: Number(req.body.fm07ct2hotOilTemp),
    //   pUnit: '*c'
    // });
    // let logct0709 = new log({
    //   mName: 'coater2',
    //   pName: 'screwPremixTemp',
    //   pValue: Number(req.body.fm07ct2screwPremixTemp),
    //   pUnit: '*c'
    // });
    // let logct0710 = new log({
    //   mName: 'coater2',
    //   pName: 'stearicFlow',
    //   pValue: Number(req.body.fm07ct2stearicFlow),
    //   pUnit: 'l/hr'
    // });
    // let logct0711 = new log({
    //   mName: 'coater2',
    //   pName: 'stearicPump',
    //   pValue: Number(req.body.fm07ct2stearicPump),
    //   pUnit: 'bar'
    // });
    // let logct0712 = new log({
    //   mName: 'coater2',
    //   pName: 'powderFlow',
    //   pValue: Number(req.body.fm07ct2powderFlow),
    //   pUnit: 'l/hr'
    // });
    // let logct0713 = new log({
    //   mName: 'coater2',
    //   pName: 'powderFeed',
    //   pValue: Number(req.body.fm07ct2powderFeed),
    //   pUnit: '*c'
    // });
    // let logct0714 = new log({
    //   mName: 'coater3',
    //   pName: 'hotOilTemp',
    //   pValue: Number(req.body.fm07ct3hotOilTemp),
    //   pUnit: '*c'
    // });
    // let logct0715 = new log({
    //   mName: 'coater3',
    //   pName: 'mixerPipeTemp',
    //   pValue: Number(req.body.fm07ct3hotOilTemp),
    //   pUnit: '*c'
    // });
    // let logct0716 = new log({
    //   mName: 'coater3',
    //   pName: 'screwPremixTemp',
    //   pValue: Number(req.body.fm07ct3screwPremixTemp),
    //   pUnit: '*c'
    // });
    // let logct0717 = new log({
    //   mName: 'coater3',
    //   pName: 'stearicFlow',
    //   pValue: Number(req.body.fm07ct3stearicFlow),
    //   pUnit: 'l/hr'
    // });
    // let logct0718 = new log({
    //   mName: 'coater3',
    //   pName: 'stearicPump',
    //   pValue: Number(req.body.fm07ct3stearicPump),
    //   pUnit: 'bar'
    // });
    // let logct0719 = new log({
    //   mName: 'coater3',
    //   pName: 'powderFlow',
    //   pValue: Number(req.body.fm07ct3powderFlow),
    //   pUnit: 'l/hr'
    // });
    // let logct0720 = new log({
    //   mName: 'coater3',
    //   pName: 'powderFeed',
    //   pValue: Number(req.body.fm07ct3powderFeed),
    //   pUnit: '*c'
    // });
    // let logct0721 = new log({
    //   mName: 'coater4',
    //   pName: 'hotOilTemp',
    //   pValue: Number(req.body.fm07ct4hotOilTemp),
    //   pUnit: '*c'
    // });
    // let logct0722 = new log({
    //   mName: 'coater4',
    //   pName: 'mixerPipeTemp',
    //   pValue: Number(req.body.fm07ct4hotOilTemp),
    //   pUnit: '*c'
    // });
    // let logct0723 = new log({
    //   mName: 'coater4',
    //   pName: 'screwPremixTemp',
    //   pValue: Number(req.body.fm07ct4screwPremixTemp),
    //   pUnit: '*c'
    // });
    // // let logct0724 = new log({
    // //   mName: 'coater4',
    // //   pName: 'stearicFlow',
    // //   pValue: Number(req.body.fm07ct4stearicFlow),
    // //   pUnit: 'l/hr'
    // // });
    // let logct0725 = new log({
    //   mName: 'coater4',
    //   pName: 'stearicPump',
    //   pValue: Number(req.body.fm07ct4stearicPump),
    //   pUnit: 'bar'
    // });
    // let logct0726 = new log({
    //   mName: 'coater4',
    //   pName: 'powderFlow',
    //   pValue: Number(req.body.fm07ct4powderFlow),
    //   pUnit: 'l/hr'
    // });
    // let logct0727 = new log({
    //   mName: 'coater4',
    //   pName: 'powderFeed',
    //   pValue: Number(req.body.fm07ct4powderFeed),
    //   pUnit: '*c'
    // });
    let logct0728 = new log({
      mName: 'coater5',
      pName: 'hotOiltemp',
      pValue: Number(req.body.fm07ct5hotOilTemp),
      pUnit: '*c'
    });
    let logct0729 = new log({
      mName: 'coater5',
      pName: 'mixerPipeTemp',
      pValue: Number(req.body.fm07ct5mixerPipeTemp),
      pUnit: '*c'
    });
    let logct0730 = new log({
      mName: 'coater5',
      pName: 'screwPremixTemp',
      pValue: Number(req.body.fm07ct5screwPremixTemp),
      pUnit: '*c'
    });
    let logct0731 = new log({
      mName: 'coater5',
      pName: 'stearicFlow',
      status: req.body.fm07ct5stearicFlow,
    });
    let logct0732 = new log({
      mName: 'coater5',
      pName: 'stearicPump',
      pValue: Number(req.body.fm07ct5stearicPump),
      pUnit: 'bar'
    });
    let logct0733 = new log({
      mName: 'coater5',
      pName: 'powderFlow',
      status: req.body.fm07ct5powderFlow,
    });
    let logct0734 = new log({
      mName: 'coater5',
      pName: 'powderFeed',
      pValue: Number(req.body.fm07ct5powderFeed),
      pUnit: '*c'
    });
    let logct0735 = new log({
      mName: 'coater5',
      pName: 'magnetClean',
      pValue: Number(req.body.fm07ct5magnetClean),
      pUnit: 'grams'
    });
    let logct0736 = new log({
      mName: 'coater5',
      pName: 'dustMCheck',
      status: req.body.fm07ct1t5dustMachingCheck,
    });
    let logct0737 = new log({
      mName: 'coater5',
      pName: 'dustCCheck',
      status: req.body.fm07ct1t5dustConveyorCheck,
    });
    let logct0738 = new log({
      mName: 'coater5',
      pName: 'dustBCheck',
      status: req.body.fm07ct1t5dustBagfilterCheck,
    });
    let logct0739 = new log({
      mName: 'coater5',
      pName: 'productCheck',
      status: req.body.fm07ct5productCheck,
    });
  // logct0700.save();
  // logct0701.save();
  // logct0702.save();
  // logct0703.save();
  // logct0704.save();
  // logct0705.save();
  // logct0706.save();
  // logct0707.save();
  // logct0708.save();
  // logct0709.save();
  // logct0710.save();
  // logct0711.save();
  // logct0712.save();
  // logct0713.save();
  // logct0714.save();
  // logct0715.save();
  // logct0716.save();
  // logct0717.save();
  // logct0718.save();
  // logct0719.save();
  // logct0720.save();
  // logct0721.save();
  // logct0722.save();
  // logct0723.save();
  // logct0724.save();
  // logct0725.save();
  // logct0726.save();
  // logct0727.save();
  logct0728.save();
  logct0729.save();
  logct0730.save();
  logct0731.save();
  logct0732.save();
  logct0733.save();
  logct0734.save();
  logct0735.save();
  logct0736.save();
  logct0737.save();
  logct0738.save();
  logct0739.save();

  res.sendFile(__dirname + "/form/successfully_save.html");
  };
  fmct07saveToDB();
});

app.post('/fmct11', function(req,res) {
  function fmct11savetoDB() {
    let logct1100 = new log({
      mName: 'coater7',
      pName: 'wattHourMeter',
      pValue: Number(req.body.fm11ct7wattHourMeter),
      pUnit: 'kWh'
    });
    // let logct1101 = new log({
    //   mName: 'coater7',
    //   pName: 'weightOfMelting',
    //   pValue: Number(req.body.fm11ct7weightOfMelting),
    //   pUnit: 'kg'
    // });
    // let logct1102 = new log({
    //   mName: 'coater7',
    //   pName: 'coatingGrade',
    //   pValue: Number(req.body.fm11ct7coatingGrade),
    //   pUnit: '%'
    // });
    // let logct1103 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureAtBinBottom',
    //   pValue: Number(req.body.fm11ct7temperatureAtBinBottom),
    //   pUnit: '*c'
    // });
    // let logct1104 = new log({
    //   mName: 'coater7',
    //   pName: 'speedStearinePump',
    //   pValue: Number(req.body.fm11ct7speedStearinePump),
    //   pUnit: '1/min'
    // });
    // let logct1105 = new log({
    //   mName: 'coater7',
    //   pName: 'currentMainSystemFan',
    //   pValue: Number(req.body.fm11ct7currentMainSystemFan),
    //   pUnit: 'A'
    // });
    // let logct1106 = new log({
    //   mName: 'coater7',
    //   pName: 'thrughputDosingScrew',
    //   pValue: Number(req.body.fm11ct7thrughputDosingScrew),
    //   pUnit: 'kg/h'
    // });
    // let logct1107 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureCircuitAir',
    //   pValue: Number(req.body.fm11ct7temperatureCircuitAir),
    //   pUnit: '*c'
    // });
    // let logct1108 = new log({
    //   mName: 'coater7',
    //   pName: 'thrughputStearine',
    //   pValue: Number(req.body.fm11ct7thrughputStearine),
    //   pUnit: 'kg/h'
    // });
    // let logct1109 = new log({
    //   mName: 'coater7',
    //   pName: 'currentMillHousingSide',
    //   pValue: Number(req.body.fm11ct7currentMillHousingSide),
    //   pUnit: 'A'
    // });
    // let logct1110 = new log({
    //   mName: 'coater7',
    //   pName: 'currentMillDoorSide',
    //   pValue: Number(req.body.fm11ct7currentMillDoorSide),
    //   pUnit: 'A'
    // });
    // let logct1111 = new log({
    //   mName: 'coater7',
    //   pName: 'deltePressureAtFilter',
    //   pValue: Number(req.body.fm11ct7deltePressureAtFilter),
    //   pUnit: 'mbar'
    // });
    // let logct1112 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureMeltingBin',
    //   pValue: Number(req.body.fm11ct7temperatureMeltingBin),
    //   pUnit: '*c'
    // });
    // let logct1113 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureHoseToPump',
    //   pValue: Number(req.body.fm11ct7temperatureHoseToPump),
    //   pUnit: '*c'
    // });
    // let logct1114 = new log({
    //   mName: 'coater7',
    //   pName: 'temperaturePump',
    //   pValue: Number(req.body.fm11ct7temperaturePump),
    //   pUnit: '*c'
    // });
    // let logct1115 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureHoseToFlowMeter',
    //   pValue: Number(req.body.fm11ct7temperatureHoseToFlowMeter),
    //   pUnit: '*c'
    // });
    // let logct1116 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureFlowMeter',
    //   pValue: Number(req.body.fm11ct7temperatureFlowMeter),
    //   pUnit: '*c'
    // });
    // let logct1117 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureHoseToNozzle',
    //   pValue: Number(req.body.fm11ct7temperatureHoseToNozzle),
    //   pUnit: '*c'
    // });
    // let logct1118 = new log({
    //   mName: 'coater7',
    //   pName: 'temperatureNozzle',
    //   pValue: Number(req.body.fm11ct7temperatureNozzle),
    //   pUnit: '*c'
    // });
    // let logct1119 = new log({
    //   mName: 'coater7',
    //   pName: 'heaterForSprayAir',
    //   pValue: Number(req.body.fm11ct7heaterForSprayAir),
    //   pUnit: '*c'
    // });
    // let logct1120 = new log({
    //   mName: 'coater7',
    //   pName: 'averageVoltage',
    //   pValue: Number(req.body.fm11ct7averageVoltage),
    //   pUnit: 'VAC'
    // });
    // let logct1121 = new log({
    //   mName: 'coater7',
    //   pName: 'averageCurrent',
    //   pValue: Number(req.body.fm11ct7averageCurrent),
    //   pUnit: 'A'
    // });
    // let logct1122 = new log({
    //   mName: 'coater7',
    //   pName: 'totalActivePower',
    //   pValue: Number(req.body.fm11ct7totalActivePower),
    //   pUnit: 'kW'
    // });
    let logct1123 = new log({
      mName: 'coater7',
      pName: 'magnetClean',
      pValue: Number(req.body.fm11ct7magnetCleanCheck),
      pUnit: 'grams'
    });
    let logct1124 = new log({
      mName: 'coater7',
      pName: 'dustMachineStatus',
      status: req.body.fm11ct7dustMachine,
    });
    let logct1125 = new log({
      mName: 'coater7',
      pName: 'dustConveyorStatus',
      status: req.body.fm11ct7dustConveyor,
    })
    let logct1126 = new log({
      mName: 'coater7',
      pName: 'bagFilterStatus',
      status: req.body.fm11ct7dustBagFilter,
    });
    let logct1127 = new log({
      mName: 'coater7',
      pName: 'levelCheckSilo31',
      pValue: Number(req.body.fm11ct7levelCheckSilo31),
      pUnit: '%',
    });
    let logct1128 = new log({
      mName: 'coater7',
      pName: 'levelCheckSilo32',
      pValue: Number(req.body.fm11ct7levelCheckSilo32),
      pUnit: '%',
    });
    let logct1129 = new log({
      mName: 'coater7',
      pName: 'levelCheckSilo33',
      pValue: Number(req.body.fm11ct7levelCheckSilo33),
      pUnit: '%',
    });
    let logct1130 = new log({
      mName: 'coater7',
      pName: 'productCheck',
      status: req.body.fm11ct7productCheck,
    });

    logct1100.save();
    // logct1101.save();
    // logct1102.save();
    // logct1103.save();
    // logct1104.save();
    // logct1105.save();
    // logct1106.save();
    // logct1107.save();
    // logct1108.save();
    // logct1109.save();
    // logct1110.save();
    // logct1111.save();
    // logct1112.save();
    // logct1113.save();
    // logct1114.save();
    // logct1115.save();
    // logct1116.save();
    // logct1117.save();
    // logct1118.save();
    // logct1119.save();
    // logct1120.save();
    // logct1121.save();
    // logct1122.save();
    logct1123.save();
    logct1124.save();
    logct1125.save();
    logct1126.save();
    logct1127.save();
    logct1128.save();
    logct1129.save();
    logct1130.save();

  res.sendFile(__dirname + "/form/successfully_save.html");
  };
  fmct11savetoDB();
});

app.post('/fmbml03', function(req,res) {
  function fmbml03savetoDB() {
    let logbml0315 = new log({
      mName: 'ballMill2',
      pName: 'tableBearingTempBefore',
      pValue: Number(req.body.tableBeaingTempBefore),
      pUnit: '*c'
    });
    logbml0315.save();
    let logbml0316 = new log({
      mName: 'ballMill2',
      pName: 'tableBearingTempAfter',
      pValue: Number(req.body.tableBearingTempAfter),
      pUnit: '*c'
    });
    logbml0316.save();
    let logbml0317 = new log({
      mName: 'ballMill2',
      pName: 'gearOilTemp',
      pValue: Number(req.body.gearOilTemp),
      pUnit: '*c'
    });
    logbml0317.save();
    let logbml0318 = new log({
      mName: 'ballMill2',
      pName: 'waterTempTubeIn',
      pValue: Number(req.body.waterTempTubeIn),
      pUnit: '*c'
    });
    logbml0318.save();
    let logbml0319 = new log({
      mName: 'ballMill2',
      pName: 'waterTempTubeOut',
      pValue: Number(req.body.waterTempTubeOut),
      pUnit: '*c'
    });
    logbml0319.save();
    let logbml0320 = new log({
      mName: 'ballMill2',
      pName: 'lubOilPressure',
      pValue: Number(req.body.lubOilPressure),
      pUnit: 'Mpa'
    });
    logbml0320.save();
    let logbml0321 = new log({
      mName: 'ballMill2',
      pName: 'additive',
      pValue: Number(req.body.additive),
      pUnit: 'Hz'
    });
    logbml0321.save();
    let logbml0322 = new log({
      mName: 'ballMill2',
      pName: 'degLevel',
      pValue: Number(req.body.degLevel),
      pUnit: 'unit'
    });
    logbml0322.save();
    let logbml0323 = new log({
      mName: 'ballMill2',
      pName: 'magnetCheck',
      status: req.body.magnetCheck,
    });
    logbml0323.save();
    let logbml0324 = new log({
      mName: 'ballMill2',
      pName: 'dustMCheck',
      status: req.body.dustMCheck,
    });
    logbml0324.save();
    let logbml0325 = new log({
      mName: 'ballMill2',
      pName: 'dustCCheck',
      status: req.body.dustCCheck,
    });
    logbml032735.save();
    let logbml0326 = new log({
      mName: 'ballMill2',
      pName: 'dustBCheck',
      status: req.body.dustBCheck,
    });
    logbml0326.save();
    let logbml032703 = new log({
      mName: 'ballMill2',
      pName: 'silo3Level',
      pValue: Number(req.body.silo3Level),
      pUnit: 'unit'
    });
    logbml032703.save();
    let logbml032704 = new log({
      mName: 'ballMill2',
      pName: 'silo4Level',
      pValue: Number(req.body.silo4Level),
      pUnit: 'unit'
    });
    logbml032704.save();
    let logbml032734 = new log({
      mName: 'ballMill2',
      pName: 'silo34Level',
      pValue: Number(req.body.silo34Level),
      pUnit: 'unit'
    });
    logbml032734.save();
    let logbml032735 = new log({
      mName: 'ballMill2',
      pName: 'silo35Level',
      pValue: Number(req.body.silo35Level),
      pUnit: 'unit'
    });
    logbml032735.save();
    let logbml032736 = new log({
      mName: 'ballMill2',
      pName: 'silo36Level',
      pValue: Number(req.body.silo36Level),
      pUnit: 'unit'
    });
    logbml032736.save();
  };
  fmbml03savetoDB();
});
//log status server to console
app.listen(3000, function() {
  console.log('server start at port 3000');
});
