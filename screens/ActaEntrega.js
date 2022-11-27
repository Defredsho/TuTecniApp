import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';


const ActaEntrega = () => {

	let [fecha, setFecha] = useState("");
	let [de, setDe] = useState("");
	let [para, setPara] = useState("");
	let [cantidad, setCantidad] = useState("");
	let [elemento, setElemento] = useState("");
	let [marca, setMarca] = useState("");
	let [modelo, setModelo] = useState("");
	let [referencia, setReferencia] = useState("");
	let [estado, setEstado] = useState("");
	let [caracteristicas, setCaracteristicas] = useState("");

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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'>&nbsp;</p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.7pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">Marca</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11.9pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'>&nbsp; &nbsp; &nbsp;</p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-left:1.4pt;line-height:8.85pt;'><span style="font-size:11px;">Modelo</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 92.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.75pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">Cliente ligero</span></p>
            </td>
            <td style="width: 22.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.75pt;margin-right:0cm;margin-left:1.3pt;'><span style="font-size:11px;">Numero de Inventario</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 12.2pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 111.9pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.0pt;margin-right:0cm;margin-left:1.35pt;'><span style="font-size:11px;">&Aacute;rea</span></p>
            </td>
            <td style="width: 92.5pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td style="width: 126.95pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 13.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.95pt;margin-right:  0cm;margin-left:1.3pt;text-align:  center;'><strong><span style="font-size:10px;">D: &nbsp;&nbsp;</span></strong><span style='font-size:10px;font-family:"Times New Roman",serif;'>&nbsp; &nbsp; &nbsp;</span><strong><span style="font-size:10px;">M: &nbsp;&nbsp;</span></strong><span style='font-size:10px;font-family:"Times New Roman",serif;'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><strong><span style="font-size:10px;">A: &nbsp; &nbsp;&nbsp;</span></strong></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 9.05pt;vertical-align: top;"><br></td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;"><br></td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 8.6pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td colspan="4" rowspan="2" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 2.25pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="width: 98.3pt;border-top: none;border-left: none;border-bottom: 2.25pt double black;border-right: 1pt solid black;padding: 0cm;height: 4.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:3px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:9px;color:black;">&nbsp;&nbsp;</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.75pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>&nbsp;&nbsp;</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 25.05pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 20.15pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>&nbsp; &nbsp;</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.95pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>&nbsp; &nbsp;</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 15.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Times New Roman",serif;color:black;'>&nbsp; &nbsp;</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.35pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:11px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.05pt;margin-right:  6.9pt;margin-left:9.05pt;text-align:  center;line-height:8.2pt;'><span style="font-size:10px;">ACTIVADO</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:1.05pt;margin-right:  .45pt;margin-left:2.5pt;text-align:  center;line-height:8.2pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.85pt;margin-left:22.6pt;text-align:center;line-height:8.1pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 10.25pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 26.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.15pt;margin-right:0cm;margin-left:8.55pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td colspan="2" style="width: 78.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.15pt;margin-right:  6.9pt;margin-left:9.15pt;text-align:  center;'><span style="font-size:10px;">PROGRAMA</span></p>
            </td>
            <td colspan="4" style="width: 219.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 11pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:11px;">X</span></p>
            </td>
            <td rowspan="2" style="width: 39.15pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:11.25pt;'><span style="font-size:10px;">CUAL</span></p>
            </td>
            <td colspan="2" rowspan="2" style="width: 48.75pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td rowspan="2" style="width: 55.6pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.45pt;'><span style="font-size:10px;">ACTUALIZADO</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:9.0pt;text-align:center;line-height:6.3pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td rowspan="2" style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.85pt;'><span style="font-size:10px;">FUNCIONAL</span></p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.75pt;margin-left:22.6pt;text-align:center;line-height:6.3pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 7.3pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:11px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 31.65pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:8.2pt;margin-left:9.95pt;text-align:center;line-height:5.1pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 27.5pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:4px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:8.9pt;text-align:center;line-height:5.1pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:4px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td style="width:56.35pt;border-top:none;border-left:none;border-bottom:double black 1.5pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:6.1pt;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.85pt;margin-left:22.6pt;text-align:center;line-height:5.1pt;'><span style='font-size:13px;font-family:"Times New Roman",serif;'>no</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.1pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><br></p>
            </td>
        </tr>
        <tr>
            <td rowspan="2" style="width: 94.7pt;border-top: none;border-left: 2.25pt solid black;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:10.15pt;'><strong><span style="font-size:10px;">PAQUETE OFIMATICA</span></strong></p>
            </td>
            <td colspan="5" rowspan="2" style="width: 147.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style="font-size:11px;">&nbsp;</span></p>
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td rowspan="2" style="width: 55.6pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.45pt;'><span style="font-size:10px;">ACTUALIZADO</span></p>
            </td>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:9.0pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
            <td rowspan="2" style="width: 48.05pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:3.5pt;margin-right:0cm;margin-left:4.85pt;'><span style="font-size:10px;">FUNCIONAL</span></p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.75pt;margin-left:22.6pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">SI</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><br></p>
            </td>
        </tr>
        <tr>
            <td style="width: 56.3pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:6.9pt;margin-left:8.9pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 44.55pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:5px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td style="width: 56.35pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 1pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:0cm;margin-right:20.85pt;margin-left:22.6pt;text-align:center;line-height:5.7pt;'><span style="font-size:10px;">NO</span></p>
            </td>
            <td style="width: 70.7pt;border-top: none;border-left: none;border-bottom: 1.5pt double black;border-right: 2.25pt solid black;padding: 0cm;height: 6.7pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;'><span style='font-size:5px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:8px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
            </td>
            <td colspan="5" rowspan="5" style="width: 275.95pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 2.25pt solid black;padding: 0cm;height: 9.8pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;margin-top:.25pt;'><span style='font-size:13px;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:8px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Trebuchet MS",sans-serif;text-align:center;'><span style='font-size:9px;font-family:"Times New Roman",serif;'>&nbsp;</span></p>
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
				Acta de Entrega
			</Text>
			<Text>Fecha:</Text>
				<TextInput
				value={fecha}
				onChangeText={(value) => setFecha(value)}
				style={styles.textInputs}
				placeholder="Remitente"	
				/>
			<Text>De:</Text>
				<TextInput
				value={de}
				onChangeText={(value) => setDe(value)}
				style={styles.textInputs}
				placeholder="Remitente"	
				/>
			<Text>Para</Text>
				<TextInput
				value={para}
				onChangeText={(value) => setPara(value)}
				style={styles.textInputs}
				placeholder="Destinario"	
				/>
			<Text>Cantidad</Text>
				<TextInput
				value={cantidad}
				onChangeText={(value) => setCantidad(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Elemento</Text>
				<TextInput
				value={elemento}
				onChangeText={(value) => setElemento(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Marca</Text>
				<TextInput
				value={marca}
				onChangeText={(value) => setMarca(value)}
				style={styles.textInputs}
				placeholder="Remitente"	
				/>
			<Text>Modelo</Text>
				<TextInput
				value={modelo}
				onChangeText={(value) => setModelo(value)}
				style={styles.textInputs}
				placeholder="Destinario"	
				/>
			<Text>Referencia</Text>
				<TextInput
				value={referencia}
				onChangeText={(value) => setReferencia(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Estado</Text>
				<TextInput
				value={estado}
				onChangeText={(value) => setEstado(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
				/>
			<Text>Caracteristicas</Text>
				<TextInput
				value={caracteristicas}
				onChangeText={(value) => setCaracteristicas(value)}
				style={styles.textInputs}
				placeholder="Tipo de Elemento"	
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

export default ActaEntrega;


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
	titulo: {
		fontSize: 30,
		color: '#000',
		fontWeight: 'bold',
		padding: 10,
	},
	subTitulo: {
		fontSize: 20,
		color: 'gray',
	},
	textInputs: {
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
