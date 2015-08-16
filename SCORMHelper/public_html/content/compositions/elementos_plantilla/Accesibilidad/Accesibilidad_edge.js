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
                            id: 'contacce',
                            type: 'rect',
                            rect: ['193px', '180px', '1550px', '573px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['193px', '70px', '1550px', '110px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['304px', '77px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Accesibilidad</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'accesibilidad',
                            type: 'image',
                            rect: ['232px', '99px', '54px', '52px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ACCESIBILIDAD2.png",'0px','0px']
                        },
                        {
                            id: 'Subtitulo',
                            type: 'text',
                            rect: ['538px', '365px', '860px', '42px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">Haga clic en el icono para descargar el PDF</p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "40px", "", "none"]
                        },
                        {
                            id: 'Titulo',
                            type: 'text',
                            rect: ['563px', '261px', '811px', '70px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 51px; font-weight: 700;\">Ayudas para discapacidad visual</span></p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(62,34,85,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cerrar_acce',
                            symbolName: 'cerrar_acce',
                            type: 'rect',
                            rect: ['1640', '87', '75', '76', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'descargable2',
                            type: 'image',
                            rect: ['775px', '351px', '386px', '406px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"descargable3.png",'0px','0px'],
                            transform: [[],[],[],['0.54','0.54']]
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
            "btn_cerrar_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['7px', '5px', '37', '40', 'auto', 'auto'],
                            id: 'Btn_cerrar',
                            type: 'group',
                            c: [
                            {
                                id: 'btn_cerrar',
                                type: 'image',
                                rect: ['-7px', '-5px', '50px', '50px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/btn_cerrar.png', '0px', '0px']
                            },
                            {
                                transform: [[], ['-42'], [], ['1.03', '0.95']],
                                rect: ['15px', '-3px', '8px', '46px', 'auto', 'auto'],
                                id: 'Rectangle2',
                                stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                transform: [[], ['-138'], [], ['1.03', '0.95']],
                                rect: ['15px', '-3px', '8px', '46px', 'auto', 'auto'],
                                id: 'Rectangle2Copy',
                                stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '50px']
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
            "cerrar_acce": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cerrar',
                            rect: ['-38px', '-38px', '151px', '153px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '75px', '76px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Accesibilidad_edgeActions.js");
})("EDGE-13904317");
