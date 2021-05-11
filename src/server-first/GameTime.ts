import { ISignal, SignalDispatcher } from "strongly-typed-events";

import TimeFlow from "./TimeFlow";

type TimeCallback = {
  time: Date,
  callback: (this: void) => void
}

function TimeCallbackReverseComparison(timeCallbackA: TimeCallback, timeCallbackB: TimeCallback) : number {
  const diff = timeCallbackB.time.getTime() - timeCallbackA.time.getTime();
  return Math.sign(diff);
}

class GameTime {
  public time: Date = new Date();

  private onTimeChangedSignal = new SignalDispatcher();
  private onFlowChangedSignal = new SignalDispatcher();

  private timeFlow: TimeFlow = TimeFlow.Stopped;

  private inverseFrameRate: number = 1.0 / 30.0;
  private maximalSimulationUnit: number = 1.0;
  private lastFrameSimulationTime: number = Date.now();

  private timeCallbacks: Array<TimeCallback> = [];

  public constructor() {
    setInterval(() => this.update(), this.inverseFrameRate * 1000.0);
  }

  public get onTimeChanged():ISignal {
    return this.onTimeChangedSignal.asEvent();
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
      this.onTimeChangedSignal.dispatch();

      this.evaluateTimeCallbacks();
    }

    this.lastFrameSimulationTime = nowSimulationTime;
  }

  public registerCallback(triggerTime: Date, callback: (this: void) => void) {
    this.timeCallbacks.push({ time: triggerTime, callback: callback });
    this.timeCallbacks.sort(TimeCallbackReverseComparison);
  }

  private evaluateTimeCallbacks() {
    for (let index = this.timeCallbacks.length - 1; index >= 0; index--) {
      let currentCallback = this.timeCallbacks[index];
      if (currentCallback.time <= this.time) {
        currentCallback.callback();
        this.timeCallbacks.pop();
      } else {
        break;
      }
    }
  }
}

export default new GameTime();