export const _getHistoryTime = () => {
    const time = new Date();
    const formatAMPM = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = ampm + " " + hours + ":" + minutes;
        return strTime;
    };
    const getYYYMMDD = new Date()
        .toLocaleDateString()
        .replace(/\./g, "")
        .replace(/\s/g, "-");
    const _currentTime = formatAMPM(time);

    return getYYYMMDD + ", " + _currentTime;
};
