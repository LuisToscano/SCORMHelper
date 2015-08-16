/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['193px', '70px', '1550px', '110px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'contayuda',
                            type: 'rect',
                            rect: ['193px', '179px', '1550px', '773px', 'auto', 'auto'],
                            overflow: 'scroll',
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['42px', '0px', '1466', '1212', 'auto', 'auto'],
                                overflow: 'visible',
                                c: [
                                {
                                    id: 'Texto_habilidades',
                                    type: 'text',
                                    rect: ['348px', '52px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Habilidades: </span>estos íconos indican las habilidades más destacadas dentro de la temática.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_practiquemos',
                                    type: 'text',
                                    rect: ['348px', '173px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Practiquemos: </span>estas son actividades de práctica.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_empecemos',
                                    type: 'text',
                                    rect: ['348px', '293px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Empecemos:</span> aquí encontrará la introducción a la temática de estudio.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_exploremos',
                                    type: 'text',
                                    rect: ['348px', '414px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Exploremos: </span>aquí inicia su proceso de aprendizaje.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_evaluemos',
                                    type: 'text',
                                    rect: ['348px', '535px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Evaluemos: </span>aquí se verificará su progreso de aprendizaje.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_aprendamos_en_papel',
                                    type: 'text',
                                    rect: ['348px', '655px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Aprendamos en papel (PDF): </span>aquí encontrará la versión imprimible de la temática y actividades.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_punto_de_aprendizaje',
                                    type: 'text',
                                    rect: ['348px', '776px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Punto de aprendizaje:</span> aquí encontrará la gramática más relevante de la temática.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_vocabulario',
                                    type: 'text',
                                    rect: ['348px', '893px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Vocabulario:</span> aquí encontrará el vocabulario más relevante de la temática.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_menu_herramientas',
                                    type: 'text',
                                    rect: ['348px', '1055px', '1118px', '73px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Menú herramientas: </span>pantalla completa (full screen), créditos, ayuda, apagar sonidos de la interfaz, información del producto, accesibilidad.</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'Texto_cabezote',
                                    type: 'text',
                                    rect: ['348px', '1259px', '1118px', '28px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Cabezote: </span>esta es la ruta que describe el idioma, nivel y nombre de la lección.</p><p style=\"margin: 0px;\"></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'migadepan',
                                    type: 'image',
                                    rect: ['-18px', '1264px', '351px', '28px', 'auto', 'auto'],
                                    clip: 'rect(0px 351px 28px 32px)',
                                    fill: ["rgba(0,0,0,0)",im+"migadepan.png",'0px','0px']
                                },
                                {
                                    id: 'tools',
                                    type: 'image',
                                    rect: ['134px', '980px', '48px', '223px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"tools.png",'0px','0px']
                                },
                                {
                                    id: 'r5',
                                    type: 'image',
                                    rect: ['205px', '134px', '100px', '100px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"r5.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'r4',
                                    type: 'image',
                                    rect: ['109px', '134px', '100px', '100px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"r4.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'r3',
                                    type: 'image',
                                    rect: ['13px', '134px', '100px', '100px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"r3.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'empecemos',
                                    type: 'image',
                                    rect: ['109px', '254px', '100px', '100px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"empecemos.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'exploremos',
                                    type: 'image',
                                    rect: ['109px', '376px', '100px', '100px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"exploremos.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'evaluemos',
                                    type: 'image',
                                    rect: ['109px', '495px', '100px', '100px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"evaluemos.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'apendamos',
                                    type: 'image',
                                    rect: ['109px', '616px', '100px', '100px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"apendamos.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'punto',
                                    type: 'image',
                                    rect: ['111px', '742px', '95px', '95px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"punto.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'vocabulario',
                                    type: 'image',
                                    rect: ['115px', '862px', '91px', '91px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"vocabulario.png",'0px','0px'],
                                    transform: [[],[],[],['0.8','0.8']]
                                },
                                {
                                    id: 'Skills_final',
                                    type: 'image',
                                    rect: ['77px', '6px', '163px', '110px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"Skills_final.png",'0px','0px']
                                },
                                {
                                    id: 'line1',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,0.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line2',
                                    type: 'rect',
                                    rect: ['0px', '121px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line1Copy',
                                    type: 'rect',
                                    rect: ['0px', '242px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line2Copy',
                                    type: 'rect',
                                    rect: ['0px', '363px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line1Copy2',
                                    type: 'rect',
                                    rect: ['0px', '484px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line2Copy2',
                                    type: 'rect',
                                    rect: ['0px', '604px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line1Copy3',
                                    type: 'rect',
                                    rect: ['0px', '725px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line2Copy3',
                                    type: 'rect',
                                    rect: ['0px', '846px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line1Copy4',
                                    type: 'rect',
                                    rect: ['0px', '967px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line2Copy4',
                                    type: 'rect',
                                    rect: ['0px', '1217px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'line2Copy6',
                                    type: 'rect',
                                    rect: ['0px', '1339px', '1466px', '3px', 'auto', 'auto'],
                                    fill: ["rgba(197,197,197,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'ayuda_2',
                            type: 'image',
                            rect: ['203px', '82px', '91px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ayuda%20%282%29.png",'0px','0px'],
                            transform: [[],[],[],['0.8','0.8']]
                        },
                        {
                            id: 'RoundRect3',
                            type: 'rect',
                            rect: ['193px', '935px', '1550px', '30px', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'cerrar_ayuda',
                            symbolName: 'cerrar_ayuda',
                            type: 'rect',
                            rect: ['1640', '87', '76', '77', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['300px', '77px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Ayuda</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cerrar_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'cerrar',
                            type: 'image',
                            rect: ['-38px', '-38px', '151px', '153px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '76px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ayuda_edgeActions.js");
})("EDGE-6687700");
