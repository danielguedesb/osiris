const RAW: Record<string, [number, number, string, string]> = {
  AFG: [66, 33, 'AF', 'Afghanistan'], DZA: [3, 28, 'DZ', 'Algeria'], AGO: [18, -12, 'AO', 'Angola'],
  ARG: [-64, -34, 'AR', 'Argentina'], ARM: [45, 40, 'AM', 'Armenia'], AUS: [134, -25, 'AU', 'Australia'],
  AUT: [14, 47, 'AT', 'Austria'], AZE: [48, 40, 'AZ', 'Azerbaijan'], BGD: [90, 24, 'BD', 'Bangladesh'],
  BLR: [28, 53, 'BY', 'Belarus'], BEL: [4, 50, 'BE', 'Belgium'], BEN: [2, 9, 'BJ', 'Benin'],
  BOL: [-64, -17, 'BO', 'Bolivia'], BIH: [18, 44, 'BA', 'Bosnia and Herzegovina'], BWA: [24, -22, 'BW', 'Botswana'],
  BRA: [-53, -10, 'BR', 'Brazil'], BGR: [25, 43, 'BG', 'Bulgaria'], BFA: [-2, 12, 'BF', 'Burkina Faso'],
  BDI: [30, -3, 'BI', 'Burundi'], KHM: [105, 13, 'KH', 'Cambodia'], CMR: [12, 6, 'CM', 'Cameroon'],
  CAN: [-106, 56, 'CA', 'Canada'], CAF: [21, 7, 'CF', 'Central African Republic'], TCD: [19, 15, 'TD', 'Chad'],
  CHL: [-71, -30, 'CL', 'Chile'], CHN: [104, 35, 'CN', 'China'], COL: [-74, 4, 'CO', 'Colombia'],
  COD: [23, -2, 'CD', 'Democratic Republic of the Congo'], COG: [15, -1, 'CG', 'Congo'], CRI: [-84, 10, 'CR', 'Costa Rica'],
  CIV: [-5, 8, 'CI', "Cote d'Ivoire"], HRV: [16, 45, 'HR', 'Croatia'], CUB: [-79, 22, 'CU', 'Cuba'],
  CZE: [15, 50, 'CZ', 'Czechia'], DNK: [10, 56, 'DK', 'Denmark'], DOM: [-70, 19, 'DO', 'Dominican Republic'],
  ECU: [-78, -1, 'EC', 'Ecuador'], EGY: [30, 27, 'EG', 'Egypt'], SLV: [-89, 13, 'SV', 'El Salvador'],
  ERI: [39, 15, 'ER', 'Eritrea'], ETH: [40, 9, 'ET', 'Ethiopia'], FJI: [178, -18, 'FJ', 'Fiji'],
  FIN: [26, 64, 'FI', 'Finland'], FRA: [2, 46, 'FR', 'France'], GAB: [12, -1, 'GA', 'Gabon'],
  GEO: [43, 42, 'GE', 'Georgia'], DEU: [10, 51, 'DE', 'Germany'], GHA: [-1, 8, 'GH', 'Ghana'],
  GRC: [22, 39, 'GR', 'Greece'], GTM: [-90, 15, 'GT', 'Guatemala'], GIN: [-10, 11, 'GN', 'Guinea'],
  HTI: [-72, 19, 'HT', 'Haiti'], HND: [-86, 15, 'HN', 'Honduras'], HUN: [19, 47, 'HU', 'Hungary'],
  IND: [79, 22, 'IN', 'India'], IDN: [113, -2, 'ID', 'Indonesia'], IRN: [53, 32, 'IR', 'Iran'],
  IRQ: [44, 33, 'IQ', 'Iraq'], IRL: [-8, 53, 'IE', 'Ireland'], ISR: [35, 31, 'IL', 'Israel'],
  ITA: [12, 42, 'IT', 'Italy'], JAM: [-77, 18, 'JM', 'Jamaica'], JPN: [138, 36, 'JP', 'Japan'],
  JOR: [36, 31, 'JO', 'Jordan'], KAZ: [67, 48, 'KZ', 'Kazakhstan'], KEN: [38, 0, 'KE', 'Kenya'],
  PRK: [127, 40, 'KP', 'North Korea'], KOR: [128, 36, 'KR', 'South Korea'], KWT: [48, 29, 'KW', 'Kuwait'],
  KGZ: [75, 41, 'KG', 'Kyrgyzstan'], LAO: [103, 18, 'LA', 'Laos'], LBN: [36, 34, 'LB', 'Lebanon'],
  LBR: [-9, 6, 'LR', 'Liberia'], LBY: [17, 27, 'LY', 'Libya'], MDG: [47, -19, 'MG', 'Madagascar'],
  MWI: [34, -13, 'MW', 'Malawi'], MYS: [102, 4, 'MY', 'Malaysia'], MLI: [-4, 17, 'ML', 'Mali'],
  MRT: [-10, 20, 'MR', 'Mauritania'], MEX: [-102, 23, 'MX', 'Mexico'], MDA: [29, 47, 'MD', 'Moldova'],
  MNG: [104, 46, 'MN', 'Mongolia'], MAR: [-7, 32, 'MA', 'Morocco'], MOZ: [35, -18, 'MZ', 'Mozambique'],
  MMR: [96, 21, 'MM', 'Myanmar'], NAM: [17, -22, 'NA', 'Namibia'], NPL: [84, 28, 'NP', 'Nepal'],
  NLD: [5, 52, 'NL', 'Netherlands'], NZL: [172, -41, 'NZ', 'New Zealand'], NIC: [-85, 13, 'NI', 'Nicaragua'],
  NER: [8, 17, 'NE', 'Niger'], NGA: [8, 9, 'NG', 'Nigeria'], NOR: [9, 61, 'NO', 'Norway'],
  OMN: [56, 21, 'OM', 'Oman'], PAK: [70, 30, 'PK', 'Pakistan'], PSE: [35, 32, 'PS', 'Palestine'],
  PAN: [-80, 9, 'PA', 'Panama'], PNG: [144, -6, 'PG', 'Papua New Guinea'], PRY: [-58, -23, 'PY', 'Paraguay'],
  PER: [-75, -10, 'PE', 'Peru'], PHL: [122, 12, 'PH', 'Philippines'], POL: [19, 52, 'PL', 'Poland'],
  PRT: [-8, 39, 'PT', 'Portugal'], QAT: [51, 25, 'QA', 'Qatar'], ROU: [25, 46, 'RO', 'Romania'],
  RUS: [95, 61, 'RU', 'Russia'], RWA: [30, -2, 'RW', 'Rwanda'], SAU: [45, 24, 'SA', 'Saudi Arabia'],
  SEN: [-14, 14, 'SN', 'Senegal'], SRB: [21, 44, 'RS', 'Serbia'], SLE: [-12, 9, 'SL', 'Sierra Leone'],
  SGP: [104, 1, 'SG', 'Singapore'], SVK: [19, 49, 'SK', 'Slovakia'], SOM: [46, 5, 'SO', 'Somalia'],
  ZAF: [25, -29, 'ZA', 'South Africa'], SSD: [31, 7, 'SS', 'South Sudan'], ESP: [-4, 40, 'ES', 'Spain'],
  LKA: [81, 7, 'LK', 'Sri Lanka'], SDN: [30, 15, 'SD', 'Sudan'], SWE: [16, 62, 'SE', 'Sweden'],
  CHE: [8, 47, 'CH', 'Switzerland'], SYR: [38, 35, 'SY', 'Syria'], TWN: [121, 24, 'TW', 'Taiwan'],
  TJK: [71, 39, 'TJ', 'Tajikistan'], TZA: [35, -6, 'TZ', 'Tanzania'], THA: [101, 15, 'TH', 'Thailand'],
  TGO: [1, 8, 'TG', 'Togo'], TUN: [9, 34, 'TN', 'Tunisia'], TUR: [35, 39, 'TR', 'Turkey'],
  TKM: [59, 39, 'TM', 'Turkmenistan'], UGA: [32, 1, 'UG', 'Uganda'], UKR: [31, 49, 'UA', 'Ukraine'],
  ARE: [54, 24, 'AE', 'United Arab Emirates'], GBR: [-2, 54, 'GB', 'United Kingdom'], USA: [-98, 39, 'US', 'United States'],
  URY: [-56, -33, 'UY', 'Uruguay'], UZB: [64, 41, 'UZ', 'Uzbekistan'], VEN: [-66, 7, 'VE', 'Venezuela'],
  VNM: [108, 16, 'VN', 'Vietnam'], YEM: [48, 15, 'YE', 'Yemen'], ZMB: [28, -13, 'ZM', 'Zambia'],
  ZWE: [29, -19, 'ZW', 'Zimbabwe'],
};

export const CENTROIDS: Record<string, [number, number]> = {};
const ISO2: Record<string, string> = {};
const NAMES: Record<string, string> = {};
for (const [iso3, [lng, lat, iso2, name]] of Object.entries(RAW)) {
  CENTROIDS[iso3] = [lng, lat];
  ISO2[iso2] = iso3;
  NAMES[name.toLowerCase()] = iso3;
}
// common name variants used by feeds (e.g. WHO Disease Outbreak News)
const ALIAS: Record<string, string> = {
  'democratic republic of congo': 'COD', 'dr congo': 'COD', 'drc': 'COD', 'congo (kinshasa)': 'COD',
  'syrian arab republic': 'SYR', 'russian federation': 'RUS', 'united republic of tanzania': 'TZA',
  'iran (islamic republic of)': 'IRN', 'republic of korea': 'KOR', "democratic people's republic of korea": 'PRK',
  'viet nam': 'VNM', 'lao': 'LAO', "lao people's democratic republic": 'LAO', 'czech republic': 'CZE',
  'türkiye': 'TUR', 'turkiye': 'TUR', 'occupied palestinian territory': 'PSE', 'state of palestine': 'PSE',
  'united states of america': 'USA', 'bolivia (plurinational state of)': 'BOL', 'venezuela (bolivarian republic of)': 'VEN',
};

export function byIso3(code?: string): [number, number] | null { return (code && CENTROIDS[code]) || null; }
export function byIso2(code?: string): [number, number] | null {
  const i = code && ISO2[code.toUpperCase()]; return i ? CENTROIDS[i] : null;
}
export function byName(name?: string): [number, number] | null {
  if (!name) return null;
  const k = name.toLowerCase().trim();
  const iso = NAMES[k] || ALIAS[k];
  if (iso) return CENTROIDS[iso];
  for (const nm in NAMES) if (k === nm || k.includes(nm) || nm.includes(k)) return CENTROIDS[NAMES[nm]];
  return null;
}

// ── upstream module (kept verbatim: upstream routes import these) ──
/**
 * ISO 3166-1 alpha-2 → approximate country centroid as [lng, lat].
 *
 * Used to place country-scoped feeds (Cloudflare Radar outages and attack
 * origins) on the map. These are eyeballed centroids for marker placement,
 * not survey-grade geometry — do not use them for distance maths.
 *
 * NOTE: /api/radar carries its own copy of this table. Consolidating the two
 * is worthwhile but would touch a working route, so it is left for a
 * dedicated change.
 */
export const COUNTRY_CENTROIDS: Record<string, [number, number]> = {
  AF:[65,33],AL:[20,41],DZ:[3,28],AO:[18.5,-12.5],AR:[-64,-34],AM:[45,40],AU:[134,-25],AT:[14,47.5],AZ:[50,40.5],
  BD:[90,24],BY:[28,53],BE:[4,50.8],BR:[-51,-10],BG:[25.5,42.7],KH:[105,12.5],CM:[12,6],CA:[-96,62],CL:[-71,-30],
  CN:[105,35],CO:[-72,4],CD:[24,-3],CG:[15.8,-0.2],HR:[16,45.2],CU:[-79.5,22],CZ:[15.5,49.8],DK:[10,56],
  EC:[-78.5,-2],EG:[30,27],ET:[39.5,9],FI:[26,64],FR:[2,46],DE:[10,51],GH:[-1.5,8],GR:[22,39],
  GT:[-90.4,15.5],HN:[-86.6,14.8],HU:[19.5,47],IN:[79,22],ID:[120,-5],IR:[53,32],IQ:[44,33],IE:[-8,53],
  IL:[34.8,31.5],IT:[12.5,42.8],JP:[138,36],JO:[36.5,31],KZ:[67,48],KE:[38,1],KW:[47.5,29.5],
  LB:[35.8,33.9],LY:[17,27],LT:[24,55.5],MG:[47,-19],MY:[112,3],MX:[-102,23.5],MA:[-6,32],
  MZ:[35,-18.2],MM:[96.5,22],NP:[84,28.2],NL:[5.5,52.5],NZ:[174,-41],NG:[8,10],NO:[8,62],
  PK:[70,30],PS:[35.2,31.9],PA:[-80,9],PE:[-76,-10],PH:[122,12.5],PL:[19.5,52],PT:[-8,39.5],
  RO:[25,46],RU:[100,60],SA:[45,25],SN:[-14.5,14.5],RS:[21,44],SG:[103.8,1.35],SK:[19.5,48.7],
  ZA:[24,-29],KR:[128,36],ES:[-4,40],SD:[30,15],SE:[16,62],CH:[8,47],SY:[38,35],TW:[121,23.7],
  TZ:[35,-6],TH:[101,15],TR:[35,39],UA:[32,49],AE:[54,24],GB:[-2,54],US:[-97,38],UZ:[65,41.5],
  VE:[-66,8],VN:[106,16],YE:[48,15.5],ZM:[28,-14],ZW:[30,-20],
  // Additional territories that appear in Cloudflare Radar reporting.
  BA:[18,44],EE:[26,59],GE:[43.5,42],IS:[-19,65],LV:[25,57],LU:[6.1,49.8],MD:[29,47],
  MK:[21.7,41.6],ME:[19.3,42.8],CY:[33,35],MT:[14.4,35.9],SI:[15,46.1],AZO:[-28,38.5],
  BO:[-64,-17],CR:[-84,10],DO:[-70.7,19],SV:[-89,13.8],JM:[-77.3,18.1],NI:[-85,12.9],
  PY:[-58,-23],UY:[-56,-33],TT:[-61.2,10.7],PR:[-66.5,18.2],
  BF:[-1.7,12.3],CI:[-5.5,7.5],ET2:[39.5,9],GA:[11.8,-0.8],GN:[-10,10.5],ML:[-4,17],
  MR:[-10.9,20],NE:[8,17.6],RW:[30,-2],SO:[46,5],SS:[31,7],TN:[9.5,34],UG:[32.4,1.4],
  BH:[50.5,26],OM:[56,21],QA:[51.2,25.3],LK:[81,7.5],BT:[90.4,27.4],LA:[103,18],
  MN:[104,46],PG:[144,-6],FJ:[178,-17.8],KG:[74.6,41.2],TJ:[71,38.9],TM:[59.5,39],
  HK:[114.2,22.3],MO:[113.5,22.2],BN:[114.7,4.5],MV:[73.5,3.2],
};

/** Returns [lng, lat] for a country code, or null when unknown. */
export function centroidFor(code: string | null | undefined): [number, number] | null {
  if (!code) return null;
  return COUNTRY_CENTROIDS[code.toUpperCase()] ?? null;
}
