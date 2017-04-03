﻿//
// Dynamsoft JavaScript Library for Basic Initiation of Dynamic Web TWAIN
// More info on DWT: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
//
// Copyright 2016, Dynamsoft Corporation 
// Author: Dynamsoft Team
// Version: 12.1
//
/// <reference path="dynamsoft.webtwain.initiate.js" />
var Dynamsoft = Dynamsoft || { WebTwainEnv: {} };

Dynamsoft.WebTwainEnv.AutoLoad = true;
///
Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer', Width:505, Height:600}];
///
//Dynamsoft.WebTwainEnv.ProductKey = '72054933C5A4C4419DFB9B4367FF963FDCFCB9FB2D2A342DC421154E2B72D98AD680886B61BB2405D87AAA94D9E008DE77F3CCB3934CB5C798F8B5662EEAD55B06923114DEAE01A023393E497BC10EC420C36296764AB0F541B4B4A8409EC95C100AAC01D0536387AF204235B43D22375B675A62FABAE54771891FB179BA15874084965A99B60E51C84DA466F031FF8BF0DB547ED2C39C533DD69662DC8BC48034D8642C80B3504DD526A191F0474204CEF2C425EB8957803BF23CE5379411E75D14F026B71BCE8905F8E086EB43640C1AE81F6FAF49EA7FE077E77D62B73EBE652476CB34E5FFFDD8F9673A690D1B27271F8F5AD83D97132BF9925CDC1FEBF986860DA09FC632A685255692BCEEF108EE40ECDEBE72B9DAECE2CF162417ADC15DDE51E96139ACE55B6F4B7C813B62682F882563193F82095DE842CD203D908E740797F090B9612DEBF145C745E91ACFC0A007D62BAD520F60E259903ECEF0D504A8763D48989250D12188C9ECC79B341C4CBE69DC0EB585154E8131EA9AB5343C013A0E04BEEC9B62C83DB470E977B2C64946D907B24AD50D97135985F8796EC6C48F2B430710BDA0D90F74CDF7920C9F8708BCA9176C456C613D529E97657899';
Dynamsoft.WebTwainEnv.ProductKey = '5390B7719CD0B77DE6C52491F9292196BBB7028112E46BCA69206384AF1F4AE3C22D260E94E9AA499E65810332E87F8F58B8F8D946609918FA61F442EB6A15444C4E1DF0F8AFB37931A9C5E091BC208576508DD090DD24BDD078174BF753A3B65804F20620C657A85D0383CF13ED90EF27AB21985D44DB19ADB54D225FE4D66716093DEE23D7BC6F939C825DF47E1EBB6249F94C38F2FF5B23128B7D6A2D318C9FBC6327DC779413B2999B2FF145C00DBE984C8F90A710BDBA9EBC8B71BE82D1B24093F1E1D602DF5150AA6115D70435B3FA90C283C38F8FA08393F25AB7F2D3CC14FCDAC27540B8A7A25D4EED32FC3821340ECCF34356FCE2B34DC5BE79604A45917756FAE1732CE1F47399DB118992B071260F1539217439ACC44415C7DACE2F010CED112BCCC2FA5457691A23B828E24B430B34910759638E1BC04439BE701AED468CFA2A33C7DB881E7C4D744C97CCA2E4C0F9427F8F374499DBC8F051C6B4667CF5B0B615B2B399470D451A67B01EAE0083215089A1EFC779EF48FD8ED7086CC987ECCBDFAACA1C21E30D2C87364FE698F56BCC89F01FA17356D48594CA38E54C2CD14A449A4FDACE8E99';

///
Dynamsoft.WebTwainEnv.Trial = true;
///
Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB = false;
///
// Dynamsoft.WebTwainEnv.ResourcesPath = 'Resources';

/// All callbacks are defined in the dynamsoft.webtwain.install.js file, you can customize them.

// Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function(){
// 		// webtwain has been inited
// });

