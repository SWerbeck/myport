(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1316:function(e,t,i){e.exports=function(e){"use strict";var t=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(e);function i(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function a(e,t,a){var n=e+" ";switch(a){case"m":return t?"minuta":"minutę";case"mm":return n+(i(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return n+(i(e)?"godziny":"godzin");case"MM":return n+(i(e)?"miesiące":"miesięcy");case"yy":return n+(i(e)?"lata":"lat")}}var n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),r="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),_=/D MMMM/,s=function(e,t){return _.test(t)?n[e.month()]:r[e.month()]};s.s=r,s.f=n;var o={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:s,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return t.default.locale(o,null,!0),o}(i(111))}}]);
//# sourceMappingURL=164.chunk.js.map