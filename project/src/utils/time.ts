export const timeInterval = () => {
    let message = ""
    let hour = new Date().getHours();
    if (hour <= 11) {
        message = '上午'
    } if (hour <= 14) {
        message = '中午'
    } if (hour <= 17) {
        message = '下午'
    } else {
        message = '晚上'
    }
    return message

}