import { isBlank } from '@cashfarm/lang';

import { ValueObject } from '../domain';

export class Country extends ValueObject<Country> {

  public static readonly AD = new Country('Andorra', 'AD');
  public static readonly AE = new Country('United Arab Emirates', 'AE');
  public static readonly AF = new Country('Afghanistan', 'AF');
  public static readonly AG = new Country('Antigua and Barbuda', 'AG');
  public static readonly AI = new Country('Anguilla', 'AI');
  public static readonly AL = new Country('Albania', 'AL');
  public static readonly AM = new Country('Armenia', 'AM');
  public static readonly AN = new Country('Netherlands Antilles', 'AN');
  public static readonly AO = new Country('Angola', 'AO');
  public static readonly AQ = new Country('Antarctica', 'AQ');
  public static readonly AR = new Country('Argentina', 'AR');
  public static readonly AS = new Country('American Samoa', 'AS');
  public static readonly AT = new Country('Austria', 'AT');
  public static readonly AU = new Country('Australia', 'AU');
  public static readonly AW = new Country('Aruba', 'AW');
  public static readonly AX = new Country('Åland Islands', 'AX');
  public static readonly AZ = new Country('Azerbaijan', 'AZ');
  public static readonly BA = new Country('Bosnia and Herzegovina', 'BA');
  public static readonly BB = new Country('Barbados', 'BB');
  public static readonly BD = new Country('Bangladesh', 'BD');
  public static readonly BE = new Country('Belgium', 'BE');
  public static readonly BF = new Country('Burkina Faso', 'BF');
  public static readonly BG = new Country('Bulgaria', 'BG');
  public static readonly BH = new Country('Bahrain', 'BH');
  public static readonly BI = new Country('Burundi', 'BI');
  public static readonly BJ = new Country('Benin', 'BJ');
  public static readonly BL = new Country('Saint Barthélemy', 'BL');
  public static readonly BM = new Country('Bermuda', 'BM');
  public static readonly BN = new Country('Brunei', 'BN');
  public static readonly BO = new Country('Bolivia', 'BO');
  public static readonly BQ = new Country('British Antarctic Territory', 'BQ');
  public static readonly BR = new Country('Brazil', 'BR');
  public static readonly BS = new Country('Bahamas', 'BS');
  public static readonly BT = new Country('Bhutan', 'BT');
  public static readonly BV = new Country('Bouvet Island', 'BV');
  public static readonly BW = new Country('Botswana', 'BW');
  public static readonly BY = new Country('Belarus', 'BY');
  public static readonly BZ = new Country('Belize', 'BZ');
  public static readonly CA = new Country('Canada', 'CA');
  public static readonly CC = new Country('Cocos [Keeling] Islands', 'CC');
  public static readonly CD = new Country('Congo - Kinshasa', 'CD');
  public static readonly CF = new Country('Central African Republic', 'CF');
  public static readonly CG = new Country('Congo - Brazzaville', 'CG');
  public static readonly CH = new Country('Switzerland', 'CH');
  public static readonly CI = new Country('Côte d’Ivoire', 'CI');
  public static readonly CK = new Country('Cook Islands', 'CK');
  public static readonly CL = new Country('Chile', 'CL');
  public static readonly CM = new Country('Cameroon', 'CM');
  public static readonly CN = new Country('China', 'CN');
  public static readonly CO = new Country('Colombia', 'CO');
  public static readonly CR = new Country('Costa Rica', 'CR');
  public static readonly CS = new Country('Serbia and Montenegro', 'CS');
  public static readonly CT = new Country('Canton and Enderbury Islands', 'CT');
  public static readonly CU = new Country('Cuba', 'CU');
  public static readonly CV = new Country('Cape Verde', 'CV');
  public static readonly CX = new Country('Christmas Island', 'CX');
  public static readonly CY = new Country('Cyprus', 'CY');
  public static readonly CZ = new Country('Czech Republic', 'CZ');
  public static readonly DD = new Country('East Germany', 'DD');
  public static readonly DE = new Country('Germany', 'DE');
  public static readonly DJ = new Country('Djibouti', 'DJ');
  public static readonly DK = new Country('Denmark', 'DK');
  public static readonly DM = new Country('Dominica', 'DM');
  public static readonly DO = new Country('Dominican Republic', 'DO');
  public static readonly DZ = new Country('Algeria', 'DZ');
  public static readonly EC = new Country('Ecuador', 'EC');
  public static readonly EE = new Country('Estonia', 'EE');
  public static readonly EG = new Country('Egypt', 'EG');
  public static readonly EH = new Country('Western Sahara', 'EH');
  public static readonly ER = new Country('Eritrea', 'ER');
  public static readonly ES = new Country('Spain', 'ES');
  public static readonly ET = new Country('Ethiopia', 'ET');
  public static readonly FI = new Country('Finland', 'FI');
  public static readonly FJ = new Country('Fiji', 'FJ');
  public static readonly FK = new Country('Falkland Islands', 'FK');
  public static readonly FM = new Country('Micronesia', 'FM');
  public static readonly FO = new Country('Faroe Islands', 'FO');
  public static readonly FQ = new Country('French Southern and Antarctic Territories', 'FQ');
  public static readonly FR = new Country('France', 'FR');
  public static readonly FX = new Country('Metropolitan France', 'FX');
  public static readonly GA = new Country('Gabon', 'GA');
  public static readonly GB = new Country('United Kingdom', 'GB');
  public static readonly GD = new Country('Grenada', 'GD');
  public static readonly GE = new Country('Georgia', 'GE');
  public static readonly GF = new Country('French Guiana', 'GF');
  public static readonly GG = new Country('Guernsey', 'GG');
  public static readonly GH = new Country('Ghana', 'GH');
  public static readonly GI = new Country('Gibraltar', 'GI');
  public static readonly GL = new Country('Greenland', 'GL');
  public static readonly GM = new Country('Gambia', 'GM');
  public static readonly GN = new Country('Guinea', 'GN');
  public static readonly GP = new Country('Guadeloupe', 'GP');
  public static readonly GQ = new Country('Equatorial Guinea', 'GQ');
  public static readonly GR = new Country('Greece', 'GR');
  public static readonly GS = new Country('South Georgia and the South Sandwich Islands', 'GS');
  public static readonly GT = new Country('Guatemala', 'GT');
  public static readonly GU = new Country('Guam', 'GU');
  public static readonly GW = new Country('Guinea-Bissau', 'GW');
  public static readonly GY = new Country('Guyana', 'GY');
  public static readonly HK = new Country('Hong Kong SAR China', 'HK');
  public static readonly HM = new Country('Heard Island and McDonald Islands', 'HM');
  public static readonly HN = new Country('Honduras', 'HN');
  public static readonly HR = new Country('Croatia', 'HR');
  public static readonly HT = new Country('Haiti', 'HT');
  public static readonly HU = new Country('Hungary', 'HU');
  public static readonly ID = new Country('Indonesia', 'ID');
  public static readonly IE = new Country('Ireland', 'IE');
  public static readonly IL = new Country('Israel', 'IL');
  public static readonly IM = new Country('Isle of Man', 'IM');
  public static readonly IN = new Country('India', 'IN');
  public static readonly IO = new Country('British Indian Ocean Territory', 'IO');
  public static readonly IQ = new Country('Iraq', 'IQ');
  public static readonly IR = new Country('Iran', 'IR');
  public static readonly IS = new Country('Iceland', 'IS');
  public static readonly IT = new Country('Italy', 'IT');
  public static readonly JE = new Country('Jersey', 'JE');
  public static readonly JM = new Country('Jamaica', 'JM');
  public static readonly JO = new Country('Jordan', 'JO');
  public static readonly JP = new Country('Japan', 'JP');
  public static readonly JT = new Country('Johnston Island', 'JT');
  public static readonly KE = new Country('Kenya', 'KE');
  public static readonly KG = new Country('Kyrgyzstan', 'KG');
  public static readonly KH = new Country('Cambodia', 'KH');
  public static readonly KI = new Country('Kiribati', 'KI');
  public static readonly KM = new Country('Comoros', 'KM');
  public static readonly KN = new Country('Saint Kitts and Nevis', 'KN');
  public static readonly KP = new Country('North Korea', 'KP');
  public static readonly KR = new Country('South Korea', 'KR');
  public static readonly KW = new Country('Kuwait', 'KW');
  public static readonly KY = new Country('Cayman Islands', 'KY');
  public static readonly KZ = new Country('Kazakhstan', 'KZ');
  public static readonly LA = new Country('Laos', 'LA');
  public static readonly LB = new Country('Lebanon', 'LB');
  public static readonly LC = new Country('Saint Lucia', 'LC');
  public static readonly LI = new Country('Liechtenstein', 'LI');
  public static readonly LK = new Country('Sri Lanka', 'LK');
  public static readonly LR = new Country('Liberia', 'LR');
  public static readonly LS = new Country('Lesotho', 'LS');
  public static readonly LT = new Country('Lithuania', 'LT');
  public static readonly LU = new Country('Luxembourg', 'LU');
  public static readonly LV = new Country('Latvia', 'LV');
  public static readonly LY = new Country('Libya', 'LY');
  public static readonly MA = new Country('Morocco', 'MA');
  public static readonly MC = new Country('Monaco', 'MC');
  public static readonly MD = new Country('Moldova', 'MD');
  public static readonly ME = new Country('Montenegro', 'ME');
  public static readonly MF = new Country('Saint Martin', 'MF');
  public static readonly MG = new Country('Madagascar', 'MG');
  public static readonly MH = new Country('Marshall Islands', 'MH');
  public static readonly MI = new Country('Midway Islands', 'MI');
  public static readonly MK = new Country('Macedonia', 'MK');
  public static readonly ML = new Country('Mali', 'ML');
  public static readonly MM = new Country('Myanmar [Burma]', 'MM');
  public static readonly MN = new Country('Mongolia', 'MN');
  public static readonly MO = new Country('Macau SAR China', 'MO');
  public static readonly MP = new Country('Northern Mariana Islands', 'MP');
  public static readonly MQ = new Country('Martinique', 'MQ');
  public static readonly MR = new Country('Mauritania', 'MR');
  public static readonly MS = new Country('Montserrat', 'MS');
  public static readonly MT = new Country('Malta', 'MT');
  public static readonly MU = new Country('Mauritius', 'MU');
  public static readonly MV = new Country('Maldives', 'MV');
  public static readonly MW = new Country('Malawi', 'MW');
  public static readonly MX = new Country('Mexico', 'MX');
  public static readonly MY = new Country('Malaysia', 'MY');
  public static readonly MZ = new Country('Mozambique', 'MZ');
  public static readonly NA = new Country('Namibia', 'NA');
  public static readonly NC = new Country('New Caledonia', 'NC');
  public static readonly NE = new Country('Niger', 'NE');
  public static readonly NF = new Country('Norfolk Island', 'NF');
  public static readonly NG = new Country('Nigeria', 'NG');
  public static readonly NI = new Country('Nicaragua', 'NI');
  public static readonly NL = new Country('Netherlands', 'NL');
  public static readonly NO = new Country('Norway', 'NO');
  public static readonly NP = new Country('Nepal', 'NP');
  public static readonly NQ = new Country('Dronning Maud Land', 'NQ');
  public static readonly NR = new Country('Nauru', 'NR');
  public static readonly NT = new Country('Neutral Zone', 'NT');
  public static readonly NU = new Country('Niue', 'NU');
  public static readonly NZ = new Country('New Zealand', 'NZ');
  public static readonly OM = new Country('Oman', 'OM');
  public static readonly PA = new Country('Panama', 'PA');
  public static readonly PC = new Country('Pacific Islands Trust Territory', 'PC');
  public static readonly PE = new Country('Peru', 'PE');
  public static readonly PF = new Country('French Polynesia', 'PF');
  public static readonly PG = new Country('Papua New Guinea', 'PG');
  public static readonly PH = new Country('Philippines', 'PH');
  public static readonly PK = new Country('Pakistan', 'PK');
  public static readonly PL = new Country('Poland', 'PL');
  public static readonly PM = new Country('Saint Pierre and Miquelon', 'PM');
  public static readonly PN = new Country('Pitcairn Islands', 'PN');
  public static readonly PR = new Country('Puerto Rico', 'PR');
  public static readonly PS = new Country('Palestinian Territories', 'PS');
  public static readonly PT = new Country('Portugal', 'PT');
  public static readonly PU = new Country('U.S. Miscellaneous Pacific Islands', 'PU');
  public static readonly PW = new Country('Palau', 'PW');
  public static readonly PY = new Country('Paraguay', 'PY');
  public static readonly PZ = new Country('Panama Canal Zone', 'PZ');
  public static readonly QA = new Country('Qatar', 'QA');
  public static readonly RE = new Country('Réunion', 'RE');
  public static readonly RO = new Country('Romania', 'RO');
  public static readonly RS = new Country('Serbia', 'RS');
  public static readonly RU = new Country('Russia', 'RU');
  public static readonly RW = new Country('Rwanda', 'RW');
  public static readonly SA = new Country('Saudi Arabia', 'SA');
  public static readonly SB = new Country('Solomon Islands', 'SB');
  public static readonly SC = new Country('Seychelles', 'SC');
  public static readonly SD = new Country('Sudan', 'SD');
  public static readonly SE = new Country('Sweden', 'SE');
  public static readonly SG = new Country('Singapore', 'SG');
  public static readonly SH = new Country('Saint Helena', 'SH');
  public static readonly SI = new Country('Slovenia', 'SI');
  public static readonly SJ = new Country('Svalbard and Jan Mayen', 'SJ');
  public static readonly SK = new Country('Slovakia', 'SK');
  public static readonly SL = new Country('Sierra Leone', 'SL');
  public static readonly SM = new Country('San Marino', 'SM');
  public static readonly SN = new Country('Senegal', 'SN');
  public static readonly SO = new Country('Somalia', 'SO');
  public static readonly SR = new Country('Suriname', 'SR');
  public static readonly ST = new Country('São Tomé and Príncipe', 'ST');
  public static readonly SU = new Country('Union of Soviet Socialist Republics', 'SU');
  public static readonly SV = new Country('El Salvador', 'SV');
  public static readonly SY = new Country('Syria', 'SY');
  public static readonly SZ = new Country('Swaziland', 'SZ');
  public static readonly TC = new Country('Turks and Caicos Islands', 'TC');
  public static readonly TD = new Country('Chad', 'TD');
  public static readonly TF = new Country('French Southern Territories', 'TF');
  public static readonly TG = new Country('Togo', 'TG');
  public static readonly TH = new Country('Thailand', 'TH');
  public static readonly TJ = new Country('Tajikistan', 'TJ');
  public static readonly TK = new Country('Tokelau', 'TK');
  public static readonly TL = new Country('Timor-Leste', 'TL');
  public static readonly TM = new Country('Turkmenistan', 'TM');
  public static readonly TN = new Country('Tunisia', 'TN');
  public static readonly TO = new Country('Tonga', 'TO');
  public static readonly TR = new Country('Turkey', 'TR');
  public static readonly TT = new Country('Trinidad and Tobago', 'TT');
  public static readonly TV = new Country('Tuvalu', 'TV');
  public static readonly TW = new Country('Taiwan', 'TW');
  public static readonly TZ = new Country('Tanzania', 'TZ');
  public static readonly UA = new Country('Ukraine', 'UA');
  public static readonly UG = new Country('Uganda', 'UG');
  public static readonly UM = new Country('U.S. Minor Outlying Islands', 'UM');
  public static readonly US = new Country('United States', 'US');
  public static readonly UY = new Country('Uruguay', 'UY');
  public static readonly UZ = new Country('Uzbekistan', 'UZ');
  public static readonly VA = new Country('Vatican City', 'VA');
  public static readonly VC = new Country('Saint Vincent and the Grenadines', 'VC');
  public static readonly VD = new Country('North Vietnam', 'VD');
  public static readonly VE = new Country('Venezuela', 'VE');
  public static readonly VG = new Country('British Virgin Islands', 'VG');
  public static readonly VI = new Country('U.S. Virgin Islands', 'VI');
  public static readonly VN = new Country('Vietnam', 'VN');
  public static readonly VU = new Country('Vanuatu', 'VU');
  public static readonly WF = new Country('Wallis and Futuna', 'WF');
  public static readonly WK = new Country('Wake Island', 'WK');
  public static readonly WS = new Country('Samoa', 'WS');
  public static readonly YD = new Country('People\'s Democratic Republic of Yemen', 'YD');
  public static readonly YE = new Country('Yemen', 'YE');
  public static readonly YT = new Country('Mayotte', 'YT');
  public static readonly ZA = new Country('South Africa', 'ZA');
  public static readonly ZM = new Country('Zambia', 'ZM');
  public static readonly ZW = new Country('Zimbabwe', 'ZW');
  public static readonly ZZ = new Country('Unknown or Invalid Region', 'ZZ');

  constructor(
    public readonly name: string,
    public readonly code: string
  ) {
    super(Country, ['name', 'code']);
  }

  /**
   * Finds a country by name, searching for an exact match.
   *
   * If no country is found, it returns null;
   *
   * @static
   * @param {string} name The name of the country
   * @returns {Country} If a country with that name is found
   * @memberof Country
   */
  public static find(name: string): Country {
    if (isBlank(name))
      throw new Error('Parameter `name` cannot be empty');

    return Country.asArray().find(c => c instanceof Country && c.name === name);
  }

  /**
   * Returns an array with all Countries
   *
   * @static
   * @returns {Country[]} An array with all Country objects
   * @memberof Country
   */
  public static asArray(): Country[] {
    return Object.getOwnPropertyNames(Country).map(p => Country[p]);
  }
}
