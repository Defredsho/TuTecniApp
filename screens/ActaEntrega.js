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
				<table style="width: 100%;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td colspan="2" rowspan="3" style="width: 35.38%;border: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.45pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style="font-size:13px;font-family:&quot;Trebuchet MS&quot;,sans-serif;"></span><br></p>
            </td>
            <td colspan="2" rowspan="3" style="width: 32.3%;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 13.45pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>MEMORANDO</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Interno</span></strong></p>
            </td>
            <td colspan="2" style="width: 32.32%;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;height: 13.45pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Calibri",sans-serif;'>COD:F-GH-17</p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 32.32%;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.45pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Calibri",sans-serif;'>FE:2012/04/18</p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 32.32%;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 13.45pt;vertical-align: top;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Calibri",sans-serif;'>VE:01</p>
            </td>
        </tr>
        <tr>
            <td colspan="6" style="width: 100%;border-top: none;border-right: none;border-left: none;border-image: initial;border-bottom: 1pt solid windowtext;padding: 0cm 5.4pt;height: 18.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="width: 35.38%;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 14.4pt;vertical-align: bottom;">
                <p style='margin:0cm;margin-bottom:.0001pt;font-size:15px;font-family:"Calibri",sans-serif;'><strong>FECHA:${fecha}</strong></p>
            </td>
            <td colspan="2" style="width: 32.3%;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 14.4pt;vertical-align: bottom;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>DE:${de}</span></strong></p>
            </td>
            <td colspan="2" style="width: 32.32%;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 14.4pt;vertical-align: bottom;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>PARA:${para}</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="6" style="width: 100%;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: bottom;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>ASUNTO</span></strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>: Acta de Entrega</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="6" style="width: 100%;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: bottom;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>DESCRIPCI&Oacute;N</span></strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>:&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>De manera atenta me permito hacerle entrega del siguiente elemento:</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <table style="border-collapse:collapse;border:none;">
                    <tbody>
                        <tr>
                            <td style="width:28.1pt;border:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:8px;font-family:"Trebuchet MS",sans-serif;'>CANT</span></strong></p>
                            </td>
                            <td style="width: 5cm;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>ELEMENTO</span></strong></p>
                            </td>
                            <td style="width: 70.9pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>MARCA</span></strong></p>
                            </td>
                            <td style="width: 92.15pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>MODELO</span></strong></p>
                            </td>
                            <td style="width: 134.65pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>REFERENCIA</span></strong></p>
                            </td>
                            <td style="width: 71.95pt;border-top: 1pt solid windowtext;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-image: initial;border-left: none;padding: 0cm 5.4pt;vertical-align: top;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>ESTADO</span></strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 28.1pt;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;height: 15.8pt;vertical-align: bottom;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>${cantidad}</span></p>
                            </td>
                            <td style="width: 5cm;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 15.8pt;vertical-align: bottom;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>${elemento}</span></p>
                            </td>
                            <td style="width: 70.9pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 15.8pt;vertical-align: bottom;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>${marca}</span></p>
                            </td>
                            <td style="width: 92.15pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 15.8pt;vertical-align: bottom;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>${modelo}</span></p>
                            </td>
                            <td style="width: 134.65pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 15.8pt;vertical-align: bottom;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style="color:black;">IT-PC-096</span></p>
                            </td>
                            <td style="width: 71.95pt;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;height: 15.8pt;vertical-align: bottom;">
                                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>${estado}</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Trebuchet MS",sans-serif;'>${caracteristicas}</span><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>:</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><br></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Condiciones:&nbsp;</span></strong></p>
                <div style='margin-top:0cm;margin-right:0cm;margin-bottom:10.0pt;margin-left:0cm;line-height:115%;font-size:15px;font-family:"Calibri",sans-serif;'>
                    <ol style="margin-bottom:0cm;list-style-type: decimal;margin-left:26px;">
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:10.0pt;margin-left:0cm;line-height:115%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Trebuchet MS",sans-serif;'>Se&nbsp;</span><span style='font-family:"Trebuchet MS",sans-serif;font-size:10.0pt;'>entiende que <strong>Mediimplantes S.A.</strong> es &nbsp;el propietario del o los elemento(s) aqu&iacute; mencionados. Esto quiere decir que Mediimplantes da en pr&eacute;stamo los elemento(s) aqu&iacute; mencionado(s). Esto significa que para los casos de perdida, hurto y/o da&ntilde;o por mal uso de o los elemento(s), es responsable de reponer el o los elemento(s) en el mismo estado en que se entregaron con esta acta.</span></li>
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:10.0pt;margin-left:0cm;line-height:115%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Trebuchet MS",sans-serif;font-size:10.0pt;'>Los equipos aqu&iacute; mencionados no debe tener instalado ning&uacute;n software fuera del estipulado por el departamento de tecnolog&iacute;a.</span></li>
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:10.0pt;margin-left:0cm;line-height:115%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Trebuchet MS",sans-serif;font-size:10.0pt;'>Prestar los elementos a personal ajeno a la compa&ntilde;&iacute;a o a un compa&ntilde;ero de trabajo no lo exenta de responsabilidades.</span></li>
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:10.0pt;margin-left:0cm;line-height:115%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Trebuchet MS",sans-serif;font-size:10.0pt;'>La compa&ntilde;&iacute;a puede modificar sin previo aviso y sin consultar al empleado sobre cambios en los elementos aqu&iacute; mencionados. Lo anterior siguiendo conductos regulares de la compa&ntilde;&iacute;a y autorizaci&oacute;n de gerencia.&nbsp;</span></li>
                        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:10.0pt;margin-left:0cm;line-height:115%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Trebuchet MS",sans-serif;font-size:10.0pt;'>En caso de da&ntilde;o del equipo generado por Ca&iacute;das o por uso indebido que conlleve un costo ser&aacute; asumido por el usuario el 50% de la reparaci&oacute;n del articulo</span></li>
                    </ol>
                </div>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:36.0pt;font-size:16px;font-family:"Arial",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Recomendaciones:</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>En caso de que el equipo presentara fallas de operatividad, por favor notificar al departamento de tecnolog&iacute;a con el fin de realizar verificaci&oacute;n y solicitar garant&iacute;as y/o reparaciones.&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Evitar maltratos al equipo como ca&iacute;das, golpes o rayones que causen alteraciones en funcionalidad y estado f&iacute;sico del equipo.</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 31.86%;border-right: 1pt solid windowtext;border-bottom: 1pt solid windowtext;border-left: 1pt solid windowtext;border-image: initial;border-top: none;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Firma del Enterado:</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>________________________</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Nombre:_________________</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Cedula:__________________</span></p>
            </td>
            <td colspan="2" style="width: 29.6%;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Firma del Remitente:</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></strong></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>______________________</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Nombre:______________</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Cedula:_______________</span></p>
            </td>
            <td colspan="2" style="width: 15.44%;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Hora:_______</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Fecha:______</span></p>
            </td>
            <td style="width: 23.1%;border-top: none;border-left: none;border-bottom: 1pt solid windowtext;border-right: 1pt solid windowtext;padding: 0cm 5.4pt;vertical-align: top;">
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>Anexado a la hoja de vida:</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Trebuchet MS",sans-serif;'>&nbsp;</span></p>
                <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;line-height:  normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:13px;font-family:&quot;Trebuchet MS&quot;,sans-serif;"></span><br></p>
            </td>
        </tr>
    </tbody>
</table>
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
		backgroundColor: '#42A6FE',
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
