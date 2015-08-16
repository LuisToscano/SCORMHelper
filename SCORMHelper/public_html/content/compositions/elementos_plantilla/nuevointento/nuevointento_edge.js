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
                            rect: ['780px', '180px', '360px', '360px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                        },
                        {
                            id: 'incorrecto',
                            type: 'image',
                            rect: ['885px', '248px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['797px', '422px', '326px', '86px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​¡Respuesta incorrecta!</p><p style=\"margin: 0px;\">Vuelva a intentarlo.&nbsp;</p><p style=\"margin: 0px;\"></p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                        },
                        {
                            id: 'cerrar_newintento',
                            symbolName: 'cerrar_newintento',
                            type: 'rect',
                            rect: ['1077px', '189px', '53', '54', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'attempt-fail',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1578', '398', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"attempt-fail.mp3"],
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
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_newintento}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_newintento}",
                            '1077px',
                            '1077px'
                        ]
                    ]
                }
            },
            "cerrar_newintento": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            id: 'cerrar',
                            type: 'image',
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '54px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("nuevointento_edgeActions.js");
})("EDGE-25249914");
