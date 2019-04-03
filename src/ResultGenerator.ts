import { result } from './config';

export class ResultGenerator {
	private today: Date;
	constructor() {
		this.today = new Date();
	}

	/**
	 * 判断是否为每周的最后一个工作日,
	 * 默认是周五
	 */
	private get isWeekEnd(): boolean {
		return this.today.getDay() === 5;
	}

	/**
	 * 生成数据
	 */
	makeData(): IWeekResultData | IDayResultData {
		if (this.isWeekEnd) {
			// TODO: 生成周结果
			return this.generateWeekData();
		} else {
			// TODO: 生成日结果
			return this.generateDayData();
		}
	}

	// 生成周结果数据
	private generateWeekData(): IWeekResultData {
		const resultList = result.week;

		return {
			today: this.today,
			nextDay: getOtherDay(this.today, 3),
			todayResult: [],
			nextDayPlan: [],
			weekStart: getOtherDay(this.today, -5),
			weekEnd: this.today,
			weekResult: [],
			nextWeekStart: getOtherDay(this.today, 3),
			nextWeekEnd: getOtherDay(this.today, 7),
			nextWeekPlan: [],
		}
	}

	// 生成日结果数据
	private generateDayData(): IDayResultData {
		return {
			today: this.today,
			nextDay: getOtherDay(this.today, 1),
			todayResult: [],
			nextDayPlan: [],
		}
	}
}

/**
 * 根据日期获取相应的对应操作日期
 * @param baseDay 初始日期
 * @param calc 对baseDay进行加减 获得的日期
 */
function getOtherDay(baseDay: Date = new Date(), calc: number = 0) {
	return new Date(baseDay.getFullYear(), baseDay.getMonth(), baseDay.getDate() + calc);
}

// 周结果数据
export interface IWeekResultData extends IDayResultData {
	// 周起始日期
	weekStart: Date;
	// 周结束日期
	weekEnd: Date;
	weekResult: string[];
	// 下周起始日期
	nextWeekStart: Date;
	// 下周结束日期
	nextWeekEnd: Date;
	nextWeekPlan: string[];
}

// 日结果数据
export interface IDayResultData {
	today: Date;
	nextDay: Date;
	todayResult: string[];
	nextDayPlan: string[];
}
