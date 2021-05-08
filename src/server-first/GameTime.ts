import { ISignal, SignalDispatcher } from "strongly-typed-events";

import TimeFlow from "./TimeFlow";

class GameTime {
  private onTimeChangedSignal = new SignalDispatcher();
  private onTimeChangedLiteSignal = new SignalDispatcher();
  private onFlowChangedSignal = new SignalDispatcher();

  private timeFlow: TimeFlow = TimeFlow.Stopped;
  public time: Date = new Date();

  private inverseFrameRate: number = 1.0 / 30.0;
  private maximalSimulationUnit: number = 1.0;
  private lastFrameSimulationTime: number = Date.now();

  public get onTimeChanged():ISignal {
    return this.onTimeChangedSignal.asEvent();
  }

  public get onTimeChangedLite():ISignal {
    return this.onTimeChangedLiteSignal.asEvent();
  }

  public get onFlowChanged():ISignal {
    return this.onFlowChangedSignal.asEvent();
  }

  public get flow(): TimeFlow {
    return this.timeFlow;
  }

  public set flow(flow: TimeFlow) {
    if (this.timeFlow !== flow) {
      this.timeFlow = flow;
      this.onFlowChangedSignal.dispatch();
    }
  }

  public simulate(delta: number) {
    this.time.setSeconds(this.time.getSeconds() + delta);
    this.onTimeChangedSignal.dispatch();
  }

  public update() {
    const nowSimulationTime = Date.now();
    const changeSimulationTime = (nowSimulationTime - this.lastFrameSimulationTime) / 1000.0;
    let changeGameTime = changeSimulationTime * this.timeFlow.speed;

    if (changeGameTime > 0.0) {
      while (changeGameTime >= this.maximalSimulationUnit) {
        this.simulate(this.maximalSimulationUnit);
        changeGameTime -= this.maximalSimulationUnit;
      }

      if (changeGameTime > 0.0) {
        this.simulate(changeGameTime);
      }
      this.onTimeChangedLiteSignal.dispatch();
    }

    this.lastFrameSimulationTime = nowSimulationTime;
  }

  public constructor() {
    setInterval(() => this.update(), this.inverseFrameRate * 1000.0);
  }

}

export default new GameTime();