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
            js+"jquery-1.10.2.js",
            js+"jquery-ui-1.10.4.custom.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"dragAndDropUtilities.js",
            js+"interactionUtilities.js",
            js+"utility.js",
            js+"audioUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'DROP_1',
                            symbolName: 'DROP_1',
                            type: 'rect',
                            rect: ['137px', '581px', '81', '51', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_2',
                            symbolName: 'DROP_2',
                            type: 'rect',
                            rect: ['369px', '580px', '87', '55', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_3',
                            symbolName: 'DROP_3',
                            type: 'rect',
                            rect: ['589px', '580px', '87', '55', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_4',
                            symbolName: 'DROP_4',
                            type: 'rect',
                            rect: ['995px', '577px', '87', '55', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_5',
                            symbolName: 'DROP_5',
                            type: 'rect',
                            rect: ['1349px', '577px', '87', '55', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_6',
                            symbolName: 'DROP_6',
                            type: 'rect',
                            rect: ['1591px', '576px', '87', '55', 'auto', 'auto']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['1587px', '696px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 38px -28.8662109375px)',
                            cursor: 'pointer'
                        },
                        {
                            id: 'cajaestatico2_drog',
                            type: 'image',
                            rect: ['1121px', '577px', '87px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cajaestatico2_drog.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['86px', '118px', '1691px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​A continuación encontrará los nombres de algunas letras del español. Escuche el audio y seleccione las letras adecuadas para completar las palabras.&nbsp;&nbsp;</p><p style=\"margin: 0px; line-height: 34px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['87px', '210px', '1690px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​Instrucción: seleccione y arrastre según corresponda. Tiene dos intentos para esta actividad.</p><p style=\"margin: 0px; line-height: 34px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['87px', '67px', '1690px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​Cuando se deletrea una palabra debemos establecer una relación entre el sonido, la letra que lo representa y el nombre de la letra.&nbsp;&nbsp;&nbsp;</p><p style=\"margin: 0px; line-height: 34px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'signo_mas_que_1_VIOLETA',
                            type: 'image',
                            rect: ['52px', '126px', '18px', '18px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"signo%20mas%20que%201%20VIOLETA.png",'0px','0px'],
                            transform: [[],[],[],['1.14999','1.14999']]
                        },
                        {
                            id: 'cajaestatico1_drog',
                            type: 'image',
                            rect: ['252px', '581px', '87px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cajaestatico1_drog.png",'0px','0px']
                        },
                        {
                            id: 'cajaestatico1_drog2',
                            type: 'image',
                            rect: ['481px', '579px', '87px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cajaestatico1_drog.png",'0px','0px']
                        },
                        {
                            id: 'cajaestatico1_drog3',
                            type: 'image',
                            rect: ['701px', '577px', '87px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cajaestatico1_drog.png",'0px','0px']
                        },
                        {
                            id: 'cajaestatico3_drog',
                            type: 'image',
                            rect: ['1238px', '577px', '87px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cajaestatico3_drog.png",'0px','0px']
                        },
                        {
                            id: 'cajaestatico4_drog',
                            type: 'image',
                            rect: ['1470px', '577px', '87px', '55px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cajaestatico4_drog.png",'0px','0px']
                        },
                        {
                            id: 'DRAG_5',
                            symbolName: 'DRAG_1',
                            type: 'rect',
                            rect: ['560px', '676px', '87', '55', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_3',
                            symbolName: 'DRAG_2',
                            type: 'rect',
                            rect: ['718px', '676px', '87', '55', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_4',
                            symbolName: 'DRAG_3',
                            type: 'rect',
                            rect: ['865px', '676px', '87', '55', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_6',
                            symbolName: 'DRAG_4',
                            type: 'rect',
                            rect: ['1003px', '676px', '87', '55', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_1',
                            symbolName: 'DRAG_5',
                            type: 'rect',
                            rect: ['1149px', '676px', '87', '55', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_2',
                            symbolName: 'DRAG_6',
                            type: 'rect',
                            rect: ['1297px', '676px', '87', '55', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Skills2',
                            symbolName: 'Skills',
                            type: 'rect',
                            rect: ['4px', '618px', '283', '157', 'auto', 'auto']
                        },
                        {
                            id: 'esn1le01ob02re3au02',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1618', '293', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"esn1le01ob02re3au02.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob02re3au01',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['99', '461', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"esn1le01ob02re3au01.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'puerta2',
                            type: 'image',
                            rect: ['1223px', '277px', '301px', '302px', 'auto', 'auto'],
                            borderRadius: ["18px", "18px", "18px", "18px 18px"],
                            fill: ["rgba(0,0,0,0)",im+"puerta2.png",'0px','0px'],
                            transform: [[],[],[],['0.83','0.83']]
                        },
                        {
                            id: 'rec_puerta',
                            type: 'rect',
                            rect: ['1248px', '303px', '242px', '242px', 'auto', 'auto'],
                            borderRadius: ["18px", "18px", "18px", "18px 18px"],
                            fill: ["rgba(79,45,110,0)"],
                            stroke: [5,"rgb(79, 45, 110)","solid"]
                        },
                        {
                            id: 'manana',
                            type: 'image',
                            rect: ['300px', '278px', '300px', '300px', 'auto', 'auto'],
                            borderRadius: ["18px", "18px", "18px", "18px 18px"],
                            fill: ["rgba(0,0,0,0)",im+"manana.png",'0px','0px'],
                            transform: [[],[],[],['0.84','0.84']]
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            type: 'rect',
                            rect: ['226px', '413px', '70', '40', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_2',
                            symbolName: 'audio_2',
                            type: 'rect',
                            rect: ['1149px', '413px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'rec_amanecer',
                            type: 'rect',
                            rect: ['324px', '302px', '242px', '242px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(79,45,110,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'circulo_1',
                            type: 'ellipse',
                            rect: ['296px', '282px', '55px', '55px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'circulo_1Copy',
                            type: 'ellipse',
                            rect: ['1221px', '284px', '55px', '55px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'texto1',
                            type: 'text',
                            rect: ['312px', '280px', '33px', '51px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 40px; font-family: source-sans-pro, sans-serif;\">1</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'texto1Copy',
                            type: 'text',
                            rect: ['1237px', '282px', '33px', '51px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 40px; font-family: source-sans-pro, sans-serif;\">2</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 1352,
                    autoPlay: true,
                    data: [
                        [
                            "eid160",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid133",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '780px',
                            '780px'
                        ],
                        [
                            "eid139",
                            "background-image",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]],
                            [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ],
                        [
                            "eid131",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1830px',
                            '1830px'
                        ],
                        [
                            "eid148",
                            "left",
                            0,
                            0,
                            "linear",
                            "${DROP_1}",
                            '137px',
                            '137px'
                        ]
                    ]
                }
            },
            "Submit": {
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
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['60px', '-2px', '94px', '31px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "TIMER_CONTAINER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '197px', '38px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(193,193,193,1.00)']
                        },
                        {
                            rect: ['22px', '7px', '154px', '38px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '197px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "10": 500
                    },
                    data: [
                        [
                            "eid32",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            'rgba(193,193,193,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid34",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle2}",
                            'rgba(255,0,0,1)',
                            'rgba(193,193,193,1.00)'
                        ],
                        [
                            "eid41",
                            "color",
                            0,
                            500,
                            "linear",
                            "${Text2}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid42",
                            "color",
                            500,
                            500,
                            "linear",
                            "${Text2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
                        ]
                    ]
                }
            },
            "btn_enviar": {
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
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
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
            "btn_audio": {
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
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            id: 'BTN-tools-ES',
                            type: 'image',
                            rect: ['65px', '7px', '7%', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
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
            "DROP_1": {
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
                            id: 'caja_drog',
                            rect: ['0px', '0px', '81px', '51px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drog.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '81px', '51px']
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
            "DROP_2": {
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
                            id: 'caja_drog2',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drog2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DROP_3": {
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
                            id: 'caja_drog3',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drog3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DROP_4": {
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
                            id: 'caja_drog4',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drog4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DROP_5": {
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
                            id: 'caja_drog6',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drog6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DROP_6": {
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
                            id: 'caja_drog7',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drog7.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DRAG_1": {
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
                            id: 'caja_drag1',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drag1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DRAG_2": {
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
                            id: 'caja_drag2',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drag2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DRAG_3": {
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
                            id: 'AG_3',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drag3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DRAG_4": {
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
                            id: 'caja_drag42',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drag4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DRAG_5": {
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
                            id: 'caja_drag52',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drag5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "DRAG_6": {
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
                            id: 'caja_drag63',
                            rect: ['0px', '0px', '87px', '55px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/caja_drag6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '55px']
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
            "oral": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_HABLA',
                            type: 'image',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '109px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "auditiva": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_ESCUCHA',
                            type: 'image',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['0px', '-9px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Skills": {
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
                            id: 'Skills',
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'B_ESCRITURA',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'B_ESCUCHA',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'B_HABLA',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'B_LECTURA',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'escrita',
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            id: 'escrita'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'oral',
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            id: 'oral'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'lectora',
                            rect: ['0px', '0px', '117', '113', 'auto', 'auto'],
                            id: 'lectora'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'auditiva',
                            rect: ['112px', '2px', '117', '104', 'auto', 'auto'],
                            id: 'auditiva'
                        },
                        {
                            rect: ['23px', '50px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['192px', '72px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '283px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_HABLA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oral}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTURA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCUCHA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lectora}",
                            'block',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "lectora": {
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
                            id: 'V_LECTURA',
                            type: 'image',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-13px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "escrita": {
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
                            id: 'V_ESCRITURA',
                            type: 'image',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy3',
                                textStyle: ['', '', '23px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '108px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "margen_superior": {
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
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1775px', '0px', '55px', '70px', 'auto', 'auto'],
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '55px', '70px', 'auto', 'auto'],
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['86px', '0px', '1689px', '70px', 'auto', 'auto'],
                            fill: ['rgba(181,199,220,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '70px']
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
            "espacios_texto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '92px', '30px', '30px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '142px', '35px', '35px', 'auto', 'auto'],
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '177px']
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
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
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
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_1.mp3'],
                            id: 'audiomp3_1',
                            rect: ['1736', '138', '320px', '45px', 'auto', 'auto'],
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
                    duration: 1352,
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
                            [ "eid169", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
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
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
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
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_2.mp3'],
                            id: 'audiomp3_2',
                            rect: ['526', '258', '320px', '45px', 'auto', 'auto'],
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
                    duration: 1112,
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
                            [ "eid170", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_2}', [] ] ]
                    ]
                }
            },
            "margen_inferior": {
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
                            id: 'Rectangle',
                            stroke: [7, 'rgba(79,45,110,0.00)', 'solid'],
                            rect: ['0px', '25px', '13px', '79px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['27px', '0px', '1735px', '11px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['27px', '118px', '1735px', '7px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['1776px', '25px', '13px', '79px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1803px', '139px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob02r3_edgeActions.js");
})("EDGE-6342212");
