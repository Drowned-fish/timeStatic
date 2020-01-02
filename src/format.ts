const DAY = 24 * 60 *60;
const HOUR = 60 * 60;
const MINUTE = 60;
export function format(time: number): string {
    let secs: number = parseInt(time/1000 + '', 10);
    let days: number = parseInt(secs/DAY + '', 10);
    let hours: number = parseInt((secs - days * DAY)/HOUR + '', 10);
    let minutes: number = parseInt((secs - days * DAY - hours * HOUR)/MINUTE + '', 10);
    let seconds: number = secs % 60;
    let res: string = '';
    if (days) {
        res += days + '天';
    }
    if (hours) {
        res += hours + '时';
    }
    if (minutes) {
        res += minutes + '分';
    }
    if (seconds) {
        res += seconds + '秒';
    }
    return res;
}