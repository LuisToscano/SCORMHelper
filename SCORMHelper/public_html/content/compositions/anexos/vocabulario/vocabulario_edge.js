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
            js+"audioUtilities.js"
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
                            id: 'contvoca',
                            type: 'rect',
                            rect: ['193px', '207px', '1550px', '769px', 'auto', 'auto'],
                            overflow: 'scroll',
                            borderRadius: ["0px", "0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'audio_1',
                                symbolName: 'audio_1',
                                type: 'rect',
                                rect: ['50px', '150px', '70', '40', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_2',
                                symbolName: 'audio_2',
                                type: 'rect',
                                rect: ['824px', '150px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_3',
                                symbolName: 'audio_3',
                                type: 'rect',
                                rect: ['50px', '423px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_4',
                                symbolName: 'audio_4',
                                type: 'rect',
                                rect: ['824px', '423px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_5',
                                symbolName: 'audio_5',
                                type: 'rect',
                                rect: ['50px', '739px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_6',
                                symbolName: 'audio_6',
                                type: 'rect',
                                rect: ['824px', '739px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'Titulo_1',
                                type: 'text',
                                rect: ['145px', '150px', '579px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">abecedario: </span><span style=\"font-style: italic;\">(nombre)</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Titulo_2',
                                type: 'text',
                                rect: ['919px', '150px', '580px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">grafema</span> <span style=\"font-style: italic;\">(nombre)</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Titulo_3',
                                type: 'text',
                                rect: ['145px', '423px', '579px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">vocales</span>  <span style=\"font-style: italic;\">(nombre)</span></p><p style=\"margin: 0px;\">​</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Titulo_4',
                                type: 'text',
                                rect: ['919px', '423px', '580px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">fonema </span><span style=\"font-style: italic;\">(nombre)</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Titulo_5',
                                type: 'text',
                                rect: ['145px', '738px', '579px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">consonante</span>  <span style=\"font-style: italic;\">(nombre)</span></p><p style=\"margin: 0px;\">​</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Titulo_6',
                                type: 'text',
                                rect: ['919px', '738px', '580px', '38px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">topónimo</span> <span style=\"font-style: italic;\">(nombre)</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Parrafo_1',
                                type: 'text',
                                rect: ['50px', '210px', '674px', '76px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Serie de letras de un idioma.</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\">Ejemplo: a, b, c.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Parrafo_2',
                                type: 'text',
                                rect: ['824px', '210px', '675px', '148px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Unidad mínima e indivisible de la escritura de una lengua.</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\">Ejemplo: a, b, c, d, e.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Parrafo_3',
                                type: 'text',
                                rect: ['50px', '483px', '674px', '160px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Sonido del lenguaje humano en cuya emisión el aire espirado no encuentra obstáculos.</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; font-weight: 600; color: rgb(79, 45, 110);\">Ejemplo: a, e, i, o, u</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Parrafo_4',
                                type: 'text',
                                rect: ['824px', '483px', '675px', '137px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Cada una de las unidades fonológicas mínimas que en el sistema de una lengua; pueden oponerse a otras en contraste significativo.</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\">Ejemplo: /b/ sonido bilabial.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Parrafo_5',
                                type: 'text',
                                rect: ['50px', '798px', '674px', '160px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Sonido cuya pronunciación se interrumpe en algún punto del canal vocal con el paso del aire espirado.</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\">Ejemplo: b, c, d, f, g.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Parrafo_6',
                                type: 'text',
                                rect: ['824px', '798px', '675px', '137px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Nombre propio de lugar.</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\">Ejemplo: Amazonas, Cauca, Boyacá.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Instruccion',
                                type: 'text',
                                rect: ['50px', '25px', '1449px', '77px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Tenga en cuenta las siguientes palabras, así podrá hablar del lenguaje de manera apropiada y formal.</p><p style=\"margin: 0px;\">​<span style=\"font-style: italic;\">Instrucción: lea y escuche las siguientes palabras.</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'banner',
                            type: 'rect',
                            rect: ['193px', '70px', '1550px', '137px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['343px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Vocabulario</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cerrar_voca',
                            symbolName: 'cerrar_voca',
                            type: 'rect',
                            rect: ['1636px', '101px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pie',
                            type: 'rect',
                            rect: ['193px', '959px', '1550px', '30px', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['224px', '95px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_vocabulario',
                            type: 'image',
                            rect: ['169px', '39px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn_vocabulario.png",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'medida',
                            type: 'rect',
                            rect: ['1338px', '1184px', '100px', '100px', 'auto', 'auto'],
                            fill: ["rgba(255,80,80,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,126,126,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2191.8,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cerrar_voca": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-38px', '-38px', '151px', '153px', 'auto', 'auto'],
                            id: 'cerrar',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
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
            },
            "audio_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/esn1le01ob02voau01.mp3'],
                            id: 'audiomp3_1',
                            rect: ['122', '718', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1831.6,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid97", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            },
            "audio_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/esn1le01ob02voau05grafema.mp3'],
                            id: 'audiomp3_2',
                            rect: ['-310', '582', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 2071.8,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid103", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_2}', [] ] ]
                    ]
                }
            },
            "audio_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/esn1le01ob02voau03vocales%20-%20copia.mp3'],
                            id: 'audiomp3_3',
                            rect: ['728', '125', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 2071.8,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid104", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_3}', [] ] ]
                    ]
                }
            },
            "audio_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/esn1le01ob02voau06fonema.mp3'],
                            id: 'audiomp3_4',
                            rect: ['-362', '286', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1639.8,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid105", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_4}', [] ] ]
                    ]
                }
            },
            "audio_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/esn1le01ob02voau04.mp3'],
                            id: 'audiomp3_5',
                            rect: ['190', '247', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 2191.8,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid106", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_5}', [] ] ]
                    ]
                }
            },
            "audio_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/esn1le01ob02voau07.mp3'],
                            id: 'audiomp3_6',
                            rect: ['-462', '260', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1999.8,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid107", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_6}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("vocabulario_edgeActions.js");
})("EDGE-30791306");
