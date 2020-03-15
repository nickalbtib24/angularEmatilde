import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ActivatedRoute } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-dashboard-asset',
  templateUrl: './dashboard-asset.component.html',
  styleUrls: ['./dashboard-asset.component.css']
})
export class DashboardAssetComponent implements OnInit {

  active = 1;

  radioModel: string = 'Month';

  private informs = [];
  private kpis = [];
  private dates = [];
  private dataReach = [];
  private dataBudget = [];
  private dataCostPerResult = [];
  private dataImpressions = [];
  private dataEstimatedAddRecall = [];
  private dataAmountSpent = [];
  private dataFrequency = [];
  private dataVideoClicks = [];
  private dataPostreaction = [];
  private dataCarrouselClicks = [];
  private dataLinkClicks = [];
  constructor (
    private Route: ActivatedRoute,
    private Principal: PrincipalService
    ){}

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
      data: this.dataImpressions,
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
      data: this.dataCostPerResult,
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
  public ImpressionsColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public ImpressionsLegend = false;
  public ImpressionsType = 'line';
// EstimatedAddRecall

public EstimatedAddRecallData: Array<any> = [
  {
    data: this.dataLinkClicks,
    label: 'Estimated Add Recall',
    barPercentage: 0.6,
  }
];
public EstimatedAddRecallLabels: Array<any> = this.dates;
public EstimatedAddRecallOptions: any = {
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
public EstimatedAddRecallColours: Array<any> = [
  {
    backgroundColor: 'rgba(255,255,255,.3)',
    borderWidth: 0
  }
];
public EstimatedAddRecallLegend = false;
public EstimatedAddRecallType = 'bar';
  // AmmountSpent

  public AmmountSpentElements = 7;
  public AmmountSpentData1: Array<number> = this.dataAmountSpent;
  public AmmountSpentData2: Array<number> = [];
  public AmmountSpentData3: Array<number> = [];

  public AmmountSpentData: Array<any> = [
    {
      data: this.AmmountSpentData1,
      label: 'Current'
    },
    {
      data: this.AmmountSpentData3,
      label: 'Expected'
    }
  ];
  /* tslint:disable:max-line-length */
  public AmmountSpentLabels: Array<any> = this.dates;
  /* tslint:enable:max-line-length */
  public AmmountSpentOptions: any = {
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
  public AmmountSpentColours: Array<any> = [
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
  public AmmountSpentLegend = false;
  public AmmountSpentType = 'line';
//Link Clicks

  public LinkClicksElements = 7;
  public LinkClicksData1: Array<number> = this.dataLinkClicks;
  public LinkClicksData2: Array<number> = [];
  public LinkClicksData3: Array<number> = [];

  public LinkClicksData: Array<any> = [
    {
      data: this.LinkClicksData1,
      label: 'Current'
    },
    {
      data: this.AmmountSpentData3,
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

  ngOnInit(): void {

    this.getCampaignsByUser();

    // generate random values for mainChart
    for (let i = 0; i <= this.AmmountSpentElements; i++) {

      this.AmmountSpentData3.push(65);
    }
  }

  getCampaignsByUser(){
    const asset = this.Route.snapshot.paramMap.get('id');
    this.Principal.getAssetReport(asset).subscribe((data: any[]) => {
      this.kpis = data;
      this.prepareData(this.kpis);
    });
  }

  prepareData(kpis) {
    for (const kpi of kpis) {
      this.dates.push(kpi.fecha_cracion);
      this.dataReach.push(kpi.reach);
      this.dataBudget.push(kpi.budget);
      this.dataCostPerResult.push(kpi.cost_per_result);
      this.dataImpressions.push(kpi.impressions);
      this.dataEstimatedAddRecall.push(kpi.estimated_add_recall);
      this.dataAmountSpent.push(kpi.ammount_spent);
      this.dataLinkClicks.push(kpi.link_clicks);
      console.log(kpi.link_clicks);

    }

  }

}
