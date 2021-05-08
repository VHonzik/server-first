export default class TimeFlow {
  public static Stopped = new TimeFlow(0);
  public static Normal = new TimeFlow(60 * 1);
  public static Fast = new TimeFlow(60 * 5);
  public static SuperFast = new TimeFlow(60 * 24);

  public static timeFlows: TimeFlow[] = [TimeFlow.Stopped, TimeFlow.Normal, TimeFlow.Fast, TimeFlow.SuperFast];

  private constructor(public speed: number) {
  }
}