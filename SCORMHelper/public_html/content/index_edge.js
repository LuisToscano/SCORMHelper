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
            js+"jquery-1.11.3.min.js",
            js+"jquery-ui-1.11.4.custom/jquery-ui.min.js",
            js+"jquery.fullscreen-0.5.0/jquery.fullscreen.min.js",
            js+"plantilla/actividades_result.js",
            js+"plantilla/utilities.js",
            js+"plantilla/plantilla.js",
            js+"plantilla/utility.js",
            js+"plantilla/main.js",
            js+"EdgeCommons.js",
            js+"SCORM_2004_APIWrapper.js",
            js+"SCORM_HELPER.js"
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
                            id: 'RECURSO2',
                            display: 'none',
                            type: 'image',
                            rect: ['1px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"RECURSO2.png",'0px','0px']
                        },
                        {
                            id: 'back_contenedor_home',
                            symbolName: 'back_contenedor_home',
                            type: 'rect',
                            rect: ['41px', '133px', '1838', '785', 'auto', 'auto'],
                            transform: [[],[],[],['0.99565','0.99363']]
                        },
                        {
                            id: 'contenedor_home',
                            symbolName: 'contenedor_home',
                            type: 'rect',
                            rect: ['41px', '131px', '1838', '785', 'auto', 'auto'],
                            transform: [[],[],[],['0.99565','0.99363']]
                        },
                        {
                            id: 'rec_1',
                            symbolName: 'rec_1',
                            type: 'rect',
                            rect: ['585px', '845px', '156', '205', 'auto', 'auto']
                        },
                        {
                            id: 'rec_2',
                            symbolName: 'rec_2',
                            type: 'rect',
                            rect: ['712px', '874px', '143', '181', 'auto', 'auto']
                        },
                        {
                            id: 'rec_3',
                            symbolName: 'rec_3',
                            type: 'rect',
                            rect: ['826px', '889px', '156', '160', 'auto', 'auto'],
                            clip: 'rect(0px 156px 171.51513671875px 0px)'
                        },
                        {
                            id: 'rec_4',
                            symbolName: 'rec_4',
                            type: 'rect',
                            rect: ['952px', '874px', '156', '182', 'auto', 'auto']
                        },
                        {
                            id: 'rec_5',
                            symbolName: 'rec_5',
                            type: 'rect',
                            rect: ['1079px', '843px', '156', '181', 'auto', 'auto'],
                            clip: 'rect(0px 156px 210.3623046875px 0px)'
                        },
                        {
                            id: 'rec_6',
                            symbolName: 'rec_6',
                            type: 'rect',
                            rect: ['1206px', '855px', '156', '204', 'auto', 'auto']
                        },
                        {
                            id: 'rec_7',
                            symbolName: 'rec_7',
                            type: 'rect',
                            rect: ['1603px', '844px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'punto_A',
                            symbolName: 'punto_A',
                            type: 'rect',
                            rect: ['133px', '873px', '134', '160', 'auto', 'auto']
                        },
                        {
                            id: 'btn_PA',
                            symbolName: 'btn_PA',
                            type: 'rect',
                            rect: ['160', '949px', '90', '90', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'vocabulario',
                            symbolName: 'vocabulario',
                            type: 'rect',
                            rect: ['234', '904', '134', '135', 'auto', 'auto']
                        },
                        {
                            id: 'btn_VC',
                            symbolName: 'btn_VC',
                            type: 'rect',
                            rect: ['256px', '955px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'banner',
                            type: 'image',
                            rect: ['20px', '20px', '1882px', '114px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"banner.png",'0px','0px']
                        },
                        {
                            id: 'nivel',
                            type: 'image',
                            rect: ['21px', '55px', '1880px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"nivel.png",'0px','0px']
                        },
                        {
                            id: 'btnr_7',
                            symbolName: 'btnr_7',
                            type: 'rect',
                            rect: ['1616px', '940px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_6',
                            symbolName: 'btnr_6',
                            type: 'rect',
                            rect: ['1219px', '926px', '130', '130', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'btnr_5',
                            symbolName: 'btnr_5',
                            type: 'rect',
                            rect: ['1081px', '909px', '130', '130', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_4',
                            symbolName: 'btnr_4',
                            type: 'rect',
                            rect: ['963px', '936px', '110', '110', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_3',
                            symbolName: 'btnr_3',
                            type: 'rect',
                            rect: ['854px', '952px', '100', '100', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_2',
                            symbolName: 'btnr_2',
                            type: 'rect',
                            rect: ['736px', '937px', '110', '110', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_1',
                            symbolName: 'btnr_1',
                            type: 'rect',
                            rect: ['598px', '909px', '130', '130', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'contenedor_portada',
                            symbolName: 'overlay_portada',
                            display: 'block',
                            type: 'rect',
                            rect: ['0', '136', '1920', '944', 'auto', 'auto']
                        },
                        {
                            id: 'btn_menugrafico',
                            symbolName: 'btn_menugrafico',
                            type: 'rect',
                            rect: ['1794', '20', '107', '101', 'auto', 'auto']
                        },
                        {
                            id: 'menu_grafico',
                            symbolName: 'menu_grafico',
                            type: 'rect',
                            rect: ['1794px', '121px', '107', '580', 'auto', 'auto']
                        },
                        {
                            id: 'Tool_creditos',
                            symbolName: 'Tool_creditos',
                            type: 'rect',
                            rect: ['1686px', '227px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -35.6435546875px)'
                        },
                        {
                            id: 'Tool_audio',
                            symbolName: 'Tool_audio',
                            type: 'rect',
                            rect: ['1686px', '421px', '215', '80', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -6.2998046875px)'
                        },
                        {
                            id: 'Tool_ayuda',
                            symbolName: 'Tool_ayuda',
                            type: 'rect',
                            rect: ['1686px', '325px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -7.0869140625px)'
                        },
                        {
                            id: 'Tool_full',
                            symbolName: 'Tool_full',
                            type: 'rect',
                            rect: ['1686px', '136px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -153.54296875px)'
                        },
                        {
                            id: 'Tool_info',
                            symbolName: 'Tool_info',
                            type: 'rect',
                            rect: ['1686px', '516px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -80.205078125px)'
                        },
                        {
                            id: 'Tool_accesibilidad',
                            symbolName: 'Tool_accesibilidad',
                            type: 'rect',
                            rect: ['1686px', '612px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -92.8330078125px)'
                        },
                        {
                            id: 'btn_audio',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1793px', '420px', '108', '80', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_full',
                            symbolName: 'btn_full',
                            type: 'rect',
                            rect: ['1793px', '135px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_ayuda',
                            symbolName: 'btn_ayuda',
                            type: 'rect',
                            rect: ['1793px', '324px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_creditos',
                            symbolName: 'btn_creditos',
                            type: 'rect',
                            rect: ['1793px', '226px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_info',
                            symbolName: 'btn_info',
                            type: 'rect',
                            rect: ['1793px', '515px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_accesibilidad',
                            symbolName: 'btn_accesibilidad',
                            type: 'rect',
                            rect: ['1793px', '611px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'ruta',
                            symbolName: 'ruta',
                            type: 'rect',
                            rect: ['1151px', '63', '632', '41', 'auto', 'auto']
                        },
                        {
                            id: 'btn_sena',
                            symbolName: 'btn_sena',
                            type: 'rect',
                            rect: ['16', '18', '239', '173', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            symbolName: 'titulo',
                            type: 'rect',
                            rect: ['241', '46', '649', '50', 'auto', 'auto']
                        },
                        {
                            id: 'container_overlay',
                            symbolName: 'container_overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'navigate-begin',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1908', '745', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"navigate-begin.mp3"],
                            preload: 'metadata'
                        },
                        {
                            id: 'navigate-begin2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['637', '687', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"navigate-begin.mp3"],
                            preload: 'metadata'
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
                    duration: 2142,
                    autoPlay: true,
                    data: [
                        [
                            "eid388",
                            "display",
                            0,
                            0,
                            "linear",
                            "${container_overlay}",
                            'none',
                            'none'
                        ],
                        [
                            "eid379",
                            "left",
                            0,
                            240,
                            "linear",
                            "${contenedor_home}",
                            '41px',
                            '-1836px'
                        ],
                        [
                            "eid381",
                            "left",
                            240,
                            0,
                            "linear",
                            "${contenedor_home}",
                            '-1836px',
                            '-1836px'
                        ],
                        [
                            "eid384",
                            "left",
                            260,
                            242,
                            "linear",
                            "${contenedor_home}",
                            '1919px',
                            '41px'
                        ],
                        [
                            "eid320",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${RECURSO2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid386",
                            "left",
                            0,
                            240,
                            "linear",
                            "${back_contenedor_home}",
                            '41px',
                            '-1836px'
                        ],
                        [
                            "eid387",
                            "left",
                            260,
                            242,
                            "linear",
                            "${back_contenedor_home}",
                            '1919px',
                            '41px'
                        ],
                        [
                            "eid217",
                            "display",
                            0,
                            0,
                            "linear",
                            "${contenedor_portada}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "Tool_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "rec_6": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['14px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['13px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​Evaluemos</p>',
                                id: 'TextCopy7',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid77",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid78",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_2": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy',
                            opacity: '0',
                            rect: ['0px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                                rect: ['18px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '181px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid57",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid58",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_3": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy2',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '171px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid61",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid62",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_4": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy5',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy5',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '182px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid69",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid70",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid71",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_5": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy6',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy6',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '210px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid75",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid74",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "rec_1": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6',
                            opacity: '0',
                            rect: ['7px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Empecemos</p>',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid45",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid46",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btnR_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.51)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
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
            "btnR_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['31px', '22px', '131px', '131px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(188,24,24,0.68)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '157px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [

                    ]
                }
            },
            "Tool_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-32px', '14px', '124px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                text: '<p style=\"margin: 0px;\">​Créditos</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                rect: ['115px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Ayuda</p>',
                                rect: ['9px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_full": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-146px', '14px', '238px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Pantalla completa</p>',
                                textStyle: ['', '', '', '', 'none'],
                                type: 'text'
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['229px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-74px', '14px', '166px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['157px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                text: '<p style=\"margin: 0px;\">​Información</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_accesibilidad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            clip: 'rect(0px 107px 80px 0px)',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-86px', '14px', '178px', '53px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(0px 178px 53px 0px)',
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['169px', '19px', '15px', '15px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​Accesibilidad</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_full": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_ayuda": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_creditos": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_info": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_accesibilidad": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "punto_A": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '134px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['62px', '50px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['14px', '9px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​Punto de</p><p style=\"margin: 0px;\">​aprendizaje</p>',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid207",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid208",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid209",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "vocabulario": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '134px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['57px', '25px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['12px', '9px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">Vocabulario</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid211",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid212",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid213",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_7": {
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
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_r6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '135px', '84px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['58px', '68px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['9px', '13px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Aprendamos</p><p style=\"margin: 0px;\">​en papel</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '185px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid260",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid261",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid262",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "overlay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.4706)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "container_overlay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "contenedor_home": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1838px', '785px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(230,253,200,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
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
            "overlay_portada": {
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1920px', '944px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Aqui va el r1</p>',
                            rect: ['522px', '369px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [145, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '944px']
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
            "back_contenedor_home": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '30px 30px', '30px 30px'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.90)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
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
            "menu_grafico": {
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
                            rect: ['0px', '0px', '107px', '580px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(0,0,0,0.47)'],
                            c: [
                            {
                                rect: ['8px', '486px', '91px', '91px', 'auto', 'auto'],
                                id: 'accesi',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/accesi.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '295px', '91px', '91px', 'auto', 'auto'],
                                id: 'audio',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/audio.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '199px', '91px', '91px', 'auto', 'auto'],
                                id: 'ayuda_2',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/ayuda%20%282%29.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '390px', '91px', '91px', 'auto', 'auto'],
                                id: 'info',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/info.png', '0px', '0px']
                            },
                            {
                                rect: ['8px', '106px', '91px', '91px', 'auto', 'auto'],
                                id: 'creditos',
                                transform: [[], [], [], ['0.9', '0.9']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/creditos.png', '0px', '0px']
                            },
                            {
                                rect: ['-71px', '-70px', '250px', '250px', 'auto', 'auto'],
                                id: 'Full_screen',
                                transform: [[], [], [], ['0.25', '0.25']],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Full%20screen.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '580px']
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
            "btn_menugrafico": {
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
                            id: 'BTN-tools-ES',
                            rect: ['0px', '0px', '107px', '101px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '101px']
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
            "titulo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '649px', '50px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [40, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Titulo',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">&nbsp;<span style=\"font-size: 41px;\">Empecemos</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;&nbsp;</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 35px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">las letras</span></p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '649px', '50px']
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
            "btn_PA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'btn_puntoaprendizajeCopy',
                            rect: ['-55px', '-55px', '200px', '200px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            fill: ['rgba(0,0,0,0)', 'images/btn_puntoaprendizaje.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
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
            "btn_VC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            rect: ['-55px', '-55px', '200px', '200px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'btn_vocabularioCopy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_vocabulario.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
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
            "btnr_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                id: 'evaluacion_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/evaluacion_btn.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid318",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid319",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid316",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid317",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                id: 'r5_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/r5_btn.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid369",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid370",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid367",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid368",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '100px', '100px', 'auto', 'auto'],
                                id: 'r4_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/r4_btn.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid359",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid360",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid357",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '90px', '90px', 'auto', 'auto'],
                                id: 'r3_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/r3_btn.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid349",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid350",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid347",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid348",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '100px', '100px', 'auto', 'auto'],
                                id: 'exploremos_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/exploremos_btn.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid339",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid340",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid337",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid338",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                id: 'empecemos_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/empecemos_btn.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid329",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid330",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid327",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid328",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['12px', '12px', '84px', '84px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(205,205,205,1.00)'],
                            c: [
                            {
                                rect: ['4px', '4px', '76px', '76px', 'auto', 'auto'],
                                id: 'pdf_btn2Copy',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/pdf_btn2.png', '0px', '0px']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid305",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid309",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid304",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid308",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "btn_sena": {
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
                            id: 'logo_sena',
                            rect: ['0px', '0px', '239px', '173px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logo_sena.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '239px', '173px']
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
            "ruta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '632px', '41px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,182,0,1.00)', '500', 'none', 'normal', 'break-word', 'normal'],
                            align: 'right',
                            id: 'Ruta',
                            text: '<p style=\"margin: 0px;\">​Español &gt; Pre A1 Introductorio &gt; Mi contexto</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '632px', '41px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-7659645");
