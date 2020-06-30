import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // data: holds the data from the api in viewData();
  data: any;

  // pickedCountry: holds the current country either from location, from user or by default "Afghanistan || افغانستان";
  pickedCountry: any;

  // locCountry: holds the selected country according the location from getLocation();
  locCountry: any;

  // countriesArr: this is the main array for holding the countries either Ar or En from viewCountries();
  countriesArr = [];

  // EnCountriesArr: has all the countries in English;
  EnCountriesArr = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    "Timor L'Este",
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  // ArCountriesArr: has all the countries in Arabic;
  ArCountriesArr = [
    'أفغانستان',
    'ألبانيا',
    'الجزائر',
    'أندورا',
    'أنجولا',
    'أنغيلا',
    'أنتيغوا & أمبير باربودا',
    'الأرجنتين',
    'أرمينيا',
    'أروبا',
    'أستراليا',
    'النمسا',
    'أذربيجان',
    'جزر البهاما',
    'البحرين',
    'بنغلاديش',
    'بربادوس',
    'بيلاروسيا',
    'بلجيكا',
    'بليز',
    'بنين',
    'برمودا',
    'بوتان',
    'بوليفيا',
    'البوسنة الهرسك',
    'بوتسوانا',
    'البرازيل',
    'جزر فيرجن البريطانية',
    'بروناي',
    'بلغاريا',
    'بوركينا فاسو',
    'بوروندي',
    'كمبوديا',
    'الكاميرون',
    'الرأس الأخضر',
    'جزر كايمان',
    'تشاد',
    'تشيلي',
    'الصين',
    'كولومبيا',
    'الكونغو',
    'جزر كوك',
    'كوستا ريكا',
    'Cote D Ivoire',
    'كرواتيا',
    'سفينه سياحيه',
    'كوبا',
    'قبرص',
    'جمهورية التشيك',
    'الدنمارك',
    'جيبوتي',
    'دومينيكا',
    'جمهورية الدومنيكان',
    'إكوادور',
    'مصر',
    'السلفادور',
    'غينيا الإستوائية',
    'إستونيا',
    'أثيوبيا',
    'جزر فوكلاند',
    'جزر فاروس',
    'فيجي',
    'فنلندا',
    'فرنسا',
    'بولينيزيا الفرنسية',
    'جزر الهند الغربية الفرنسية',
    'غابون',
    'غامبيا',
    'جورجيا',
    'ألمانيا',
    'غانا',
    'جبل طارق',
    'اليونان',
    'الأرض الخضراء',
    'غرينادا',
    'غوام',
    'غواتيمالا',
    'جيرنزي',
    'غينيا',
    'غينيا بيساو',
    'غيانا',
    'هايتي',
    'هندوراس',
    'هونغ كونغ',
    'هنغاريا',
    'أيسلندا',
    'الهند',
    'إندونيسيا',
    'إيران',
    'العراق',
    'أيرلندا',
    'جزيرة آيل أوف مان',
    'إسرائيل',
    'إيطاليا',
    'جامايكا',
    'اليابان',
    'جيرسي',
    'الأردن',
    'كازاخستان',
    'كينيا',
    'الكويت',
    'جمهورية قيرغيزستان',
    'لاوس',
    'لاتفيا',
    'لبنان',
    'ليسوتو',
    'ليبيريا',
    'ليبيا',
    'ليختنشتاين',
    'ليتوانيا',
    'لوكسمبورغ',
    'ماكاو',
    'مقدونيا',
    'مدغشقر',
    'ملاوي',
    'ماليزيا',
    'جزر المالديف',
    'مالي',
    'مالطا',
    'موريتانيا',
    'موريشيوس',
    'المكسيك',
    'مولدوفا',
    'موناكو',
    'منغوليا',
    'الجبل الأسود',
    'مونتسيرات',
    'المغرب',
    'موزمبيق',
    'ناميبيا',
    'نيبال',
    'هولندا',
    'جزر الأنتيل الهولندية',
    'كاليدونيا الجديدة',
    'نيوزيلندا',
    'نيكاراغوا',
    'النيجر',
    'نيجيريا',
    'النرويج',
    'سلطنة عمان',
    'باكستان',
    'فلسطين',
    'بنما',
    'بابوا غينيا الجديدة',
    'باراغواي',
    'بيرو',
    'الفلبين',
    'بولندا',
    'البرتغال',
    'بورتوريكو',
    'دولة قطر',
    'جمع شمل',
    'رومانيا',
    'روسيا',
    'رواندا',
    'سانت بيير وأمبير. ميكولون',
    'ساموا',
    'سان مارينو',
    'الأقمار الصناعية',
    'المملكة العربية السعودية',
    'السنغال',
    'صربيا',
    'سيشيل',
    'سيرا ليون',
    'سنغافورة',
    'سلوفاكيا',
    'سلوفينيا',
    'جنوب أفريقيا',
    'كوريا الجنوبية',
    'إسبانيا',
    'سيريلانكا',
    'سانت كيتس & أمبير ؛ نيفيس',
    'شارع لوسيا',
    'شارع فنسنت',
    'سانت لوسيا',
    'السودان',
    'سورينام',
    'سوازيلاند',
    'السويد',
    'سويسرا',
    'سوريا',
    'تايوان',
    'طاجيكستان',
    'تنزانيا',
    'تايلاند',
    'تيمور ليست',
    'توجو',
    'تونغا',
    'ترينيداد توباغو',
    'تونس',
    'ديك رومي',
    'تركمانستان',
    'الأتراك Caicos ',
    'أوغندا',
    'أوكرانيا',
    'الإمارات العربية المتحدة',
    'المملكة المتحدة',
    'أوروجواي',
    'أوزبكستان',
    'فنزويلا',
    'فيتنام',
    'جزر فيرجن (الولايات المتحدة)',
    'اليمن',
    'زامبيا',
    'زيمبابوي',
  ];

  // lang: responsible for holding the current language from localStorage to show home.component.html in getLang();
  lang: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    // functions in here will be invoked once the website reloaded;

    // invoking getLang() every 2 seconds to get the language from localStorage;
    setInterval(() => {
      this.getLang();
    }, 2000);

    this.getLocation();
    this.viewCountries();
    // this.viewData();
  }

  // DO NOT CHANGE//
  viewData() {
    // checking if the pickedCountry does exist in the arabic array, if yes==> loop in the arabic array to find the picked country in arabic;
    this.ArCountriesArr.includes(this.pickedCountry) &&
      this.ArCountriesArr.forEach((element, i) => {
        // if this element is equal to the picked country;
        if (element === this.pickedCountry) {
          // we will change the value of the pickedCountry to the same element Index in the English array;
          this.pickedCountry = this.EnCountriesArr[i];
          console.log('PICKED COUNTRY =====> ', this.pickedCountry);
        }
      });

    // sending pickedCountry to the api in http.service;
    this._http.getData(this.pickedCountry).forEach((data) => {
      // assign the coming data to this.data;
      this.data = data;

      // if the length of data is greater than 0 will check the language in localStorage to view sweetAlert according to the langage of the page;

      if (this.data.length > 0) {
        if (localStorage.getItem('lang') === 'ar') {
          Swal.fire({
            text: 'تم جلب البيانات',
            timer: 1200,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
          });
        } else {
          Swal.fire({
            text: 'Data fetched',
            timer: 2000,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
          });
        }
      } else {
        if (localStorage.getItem('lang') === 'ar') {
          Swal.fire({
            icon: 'warning',
            text: 'لا توجد نتائج على هذه الدولة',
            timer: 1500,
            position: 'top',
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            icon: 'warning',
            text: 'No results for this country',
            timer: 1500,
            position: 'top',
            showConfirmButton: false,
          });
        }
      }

      return this.data;
    });
  }

  // THIS IS THE FUNCTION THAT SHOULD BE INVOKED WHEN THE LANGUAGE CHANGES FROM NAVBAR //
  viewCountries() {
    // checking the language to assign either the Arabic array or the English array to the main array;
    if (localStorage.getItem('lang') === 'ar') {
      for (var i = 0; i < this.ArCountriesArr.length; i++) {
        this.countriesArr[i] = { id: i, country: this.ArCountriesArr[i] };
      }
    } else if (localStorage.getItem('lang') === 'en') {
      for (var i = 0; i < this.EnCountriesArr.length; i++) {
        this.countriesArr[i] = { id: i, country: this.EnCountriesArr[i] };
      }
    }
    console.log('THIS IS PICKED FROM VIEW =======> ', this.pickedCountry);
    // console.log('COUNTRIES===> ', this.countriesArr);
    // return this.countriesArr;
  }

  // this function is being invoked from home.component.html when the user select a country;
  pickCountry(country) {
    console.log('COUNTRY=====> ', country);
    this.pickedCountry = country;
    this.viewData();
  }

  // DO NOT CHANGE //
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          this.location(longitude, latitude);
        },
        () => {
          this.pickedCountry = 'Afghanistan';
          this.viewData();
        }
      );
    } else {
      console.log('No support for geolocation');
    }
  }

  // DO NOT CHANGE //
  location(long, lat) {
    this._http.getLocation(lat, long).subscribe((data) => {
      this.pickedCountry = data['countryName'];
      this.locCountry = data['countryName'];
      this.viewData();
    });
  }

  // DO NOT CHANGE //
  getLang() {
    this.lang = localStorage.getItem('lang');
    // this.viewCountries();
  }
}
