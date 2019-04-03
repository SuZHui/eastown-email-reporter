import { render } from 'ejs';
import * as fs from 'fs';
import { IDayResultData, IWeekResultData } from './ResultGenerator';

export class TemplateParser {

	/**
	 * 周结果模板解析, 返回字符串
	 */
	parseWeekTemplate(weekData: IWeekResultData) {
		const temp = fs.readFileSync('src/temp/week.ejs');
		return render(temp.toString())
	}

	/**
	 * 模板日结果解析, 返回字符串
	 */
	parseDayTemplate(dayData: IDayResultData) {
		const temp = fs.readFileSync('src/temp/day.ejs');
		return render(temp.toString())
	}
}


