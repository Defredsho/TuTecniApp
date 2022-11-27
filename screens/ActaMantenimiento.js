import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';


const ActaMantenimiento = () => {

	let [portatil, setPortatil] = useState("");
	let [desktop, setDesktop] = useState("");
	let [ligero, setLigero] = useState("");
	let [servidor, setServidor] = useState("");
	let [marca, setMarca] = useState("");
	let [modelo, setModelo] = useState("");
	let [inventario, setInventario] = useState("");
	let [area, setArea] = useState("");
	let [usuario, setUsuario] = useState("");
	let [fecha, setFecha] = useState("");
	let [monitor, setMonitor] = useState("");
	let [mouse, setMouse] = useState("");
	let [teclado, setTeclado] = useState("");
	let [otro, setOtro] = useState("");
	let [estadoMonitor, setEstadoMonitor] = useState("");
	let [estadoMouse, setEstadoMouse] = useState("");
	let [estadoTeclado, setEstadoTeclado] = useState("");
	let [estadoOtro, setEstadoOtro] = useState("");
	let [observacionMonitor, setObservacionMonitor] = useState("");
	let [observacionMouse, setObservacionMouse] = useState("");
	let [observacionTeclado, setObservacionTeclado] = useState("");
	let [observacionOtro, setObservacionOtro] = useState("");
	let [unoSi, setUnoSi] = useState("");
	let [unoNo, setUnoNo] = useState("");
	let [dosSi, setDosSi] = useState("");
	let [dosNo, setDosNo] = useState("");
	let [tresSi, setTresSi] = useState("");
	let [tresNo, setTresNo] = useState("");
	let [cuatroSi, setCuatroSi] = useState("");
	let [cuatroNo, setCuatroNo] = useState("");
	let [cincoSi, setCincoSi] = useState("");
	let [cincoNo, setCincoNo] = useState("");
	let [seisSi, setSeisSi] = useState("");
	let [seisNo, setSeisNo] = useState("");
	let [sistemaOperativo, setSistemaOperativo] = useState("");
	let [operativoSi, setOperativoSi] = useState("");
	let [operativoNo, setOperativoNo] = useState("");
	let [imagen, setImagen] = useState("");
	let [imagenSi, setImagenSi] = useState("");
	let [imagenNo, setImagenNo] = useState("");
	let [antivirusSi, setAntivirusSi] = useState("");
	let [antivirusNo, setAntivirusNo] = useState("");
	let [cual, setCual] = useState("");
	let [antivirusActSi, setAntivirusActSi] = useState("");
	let [antivirusActNo, setAntivirusActNo] = useState("");
	let [antivirusFunSi, setAntivirusFunSi] = useState("");
	let [antivirusFunNo, setAntivirusFunNo] = useState("");
	let [ofimatica, setOfimatica] = useState("");
	let [ofimaticaActSi, setOfimaticaActSi] = useState("");
	let [ofimaticaActNo, setOfimaticaActNo] = useState("");
	let [ofimaticaFunSi, setOfimaticaFunSi] = useState("");
	let [ofimaticaFunNo, setOfimaticaFunNo] = useState("");
	let [escritorioSi, setEscritorioSi] = useState("");
	let [escritorioNo, setEscritorioNo] = useState("");
	let [solidedge, setSolidEdge] = useState("");
	let [mastercam, setMastercam] = useState("");
	let [cimco, setCimco] = useState("");


	const html = `
		<html>
			<body>
				<p style='margin:0cm;margin-bottom:2.2pt;font-size:12px;font-family:"Arial",sans-serif;margin-top:2.8pt;margin-right:157.9pt;margin-left:162.95pt;text-align:center;'>Impreso este documento se considera COPIA NO CONTROLADA</p>
<table style="margin-left: 7.9pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td colspan="2" rowspan="3" style="width: 153.8pt;border-width: 2.25pt 1pt 2.25pt 2.25pt;border-style: solid solid double;border-color: black;padding: 0cm;height: 10.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.25pt;'><span style='font-size:8px;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:21.75pt;'><span style='font-size:13px;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
            </td>
            <td colspan="4" rowspan="3" style="width: 292.2pt;border-top: 2.25pt solid black;border-left: none;border-bottom: 2.25pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:7.0pt;margin-right:59.8pt;margin-left:67.55pt;text-indent:-2.8pt;line-height:117%;'><strong><span style="font-size:15px;line-height:117%;">INFORME DE MANTENIMIENTO PARA EQUIPOS DE C&Oacute;MPUTO</span></strong></p>
            </td>
            <td style="width: 126.95pt;border-top: 2.25pt solid black;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 10.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.2pt;margin-right:0cm;margin-left:1.9pt;line-height:8.6pt;'><span style="font-size:11px;">COD: F-GT-05</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 8.45pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:1.9pt;line-height:7.5pt;'><span style="font-size:11px;">FE: 2013/06/19</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 2.25pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 10.5pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:1.9pt;line-height:8.75pt;'><span style="font-size:11px;">VE: 02</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="7" style="width: 572.95pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 2.25pt double black;border-right: 2.25pt solid black;background: rgb(219, 229, 241);padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:183.4pt;line-height:9.3pt;'><strong><span style="font-size:11px;">1. INVENTARIO Y REVISI&Oacute;N F&Iacute;SICA DE COMPONENTES</span></strong></p>
            </td>
        </tr>
        <tr>
            <td rowspan="4" style="width: 126.25pt;border-right: 2.25pt solid black;border-bottom: 2.25pt solid black;border-left: 2.25pt solid black;border-image: initial;border-top: none;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:13px;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.2pt;'><span style='font-size:13px;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.05pt;margin-right:0cm;margin-left:10.7pt;'><strong><span style="font-size:11px;">INFORMACION DEL EQUIPO</span></strong></p>
            </td>
            <td colspan="2" style="width: 92.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.7pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">Port&aacute;til</span></p>
            </td>
            <td style="width: 22.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${portatil}</p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.7pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">Marca</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br>${marca}</p>
            </td>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:46.25pt;margin-left:48.05pt;text-align:center;line-height:9.6pt;'><span style="font-size:11px;">Usuario</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 92.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:1.35pt;line-height:8.85pt;'><span style="font-size:11px;">Equipo de Escritorio</span></p>
            </td>
            <td style="width: 22.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'>${desktop}</p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:1.4pt;line-height:8.85pt;'><span style="font-size:11px;">Modelo</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br>${modelo}</p>
            </td>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br>${usuario}</p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 92.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.75pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">Cliente ligero</span></p>
            </td>
            <td style="width: 22.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>${ligero}</span></p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.75pt;margin-right:0cm;margin-left:1.3pt;'><span style="font-size:11px;">Numero de Inventario</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${inventario}</p>
            </td>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.75pt;margin-right:  45.65pt;margin-left:48.05pt;text-align:center;'><span style="font-size:11px;">Fecha</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 92.65pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.0pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">Servidor</span></p>
            </td>
            <td style="width: 22.7pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>${servidor}</span></p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.0pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">&Aacute;rea</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${area}</p>
            </td>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.95pt;margin-right:  0cm;margin-left:1.3pt;text-align:  center;'><strong><span style="font-size:10px;">${fecha}</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
        </tr>
    </tbody>
</table>
<p style='margin:0cm;margin-bottom:.05pt;font-size:12px;font-family:"Arial",sans-serif;margin-top:.4pt;margin-right:0cm;margin-left:0cm;'><span style="font-size:5px;">&nbsp;</span></p>
<table style="margin-left: 7.9pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td colspan="12" style="width: 573.3pt;border: 2.25pt solid black;background: rgb(219, 229, 241);padding: 0cm;height: 9.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:253.6pt;line-height:8.4pt;'><strong><span style="font-size:11px;">1.1 PERIFERICOS</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="4" style="width: 193pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 11.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:55.15pt;line-height:9.65pt;'><strong><span style="font-size:12px;">TIPO DE PERIFRICO</span></strong></p>
            </td>
            <td colspan="4" style="width: 160.65pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 11.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.6pt;margin-right:  64.0pt;margin-left:66.05pt;text-align:center;'><strong><span style="font-size:10px;">ESTADO</span></strong></p>
            </td>
            <td colspan="4" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 11.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.6pt;margin-right:  78.35pt;margin-left:80.7pt;text-align:center;'><strong><span style="font-size:10px;">OBSERVACIONES</span></strong></p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 9.05pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:5.25pt;margin-right:0cm;margin-left:30.9pt;'><strong><span style="font-size:10px;">MONITOR</span></strong></p>
            </td>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 9.05pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.1pt;margin-right:0cm;margin-left:7.0pt;line-height:7.95pt;'><span style="font-size:10px;">NUMERO DE INVENTARIO</span></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 160.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 9.05pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${estadoMonitor}</p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 9.05pt;vertical-align: top;">${observacionMonitor}</td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${monitor}</p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:4.45pt;margin-right:  .4pt;margin-left:3.0pt;text-align:  center;'><strong><span style="font-size:10px;">MOUSE</span></strong></p>
            </td>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:6.95pt;line-height:7.65pt;'><span style="font-size:10px;">NUMERO DE INVENTARIO</span></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 160.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${estadoMouse}</p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">${observacionMouse}</td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${mouse}</p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:4.45pt;margin-right:0cm;margin-left:30.85pt;'><strong><span style="font-size:10px;">TECLADO</span></strong></p>
            </td>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:6.95pt;line-height:7.65pt;'><span style="font-size:10px;">NUMERO DE INVENTARIO</span></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 160.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${estadoTeclado}</p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${observacionTeclado}</p>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${teclado}</p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 2.25pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:4.45pt;margin-right:  .55pt;margin-left:3.0pt;text-align:  center;'><strong><span style="font-size:10px;">OTRO</span></strong></p>
            </td>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 6.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:6.95pt;line-height:5.75pt;'><span style="font-size:10px;">NUMERO DE INVENTARIO</span></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 160.65pt;border-top: none;border-left: none;border-bottom: 2.25pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>${estadoOtro}</span></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 2.25pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>${observacionOtro}</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 2.25pt double black;border-right: 1pt solid black;padding: 0cm;height: 4.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:3px;font-family:"Times New Roman",serif;'>${otro}</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="12" style="width: 573.3pt;border-right: 2.25pt solid black;border-bottom: 2.25pt solid black;border-left: 2.25pt solid black;border-image: initial;border-top: none;background: rgb(219, 229, 241);padding: 0cm;height: 10.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:204.5pt;line-height:9.15pt;'><strong><span style="font-size:11px;">2. PROCEDIMIENTO PARA LIMPIEZA FISICA</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="8" style="width: 353.65pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 22.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:5.15pt;margin-right:  150.75pt;margin-left:152.45pt;text-align:center;'><strong><span style="font-size:12px;">ACTIVIDAD</span></strong></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 22.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.1pt;margin-right:  .95pt;margin-left:2.5pt;text-align:  center;'><strong><span style="font-size:11px;">REALIZAD</span></strong></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.65pt;margin-right:  0cm;margin-left:1.5pt;text-align:  center;line-height:9.65pt;'><strong><span style="font-size:11px;">O</span></strong></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 22.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.1pt;margin-right:  0cm;margin-left:1.45pt;text-align:  center;'><strong><span style="font-size:11px;">NO</span></strong></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.65pt;margin-right:  0cm;margin-left:1.35pt;text-align:  center;line-height:9.65pt;'><strong><span style="font-size:11px;">REALIZADO</span></strong></p>
            </td>
            <td colspan="2" style="width: 127.05pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 22.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:5.5pt;margin-right:0cm;margin-left:36.35pt;'><strong><span style="font-size:11px;">OBSERVACI&Oacute;N</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="8" style="width: 353.65pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:2.95pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">1. Limpieza interna del chasis mediante uso de aire a presi&oacute;n.</span></p>
            </td>
            <td style="width:44.55pt;border-top:none;border-left:none;border-bottom:double black 1.5pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:15.75pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:9px;color:black;">${unoSi}</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${unoNo}</p>
            </td>
            <td colspan="2" style="width: 127.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 15.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="8" style="width: 353.65pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 25.05pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.15pt;margin-right:0cm;margin-left:1.4pt;line-height:11.5pt;'><span style="font-size:11px;">2. Limpieza de los coolers del equipo (disipador del procesador, coolers de ventilaci&oacute;n etc) mediante brochas o pinceles.</span></p>
            </td>
            <td style="width:44.55pt;border-top:none;border-left:none;border-bottom:double black 1.5pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:25.05pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>${dosSi}</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 25.05pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${dosNo}</p>
            </td>
            <td colspan="2" style="width: 127.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 25.05pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="8" style="width: 353.65pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 20.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:4.7pt;margin-right:0cm;margin-left:1.4pt;'><span style="font-size:11px;">3. Verificaci&oacute;n de componentes internos, conexiones y estado f&iacute;sico de cada dispositivo.</span></p>
            </td>
            <td style="width:44.55pt;border-top:none;border-left:none;border-bottom:double black 1.5pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:20.15pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${tresSi}</p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 20.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;'>${tresNo}</span></p>
            </td>
            <td colspan="2" style="width: 127.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 20.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="8" style="width: 353.65pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.95pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:2.55pt;margin-right:0cm;margin-left:1.4pt;'><span style="font-size:11px;">4. Limpieza de Fuente de poder, revisar conexiones correctas.</span></p>
            </td>
            <td style="width:44.55pt;border-top:none;border-left:none;border-bottom:double black 1.5pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:15.95pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>${cuatroSi}</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.95pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${cuatroNo}</p>
            </td>
            <td colspan="2" style="width: 127.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 15.95pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="8" style="width: 353.65pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:2.3pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">5. Limpieza externa del chasis mediante pa&ntilde;os de microfibra.</span></p>
            </td>
            <td style="width:44.55pt;border-top:none;border-left:none;border-bottom:double black 1.5pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:15.35pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>${cincoSi}</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>${cincoNo}</span></p>
            </td>
            <td colspan="2" style="width: 127.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 15.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="8" style="width: 353.65pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.6pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">6. Limpieza de perif&eacute;ricos mouse, teclado, monitor.</span></p>
            </td>
            <td style="width:44.55pt;border-top:none;border-left:none;border-bottom:solid black 2.25pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:14.35pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>${seisSi}</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>${seisNo}</span></p>
            </td>
            <td colspan="2" style="width: 127.05pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 14.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="12" style="width: 573.3pt;border-top: none;border-right: none;border-left: none;border-image: initial;border-bottom: 2.25pt solid black;background: rgb(219, 229, 241);padding: 0cm;height: 2.5pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:1px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="12" style="width: 573.3pt;border-right: 2.25pt solid black;border-bottom: 2.25pt solid black;border-left: 2.25pt solid black;border-image: initial;border-top: none;background: rgb(219, 229, 241);padding: 0cm;height: 10.55pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:195.9pt;line-height:9.6pt;'><strong><span style="font-size:11px;">3. REVISI&Oacute;N Y MANTENIMIENTO DE SOFTWARE</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.05pt;margin-right:  .65pt;margin-left:3.0pt;text-align:  center;line-height:8.2pt;'><strong><span style="font-size:10px;">SISTEMA OPERATIVO</span></strong></p>
            </td>
            <td colspan="6" style="width: 202.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${sistemaOperativo}</p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.05pt;margin-right:  6.9pt;margin-left:9.05pt;text-align:  center;line-height:8.2pt;'><span style="font-size:10px;">ACTIVADO</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.05pt;margin-right:  .45pt;margin-left:2.5pt;text-align:  center;line-height:8.2pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${operativoSi}</p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.85pt;margin-left:22.6pt;text-align:center;line-height:8.1pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>${operativoNo}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.5pt;margin-right:  .45pt;margin-left:3.0pt;text-align:  center;line-height:9.5pt;'><strong><span style="font-size:11px;">COPIA IMAGEN</span></strong></p>
            </td>
            <td style="width: 31.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.15pt;margin-right:  8.15pt;margin-left:9.95pt;text-align:  center;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td colspan="2" style="width: 66.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>${imagenSi}</span></p>
            </td>
            <td style="width: 26.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.15pt;margin-right:0cm;margin-left:8.55pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td colspan="2" style="width: 78.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>${imagenNo}</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.15pt;margin-right:  6.9pt;margin-left:9.15pt;text-align:  center;'><span style="font-size:10px;">PROGRAMA</span></p>
            </td>
            <td colspan="4" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>${imagen}</span></p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:28.6pt;'><strong><span style="font-size:10px;">ANTIVIRUS</span></strong></p>
            </td>
            <td style="width: 31.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:8.15pt;margin-left:9.95pt;text-align:center;line-height:6.3pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 27.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:11px;">${antivirusSi}</span></p>
            </td>
            <td rowspan="2" style="width: 39.15pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:11.25pt;'><span style="font-size:10px;">CUAL</span></p>
            </td>
            <td colspan="2" rowspan="2" style="width: 48.75pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${cual}</p>
            </td>
            <td rowspan="2" style="width: 55.6pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.45pt;'><span style="font-size:10px;">ACTUALIZADO</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:9.0pt;text-align:center;line-height:6.3pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${antivirusActSi}</p>
            </td>
            <td rowspan="2" style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.85pt;'><span style="font-size:10px;">FUNCIONAL</span></p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.75pt;margin-left:22.6pt;text-align:center;line-height:6.3pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:11px;">${antivirusFunSi}</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 31.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:8.2pt;margin-left:9.95pt;text-align:center;line-height:5.1pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 27.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:4px;font-family:"Times New Roman",serif;'>${antivirusNo}</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:8.9pt;text-align:center;line-height:5.1pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:4px;font-family:"Times New Roman",serif;'>${antivirusActNo}</span></p>
            </td>
            <td style="width:56.35pt;border-top:none;border-left:none;border-bottom:double black 1.5pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:6.1pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.85pt;margin-left:22.6pt;text-align:center;line-height:5.1pt;'><span style='font-size:13px;font-family:"Times New Roman",serif;'>no</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'>${antivirusFunNo}</p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:10.15pt;'><strong><span style="font-size:10px;">PAQUETE OFIMATICA</span></strong></p>
            </td>
            <td colspan="5" rowspan="2" style="width: 147.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:11px;">${ofimatica}</span></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td rowspan="2" style="width: 55.6pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.45pt;'><span style="font-size:10px;">ACTUALIZADO</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:9.0pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${ofimaticaActSi}</p>
            </td>
            <td rowspan="2" style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.85pt;'><span style="font-size:10px;">FUNCIONAL</span></p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.75pt;margin-left:22.6pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>${ofimaticaFunSi}</p>
            </td>
        </tr>
        <tr>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:8.9pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:5px;font-family:"Times New Roman",serif;'>${ofimaticaActNo}</span></p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.85pt;margin-left:22.6pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:5px;font-family:"Times New Roman",serif;'>${ofimaticaFunNo}</span></p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.35pt;margin-right:  .95pt;margin-left:3.0pt;text-align:  center;'><strong><span style="font-size:10px;">CONEXI&Oacute;N A ESCRITORIO</span></strong></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.85pt;margin-right:  .95pt;margin-left:3.0pt;text-align:  center;'><strong><span style="font-size:10px;">REMOTO</span></strong></p>
            </td>
            <td colspan="3" rowspan="2" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:6.6pt;margin-right:0cm;margin-left:24.25pt;'><span style="font-size:10px;">CONFIGURADO</span></p>
            </td>
            <td colspan="2" style="width: 48.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.25pt;margin-right:  16.8pt;margin-left:18.9pt;text-align:  center;line-height:8.55pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 55.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:8px;font-family:"Times New Roman",serif;'>${escritorioSi}</span></p>
            </td>
            <td colspan="5" rowspan="5" style="width: 275.95pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.25pt;'><span style='font-size:13px;font-family:"Arial",sans-serif;'></span></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.05pt;margin-right:0cm;margin-left:77.6pt;'><strong><span style="font-size:10px;">MANTENIMIENTO REALIZADO POR:</span></strong></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.05pt;margin-right:0cm;margin-left:77.6pt;'><strong><span style="font-size:10px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.05pt;margin-right:0cm;margin-left:77.6pt;'>_______________________</p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 48.75pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.25pt;margin-right:  16.8pt;margin-left:19.05pt;text-align:center;line-height:8.55pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 55.6pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:8px;font-family:"Times New Roman",serif;'>${escritorioNo}</span></p>
            </td>
        </tr>
        <tr>
            <td rowspan="3" style="width: 94.7pt;border-right: 2.25pt solid black;border-bottom: 2.25pt solid black;border-left: 2.25pt solid black;border-image: initial;border-top: none;padding: 0cm;height: 10.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.1pt;'><span style='font-size:15px;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:6.4pt;'><strong><span style="font-size:10px;">SOFTWARE ESPECIFICO</span></strong></p>
            </td>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 10.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:29.3pt;line-height:8.5pt;'><span style="font-size:10px;">SOLID EDGE</span></p>
            </td>
            <td style="width: 26.05pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 10.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>${solidedge}</span></p>
            </td>
            <td colspan="2" style="width: 78.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 10.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:25.35pt;margin-left:27.5pt;text-align:center;line-height:8.5pt;'><span style="font-size:10px;">OTROS</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 11.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.75pt;margin-right:0cm;margin-left:28.6pt;'><span style="font-size:10px;">MASTERCAM</span></p>
            </td>
            <td style="width: 26.05pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 11.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>${mastercam}</span></p>
            </td>
            <td colspan="2" rowspan="2" style="width: 78.3pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 11.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 10.5pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:35.6pt;margin-left:37.55pt;text-align:center;line-height:8.05pt;'><span style="font-size:10px;">CIMCO</span></p>
            </td>
            <td style="width: 26.05pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 10.5pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>${cimco}</span></p>
            </td>
        </tr>
        <tr>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
            <td style="border:none;"><br></td>
        </tr>
    </tbody>
</table>
<p style='margin:0cm;margin-bottom:.0001pt;font-size:12px;font-family:"Arial",sans-serif;'><span style="font-size:13px;">&nbsp;</span></p>
<p style='margin:0cm;margin-bottom:.0001pt;font-size:12px;font-family:"Arial",sans-serif;margin-top:.45pt;'><br></p>
<table style="width: 100%">
    <tbody>
        <tr>
            <td>
                <div style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'>
                    <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.25pt;margin-right:0cm;margin-left:.8pt;'><strong><span style="font-size:10px;">OBSERVACIONES:</span></strong></p>
                    <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.25pt;margin-right:0cm;margin-left:.8pt;'><br></p>
                </div>
            </td>
        </tr>
    </tbody>
</table>
<p><br></p>
<p>&nbsp;</p>
<p style='margin:0cm;margin-bottom:.0001pt;font-size:12px;font-family:"Arial",sans-serif;'><span style="font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p>
<p style='margin:0cm;margin-bottom:.0001pt;font-size:12px;font-family:"Arial",sans-serif;margin-top:.45pt;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;_________________________________ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; _________________________________</p>
<p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:157.7pt;line-height:8.85pt;'><strong><span style="font-size:11px;">USUARIO</span></strong><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp; &nbsp; &nbsp;</span><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><strong><span style="font-size:11px;">REVISADO POR</span></strong></p>
<p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:157.7pt;line-height:8.85pt;'><br></p>
			</body>
		</html>
	`;

	let generatePDF = async () => {
		const file = await printToFileAsync({
			html:html,
			base64: false
		});

	await shareAsync(file.uri);

	};

	return (
		<ScrollView>
		<View style={styles.mainContainer}>
		<View style={styles.container}>
			<Text
				style={styles.titulo}>
				Acta de Mantenimiento
			</Text>
			<Text style={styles.subTitulo}>
				Informacion del Equipo
			</Text>
			<Text>Portatil</Text>
				<TextInput
				value={portatil}
				onChangeText={(value) => setPortatil(value)}
				style={styles.textInputs}
				placeholder="Portatil"	
				/>
			<Text>Desktop</Text>
				<TextInput
				value={desktop}
				onChangeText={(value) => setDesktop(value)}
				style={styles.textInputs}
				placeholder="Desktop"	
				/>
			<Text>Cliente Ligero</Text>
				<TextInput
				value={ligero}
				onChangeText={(value) => setLigero(value)}
				style={styles.textInputs}
				placeholder="Cliente Ligero"	
				/>
			<Text>Servidor</Text>
				<TextInput
				value={servidor}
				onChangeText={(value) => setServidor(value)}
				style={styles.textInputs}
				placeholder="Servidor"	
				/>
			<Text>Marca</Text>
				<TextInput
				value={marca}
				onChangeText={(value) => setMarca(value)}
				style={styles.textInputs}
				placeholder="Marca"	
				/>
			<Text>Modelo</Text>
				<TextInput
				value={modelo}
				onChangeText={(value) => setModelo(value)}
				style={styles.textInputs}
				placeholder="Modelo"	
				/>
			<Text>Numero de Inventario</Text>
				<TextInput
				value={inventario}
				onChangeText={(value) => setInventario(value)}
				style={styles.textInputs}
				placeholder="Numero Inventario"	
				/>
			<Text>Area</Text>
				<TextInput
				value={area}
				onChangeText={(value) => setArea(value)}
				style={styles.textInputs}
				placeholder="Area"	
				/>
			<Text>Nombre de Usuario</Text>
				<TextInput
				value={usuario}
				onChangeText={(value) => setUsuario(value)}
				style={styles.textInputs}
				placeholder="Usuario"	
				/>
			<Text>Fecha</Text>
				<TextInput
				value={fecha}
				onChangeText={(value) => setFecha(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text style={styles.subTitulo}>Perifericos</Text>
			<Text>Monitor</Text>
				<TextInput
				value={monitor}
				onChangeText={(value) => setMonitor(value)}
				style={styles.textInputs}
				placeholder="Monitor"	
				/>
			<Text>Mouse</Text>
				<TextInput
				value={mouse}
				onChangeText={(value) => setMouse(value)}
				style={styles.textInputs}
				placeholder="Mouse"	
				/>
			<Text>Teclado</Text>
				<TextInput
				value={teclado}
				onChangeText={(value) => setTeclado(value)}
				style={styles.textInputs}
				placeholder="Teclado"	
				/>
			<Text>Otro</Text>
				<TextInput
				value={otro}
				onChangeText={(value) => setOtro(value)}
				style={styles.textInputs}
				placeholder="Otro"	
				/>
			<Text>Estado Monitor</Text>
				<TextInput
				value={estadoMonitor}
				onChangeText={(value) => setEstadoMonitor(value)}
				style={styles.textInputs}
				placeholder="Estado Monitor"	
				/>
			<Text>Estado Mouse</Text>
				<TextInput
				value={estadoMouse}
				onChangeText={(value) => setEstadoMouse(value)}
				style={styles.textInputs}
				placeholder="Destinario"	
				/>
			<Text>Estado Teclado</Text>
				<TextInput
				value={estadoTeclado}
				onChangeText={(value) => setEstadoTeclado(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Estado Otro</Text>
				<TextInput
				value={estadoOtro}
				onChangeText={(value) => setEstadoOtro(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Observacion Monitor</Text>
				<TextInput
				value={observacionMonitor}
				onChangeText={(value) => setObservacionMonitor(value)}
				style={styles.textInputs}
				placeholder="Observacion Monitor"	
				/>
			<Text>Observacion Mouse</Text>
				<TextInput
				value={observacionMouse}
				onChangeText={(value) => setObservacionMouse(value)}
				style={styles.textInputs}
				placeholder="Observacion Mouse"	
				/>
			<Text>Observacion Teclado</Text>
				<TextInput
				value={observacionTeclado}
				onChangeText={(value) => setObservacionTeclado(value)}
				style={styles.textInputs}
				placeholder="Observacion Teclado"	
				/>
			<Text>Observacion Otro</Text>
				<TextInput
				value={observacionOtro}
				onChangeText={(value) => setObservacionOtro(value)}
				style={styles.textInputs}
				placeholder="Observacion Otro"	
				/>
			<Text style={styles.subTitulo}>Procedimiento pra Limpieza</Text>
			<Text>1. Limpieza interna con aire a presion</Text>
				<TextInput
				value={unoSi}
				onChangeText={(value) => setUnoSi(value)}
				style={styles.textInputs}
				placeholder="SI"	
				/>
				<TextInput
				value={unoNo}
				onChangeText={(value) => setUnoNo(value)}
				style={styles.textInputs}
				placeholder="NO"	
				/>
			<Text>2. Limpieza de los coolers del equipo</Text>
				<TextInput
				value={dosSi}
				onChangeText={(value) => setDosSi(value)}
				style={styles.textInputs}
				placeholder="SI"	
				/>
				<TextInput
				value={dosNo}
				onChangeText={(value) => setDosNo(value)}
				style={styles.textInputs}
				placeholder="NO"	
				/>
			<Text>3. Verificacion de componentes internos</Text>
				<TextInput
				value={tresSi}
				onChangeText={(value) => setTresSi(value)}
				style={styles.textInputs}
				placeholder="SI"	
				/>
				<TextInput
				value={tresNo}
				onChangeText={(value) => setTresNo(value)}
				style={styles.textInputs}
				placeholder="NO"	
				/>
			<Text>4. Limpieza fuente de poder</Text>
				<TextInput
				value={cuatroSi}
				onChangeText={(value) => setCuatroSi(value)}
				style={styles.textInputs}
				placeholder="SI"	
				/>
				<TextInput
				value={cuatroNo}
				onChangeText={(value) => setCuatroNo(value)}
				style={styles.textInputs}
				placeholder="NO"	
				/>
			<Text>5. Limpieza externa del chasis</Text>
				<TextInput
				value={cincoSi}
				onChangeText={(value) => setCincoSi(value)}
				style={styles.textInputs}
				placeholder="SI"	
				/>
				<TextInput
				value={cincoNo}
				onChangeText={(value) => setCincoNo(value)}
				style={styles.textInputs}
				placeholder="NO"	
				/>
			<Text>6. Limpieza de perifericos</Text>
				<TextInput
				value={seisSi}
				onChangeText={(value) => setSeisSi(value)}
				style={styles.textInputs}
				placeholder="SI"	
				/>
				<TextInput
				value={seisNo}
				onChangeText={(value) => setSeisNo(value)}
				style={styles.textInputs}
				placeholder="NO"	
				/>
			<Text style={styles.subTitulo}>Revision Software</Text>
			<Text>Sistema Operativo</Text>
				<TextInput
				value={sistemaOperativo}
				onChangeText={(value) => setSistemaOperativo(value)}
				style={styles.textInputs}
				placeholder="Sistema Operativo"	
				/>
			<Text>Activado SI</Text>
				<TextInput
				value={operativoSi}
				onChangeText={(value) => setOperativoSi(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>Activado NO</Text>
				<TextInput
				value={operativoNo}
				onChangeText={(value) => setOperativoNo(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text style={styles.subTitulo}>Copia Imagen</Text>
			<Text>Copia Imagen SI</Text>
				<TextInput
				value={imagenSi}
				onChangeText={(value) => setImagenSi(value)}
				style={styles.textInputs}
				placeholder="Copia de Seguridad SI = X"	
				/>
			<Text>Copia Imagen NO</Text>
				<TextInput
				value={imagenNo}
				onChangeText={(value) => setImagenNo(value)}
				style={styles.textInputs}
				placeholder="Copia de Seguridad NO = X"	
				/>
			<Text>Programa Copia Imagen</Text>
				<TextInput
				value={imagen}
				onChangeText={(value) => setImagen(value)}
				style={styles.textInputs}
				placeholder="Programa"	
				/>
			<Text style={styles.subTitulo}>Antivirus</Text>
			<Text>Antivirus SI</Text>
				<TextInput
				value={antivirusSi}
				onChangeText={(value) => setAntivirusSi(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>Antivirus NO</Text>
				<TextInput
				value={antivirusNo}
				onChangeText={(value) => setAntivirusNo(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>Cual</Text>
				<TextInput
				value={cual}
				onChangeText={(value) => setCual(value)}
				style={styles.textInputs}
				placeholder="Cual Antivirus Posee"	
				/>
			<Text>Esta Actualizado SI</Text>
				<TextInput
				value={antivirusActSi}
				onChangeText={(value) => setAntivirusActSi(value)}
				style={styles.textInputs}
				placeholder="Antivirus Actualizado SI = X"	
				/>
			<Text>Esta Actualizado NO</Text>
				<TextInput
				value={antivirusActNo}
				onChangeText={(value) => setAntivirusActNo(value)}
				style={styles.textInputs}
				placeholder="Antivirus Actualizado NO = X"	
				/>
			<Text>Funcional SI</Text>
				<TextInput
				value={antivirusFunSi}
				onChangeText={(value) => setAntivirusFunSi(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>Funcional NO</Text>
				<TextInput
				value={antivirusFunNo}
				onChangeText={(value) => setAntivirusFunNo(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text style={styles.subTitulo}>Ofimatica</Text>
			<Text>Paquete Ofimatica</Text>
				<TextInput
				value={ofimatica}
				onChangeText={(value) => setOfimatica(value)}
				style={styles.textInputs}
				placeholder="Paquete de Ofimatica"	
				/>
			<Text>Actualizado SI</Text>
				<TextInput
				value={ofimaticaActSi}
				onChangeText={(value) => setOfimaticaActSi(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>Actualizado NO</Text>
				<TextInput
				value={ofimaticaActNo}
				onChangeText={(value) => setOfimaticaActNo(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>Funcional SI</Text>
				<TextInput
				value={ofimaticaFunSi}
				onChangeText={(value) => setOfimaticaFunSi(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Funcional NO</Text>
				<TextInput
				value={ofimaticaFunNo}
				onChangeText={(value) => setOfimaticaFunNo(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text style={styles.subTitulo}>Conexion a Escritorio remoto</Text>
			<Text>Configurado SI</Text>
				<TextInput
				value={escritorioSi}
				onChangeText={(value) => setEscritorioSi(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>Configurado NO</Text>
				<TextInput
				value={escritorioNo}
				onChangeText={(value) => setEscritorioNo(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text style={styles.subTitulo}>Software Especifico</Text>
			<Text>SOLID EDGE</Text>
				<TextInput
				value={solidedge}
				onChangeText={(value) => setSolidEdge(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>MASTERCAM</Text>
				<TextInput
				value={mastercam}
				onChangeText={(value) => setMastercam(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
			<Text>CIMCO</Text>
				<TextInput
				value={cimco}
				onChangeText={(value) => setCimco(value)}
				style={styles.textInputs}
				placeholder="X"	
				/>
		<TouchableOpacity> 
				<LinearGradient
					colors={['#FF0000', '#FF0000', '#FF0000']}
					style={styles.button}>
					<Text style={styles.text} onPress={generatePDF}>Generar PDF</Text>
				</LinearGradient>				
		</TouchableOpacity>
		</View>
			</View> 
		</ScrollView>
	);
}

export default ActaMantenimiento;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#818181',
  },
	mainContainer:{
		flex: 1,
		backgroundColor: '#9ACEF8',
		paddingTop: StatusBar.currentHeight,
	},
	container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	row: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
	titulo: {
		fontSize: 30,
		color: '#000',
		fontWeight: 'bold',
		padding: 10,
	},
	subTitulo: {
		fontSize: 20,
		margin:10,
	},
	textInputs2: {
		width:'30%',
		backgroundColor: '#fff',
		borderRadius: 20,
		height: 40,
		justifyContent: 'center',
	},
	textInputs: {
		margin: 10,
		padding: 10,
		paddingStart: 15,
		width: '80%',
		height: 40,
		marginTop: 10,
		borderRadius: 20,
		backgroundColor: '#fff',
		marginBottomWidth: 1,
		marginBottom: 10,
	},
	text: {
		fontSize: 14,
		color: '#fff',
		marginTop: 15,
	},

	button: {
		marginTop: 20,
		width: 100,
		height: 50,
		alignItems: 'center',
		borderRadius: 20,
		marginBottom: 40,
	},
});
