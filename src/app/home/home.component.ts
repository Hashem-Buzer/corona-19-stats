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

  // EnCountriesArr: has all the countries in English;
  EnCountriesArr = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
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
    'Bosnia & Herzegovina',
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
    'Croatia',
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
    'Romania',
    'Russia',
    'Rwanda',
    'Samoa',
    'San Marino',
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
    'Tunisia',
    'Turkey',
    'Turkmenistan',
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
    'كرواتيا',
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
    'رومانيا',
    'روسيا',
    'رواندا',
    'ساموا',
    'سان مارينو',
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
    'تونس',
    'تركيا',
    'تركمانستان',
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
    // observable for changing language
    this._http.reader$.subscribe((language) => {
      this.lang = language;

      this.getLang();
      this.viewCountries();
    });

    this.getLang();
    this.getLocation();
    this.viewCountries();
  }

  viewData() {
    // checking if the pickedCountry does exist in the arabic array, if yes==> loop in the arabic array to find the picked country in arabic;
    this.ArCountriesArr.includes(this.pickedCountry) &&
      this.ArCountriesArr.forEach((element, i) => {
        // if this element is equal to the picked country;
        if (element === this.pickedCountry) {
          // we will change the value of the pickedCountry to the same element Index in the English array;
          this.pickedCountry = this.EnCountriesArr[i];
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
            timer: 1000,
            position: 'top',
            showConfirmButton: false,
            icon: 'success',
          });
        } else {
          Swal.fire({
            text: 'Data fetched',
            timer: 1500,
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
          }).then(() => this.viewCountries());
        } else {
          Swal.fire({
            icon: 'warning',
            text: 'No results for this country',
            timer: 1500,
            position: 'top',
            showConfirmButton: false,
          }).then(() => this.viewCountries());
        }
      }

      // invoking viewCountries to change the language of the dropdown;
      this.viewCountries();
    });
  }

  viewCountries() {
    // checking tha language of the picked country to change it according the current language;
    if (localStorage.getItem('lang') === 'ar') {
      this.EnCountriesArr.forEach((element, i) => {
        // if this element is equal to the picked country;
        if (element === this.pickedCountry) {
          // we will change the value of the pickedCountry to the same element Index in the Arabic array;
          this.pickedCountry = this.ArCountriesArr[i];
        }
      });
    } else if (localStorage.getItem('lang') === 'en') {
      this.ArCountriesArr.forEach((element, i) => {
        // if this element is equal to the picked country;
        if (element === this.pickedCountry) {
          // we will change the value of the pickedCountry to the same element Index in the English array;
          this.pickedCountry = this.EnCountriesArr[i];
        }
      });
    }
  }

  pickCountry(country) {
    // this function is being invoked from home.component.html when the user select a country;

    // I assigned the coming value that user has fucked;
    this.pickedCountry = country;

    // invoking viewData to bring the data for this pickedCountry;
    this.viewData();
  }

  getLocation() {
    // in this function i get the Longitude and Latitude of the user to send them to location();
    //// if something wrong happened like the user blocked the access;
    ////// pickedCountry will take 'Afghanistan' as a default value;
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
      alert('No support for geolocation');
    }
  }

  location(long, lat) {
    // this function takes Longitude and Latitude from getLocation() to be sent to an api to give me informations about these measurements;
    this._http.getLocation(lat, long).subscribe((data) => {
      // i assign the Country Name of the  coming data to pickedCountry;
      this.pickedCountry = data['countryName'];
      // invoking viewData to get the data of the location country;
      this.viewData();
    });
  }

  getLang() {
    // getting the language from localStorage and assigning it to lang variable to be read from home.component.html;
    this.lang = localStorage.getItem('lang');
  }
}
