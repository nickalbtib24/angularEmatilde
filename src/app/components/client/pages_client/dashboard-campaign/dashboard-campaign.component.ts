
import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ActivatedRoute } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  templateUrl: './dashboard-campaign.component.html',
  styleUrls: ['./dashboard-campaign.component.css']
})
export class DashboardCampaignComponent implements OnInit {

  radioModel: string = 'Month';

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
    private Principal: PrincipalService
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
    },
    {
      data: this.ReachData3,
      label: 'Expected'
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
          max: 0
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
          max: this.dataReach.length,
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
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 0,
          max: 0,
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
        }
      }],
      yAxes: [{
        display: false,
        max: 0
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
      label: 'Current'
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
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 0
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
      label: 'AmmountSpent'
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
          max: 0,
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
      label: 'Video Clicks'
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
      label: 'Post Reaction'
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
  public LinkClicksData3: Array<number> = [];

  public LinkClicksData: Array<any> = [
    {
      data: this.LinkClicksData1,
      label: 'Current'
    },
    {
      data: this.LinkClicksData2,
      label: 'Expected'
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

    this.getCampaignsByUser();

    this.ReachOptions.scales.yAxes[0].ticks.max = this.ReachData[0].reach;
    this.BudgetOptions.scales.yAxes[0].ticks.max = this.BudgetData[0].budget;
    this.ResultOptions.scales.yAxes[0].ticks.max = this.ResultData[0].result;
    this.CostPerResultOptions.scales.yAxes[0].ticks.max = this.CostPerResultData[0].CostPerResult;
    this.AmountSpentOptions.scales.yAxes[0].ticks.max = this.AmountSpentData[0].ammount_spent;
    this.LinkClicksOptions.scales.yAxes[0].ticks.max = this.LinkClicksData[0].link_clicks;

  }

  getCampaignsByUser() {
    let campaign = this.Route.snapshot.paramMap.get('id');
    this.Principal.getCampaignInform(campaign).subscribe((data: any[]) => {
      this.kpis = data;
      console.log(data);
      this.prepareData(this.kpis);
    });
  }

  prepareData(kpis) {
    for (let kpi of kpis) {
      this.dates.push(kpi.date);
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
    this.styleProgressBudgetSpent = {'width' : percentageBudget + '%'};
    this.budgetSpent = percentageBudget + '%';
    this.budgetReport = '$' + budgetRep + ' / ' + budgetCamp + '$';

    const percentageLinkClicks = kpis[kpis.length - 1].link_clicks;
  }

  public findMaxOfArray(arr: any[]) {
    var max = 0;
    for (const el of arr) {
      if(max < el) {
        max = el;
      }
    }
    console.log(max);
    return max;
  }
}
