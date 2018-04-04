import LocalizedStrings from 'react-localization';
import Cookies from 'universal-cookie';
import { merge } from 'lodash';

const common = {
  fi: {
    frontpage: 'Etusivu',
    changelang: 'In English',
    forbusinesses: 'Yrityksille',
    timetoregistration: 'Ohjelmantekijöiden ilmoittautuminen alkaa',
    registrationdate: '5.3. klo 9!',
    instagramfeed: '#Instagram-feed',
    failedtoloadimages: 'Instagram-kuvien lataus epäonnistui!',
    broadcastended: 'Lähetys jatkuu taas ennen Wappua!',
    tunein: 'Käynnistä radiosi 16.4.2018!',
    whatis: `Radiodiodi on Otaniemestä ponnistava joka vuosi täysin opiskelijavetoisesti toteutettu kaupallinen wappuradio. 
    Radio toteutetaan vuonna 2018 jo seitsemättä kertaa ja lähetys on käynnissä täydet kaksi viikkoa ennen wappuaattoa.
    Projektiin osallistuu joka vuosi satoja vapaaehtoisia taustatyön muodossa ja ohjelmaakin tulee vuosittain tekemään 
    kahden lähetysviikon aikana yli 100 vapaaehtoista. Radiota kuuntelee lähetyksen aikana koko pääkaupunkiseutu 
    ja lasketulla kuuluvuusalueella asuu noin 400 000 ihmistä!`,
    whatisheading: 'Mikä Radiodiodi?',
    instagramimage: 'Instagram-kuva',
    ancientromansquote: '“Suosittelen kokemuksena“',
    editorinchief: 'Päätoimittaja',
    itdirector: 'IT-päällikko',
    executivedirector: 'Toimituspäällikkö',
    headofstudio: 'Studiopäällikkö',
    socialmediamanager: 'Some-vastaava',
    broadcastengineer: 'Lähetysketjupäällikkö',
    corporaterelationsmanager: 'Yrityssuhdevastaava',
    incollaboration: 'Yhteistyössä',
    radioprogramheading: 'Ohjelmantekijäksi?',
    radioprogramparagraph1:
      'Radiodiodi tarvitsee sinua! Oletko aina haaveillut oman radio-ohjelman tekemisestä? Ai et vai? Ei se haittaa!',
    radioprogramparagraph2:
      'Radiodiodin ohjelma on aina ollut yhteisönsä tekemää ja näköistä. Lähetyskautemme aikana radiossa kuullaan satoja eri ääniä, joista yksi voit olla sinä. Ohjelmantekijäilmoittautuminen aukeaa 5.3. Lisätietoja ohjelman tekemisestä saa päätoimittajalta.',
    registration: 'Ilmoittaudu',
    librarybrowser: 'Musiikkikirjasto',
    title: 'Kappale',
    artist: 'Artisti',
    album: 'Albumi',
    nosongsfound: 'Ei hakutuloksia :(',
    search: 'Hae',
    registrationopensat: 'Ilmoittautuminen aukeaa klo 9:00 maanantaina 5.3.!',
    registrationopen: 'Ohjelmantekijäilmo on auki! Käy ilmoittautumassa osoitteessa ',
    calendarreleased: 'Ohjelmakalenteri on julkaistu! Katso alustava aikataulu <a href="/#calendar">täältä</a>!',
    oto: 'Ohjelmantekijän opas',
    faq: 'UKK',
    programme: 'Ohjelma',
    otoprogrammetext: 'Tavanomainen radio-ohjelma kestää kaksi tuntia.',
    programmeduration: 'Syötä ohjelmasi kesto (tunneissa): ',
    programmedurationsubtitle: 'Ohjelmasi rakenne voisi näyttää esimerkiksi tältä:',
    speech: 'Puhetta',
    music: 'Musiikkia',
    jingles: 'Jinglejä',
    ads: 'Mainoksia',
    hour: 'tunti',
    hours: 'tuntia',
    minute: 'minuutti',
    minutes: 'minuuttia',
    preliminarycalendar: 'Alustava ohjelmakalenteri',
    musiclibrary: 'Musiikkikirjasto',
  },
  en: {
    frontpage: 'Front page',
    changelang: 'Suomeksi',
    forbusinesses: ' ',
    timetoregistration: 'Show registration begins on',
    registrationdate: 'the 5th of March at 9 a.m.!',
    instagramfeed: '#Instagram Feed',
    failedtoloadimages: 'Failed to load Instagram images!',
    broadcastended: 'The broadcast will start again before Wappu!',
    tunein: 'Activate your radio receiver on the 16th of April 2018!',
    whatis: `Radiodiodi is a commercial student-driven Wappu-season radio station based in Otaniemi. The station is being
    set up for the seventh time in 2018 and the broadcast will be live for a full two weeks right before the Wappu eve.
    Hundreds of volunteers take part in the project every year, mainly doing groundwork or hosting shows. The whole metropolitan
    area can listen to the broadcast; the signal covers more than 400 000 people!`,
    whatisheading: 'What is Radiodiodi?',
    instagramimage: 'Instagram image',
    ancientromansquote: '“Important quote here“',
    editorinchief: 'Editor in Chief',
    itdirector: 'IT Director',
    executivedirector: 'Executive Director',
    headofstudio: 'Head of Studio',
    socialmediamanager: 'Social Media Manager',
    broadcastengineer: 'Broadcast Engineer',
    corporaterelationsmanager: 'Corporate Relations Manager',
    incollaboration: 'In collaboration with',
    radioprogramheading: 'Ready to become a radio host?',
    radioprogramparagraph1:
      'Radiodiodi needs you! Have you always wanted to host your own radio show? No? Not a problem!',
    radioprogramparagraph2:
      'Radiodiodi looks and sounds like its community. During the broadcast period there are over a hundred different voices heard – and you can be one of them. The registration begins on March 5th. Contact the editor-in-chief for more info.',
    registration: 'Sign up',
    librarybrowser: 'Music library browser',
    title: 'Title',
    artist: 'Artist',
    album: 'Album',
    nosongsfound: 'No songs found :(',
    search: 'Search',
    registrationopensat: 'The registration opens at 9:00 on the 5th of March!',
    registrationopen: 'Programme registration is open! Register your programme at ',
    calendarreleased: 'The programme schedule has been released! See the preliminary timetable <a href="/#calendar">here</a>!',
    oto: 'Programme maker\'s guide',
    faq: 'FAQ',
    programme: 'Programme',
    otoprogrammetext: 'A standard radio programme is two hours long.',
    programmeduration: 'Enter the duration of your programme (h): ',
    programmedurationsubtitle: 'The structure of your programme could look like this: ',
    speech: 'Speech',
    music: 'Music',
    jingles: 'Jingles',
    ads: 'Ads',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    preliminarycalendar: 'Preliminary programme schedule',
    musiclibrary: 'Music library',
  }
};

const faqStrings = {
  fi: {
    faquestion1: 'Ketkä saavat tehdä ohjelmaa Radiodiodissa?',
    faanswer1: 'Kaikki, jotka ehtivät ohjelma-ajan varaamaan! :)',
    faquestion2: 'Mitä musiikkia saa soittaa?',
    faanswer2: 'Kaikkea laillisesti hankittua musiikkia, kuten CD-levyt, vinyylit, kasetit ja itse tuotetut teokset. Myös mm. Suomen iTunesista tai Bandcampista ostetut kappaleet käyvät. Lisäkysymyksiin saa vastauksen laittamalla mailia <a href="mailto:toimitus@radiodiodi.fi">toimitus@radiodiodi.fi</a>.',
    faquestion3: 'Saako studiossa syödä/juoda? Entä alkoholi?',
    faanswer3: 'Kunhan laitteet pysyvät ehjänä ja kunnossa, mikään ei estä studiossa syömistä tai juomista.',
    faquestion4: 'Onko ohjelmantekijöille ruokaa tai juomaa talon puolesta?',
    faanswer4: 'BTW tarjoaa pullollisen toniciaan jokaiselle ohjelmantekijälle. Pidemmille ohjelmasessioille kannattaa varata omaa evästä mukaan.',
    faquestion5: 'Haluan toimia tuottajana, mitä teen?',
    faanswer5: 'Laita mailia <a href="mailto:rekry@radiodiodi.fi">rekry@radiodiodi.fi</a>!',
    faquestion6: 'Voiko Radiodiodin tekemiseen osallistua muuten kuin ohjelmaa tekemällä?',
    faanswer6: 'Voi kyllä! Olemme kokonaisvaltainen mediaproduktio, joten tarvetta taustatiimissämme on paitsi erilaisten teknologioiden taitajille, niin myös markkinoinnille, graafiselle osaamiselle, yrityssuhdepuurtamistyölle ja melkein kaikelle muullekin. Lisätietoja saa mailista <a href="mailto:rekry@radiodiodi.fi">rekry@radiodiodi.fi</a>!',
    faquestion7: 'Voiko Radiossa soittaa elävää musiikkia/esiintyä?',
    faanswer7: 'Kyllä voi, erittäin hyvä idea!',
    faquestion8: 'Saako ohjelmaan tuoda vieraita?',
    faanswer8: 'Vieraat ovat oivallinen tapa piristää radio-ohjelmaa. Mikäli haluat tuoda ohjelmaasi vieraita, kerrothan sen ohjelmakuvauksessasi ja toimitukselle <a href="mailto:rekry@radiodiodi.fi">rekry@radiodiodi.fi</a>!',
  },
  en: {
    faquestion1: 'Who are allowed to host a programme in Radiodiodi?',
    faanswer1: 'Everyone, who manages to reserve a programme slot! :)',
    faquestion2: 'What music am I allowed to play on air?',
    faanswer2: 'All kinds of legally obtained music, which includes CDs, vinyls, casettes and self-produced music. Also music from iTunes Finland and e.g. Bandcamp is allowed. If you have more questions, please contact <a href="mailto:toimitus@radiodiodi.fi">toimitus@radiodiodi.fi</a>.',
    faquestion3: 'Am I allowed to eat or drink in the studio? What about alcohol?',
    faanswer3: 'As long as the equipment is unharmed, eating and drinking is totally allowed.',
    faquestion4: 'Is there free food or drinks for programme hosts?',
    faanswer4: 'The tonic company BTW provides a bottle of tonic for every host. Bring your own grub for longer sessions.',
    faquestion5: 'I want to be a producer. What do I do?',
    faanswer5: 'Contact us at <a href="mailto:rekry@radiodiodi.fi">rekry@radiodiodi.fi</a>!',
    faquestion6: 'Can I help with the production in addition to being a programme host?',
    faanswer6: 'Oh yes! We are a full fledged media production, so there is a need for all kinds of experts and non-experts in the team. We need skills in marketing, graphic design, corporate affairs and pretty much everything else. For more information, contact <a href="mailto:rekry@radiodiodi.fi">rekry@radiodiodi.fi</a>!',
    faquestion7: 'Can I play live music or perform on air?',
    faanswer7: 'You totally can, great idea!',
    faquestion8: 'Can I bring guests to the studio?',
    faanswer8: 'Guests are a great way to spice up a programme. If you wish to bring guests to the studio, please tell us about it in your programme description and via email at <a href="mailto:rekry@radiodiodi.fi">rekry@radiodiodi.fi</a>!',
  },
}

const trans = new LocalizedStrings(common);
const faq = new LocalizedStrings(faqStrings);

const cookies = new Cookies();
const lang = cookies.get('lang');
trans.setLanguage(lang || 'fi');
faq.setLanguage(lang || 'fi');

export default trans;
export { faq, };
