import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {
  leadExtraDetailsStructure,
  leadStructure,
} from 'src/app/_models/leads';
import { LeadService } from 'src/app/_services/leads.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import bsCustomFileInput from 'bs-custom-file-input';
interface country {
  text: string;
  value: string;
}
@Component({
  selector: 'app-lead-edit',
  templateUrl: './lead-edit.component.html',
  styleUrls: ['./lead-edit.component.scss'],
})
export class LeadEditComponent implements OnInit {
  sidebarSpacing: string;
  name: string;
  countries: country[];
  technologies: string[];
  refSource: string[];
  statusArray: string[];
  cityArray: string[];
  stateArray: string[];
  leadlist: leadStructure[] = [];
  disablingCondition: boolean = true;
  editCondition: boolean = false;
  leadForm: FormGroup;
  DateFieldData = new Date();
  leadDetails: leadExtraDetailsStructure[] = [];

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    private toastr: ToastrMsgService,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.leadForm = fb.group({
      leadName: ['', [Validators.required]],
      contactNumber: [null, [Validators.required]],
      emailAddress: ['', [Validators.required]],
      technologyRequested: ['', [Validators.required]],
      BudgetAmount: [null, [Validators.required]],
      reference: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      stateName: ['', [Validators.required]],
      cityName: ['', [Validators.required]],
      countryName: ['', [Validators.required]],
      followUpDate: ['', [Validators.required]],
      salesPersonName: ['', [Validators.required]],
      commentGiven: ['', [Validators.required]],
      meetStatus: ['', [Validators.required]],
      nextFollowUpDate: [''],
      newCommentGiven: [''],
    });

    this.sidebarSpacing = 'contracted';
    this.refSource = ['Site', 'Linked In', 'Newspaper', 'Other'];
    this.technologies = ['Front End', 'Back End'];
    this.statusArray = [
      'Next follow up',
      'Pending',
      'In Progress',
      'Dead',
      'Convert',
      'Office visit',
    ];
    this.stateArray = ['Uttrakhand', 'Haryana', 'Maharashtra'];
    this.cityArray = ['Dehradun', 'Gurgaon', 'Mumbai'];
    this.countries = [
      { text: 'Afghanistan', value: 'AF' },
      { text: 'Åland Islands', value: 'AX' },
      { text: 'Albania', value: 'AL' },
      { text: 'Algeria', value: 'DZ' },
      { text: 'American Samoa', value: 'AS' },
      { text: 'Andorra', value: 'AD' },
      { text: 'Angola', value: 'AO' },
      { text: 'Anguilla', value: 'AI' },
      { text: 'Antarctica', value: 'AQ' },
      { text: 'Antigua and Barbuda', value: 'AG' },
      { text: 'Argentina', value: 'AR' },
      { text: 'Armenia', value: 'AM' },
      { text: 'Aruba', value: 'AW' },
      { text: 'Australia', value: 'AU' },
      { text: 'Austria', value: 'AT' },
      { text: 'Azerbaijan', value: 'AZ' },
      { text: 'Bahamas', value: 'BS' },
      { text: 'Bahrain', value: 'BH' },
      { text: 'Bangladesh', value: 'BD' },
      { text: 'Barbados', value: 'BB' },
      { text: 'Belarus', value: 'BY' },
      { text: 'Belgium', value: 'BE' },
      { text: 'Belize', value: 'BZ' },
      { text: 'Benin', value: 'BJ' },
      { text: 'Bermuda', value: 'BM' },
      { text: 'Bhutan', value: 'BT' },
      { text: 'Bolivia', value: 'BO' },
      { text: 'Bosnia and Herzegovina', value: 'BA' },
      { text: 'Botswana', value: 'BW' },
      { text: 'Bouvet Island', value: 'BV' },
      { text: 'Brazil', value: 'BR' },
      { text: 'British Indian Ocean Territory', value: 'IO' },
      { text: 'Brunei Darussalam', value: 'BN' },
      { text: 'Bulgaria', value: 'BG' },
      { text: 'Burkina Faso', value: 'BF' },
      { text: 'Burundi', value: 'BI' },
      { text: 'Cambodia', value: 'KH' },
      { text: 'Cameroon', value: 'CM' },
      { text: 'Canada', value: 'CA' },
      { text: 'Cape Verde', value: 'CV' },
      { text: 'Cayman Islands', value: 'KY' },
      { text: 'Central African Republic', value: 'CF' },
      { text: 'Chad', value: 'TD' },
      { text: 'Chile', value: 'CL' },
      { text: 'China', value: 'CN' },
      { text: 'Christmas Island', value: 'CX' },
      { text: 'Cocos (Keeling) Islands', value: 'CC' },
      { text: 'Colombia', value: 'CO' },
      { text: 'Comoros', value: 'KM' },
      { text: 'Congo', value: 'CG' },
      { text: 'Congo, The Democratic Republic of the', value: 'CD' },
      { text: 'Cook Islands', value: 'CK' },
      { text: 'Costa Rica', value: 'CR' },
      { text: "Cote D'Ivoire", value: 'CI' },
      { text: 'Croatia', value: 'HR' },
      { text: 'Cuba', value: 'CU' },
      { text: 'Cyprus', value: 'CY' },
      { text: 'Czech Republic', value: 'CZ' },
      { text: 'Denmark', value: 'DK' },
      { text: 'Djibouti', value: 'DJ' },
      { text: 'Dominica', value: 'DM' },
      { text: 'Dominican Republic', value: 'DO' },
      { text: 'Ecuador', value: 'EC' },
      { text: 'Egypt', value: 'EG' },
      { text: 'El Salvador', value: 'SV' },
      { text: 'Equatorial Guinea', value: 'GQ' },
      { text: 'Eritrea', value: 'ER' },
      { text: 'Estonia', value: 'EE' },
      { text: 'Ethiopia', value: 'ET' },
      { text: 'Falkland Islands (Malvinas)', value: 'FK' },
      { text: 'Faroe Islands', value: 'FO' },
      { text: 'Fiji', value: 'FJ' },
      { text: 'Finland', value: 'FI' },
      { text: 'France', value: 'FR' },
      { text: 'French Guiana', value: 'GF' },
      { text: 'French Polynesia', value: 'PF' },
      { text: 'French Southern Territories', value: 'TF' },
      { text: 'Gabon', value: 'GA' },
      { text: 'Gambia', value: 'GM' },
      { text: 'Georgia', value: 'GE' },
      { text: 'Germany', value: 'DE' },
      { text: 'Ghana', value: 'GH' },
      { text: 'Gibraltar', value: 'GI' },
      { text: 'Greece', value: 'GR' },
      { text: 'Greenland', value: 'GL' },
      { text: 'Grenada', value: 'GD' },
      { text: 'Guadeloupe', value: 'GP' },
      { text: 'Guam', value: 'GU' },
      { text: 'Guatemala', value: 'GT' },
      { text: 'Guernsey', value: 'GG' },
      { text: 'Guinea', value: 'GN' },
      { text: 'Guinea-Bissau', value: 'GW' },
      { text: 'Guyana', value: 'GY' },
      { text: 'Haiti', value: 'HT' },
      { text: 'Heard Island and Mcdonald Islands', value: 'HM' },
      { text: 'Holy See (Vatican City State)', value: 'VA' },
      { text: 'Honduras', value: 'HN' },
      { text: 'Hong Kong', value: 'HK' },
      { text: 'Hungary', value: 'HU' },
      { text: 'Iceland', value: 'IS' },
      { text: 'India', value: 'IN' },
      { text: 'Indonesia', value: 'ID' },
      { text: 'Iran, Islamic Republic Of', value: 'IR' },
      { text: 'Iraq', value: 'IQ' },
      { text: 'Ireland', value: 'IE' },
      { text: 'Isle of Man', value: 'IM' },
      { text: 'Israel', value: 'IL' },
      { text: 'Italy', value: 'IT' },
      { text: 'Jamaica', value: 'JM' },
      { text: 'Japan', value: 'JP' },
      { text: 'Jersey', value: 'JE' },
      { text: 'Jordan', value: 'JO' },
      { text: 'Kazakhstan', value: 'KZ' },
      { text: 'Kenya', value: 'KE' },
      { text: 'Kiribati', value: 'KI' },
      { text: "Korea, Democratic People'S Republic of", value: 'KP' },
      { text: 'Korea, Republic of', value: 'KR' },
      { text: 'Kuwait', value: 'KW' },
      { text: 'Kyrgyzstan', value: 'KG' },
      { text: "Lao People'S Democratic Republic", value: 'LA' },
      { text: 'Latvia', value: 'LV' },
      { text: 'Lebanon', value: 'LB' },
      { text: 'Lesotho', value: 'LS' },
      { text: 'Liberia', value: 'LR' },
      { text: 'Libyan Arab Jamahiriya', value: 'LY' },
      { text: 'Liechtenstein', value: 'LI' },
      { text: 'Lithuania', value: 'LT' },
      { text: 'Luxembourg', value: 'LU' },
      { text: 'Macao', value: 'MO' },
      { text: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
      { text: 'Madagascar', value: 'MG' },
      { text: 'Malawi', value: 'MW' },
      { text: 'Malaysia', value: 'MY' },
      { text: 'Maldives', value: 'MV' },
      { text: 'Mali', value: 'ML' },
      { text: 'Malta', value: 'MT' },
      { text: 'Marshall Islands', value: 'MH' },
      { text: 'Martinique', value: 'MQ' },
      { text: 'Mauritania', value: 'MR' },
      { text: 'Mauritius', value: 'MU' },
      { text: 'Mayotte', value: 'YT' },
      { text: 'Mexico', value: 'MX' },
      { text: 'Micronesia, Federated States of', value: 'FM' },
      { text: 'Moldova, Republic of', value: 'MD' },
      { text: 'Monaco', value: 'MC' },
      { text: 'Mongolia', value: 'MN' },
      { text: 'Montserrat', value: 'MS' },
      { text: 'Morocco', value: 'MA' },
      { text: 'Mozambique', value: 'MZ' },
      { text: 'Myanmar', value: 'MM' },
      { text: 'Namibia', value: 'NA' },
      { text: 'Nauru', value: 'NR' },
      { text: 'Nepal', value: 'NP' },
      { text: 'Netherlands', value: 'NL' },
      { text: 'Netherlands Antilles', value: 'AN' },
      { text: 'New Caledonia', value: 'NC' },
      { text: 'New Zealand', value: 'NZ' },
      { text: 'Nicaragua', value: 'NI' },
      { text: 'Niger', value: 'NE' },
      { text: 'Nigeria', value: 'NG' },
      { text: 'Niue', value: 'NU' },
      { text: 'Norfolk Island', value: 'NF' },
      { text: 'Northern Mariana Islands', value: 'MP' },
      { text: 'Norway', value: 'NO' },
      { text: 'Oman', value: 'OM' },
      { text: 'Pakistan', value: 'PK' },
      { text: 'Palau', value: 'PW' },
      { text: 'Palestinian Territory, Occupied', value: 'PS' },
      { text: 'Panama', value: 'PA' },
      { text: 'Papua New Guinea', value: 'PG' },
      { text: 'Paraguay', value: 'PY' },
      { text: 'Peru', value: 'PE' },
      { text: 'Philippines', value: 'PH' },
      { text: 'Pitcairn', value: 'PN' },
      { text: 'Poland', value: 'PL' },
      { text: 'Portugal', value: 'PT' },
      { text: 'Puerto Rico', value: 'PR' },
      { text: 'Qatar', value: 'QA' },
      { text: 'Reunion', value: 'RE' },
      { text: 'Romania', value: 'RO' },
      { text: 'Russian Federation', value: 'RU' },
      { text: 'RWANDA', value: 'RW' },
      { text: 'Saint Helena', value: 'SH' },
      { text: 'Saint Kitts and Nevis', value: 'KN' },
      { text: 'Saint Lucia', value: 'LC' },
      { text: 'Saint Pierre and Miquelon', value: 'PM' },
      { text: 'Saint Vincent and the Grenadines', value: 'VC' },
      { text: 'Samoa', value: 'WS' },
      { text: 'San Marino', value: 'SM' },
      { text: 'Sao Tome and Principe', value: 'ST' },
      { text: 'Saudi Arabia', value: 'SA' },
      { text: 'Senegal', value: 'SN' },
      { text: 'Serbia and Montenegro', value: 'CS' },
      { text: 'Seychelles', value: 'SC' },
      { text: 'Sierra Leone', value: 'SL' },
      { text: 'Singapore', value: 'SG' },
      { text: 'Slovakia', value: 'SK' },
      { text: 'Slovenia', value: 'SI' },
      { text: 'Solomon Islands', value: 'SB' },
      { text: 'Somalia', value: 'SO' },
      { text: 'South Africa', value: 'ZA' },
      { text: 'South Georgia and the South Sandwich Islands', value: 'GS' },
      { text: 'Spain', value: 'ES' },
      { text: 'Sri Lanka', value: 'LK' },
      { text: 'Sudan', value: 'SD' },
      { text: 'Suriname', value: 'SR' },
      { text: 'Svalbard and Jan Mayen', value: 'SJ' },
      { text: 'Swaziland', value: 'SZ' },
      { text: 'Sweden', value: 'SE' },
      { text: 'Switzerland', value: 'CH' },
      { text: 'Syrian Arab Republic', value: 'SY' },
      { text: 'Taiwan, Province of China', value: 'TW' },
      { text: 'Tajikistan', value: 'TJ' },
      { text: 'Tanzania, United Republic of', value: 'TZ' },
      { text: 'Thailand', value: 'TH' },
      { text: 'Timor-Leste', value: 'TL' },
      { text: 'Togo', value: 'TG' },
      { text: 'Tokelau', value: 'TK' },
      { text: 'Tonga', value: 'TO' },
      { text: 'Trinidad and Tobago', value: 'TT' },
      { text: 'Tunisia', value: 'TN' },
      { text: 'Turkey', value: 'TR' },
      { text: 'Turkmenistan', value: 'TM' },
      { text: 'Turks and Caicos Islands', value: 'TC' },
      { text: 'Tuvalu', value: 'TV' },
      { text: 'Uganda', value: 'UG' },
      { text: 'Ukraine', value: 'UA' },
      { text: 'United Arab Emirates', value: 'AE' },
      { text: 'United Kingdom', value: 'GB' },
      { text: 'United States', value: 'US' },
      { text: 'United States Minor Outlying Islands', value: 'UM' },
      { text: 'Uruguay', value: 'UY' },
      { text: 'Uzbekistan', value: 'UZ' },
      { text: 'Vanuatu', value: 'VU' },
      { text: 'Venezuela', value: 'VE' },
      { text: 'Viet Nam', value: 'VN' },
      { text: 'Virgin Islands, British', value: 'VG' },
      { text: 'Virgin Islands, U.S.', value: 'VI' },
      { text: 'Wallis and Futuna', value: 'WF' },
      { text: 'Western Sahara', value: 'EH' },
      { text: 'Yemen', value: 'YE' },
      { text: 'Zambia', value: 'ZM' },
      { text: 'Zimbabwe', value: 'ZW' },
    ];

    this.ActivatedRoute.queryParamMap.subscribe((params) => {
      this.name = params.get('leadName');
    });
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  submit() {
    this.ngxLoader.start();
    let payload = {
      leadName: this.leadForm.controls['leadName'].value,
      contactNumber: this.leadForm.controls['contactNumber'].value,
      emailAddress: this.leadForm.controls['emailAddress'].value,
      technologyRequested: this.leadForm.controls['technologyRequested'].value,
      BudgetAmount: this.leadForm.controls['BudgetAmount'].value,
      reference: this.leadForm.controls['reference'].value,
      pinCode: this.leadForm.controls['pinCode'].value,
      stateName: this.leadForm.controls['stateName'].value,
      cityName: this.leadForm.controls['cityName'].value,
      followUpDate: this.leadForm.controls['followUpDate'].value,
      salesPersonName: this.leadForm.controls['salesPersonName'].value,
      commentGiven: this.leadForm.controls['commentGiven'].value,
      meetStatus: this.leadForm.controls['meetStatus'].value,
      nextFollowUpDate: this.leadForm.controls['nextFollowUpDate'].value,
      countryName: this.leadForm.controls['countryName'].value,
    };
    console.log(payload);
    this.leadService.submitLeadEditData(payload).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess('User edited successfully', 'Edited User');
        this.ngxLoader.stop();
        this.route.navigate(['/leads/leadslist']);
      }
      (error: any) => {
        this.toastr.showError('Somthing wrong Please check', 'Error occured');
        this.ngxLoader.stop();
        this.route.navigate(['/leads/leadslist']);
      };
    });

    if (this.leadForm.controls['meetStatus'].value == 'Next follow up') {
      let date = new Date();
      let payloadsecond = {
        currentDate: date.toISOString().split('T')[0],
        nextFollowUpDate: this.leadForm.controls['nextFollowUpDate'].value
          .toISOString()
          .split('T')[0],
        clientName: this.leadForm.controls['leadName'].value,
        comment: this.leadForm.controls['newCommentGiven'].value,
        status: 'Active',
        deal: 'cold',
      };

      this.leadService.submitFollowDetails(payloadsecond).subscribe((res) => {
        if (res) {
          console.log(res);
        }
        (error: any) => {
          this.toastr.showError(
            'Somthing wrong while submitting followup',
            'Error occured'
          );
        };
      });
    }
  }

  getLeadDetails() {
    this.leadService.getLeadsDetails(this.name).subscribe((res) => {
      this.leadDetails = res;
    });
  }

  ngOnInit(): void {
    bsCustomFileInput.init();

    this.getLeadDetails();
    console.log(this.leadDetails);

    this.leadForm.patchValue({
      leadName: this.leadDetails[0].name,
      contactNumber: this.leadDetails[0].contactNumber,
      emailAddress: this.leadDetails[0].email,
      technologyRequested: this.leadDetails[0].technology,
      BudgetAmount: this.leadDetails[0].budget,
      reference: this.leadDetails[0].source,
      pinCode: this.leadDetails[0].pinCode,
      stateName: this.leadDetails[0].stateName,
      cityName: this.leadDetails[0].cityName,
      followUpDate: new Date(this.leadDetails[0].followUpDate),
      salesPersonName: this.leadDetails[0].createdBy,
      commentGiven: this.leadDetails[0].commentGiven,
      countryName: this.leadDetails[0].countryName,
    });

    let previous = this.leadForm.controls['commentGiven'].value;

    this.leadForm.controls['commentGiven'].valueChanges.subscribe((val) => {
      let innervalue = val.split('</p>')[0].split('<p>')[1];
      if (previous != innervalue) {
        this.editCondition = true;
      } else {
        this.editCondition = false;
      }
      // console.log( this.leadForm.controls["commentGiven"].value)
    });

    this.leadForm.controls['meetStatus'].valueChanges.subscribe((val) => {
      if (val != 'Next follow Up') {
        this.leadForm.controls['nextFollowUpDate'].reset();
      }
    });
  }
}
