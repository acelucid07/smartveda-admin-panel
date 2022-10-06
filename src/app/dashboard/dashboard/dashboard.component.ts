import { Component, OnInit } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  
  data: any;
  sidebarSpacing: any;
  fgsType: any;
  faMoneyBill = faMoneyBill;
  doughnutData:any;
  barChartData:any;
  options = {
    responsive: false,
    maintainAspectRatio: false,
  };

  constructor(private ngxLoader: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.data = {
      labels: ['Customers','Orders','Sponsers'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#73baf5",
                  "#8dd990",
                  "#FFB74D"
              ]
          }
      ]
  };
  this.doughnutData = {
    labels: ['Customers', 'Orders', 'Sponsers'],
    datasets: [
      {
        data: [450, 250, 300],
        backgroundColor: [
          "#00baad",
          "#ff5733",
          "#6a2ff5"
        ],
        hoverBackgroundColor: [
          "#63d4cc",
          "#f78972",
          "#8456f0"
        ]
      }
    ]
  };
  this.barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Customers',
            backgroundColor: '#00baad',
            data: [65, 49, 80, 81, 56, 65, 45]
        },
        {
            label: 'Sponsers',
            backgroundColor: '#ff6c4d',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
this.ngxLoader.stop();
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
      this.ngxLoader.stop();
    }
  }
}
