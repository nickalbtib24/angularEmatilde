import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ActivatedRoute } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-asset',
  templateUrl: './dashboard-asset.component.html',
  styleUrls: ['./dashboard-asset.component.css']
})
export class DashboardAssetComponent implements OnInit {

  active = 1;

  public radioModel = 'Month';

  public dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;
  private kpis = [];
  private dates = [];
  private dataReach = [];
  private dataBudget = [];
  private dataCostPerResult = [];
  private dataImpressions = [];
  private dataEstimatedAddRecall = [];
  private dataAmountSpent = [];
  private dataLinkClicks = [];

  // tslint:disable-next-line: max-line-length
  public toolTipImpressions = 'Impressions are considered the times the ad instance is shown on the screen for the first time. (Example: If a person sees an ad, scroll down, and then return to the same ad, it will count as one impression. If a person sees an ad twice in the same day, it will count as two impressions.) ';
  // tslint:disable-next-line: max-line-length
  public toolTipCostPerResult = 'The cost per result indicates how profitable it was to achieve the goals you established in your asset, it is calculated by dividing the total amount spent by the number of results.';

  public toolTipAmountSpent = 'Total estimated amount of money you spent on your asset';

  // tslint:disable-next-line: max-line-length
  public toolTipLinkClicks = 'The link clicks metric indicates the number of clicks on ad links that direct you to specific destinations or experiences.';

  // tslint:disable-next-line: max-line-length
  public toolTipReach = 'The reach indicates the number of people who saw your ads at least once, this can be affected by the current budget.';
  public reportingDate = '';
  public information = false;
  public alert = false;
  public range: any;
  constructor(
    private Route: ActivatedRoute,
    private Principal: PrincipalService,
    private dialog: MatDialog,
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
        },
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 7,
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
  public ImpressionsData: Array<any> = [
    {
      data: this.dataImpressions,
      label: 'Impressions'
    }
  ];
  public ImpressionsLabels: Array<any> = this.dates;
  public ImpressionsOptions: any = {
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
        }, scaleLabel: {
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
          display: false
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
    },

  };
  public ImpressionsColours: Array<any> = [
    {
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public ImpressionsLegend = false;
  public ImpressionsType = 'line';
  //Ammount Spent

  public AmmountSpentData: Array<any> = [
    {
      data: this.dataAmountSpent,
      label: 'Ammount Spent'
    }
  ];
  public AmmountSpentLabels: Array<any> = this.dates;
  public AmmountSpentOptions: any = {
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
        }, scaleLabel: {
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
        },
        scaleLabel: {
          display: true,
          labelString: 'USD',
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
    },

  };
  public AmmountSpentColours: Array<any> = [
    {
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public AmmountSpentLegend = false;
  public AmmountSpentType = 'line';


  // Result
  public CostPerResultData: Array<any> = [
    {
      data: this.dataCostPerResult,
      label: 'Cost Per Result'
    }
  ];
  public CostPerResultLabels: Array<any> = this.dates;
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
          labelString: 'USD',
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
  public CostPerResultColours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public CostPerResultLegend = false;
  public CostPerResultType = 'line';

// EstimatedAddRecall

public LinkClicksData: Array<any> = [
  {
    data: this.dataLinkClicks,
    label: 'Link Clicks',
    barPercentage: 0.6,
  }
];
public LinkClicksLabels: Array<any> = this.dates;
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
        max: undefined
      }, scaleLabel: {
        display: true,
        labelString: 'Link Clicks',
        fontColor: 'white',
      }
    }]
  },
  legend: {
    display: false
  }
};
public LinkClicksColours: Array<any> = [
  {
    backgroundColor: 'rgba(255,255,255,.3)',
    borderWidth: 0
  }
];
public LinkClicksLegend = false;
public LinkClicksType = 'bar';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    const observable = new Observable(this.myObservable);
    this.showProgressSpinnerUntilExecuted(observable);
    this.getAsstesByCampaign();
    this.ImpressionsOptions.scales.yAxes[0].ticks.max = undefined;
    this.CostPerResultOptions.scales.yAxes[0].ticks.max = undefined;
    this.AmmountSpentOptions.scales.yAxes[0].ticks.max = undefined;
    this.LinkClicksOptions.scales.yAxes[0].ticks.max = undefined;
    this.ReachOptions.scales.yAxes[0].ticks.max = undefined;
  }

  public getAsstesByCampaign() {
    const asset = this.Route.snapshot.paramMap.get('id');
    this.Principal.getAssetReport(asset).subscribe((data: any[]) => {
      this.kpis = data;
      this.dialog.closeAll();
      this.prepareData(this.kpis);
    });
  }

  public prepareData(kpis) {
    if (kpis.length === 0) {
      this.information = false;
      this.alert = true;
    } else {
      this.information = true;
      for (const kpi of kpis) {
        this.dates.push(kpi.fecha_cracion);
        this.dataImpressions.push(kpi.impressions);
        this.dataCostPerResult.push(kpi.cost_per_result);


        this.dataReach.push(kpi.reach);
        this.dataEstimatedAddRecall.push(kpi.estimated_add_recall);
        this.dataAmountSpent.push(kpi.ammount_spent);
        this.dataLinkClicks.push(kpi.link_clicks);
        console.log(kpi.link_clicks);
      }
      this.reportingDate = kpis[kpis.length - 1].fecha_cracion;

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
          newDataImpressions[j] = this.dataImpressions[pos];
          newDataCostPerResult[j] = this.dataCostPerResult[pos];
          newDataAmmountSpent[j] = this.dataAmountSpent[pos];
          newDataLinkClicks[j] = this.dataLinkClicks[pos];
          pos ++;
        }
      }
    }
    this.fillBlankData(newDataReach);
    this.fillBlankData(newDataImpressions);
    this.fillBlankData(newDataCostPerResult);
    this.fillBlankData(newDataLinkClicks);
    this.fillBlankData(newDataAmmountSpent);

    this.ReachData[0].data = newDataReach;
    this.ImpressionsData[0].data = newDataImpressions;
    this.CostPerResultData[0].data = newDataCostPerResult;
    this.LinkClicksData[0].data = newDataLinkClicks;
    this.AmmountSpentData[0].data = newDataAmmountSpent;

    this.ReachLabels = newDates;
    this.ImpressionsLabels = newDates;
    this.CostPerResultLabels = newDates;
    this.LinkClicksLabels = newDates;
    this.AmmountSpentLabels = newDates;
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
