window.__GIS_PROJECTS__ = {
  "projects": [
    {
      "slug": "elephant-movement-hwange-kaza",
      "title": "Seasonal Movement of African Elephants in Hwange NP and the KAZA-TFCA",
      "summary": "How vegetation greenness, temperature and spatial memory shape where ten GPS-collared elephants go in the dry and wet seasons.",
      "category": "Conservation",
      "year": "2026",
      "status": "Manuscript in preparation",
      "location": "Hwange National Park and KAZA-TFCA, Zimbabwe",
      "coords": {
        "lat": -18.9,
        "lng": 26.7
      },
      "role": "Lead researcher",
      "client": "University of Zimbabwe, BSc (Hons) GIS and Earth Observation",
      "duration": "Final-year research project",
      "brief": [
        "Hwange National Park sits inside the Kavango-Zambezi Transfrontier Conservation Area (KAZA-TFCA), the largest connected conservation landscape in Africa. Elephants there cross park and country boundaries every year, so managing them well means knowing when and why they move.",
        "This project follows ten collared elephants (UZ1–UZ8, UZ10, UZ11) from 2015 to 2018 and compares how they use the landscape in the dry season (May–October) and the wet season (November–April). The maps on this page are the project’s main spatial outputs."
      ],
      "objectives": [
        "Test how temperature relates to speed, step length, direction and the timing of waterhole visits.",
        "Test how vegetation greenness (NDVI) relates to movement in each season.",
        "Look for evidence of spatial memory: do elephants return to the same waterholes and grid cells year after year?"
      ],
      "methodology": [
        {
          "title": "Clean the GPS record",
          "text": "Removed duplicate fixes, sorted every elephant by date and time, and recalculated step length and speed from raw coordinates with the Haversine formula, because the original step column was out of order."
        },
        {
          "title": "Split by season",
          "text": "Assigned each fix to the dry season (May–October) or wet season (November–April)."
        },
        {
          "title": "Attach the environment",
          "text": "Extracted season-matched NDVI (MODIS MOD13Q1, 250 m) and land-surface temperature (MODIS MOD11A2, 1 km) at every GPS fix with Google Earth Engine."
        },
        {
          "title": "Measure the path",
          "text": "Calculated a Straightness Index over a five-fix sliding window and classed segments as directed (above 0.75), mixed (0.50–0.75) or tortuous (below 0.50)."
        },
        {
          "title": "Test the relationships",
          "text": "Used Pearson correlations, linear mixed models with elephant identity as a random intercept, and chi-squared tests for direction."
        },
        {
          "title": "Measure site fidelity",
          "text": "Counted how many of the four years each grid cell was used and compared years with Jaccard similarity."
        }
      ],
      "dataSources": [
        "GPS collar telemetry, ten elephants, 2015–2018 (about 44,700 fixes)",
        "MODIS MOD13Q1.061 NDVI, 250 m",
        "MODIS MOD11A2.061 land-surface temperature, 1 km",
        "Protected-area boundaries across the KAZA-TFCA",
        "Waterhole locations, with GPS visits counted per waterhole in each season"
      ],
      "software": [
        "R",
        "RStudio",
        "Google Earth Engine",
        "QGIS",
        "sf",
        "terra",
        "adehabitatHR",
        "amt",
        "lme4",
        "recurse",
        "ggplot2"
      ],
      "findings": [
        "Season-matched NDVI along the tracks ranged from 0.129 to 0.602 in the dry season and from 0.107 to 0.784 in the wet season.",
        "Dry-season movement concentrates in Chobe-Savuti and eastern Hwange. In the wet season the tracks spread west and south-west into Chobe FR, PA-18 and Ngwezumba FR, and north towards PA-10.",
        "No dry-season cell was used in all four years. The cells used in every year are wet-season cells, in Chobe-Savuti, around PA-18 and in south-east Hwange.",
        "Most of the record comes from the wet season: 25,034 movement segments against 19,697 in the dry season.",
        "Waterhole use is more concentrated in the dry season: one waterhole receives up to 81 GPS visits in May–October, against a maximum of 40 in November–April.",
        "Dry-season visits cluster on the eastern side of Hwange NP towards Zambezi NP and Matetsi, with large waterholes also in the north-west near Kazuma Pan and Chobe-Savuti; in the wet season visits spread across more waterholes.",
        "Individual elephants keep to distinct ranges: in the wet season UZ8 reaches furthest west, into Ngwezumba FR, Chobe FR and PA-18, while UZ4 and UZ5 stay in the south-east."
      ],
      "stats": [
        {
          "value": "10",
          "label": "Collared elephants"
        },
        {
          "value": "44.7k",
          "label": "Movement segments"
        },
        {
          "value": "2015–18",
          "label": "Collar record"
        },
        {
          "value": "2",
          "label": "Seasons compared"
        },
        {
          "value": "81",
          "label": "Peak dry-season visits at one waterhole"
        }
      ],
      "tags": [
        "Movement ecology",
        "NDVI",
        "GPS telemetry",
        "KAZA",
        "Waterholes",
        "Spatial memory"
      ],
      "featured": true,
      "order": 1,
      "compares": [
        {
          "a": "01-ndvi-dry-season",
          "b": "02-ndvi-wet-season",
          "title": "NDVI along elephant tracks: dry against wet season",
          "labelA": "Dry (May–Oct)",
          "labelB": "Wet (Nov–Apr)"
        },
        {
          "a": "03-temperature-dry-season",
          "b": "04-temperature-wet-season",
          "title": "Temperature at GPS fixes: dry against wet season",
          "labelA": "Dry (May–Oct)",
          "labelB": "Wet (Nov–Apr)"
        },
        {
          "a": "08-movement-trajectories-dry-season",
          "b": "09-movement-trajectories-wet-season",
          "title": "Movement trajectories by elephant: dry against wet season",
          "labelA": "Dry (May–Oct)",
          "labelB": "Wet (Nov–Apr)"
        }
      ],
      "cover": "07-all-layers-combined",
      "images": [
        {
          "id": "01-ndvi-dry-season",
          "file": "01-ndvi-dry-season.png",
          "kind": "map",
          "caption": "Dry season (May–October): movement segments of all ten elephants coloured by season-matched MODIS NDVI, 19,697 segments.",
          "alt": "Dry season (May–October): movement segments of all ten elephants coloured by season-matched MODIS NDVI, 19,697 segments.",
          "v": 1793961394289,
          "w": 7200,
          "h": 5600,
          "thumb": "01-ndvi-dry-season.webp",
          "tw": 1800,
          "sz": 3002586
        },
        {
          "id": "02-ndvi-wet-season",
          "file": "02-ndvi-wet-season.png",
          "kind": "map",
          "caption": "Wet season (November–April): the same display for 25,034 segments, with tracks reaching further west.",
          "alt": "Wet season (November–April): the same display for 25,034 segments, with tracks reaching further west.",
          "v": 1793961394294,
          "w": 7200,
          "h": 5600,
          "thumb": "02-ndvi-wet-season.webp",
          "tw": 1800,
          "sz": 4915653
        },
        {
          "id": "03-temperature-dry-season",
          "file": "03-temperature-dry-season.png",
          "kind": "map",
          "caption": "Dry-season tracks coloured by land-surface temperature at each GPS fix.",
          "alt": "Dry-season tracks coloured by land-surface temperature at each GPS fix.",
          "v": 1793961394292,
          "w": 4676,
          "h": 3308,
          "thumb": "03-temperature-dry-season.webp",
          "tw": 1800,
          "sz": 1482287
        },
        {
          "id": "04-temperature-wet-season",
          "file": "04-temperature-wet-season.png",
          "kind": "map",
          "caption": "Wet-season tracks coloured by temperature at each fix.",
          "alt": "Wet-season tracks coloured by temperature at each fix.",
          "v": 1793961394294,
          "w": 4676,
          "h": 3308,
          "thumb": "04-temperature-wet-season.webp",
          "tw": 1800,
          "sz": 1936313
        },
        {
          "id": "05-straightness-index-tracks",
          "file": "05-straightness-index-tracks.png",
          "kind": "map",
          "caption": "Straightness Index: directed (above 0.75) in green, mixed in orange, tortuous (below 0.50) in red, dry and wet seasons.",
          "alt": "Straightness Index: directed (above 0.75) in green, mixed in orange, tortuous (below 0.50) in red, dry and wet seasons.",
          "v": 1793961394293,
          "w": 6600,
          "h": 3000,
          "thumb": "05-straightness-index-tracks.webp",
          "tw": 1800,
          "sz": 2369736
        },
        {
          "id": "06-temporal-persistence",
          "file": "06-temporal-persistence.png",
          "kind": "map",
          "caption": "Temporal persistence: grid cells shaded by the number of years (1–4) they were used, dry and wet seasons.",
          "alt": "Temporal persistence: grid cells shaded by the number of years (1–4) they were used, dry and wet seasons.",
          "v": 1793961394291,
          "w": 6600,
          "h": 3000,
          "thumb": "06-temporal-persistence.webp",
          "tw": 1800,
          "sz": 786549
        },
        {
          "id": "07-all-layers-combined",
          "file": "07-all-layers-combined.png",
          "kind": "map",
          "caption": "All layers combined: year-of-use cells with directed and tortuous tracks on top, dry and wet seasons.",
          "alt": "All layers combined: year-of-use cells with directed and tortuous tracks on top, dry and wet seasons.",
          "v": 1793961394291,
          "w": 7800,
          "h": 3600,
          "thumb": "07-all-layers-combined.webp",
          "tw": 1800,
          "sz": 2241222
        },
        {
          "id": "08-movement-trajectories-dry-season",
          "file": "08-movement-trajectories-dry-season.png",
          "kind": "map",
          "caption": "Dry season (May–October): movement trajectories of all ten elephants, one colour per animal, 20,105 movement segments.",
          "alt": "Dry season (May–October): movement trajectories of all ten elephants, one colour per animal, 20,105 movement segments.",
          "w": 7200,
          "h": 5600,
          "thumb": "08-movement-trajectories-dry-season.webp",
          "tw": 1800,
          "sz": 2766987,
          "v": 1793961511988
        },
        {
          "id": "09-movement-trajectories-wet-season",
          "file": "09-movement-trajectories-wet-season.png",
          "kind": "map",
          "caption": "Wet season (November–April): the same ten elephants, 25,501 movement segments, with UZ8 ranging far to the west.",
          "alt": "Wet season (November–April): the same ten elephants, 25,501 movement segments, with UZ8 ranging far to the west.",
          "w": 7200,
          "h": 5600,
          "thumb": "09-movement-trajectories-wet-season.webp",
          "tw": 1800,
          "sz": 4259329,
          "v": 1793961513512
        },
        {
          "id": "10-waterhole-visits-dry-wet",
          "file": "10-waterhole-visits-dry-wet.png",
          "kind": "map",
          "caption": "GPS visits per waterhole, dry season (1–81 visits) beside wet season (1–40 visits); grey dots are active waterholes that were never visited.",
          "alt": "GPS visits per waterhole, dry season (1–81 visits) beside wet season (1–40 visits); grey dots are active waterholes that were never visited.",
          "w": 8000,
          "h": 4266,
          "thumb": "10-waterhole-visits-dry-wet.webp",
          "tw": 1800,
          "sz": 1379356,
          "v": 1793961515080
        }
      ]
    },
    {
      "slug": "mushandike-land-cover-2017-2023",
      "title": "Land Use and Land Cover Change in Mushandike Sanctuary, 2017–2023",
      "summary": "Seven annual land-cover maps, a district-wide comparison and a three-date change view for the sanctuary.",
      "category": "Land & terrain",
      "year": "2025",
      "status": "Report delivered",
      "location": "Mushandike Sanctuary, Masvingo District, Zimbabwe",
      "coords": {
        "lat": -20.13,
        "lng": 30.62
      },
      "role": "Geospatial scientist",
      "client": "Zimbabwe Institute of Wildlife Conservation, ZIMPARKS",
      "duration": "January 2025",
      "brief": [
        "Mushandike Sanctuary is built around a reservoir, and most of the land around it is vegetation. This report maps land cover for every year from 2017 to 2023 to see how that mix has changed.",
        "It is organised in three parts: Section A shows one map per year, Section B shows the sanctuary against its surroundings in the district, and Section C compares 2017, 2020 and 2023 side by side."
      ],
      "objectives": [
        "Map land cover inside the sanctuary for each year from 2017 to 2023.",
        "Place the sanctuary in the context of the land around it.",
        "Compare 2017, 2020 and 2023 to see what changed over three-year steps."
      ],
      "methodology": [
        {
          "title": "Gather the annual layers",
          "text": "Downloaded the Esri annual land-cover rasters (10 m) for 2017 to 2023."
        },
        {
          "title": "Clip to two extents",
          "text": "Clipped each year to the sanctuary boundary, and to a wider window across Masvingo District for the context maps."
        },
        {
          "title": "Use one palette",
          "text": "Styled water, vegetation, crops, buildings and rangeland with the same colours in every map so the years read as a series."
        },
        {
          "title": "Compose the report",
          "text": "Built the layouts in QGIS Print Layout (EPSG:32736) with a locator map, scale bar and map properties box on every sheet."
        }
      ],
      "dataSources": [
        "Esri annual land cover, 2017–2023",
        "Sanctuary boundary supplied by ZIMPARKS",
        "Masvingo District boundary"
      ],
      "software": [
        "QGIS",
        "Esri land cover",
        "QGIS Print Layout"
      ],
      "findings": [
        "Vegetation is the dominant class in every year; rangeland appears as patches scattered through it.",
        "The reservoir is at its smallest in the 2020 map.",
        "In the district context maps, crop pixels sit outside the sanctuary boundary, not inside it."
      ],
      "stats": [
        {
          "value": "7",
          "label": "Annual maps"
        },
        {
          "value": "10 m",
          "label": "Pixel size"
        },
        {
          "value": "5",
          "label": "Land-cover classes"
        }
      ],
      "tags": [
        "Land cover",
        "Change detection",
        "Esri",
        "ZIMPARKS"
      ],
      "featured": true,
      "order": 2,
      "compares": [
        {
          "a": "01-land-cover-2017",
          "b": "07-land-cover-2023",
          "title": "Sanctuary land cover: 2017 against 2023",
          "labelA": "2017",
          "labelB": "2023"
        }
      ],
      "cover": "08-triennial-change-2017-2020-2023",
      "images": [
        {
          "id": "01-land-cover-2017",
          "file": "01-land-cover-2017.png",
          "kind": "map",
          "caption": "Land cover of Mushandike Sanctuary in 2017.",
          "alt": "Land cover of Mushandike Sanctuary in 2017.",
          "v": 1793961394283,
          "w": 1076,
          "h": 764,
          "thumb": "01-land-cover-2017.webp",
          "tw": 1076,
          "sz": 307382
        },
        {
          "id": "02-land-cover-2018",
          "file": "02-land-cover-2018.png",
          "kind": "map",
          "caption": "Land cover of Mushandike Sanctuary in 2018.",
          "alt": "Land cover of Mushandike Sanctuary in 2018.",
          "v": 1793961394284,
          "w": 1069,
          "h": 758,
          "thumb": "02-land-cover-2018.webp",
          "tw": 1069,
          "sz": 303482
        },
        {
          "id": "03-land-cover-2019",
          "file": "03-land-cover-2019.png",
          "kind": "map",
          "caption": "Land cover of Mushandike Sanctuary in 2019.",
          "alt": "Land cover of Mushandike Sanctuary in 2019.",
          "v": 1793961394283,
          "w": 1069,
          "h": 758,
          "thumb": "03-land-cover-2019.webp",
          "tw": 1069,
          "sz": 297610
        },
        {
          "id": "04-land-cover-2020",
          "file": "04-land-cover-2020.png",
          "kind": "map",
          "caption": "Land cover of Mushandike Sanctuary in 2020.",
          "alt": "Land cover of Mushandike Sanctuary in 2020.",
          "v": 1793961394285,
          "w": 1069,
          "h": 758,
          "thumb": "04-land-cover-2020.webp",
          "tw": 1069,
          "sz": 196615
        },
        {
          "id": "05-land-cover-2021",
          "file": "05-land-cover-2021.png",
          "kind": "map",
          "caption": "Land cover of Mushandike Sanctuary in 2021.",
          "alt": "Land cover of Mushandike Sanctuary in 2021.",
          "v": 1793961394284,
          "w": 1069,
          "h": 752,
          "thumb": "05-land-cover-2021.webp",
          "tw": 1069,
          "sz": 293869
        },
        {
          "id": "06-land-cover-2022",
          "file": "06-land-cover-2022.png",
          "kind": "map",
          "caption": "Land cover of Mushandike Sanctuary in 2022.",
          "alt": "Land cover of Mushandike Sanctuary in 2022.",
          "v": 1793961394284,
          "w": 1069,
          "h": 758,
          "thumb": "06-land-cover-2022.webp",
          "tw": 1069,
          "sz": 287822
        },
        {
          "id": "07-land-cover-2023",
          "file": "07-land-cover-2023.png",
          "kind": "map",
          "caption": "Land cover of Mushandike Sanctuary in 2023.",
          "alt": "Land cover of Mushandike Sanctuary in 2023.",
          "v": 1793961394284,
          "w": 1069,
          "h": 752,
          "thumb": "07-land-cover-2023.webp",
          "tw": 1069,
          "sz": 292550
        },
        {
          "id": "08-triennial-change-2017-2020-2023",
          "file": "08-triennial-change-2017-2020-2023.png",
          "kind": "map",
          "caption": "Triennial comparison: 2017, 2020 and 2023 stacked on one sheet.",
          "alt": "Triennial comparison: 2017, 2020 and 2023 stacked on one sheet.",
          "v": 1793961394283,
          "w": 1076,
          "h": 853,
          "thumb": "08-triennial-change-2017-2020-2023.webp",
          "tw": 1076,
          "sz": 266499
        },
        {
          "id": "09-sanctuary-and-surroundings-2017",
          "file": "09-sanctuary-and-surroundings-2017.png",
          "kind": "map",
          "caption": "The sanctuary and its surroundings in Masvingo District, 2017.",
          "alt": "The sanctuary and its surroundings in Masvingo District, 2017.",
          "v": 1793961394284,
          "w": 1069,
          "h": 738,
          "thumb": "09-sanctuary-and-surroundings-2017.webp",
          "tw": 1069,
          "sz": 730774
        },
        {
          "id": "10-sanctuary-and-surroundings-2022",
          "file": "10-sanctuary-and-surroundings-2022.png",
          "kind": "map",
          "caption": "The sanctuary and its surroundings in Masvingo District, 2022.",
          "alt": "The sanctuary and its surroundings in Masvingo District, 2022.",
          "v": 1793961394284,
          "w": 1069,
          "h": 749,
          "thumb": "10-sanctuary-and-surroundings-2022.webp",
          "tw": 1069,
          "sz": 773063
        }
      ]
    },
    {
      "slug": "mushandike-dem-patrol-sections",
      "title": "Mushandike Sanctuary: Elevation, Patrol Sections and Hydrology",
      "summary": "A digital elevation model cut into five equal-area classes, with patrol sections, roads, rivers and the dam.",
      "category": "Land & terrain",
      "year": "2025",
      "status": "Map prepared for ZIMPARKS",
      "location": "Mushandike Sanctuary, Masvingo, Zimbabwe",
      "coords": {
        "lat": -20.13,
        "lng": 30.62
      },
      "role": "Geospatial scientist",
      "client": "ZIMPARKS, Mushandike Sanctuary Station",
      "duration": "ZIMPARKS internship, 2024–2025",
      "brief": [
        "Patrol planning, water management and infrastructure all start with the lie of the land. This map puts relief, drainage and the five patrol sections on one sheet so routes and water points can be discussed against the ground.",
        "The sheet carries an area summary and an elevation-class table, so the same page works as a briefing map and as a reference."
      ],
      "objectives": [
        "Classify the sanctuary’s relief into five elevation classes of similar area.",
        "Overlay patrol sections, roads, rivers and the dam on the elevation model.",
        "Report the sanctuary’s total area and perimeter."
      ],
      "methodology": [
        {
          "title": "Prepare the DEM",
          "text": "Clipped the elevation raster to the sanctuary boundary in EPSG:32736 (WGS 84 / UTM zone 36S)."
        },
        {
          "title": "Classify",
          "text": "Reclassified the DEM into five classes, from 974 m and below to above 1,082 m, each covering about a fifth of the area."
        },
        {
          "title": "Measure",
          "text": "Calculated the area and share of each class and the sanctuary perimeter."
        },
        {
          "title": "Overlay and lay out",
          "text": "Added patrol sections, roads, rivers and the dam, then composed the sheet in QGIS with a title block, key and tables."
        }
      ],
      "dataSources": [
        "ZIMPARKS Mushandike Sanctuary DEM survey",
        "Sanctuary boundary, hydrology and patrol-section geometry from the ZIMPARKS dataset"
      ],
      "software": [
        "QGIS",
        "QGIS Print Layout",
        "Raster reclassification"
      ],
      "findings": [
        "The sanctuary covers 130.58 km² with a 53.96 km perimeter.",
        "The lowest class (974 m and below) covers 23.16 km², 17.7% of the area, and follows the dam and the river channels that drain into it.",
        "The highest class (above 1,082 m) covers 27.08 km², 20.7%, mostly along the eastern and western margins."
      ],
      "stats": [
        {
          "value": "130.6 km²",
          "label": "Sanctuary area"
        },
        {
          "value": "53.96 km",
          "label": "Perimeter"
        },
        {
          "value": "5",
          "label": "Patrol sections"
        }
      ],
      "tags": [
        "DEM",
        "Hydrology",
        "Patrol planning",
        "ZIMPARKS"
      ],
      "order": 3,
      "images": [
        {
          "id": "01-dem-patrol-sections",
          "file": "01-dem-patrol-sections.png",
          "kind": "map",
          "caption": "Digital elevation model in five classes with patrol sections 1–5, roads, rivers, the dam and an area summary.",
          "alt": "Digital elevation model in five classes with patrol sections 1–5, roads, rivers, the dam and an area summary.",
          "v": 1793961394285,
          "w": 4840,
          "h": 3740,
          "thumb": "01-dem-patrol-sections.webp",
          "tw": 1800,
          "sz": 4381527
        }
      ],
      "cover": "01-dem-patrol-sections",
      "compares": []
    },
    {
      "slug": "mushandike-dmr-repeater-planning",
      "title": "DMR Radio Network Planning: Repeater Sites and Line of Sight",
      "summary": "A terrain map for placing radio repeaters at Mushandike, with numbered line-of-sight paths between the key sites.",
      "category": "Land & terrain",
      "year": "2025",
      "status": "ZIMPARKS internship project",
      "location": "Mushandike Sanctuary, Masvingo, Zimbabwe",
      "coords": {
        "lat": -20.13,
        "lng": 30.62
      },
      "role": "Geospatial scientist",
      "client": "ZIMPARKS, Mushandike Sanctuary Station",
      "duration": "ZIMPARKS internship, 2024–2025",
      "brief": [
        "Radio coverage depends on what stands between two antennas. This map lays the DMR project’s sites over the terrain so each link can be read against the ground.",
        "It shows the entrance gate, Eland, the principal’s lodge, the main office and Sukwe Base, four proposed repeater sites, and dashed line-of-sight paths numbered 1 to 11."
      ],
      "objectives": [
        "Show where proposed repeaters sit in relation to the sanctuary’s gates, lodges and bases.",
        "Draw line-of-sight paths between sites and read them against the terrain.",
        "Record the UTM coordinates and elevation of the key sites in one table."
      ],
      "methodology": [
        {
          "title": "Build the terrain base",
          "text": "Coloured the elevation model from 930 m to 1,352 m and added contour lines, roads and rivers."
        },
        {
          "title": "Place the sites",
          "text": "Plotted the DMR project sites and the proposed repeater sites from their UTM coordinates."
        },
        {
          "title": "Draw the links",
          "text": "Drew numbered line-of-sight paths between sites and labelled the main roads that serve them."
        },
        {
          "title": "Tabulate",
          "text": "Added a table of X, Y and Z values for the key sites, plus the area and perimeter of the sanctuary."
        }
      ],
      "dataSources": [
        "ZIMPARKS site coordinates and boundary",
        "Elevation model and contours of Mushandike Sanctuary"
      ],
      "software": [
        "QGIS",
        "Contour generation",
        "QGIS Print Layout"
      ],
      "findings": [
        "Four sites are tabulated with elevation: Entrance Gate 988 m, Eland 1,005 m, Principal’s Lodge 987 m and Main Office 963 m.",
        "That is a 42 m spread, with the Main Office the lowest of the four.",
        "The map shows four proposed repeater sites and eleven numbered line-of-sight paths across a site of about 129 km² and 53.5 km perimeter."
      ],
      "stats": [
        {
          "value": "4",
          "label": "Proposed repeaters"
        },
        {
          "value": "11",
          "label": "Line-of-sight paths"
        },
        {
          "value": "129 km²",
          "label": "Site area"
        }
      ],
      "tags": [
        "Radio planning",
        "Line of sight",
        "Terrain"
      ],
      "order": 4,
      "images": [
        {
          "id": "01-dmr-repeater-sites",
          "file": "01-dmr-repeater-sites.jpeg",
          "kind": "map",
          "caption": "Terrain map with proposed repeater sites, numbered line-of-sight paths, contours, roads, rivers and a coordinate table.",
          "alt": "Terrain map with proposed repeater sites, numbered line-of-sight paths, contours, roads, rivers and a coordinate table.",
          "v": 1793961394281,
          "w": 2576,
          "h": 1821,
          "thumb": "01-dmr-repeater-sites.webp",
          "tw": 1800,
          "sz": 781892
        }
      ],
      "cover": "01-dmr-repeater-sites",
      "compares": []
    },
    {
      "slug": "farm-groundwater-potential-zoning",
      "title": "Groundwater Potential Zoning to Guide a PQWT Survey",
      "summary": "A Fuzzy-AHP index in Google Earth Engine that ranks a farm’s land for groundwater and sets 28 candidate survey points.",
      "category": "Water",
      "year": "2026",
      "status": "Report delivered",
      "location": "Farm property, Zimbabwe",
      "coords": null,
      "role": "GIS analyst",
      "client": "Private farm client, prepared under Eco-Spatial Conservation Trust",
      "duration": "Two-stage: desk study, then field survey",
      "brief": [
        "Before a field team walks the farm with a PQWT, a resistivity-based groundwater detector, this project ranks every part of the farm by how likely it is to hold water, so the survey starts where it matters.",
        "The result is a continuous groundwater potential index, laid over the paddocks, tracks, streams and gates, with candidate survey points marked on it."
      ],
      "objectives": [
        "Map relative groundwater potential across the whole farm.",
        "Place PQWT survey points where the index is highest.",
        "Give the farm a prioritised survey plan it can follow on the ground."
      ],
      "methodology": [
        {
          "title": "Choose the factors",
          "text": "Selected seven thematic factors that influence groundwater and prepared each in Google Earth Engine."
        },
        {
          "title": "Weight with Fuzzy-AHP",
          "text": "Scaled each factor with fuzzy membership functions and weighted them with the Analytic Hierarchy Process, checking the consistency ratio."
        },
        {
          "title": "Buffer, then clip",
          "text": "Processed a buffered area around the farm and clipped to the boundary afterwards, so there are no edge effects."
        },
        {
          "title": "Generate survey points",
          "text": "Generated PQWT survey points and lines from the highest-potential zones."
        },
        {
          "title": "Map",
          "text": "Composed the layout in QGIS over a satellite basemap (EPSG:32736)."
        }
      ],
      "dataSources": [
        "Satellite and terrain layers processed in Google Earth Engine",
        "Farm boundary, paddocks, gates, buildings, streams and roads digitised for the client",
        "Google Hybrid basemap"
      ],
      "software": [
        "Google Earth Engine",
        "QGIS",
        "Fuzzy-AHP"
      ],
      "findings": [
        "The index runs from about 0.30 (low, red) to about 0.66 (high, blue).",
        "The plot covers 106.11 ha with a perimeter of 4.48 km, divided into five paddocks and served by three main gates.",
        "The analysis identifies 28 candidate PQWT points, each labelled with its index value on the map.",
        "No borehole data were available to calibrate the index, so it ranks where to survey first; it does not predict yield."
      ],
      "stats": [
        {
          "value": "106 ha",
          "label": "Plot area"
        },
        {
          "value": "28",
          "label": "Candidate PQWT points"
        },
        {
          "value": "7",
          "label": "Weighted factors"
        },
        {
          "value": "5",
          "label": "Paddocks"
        }
      ],
      "tags": [
        "Groundwater",
        "AHP",
        "Google Earth Engine",
        "Field survey",
        "Parcel mapping"
      ],
      "order": 5,
      "images": [
        {
          "id": "01-groundwater-potential-continuous",
          "file": "01-groundwater-potential-continuous.jpeg",
          "kind": "map",
          "caption": "Continuous groundwater potential index with paddocks, tracks, streams and PQWT survey points labelled by index value.",
          "alt": "Continuous groundwater potential index with paddocks, tracks, streams and PQWT survey points labelled by index value.",
          "v": 1793961394282,
          "w": 2576,
          "h": 1822,
          "thumb": "01-groundwater-potential-continuous.webp",
          "tw": 1800,
          "sz": 1016694
        },
        {
          "id": "02-farm-parcel-overview",
          "file": "02-farm-parcel-overview.jpeg",
          "kind": "map",
          "caption": "Farm parcel overview: plot boundary, five paddocks, three main gates, tracks, streams, buildings and the numbered PQWT survey points.",
          "alt": "Farm parcel overview: plot boundary, five paddocks, three main gates, tracks, streams, buildings and the numbered PQWT survey points.",
          "w": 8000,
          "h": 5656,
          "thumb": "02-farm-parcel-overview.webp",
          "tw": 1800,
          "sz": 1872983,
          "v": 1793961517556
        }
      ],
      "cover": "01-groundwater-potential-continuous",
      "compares": []
    },
    {
      "slug": "bikita-malaria-case-distribution",
      "title": "Malaria Cases by Health Facility, Bikita District, 2015–2018",
      "summary": "Proportional symbols and five severity classes show where 27,995 malaria cases were recorded across 26 facilities.",
      "category": "Public health",
      "year": "2015–2018",
      "status": "Analysis complete",
      "location": "Bikita District, Masvingo Province, Zimbabwe",
      "coords": {
        "lat": -20.1,
        "lng": 31.7
      },
      "role": "Analyst and cartographer",
      "client": "",
      "duration": "Four years of facility records",
      "brief": [
        "A district total hides where the burden sits. This map plots every health facility as a circle sized by its malaria case count, and shades it by severity, so a reader can see at a glance which clinics carry the load.",
        "Leader lines carry each facility’s name and count, which keeps the dense cluster around the district hospital readable."
      ],
      "objectives": [
        "Map malaria case load for each health facility from 2015 to 2018.",
        "Class facilities by severity so high-burden sites stand out.",
        "Keep every facility labelled without overlap."
      ],
      "methodology": [
        {
          "title": "Compile the counts",
          "text": "Summed 2015–2018 malaria cases for each of 26 health facilities."
        },
        {
          "title": "Locate the facilities",
          "text": "Joined the counts to facility coordinates."
        },
        {
          "title": "Symbolise",
          "text": "Scaled circle area to total cases and coloured by five severity classes, from 1–100 (very low) to 10,001–15,000 (critical)."
        },
        {
          "title": "Label",
          "text": "Placed names and counts on leader lines and added a scale bar, north arrow and graticule."
        }
      ],
      "dataSources": [
        "Bikita District health facility records, 2015–2018"
      ],
      "software": [
        "R",
        "ggplot2",
        "sf"
      ],
      "findings": [
        "Bikita District facility alone recorded 14,884 of the 27,995 cases, about 53% of the total.",
        "It is the only facility in the critical class (10,001–15,000).",
        "The next highest are Odzi (1,558), Gava (1,228) and Ruponeso (1,009).",
        "Shumbaimwe and Mupamaonde recorded no cases."
      ],
      "stats": [
        {
          "value": "27,995",
          "label": "Total cases"
        },
        {
          "value": "26",
          "label": "Health facilities"
        },
        {
          "value": "53%",
          "label": "At one facility"
        }
      ],
      "tags": [
        "Epidemiology",
        "Proportional symbols",
        "Health facilities"
      ],
      "order": 6,
      "images": [
        {
          "id": "01-malaria-cases-by-facility",
          "file": "01-malaria-cases-by-facility.png",
          "kind": "map",
          "caption": "Malaria case distribution by severity for 26 facilities in Bikita District, 2015–2018.",
          "alt": "Malaria case distribution by severity for 26 facilities in Bikita District, 2015–2018.",
          "v": 1793961394283,
          "w": 1242,
          "h": 990,
          "thumb": "01-malaria-cases-by-facility.webp",
          "tw": 1242,
          "sz": 105462
        }
      ],
      "cover": "01-malaria-cases-by-facility",
      "compares": []
    },
    {
      "slug": "zambezi-wildlife-hotspots-2022",
      "title": "Wildlife Hotspot Analysis in Zambezi National Park, 2022: Cold-Dry and Hot-Wet Seasons",
      "summary": "Kernel-density heatmaps of wildlife records for the cold-dry and hot-wet seasons of 2022, showing where animals were seen most often near Victoria Falls.",
      "category": "Conservation",
      "year": "2022",
      "status": "Analysis complete",
      "location": "Zambezi National Park, Victoria Falls, Zimbabwe",
      "coords": {
        "lat": -17.88,
        "lng": 25.9
      },
      "role": "Analyst and cartographer",
      "client": "",
      "duration": "Cold-dry and hot-wet seasons, 2022",
      "brief": [
        "Where animals are seen is where rangers, guides and anti-poaching teams need to be. This map turns a season of point records into a density surface, so the busiest areas show up as colour instead of a cloud of dots.",
        "Each record keeps its species label, so the map tells you what is there as well as how much."
      ],
      "objectives": [
        "Find the areas of highest wildlife density in the cold-dry and hot-wet seasons of 2022.",
        "Show which species make up each cluster.",
        "Put the hotspots in the context of roads, the Zambezi River and the park boundary."
      ],
      "methodology": [
        {
          "title": "Prepare the records",
          "text": "Filtered the point layer to the 2022 cold-dry and hot-wet seasons and checked each record’s species label."
        },
        {
          "title": "Run the heatmap",
          "text": "Ran a kernel-density estimate for each season and classed the surfaces: five levels for the cold-dry map (0.518 and below to above 2.07) and ten levels for the hot-wet map (0.361 and below to above 2.777)."
        },
        {
          "title": "Add context",
          "text": "Overlaid roads, river islands, the Zambezi River and the Zambezi and Victoria Falls park boundaries."
        },
        {
          "title": "Label and publish",
          "text": "Labelled species on the points and added a legend, scale bar and compass."
        }
      ],
      "dataSources": [
        "Wildlife records for the 2022 cold-dry and hot-wet seasons",
        "Roads, rivers, islands and park boundaries"
      ],
      "software": [
        "QGIS",
        "Heatmap (kernel density)"
      ],
      "findings": [
        "The densest cluster lies at the eastern end of the park near Victoria Falls, where buffalo, impala, warthog and kudu are recorded together.",
        "A smaller hotspot follows the river frontage in the north-west, with warthog and buffalo.",
        "The interior has few records and they are scattered, mostly along the roads.",
        "In the hot-wet season the densest cells sit at the eastern end of the park beside the river and Victoria Falls, where impala, waterbuck, Nile crocodile, warthog and greater kudu are recorded together.",
        "Smaller hot-wet clusters sit on the roads further south: elephant and spotted hyena on the eastern side, and Cape buffalo towards the west. Greater kudu are recorded in a separate cluster on the east–west road."
      ],
      "stats": [
        {
          "value": "2",
          "label": "Seasons mapped"
        },
        {
          "value": "2022",
          "label": "Survey year"
        },
        {
          "value": "10",
          "label": "Hot-wet density classes"
        }
      ],
      "tags": [
        "Kernel density",
        "Hotspots",
        "Species records",
        "Seasonality"
      ],
      "order": 7,
      "images": [
        {
          "id": "01-hotspot-heatmap-cold-dry-2022",
          "file": "01-hotspot-heatmap-cold-dry-2022.jpeg",
          "kind": "map",
          "caption": "Heatmap of wildlife records, cold-dry season 2022, with species labels, roads, islands and the Zambezi River.",
          "alt": "Heatmap of wildlife records, cold-dry season 2022, with species labels, roads, islands and the Zambezi River.",
          "v": 1793961394288,
          "w": 8000,
          "h": 5656,
          "thumb": "01-hotspot-heatmap-cold-dry-2022.webp",
          "tw": 1800,
          "sz": 1887967
        },
        {
          "id": "02-hotspot-heatmap-hot-wet-2022",
          "file": "02-hotspot-heatmap-hot-wet-2022.jpeg",
          "kind": "map",
          "caption": "Heatmap of wildlife records, hot-wet season 2022, with species labels, roads, islands and the Zambezi River.",
          "alt": "Heatmap of wildlife records, hot-wet season 2022, with species labels, roads, islands and the Zambezi River.",
          "w": 8000,
          "h": 5656,
          "thumb": "02-hotspot-heatmap-hot-wet-2022.webp",
          "tw": 1800,
          "sz": 1757755,
          "v": 1793961516208
        }
      ],
      "cover": "01-hotspot-heatmap-cold-dry-2022",
      "compares": [
        {
          "a": "01-hotspot-heatmap-cold-dry-2022",
          "b": "02-hotspot-heatmap-hot-wet-2022",
          "title": "Wildlife records density: cold-dry against hot-wet season, 2022",
          "labelA": "Cold-dry",
          "labelB": "Hot-wet"
        }
      ]
    },
    {
      "slug": "matobo-hornbill-nests-land-use",
      "title": "Hornbill Nest Status and Land-Use Change in the Matobo Hills, 2015–2025",
      "summary": "Monitored hornbill nests set against ten years of land-cover change, with nest status, status change and vulnerability maps for six study blocks.",
      "category": "Conservation",
      "year": "2015–2025",
      "status": "Analysis complete",
      "location": "Matobo Hills, Matabeleland South, Zimbabwe",
      "coords": {
        "lat": -20.55,
        "lng": 28.5
      },
      "role": "Analyst and cartographer",
      "client": "",
      "duration": "Ten-year comparison, 2015 and 2025",
      "brief": [
        "A nest only helps a species if the habitat around it lasts. This project places monitored hornbill nests on land-use and land-cover maps for 2015 and 2025 and asks what happened around each one.",
        "The outputs are a nest status map for each year, a nest status change map, a land-use change layer and a vulnerability classification for every nest."
      ],
      "objectives": [
        "Map nest breeding status in 2015 and 2025.",
        "Measure land-use change across the study blocks over the ten years.",
        "Rate each nest’s vulnerability from what happened to the land around it."
      ],
      "methodology": [
        {
          "title": "Land-cover classes",
          "text": "Used land-cover maps for 2015 and 2025 with classes for savanna, woodland, shrubland, cultivated land, bare or degraded ground, rocky outcrops, wetlands and settlements."
        },
        {
          "title": "Detect change",
          "text": "Compared the two dates to flag woodland loss, agricultural expansion, settlement growth and transition zones."
        },
        {
          "title": "Nest status",
          "text": "Marked each nest as breeding or not breeding in each year, then derived breeding gained, breeding lost, stable breeding and stable non-breeding."
        },
        {
          "title": "Rate vulnerability",
          "text": "Classed each nest as high, low or information-only vulnerability according to whether it persisted in natural habitat or was lost to agriculture or settlement."
        },
        {
          "title": "Map",
          "text": "Built the maps in R with study block labels, scale bars, north arrows and legends."
        }
      ],
      "dataSources": [
        "Hornbill nest monitoring records, 2015 and 2025",
        "Land-use and land-cover classifications for 2015 and 2025",
        "Study block boundaries (blocks 15, 16, 17, 18, 23 and 25)"
      ],
      "software": [
        "R",
        "RStudio",
        "ggplot2"
      ],
      "findings": [
        "In 2015, 27 nests were monitored: 16 breeding and 11 not breeding.",
        "Most nests persist in woodland or natural habitat and are rated low vulnerability.",
        "One nest, in the western part of the study area, is flagged as lost to agriculture or settlement.",
        "The change map shows which nests gained or lost breeding status, so recovery and decline can be read next to the land-use layer."
      ],
      "stats": [
        {
          "value": "27",
          "label": "Nests monitored in 2015"
        },
        {
          "value": "16",
          "label": "Breeding in 2015"
        },
        {
          "value": "10 yrs",
          "label": "Change period"
        },
        {
          "value": "6",
          "label": "Study blocks"
        }
      ],
      "tags": [
        "Land use change",
        "Nest monitoring",
        "Vulnerability",
        "R"
      ],
      "featured": true,
      "order": 8,
      "compares": [
        {
          "a": "03-nest-status-2015",
          "b": "04-nest-status-2025",
          "title": "Nest status: 2015 against 2025",
          "labelA": "2015",
          "labelB": "2025"
        }
      ],
      "cover": "01-nest-status-change",
      "images": [
        {
          "id": "01-nest-status-change",
          "file": "01-nest-status-change.png",
          "kind": "map",
          "caption": "Nest status change, 2015 to 2025, over the land-use change layer.",
          "alt": "Nest status change, 2015 to 2025, over the land-use change layer.",
          "w": 1212,
          "h": 795,
          "thumb": "01-nest-status-change.webp",
          "tw": 1212,
          "sz": 194021,
          "v": 1793961518788
        },
        {
          "id": "02-nest-status-2015-with-totals",
          "file": "02-nest-status-2015-with-totals.png",
          "kind": "map",
          "caption": "Nest distribution and land use in 2015, with totals: 27 nests, 16 breeding, 11 not breeding.",
          "alt": "Nest distribution and land use in 2015, with totals: 27 nests, 16 breeding, 11 not breeding.",
          "w": 1337,
          "h": 876,
          "thumb": "02-nest-status-2015-with-totals.webp",
          "tw": 1337,
          "sz": 161412,
          "v": 1793961519060
        },
        {
          "id": "03-nest-status-2015",
          "file": "03-nest-status-2015.png",
          "kind": "map",
          "caption": "Nest status and land-use classes in 2015, high-resolution version.",
          "alt": "Nest status and land-use classes in 2015, high-resolution version.",
          "w": 2212,
          "h": 1450,
          "thumb": "03-nest-status-2015.webp",
          "tw": 1800,
          "sz": 253405,
          "v": 1793961519346
        },
        {
          "id": "04-nest-status-2025",
          "file": "04-nest-status-2025.png",
          "kind": "map",
          "caption": "Nest status and land-use classes in 2025.",
          "alt": "Nest status and land-use classes in 2025.",
          "w": 2212,
          "h": 1450,
          "thumb": "04-nest-status-2025.webp",
          "tw": 1800,
          "sz": 251299,
          "v": 1793961519896
        },
        {
          "id": "05-land-use-change-nest-vulnerability",
          "file": "05-land-use-change-nest-vulnerability.png",
          "kind": "map",
          "caption": "Land-use change 2015 to 2025 with nest vulnerability status.",
          "alt": "Land-use change 2015 to 2025 with nest vulnerability status.",
          "w": 1212,
          "h": 795,
          "thumb": "05-land-use-change-nest-vulnerability.webp",
          "tw": 1212,
          "sz": 194949,
          "v": 1793961520422
        },
        {
          "id": "06-vulnerability-level",
          "file": "06-vulnerability-level.png",
          "kind": "map",
          "caption": "Vulnerability level of each nest over the land-use change layer.",
          "alt": "Vulnerability level of each nest over the land-use change layer.",
          "w": 1212,
          "h": 795,
          "thumb": "06-vulnerability-level.webp",
          "tw": 1212,
          "sz": 194333,
          "v": 1793961520716
        }
      ]
    },
    {
      "slug": "zambezi-wildlife-mortality-hotspots",
      "title": "Wildlife Mortality Hotspots in Zambezi National Park: Hot-Wet and Cold-Dry Seasons",
      "summary": "Kernel-density surfaces of recorded wildlife deaths, compared across seasons against roads, the Zambezi River and Victoria Falls.",
      "category": "Conservation",
      "year": "2025",
      "status": "Analysis complete",
      "location": "Zambezi National Park, Victoria Falls, Zimbabwe",
      "coords": {
        "lat": -17.92,
        "lng": 25.85
      },
      "role": "Analyst and cartographer",
      "client": "",
      "duration": "Hot-wet and cold-dry seasons",
      "brief": [
        "Where animals die shows managers where to act. Mortality records were mapped by species, and in the cold-dry season by sex, then turned into smooth density surfaces.",
        "Roads, the Zambezi River, islands, the park boundary and the Victoria Falls area give each hotspot its context."
      ],
      "objectives": [
        "Map recorded wildlife mortality by species.",
        "Find the hotspots in the hot-wet and cold-dry seasons.",
        "Relate the hotspots to roads, the river and the Victoria Falls boundary."
      ],
      "methodology": [
        {
          "title": "Prepare the records",
          "text": "Split the mortality records by season and attached species and sex attributes."
        },
        {
          "title": "Density surface",
          "text": "Produced a kernel-density surface for each season, shown from minimum to maximum."
        },
        {
          "title": "Add context",
          "text": "Overlaid roads, the Zambezi River, islands, and the Zambezi and Victoria Falls boundaries, with species labels."
        },
        {
          "title": "Compare seasons",
          "text": "Put the two season maps side by side to see how the pattern shifts."
        }
      ],
      "dataSources": [
        "Wildlife mortality records, Zambezi National Park",
        "Roads, Zambezi River, islands and park boundaries"
      ],
      "software": [
        "QGIS",
        "Heatmap (kernel density)"
      ],
      "findings": [
        "In both seasons the strongest hotspot is in the north-east, where roads run beside the Zambezi River near Victoria Falls.",
        "Secondary clusters follow the road corridors further south and along the eastern strip.",
        "The large western interior has very few records."
      ],
      "stats": [
        {
          "value": "2",
          "label": "Seasons compared"
        },
        {
          "value": "KDE",
          "label": "Method"
        },
        {
          "value": "NE",
          "label": "Main hotspot"
        }
      ],
      "tags": [
        "Hotspot analysis",
        "Kernel density",
        "Mortality",
        "Roads"
      ],
      "featured": false,
      "order": 9,
      "compares": [
        {
          "a": "01-mortality-hot-wet",
          "b": "02-mortality-cold-dry",
          "title": "Mortality hotspots: hot-wet against cold-dry",
          "labelA": "Hot-wet",
          "labelB": "Cold-dry"
        }
      ],
      "cover": "01-mortality-hot-wet",
      "images": [
        {
          "id": "01-mortality-hot-wet",
          "file": "01-mortality-hot-wet.jpeg",
          "kind": "map",
          "caption": "Mortality hotspots in the hot-wet season, with species labels.",
          "alt": "Mortality hotspots in the hot-wet season, with species labels.",
          "w": 8000,
          "h": 5656,
          "thumb": "01-mortality-hot-wet.webp",
          "tw": 1800,
          "sz": 2044844,
          "v": 1793961521188
        },
        {
          "id": "02-mortality-cold-dry",
          "file": "02-mortality-cold-dry.jpeg",
          "kind": "map",
          "caption": "Mortality hotspots in the cold-dry season, with species and sex labels.",
          "alt": "Mortality hotspots in the cold-dry season, with species and sex labels.",
          "w": 8000,
          "h": 5656,
          "thumb": "02-mortality-cold-dry.webp",
          "tw": 1800,
          "sz": 2093289,
          "v": 1793961522572
        }
      ]
    },
    {
      "slug": "maumbe-seke-stand-layout",
      "title": "Maumbe Area Stand Layout and Elevation, Seke District",
      "summary": "A 4.4 ha layout of 22 stands with roads and surveyed points, plus an elevation-classed sheet showing the gentle fall of the site.",
      "category": "Land & terrain",
      "year": "2025",
      "status": "Delivered to client",
      "location": "Maumbe, Seke District, Mashonaland East, Zimbabwe",
      "coords": {
        "lat": -18.0776,
        "lng": 31.1499
      },
      "role": "GIS analyst",
      "client": "Promodex Pvt Company",
      "duration": "Layout and elevation sheets",
      "brief": [
        "Buyers and developers need a clear stand plan with the area of every plot and real coordinates. This project delivered a clean layout sheet and a companion elevation sheet for the Maumbe area.",
        "Each stand is numbered, its area is listed in square metres, and the elevation sheet groups the site into five narrow height classes."
      ],
      "objectives": [
        "Produce a numbered stand layout with the area of each stand.",
        "Report the total boundary area.",
        "Show how elevation changes across the site."
      ],
      "methodology": [
        {
          "title": "Boundary and points",
          "text": "Plotted the surveyed boundary and corner points in WGS 84 / UTM Zone 36S."
        },
        {
          "title": "Stand subdivision",
          "text": "Digitised the 22 stands and internal roads, then calculated the area of each stand."
        },
        {
          "title": "Elevation classes",
          "text": "Classed the site into five bands from 1,453 to 1,460 m."
        },
        {
          "title": "Layout",
          "text": "Composed both sheets at 1:1,741 with a coordinate grid, scale bar, legend and stand-area table."
        }
      ],
      "dataSources": [
        "Surveyed boundary and corner points, WGS 84 / UTM Zone 36S",
        "Stand and road geometry digitised for the layout"
      ],
      "software": [
        "ArcGIS"
      ],
      "findings": [
        "The boundary encloses 44,447.8 m² and individual stands range from 1,521 to 2,044 m².",
        "Elevation changes by only about 7 m across the site, from 1,453 m in the south-west to 1,460 m in the north-east.",
        "Stands 20 to 22 sit on the highest ground and stands 1 to 4 on the lowest."
      ],
      "stats": [
        {
          "value": "22",
          "label": "Stands"
        },
        {
          "value": "44,447.8 m²",
          "label": "Boundary area"
        },
        {
          "value": "1,453–1,460 m",
          "label": "Elevation range"
        },
        {
          "value": "1:1,741",
          "label": "Map scale"
        }
      ],
      "tags": [
        "Cadastral layout",
        "Stands",
        "Elevation",
        "Survey"
      ],
      "featured": false,
      "order": 10,
      "compares": [],
      "cover": "01-stands-by-elevation",
      "images": [
        {
          "id": "01-stands-by-elevation",
          "file": "01-stands-by-elevation.png",
          "kind": "map",
          "caption": "Stand layout coloured by elevation class, with the stand-area table.",
          "alt": "Stand layout coloured by elevation class, with the stand-area table.",
          "w": 2574,
          "h": 1820,
          "thumb": "01-stands-by-elevation.webp",
          "tw": 1800,
          "sz": 404434,
          "v": 1793961523703
        },
        {
          "id": "02-numbered-stand-plan",
          "file": "02-numbered-stand-plan.png",
          "kind": "map",
          "caption": "Numbered stand plan with surveyed points, roads and boundary area.",
          "alt": "Numbered stand plan with surveyed points, roads and boundary area.",
          "w": 2574,
          "h": 1820,
          "thumb": "02-numbered-stand-plan.webp",
          "tw": 1800,
          "sz": 398413,
          "v": 1793961524142
        }
      ]
    }
  ],
  "updated": "2026-11-06T10:42:29.171Z"
};
