var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zonas_distancia_total_1 = new ol.format.GeoJSON();
var features_zonas_distancia_total_1 = format_zonas_distancia_total_1.readFeatures(json_zonas_distancia_total_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_distancia_total_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonas_distancia_total_1.addFeatures(features_zonas_distancia_total_1);
var lyr_zonas_distancia_total_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonas_distancia_total_1, 
                style: style_zonas_distancia_total_1,
                popuplayertitle: 'zonas_distancia_total',
                interactive: true,
                title: '<img src="styles/legend/zonas_distancia_total_1.png" /> zonas_distancia_total'
            });
var format_fundo_2 = new ol.format.GeoJSON();
var features_fundo_2 = format_fundo_2.readFeatures(json_fundo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fundo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fundo_2.addFeatures(features_fundo_2);
var lyr_fundo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fundo_2, 
                style: style_fundo_2,
                popuplayertitle: 'fundo',
                interactive: true,
                title: '<img src="styles/legend/fundo_2.png" /> fundo'
            });
var format_Limite_municipal_3 = new ol.format.GeoJSON();
var features_Limite_municipal_3 = format_Limite_municipal_3.readFeatures(json_Limite_municipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_municipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_municipal_3.addFeatures(features_Limite_municipal_3);
var lyr_Limite_municipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_municipal_3, 
                style: style_Limite_municipal_3,
                popuplayertitle: 'Limite_municipal',
                interactive: true,
                title: '<img src="styles/legend/Limite_municipal_3.png" /> Limite_municipal'
            });
var format_pontos_escola_4 = new ol.format.GeoJSON();
var features_pontos_escola_4 = format_pontos_escola_4.readFeatures(json_pontos_escola_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pontos_escola_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pontos_escola_4.addFeatures(features_pontos_escola_4);
var lyr_pontos_escola_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pontos_escola_4, 
                style: style_pontos_escola_4,
                popuplayertitle: 'pontos_escola',
                interactive: true,
                title: '<img src="styles/legend/pontos_escola_4.png" /> pontos_escola'
            });
var lyr_raster_distancia_escolas_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'raster_distancia_escolas<br />\
    <img src="styles/legend/raster_distancia_escolas_5_0.png" /> 500,0000<br />\
    <img src="styles/legend/raster_distancia_escolas_5_1.png" /> 1000,0000<br />\
    <img src="styles/legend/raster_distancia_escolas_5_2.png" /> 2000,0000<br />\
    <img src="styles/legend/raster_distancia_escolas_5_3.png" /> 3000,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/raster_distancia_escolas_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5506620.642889, -2384023.361186, -5482793.408420, -2348186.572004]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_zonas_distancia_total_1.setVisible(true);lyr_fundo_2.setVisible(true);lyr_Limite_municipal_3.setVisible(true);lyr_pontos_escola_4.setVisible(true);lyr_raster_distancia_escolas_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_zonas_distancia_total_1,lyr_fundo_2,lyr_Limite_municipal_3,lyr_pontos_escola_4,lyr_raster_distancia_escolas_5];
lyr_zonas_distancia_total_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'mobile': 'mobile', 'brand:wikidata': 'brand:wikidata', 'website': 'website', 'denomination': 'denomination', 'layer': 'layer', 'alt_name': 'alt_name', 'sport': 'sport', 'leisure': 'leisure', 'social_facility': 'social_facility', 'school': 'school', 'addr:place': 'addr:place', 'addr:country': 'addr:country', 'short_name': 'short_name', 'barrier': 'barrier', 'addr:district': 'addr:district', 'wheelchair': 'wheelchair', 'building': 'building', 'religion': 'religion', 'ref': 'ref', 'email': 'email', 'contact:phone': 'contact:phone', 'operator:wikidata': 'operator:wikidata', 'operator:type': 'operator:type', 'operator': 'operator', 'official_name': 'official_name', 'addr:state': 'addr:state', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'phone': 'phone', 'name': 'name', 'addr:suburb': 'addr:suburb', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'type': 'type', 'fid_2': 'fid_2', 'full_id_2': 'full_id_2', 'osm_id_2': 'osm_id_2', 'osm_type_2': 'osm_type_2', 'amenity_2': 'amenity_2', 'access': 'access', 'short_name_2': 'short_name_2', 'description': 'description', 'wheelchair_2': 'wheelchair_2', 'operator:wikidata_2': 'operator:wikidata_2', 'operator:type_2': 'operator:type_2', 'barrier_2': 'barrier_2', 'ref_2': 'ref_2', 'email_2': 'email_2', 'alt_name_2': 'alt_name_2', 'operator_2': 'operator_2', 'addr:suburb_2': 'addr:suburb_2', 'addr:housename': 'addr:housename', 'phone_2': 'phone_2', 'addr:country_2': 'addr:country_2', 'addr:state_2': 'addr:state_2', 'addr:district_2': 'addr:district_2', 'addr:city_2': 'addr:city_2', 'name_2': 'name_2', 'contact:phone_2': 'contact:phone_2', 'contact:email': 'contact:email', 'addr:street_2': 'addr:street_2', 'addr:postcode_2': 'addr:postcode_2', 'addr:housenumber_2': 'addr:housenumber_2', 'classe_distancia': 'classe_distancia', 'path': 'path', 'area_m2': 'area_m2', 'total_area': 'total_area', 'perc_area': 'perc_area', });
lyr_fundo_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Limite_municipal_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'source:population': 'source:population', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'name': 'name', 'admin_level': 'admin_level', 'IBGE:GEOCODIGO': 'IBGE:GEOCODIGO', 'area_total_m2': 'area_total_m2', });
lyr_pontos_escola_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'mobile': 'mobile', 'brand:wikidata': 'brand:wikidata', 'website': 'website', 'denomination': 'denomination', 'layer': 'layer', 'alt_name': 'alt_name', 'sport': 'sport', 'leisure': 'leisure', 'social_facility': 'social_facility', 'school': 'school', 'addr:place': 'addr:place', 'addr:country': 'addr:country', 'short_name': 'short_name', 'barrier': 'barrier', 'addr:district': 'addr:district', 'wheelchair': 'wheelchair', 'building': 'building', 'religion': 'religion', 'ref': 'ref', 'email': 'email', 'contact:phone': 'contact:phone', 'operator:wikidata': 'operator:wikidata', 'operator:type': 'operator:type', 'operator': 'operator', 'official_name': 'official_name', 'addr:state': 'addr:state', 'addr:postcode': 'addr:postcode', 'addr:city': 'addr:city', 'phone': 'phone', 'name': 'name', 'addr:suburb': 'addr:suburb', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'type': 'type', 'fid_2': 'fid_2', 'full_id_2': 'full_id_2', 'osm_id_2': 'osm_id_2', 'osm_type_2': 'osm_type_2', 'amenity_2': 'amenity_2', 'access': 'access', 'short_name_2': 'short_name_2', 'description': 'description', 'wheelchair_2': 'wheelchair_2', 'operator:wikidata_2': 'operator:wikidata_2', 'operator:type_2': 'operator:type_2', 'barrier_2': 'barrier_2', 'ref_2': 'ref_2', 'email_2': 'email_2', 'alt_name_2': 'alt_name_2', 'operator_2': 'operator_2', 'addr:suburb_2': 'addr:suburb_2', 'addr:housename': 'addr:housename', 'phone_2': 'phone_2', 'addr:country_2': 'addr:country_2', 'addr:state_2': 'addr:state_2', 'addr:district_2': 'addr:district_2', 'addr:city_2': 'addr:city_2', 'name_2': 'name_2', 'contact:phone_2': 'contact:phone_2', 'contact:email': 'contact:email', 'addr:street_2': 'addr:street_2', 'addr:postcode_2': 'addr:postcode_2', 'addr:housenumber_2': 'addr:housenumber_2', });
lyr_zonas_distancia_total_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'mobile': 'TextEdit', 'brand:wikidata': 'TextEdit', 'website': 'TextEdit', 'denomination': 'TextEdit', 'layer': 'TextEdit', 'alt_name': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'social_facility': 'TextEdit', 'school': 'TextEdit', 'addr:place': 'TextEdit', 'addr:country': 'TextEdit', 'short_name': 'TextEdit', 'barrier': 'TextEdit', 'addr:district': 'TextEdit', 'wheelchair': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'ref': 'TextEdit', 'email': 'TextEdit', 'contact:phone': 'TextEdit', 'operator:wikidata': 'TextEdit', 'operator:type': 'TextEdit', 'operator': 'TextEdit', 'official_name': 'TextEdit', 'addr:state': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'phone': 'TextEdit', 'name': 'TextEdit', 'addr:suburb': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'type': 'TextEdit', 'fid_2': 'TextEdit', 'full_id_2': 'TextEdit', 'osm_id_2': 'TextEdit', 'osm_type_2': 'TextEdit', 'amenity_2': 'TextEdit', 'access': 'TextEdit', 'short_name_2': 'TextEdit', 'description': 'TextEdit', 'wheelchair_2': 'TextEdit', 'operator:wikidata_2': 'TextEdit', 'operator:type_2': 'TextEdit', 'barrier_2': 'TextEdit', 'ref_2': 'TextEdit', 'email_2': 'TextEdit', 'alt_name_2': 'TextEdit', 'operator_2': 'TextEdit', 'addr:suburb_2': 'TextEdit', 'addr:housename': 'TextEdit', 'phone_2': 'TextEdit', 'addr:country_2': 'TextEdit', 'addr:state_2': 'TextEdit', 'addr:district_2': 'TextEdit', 'addr:city_2': 'TextEdit', 'name_2': 'TextEdit', 'contact:phone_2': 'TextEdit', 'contact:email': 'TextEdit', 'addr:street_2': 'TextEdit', 'addr:postcode_2': 'TextEdit', 'addr:housenumber_2': 'TextEdit', 'classe_distancia': 'TextEdit', 'path': 'TextEdit', 'area_m2': 'TextEdit', 'total_area': 'TextEdit', 'perc_area': 'TextEdit', });
lyr_fundo_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', });
lyr_Limite_municipal_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'source:population': 'TextEdit', 'population:date': 'TextEdit', 'population': 'TextEdit', 'place': 'TextEdit', 'name': 'TextEdit', 'admin_level': 'TextEdit', 'IBGE:GEOCODIGO': 'TextEdit', 'area_total_m2': 'TextEdit', });
lyr_pontos_escola_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'mobile': 'TextEdit', 'brand:wikidata': 'TextEdit', 'website': 'TextEdit', 'denomination': 'TextEdit', 'layer': 'TextEdit', 'alt_name': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'social_facility': 'TextEdit', 'school': 'TextEdit', 'addr:place': 'TextEdit', 'addr:country': 'TextEdit', 'short_name': 'TextEdit', 'barrier': 'TextEdit', 'addr:district': 'TextEdit', 'wheelchair': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'ref': 'TextEdit', 'email': 'TextEdit', 'contact:phone': 'TextEdit', 'operator:wikidata': 'TextEdit', 'operator:type': 'TextEdit', 'operator': 'TextEdit', 'official_name': 'TextEdit', 'addr:state': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:city': 'TextEdit', 'phone': 'TextEdit', 'name': 'TextEdit', 'addr:suburb': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'type': 'TextEdit', 'fid_2': 'TextEdit', 'full_id_2': 'TextEdit', 'osm_id_2': 'TextEdit', 'osm_type_2': 'TextEdit', 'amenity_2': 'TextEdit', 'access': 'TextEdit', 'short_name_2': 'TextEdit', 'description': 'TextEdit', 'wheelchair_2': 'TextEdit', 'operator:wikidata_2': 'TextEdit', 'operator:type_2': 'TextEdit', 'barrier_2': 'TextEdit', 'ref_2': 'TextEdit', 'email_2': 'TextEdit', 'alt_name_2': 'TextEdit', 'operator_2': 'TextEdit', 'addr:suburb_2': 'TextEdit', 'addr:housename': 'TextEdit', 'phone_2': 'TextEdit', 'addr:country_2': 'TextEdit', 'addr:state_2': 'TextEdit', 'addr:district_2': 'TextEdit', 'addr:city_2': 'TextEdit', 'name_2': 'TextEdit', 'contact:phone_2': 'TextEdit', 'contact:email': 'TextEdit', 'addr:street_2': 'TextEdit', 'addr:postcode_2': 'TextEdit', 'addr:housenumber_2': 'TextEdit', });
lyr_zonas_distancia_total_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'mobile': 'no label', 'brand:wikidata': 'no label', 'website': 'no label', 'denomination': 'no label', 'layer': 'no label', 'alt_name': 'no label', 'sport': 'no label', 'leisure': 'no label', 'social_facility': 'no label', 'school': 'no label', 'addr:place': 'no label', 'addr:country': 'no label', 'short_name': 'no label', 'barrier': 'no label', 'addr:district': 'no label', 'wheelchair': 'no label', 'building': 'no label', 'religion': 'no label', 'ref': 'no label', 'email': 'no label', 'contact:phone': 'no label', 'operator:wikidata': 'no label', 'operator:type': 'no label', 'operator': 'no label', 'official_name': 'no label', 'addr:state': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'phone': 'no label', 'name': 'no label', 'addr:suburb': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', 'fid_2': 'no label', 'full_id_2': 'no label', 'osm_id_2': 'no label', 'osm_type_2': 'no label', 'amenity_2': 'no label', 'access': 'no label', 'short_name_2': 'no label', 'description': 'no label', 'wheelchair_2': 'no label', 'operator:wikidata_2': 'no label', 'operator:type_2': 'no label', 'barrier_2': 'no label', 'ref_2': 'no label', 'email_2': 'no label', 'alt_name_2': 'no label', 'operator_2': 'no label', 'addr:suburb_2': 'no label', 'addr:housename': 'no label', 'phone_2': 'no label', 'addr:country_2': 'no label', 'addr:state_2': 'no label', 'addr:district_2': 'no label', 'addr:city_2': 'no label', 'name_2': 'no label', 'contact:phone_2': 'no label', 'contact:email': 'no label', 'addr:street_2': 'no label', 'addr:postcode_2': 'no label', 'addr:housenumber_2': 'no label', 'classe_distancia': 'inline label - always visible', 'path': 'no label', 'area_m2': 'inline label - visible with data', 'total_area': 'no label', 'perc_area': 'inline label - visible with data', });
lyr_fundo_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Limite_municipal_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'source:population': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'name': 'no label', 'admin_level': 'no label', 'IBGE:GEOCODIGO': 'no label', 'area_total_m2': 'no label', });
lyr_pontos_escola_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'mobile': 'no label', 'brand:wikidata': 'no label', 'website': 'no label', 'denomination': 'no label', 'layer': 'no label', 'alt_name': 'no label', 'sport': 'no label', 'leisure': 'no label', 'social_facility': 'no label', 'school': 'no label', 'addr:place': 'no label', 'addr:country': 'no label', 'short_name': 'no label', 'barrier': 'no label', 'addr:district': 'no label', 'wheelchair': 'no label', 'building': 'no label', 'religion': 'no label', 'ref': 'no label', 'email': 'no label', 'contact:phone': 'no label', 'operator:wikidata': 'no label', 'operator:type': 'no label', 'operator': 'no label', 'official_name': 'no label', 'addr:state': 'no label', 'addr:postcode': 'no label', 'addr:city': 'no label', 'phone': 'no label', 'name': 'header label - visible with data', 'addr:suburb': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', 'fid_2': 'no label', 'full_id_2': 'no label', 'osm_id_2': 'no label', 'osm_type_2': 'no label', 'amenity_2': 'no label', 'access': 'no label', 'short_name_2': 'no label', 'description': 'no label', 'wheelchair_2': 'no label', 'operator:wikidata_2': 'no label', 'operator:type_2': 'no label', 'barrier_2': 'no label', 'ref_2': 'no label', 'email_2': 'no label', 'alt_name_2': 'no label', 'operator_2': 'no label', 'addr:suburb_2': 'no label', 'addr:housename': 'no label', 'phone_2': 'no label', 'addr:country_2': 'no label', 'addr:state_2': 'no label', 'addr:district_2': 'no label', 'addr:city_2': 'no label', 'name_2': 'no label', 'contact:phone_2': 'no label', 'contact:email': 'no label', 'addr:street_2': 'no label', 'addr:postcode_2': 'no label', 'addr:housenumber_2': 'no label', });
lyr_pontos_escola_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});