
export type PerformanceMetricScore = -3 | -2 | -1 | 1 | 2 | 3;

export interface PerformanceMetricsObject {
  [key: string]: PerformanceMetricScore
}

export default class ClassPerformanceMetric {

  public static AOEBurst = new ClassPerformanceMetric('aoeBurst', 'AOE burst');
  public static AOEDamageOutput = new ClassPerformanceMetric('aoeDamageOutput', 'AOE damage output');
  public static CleaveDamageOutput = new ClassPerformanceMetric('cleaveDamageOutput', 'Cleave damage output');
  public static ItemLevelScaling = new ClassPerformanceMetric('itemLevelScaling', 'Item level scaling');
  public static Mobility = new ClassPerformanceMetric('mobility', 'Mobility');
  public static SingleTargetBurst = new ClassPerformanceMetric('singleTargetBurst', 'Single target burst');
  public static SingleTargetDamageOutput = new ClassPerformanceMetric('singleTargetDamageOutput', 'Single target damage output');
  public static Survivability = new ClassPerformanceMetric('survivability', 'Survivability');
  public static SustainedDamageProfile = new ClassPerformanceMetric('sustainedDamageProfile', 'Sustained damage profile');
  public static ThreatManagement = new ClassPerformanceMetric('threatManagement', 'Threat management');
  public static Utility = new ClassPerformanceMetric('utility', 'Utility');

  public static DPSMetrics : ClassPerformanceMetric[] = [
    ClassPerformanceMetric.AOEBurst, ClassPerformanceMetric.AOEDamageOutput, ClassPerformanceMetric.CleaveDamageOutput, ClassPerformanceMetric.ItemLevelScaling , ClassPerformanceMetric.Mobility , ClassPerformanceMetric.SingleTargetBurst , ClassPerformanceMetric.SingleTargetDamageOutput , ClassPerformanceMetric.Survivability , ClassPerformanceMetric.SustainedDamageProfile , ClassPerformanceMetric.ThreatManagement, ClassPerformanceMetric.Utility
  ];

  private constructor(public objectKey: string, public displayName: string) {
  }
}

export type DPSPerformanceMetricsObject = PerformanceMetricsObject & {
  aoeBurst: PerformanceMetricScore;
  aoeDamageOutput: PerformanceMetricScore;
  cleaveDamageOutput: PerformanceMetricScore;
  itemLevelScaling: PerformanceMetricScore;
  mobility: PerformanceMetricScore;
  singleTargetBurst: PerformanceMetricScore;
  singleTargetDamageOutput: PerformanceMetricScore;
  survivability: PerformanceMetricScore;
  sustainedDamageProfile: PerformanceMetricScore;
  threatManagement: PerformanceMetricScore;
  utility: PerformanceMetricScore;
}