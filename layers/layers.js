var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> Biringkanaya<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> Bontoala<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> Galesong Utara<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> Makasar<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> Mamajang<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> Mandai<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> Manggala<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> Mariso<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> Marusu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> Moncong Loe<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> Panakukkang<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> Rappocini<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> Tallo<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> Tamalanrea<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> Tamalate<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> Ujung Pandang<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> Ujung Tanah<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> Wajo<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_18.png" /> <br />' });
var format_ADMINISTRASIKABKOTA_LN_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKABKOTA_LN_50K_2 = format_ADMINISTRASIKABKOTA_LN_50K_2.readFeatures(json_ADMINISTRASIKABKOTA_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKABKOTA_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKABKOTA_LN_50K_2.addFeatures(features_ADMINISTRASIKABKOTA_LN_50K_2);
var lyr_ADMINISTRASIKABKOTA_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKABKOTA_LN_50K_2, 
                style: style_ADMINISTRASIKABKOTA_LN_50K_2,
                popuplayertitle: 'ADMINISTRASIKABKOTA_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKABKOTA_LN_50K_2.png" /> ADMINISTRASIKABKOTA_LN_50K'
            });
var format_JALAN_LN_50K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_3 = format_JALAN_LN_50K_3.readFeatures(json_JALAN_LN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_3.addFeatures(features_JALAN_LN_50K_3);
var lyr_JALAN_LN_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_3, 
                style: style_JALAN_LN_50K_3,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_3.png" /> JALAN_LN_50K'
            });
var format_SUNGAI_AR_50K_4 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_4 = format_SUNGAI_AR_50K_4.readFeatures(json_SUNGAI_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_4.addFeatures(features_SUNGAI_AR_50K_4);
var lyr_SUNGAI_AR_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_50K_4, 
                style: style_SUNGAI_AR_50K_4,
                popuplayertitle: 'SUNGAI_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_50K_4.png" /> SUNGAI_AR_50K'
            });
var format_SUNGAI_LN_50K_5 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_5 = format_SUNGAI_LN_50K_5.readFeatures(json_SUNGAI_LN_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_5.addFeatures(features_SUNGAI_LN_50K_5);
var lyr_SUNGAI_LN_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_5, 
                style: style_SUNGAI_LN_50K_5,
                popuplayertitle: 'SUNGAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_5.png" /> SUNGAI_LN_50K'
            });
var format_AIRPORT_AR_50K_6 = new ol.format.GeoJSON();
var features_AIRPORT_AR_50K_6 = format_AIRPORT_AR_50K_6.readFeatures(json_AIRPORT_AR_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_AR_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_AR_50K_6.addFeatures(features_AIRPORT_AR_50K_6);
var lyr_AIRPORT_AR_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_AR_50K_6, 
                style: style_AIRPORT_AR_50K_6,
                popuplayertitle: 'AIRPORT_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_AR_50K_6.png" /> AIRPORT_AR_50K'
            });
var format_PEMERINTAHAN_PT_50K_7 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_7 = format_PEMERINTAHAN_PT_50K_7.readFeatures(json_PEMERINTAHAN_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_7.addFeatures(features_PEMERINTAHAN_PT_50K_7);
var lyr_PEMERINTAHAN_PT_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_50K_7, 
                style: style_PEMERINTAHAN_PT_50K_7,
                popuplayertitle: 'PEMERINTAHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_7.png" /> PEMERINTAHAN_PT_50K'
            });
var format_PELABUHAN_PT_50K_8 = new ol.format.GeoJSON();
var features_PELABUHAN_PT_50K_8 = format_PELABUHAN_PT_50K_8.readFeatures(json_PELABUHAN_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELABUHAN_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELABUHAN_PT_50K_8.addFeatures(features_PELABUHAN_PT_50K_8);
var lyr_PELABUHAN_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PELABUHAN_PT_50K_8, 
                style: style_PELABUHAN_PT_50K_8,
                popuplayertitle: 'PELABUHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PELABUHAN_PT_50K_8.png" /> PELABUHAN_PT_50K'
            });
var format_PUSKESMAS_PT_50K_9 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_9 = format_PUSKESMAS_PT_50K_9.readFeatures(json_PUSKESMAS_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_PT_50K_9.addFeatures(features_PUSKESMAS_PT_50K_9);
var lyr_PUSKESMAS_PT_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_PT_50K_9, 
                style: style_PUSKESMAS_PT_50K_9,
                popuplayertitle: 'PUSKESMAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_9.png" /> PUSKESMAS_PT_50K'
            });
var format_JEMBATAN_PT_50K_10 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_50K_10 = format_JEMBATAN_PT_50K_10.readFeatures(json_JEMBATAN_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_50K_10.addFeatures(features_JEMBATAN_PT_50K_10);
var lyr_JEMBATAN_PT_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_50K_10, 
                style: style_JEMBATAN_PT_50K_10,
                popuplayertitle: 'JEMBATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_50K_10.png" /> JEMBATAN_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_11 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_11 = format_RUMAHSAKIT_PT_50K_11.readFeatures(json_RUMAHSAKIT_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_11.addFeatures(features_RUMAHSAKIT_PT_50K_11);
var lyr_RUMAHSAKIT_PT_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_11, 
                style: style_RUMAHSAKIT_PT_50K_11,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_11.png" /> RUMAHSAKIT_PT_50K'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_ADMINISTRASIKABKOTA_LN_50K_2.setVisible(true);lyr_JALAN_LN_50K_3.setVisible(true);lyr_SUNGAI_AR_50K_4.setVisible(true);lyr_SUNGAI_LN_50K_5.setVisible(true);lyr_AIRPORT_AR_50K_6.setVisible(true);lyr_PEMERINTAHAN_PT_50K_7.setVisible(true);lyr_PELABUHAN_PT_50K_8.setVisible(true);lyr_PUSKESMAS_PT_50K_9.setVisible(true);lyr_JEMBATAN_PT_50K_10.setVisible(true);lyr_RUMAHSAKIT_PT_50K_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_ADMINISTRASIKABKOTA_LN_50K_2,lyr_JALAN_LN_50K_3,lyr_SUNGAI_AR_50K_4,lyr_SUNGAI_LN_50K_5,lyr_AIRPORT_AR_50K_6,lyr_PEMERINTAHAN_PT_50K_7,lyr_PELABUHAN_PT_50K_8,lyr_PUSKESMAS_PT_50K_9,lyr_JEMBATAN_PT_50K_10,lyr_RUMAHSAKIT_PT_50K_11];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIKABKOTA_LN_50K_2.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_AR_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_AIRPORT_AR_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KATBMI': 'KATBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'RUNWAY': 'RUNWAY', 'PARK': 'PARK', 'LPG': 'LPG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PELABUHAN_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_PUSKESMAS_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_JEMBATAN_PT_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RUMAHSAKIT_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIKABKOTA_LN_50K_2.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_50K_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_AR_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_LN_50K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_AIRPORT_AR_50K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KOBDMI': 'TextEdit', 'KDICAO': 'TextEdit', 'KDIATA': 'TextEdit', 'ELEVAS': 'TextEdit', 'MAVBMI': 'TextEdit', 'LGTBMI': 'TextEdit', 'KATBMI': 'TextEdit', 'KLSBMI': 'TextEdit', 'ADABMI': 'TextEdit', 'ADRBMI': 'TextEdit', 'REMARK': 'TextEdit', 'TIPAIP': 'TextEdit', 'TIPLOK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'RUNWAY': 'TextEdit', 'PARK': 'TextEdit', 'LPG': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PELABUHAN_PT_50K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'ADMPEL': 'TextEdit', 'JNSPEL': 'TextEdit', 'FGSPEL': 'TextEdit', 'PJAPEL': 'TextEdit', 'LAMPEL': 'TextEdit', 'STUPEL': 'TextEdit', 'KONKON': 'TextEdit', 'LUAS': 'TextEdit', 'KMXPEL': 'TextEdit', 'KMNPEL': 'TextEdit', 'STPPEL': 'TextEdit', 'SRPPEL': 'TextEdit', 'ALJPEL': 'TextEdit', 'REMARK': 'TextEdit', 'KLSPEL': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KODPEL': 'TextEdit', });
lyr_PUSKESMAS_PT_50K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'KWKPKM_': 'TextEdit', 'KMPPKM_': 'TextEdit', 'JPLPKM_': 'TextEdit', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'TextEdit', 'PKMLMT_': 'TextEdit', });
lyr_JEMBATAN_PT_50K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'TextEdit', 'TGGJMB': 'TextEdit', 'LBRJMB': 'TextEdit', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'TextEdit', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'JBTJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'inline label - always visible', 'WIADKK': 'hidden field', 'WADMPR': 'inline label - always visible', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_ADMINISTRASIKABKOTA_LN_50K_2.set('fieldLabels', {'KARKTR': 'inline label - always visible', 'STSBTS': 'hidden field', 'FCODE': 'hidden field', 'KELAS': 'hidden field', 'UUPP': 'hidden field', 'LOKASI': 'inline label - always visible', 'REMARK': 'hidden field', 'NAMOBJ': 'hidden field', 'ADMIN1': 'hidden field', 'ADMIN2': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'WAKLD1': 'hidden field', 'WAKLD2': 'hidden field', 'WADKC1': 'hidden field', 'WADKC2': 'hidden field', 'WAKBK1': 'hidden field', 'WAKBK2': 'hidden field', 'WAPRO1': 'hidden field', 'WAPRO2': 'hidden field', 'TIPTBT': 'hidden field', 'PJGBTS': 'hidden field', 'KLBADM': 'hidden field', 'TIPLOK': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_JALAN_LN_50K_3.set('fieldLabels', {'NAMRJL': 'inline label - always visible', 'KONRJL': 'hidden field', 'MATRJL': 'hidden field', 'FGSRJL': 'hidden field', 'UTKRJL': 'hidden field', 'TOLRJL': 'hidden field', 'WLYRJL': 'hidden field', 'AUTRJL': 'hidden field', 'KLSRJL': 'hidden field', 'SPCRJL': 'hidden field', 'JPARJL': 'hidden field', 'ARHRJL': 'hidden field', 'STARJL': 'hidden field', 'KLLRJL': 'hidden field', 'MEDRJL': 'hidden field', 'LOCRJL': 'hidden field', 'JARRJL': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_SUNGAI_AR_50K_4.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'JNSSNG': 'hidden field', 'KLSSNG': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'NAMWS': 'hidden field', 'NAMDAS': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_SUNGAI_LN_50K_5.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'TIPSNG': 'hidden field', 'KLSSNG': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'NAMWS': 'hidden field', 'NAMDAS': 'hidden field', 'STATUS': 'hidden field', 'WMAX': 'hidden field', 'DBTMAX': 'hidden field', 'SLPRT': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_AIRPORT_AR_50K_6.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'KOBDMI': 'hidden field', 'KDICAO': 'hidden field', 'KDIATA': 'hidden field', 'ELEVAS': 'hidden field', 'MAVBMI': 'hidden field', 'LGTBMI': 'hidden field', 'KATBMI': 'hidden field', 'KLSBMI': 'hidden field', 'ADABMI': 'hidden field', 'ADRBMI': 'hidden field', 'REMARK': 'hidden field', 'TIPAIP': 'hidden field', 'TIPLOK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'RUNWAY': 'hidden field', 'PARK': 'hidden field', 'LPG': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_PEMERINTAHAN_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FGSGOV': 'hidden field', 'LUAS': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', });
lyr_PELABUHAN_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'ADMPEL': 'hidden field', 'JNSPEL': 'hidden field', 'FGSPEL': 'hidden field', 'PJAPEL': 'hidden field', 'LAMPEL': 'hidden field', 'STUPEL': 'hidden field', 'KONKON': 'hidden field', 'LUAS': 'hidden field', 'KMXPEL': 'hidden field', 'KMNPEL': 'hidden field', 'STPPEL': 'hidden field', 'SRPPEL': 'hidden field', 'ALJPEL': 'hidden field', 'REMARK': 'hidden field', 'KLSPEL': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KODPEL': 'hidden field', });
lyr_PUSKESMAS_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'SRS_ID': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'KWKPKM_': 'hidden field', 'KMPPKM_': 'hidden field', 'JPLPKM_': 'hidden field', 'PKMKODE_': 'hidden field', 'PKMKAT_': 'hidden field', 'PKMLMT_': 'hidden field', });
lyr_JEMBATAN_PT_50K_10.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'TIPJMB': 'hidden field', 'FGSJMB': 'hidden field', 'TONJMB': 'hidden field', 'TGGJMB': 'hidden field', 'LBRJMB': 'hidden field', 'MATJMB': 'hidden field', 'STRJMB': 'hidden field', 'DEKJMB': 'hidden field', 'BTSJMB': 'hidden field', 'AYUJMB': 'hidden field', 'JBTJMB': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', });
lyr_RUMAHSAKIT_PT_50K_11.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'LCODE': 'inline label - visible with data', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'TIPRST': 'hidden field', 'JPLYRS': 'hidden field', 'ALAMAT': 'hidden field', });
lyr_RUMAHSAKIT_PT_50K_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});