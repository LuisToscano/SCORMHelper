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
                            rect: ['193px', '207px', '1550px', '769px', 'auto', 'auto'],
                            overflow: 'scroll',
                            borderRadius: ["0px", "0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '-1px', '1550px', '59px', 'auto', 'auto'],
                                fill: ["rgba(115,74,138,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'subtitulo1',
                                type: 'text',
                                rect: ['59px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Resultado de aprendizaje</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30.08, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['0px', '205px', '1550px', '59px', 'auto', 'auto'],
                                fill: ["rgba(115,74,138,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'subtitulo2',
                                type: 'text',
                                rect: ['59px', '214px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​El abecedario&nbsp;</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['59px', '314px', '1428px', '164px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​El abecedario está conformado por la letras y éstas a su vez se dividen en vocales y consonantes. Para escribir en español se deben conocer las letras y los sonidos que ellas representan.&nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El ejercicio de aquí en adelante es de práctica propia.</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['59px', '96px', '1428px', '77px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Relacionar la fonología del español con  los grafemas que corresponden o difieren con los fonemas en el sistema de escritura.</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'mayusculas',
                                type: 'rect',
                                rect: ['175px', '598px', '1200px', '1350px', 'auto', 'auto'],
                                fill: ["rgba(196,178,212,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"],
                                c: [
                                {
                                    id: 'Rectangle5',
                                    type: 'rect',
                                    rect: ['7px', '150px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy2',
                                    type: 'rect',
                                    rect: ['7px', '250px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy3',
                                    type: 'rect',
                                    rect: ['7px', '350px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy4',
                                    type: 'rect',
                                    rect: ['7px', '450px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy5',
                                    type: 'rect',
                                    rect: ['7px', '550px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy6',
                                    type: 'rect',
                                    rect: ['7px', '650px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy7',
                                    type: 'rect',
                                    rect: ['7px', '750px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy8',
                                    type: 'rect',
                                    rect: ['7px', '850px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy9',
                                    type: 'rect',
                                    rect: ['7px', '950px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy10',
                                    type: 'rect',
                                    rect: ['7px', '1050px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy11',
                                    type: 'rect',
                                    rect: ['7px', '1150px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy12',
                                    type: 'rect',
                                    rect: ['7px', '1250px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle5Copy',
                                    type: 'rect',
                                    rect: ['7px', '50px', '1185px', '50px', 'auto', 'auto'],
                                    fill: ["rgba(220,208,229,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'txt_minusculas',
                                    type: 'text',
                                    rect: ['201px', '0px', '200px', '1350px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​a</p><p style=\"margin: 0px;\">​b</p><p style=\"margin: 0px;\">​c</p><p style=\"margin: 0px;\">​d</p><p style=\"margin: 0px;\">​e</p><p style=\"margin: 0px;\">​f</p><p style=\"margin: 0px;\">​g</p><p style=\"margin: 0px;\">​h</p><p style=\"margin: 0px;\">​i</p><p style=\"margin: 0px;\">​j</p><p style=\"margin: 0px;\">​k</p><p style=\"margin: 0px;\">​l</p><p style=\"margin: 0px;\">​m</p><p style=\"margin: 0px;\">​n</p><p style=\"margin: 0px;\">​ñ</p><p style=\"margin: 0px;\">​o</p><p style=\"margin: 0px;\">​p</p><p style=\"margin: 0px;\">​q</p><p style=\"margin: 0px;\">​r</p><p style=\"margin: 0px;\">​s</p><p style=\"margin: 0px;\">​t</p><p style=\"margin: 0px;\">​u</p><p style=\"margin: 0px;\">​v</p><p style=\"margin: 0px;\">​w</p><p style=\"margin: 0px;\">​x</p><p style=\"margin: 0px;\">​y</p><p style=\"margin: 0px;\">​z</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "50px", "20px", "none"]
                                },
                                {
                                    id: 'txt_nombre',
                                    type: 'text',
                                    rect: ['401px', '0px', '400px', '1350px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​a</p><p style=\"margin: 0px;\">​be</p><p style=\"margin: 0px;\">​ce</p><p style=\"margin: 0px;\">​de</p><p style=\"margin: 0px;\">​e</p><p style=\"margin: 0px;\">​efe</p><p style=\"margin: 0px;\">​ge</p><p style=\"margin: 0px;\">​hache</p><p style=\"margin: 0px;\">​i</p><p style=\"margin: 0px;\">​jota</p><p style=\"margin: 0px;\">​ka</p><p style=\"margin: 0px;\">​ele</p><p style=\"margin: 0px;\">​eme</p><p style=\"margin: 0px;\">​ene</p><p style=\"margin: 0px;\">​eñe</p><p style=\"margin: 0px;\">​o</p><p style=\"margin: 0px;\">​pe</p><p style=\"margin: 0px;\">​cu</p><p style=\"margin: 0px;\">​erre</p><p style=\"margin: 0px;\">​ese</p><p style=\"margin: 0px;\">​te</p><p style=\"margin: 0px;\">​u</p><p style=\"margin: 0px;\">​uve</p><p style=\"margin: 0px;\">​doble u</p><p style=\"margin: 0px;\">​equis</p><p style=\"margin: 0px;\">​ye</p><p style=\"margin: 0px;\">​zeta</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "50px", "20px", "none"]
                                },
                                {
                                    id: 'txt_ejemplo',
                                    type: 'text',
                                    rect: ['801px', '0px', '400px', '1350px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Avión</p><p style=\"margin: 0px;\">​Burro</p><p style=\"margin: 0px;\">​Casa</p><p style=\"margin: 0px;\">​Dedo</p><p style=\"margin: 0px;\">​Enano</p><p style=\"margin: 0px;\">​Faro</p><p style=\"margin: 0px;\">​Gato</p><p style=\"margin: 0px;\">​Huevo</p><p style=\"margin: 0px;\">​Iguana</p><p style=\"margin: 0px;\">​Jirafa</p><p style=\"margin: 0px;\">​Kilo</p><p style=\"margin: 0px;\">​Lana</p><p style=\"margin: 0px;\">​Mano</p><p style=\"margin: 0px;\">​Nena</p><p style=\"margin: 0px;\">​Ñame</p><p style=\"margin: 0px;\">​Oro</p><p style=\"margin: 0px;\">​Pera</p><p style=\"margin: 0px;\">​Queso</p><p style=\"margin: 0px;\">​Radio</p><p style=\"margin: 0px;\">​Sapo</p><p style=\"margin: 0px;\">​Tienda</p><p style=\"margin: 0px;\">​Uno</p><p style=\"margin: 0px;\">​Vela</p><p style=\"margin: 0px;\">​Wilson</p><p style=\"margin: 0px;\">​Xilófono</p><p style=\"margin: 0px;\">​Yuca</p><p style=\"margin: 0px;\">​Zapato</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "50px", "20px", "none"]
                                },
                                {
                                    id: 'txt_mayusculas',
                                    type: 'text',
                                    rect: ['1px', '0px', '200px', '1350px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​A</p><p style=\"margin: 0px;\">​B</p><p style=\"margin: 0px;\">​C</p><p style=\"margin: 0px;\">​D</p><p style=\"margin: 0px;\">​E</p><p style=\"margin: 0px;\">​F</p><p style=\"margin: 0px;\">​G</p><p style=\"margin: 0px;\">​H</p><p style=\"margin: 0px;\">​I</p><p style=\"margin: 0px;\">​J</p><p style=\"margin: 0px;\">​K</p><p style=\"margin: 0px;\">​L</p><p style=\"margin: 0px;\">​M</p><p style=\"margin: 0px;\">​N</p><p style=\"margin: 0px;\">​Ñ</p><p style=\"margin: 0px;\">​O</p><p style=\"margin: 0px;\">​P</p><p style=\"margin: 0px;\">​Q</p><p style=\"margin: 0px;\">​R</p><p style=\"margin: 0px;\">​S</p><p style=\"margin: 0px;\">​T</p><p style=\"margin: 0px;\">​U</p><p style=\"margin: 0px;\">​V</p><p style=\"margin: 0px;\">​W</p><p style=\"margin: 0px;\">​X</p><p style=\"margin: 0px;\">​Y</p><p style=\"margin: 0px;\">​Z</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "50px", "20px", "none"]
                                },
                                {
                                    id: 'Rectangle7',
                                    type: 'rect',
                                    rect: ['196px', '0px', '5px', '1350px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle7Copy',
                                    type: 'rect',
                                    rect: ['396px', '0px', '5px', '1350px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'Rectangle7Copy2',
                                    type: 'rect',
                                    rect: ['796px', '0px', '5px', '1350px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1.00)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                }]
                            },
                            {
                                id: 'Rectangle6',
                                type: 'rect',
                                rect: ['175px', '539px', '1201px', '59px', 'auto', 'auto'],
                                fill: ["rgba(79,45,110,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'Text5',
                                type: 'text',
                                rect: ['175px', '539px', '1201px', '59px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; text-indent: 20px;\">Mayúscula &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Minúscula &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Nombre de la letra &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Palabra de ejemplo</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["0", "", "59px", "25px", "none"]
                            }]
                        },
                        {
                            id: 'Banner',
                            type: 'rect',
                            rect: ['193px', '70px', '1550px', '137px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Txt_punto',
                            type: 'text',
                            rect: ['343px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Punto de aprendizaje</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cerrar_punto',
                            symbolName: 'cerrar_punto',
                            type: 'rect',
                            rect: ['1636', '100', '76', '77', 'auto', 'auto'],
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
                            id: 'borde',
                            type: 'ellipse',
                            rect: ['224px', '95px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_puntoaprendizaje',
                            type: 'image',
                            rect: ['169px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn_puntoaprendizaje.png",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
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
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cerrar_punto": {
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("puntoaprendizaje_edgeActions.js");
})("EDGE-30791306");
