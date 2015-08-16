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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Fondo',
                            type: 'rect',
                            rect: ['20px', '725px', '1877px', '196px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(12,100,86,1.00)",[270,[['rgba(96,74,123,1.00)',0],['rgba(96,74,123,1.00)',100]]]],
                            stroke: [1,"rgba(0,0,0,0.00)","dashed"]
                        },
                        {
                            id: 'funcioncomunicativa',
                            symbolName: 'funcioncomunicativa',
                            type: 'rect',
                            rect: ['46', '747', '652', '163', 'auto', 'auto']
                        },
                        {
                            id: 'discuta',
                            symbolName: 'discuta',
                            type: 'rect',
                            rect: ['725px', '747px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Cuadro_texto',
                            type: 'rect',
                            rect: ['107px', '179px', '906px', '389px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,0.75)"],
                            stroke: [7,"rgba(96,74,123,1.00)","solid"],
                            c: [
                            {
                                id: 'Text4',
                                type: 'text',
                                rect: ['29px', '18px', '851px', '56px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​La lectura y la escritura facilitan los procesos de comunicación con el mundo que nos rodea. Por ello aprender la fonética de una lengua por medio del deletreo permite a las personas entender las palabras desde su mínima unidad, y de esta forma identificar cada letra del abecedario y el sonido que produce.</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [38, "px"], "rgba(96,74,123,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'btnr1_exploremos',
                            symbolName: 'btnr1_exploremos',
                            type: 'rect',
                            rect: ['1417', '769', '447', '95', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '944px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "funcioncomunicativa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">Función comunicativa:</span></p>',
                                type: 'text',
                                rect: ['43px', '1px', '366px', '38px', 'auto', 'auto']
                            }]
                        },
                        {
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta1_funcion_comunicativa',
                            type: 'image',
                            rect: ['18px', '66px', '10px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Texto_Funcion_Comunicativa',
                            textStyle: ['', '', '34px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 28px;\">Deletrear nombres, topónimos  y otras palabras de su contexto inmediato usando el alfabeto en español.&nbsp;</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 28px;\">​&nbsp;</span></p>',
                            rect: ['44px', '57px', '612px', '106px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '652px', '163px']
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
            "discuta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">Discuta con sus compañeros</span></p>',
                                type: 'text',
                                rect: ['41px', '2px', '569px', '38px', 'auto', 'auto']
                            }]
                        },
                        {
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta1_funcion_comunicativa',
                            type: 'image',
                            rect: ['18px', '66px', '10px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'Vineta2_funcion_comunicativa',
                            type: 'image',
                            rect: ['18px', '105px', '10px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/VI%C3%91ETA-10.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Texto_Funcion_Comunicativa',
                            textStyle: ['', '', '34px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 28px;\">¿Por qué es importante deletrear?​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 28px;\">​¿Qué palabras son difíciles de deletrear?</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-size: 28px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255);\">​</span></p>',
                            rect: ['45px', '57px', '607px', '106px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '652px', '163px']
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
            "btnr1_exploremos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['48px', '10px', '399px', '76px', 'auto', 'auto'],
                            borderRadius: ['0px', '38px', '38px', '0px'],
                            id: 'RoundRect',
                            stroke: [7, 'rgb(96, 74, 123)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.749)', [270, [['rgba(49,28,69,1.00)', 0], ['rgba(56,32,79,1.00)', 21], ['rgba(40,22,56,1.00)', 63]]]]
                        },
                        {
                            type: 'image',
                            id: 'BTN_animado',
                            rect: ['0px', '0px', '95px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BTN_R1_Explore-29.png', '0px', '0px']
                        },
                        {
                            rect: ['163px', '23px', '198px', '50px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                            id: 'Text3',
                            textStyle: ['', '', '50px', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '447px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid35",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob02r1_edgeActions.js");
})("EDGE-16656972");
