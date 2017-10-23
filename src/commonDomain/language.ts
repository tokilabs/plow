import { isBlank } from '@cashfarm/lang';

import { ValueObject } from '../domain';

export class Language extends ValueObject<Language> {
  public static readonly aa = new Language('Afar', 'aa');
  public static readonly ab = new Language('Abkhazian', 'ab');
  public static readonly af = new Language('Afrikaans', 'af');
  public static readonly ak = new Language('Akan', 'ak');
  public static readonly am = new Language('Amharic', 'am');
  public static readonly an = new Language('Aragonese', 'an');
  public static readonly ar = new Language('Arabic', 'ar');
  public static readonly as = new Language('Assamese', 'as');
  public static readonly av = new Language('Avar', 'av');
  public static readonly ay = new Language('Aymara', 'ay');
  public static readonly az = new Language('Azerbaijani', 'az');
  public static readonly ba = new Language('Bashkir', 'ba');
  public static readonly be = new Language('Belarusian', 'be');
  public static readonly bg = new Language('Bulgarian', 'bg');
  public static readonly bh = new Language('Bihari', 'bh');
  public static readonly bi = new Language('Bislama', 'bi');
  public static readonly bm = new Language('Bambara', 'bm');
  public static readonly bn = new Language('Bengali', 'bn');
  public static readonly bo = new Language('Tibetan', 'bo');
  public static readonly br = new Language('Breton', 'br');
  public static readonly bs = new Language('Bosnian', 'bs');
  public static readonly ca = new Language('Catalan', 'ca');
  public static readonly ce = new Language('Chechen', 'ce');
  public static readonly ch = new Language('Chamorro', 'ch');
  public static readonly co = new Language('Corsican', 'co');
  public static readonly cr = new Language('Cree', 'cr');
  public static readonly cs = new Language('Czech', 'cs');
  public static readonly cu = new Language('Old Church Slavonic / Old Bulgarian', 'cu');
  public static readonly cv = new Language('Chuvash', 'cv');
  public static readonly cy = new Language('Welsh', 'cy');
  public static readonly da = new Language('Danish', 'da');
  public static readonly de = new Language('German', 'de');
  public static readonly dv = new Language('Divehi', 'dv');
  public static readonly dz = new Language('Dzongkha', 'dz');
  public static readonly ee = new Language('Ewe', 'ee');
  public static readonly el = new Language('Greek', 'el');
  public static readonly en = new Language('English', 'en');
  public static readonly eo = new Language('Esperanto', 'eo');
  public static readonly es = new Language('Spanish', 'es');
  public static readonly et = new Language('Estonian', 'et');
  public static readonly eu = new Language('Basque', 'eu');
  public static readonly fa = new Language('Persian', 'fa');
  public static readonly ff = new Language('Peul', 'ff');
  public static readonly fi = new Language('Finnish', 'fi');
  public static readonly fj = new Language('Fijian', 'fj');
  public static readonly fo = new Language('Faroese', 'fo');
  public static readonly fr = new Language('French', 'fr');
  public static readonly fy = new Language('West Frisian', 'fy');
  public static readonly ga = new Language('Irish', 'ga');
  public static readonly gd = new Language('Scottish Gaelic', 'gd');
  public static readonly gl = new Language('Galician', 'gl');
  public static readonly gn = new Language('Guarani', 'gn');
  public static readonly gu = new Language('Gujarati', 'gu');
  public static readonly gv = new Language('Manx', 'gv');
  public static readonly ha = new Language('Hausa', 'ha');
  public static readonly he = new Language('Hebrew', 'he');
  public static readonly hi = new Language('Hindi', 'hi');
  public static readonly ho = new Language('Hiri Motu', 'ho');
  public static readonly hr = new Language('Croatian', 'hr');
  public static readonly ht = new Language('Haitian', 'ht');
  public static readonly hu = new Language('Hungarian', 'hu');
  public static readonly hy = new Language('Armenian', 'hy');
  public static readonly hz = new Language('Herero', 'hz');
  public static readonly ia = new Language('Interlingua', 'ia');
  public static readonly id = new Language('Indonesian', 'id');
  public static readonly ie = new Language('Interlingue', 'ie');
  public static readonly ig = new Language('Igbo', 'ig');
  public static readonly ii = new Language('Sichuan Yi', 'ii');
  public static readonly ik = new Language('Inupiak', 'ik');
  public static readonly io = new Language('Ido', 'io');
  public static readonly is = new Language('Icelandic', 'is');
  public static readonly it = new Language('Italian', 'it');
  public static readonly iu = new Language('Inuktitut', 'iu');
  public static readonly ja = new Language('Japanese', 'ja');
  public static readonly jv = new Language('Javanese', 'jv');
  public static readonly kg = new Language('Kongo', 'kg');
  public static readonly ki = new Language('Kikuyu', 'ki');
  public static readonly kj = new Language('Kuanyama', 'kj');
  public static readonly kk = new Language('Kazakh', 'kk');
  public static readonly kl = new Language('Greenlandic', 'kl');
  public static readonly km = new Language('Cambodian', 'km');
  public static readonly kn = new Language('Kannada', 'kn');
  public static readonly ko = new Language('Korean', 'ko');
  public static readonly kr = new Language('Kanuri', 'kr');
  public static readonly ks = new Language('Kashmiri', 'ks');
  public static readonly ku = new Language('Kurdish', 'ku');
  public static readonly kv = new Language('Komi', 'kv');
  public static readonly kw = new Language('Cornish', 'kw');
  public static readonly ky = new Language('Kirghiz', 'ky');
  public static readonly la = new Language('Latin', 'la');
  public static readonly lb = new Language('Luxembourgish', 'lb');
  public static readonly lg = new Language('Ganda', 'lg');
  public static readonly li = new Language('Limburgian', 'li');
  public static readonly ln = new Language('Lingala', 'ln');
  public static readonly lo = new Language('Laotian', 'lo');
  public static readonly lt = new Language('Lithuanian', 'lt');
  public static readonly lv = new Language('Latvian', 'lv');
  public static readonly mg = new Language('Malagasy', 'mg');
  public static readonly mh = new Language('Marshallese', 'mh');
  public static readonly mi = new Language('Maori', 'mi');
  public static readonly mk = new Language('Macedonian', 'mk');
  public static readonly ml = new Language('Malayalam', 'ml');
  public static readonly mn = new Language('Mongolian', 'mn');
  public static readonly mo = new Language('Moldovan', 'mo');
  public static readonly mr = new Language('Marathi', 'mr');
  public static readonly ms = new Language('Malay', 'ms');
  public static readonly mt = new Language('Maltese', 'mt');
  public static readonly my = new Language('Burmese', 'my');
  public static readonly na = new Language('Nauruan', 'na');
  public static readonly nd = new Language('North Ndebele', 'nd');
  public static readonly ne = new Language('Nepali', 'ne');
  public static readonly ng = new Language('Ndonga', 'ng');
  public static readonly nl = new Language('Dutch', 'nl');
  public static readonly nn = new Language('Norwegian Nynorsk', 'nn');
  public static readonly no = new Language('Norwegian', 'no');
  public static readonly nr = new Language('South Ndebele', 'nr');
  public static readonly nv = new Language('Navajo', 'nv');
  public static readonly ny = new Language('Chichewa', 'ny');
  public static readonly oc = new Language('Occitan', 'oc');
  public static readonly oj = new Language('Ojibwa', 'oj');
  public static readonly om = new Language('Oromo', 'om');
  public static readonly or = new Language('Oriya', 'or');
  public static readonly os = new Language('Ossetian', 'os');
  public static readonly pa = new Language('Punjabi', 'pa');
  public static readonly pi = new Language('Pali', 'pi');
  public static readonly pl = new Language('Polish', 'pl');
  public static readonly ps = new Language('Pashto', 'ps');
  public static readonly pt = new Language('Portuguese', 'pt');
  public static readonly qu = new Language('Quechua', 'qu');
  public static readonly rm = new Language('Raeto Romance', 'rm');
  public static readonly rn = new Language('Kirundi', 'rn');
  public static readonly ro = new Language('Romanian', 'ro');
  public static readonly ru = new Language('Russian', 'ru');
  public static readonly rw = new Language('Rwandi', 'rw');
  public static readonly sa = new Language('Sanskrit', 'sa');
  public static readonly sc = new Language('Sardinian', 'sc');
  public static readonly sd = new Language('Sindhi', 'sd');
  public static readonly sg = new Language('Sango', 'sg');
  public static readonly sh = new Language('Serbo-Croatian', 'sh');
  public static readonly si = new Language('Sinhalese', 'si');
  public static readonly sk = new Language('Slovak', 'sk');
  public static readonly sl = new Language('Slovenian', 'sl');
  public static readonly sm = new Language('Samoan', 'sm');
  public static readonly sn = new Language('Shona', 'sn');
  public static readonly so = new Language('Somalia', 'so');
  public static readonly sq = new Language('Albanian', 'sq');
  public static readonly sr = new Language('Serbian', 'sr');
  public static readonly ss = new Language('Swati', 'ss');
  public static readonly st = new Language('Southern Sotho', 'st');
  public static readonly su = new Language('Sundanese', 'su');
  public static readonly sv = new Language('Swedish', 'sv');
  public static readonly sw = new Language('Swahili', 'sw');
  public static readonly ta = new Language('Tamil', 'ta');
  public static readonly te = new Language('Telugu', 'te');
  public static readonly tg = new Language('Tajik', 'tg');
  public static readonly th = new Language('Thai', 'th');
  public static readonly ti = new Language('Tigrinya', 'ti');
  public static readonly tk = new Language('Turkmen', 'tk');
  public static readonly tl = new Language('Tagalog', 'tl');
  public static readonly tn = new Language('Tswana', 'tn');
  public static readonly to = new Language('Tonga', 'to');
  public static readonly tr = new Language('Turkish', 'tr');
  public static readonly ts = new Language('Tsonga', 'ts');
  public static readonly tt = new Language('Tatar', 'tt');
  public static readonly tw = new Language('Twi', 'tw');
  public static readonly ty = new Language('Tahitian', 'ty');
  public static readonly ug = new Language('Uyghur', 'ug');
  public static readonly ur = new Language('Urdu', 'ur');
  public static readonly ve = new Language('Venda', 've');
  public static readonly vi = new Language('Vietnamese', 'vi');
  public static readonly vo = new Language('Volapük', 'vo');
  public static readonly wa = new Language('Walloon', 'wa');
  public static readonly wo = new Language('Wolof', 'wo');
  public static readonly xh = new Language('Xhosa', 'xh');
  public static readonly yi = new Language('Yiddish', 'yi');
  public static readonly yo = new Language('Yoruba', 'yo');
  public static readonly za = new Language('Zhuang', 'za');
  public static readonly zh = new Language('Chinese', 'zh');
  public static readonly zu = new Language('Zulu', 'zu');

  constructor(
    public readonly name: string,
    public readonly code: string
  ) {
    super(Language, ['name', 'code']);
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
  public static find(name: string): Language {
    if (isBlank(name))
      throw new Error('Parameter `name` cannot be empty');

    return Language.asArray().find(l => l.name === name);
  }

  /**
   * Returns an array with all Countries
   *
   * @static
   * @returns {Country[]} An array with all Country objects
   * @memberof Country
   */
  public static asArray(): Language[] {
    return Object.getOwnPropertyNames(Language).map(l => Language[l]);
  }
}
