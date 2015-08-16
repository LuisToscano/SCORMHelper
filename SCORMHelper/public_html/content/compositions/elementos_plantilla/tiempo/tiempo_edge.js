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
                            id: 'tiempo',
                            type: 'image',
                            rect: ['885px', '248px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tiempo.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['798px', '433px', '324px', '77px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​¡Se acabó el tiempo! Vuelve a intentarlo.</p><p style=\"margin: 0px;\"></p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""],
                            textStyle: ["", "", "34px", "", ""]
                        },
                        {
                            id: 'cerrar_tiempo',
                            symbolName: 'cerrar_tiempo',
                            type: 'rect',
                            rect: ['1077px', '189px', '53', '54', 'auto', 'auto'],
                            cursor: 'pointer'
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
                            "eid5",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_tiempo}",
                            '1077px',
                            '1077px'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_tiempo}",
                            '189px',
                            '189px'
                        ]
                    ]
                }
            },
            "cerrar_comple": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
                            id: 'cerrar',
                            transform: [[], [], [], ['0.35', '0.35']],
                            type: 'image',
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
            },
            "cerrar_tiempo": {
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
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.35', '0.35']],
                            fill: ['rgba(0,0,0,0)', 'images/cerrar2.png', '0px', '0px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tiempo_edgeActions.js");
})("EDGE-25249914");
