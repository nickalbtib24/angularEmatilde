
import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ActivatedRoute } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: './dashboard-campaign.component.html',
  styleUrls: ['./dashboard-campaign.component.css']
})
export class DashboardCampaignComponent implements OnInit {

  public  radioModel = 'Month';
  public dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;
  private informs = [];
  private kpis = [];
  private dates = [];
  private dataReach = []; //
  private dataBudget = []; //
  private dataResult = []; //
  private dataImpressions = []; //
  private dataAmountSpent = []; //
  private dataLinkClicks = []; //
  private dataLinkClicks2 = [];
  private dataCostPerResult = [];
  private dataLandingPageViews = [];
  private dataCostPerLandingPageView = [];
  public budgetSpent = '0%';
  public styleProgressBudgetSpent = {'width': '0%'};
  public budgetReport = '$0 / $0';
  public reportingDate = '';
  public information = false;
  public alert = false;
  public range: any;

  // tslint:disable-next-line: max-line-length
  public toolTipReach = 'The reach indicates the number of people who saw your ads at least once, this can be affected by the current budget.';
  public toolTipResults = 'Results indicates the number of purchases that were made as a result of your ad being seen.';
  // tslint:disable-next-line: max-line-length
  public toolTipImpressions = 'Impressions are considered the times the ad instance is shown on the screen for the first time. (Example: If a person sees an ad, scroll down, and then return to the same ad, it will count as one impression. If a person sees an ad twice in the same day, it will count as two impressions.) ';
  public toolTipBudgetSpent = 'Indicates the amount spent of the original budget';
  // tslint:disable-next-line: max-line-length
  public toolTipCostPerResult = 'The cost per result indicates how profitable it was to achieve the goals you established in your advertising campaign, it is calculated by dividing the total amount spent by the number of results.';
  public toolTipAmountSpent = 'Total estimated amount of money you spent on your campaign';
  // tslint:disable-next-line: max-line-length
  public toolTipLandingPageViews = 'Landing page views let you know how many times people loaded your website or instant experience after clicking your ad.';
  public toolTipCostPerLandingPageView = 'This metric is calculated by dividing the total amount spent by landing page views.';
  // tslint:disable-next-line: max-line-length
  public toolTipLinkClicks = 'The link clicks metric indicates the number of clicks on ad links that direct you to specific destinations or experiences.';
  constructor(
    private Route: ActivatedRoute,
    private Principal: PrincipalService,
    private dialog: MatDialog,
    ){
    }

  // Reach

  public ReachElements = 7;
  public ReachData2: Array<number> = [];
  public ReachData3: Array<number> = [];

  public ReachData: Array<any> = [
    {
      data: this.dataReach,
      label: 'Reach'
    }
  ];
  /* tslint:disable:max-line-length */
  public ReachLabels: Array<any> = this.dates;
  /* tslint:enable:max-line-length */
  public ReachOptions: any = {
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
        ticks: {
          callback: function(value: any) {
            return value;
          }
        },
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 0
        },
        scaleLabel: {
          display: true,
          labelString: 'Number of People'
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
    },
    legend: {
      display: true
    }
  };
  public ReachColours: Array<any> = [
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
  public ReachLegend = false;
  public ReachType = 'line';


  // Budget
  public BudgetData: Array<any> = [
    {
      data: this.dataBudget,
      label: 'Budget'
    }
  ];
  public BudgetLabels: Array<any> = this.dates;
  public BudgetOptions: any = {
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
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontColor: 'white',
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'transparent',
          display: true,
          min: 0,
          max: this.dataReach.length,
        },
        scaleLabel: {
          display: true,
          fontColor: 'white',
          labelString: 'Dollars',
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
    },

  };
  public BudgetColours: Array<any> = [
    {
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public BudgetLegend = false;
  public BudgetType = 'line';

  // Result
  public ResultData: Array<any> = [
    {
      data: this.dataResult,
      label: 'Result'
    }
  ];
  public ResultLabels: Array<any> = this.dates;
  public ResultOptions: any = {
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
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontColor: 'white',
        }

      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          display: false,
          min: 0,
          max: 0,
        }, scaleLabel: {
          display: true,
          labelString: 'Purchases',
          fontColor: 'white',
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
  public ResultColours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public ResultLegend = false;
  public ResultType = 'line';

  // Impressions
  public ImpressionsData: Array<any> = [
    {
      data: this.dataImpressions,
      label: 'Impressions'
    }
  ];
  public ImpressionsLabels: Array<any> = this.dates;
  public ImpressionsOptions: any = {
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
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontColor: 'white',
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          display: false,
        }, scaleLabel: {
          display: true,
          labelString: 'Purchases',
          fontColor: 'white',
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
      },
    },
    legend: {
      display: false
    }
  };
  public ImpressionsColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public ImpressionsLegend = false;
  public ImpressionsType = 'line';

  // AmmountSpent

  public CostPerResultElements = 7;
  public CostPerResultData1: Array<number> = this.dataCostPerResult;


  public CostPerResultData: Array<any> = [
    {
      data: this.dataCostPerResult,
      label: 'Cost Per Result'
    }
  ];
  /* tslint:disable:max-line-length */
  public CostPerResultLabels: Array<any> = this.dates;
  /* tslint:enable:max-line-length */
  public CostPerResultOptions: any = {
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
        }, scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 0
        }, scaleLabel: {
          display: true,
          labelString: 'USD'
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
  public CostPerResultColours: Array<any> = [
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
  public CostPerResultLegend = false;
  public CostPerResultType = 'line';
   // Frequency
   public AmountSpentData: Array<any> = [
    {
      data: this.dataAmountSpent,
      label: 'Ammount Spent'
    }
  ];
  public AmountSpentLabels: Array<any> = this.dates;
  public AmountSpentOptions: any = {
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
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontColor: 'white'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 8,
          fontColor: 'transparent',
          display: true,
          min: 0,
          max: 0,
        },
        scaleLabel: {
          display: true,
          labelString: 'USD',
          fontColor: 'white'
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
    },

  };
  public AmountSpentColours: Array<any> = [
    {
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public AmountSpentLegend = false;
  public AmountSpentType = 'line';

  // VideoClicks
  public LandingPageViewsData: Array<any> = [
    {
      data: this.dataLandingPageViews,
      label: 'Landing Page Views'
    }
  ];
  public LandingPageViewsLabels: Array<any> = this.dates;
  public LandingPageViewsOptions: any = {
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
        }, scaleLabel: {
          display: true,
          labelString: 'Date',
          fontColor: 'white'
        }

      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          display: false,
          labelColor: 'transparent',
          min: 0,
          max: 100,
        },
        scaleLabel: {
          display: true,
          labelString: 'Page Views',
          fontColor: 'white'
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
  public LandingPageViewsColours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public LandingPageViewsLegend = false;
  public LandingPageViewsType = 'line';

  // PostReaction
  public CostPerLandingPageViewData: Array<any> = [
    {
      data: this.dataCostPerLandingPageView,
      label: 'Cost Per Landing Page View'
    }
  ];
  public CostPerLandingPageViewLabels: Array<any> = this.dates;
  public CostPerLandingPageViewOptions: any = {
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
        },
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontColor: 'white'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          display: false,
          labelColor: 'transparent',
        },
        scaleLabel: {
          display: true,
          labelString: 'USD',
          fontColor: 'white'
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
      },
    },
    legend: {
      display: false
    }
  };
  public CostPerLandingPageViewColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public CostPerLandingPageViewLegend = false;
  public CostPerLandingPageViewType = 'line';
//Link Clicks

public LinkClicksElements = 7;
  public LinkClicksData1: Array<number> = this.dataLinkClicks;
  public LinkClicksData2: Array<number> = this.dataLinkClicks2;

  public LinkClicksData: Array<any> = [
    {
      data: this.LinkClicksData1,
      label: 'Link Clicks'
    },
    {
      data: this.LinkClicksData2,
      label: 'Expected Link Clicks'
    }
  ];
  /* tslint:disable:max-line-length */
  public LinkClicksLabels: Array<any> = this.dates;
  /* tslint:enable:max-line-length */
  public LinkClicksOptions: any = {
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
        },scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }, scaleLabel: {
          display: true,
          labelString: 'Link Clicks'
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
  public LinkClicksColours: Array<any> = [
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
  public LinkClicksLegend = false;
  public LinkClicksType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public ExpectedBudget: any = {
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

  ngOnInit(): void {
    const observable = new Observable(this.myObservable);
    this.showProgressSpinnerUntilExecuted(observable);
    this.getCampaignsByUser();

    this.ReachOptions.scales.yAxes[0].ticks.max = undefined;
    this.BudgetOptions.scales.yAxes[0].ticks.max = undefined;
    this.ResultOptions.scales.yAxes[0].ticks.max = undefined;
    this.CostPerResultOptions.scales.yAxes[0].ticks.max = undefined;
    this.AmountSpentOptions.scales.yAxes[0].ticks.max = undefined;
    this.LinkClicksOptions.scales.yAxes[0].ticks.max = undefined;
    this.LandingPageViewsOptions.scales.yAxes[0].ticks.max = undefined;
  }

  getCampaignsByUser() {
    // tslint:disable-next-line: prefer-const
    let campaign = this.Route.snapshot.paramMap.get('id');
    this.Principal.getCampaignInform(campaign).subscribe((data: any[]) => {
      this.kpis = data;
      this.dialog.closeAll();
      this.prepareData(this.kpis);
    });
  }

  prepareData(kpis) {
    if (kpis.length === 0) {
      this.information = false;
      this.alert = true;
    } else {
      this.information = true;
      for (let kpi of kpis) {
        this.dates.push(kpi.fecha_cracion);
        this.dataReach.push(kpi.reach);
        this.dataBudget.push(kpi.budget);
        this.dataResult.push(kpi.result);
        this.dataImpressions.push(kpi.impressions);
        this.dataAmountSpent.push(kpi.ammount_spent);
        this.dataLinkClicks.push(kpi.link_clicks);
        this.dataCostPerResult.push(kpi.cost_per_result);
        this.dataLandingPageViews.push(kpi.landing_page_views);
        this.dataCostPerLandingPageView.push(kpi.cost_per_landing_page_view);
        this.dataLinkClicks2.push(kpi.campana.expected_link_clicks);
      }
      const percentageBudget = kpis[kpis.length - 1].budget_spent;
      const budgetCamp = kpis[kpis.length - 1].campana.expected_budget;
      const budgetRep = kpis[kpis.length - 1].ammount_spent;
      this.reportingDate = kpis[kpis.length - 1].date;
      this.styleProgressBudgetSpent = {'width' : percentageBudget + '%'};
      this.budgetSpent = percentageBudget + '%';
      this.budgetReport = '$' + Math.floor(budgetRep) + ' / $' + budgetCamp;
      const percentageLinkClicks = kpis[kpis.length - 1].link_clicks;
    }
  }

  public filterDates() {
    const newDates = new Array();
    const date1 = new Date(this.range.begin);
    const date2 = new Date(this.range.end);
    const newDataReach = new Array();
    const newDataResults = new Array();
    const newDataImpressions = new Array();
    const newDataCostPerResult = new Array();
    const newDataAmmountSpent = new Array();
    const newDataLandingPageViews = new Array();
    const newDataCostPerLandingPageView = new Array();
    const newDataLinkClicks = new Array();
    const newDataLinkClicks2 = new Array();
    const newDataBudget = new Array();

    while (date1 <= date2) {
        const day: string = this.addZeroToNumber(date1.getDate().toString());
        const month: string = this.addZeroToNumber((date1.getMonth() + 1).toString());
        const year: string = date1.getFullYear().toString();
        const dateFinal = year + '-' + month + '-' + day;
        newDates.push(dateFinal);
        date1.setDate(date1.getDate() + 1);
      }
    let pos = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < newDates.length ; j++) {
      // tslint:disable-next-line: prefer-for-of
      const date = newDates[j];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.dates.length ; i++) {
        const actualDate = this.dates[i];
        if (date === actualDate) {
          newDataReach[j] = this.dataReach[pos];
          newDataResults[j] = this.dataResult[pos];
          newDataImpressions[j] = this.dataImpressions[pos];
          newDataCostPerResult[j] = this.dataCostPerResult[pos];
          newDataAmmountSpent[j] = this.dataAmountSpent[pos];
          newDataLandingPageViews[j] = this.dataLandingPageViews[pos];
          newDataCostPerLandingPageView[j] = this.dataCostPerLandingPageView[pos];
          newDataLinkClicks[j] = this.dataLinkClicks[pos];
          newDataLinkClicks2[j] = this.dataLinkClicks2[pos];
          newDataBudget[j] = this.dataBudget[pos];
          pos ++;
        }
      }
    }
    this.fillBlankData(newDataReach);
    this.fillBlankData(newDataResults);
    this.fillBlankData(newDataImpressions);
    this.fillBlankData(newDataCostPerResult);
    this.fillBlankData(newDataLandingPageViews);
    this.fillBlankData(newDataCostPerLandingPageView);
    this.fillBlankData(newDataLinkClicks);
    this.fillBlankData(newDataLinkClicks2);
    this.fillBlankData(newDataBudget);
    this.fillBlankData(newDataAmmountSpent);

    this.ReachData[0].data = newDataReach;
    this.ResultData[0].data = newDataResults;
    this.ImpressionsData[0].data = newDataImpressions;
    this.CostPerResultData[0].data = newDataCostPerResult;
    this.LandingPageViewsData[0].data = newDataLandingPageViews;
    this.CostPerLandingPageViewData[0].data = newDataCostPerLandingPageView;
    this.LinkClicksData[0].data = newDataLinkClicks;
    this.LinkClicksData[1].data = newDataLinkClicks2;
    this.BudgetData[0].data = newDataBudget;
    this.AmountSpentData[0].data = newDataAmmountSpent;

    this.ReachLabels = newDates;
    this.ResultLabels = newDates;
    this.ImpressionsLabels = newDates;
    this.CostPerResultLabels = newDates;
    this.LandingPageViewsLabels = newDates;
    this.CostPerLandingPageViewLabels = newDates;
    this.LinkClicksLabels = newDates;
    this.BudgetLabels = newDates;
    this.AmountSpentLabels = newDates;
  }
  public fillBlankData(array: Array<any>) {
    for (let x = 0; x < array.length ; x ++) {
    const actual = array[x];
    const before = array[x - 1];
    if (actual === undefined) {
      if (before !== undefined) {
        array[x] = before;
      }
    }
  }
  }

  public addZeroToNumber(number: string): string{
    let answ = '';
    if (number.length === 1) {
      answ = '0' + number;
    } else {
      answ = number;
    }
    return answ;
  }

  public print() {
    this.filterDates();
  }

  public findMaxOfArray(arr: any[]) {
    var max = 0;
    for (const el of arr) {
      if(max < el) {
        max = el;
      }
    }
    return max;
  }

  public myObservable(observer) {
    setTimeout(() => {
      observer.next('done waiting for 5 sec');
      observer.complete();
    }, 2000);
  }

   public showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
    this.dialogRef = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
  }

}
