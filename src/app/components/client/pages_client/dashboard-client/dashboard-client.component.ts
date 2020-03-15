import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { PrincipalService } from 'src/app/services/principal.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html'
})

export class DashboardClientComponent implements OnInit {

  radioModel: string = 'Month';

  private kpis = [];
  private dates = [];
  private dataActionsOnPage = [];
  private dataPageViews = [];
  private dataPageFollowers = [];
  private dataPageLikes = [];
  private dataPostReach = [];
  private dataPostEngagement = [];
  private dataVideos = [];
  private dataPagePreviews = [];
  private dataGeneralInfo = [];
  constructor (
    private Principal:PrincipalService,
    private Token:TokenService
  ) {}

  // ActionsOnPage
  public ActionsOnPageData: Array<any> = [
    {
      data: this.dataActionsOnPage,
      label: 'Actions on page'
    }
  ];
  public ActionsOnPageLabels: Array<any> = this.dates;
  public ActionsOnPageOptions: any = {
    labels : this.dates ,
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },  
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }

      }],
      yAxes: [{
        display: false,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
          display: true,
          min: 0,
          max: 100,
        },
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    },
    
  };
  public ActionsOnPageColours: Array<any> = [
    {
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public ActionsOnPageLegend = false;
  public ActionsOnPageType = 'line';

  // PageViews
  public PageViewsData: Array<any> = [
    {
      data: this.dataPageViews,
      label: 'Page Views'
    }
  ];
  public PageViewsLabels: Array<any> = this.dates;
  public PageViewsOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 0,
          max: 100,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public PageViewsColours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public PageViewsLegend = false;
  public PageViewsType = 'line';


  // Page Followers
  public PageFollowersData: Array<any> = [
    {
      data: this.dataPageFollowers,
      label: 'Page Followers'
    }
  ];
  public PageFollowersLabels: Array<any> = this.dates;
  public PageFollowersOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public PageFollowersColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public PageFollowersLegend = false;
  public PageFollowersType = 'line';


  // Page Likes
  public PageLikesData: Array<any> = [
    {
      data: this.dataPageLikes,
      label: 'Page Likes',
      barPercentage: 0.6,
    }
  ];
  public PageLikesLabels: Array<any> = this.dates;
  public PageLikesOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public PageLikesColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public PageLikesLegend = false;
  public PageLikesType = 'bar';

  // mainChart

  public mainChartElements = 7;
  public mainChartData1: Array<number> = this.dataGeneralInfo;
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData3,
      label: 'Expected'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = this.dates;
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

   // ActionsOnPage
   public PostReachData: Array<any> = [
    {
      data: this.dataPostReach,
      label: 'Post Reach'
    }
  ];
  public PostReachLabels: Array<any> = this.dates;
  public PostReachOptions: any = {
    labels : this.dates ,
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },  
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }

      }],
      yAxes: [{
        display: false,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
          display: true,
          min: 0,
          max: 100,
        },
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    },
    
  };
  public PostReachColours: Array<any> = [
    {
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public PostReachLegend = false;
  public PostReachType = 'line';

  // PostEngagement
  public PostEngagementData: Array<any> = [
    {
      data: this.dataPostEngagement,
      label: 'Page Views'
    }
  ];
  public PostEngagementLabels: Array<any> = this.dates;
  public PostEngagementOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 0,
          max: 100,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public PostEngagementColours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public PostEngagementLegend = false;
  public PostEngagementType = 'line';


  // Videos
  public VideosData: Array<any> = [
    {
      data: this.dataVideos,
      label: 'Page Followers'
    }
  ];
  public VideosLabels: Array<any> = this.dates;
  public VideosOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public VideosColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public VideosLegend = false;
  public VideosType = 'line';


  // Page Viewers
  public PageViewersData: Array<any> = [
    {
      data: this.dataPagePreviews,
      label: 'Page Likes',
      barPercentage: 0.6,
    }
  ];
  public PageViewersLabels: Array<any> = this.dates;
  public PageViewersOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'white',
        }
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public PageViewersColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public PageViewersLegend = false;
  public PageViewersType = 'bar';

 
  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      
      this.mainChartData3.push(65);
    }
    let user = this.Token.getUser();
    this.Principal.getKpi(user).subscribe((data: any[])=>{
      this.kpis = data;
      this.prepareData(this.kpis)
    })
  }

  prepareData(kpis){
    for (var kpi of kpis){
      this.dates.push(kpi.fecha)
      this.dataActionsOnPage.push(kpi.actions_on_page)
      this.dataPageViews.push(kpi.page_views)
      this.dataPageFollowers.push(kpi.page_followers)
      this.dataPageLikes.push(kpi.page_likes)
      this.dataGeneralInfo.push(kpi.general_info)
      this.dataPostReach.push(kpi.post_reach)
      this.dataPostEngagement.push(kpi.post_engagement)
      this.dataVideos.push(kpi.videos)
      this.dataPagePreviews.push(kpi.page_previews)
    }
    console.log(this.dates)
    console.log(this.dataActionsOnPage)
    console.log(this.dataPageViews)
  }
}
